const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

test("shareResult draws only local images that exist in the mini program", () => {
  let pageDefinition;
  let drawnImagePath;
  const canvas = new Proxy({}, {
    get(target, property) {
      if (property === "createLinearGradient") {
        return () => ({ addColorStop() {} });
      }
      if (property === "drawImage") {
        return imagePath => { drawnImagePath = imagePath; };
      }
      if (property === "draw") {
        return (_reserve, callback) => callback();
      }
      return () => {};
    }
  });

  global.Page = definition => { pageDefinition = definition; };
  global.wx = {
    createCanvasContext: () => canvas,
    canvasToTempFilePath: () => {}
  };

  const modulePath = require.resolve("../pages/play/play");
  delete require.cache[modulePath];
  require(modulePath);

  pageDefinition.data = {
    result: { name: "火锅", desc: "今晚吃火锅" },
    activeMode: "eat",
    currentMode: { title: "今天吃什么" },
    options: [{ name: "火锅" }, { name: "烧烤" }],
    participants: []
  };
  pageDefinition.shareResult();

  assert.ok(drawnImagePath, "poster should draw a local image");
  const assetPath = path.join(__dirname, "..", drawnImagePath.replace(/^\//, ""));
  assert.ok(fs.existsSync(assetPath), `missing poster asset: ${drawnImagePath}`);

  delete global.Page;
  delete global.wx;
});
