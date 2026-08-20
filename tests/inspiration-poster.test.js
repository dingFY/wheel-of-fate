const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

test("shareStory draws the mini-program code in the footer and exports the full poster", t => {
  let pageDefinition;
  let drawnImage;
  let exportOptions;
  const canvas = new Proxy({}, {
    get(target, property) {
      if (property === "createLinearGradient") {
        return () => ({ addColorStop() {} });
      }
      if (property === "measureText") {
        return text => ({ width: text.length * 24 });
      }
      if (property === "drawImage") {
        return (imagePath, x, y, width, height) => {
          drawnImage = { imagePath, x, y, width, height };
        };
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
    canvasToTempFilePath: options => { exportOptions = options; }
  };
  t.after(() => {
    delete global.Page;
    delete global.wx;
  });

  const modulePath = require.resolve("../pages/inspiration/inspiration");
  delete require.cache[modulePath];
  require(modulePath);

  pageDefinition.data.story = {
    title: "治愈慢生活",
    companion: "同事",
    mood: "想治愈",
    time: "1天",
    goal: "把一件一直拖着的事情做完",
    narrative: "顺路看看沿途出口，去同一座附近的山，不用很高。",
    budgetText: "按顺心情决定",
    durationText: "预计用时：1天"
  };
  pageDefinition.shareStory();

  assert.ok(drawnImage, "story poster should draw the mini-program code");
  assert.equal(drawnImage.imagePath, "/images/mini-qrcode.jpg");
  assert.ok(fs.existsSync(path.join(__dirname, "..", drawnImage.imagePath.slice(1))));
  assert.deepEqual(
    { width: drawnImage.width, height: drawnImage.height },
    { width: 126, height: 126 }
  );
  assert.ok(drawnImage.x > 375, "QR code should be in the right half");
  assert.ok(drawnImage.y >= 790, "QR code should be below the story card");
  assert.equal(exportOptions.height, 1040);
  assert.equal(exportOptions.destHeight, 2080);
});
