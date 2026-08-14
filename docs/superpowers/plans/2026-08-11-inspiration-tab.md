# Inspiration Tab Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a local template marketplace tab that searches, filters, favorites, and opens templates in the existing wheel page.

**Architecture:** Store immutable template content in `data/templates.js` and pure filtering helpers in `data/template-utils.js`. The new inspiration page owns presentation and local favorite state; the play page consumes a template ID and adapts its options into the existing wheel model.

**Tech Stack:** Native WeChat Mini Program, CommonJS JavaScript, WXML, WXSS, Node.js built-in test runner.

## Global Constraints

- No backend or network API.
- Bottom tabs are 首页｜灵感｜我的.
- Clicking a template opens the wheel immediately.
- Favorites use local key `templateFavorites`.
- Initial catalog contains 18 templates across 6 categories.

---

### Task 1: Template catalog and filtering

**Files:**
- Create: `data/templates.js`
- Create: `data/template-utils.js`
- Create: `tests/template-utils.test.js`

**Interfaces:**
- Produces: `templates`, `categories`, `filterTemplates(templates, category, keyword)`, and `sortTemplates(templates, sort)`.

- [ ] Write tests for catalog shape, keyword/category filtering, and hot sorting.
- [ ] Run `node --test tests/template-utils.test.js` and confirm failure because modules do not exist.
- [ ] Add the catalog and minimal pure helpers.
- [ ] Run the test and confirm it passes.

### Task 2: Inspiration page and tab navigation

**Files:**
- Create: `pages/inspiration/inspiration.js`
- Create: `pages/inspiration/inspiration.json`
- Create: `pages/inspiration/inspiration.wxml`
- Create: `pages/inspiration/inspiration.wxss`
- Modify: `app.json`

**Interfaces:**
- Consumes: template catalog and helpers from Task 1.
- Produces: search, category filtering, hot/latest/all sorting, local favorites, and template navigation.

- [ ] Add a source-level page contract test and confirm it fails before the page exists.
- [ ] Implement the page and add it to the center tab.
- [ ] Run the source contract and utility tests.

### Task 3: Load templates in the play page

**Files:**
- Modify: `pages/play/play.js`
- Modify: `tests/template-utils.test.js`

**Interfaces:**
- Consumes: `getTemplateById(id)` from the template module.
- Produces: template-specific title, mode, and options on `/pages/play/play?templateId=<id>`.

- [ ] Add a failing test for template lookup and option adaptation.
- [ ] Export the lookup/adaptation helpers and connect template loading in `onLoad`.
- [ ] Run all Node tests and inspect changed files for syntax errors.

### Task 4: End-to-end verification

**Files:**
- Verify: `app.json`, `pages/inspiration/*`, `pages/play/play.js`, `data/templates.js`

- [ ] Parse `app.json` and all page JSON files.
- [ ] Run `node --test tests/*.test.js`.
- [ ] Confirm catalog count, categories, tab order, navigation parameter, favorites key, and fallback behavior.
