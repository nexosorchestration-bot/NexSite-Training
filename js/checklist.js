/**
 * checklist.js — Config-driven interactive checklists with localStorage persistence.
 * State is per-device (no backend). Each item's checked state persists across sessions.
 */

(function () {
  "use strict";

  const STORAGE_KEY = "nexsite_checklists";

  // ── Storage ───────────────────────────────────────────────────────────────

  function loadState() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); } catch { return {}; }
  }

  function saveState(state) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function isChecked(checklistId, itemId) {
    return !!(loadState()[checklistId] || {})[itemId];
  }

  function setChecked(checklistId, itemId, value) {
    const state = loadState();
    if (!state[checklistId]) state[checklistId] = {};
    state[checklistId][itemId] = value;
    saveState(state);
  }

  function getProgress(checklistId, items) {
    const state = loadState()[checklistId] || {};
    const done = items.filter(i => state[i.id]).length;
    return { done, total: items.length, pct: items.length ? Math.round((done / items.length) * 100) : 0 };
  }

  function resetChecklist(checklistId) {
    const state = loadState();
    delete state[checklistId];
    saveState(state);
  }

  // ── Checklist Card (compact, for dashboard/overview) ─────────────────────

  function buildChecklistCard(cl, preview) {
    const p = getProgress(cl.id, cl.items);
    const items = preview ? cl.items.slice(0, 4) : cl.items;

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="checklist-card-title">${cl.title}</div>
      <div class="checklist-card-desc">${cl.description}</div>
      <div class="checklist-card-progress">
        <div class="progress-wrap">
          <div class="progress-bar ${p.pct === 100 ? "progress-bar--green" : ""}" style="width:${p.pct}%"></div>
        </div>
        <div class="progress-label">${p.done} / ${p.total} complete</div>
      </div>
      <div class="checklist-items" id="cl-items-${cl.id}"></div>
      ${preview && cl.items.length > 4 ? `<div style="font-size:0.75rem;color:var(--color-text-3);margin-top:0.5rem">+${cl.items.length - 4} more items</div>` : ""}
      <div class="checklist-card-footer">
        <a class="btn btn--outline btn--sm" href="checklists.html?id=${cl.id}">Open Full Checklist</a>
      </div>`;

    const itemWrap = card.querySelector(`#cl-items-${cl.id}`);
    items.forEach(item => itemWrap.appendChild(buildItem(cl.id, item, card)));
    return card;
  }

  function buildItem(checklistId, item, cardEl) {
    const checked = isChecked(checklistId, item.id);
    const div = document.createElement("div");
    div.className = "checklist-item" + (checked ? " done" : "");
    div.innerHTML = `
      <div class="checklist-checkbox">
        <span class="checklist-checkmark">✓</span>
      </div>
      <div class="checklist-item-text">${item.text}</div>`;

    div.addEventListener("click", function () {
      const nowChecked = !isChecked(checklistId, item.id);
      setChecked(checklistId, item.id, nowChecked);
      div.classList.toggle("done", nowChecked);
      if (cardEl) updateCardProgress(checklistId, cardEl);
    });
    return div;
  }

  function updateCardProgress(checklistId, cardEl) {
    const cfg = window.PORTAL_CONFIG || {};
    const cl = (cfg.checklists || []).find(c => c.id === checklistId);
    if (!cl) return;
    const p = getProgress(cl.id, cl.items);
    const bar = cardEl.querySelector(".progress-bar");
    const label = cardEl.querySelector(".progress-label");
    if (bar) { bar.style.width = p.pct + "%"; bar.classList.toggle("progress-bar--green", p.pct === 100); }
    if (label) label.textContent = `${p.done} / ${p.total} complete`;
  }

  // ── Full Checklist Page ───────────────────────────────────────────────────

  function renderFullChecklist(checklistId, mountId) {
    const cfg = window.PORTAL_CONFIG || {};
    const cl = (cfg.checklists || []).find(c => c.id === checklistId);
    const mount = document.getElementById(mountId || "checklist-mount");
    if (!cl || !mount) return;

    function rebuild() {
      const p = getProgress(cl.id, cl.items);
      mount.innerHTML = "";

      const wrap = document.createElement("div");
      wrap.className = "checklist-full";
      wrap.innerHTML = `
        <div class="checklist-full-header">
          <div class="checklist-full-title">${cl.title}</div>
          <div class="checklist-full-desc">${cl.description}</div>
          <div class="checklist-card-progress">
            <div class="progress-wrap">
              <div class="progress-bar ${p.pct === 100 ? "progress-bar--green" : ""}" style="width:${p.pct}%"></div>
            </div>
            <div class="progress-label">${p.done} / ${p.total} complete</div>
          </div>
        </div>
        <div class="checklist-full-items" id="full-items"></div>
        <div class="checklist-full-footer">
          <span>${p.pct === 100 ? "✓ All complete" : `${p.total - p.done} remaining`}</span>
          <button class="btn btn--ghost btn--sm" id="reset-btn">Reset</button>
        </div>`;

      const itemWrap = wrap.querySelector("#full-items");
      cl.items.forEach(item => {
        const el = buildItem(cl.id, item, wrap);
        itemWrap.appendChild(el);
      });

      wrap.querySelector("#reset-btn").addEventListener("click", function () {
        if (!confirm("Reset all items in this checklist?")) return;
        resetChecklist(cl.id);
        rebuild();
      });

      mount.appendChild(wrap);
    }

    rebuild();
  }

  // ── Checklist List (overview page) ───────────────────────────────────────

  function renderChecklistList(containerId) {
    const cfg = window.PORTAL_CONFIG || {};
    const lists = cfg.checklists || [];
    const wrap = document.getElementById(containerId || "checklist-list");
    if (!wrap) return;
    wrap.innerHTML = "";
    lists.forEach(cl => wrap.appendChild(buildChecklistCard(cl, true)));
  }

  // ── Overall progress (for dashboard) ─────────────────────────────────────

  function getTotalProgress() {
    const cfg = window.PORTAL_CONFIG || {};
    let total = 0, done = 0;
    (cfg.checklists || []).forEach(cl => {
      const p = getProgress(cl.id, cl.items);
      total += p.total;
      done  += p.done;
    });
    return { done, total, pct: total ? Math.round((done / total) * 100) : 0 };
  }

  function getQuizProgress() {
    const cfg = window.PORTAL_CONFIG || {};
    const quizzes = cfg.quizzes || [];
    const results = (window.NexQuiz || { loadResults: () => ({}) }).loadResults();
    const passed  = quizzes.filter(q => (results[q.id] || {}).passed).length;
    return { passed, total: quizzes.length };
  }

  // ── Public API ────────────────────────────────────────────────────────────

  window.NexChecklist = {
    renderChecklistList,
    renderFullChecklist,
    buildChecklistCard,
    getProgress,
    getTotalProgress,
    getQuizProgress
  };

})();
