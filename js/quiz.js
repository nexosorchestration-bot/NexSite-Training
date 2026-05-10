/**
 * quiz.js — Config-driven quiz engine.
 * Reads quiz definitions from PORTAL_CONFIG.quizzes.
 * Persists completion state in localStorage.
 */

(function () {
  "use strict";

  const STORAGE_KEY = "nexsite_quiz_results";

  // ── Storage ───────────────────────────────────────────────────────────────

  function loadResults() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); } catch { return {}; }
  }

  function saveResult(quizId, score, passed) {
    const results = loadResults();
    results[quizId] = { score, passed, completedAt: new Date().toISOString() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(results));
  }

  function getResult(quizId) {
    return loadResults()[quizId] || null;
  }

  function clearResult(quizId) {
    const results = loadResults();
    delete results[quizId];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(results));
  }

  // ── Quiz Card List ────────────────────────────────────────────────────────

  function renderQuizList(containerId) {
    const cfg = window.PORTAL_CONFIG || {};
    const quizzes = cfg.quizzes || [];
    const wrap = document.getElementById(containerId || "quiz-list");
    if (!wrap) return;
    wrap.innerHTML = "";

    quizzes.forEach(quiz => {
      const result = getResult(quiz.id);
      const card = document.createElement("div");
      card.className = "card";

      let statusBadge = "";
      if (result) {
        statusBadge = result.passed
          ? `<span class="badge badge--green">Passed ${result.score}%</span>`
          : `<span class="badge badge--red">Failed ${result.score}%</span>`;
      }

      card.innerHTML = `
        <div class="quiz-card">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:0.5rem">
            <div class="quiz-card-title">${quiz.title}</div>
            ${statusBadge}
          </div>
          <div class="quiz-card-desc">${quiz.description}</div>
          <div class="quiz-card-meta">
            <span class="badge badge--neutral">${quiz.category}</span>
            <span style="font-size:0.75rem;color:var(--color-text-3)">${quiz.questions.length} questions</span>
            <span style="font-size:0.75rem;color:var(--color-text-3)">Pass: ${quiz.passingScore}%</span>
          </div>
          <div class="quiz-card-footer">
            <a class="btn btn--primary btn--sm" href="quiz.html?id=${quiz.id}">
              ${result ? "Retake Quiz" : "Start Quiz"}
            </a>
          </div>
        </div>`;
      wrap.appendChild(card);
    });
  }

  // ── Quiz Engine ───────────────────────────────────────────────────────────

  function runQuiz(quizId, mountId) {
    const cfg = window.PORTAL_CONFIG || {};
    const quiz = (cfg.quizzes || []).find(q => q.id === quizId);
    const mount = document.getElementById(mountId || "quiz-mount");
    if (!quiz || !mount) return;

    let current = 0;
    let answers  = {};
    const letters = ["A", "B", "C", "D", "E"];

    function render() {
      if (current >= quiz.questions.length) { showResult(); return; }
      const q = quiz.questions[current];
      const answered = answers[q.id] !== undefined;

      mount.innerHTML = `
        <div class="quiz-engine">
          <div class="quiz-header">
            <div class="quiz-progress-text">Question ${current + 1} of ${quiz.questions.length}</div>
            <div class="progress-wrap">
              <div class="progress-bar" style="width:${((current) / quiz.questions.length) * 100}%"></div>
            </div>
          </div>

          <div class="quiz-question-wrap">
            <div class="quiz-question-text">${q.text}</div>
            <div class="quiz-options" id="options-wrap">
              ${q.options.map((opt, i) => {
                let cls = "quiz-option";
                if (answered) {
                  cls += " disabled";
                  if (i === answers[q.id]) cls += (i === q.correct ? " correct" : " incorrect");
                  else if (i === q.correct) cls += " correct";
                } else {
                  cls += "";
                }
                return `<div class="${cls}" data-index="${i}">
                  <div class="quiz-option-letter">${letters[i]}</div>
                  <div class="quiz-option-text">${opt}</div>
                </div>`;
              }).join("")}
            </div>
            ${answered && q.explanation ? `
              <div class="quiz-explanation visible ${answers[q.id] === q.correct ? "quiz-explanation--correct" : "quiz-explanation--incorrect"}">
                ${answers[q.id] === q.correct ? "✓ Correct. " : "✗ Incorrect. "}${q.explanation}
              </div>` : ""}
          </div>

          <div class="quiz-nav">
            <button class="btn btn--ghost btn--sm" id="btn-prev" ${current === 0 ? "disabled" : ""}>← Previous</button>
            <div style="display:flex;gap:0.5rem">
              ${answered ? `<button class="btn btn--primary btn--sm" id="btn-next">
                ${current < quiz.questions.length - 1 ? "Next →" : "See Results"}
              </button>` : ""}
            </div>
          </div>
        </div>`;

      // option click
      if (!answered) {
        mount.querySelectorAll(".quiz-option").forEach(opt => {
          opt.addEventListener("click", function () {
            answers[q.id] = parseInt(this.dataset.index);
            render();
          });
        });
      }

      const nextBtn = mount.querySelector("#btn-next");
      if (nextBtn) nextBtn.addEventListener("click", () => { current++; render(); });

      const prevBtn = mount.querySelector("#btn-prev");
      if (prevBtn) prevBtn.addEventListener("click", () => { current--; render(); });
    }

    function showResult() {
      const total   = quiz.questions.length;
      const correct = quiz.questions.filter(q => answers[q.id] === q.correct).length;
      const score   = Math.round((correct / total) * 100);
      const passed  = score >= quiz.passingScore;
      saveResult(quiz.id, score, passed);

      mount.innerHTML = `
        <div class="quiz-result">
          <div class="quiz-result-score ${passed ? "quiz-result-pass" : "quiz-result-fail"}">${score}%</div>
          <div class="quiz-result-label">${correct} of ${total} correct</div>
          <span class="badge ${passed ? "badge--green" : "badge--red"}" style="margin-bottom:1.25rem">
            ${passed ? "Passed" : "Did not pass"} — ${quiz.passingScore}% required
          </span>
          <div style="display:flex;flex-direction:column;gap:0.6rem;margin-top:0.75rem">
            <button class="btn btn--outline" id="btn-review">Review Answers</button>
            <button class="btn btn--primary" id="btn-retake">Retake Quiz</button>
            <a class="btn btn--ghost" href="quizzes.html">← All Quizzes</a>
          </div>
        </div>`;

      mount.querySelector("#btn-retake").addEventListener("click", () => {
        current = 0; answers = {}; render();
      });
      mount.querySelector("#btn-review").addEventListener("click", () => {
        showReview();
      });
    }

    function showReview() {
      const reviewHTML = quiz.questions.map((q, i) => {
        const userAnswer = answers[q.id];
        const correct    = userAnswer === q.correct;
        return `
          <div style="margin-bottom:1.5rem">
            <div style="font-size:0.85rem;font-weight:600;margin-bottom:0.5rem">
              ${i + 1}. ${q.text}
            </div>
            <div class="quiz-explanation visible ${correct ? "quiz-explanation--correct" : "quiz-explanation--incorrect"}">
              ${correct ? "✓" : "✗"} You answered: <strong>${q.options[userAnswer] ?? "No answer"}</strong>.
              ${!correct ? `Correct: <strong>${q.options[q.correct]}</strong>. ` : ""}
              ${q.explanation}
            </div>
          </div>`;
      }).join("");

      mount.innerHTML = `
        <div style="max-width:680px">
          <div style="margin-bottom:1.5rem;display:flex;gap:0.75rem">
            <button class="btn btn--primary" id="btn-retake">Retake Quiz</button>
            <a class="btn btn--outline" href="quizzes.html">← All Quizzes</a>
          </div>
          ${reviewHTML}
        </div>`;

      mount.querySelector("#btn-retake").addEventListener("click", () => {
        current = 0; answers = {}; render();
      });
    }

    render();
  }

  // ── Public API ────────────────────────────────────────────────────────────

  window.NexQuiz = {
    renderQuizList,
    runQuiz,
    getResult,
    clearResult,
    loadResults
  };

})();
