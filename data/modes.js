const modes = [
  { id: "bill", name: "谁买单", icon: "💸", category: "聚会", shortDesc: "随机选出付款人", title: "吃完了，别装没带钱包", subtitle: "本局参与人数", desc: "把朋友都加进来，让随机结果决定这一单由谁负责。", listTitle: "参与者", resultLabel: "本局付款人", buttonText: "开始抽签" },
  { id: "eat", name: "吃什么", icon: "🍜", category: "生活", shortDesc: "解决今天吃什么", title: "今天吃点什么？", subtitle: "选择困难症急救中", desc: "火锅、烧烤、日料，选择困难交给命运。", listTitle: "候选美食", resultLabel: "今天就吃", buttonText: "帮我决定" },
  { id: "do", name: "做什么", icon: "🎯", category: "生活", shortDesc: "安排下一件小事", title: "接下来做什么？", subtitle: "把纠结交给随机数", desc: "运动、看电影、收拾房间，总有一个逃不掉。", listTitle: "候选事项", resultLabel: "就做这个", buttonText: "随机决定" },
  { id: "starter", name: "谁先开始", icon: "🚀", category: "聚会", shortDesc: "随机选出第一位", title: "谁先来？", subtitle: "第一个上场的人出现了", desc: "适合游戏、发言、点名和抢先体验。", listTitle: "候选参与者", resultLabel: "第一位是", buttonText: "选出第一位" },
  { id: "coin", name: "抛硬币", icon: "💰", category: "经典", shortDesc: "正面还是反面", title: "正面还是反面？", subtitle: "古老但有效的决定方式", desc: "当两个选择都差不多时，让硬币替你说话。", listTitle: "硬币结果", resultLabel: "硬币说", buttonText: "抛起来" },
  { id: "number", name: "随机数", icon: "🎲", category: "经典", shortDesc: "抽一个幸运数字", title: "随机抽一个数字", subtitle: "范围内公平抽取", desc: "抽签、点名、分组都能用。", listTitle: "数字范围", resultLabel: "抽到的数字", buttonText: "生成数字" },
  { id: "movie", name: "看什么", icon: "🎬", category: "生活", shortDesc: "今晚看哪一部", title: "今晚看什么？", subtitle: "片荒终结计划", desc: "把想看的电影和剧都放进来，随机选一部。", listTitle: "候选影片", resultLabel: "今晚看", buttonText: "选一部" },
  { id: "weekend", name: "周末去哪", icon: "🗺️", category: "生活", shortDesc: "随机决定目的地", title: "周末去哪玩？", subtitle: "出门还是宅家交给命运", desc: "适合朋友出游、情侣约会和家庭周末计划。", listTitle: "候选地点", resultLabel: "出发去", buttonText: "决定目的地" },
  { id: "truth", name: "真心话大冒险", icon: "😈", category: "聚会", shortDesc: "聚会气氛加速器", title: "真心话还是大冒险？", subtitle: "友情小考验开始", desc: "随机抽取一个轻松有趣的互动任务。", listTitle: "挑战内容", resultLabel: "本轮挑战", buttonText: "开始挑战" },
  { id: "group", name: "随机分组", icon: "👥", category: "聚会", shortDesc: "快速分队不争吵", title: "随机分组", subtitle: "公平分队，马上开玩", desc: "适合桌游、团建、比赛和课堂活动。", listTitle: "参与者", resultLabel: "本轮抽到", buttonText: "开始分组" },
  { id: "challenge", name: "今日挑战", icon: "🔥", category: "挑战", shortDesc: "给今天加点任务", title: "今天挑战什么？", subtitle: "完成一个小目标", desc: "从小事开始，让普通的一天多一点成就感。", listTitle: "挑战清单", resultLabel: "今日任务", buttonText: "抽一个挑战" },
  { id: "custom", name: "自定义", icon: "🎡", category: "经典", shortDesc: "自己添加转盘选项", title: "你的专属转盘", subtitle: "自己定规则，自己玩", desc: "添加任意选项，做一个只属于你的决定器。", listTitle: "自定义选项", resultLabel: "命运选中", buttonText: "开始转盘" },
  { id: "blind", name: "盲盒", icon: "🎁", category: "经典", shortDesc: "选项全隐藏，翻牌揭晓", title: "盲盒开箱", subtitle: "你不知道会是什么", desc: "所有选项都藏起来，转完了才知道命运给你什么。", listTitle: "盲盒内容", resultLabel: "你的盲盒是", buttonText: "开箱！" }
];

const defaultOptions = {
  bill: [],
  coin: ["正面", "反面"],
  number: ["1 - 100"],
  eat: ["火锅", "烧烤", "日料", "湘菜", "粤菜", "披萨"],
  do: ["看电影", "去散步", "打游戏", "运动半小时", "收拾房间", "早点睡觉"],
  starter: ["小明", "小红", "小刚", "小丽"],
  movie: ["喜剧片", "悬疑片", "动画片", "纪录片", "经典老片"],
  weekend: ["逛商场", "公园散步", "看电影", "周边短途游", "宅家休息"],
  truth: ["讲一个最近的糗事", "给通讯录第一个人发个表情", "模仿一个动物", "夸左手边的人三句", "分享一个小秘密"],
  group: ["1组", "2组", "3组"],
  challenge: ["喝一杯水", "走够8000步", "整理桌面10分钟", "给家人打个电话", "提前半小时睡觉"],
  custom: ["选项一", "选项二", "选项三"],
  blind: ["惊喜", "挑战", "奖励", "任务", "彩蛋", "神秘礼物"]
};

const modeDetails = {};
modes.forEach(mode => {
  modeDetails[mode.id] = {
    name: mode.name,
    icon: mode.icon,
    color: mode.id === "bill" ? "#ff8762" : mode.id === "eat" ? "#eab94b" : mode.id === "do" ? "#67a96f" : "#8175dc",
    title: mode.title,
    desc: mode.desc,
    rules: mode.id === "group"
      ? ["添加参与者或使用默认分组", "点击开始分组", "按结果依次加入对应小组"]
      : ["查看默认选项", "可以添加自己的内容", "点击按钮随机选出结果"],
    tips: mode.id === "truth" ? "内容都是轻松玩法，聚会时可以轮流挑战。" : "不需要争论，交给随机结果就好。"
  };
});

module.exports = {
  modes,
  defaultOptions,
  modeDetails
};
