const test = require("node:test");
const assert = require("node:assert/strict");

const { generateFateStory, timeLevels, materials, extras, boldTripScenes, boldTripActivities } = require("../data/fate-story");

test("generateFateStory returns a complete story matching the selected time", () => {
  const story = generateFateStory({ companion: "情侣", mood: "想冒险", time: "半天" }, () => 0);
  assert.ok(story.id);
  assert.ok(story.title);
  assert.ok(story.place.text);
  assert.ok(story.food.text);
  assert.ok(story.activity.text);
  assert.ok(story.challenge.text);
  if (story.place.text && !story.activity.snackOnly) assert.ok(story.narrative.includes(story.place.text));
  [story.place, story.food, story.activity, story.challenge].forEach(item => {
    assert.ok(item.minTime <= timeLevels["半天"]);
  });
});

test("generateFateStory is deterministic when random is injected", () => {
  const input = { companion: "朋友", mood: "想热闹", time: "1小时" };
  const first = generateFateStory(input, () => 0);
  const second = generateFateStory(input, () => 0);
  assert.equal(first.title, second.title);
  assert.equal(first.narrative, second.narrative);
});

test("short time selections never choose long activities", () => {
  const story = generateFateStory({ companion: "自己", mood: "想治愈", time: "15分钟" }, () => 0.99);
  [story.place, story.food, story.activity, story.challenge].forEach(item => assert.equal(item.minTime, 1));
});

test("rich stories include every planned script section and retain advanced settings", () => {
  const input = { companion: "家人", mood: "想治愈", time: "半天", weather: "雨天", budget: "100元内", range: "同城", travelContext: "带娃" };
  const story = generateFateStory(input, () => 0);
  ["theme", "tone", "role", "goal", "transport", "place", "food", "activity", "photoMission", "surprise", "ending", "budgetText", "durationText", "narrative"].forEach(key => assert.ok(story[key], key));
  assert.equal(story.weather, "雨天");
  assert.equal(story.travelContext, "带娃");
});

test("tone changes with the selected social context", () => {
  assert.equal(generateFateStory({ companion: "情侣", mood: "想治愈", time: "1小时", weather: "不限", budget: "不限", range: "附近", travelContext: "普通出行" }, () => 0).tone, "浪漫治愈");
  assert.equal(generateFateStory({ companion: "朋友", mood: "想热闹", time: "1小时", weather: "不限", budget: "不限", range: "附近", travelContext: "普通出行" }, () => 0).tone, "轻松搞笑");
  assert.equal(generateFateStory({ companion: "同事", mood: "随便", time: "1小时", weather: "不限", budget: "不限", range: "附近", travelContext: "普通出行" }, () => 0).tone, "自然轻松");
});

test("nearby range never produces a farther transport or place", () => {
  const story = generateFateStory({ companion: "朋友", mood: "想冒险", time: "一天", weather: "晴天", budget: "不限", range: "附近", travelContext: "普通出行" }, () => 0.99);
  assert.equal(story.place.range, "附近");
  assert.equal(story.transport.range, "附近");
});

test("generated activities and surprises stay grounded in the scene", () => {
  const date = generateFateStory({ companion: "情侣", mood: "想治愈", time: "1小时", weather: "晴天", budget: "100元内", range: "附近", travelContext: "普通出行" }, () => 0.42);
  assert.doesNotMatch(`${date.activity.text}${date.surprise}`, /听完一首|看到数字 7|陌生背景/);
  assert.ok(date.activity.companions.includes("情侣"));
  const family = generateFateStory({ companion: "家人", mood: "想治愈", time: "半天", weather: "雨天", budget: "100元内", range: "同城", travelContext: "带娃" }, () => 0.42);
  assert.ok(family.activity.companions.includes("家人"));
  assert.ok(family.activity.contexts.includes("带娃"));
});

test("long durations create itinerary-level stories", () => {
  const weekend = generateFateStory({ companion: "朋友", mood: "想冒险", time: "3天", weather: "晴天", budget: "100元内", range: "周边", travelContext: "普通出行" }, () => 0);
  const holiday = generateFateStory({ companion: "家人", mood: "想治愈", time: "7天", weather: "不限", budget: "不限", range: "同城", travelContext: "普通出行" }, () => 0);
  const longStay = generateFateStory({ companion: "自己", mood: "想放松", time: "半个月", weather: "不限", budget: "不限", range: "周边", travelContext: "普通出行" }, () => 0);
  assert.equal(weekend.durationLevel, "周末");
  assert.equal(holiday.durationLevel, "假期");
  assert.equal(longStay.durationLevel, "长假");
  assert.ok(weekend.itinerary.length >= 2);
  assert.ok(holiday.itinerary.length >= 3);
  assert.ok(longStay.itinerary.length >= 4);
  assert.match(holiday.durationText, /7天/);
  assert.notEqual(weekend.place.range, "附近");
  assert.equal(/家附近|楼下|步行可达/.test(weekend.place.text), false);
  assert.notEqual(holiday.place.range, "附近");
});

test("long trips use bold travel scenes instead of neighborhood stores", () => {
  const story = generateFateStory({ companion: "朋友", mood: "想冒险", time: "3天", weather: "晴天", budget: "不限", range: "附近", travelContext: "普通出行" }, () => 0.99);
  assert.ok(["周边", "同城"].includes(story.travelRange));
  assert.match(`${story.place.text}${story.activity.text}`, /古镇|山野|海边|露营|温泉|夜爬|漂流|公路|小城/);
});

test("ending ceremony matches trip duration and can avoid a previous ending", () => {
  const short = generateFateStory({ companion: "情侣", mood: "想治愈", time: "1小时", previousEnding: "回程前互相说出今天最喜欢的一刻" }, () => 0);
  const long = generateFateStory({ companion: "朋友", mood: "想冒险", time: "7天", previousEnding: "回程前互相说出今天最喜欢的一刻" }, () => 0);
  assert.notEqual(short.ending, "回程前互相说出今天最喜欢的一刻");
  assert.match(long.ending, /返程|行李|照片|告别|回家/);
});

test("story material pools are large enough to keep repeated generations fresh", () => {
  ["place", "food", "activity", "challenge"].forEach(type => assert.ok(materials[type].length >= 12, `${type} pool too small`));
  ["photoMission", "surprise"].forEach(type => assert.ok(extras[type].length >= 10, `${type} pool too small`));
  assert.ok(extras.ending.length >= 10);
  assert.ok(boldTripScenes.周末.length >= 8);
  assert.ok(boldTripScenes.假期.length >= 8);
  assert.ok(boldTripScenes.长假.length >= 8);
  assert.ok(boldTripActivities.周末.length >= 8);
  assert.ok(boldTripActivities.假期.length >= 8);
  assert.ok(boldTripActivities.长假.length >= 8);
});
