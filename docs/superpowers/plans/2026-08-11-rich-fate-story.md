# Rich Fate Story Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade fate stories into condition-aware, themed long-form scripts with advanced settings and reusable history.

**Architecture:** `data/fate-story.js` owns presets, material constraints, tone selection, and pure generation. The inspiration page owns collapsed settings, rendering, persistence, history reopening, and poster creation.

**Tech Stack:** Native WeChat Mini Program, CommonJS, WXML, WXSS, Canvas 2D, Node test runner.

## Global Constraints

- Advanced settings are collapsed by default.
- Complete scripts contain role, goal, transport, place, food, activity, photo mission, surprise, ending, budget, duration, and narrative.
- Copy tone changes from the selected context.
- Accepted history stores full scripts and can reopen them.
- No backend.

---

### Task 1: Expand generator contract

- [ ] Add failing tests for all complete-script fields, advanced input retention, tone selection, and hard time/range constraints.
- [ ] Extend themed generation and run tests green.

### Task 2: Expand input and long-card UI

- [ ] Add collapsible weather, budget, range, and travel-context controls.
- [ ] Replace the short result with the complete long card.
- [ ] Make recent accepted scripts reopenable.

### Task 3: Expand poster and verify

- [ ] Render the main script fields to a taller poster canvas.
- [ ] Run all tests, JSON parsing, and JavaScript syntax checks.
