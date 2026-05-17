#!/usr/bin/env python3
"""Build static HTML pages from self-learning markdown files."""

from __future__ import annotations

import html
import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent
SOURCE_DIR = Path("/home/nexuscore/Documents/self_learning_guidance")
CONFIG_PATH = ROOT / "js" / "portal-config.js"
INDEX_PATH = ROOT / "index.html"

DOC_ORDER = [
    "python_beginner_to_intermediate_guide.md",
    "bash_beginner_to_intermediate_guide.md",
    "linux_power_user_beginner_to_intermediate_guide.md",
    "git_github_beginner_to_intermediate_guide.md",
    "web_development_handbook_p1.md",
    "web_development_handbook_p2.md",
    "universal_project_merge_guide.md",
    "system_diagnostic_commands.md",
]

LEGACY_PAGES = [
    "standards.html",
    "workflows.html",
    "editing.html",
    "booking.html",
    "deployment.html",
    "maintenance.html",
    "troubleshooting.html",
    "comms.html",
    "policies.html",
    "glossary.html",
    "emergency.html",
    "checklists.html",
    "quizzes.html",
    "quiz.html",
]

ICON_MAP = {
    "python_beginner_to_intermediate_guide.md": "Py",
    "bash_beginner_to_intermediate_guide.md": "Sh",
    "linux_power_user_beginner_to_intermediate_guide.md": "Linux",
    "git_github_beginner_to_intermediate_guide.md": "Git",
    "web_development_handbook_p1.md": "Web 1",
    "web_development_handbook_p2.md": "Web 2",
    "universal_project_merge_guide.md": "Merge",
    "system_diagnostic_commands.md": "Diag",
}


def slugify(value: str) -> str:
    value = value.strip().lower()
    value = re.sub(r"[^\w\s-]", "", value)
    value = re.sub(r"[\s_]+", "-", value)
    value = re.sub(r"-{2,}", "-", value)
    return value.strip("-") or "section"


def inline_markdown(text: str) -> str:
    text = html.escape(text, quote=False)
    text = re.sub(r"`([^`]+)`", r"<code>\1</code>", text)
    text = re.sub(r"\*\*([^*]+)\*\*", r"<strong>\1</strong>", text)
    text = re.sub(r"\*([^*]+)\*", r"<em>\1</em>", text)
    text = re.sub(r"\[([^\]]+)\]\(([^)]+)\)", r'<a href="\2">\1</a>', text)
    return text


def parse_markdown(text: str, page_slug: str) -> tuple[str, list[dict[str, str]], str, str]:
    lines = text.splitlines()
    has_markdown_headings = any(re.match(r"^(#{1,6})\s+", line) for line in lines)
    title = ""
    summary = ""
    sections: list[dict[str, str]] = []
    blocks: list[str] = []
    paragraph: list[str] = []
    list_items: list[str] = []
    list_tag = ""
    quote_lines: list[str] = []
    code_lines: list[str] = []
    in_code = False
    code_lang = ""
    section_ids: dict[str, int] = {}
    in_table = False

    def flush_paragraph() -> None:
        nonlocal paragraph, summary
        if not paragraph:
            return
        joined = " ".join(item.strip() for item in paragraph).strip()
        if joined:
            rendered = inline_markdown(joined)
            blocks.append(f"<p>{rendered}</p>")
            if not summary and title and not joined.startswith("Table of Contents"):
                summary = joined[:220]
        paragraph = []

    def flush_list() -> None:
        nonlocal list_items, list_tag
        if not list_items:
            return
        rendered = "".join(f"<li>{inline_markdown(item)}</li>" for item in list_items)
        blocks.append(f"<{list_tag}>{rendered}</{list_tag}>")
        list_items = []
        list_tag = ""

    def flush_quote() -> None:
        nonlocal quote_lines
        if not quote_lines:
            return
        content = " ".join(line.strip() for line in quote_lines if line.strip())
        blocks.append(f"<blockquote><p>{inline_markdown(content)}</p></blockquote>")
        quote_lines = []

    def flush_code() -> None:
        nonlocal code_lines, code_lang
        if not code_lines:
            return
        lang_attr = f' class="language-{html.escape(code_lang)}"' if code_lang else ""
        code = html.escape("\n".join(code_lines))
        blocks.append(f"<pre><code{lang_attr}>{code}</code></pre>")
        code_lines = []
        code_lang = ""

    def flush_table() -> None:
        nonlocal in_table
        if in_table:
            blocks.append("</tbody></table>")
            in_table = False

    def flush_all() -> None:
        flush_paragraph()
        flush_list()
        flush_quote()
        flush_table()

    for index, line in enumerate(lines):
        if line.startswith("```"):
            flush_paragraph()
            flush_list()
            flush_quote()
            if in_code:
                flush_code()
                in_code = False
            else:
                in_code = True
                code_lang = line[3:].strip()
            continue

        if in_code:
            code_lines.append(line)
            continue

        stripped = line.strip()

        if re.fullmatch(r"-{3,}", stripped):
            flush_all()
            blocks.append("<hr />")
            continue

        ad_hoc_heading = re.match(r"^(\d+)\.\s+(.+)$", stripped)
        next_line = lines[index + 1].strip() if index + 1 < len(lines) else ""
        if not has_markdown_headings and ad_hoc_heading and next_line == "":
            flush_all()
            level = 2
            heading_text = stripped
            clean_heading = inline_markdown(heading_text)
            if not title:
                title = heading_text
            base_id = slugify(heading_text)
            section_id = f"{page_slug}-{base_id}"
            count = section_ids.get(section_id, 0)
            section_ids[section_id] = count + 1
            if count:
                section_id = f"{section_id}-{count + 1}"
            sections.append({"id": section_id, "title": heading_text, "level": level})
            blocks.append(f'<h{level} id="{section_id}">{clean_heading}</h{level}>')
            continue

        heading_match = re.match(r"^(#{1,6})\s+(.*)$", line)
        if heading_match:
            flush_all()
            level = len(heading_match.group(1))
            heading_text = heading_match.group(2).strip()
            clean_heading = inline_markdown(heading_text)
            if not title and level == 1:
                title = heading_text
            base_id = slugify(heading_text)
            section_id = f"{page_slug}-{base_id}"
            count = section_ids.get(section_id, 0)
            section_ids[section_id] = count + 1
            if count:
                section_id = f"{section_id}-{count + 1}"
            if level == 2 and heading_text.lower() != "table of contents":
                sections.append({"id": section_id, "title": heading_text, "level": level})
            blocks.append(f'<h{level} id="{section_id}">{clean_heading}</h{level}>')
            continue

        table_match = stripped.startswith("|") and stripped.endswith("|")
        if table_match:
            flush_paragraph()
            flush_list()
            flush_quote()
            if re.match(r"^\|(?:\s*:?-+:?\s*\|)+$", stripped):
                continue
            cells = [cell.strip() for cell in stripped.strip("|").split("|")]
            if not in_table:
                blocks.append("<table><tbody>")
                in_table = True
            blocks.append(
                "<tr>" + "".join(f"<td>{inline_markdown(cell)}</td>" for cell in cells) + "</tr>"
            )
            continue
        else:
            flush_table()

        ordered = re.match(r"^\d+\.\s+(.*)$", stripped)
        unordered = re.match(r"^-\s+(.*)$", stripped)
        if ordered:
            flush_paragraph()
            flush_quote()
            if list_tag not in ("", "ol"):
                flush_list()
            list_tag = "ol"
            list_items.append(ordered.group(1))
            continue
        if unordered:
            flush_paragraph()
            flush_quote()
            if list_tag not in ("", "ul"):
                flush_list()
            list_tag = "ul"
            list_items.append(unordered.group(1))
            continue

        if stripped.startswith(">"):
            flush_paragraph()
            flush_list()
            quote_lines.append(stripped[1:].strip())
            continue

        if not stripped:
            flush_all()
            continue

        paragraph.append(stripped)

    if in_code:
        flush_code()
    flush_all()

    content_html = "\n".join(blocks)
    if not title:
        title = page_slug.replace("-", " ").title()
    if not summary:
        summary = f"Imported guide from {SOURCE_DIR.name}."
    return title, sections, summary, content_html


def shell_html(body: str, page_title: str, page_kind: str, doc_id: str = "") -> str:
    body_attrs = [f'data-page="{html.escape(page_kind)}"']
    if doc_id:
        body_attrs.append(f'data-doc-id="{html.escape(doc_id)}"')
    body_attr_text = " ".join(body_attrs)
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{html.escape(page_title)} | Self-Learning Guidance</title>
  <link rel="stylesheet" href="css/portal.css" />
</head>
<body {body_attr_text}>
  <div class="app">
    <aside class="sidebar" id="sidebar">
      <div class="sidebar-brand">
        <div class="sidebar-brand-icon">SL</div>
        <div>
          <div class="sidebar-brand-name" id="sb-name">Self-Learning Guidance</div>
          <div class="sidebar-brand-sub" id="sb-sub">Reference Portal</div>
        </div>
      </div>
      <nav class="sidebar-nav" id="sidebar-nav"></nav>
      <div class="sidebar-footer">Static content imported from markdown</div>
    </aside>

    <div class="main">
      <div class="topbar">
        <button class="menu-toggle" id="menu-toggle" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
        <div class="topbar-title" id="topbar-title">{html.escape(page_title)}</div>
        <div class="topbar-right">
          <span class="topbar-badge" id="tb-version">v1.0</span>
        </div>
      </div>
      <div class="page-content">
{body}
      </div>
    </div>
  </div>

  <script src="js/portal-config.js"></script>
  <script src="js/site.js"></script>
</body>
</html>
"""


def build_dashboard(docs: list[dict[str, object]]) -> None:
    body = """        <div class="page-header">
          <h1 id="dashboard-title">Self-Learning Guidance</h1>
          <p id="dashboard-intro"></p>
        </div>

        <div class="grid-3 dashboard-stats">
          <div class="card stat-card">
            <div class="stat-value" id="stat-docs">0</div>
            <div class="stat-label">Imported guides</div>
          </div>
          <div class="card stat-card">
            <div class="stat-value" id="stat-sections">0</div>
            <div class="stat-label">Document sections</div>
          </div>
          <div class="card stat-card">
            <div class="stat-value stat-value--path" id="stat-source"></div>
            <div class="stat-label">Source directory</div>
          </div>
        </div>

        <div class="section-label">Guide Library</div>
        <div class="grid-3" id="doc-cards"></div>"""
    INDEX_PATH.write_text(shell_html(body, "Dashboard", "dashboard"), encoding="utf-8")


def build_doc_page(doc: dict[str, object]) -> None:
    body = f"""        <div class="page-header">
          <h1 id="doc-title">{html.escape(str(doc["title"]))}</h1>
          <p id="doc-summary">{html.escape(str(doc["summary"]))}</p>
        </div>

        <div class="doc-layout">
          <nav class="doc-nav card">
            <div class="doc-nav-header">
              <span class="section-label">Sections</span>
              <span class="badge badge--neutral" id="doc-meta">{len(doc["sections"])} sections</span>
            </div>
            <div id="doc-nav"></div>
          </nav>
          <article class="doc-article card" id="doc-content"></article>
        </div>"""
    (ROOT / str(doc["href"])).write_text(
        shell_html(body, str(doc["title"]), "doc", str(doc["id"])),
        encoding="utf-8",
    )


def build_config(docs: list[dict[str, object]]) -> None:
    config = {
        "org": {
            "name": "Self-Learning Guidance",
            "tagline": "Reference Portal",
            "version": "1.0",
        },
        "sourceDir": str(SOURCE_DIR),
        "nav": [
            {"id": "index", "label": "Dashboard", "icon": "Home", "href": "index.html"}
        ],
        "docs": docs,
    }
    CONFIG_PATH.write_text(
        "window.PORTAL_CONFIG = " + json.dumps(config, ensure_ascii=True, indent=2) + ";\n",
        encoding="utf-8",
    )


def build_legacy_redirects() -> None:
    redirect_html = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="refresh" content="0; url=index.html" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Redirecting | Self-Learning Guidance</title>
  <link rel="stylesheet" href="css/portal.css" />
</head>
<body data-page="legacy">
  <main class="page-content" style="max-width:720px;margin:0 auto;padding-top:4rem;">
    <div class="card">
      <h1 style="margin-bottom:0.75rem;">This page moved</h1>
      <p style="margin-bottom:0.75rem;">The previous training content was replaced with the imported self-learning guidance library.</p>
      <p><a href="index.html">Open the dashboard</a>.</p>
    </div>
  </main>
</body>
</html>
"""
    for filename in LEGACY_PAGES:
        (ROOT / filename).write_text(redirect_html, encoding="utf-8")


def build() -> None:
    nav_label_map = {
        "python_beginner_to_intermediate_guide.md": "Python Guide",
        "bash_beginner_to_intermediate_guide.md": "Bash Guide",
        "linux_power_user_beginner_to_intermediate_guide.md": "Linux Guide",
        "git_github_beginner_to_intermediate_guide.md": "Git + GitHub",
        "web_development_handbook_p1.md": "Web Handbook P1",
        "web_development_handbook_p2.md": "Web Handbook P2",
        "universal_project_merge_guide.md": "Project Merge",
        "system_diagnostic_commands.md": "Diagnostics",
    }
    docs: list[dict[str, object]] = []
    for filename in DOC_ORDER:
        source_path = SOURCE_DIR / filename
        page_slug = slugify(source_path.stem)
        title, sections, summary, content_html = parse_markdown(
            source_path.read_text(encoding="utf-8"),
            page_slug,
        )
        doc = {
            "id": page_slug,
            "title": title,
            "navLabel": nav_label_map.get(filename, title),
            "summary": summary,
            "href": f"{page_slug}.html",
            "icon": ICON_MAP.get(filename, "Doc"),
            "sections": sections,
            "contentHtml": content_html,
        }
        docs.append(doc)
        build_doc_page(doc)

    build_config(docs)
    build_dashboard(docs)
    build_legacy_redirects()


if __name__ == "__main__":
    build()
