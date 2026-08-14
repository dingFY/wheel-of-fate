const categories = ["聚会", "情侣", "吃喝", "周末", "挑战", "破冰"];

const templates = [
  { id: "party-starter", name: "聚会谁先开始", icon: "🚀", category: "聚会", desc: "快速选出第一个上场的人", tag: "热门", heat: 98, createdAt: 18, mode: "starter", options: ["寿星", "最晚到的人", "穿得最亮眼的人", "手机电量最低的人", "主动报名的人", "随机幸运儿"] },
  { id: "party-truth", name: "真心话大冒险", icon: "😈", category: "聚会", desc: "让气氛迅速热起来", tag: "人气", heat: 96, createdAt: 17, mode: "truth", options: ["讲一个最近的糗事", "模仿一种动物", "夸右手边的人三句", "唱一句最熟的歌", "分享一个小秘密", "做十个深蹲"] },
  { id: "party-groups", name: "聚会随机分组", icon: "👥", category: "聚会", desc: "公平分队，不再争论", tag: "实用", heat: 87, createdAt: 12, mode: "group", options: ["红队", "蓝队", "黄队", "绿队"] },
  { id: "date-tonight", name: "今晚约会做什么", icon: "💕", category: "情侣", desc: "给今晚的约会找点新鲜感", tag: "热门", heat: 97, createdAt: 16, mode: "do", options: ["看电影", "一起做饭", "散步聊天", "逛夜市", "拍大头贴", "找家甜品店"] },
  { id: "couple-apology", name: "谁先道歉", icon: "🤝", category: "情侣", desc: "小矛盾交给转盘化解", tag: "治愈", heat: 82, createdAt: 8, mode: "custom", options: ["我先道歉", "你先道歉", "一起道歉", "先抱一下", "先吃点东西再聊"] },
  { id: "couple-weekend", name: "情侣周末去哪", icon: "🌹", category: "情侣", desc: "轻松决定两个人的周末", tag: "约会", heat: 90, createdAt: 14, mode: "weekend", options: ["公园野餐", "逛展览", "看电影", "周边短途游", "探一家新店", "宅家做饭"] },
  { id: "food-today", name: "今天吃什么", icon: "🍜", category: "吃喝", desc: "选择困难症的每日急救", tag: "热门", heat: 100, createdAt: 15, mode: "eat", options: ["火锅", "烧烤", "日料", "湘菜", "粤菜", "披萨", "麻辣烫", "轻食"] },
  { id: "food-milktea", name: "奶茶喝什么", icon: "🧋", category: "吃喝", desc: "口味和小料一次决定", tag: "甜蜜", heat: 91, createdAt: 13, mode: "eat", options: ["珍珠奶茶", "杨枝甘露", "芋泥啵啵", "多肉葡萄", "抹茶拿铁", "柠檬茶"] },
  { id: "food-midnight", name: "宵夜吃什么", icon: "🌙", category: "吃喝", desc: "深夜馋了就让命运点单", tag: "深夜", heat: 86, createdAt: 7, mode: "eat", options: ["小龙虾", "烧烤", "炸鸡", "炒粉", "馄饨", "水果", "忍住不吃"] },
  { id: "weekend-home-out", name: "宅家还是出门", icon: "🏠", category: "周末", desc: "终结周末第一道选择题", tag: "轻松", heat: 89, createdAt: 11, mode: "coin", options: ["宅家充电", "马上出门"] },
  { id: "weekend-place", name: "周末去哪玩", icon: "🗺️", category: "周末", desc: "随机解锁一个周末目的地", tag: "热门", heat: 94, createdAt: 10, mode: "weekend", options: ["城市公园", "博物馆", "郊外露营", "逛商场", "游乐园", "周边古镇"] },
  { id: "weekend-afternoon", name: "下午做什么", icon: "☀️", category: "周末", desc: "让空闲下午变得有意思", tag: "悠闲", heat: 80, createdAt: 6, mode: "do", options: ["读一本书", "看一部电影", "整理房间", "骑车兜风", "约朋友喝咖啡", "睡个午觉"] },
  { id: "challenge-daily", name: "今日小挑战", icon: "🔥", category: "挑战", desc: "今天完成一件有成就感的小事", tag: "热门", heat: 93, createdAt: 9, mode: "challenge", options: ["喝够八杯水", "走够8000步", "阅读30分钟", "整理桌面", "给家人打电话", "提前半小时睡觉"] },
  { id: "challenge-morning", name: "早起挑战", icon: "🌅", category: "挑战", desc: "给清晨安排一个启动任务", tag: "自律", heat: 78, createdAt: 5, mode: "challenge", options: ["拉伸十分钟", "吃一顿早餐", "背十个单词", "慢跑两公里", "列今日计划", "不看手机半小时"] },
  { id: "challenge-clean", name: "整理挑战", icon: "🧹", category: "挑战", desc: "随机消灭一个凌乱角落", tag: "实用", heat: 76, createdAt: 4, mode: "challenge", options: ["整理书桌", "清理衣柜", "收拾冰箱", "删除无用照片", "整理下载文件", "打扫卫生间"] },
  { id: "icebreaker-intro", name: "趣味自我介绍", icon: "🎤", category: "破冰", desc: "换一种方式认识新朋友", tag: "团建", heat: 88, createdAt: 3, mode: "custom", options: ["用三个词介绍自己", "分享最近的开心事", "说一个隐藏技能", "介绍家乡美食", "分享最近单曲循环", "说一个小目标"] },
  { id: "icebreaker-quick", name: "破冰快速问答", icon: "⚡", category: "破冰", desc: "轻松问题让大家快速熟悉", tag: "热门", heat: 92, createdAt: 2, mode: "truth", options: ["喜欢早起还是熬夜", "最想去哪个城市", "咖啡还是奶茶", "猫派还是狗派", "最近看了什么", "最拿手的一道菜"] },
  { id: "icebreaker-fun", name: "趣味小惩罚", icon: "🎭", category: "破冰", desc: "不尴尬的轻量互动任务", tag: "欢乐", heat: 84, createdAt: 1, mode: "truth", options: ["模仿一个表情包", "用方言说一句话", "原地转三圈", "摆一个拍照姿势", "讲一个冷笑话", "和大家击掌"] }
];

const optionIcons = ["✨", "🎯", "🎉", "🍀", "🌟", "🔥", "🎈", "🎁"];

function getTemplateById(id) {
  return templates.find(item => item.id === id) || null;
}

function makeTemplateOptions(template) {
  if (!template || !Array.isArray(template.options)) return [];
  return template.options.map((name, index) => ({
    id: `${template.id}-${index}`,
    name,
    icon: optionIcons[index % optionIcons.length]
  }));
}

module.exports = { templates, categories, getTemplateById, makeTemplateOptions };
