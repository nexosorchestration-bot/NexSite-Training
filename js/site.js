(function () {
  function getConfig() {
    return window.PORTAL_CONFIG || { org: {}, nav: [], docs: [] };
  }

  function text(value) {
    return value == null ? "" : String(value);
  }

  function sidebarMarkup(cfg, activeId) {
    var nav = cfg.nav || [];
    var docs = cfg.docs || [];
    var items = nav.concat(docs.map(function (doc) {
      return {
        id: doc.id,
        label: doc.navLabel || doc.title,
        icon: doc.icon || "Doc",
        href: doc.href
      };
    }));

    return items.map(function (item) {
      var active = item.id === activeId ? " active" : "";
      return (
        '<a class="nav-item' + active + '" href="' + item.href + '">' +
          '<span class="nav-icon">' + text(item.icon) + '</span>' +
          text(item.label) +
        "</a>"
      );
    }).join("");
  }

  function mobileToggle() {
    var toggle = document.getElementById("menu-toggle");
    var sidebar = document.getElementById("sidebar");
    if (!toggle || !sidebar) {
      return;
    }
    toggle.addEventListener("click", function () {
      var open = sidebar.classList.toggle("open");
      toggle.classList.toggle("open", open);
    });
  }

  function renderShell(activeId, pageTitle) {
    var cfg = getConfig();
    var brand = document.getElementById("sb-name");
    var sub = document.getElementById("sb-sub");
    var nav = document.getElementById("sidebar-nav");
    var top = document.getElementById("topbar-title");
    var version = document.getElementById("tb-version");

    if (brand) {
      brand.textContent = text(cfg.org.name || "Portal");
    }
    if (sub) {
      sub.textContent = text(cfg.org.tagline || "");
    }
    if (nav) {
      nav.innerHTML = sidebarMarkup(cfg, activeId);
    }
    if (top) {
      top.textContent = text(pageTitle || "");
    }
    if (version) {
      version.textContent = "v" + text((cfg.org && cfg.org.version) || "1.0");
    }
    mobileToggle();
  }

  function renderDashboard() {
    var cfg = getConfig();
    renderShell("index", "Dashboard");

    var title = document.getElementById("dashboard-title");
    var intro = document.getElementById("dashboard-intro");
    var docCount = document.getElementById("stat-docs");
    var sectionCount = document.getElementById("stat-sections");
    var source = document.getElementById("stat-source");
    var cards = document.getElementById("doc-cards");

    if (title) {
      title.textContent = cfg.org.name || "Self-Learning Guidance";
    }
    if (intro) {
      intro.textContent = "Browse the imported guides below. Each markdown file is now its own page with section navigation.";
    }
    if (docCount) {
      docCount.textContent = String((cfg.docs || []).length);
    }
    if (sectionCount) {
      var totalSections = (cfg.docs || []).reduce(function (sum, doc) {
        return sum + ((doc.sections || []).length || 0);
      }, 0);
      sectionCount.textContent = String(totalSections);
    }
    if (source) {
      source.textContent = cfg.sourceDir || "Configured source";
    }
    if (cards) {
      cards.innerHTML = (cfg.docs || []).map(function (doc) {
        var badge = (doc.sections || []).length + " sections";
        return (
          '<a class="card card--link doc-card" href="' + doc.href + '">' +
            '<div class="doc-card-top">' +
              '<span class="doc-card-icon">' + text(doc.icon || "Doc") + '</span>' +
              '<span class="badge badge--neutral">' + badge + "</span>" +
            "</div>" +
            '<h3 class="doc-card-title">' + text(doc.title) + "</h3>" +
            '<p class="doc-card-desc">' + text(doc.summary || "") + "</p>" +
          "</a>"
        );
      }).join("");
    }
  }

  function setActiveSection(sectionIds) {
    var links = sectionIds.map(function (id) {
      return document.querySelector('.doc-nav-item[href="#' + id + '"]');
    }).filter(Boolean);

    var sections = sectionIds.map(function (id) {
      return document.getElementById(id);
    }).filter(Boolean);

    function update() {
      var activeIndex = 0;
      for (var i = 0; i < sections.length; i += 1) {
        if (sections[i].getBoundingClientRect().top <= 140) {
          activeIndex = i;
        }
      }
      links.forEach(function (link) {
        link.classList.remove("active");
      });
      if (links[activeIndex]) {
        links[activeIndex].classList.add("active");
      }
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  function renderDoc(docId) {
    var cfg = getConfig();
    var doc = (cfg.docs || []).find(function (entry) { return entry.id === docId; });
    if (!doc) {
      return;
    }

    renderShell(doc.id, doc.title);

    var title = document.getElementById("doc-title");
    var summary = document.getElementById("doc-summary");
    var meta = document.getElementById("doc-meta");
    var toc = document.getElementById("doc-nav");
    var content = document.getElementById("doc-content");

    if (title) {
      title.textContent = doc.title;
    }
    if (summary) {
      summary.textContent = doc.summary || "";
    }
    if (meta) {
      meta.textContent = (doc.sections || []).length + " sections";
    }
    if (toc) {
      toc.innerHTML = (doc.sections || []).map(function (section) {
        var level = section.level > 2 ? " doc-nav-item--sub" : "";
        return '<a class="doc-nav-item' + level + '" href="#' + section.id + '">' + text(section.title) + "</a>";
      }).join("");
    }
    if (content) {
      content.innerHTML = doc.contentHtml || "";
    }

    setActiveSection((doc.sections || []).map(function (section) { return section.id; }));
  }

  window.SelfLearningPortal = {
    renderDashboard: renderDashboard,
    renderDoc: renderDoc
  };

  document.addEventListener("DOMContentLoaded", function () {
    var body = document.body;
    if (!body) {
      return;
    }

    if (body.dataset.page === "dashboard") {
      renderDashboard();
      return;
    }

    if (body.dataset.page === "doc" && body.dataset.docId) {
      renderDoc(body.dataset.docId);
    }
  });
})();
