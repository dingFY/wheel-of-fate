// 提前加载 fate-story 模块，避免首次切换剧情 tab 时阻塞主线程
require('./data/fate-story');

App({
  globalData: {}
});
