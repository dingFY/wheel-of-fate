const { generateFateStory } = require("../../data/fate-story");

Page({
  data: {
    companionOptions: ["自己", "情侣", "朋友", "同事", "家人"],
    moodOptions: ["想放松", "想热闹", "想冒险", "想治愈", "随便"],
    timeGroups: [
      { name: "短时", options: ["15分钟", "1小时", "半天", "1天"] },
      { name: "周末", options: ["2天", "3天"] },
      { name: "假期", options: ["5天", "7天", "半个月", "1个月"] }
    ],
    timeOptions: ["15分钟", "1小时", "半天", "1天", "2天", "3天", "5天", "7天", "半个月", "1个月"],
    weatherOptions: ["不限", "晴天", "雨天", "炎热", "寒冷"],
    budgetOptions: ["免费", "50元内", "100元内", "不限"],
    rangeOptions: ["附近", "同城", "周边"],
    travelContextOptions: ["普通出行", "带娃", "带宠物"],
    companion: "朋友",
    mood: "想放松",
    time: "1小时",
    weather: "不限",
    budget: "不限",
    range: "附近",
    travelContext: "普通出行",
    showAdvanced: false,
    showCustom: false,
    story: null,
    history: [],
    historyFull: [],
    showFullHistory: false,
    accepted: false
  },
  onShow() {
    const pending = getApp().globalData.pendingStory;
    if (pending) {
      getApp().globalData.pendingStory = null;
      this.setData({ story: pending, accepted: true });
      return;
    }
    this.loadHistory();
  },
  onLoad(options) {
    if (options && options.storyId) {
      const all = wx.getStorageSync("fateStoryHistory") || [];
      const story = all.find(item => item.id === options.storyId);
      if (story) this.setData({ story, accepted: true });
    }
  },
  loadHistory() {
    wx.getStorage({
      key: "fateStoryHistory",
      success: res => {
        const all = (res.data || []).filter(item => item.theme && item.transport);
        this.setData({ historyFull: all, history: all.slice(0, this.data.showFullHistory ? 10 : 3) });
      },
      fail: () => {
        this.setData({ historyFull: [], history: [] });
      }
    });
  },
  toggleHistory() {
    const showFullHistory = !this.data.showFullHistory;
    this.setData({ showFullHistory, history: this.data.historyFull.slice(0, showFullHistory ? 10 : 3) });
  },
  selectCompanion(e) {
    this.setData({ companion: e.currentTarget.dataset.value });
  },
  selectMood(e) {
    this.setData({ mood: e.currentTarget.dataset.value });
  },
  selectTime(e) {
    this.setData({ time: e.currentTarget.dataset.value });
  },
  toggleCustom() {
    this.setData({ showCustom: !this.data.showCustom });
  },
  toggleAdvanced() {
    this.setData({ showAdvanced: !this.data.showAdvanced });
  },
  quickGenerate() {
    const companions = ["自己", "情侣", "朋友", "同事", "家人"];
    const moods = ["想放松", "想热闹", "想冒险", "想治愈", "随便"];
    const times = ["1小时", "半天", "1天"];
    const rand = arr => arr[Math.floor(Math.random() * arr.length)];
    const companion = rand(companions);
    const mood = rand(moods);
    const time = rand(times);
    this.setData({ companion, mood, time });
    const story = generateFateStory({ companion, mood, time, weather: "不限", budget: "不限", range: "附近", travelContext: "普通出行" });
    this.setData({ story, accepted: false });
  },
  reroll() {
    const { companion, mood, time, weather, budget, range, travelContext, story } = this.data;
    const newStory = generateFateStory({ companion, mood, time, weather, budget, range, travelContext, previousTheme: story && story.theme });
    this.setData({ story: newStory, accepted: false });
  },
  selectAdvanced(e) {
    this.setData({ [e.currentTarget.dataset.field]: e.currentTarget.dataset.value });
  },
  generateStory() {
    const { companion, mood, time, weather, budget, range, travelContext } = this.data;
    const story = generateFateStory({ companion, mood, time, weather, budget, range, travelContext });
    this.setData({ story, accepted: false });
  },
  openHistory(e) {
    const story = (wx.getStorageSync("fateStoryHistory") || []).find(item => item.id === e.currentTarget.dataset.id && item.theme && item.transport);
    if (!story) return;
    this.setData({ story, accepted: true });
  },
  acceptStory() {
    const story = this.data.story;
    if (!story) return;
    const history = wx.getStorageSync("fateStoryHistory") || [];
    if (!history.some(item => item.id === story.id)) history.unshift(story);
    wx.setStorageSync("fateStoryHistory", history.slice(0, 20));
    this.setData({ accepted: true, history: history.filter(item => item.theme && item.transport).slice(0, 3) });
    wx.showToast({ title: "命运已收下", icon: "success" });
  },
  shareStory() {
    const story = this.data.story;
    if (!story) return;
    const ctx = wx.createCanvasContext("story-poster-canvas", this);
    const canvasH = 900;
    // 渐变背景
    const gradient = ctx.createLinearGradient(0, 0, 750, canvasH);
    gradient.addColorStop(0, "#6f5ce7");
    gradient.addColorStop(1, "#ef6b79");
    ctx.setFillStyle(gradient);
    ctx.fillRect(0, 0, 750, canvasH);
    // 装饰圆
    ctx.setFillStyle("rgba(255,255,255,.10)");
    ctx.beginPath(); ctx.arc(670, 90, 160, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(40, 700, 180, 0, Math.PI * 2); ctx.fill();
    // 顶部文字
    ctx.setFillStyle("#ffffff"); ctx.setFontSize(26); ctx.fillText("我今天的命运剧本 ✨", 54, 58);
    ctx.setFontSize(46); ctx.fillText(story.title, 54, 148);
    ctx.setFillStyle("rgba(255,255,255,.82)"); ctx.setFontSize(24);
    ctx.fillText(`${story.companion} · ${story.mood} · ${story.time}`, 54, 194);
    // 白色内容区
    const cardY = 230, cardH = 560;
    ctx.setFillStyle("#fffaf5"); ctx.fillRect(42, cardY, 666, cardH);
    // 角色和目标

    ctx.setFillStyle("#7f6e78"); ctx.setFontSize(22); ctx.fillText(`剧情目标：${story.goal.slice(0, 26)}`, 78, cardY + 94);
    // 分隔线
    ctx.setFillStyle("#f0e6df"); ctx.fillRect(78, cardY + 120, 594, 2);
    // 旁白
    ctx.setFillStyle("#4c3d45"); ctx.setFontSize(24);
    const narrative = `"${story.narrative}"`;
    const words = narrative.split("");
    let line = "", lineY = cardY + 170, maxW = 560;
    words.forEach(ch => {
      const test = line + ch;
      if (ctx.measureText(test).width > maxW) {
        ctx.fillText(line, 78, lineY);
        line = ch; lineY += 38;
      } else { line = test; }
    });
    if (line) ctx.fillText(line, 78, lineY);
    // 底部信息
    ctx.setFillStyle("#f0e6df"); ctx.fillRect(78, cardY + cardH - 70, 594, 2);
    ctx.setFillStyle("#9b7881"); ctx.setFontSize(21);
    ctx.fillText(`${story.budgetText} · ${story.durationText}`, 78, cardY + cardH - 30);
    // 底部品牌
    ctx.setFillStyle("rgba(255,255,255,.9)"); ctx.setFontSize(23);
    ctx.fillText("转盘部落 · 命运已经写好，只管出发", 54, canvasH - 40);
    ctx.draw(false, () => {
      wx.canvasToTempFilePath({
        canvasId: "story-poster-canvas", width: 750, height: canvasH, destWidth: 1500, destHeight: canvasH * 2,
        success: res => wx.showShareImageMenu ? wx.showShareImageMenu({ path: res.tempFilePath }) : wx.saveImageToPhotosAlbum({ filePath: res.tempFilePath }),
        fail: () => wx.showToast({ title: "海报生成失败", icon: "none" })
      }, this);
    });
  },
  onShareAppMessage() {
    const story = this.data.story;
    return {
      title: story ? `我今天的命运剧本：${story.title}` : "今天让命运写剧本，试试你的？",
      path: "/pages/inspiration/inspiration"
    };
  }
});
