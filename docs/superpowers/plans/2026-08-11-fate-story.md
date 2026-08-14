# Fate Story Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the template marketplace with a local condition-driven fate story generator.

**Architecture:** Keep story materials and generation as pure CommonJS functions in `data/fate-story.js`. The existing inspiration page becomes the controller and presentation layer for input, results, local history, and poster generation.

**Tech Stack:** Native WeChat Mini Program, CommonJS JavaScript, WXML, WXSS, Canvas 2D API, Node.js built-in test runner.

## Global Constraints

- No backend or network APIs.
- Tab label is 剧情.
- Inputs are companion, mood, and available time.
- Results regenerate only as a complete set.
- Accepted stories use local key `fateStoryHistory`.
- Page shows the latest 3 accepted stories.

---

### Task 1: Pure story generator

**Files:** Create `data/fate-story.js`; create `tests/fate-story.test.js`.

- [ ] Test that generated stories satisfy time constraints and contain all required fields.
- [ ] Test deterministic selection through an injected random function.
- [ ] Run the test and observe failure because the module does not exist.
- [ ] Implement material filtering, fallback, and story composition.
- [ ] Run tests and confirm they pass.

### Task 2: Replace inspiration UI

**Files:** Replace `pages/inspiration/inspiration.js`, `.wxml`, and `.wxss`; modify `app.json`.

- [ ] Implement three single-choice sections with sensible defaults.
- [ ] Add generate, regenerate, accept, poster, and latest-history interactions.
- [ ] Rename the tab to 剧情 and remove template marketplace dependencies.

### Task 3: Verify

**Files:** Verify all changed JSON and JavaScript files.

- [ ] Run all Node tests.
- [ ] Parse app and page JSON.
- [ ] Syntax-check all JavaScript files.
- [ ] Inspect storage limit, duplicate protection, canvas ID, and tab label.
