const test = require("node:test");
const assert = require("node:assert/strict");

const { templates, categories, getTemplateById, makeTemplateOptions } = require("../data/templates");
const { filterTemplates, sortTemplates } = require("../data/template-utils");

test("catalog contains 18 templates across the six designed categories", () => {
  assert.equal(templates.length, 18);
  assert.deepEqual(categories, ["聚会", "情侣", "吃喝", "周末", "挑战", "破冰"]);
  categories.forEach(category => {
    assert.equal(templates.filter(item => item.category === category).length, 3);
  });
});

test("filterTemplates matches category and searches name or description", () => {
  assert.ok(filterTemplates(templates, "情侣", "约会").every(item => item.category === "情侣"));
  assert.ok(filterTemplates(templates, "", "奶茶").some(item => item.name.includes("奶茶")));
  assert.deepEqual(filterTemplates(templates, "挑战", "不存在的关键词"), []);
});

test("sortTemplates puts hotter templates first without mutating the catalog", () => {
  const originalFirst = templates[0].id;
  const sorted = sortTemplates(templates, "hot");
  assert.ok(sorted[0].heat >= sorted[sorted.length - 1].heat);
  assert.equal(templates[0].id, originalFirst);
});

test("template lookup and option adaptation produce wheel-ready data", () => {
  const template = getTemplateById("date-tonight");
  assert.equal(template.mode, "do");
  const options = makeTemplateOptions(template);
  assert.equal(options.length, template.options.length);
  assert.deepEqual(Object.keys(options[0]).sort(), ["icon", "id", "name"]);
});
