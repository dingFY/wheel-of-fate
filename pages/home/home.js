const { modes } = require("../../data/modes");

const categories = [...new Set(modes.map(m => m.category))];

Page({
  data: {
    modes,
    categories,
    activeCategory: "",
    filteredModes: modes
  },
  setCategory(e) {
    const cat = e.currentTarget.dataset.cat;
    const filteredModes = cat ? modes.filter(m => m.category === cat) : modes;
    this.setData({ activeCategory: cat, filteredModes });
  },
  openMode(e) {
    wx.navigateTo({
      url: `/pages/play/play?mode=${e.currentTarget.dataset.id}`
    });
  }
});
