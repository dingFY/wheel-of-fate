# Story Poster QR Code Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the existing mini-program QR code to the saved fate-story poster without covering the story card.

**Architecture:** Keep poster rendering inside the existing `shareStory()` page method. Expand the canvas to 1040px, draw `/images/mini-qrcode.jpg` in a white-backed footer at the lower right, and export at the existing 2x density. Exercise the real page definition through a Canvas test double that records drawing calls.

**Tech Stack:** Native WeChat Mini Program Canvas API, CommonJS JavaScript, Node.js built-in test runner.

## Global Constraints

- Canvas width remains exactly 750px and height becomes exactly 1040px.
- The existing title and 560px story card retain their dimensions and positions.
- Reuse `/images/mini-qrcode.jpg`; do not add another QR asset.
- Draw a 126px square QR code below the story card in the right-side footer.
- Export at 1500px by 2080px.
- Do not change the in-page result card, normal wheel poster, QR content, or sharing entry point.

---

### Task 1: Add QR Code To Fate-Story Poster

**Files:**
- Create: `tests/inspiration-poster.test.js`
- Modify: `pages/inspiration/inspiration.js:117-170`

**Interfaces:**
- Consumes: existing local asset `/images/mini-qrcode.jpg` and page method `shareStory()`.
- Produces: `shareStory()` Canvas output with a 1040px canvas and a QR `drawImage(path, x, y, width, height)` call.

- [ ] **Step 1: Write the failing page-level Canvas test**

Create a Canvas proxy that records `drawImage()` and `wx.canvasToTempFilePath()` arguments, load `pages/inspiration/inspiration.js` through a captured global `Page`, populate a complete story fixture, and call `shareStory()`. Assert that the image path resolves to an existing file, the call uses width and height `126`, its `x` coordinate is in the right half, its `y` coordinate is at least `790`, and export height is `1040` with destination height `2080`.

- [ ] **Step 2: Run the focused test and verify RED**

Run: `node --test tests/inspiration-poster.test.js`

Expected: FAIL because `shareStory()` currently makes no `drawImage()` call and exports a 900px canvas.

- [ ] **Step 3: Implement the minimal poster layout change**

In `shareStory()`, set `canvasH` to `1040`. After the existing story card drawing, render a white backing rectangle and call:

```js
ctx.drawImage("/images/mini-qrcode.jpg", 548, 842, 126, 126);
```

Place the existing brand line and a short scan prompt in the left footer area. Leave the story card coordinates unchanged. The existing export expressions based on `canvasH` will then produce `height: 1040` and `destHeight: 2080`.

- [ ] **Step 4: Run focused and full tests and verify GREEN**

Run: `node --test tests/inspiration-poster.test.js`

Expected: PASS.

Run: `node --test`

Expected: all tests PASS with zero failures.

- [ ] **Step 5: Inspect the final diff**

Run: `git diff --check` and `git diff -- pages/inspiration/inspiration.js tests/inspiration-poster.test.js`.

Expected: no whitespace errors; only the fate-story poster implementation and its regression test are present.
