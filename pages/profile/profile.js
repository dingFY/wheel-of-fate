Page({
  data: {
    wheels: [],
    history: [],
    stories: [],
    activeTab: "wheels",
    showRenameModal: false,
    renamingId: "",
    renamingName: ""
  },
  onShow() {
    const raw = wx.getStorageSync("fateStoryHistory") || [];
    const stories = raw.filter(item => item.theme && item.transport);
    this.setData({
      wheels: wx.getStorageSync("commonWheels") || [],
      history: wx.getStorageSync("wheelHistory") || [],
      stories
    });
  },
  openStory(e) {
    const id = e.currentTarget.dataset.id;
    const story = this.data.stories.find(item => item.id === id);
    if (!story) return;
    getApp().globalData.pendingStory = story;
    wx.switchTab({ url: "/pages/inspiration/inspiration" });
  },
  clearStories() {
    wx.showModal({
      title: "清空剧本",
      content: "确定清空所有已保存的剧本吗？",
      success: result => {
        if (!result.confirm) return;
        wx.removeStorageSync("fateStoryHistory");
        this.setData({ stories: [] });
        wx.showToast({ title: "已清空", icon: "success" });
      }
    });
  },
  deleteStory(e) {
    const id = e.currentTarget.dataset.id;
    wx.showModal({
      title: "删除剧本",
      content: "确定删除该剧本吗？",
      success: result => {
        if (!result.confirm) return;
        const list = (wx.getStorageSync("fateStoryHistory") || []).filter(item => item.id !== id);
        wx.setStorageSync("fateStoryHistory", list);
        this.setData({ stories: list.filter(item => item.theme && item.transport) });
        wx.showToast({ title: "已删除", icon: "success" });
      }
    });
  },
  openWheel(e) {
    const id = e.currentTarget.dataset.id;
    const wheel = this.data.wheels.find(item => item.id === id);
    if (!wheel) return;
    wx.navigateTo({
      url: `/pages/play/play?mode=${wheel.mode}&savedId=${wheel.id}`
    });
  },
  renameWheel(e) {
    const id = e.currentTarget.dataset.id;
    const wheel = this.data.wheels.find(item => item.id === id);
    if (!wheel) return;
    this.setData({ showRenameModal: true, renamingId: id, renamingName: wheel.name });
  },
  hideRenameModal() {
    this.setData({ showRenameModal: false, renamingId: "", renamingName: "" });
  },
  onRenameInput(e) {
    this.setData({ renamingName: e.detail.value });
  },
  confirmRename() {
    const name = this.data.renamingName.trim();
    if (!name) {
      wx.showToast({ title: "名称不能为空", icon: "none" });
      return;
    }
    const wheels = (wx.getStorageSync("commonWheels") || []).map(item =>
      item.id === this.data.renamingId
        ? { ...item, name, updatedAt: new Date().toLocaleString("zh-CN", { hour12: false }) }
        : item
    );
    wx.setStorageSync("commonWheels", wheels);
    this.setData({ wheels, showRenameModal: false, renamingId: "", renamingName: "" });
    wx.showToast({ title: "已改名", icon: "success" });
  },
  deleteWheel(e) {
    const id = e.currentTarget.dataset.id;
    const wheel = this.data.wheels.find(item => item.id === id);
    if (!wheel) return;
    wx.showModal({
      title: "删除常用转盘",
      content: `确定删除"${wheel.name}"吗？`,
      success: result => {
        if (!result.confirm) return;
        const wheels = (wx.getStorageSync("commonWheels") || []).filter(item => item.id !== id);
        wx.setStorageSync("commonWheels", wheels);
        this.setData({ wheels });
        wx.showToast({ title: "已删除", icon: "success" });
      }
    });
  },
  deleteHistory(e) {
    const id = e.currentTarget.dataset.id;
    wx.showModal({
      title: "删除记录",
      content: "确定删除该条抽签记录吗？",
      success: result => {
        if (!result.confirm) return;
        const history = (wx.getStorageSync("wheelHistory") || []).filter(item => item.id !== id);
        wx.setStorageSync("wheelHistory", history);
        this.setData({ history });
        wx.showToast({ title: "已删除", icon: "success" });
      }
    });
  },
  clearHistory() {
    wx.showModal({
      title: "清空记录",
      content: "确定清空所有抽签历史吗？",
      success: result => {
        if (!result.confirm) return;
        wx.removeStorageSync("wheelHistory");
        this.setData({ history: [] });
        wx.showToast({ title: "已清空", icon: "success" });
      }
    });
  },
  stopPropagation() {},
  switchTab(e) {
    this.setData({ activeTab: e.currentTarget.dataset.tab });
  }
});
