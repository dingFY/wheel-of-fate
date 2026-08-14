const timeLevels = { "15分钟": 1, "1小时": 2, "半天": 3, "1天": 4, "一天": 4, "2天": 5, "3天": 6, "5天": 7, "7天": 8, "半个月": 9, "1个月": 10 };
const durationGroups = {
  "15分钟": "短时", "1小时": "短时", "半天": "短时", "1天": "短时",
  "2天": "周末", "3天": "周末", "5天": "假期", "7天": "假期", "半个月": "长假", "1个月": "长假"
};
const allCompanions = ["自己", "情侣", "朋友", "同事", "家人"];
const allMoods = ["想放松", "想热闹", "想冒险", "想治愈", "随便"];

const materials = {
  place: [
    { text: "附近一条没走过的小路", minTime: 1, companions: allCompanions, moods: ["想放松", "想冒险", "随便"] },
    { text: "窗边最舒服的位置", minTime: 1, companions: allCompanions, moods: ["想放松", "想治愈", "随便"] },
    { text: "楼下最热闹的街角", minTime: 1, companions: allCompanions, moods: ["想热闹", "想冒险", "随便"] },
    { text: "一家从没去过的咖啡店", minTime: 2, companions: allCompanions, moods: ["想放松", "想治愈", "随便"] },
    { text: "附近评价最高的商圈", minTime: 2, companions: ["情侣", "朋友", "同事", "家人"], moods: ["想热闹", "随便"] },
    { text: "城市里最近的公园", minTime: 2, companions: allCompanions, moods: ["想放松", "想治愈", "随便"] },
    { text: "坐三站公共交通后遇见的地方", minTime: 3, companions: ["情侣", "朋友"], moods: ["想冒险", "随便"] },
    { text: "一处没打卡过的展览或博物馆", minTime: 3, companions: allCompanions, moods: ["想放松", "想冒险", "想治愈", "随便"] },
    { text: "周边一座陌生的小城", minTime: 4, companions: ["情侣", "朋友", "家人"], moods: ["想冒险", "随便"] }
  ],
  food: [
    { text: "随手拿到的第一种饮料", minTime: 1, companions: allCompanions, moods: allMoods , snack: true},
    { text: "做一份小甜点解解馋", minTime: 1, indoor: true, companions: allCompanions, moods: ["想放松", "想治愈", "随便"], snack: true },
    { text: "点各自最常吃的那份小吃", minTime: 1, outdoor: true, companions: ["情侣", "朋友", "同事", "家人"], moods: ["想热闹", "想治愈", "随便"], snack: true },
    { text: "一家没吃过的新店", minTime: 2, outdoor: true, companions: allCompanions, moods: ["想冒险", "想热闹", "随便"] },
    { text: "热气腾腾的一顿正餐", minTime: 2, outdoor: true, companions: allCompanions, moods: ["想治愈", "想放松", "随便"] },
    { text: "大家投票最想吃的招牌菜", minTime: 2, outdoor: true, companions: ["情侣", "朋友", "同事", "家人"], moods: ["想热闹", "随便"] },
    { text: "当地最有代表性的一顿饭", minTime: 3, outdoor: true, companions: allCompanions, moods: ["想冒险", "想热闹", "随便"] },
    { text: "亲手准备的一顿野餐", minTime: 3, outdoor: true, companions: ["情侣", "朋友", "家人"], moods: ["想放松", "想治愈", "随便"] }
  ],
  activity: [
    { text: "去超市随便逛逛，买点零食", minTime: 1, companions: allCompanions, moods: allMoods , snackOnly: true},
    { text: "打开一部电影或剧，不管看没看过", minTime: 1, indoor: true, companions: allCompanions, moods: ["想放松", "想治愈", "随便"] },
    { text: "把房间稍微收拾一下", minTime: 1, indoor: true, companions: ["自己", "家人", "情侣"], moods: ["随便"] },
    { text: "去买个菜，顺便在菜场逛逛", minTime: 1, companions: allCompanions, moods: allMoods , snackOnly: true},
    { text: "在家做一顿饭，不用太复杂", minTime: 2, indoor: true, cookingActivity: true, companions: ["自己", "家人", "情侣", "朋友"], moods: ["想放松", "想治愈", "随便"] },
    { text: "打一局麻将或桌游", minTime: 2, indoor: true, companions: ["家人", "朋友", "情侣"], moods: ["想热闹", "随便"] },
    { text: "逛一圈超市或商场，不用买东西", minTime: 2, companions: allCompanions, moods: ["想热闹", "想放松", "随便"] , snackOnly: true},
    { text: "好好打扫一次卫生", minTime: 2, indoor: true, companions: ["自己", "家人", "情侣"], moods: ["随便"] },
    { text: "在家窝着看电影，零食提前备好", minTime: 3, indoor: true, companions: ["情侣", "朋友", "家人"], moods: ["想放松", "想热闹", "随便"] },
    { text: "把一件拖了很久的家务做完", minTime: 2, indoor: true, companions: ["自己", "家人", "情侣"], moods: ["随便"] }
  ],
  challenge: [
    { text: "主动夸身边的人一句", minTime: 1, companions: allCompanions, moods: allMoods },
    { text: "今天不说“随便”，认真做一次选择", minTime: 1, companions: allCompanions, moods: allMoods },
    { text: "给未来的自己留一句话", minTime: 1, companions: allCompanions, moods: ["想放松", "想治愈", "随便"] },
    { text: "让同行的人决定下一段路线", minTime: 2, companions: ["情侣", "朋友", "同事", "家人"], moods: ["想冒险", "想热闹", "随便"] },
    { text: "和陌生背景完成一张创意合照", minTime: 2, companions: allCompanions, moods: ["想冒险", "想热闹", "随便"] },
    { text: "分享一件最近没有说出口的开心事", minTime: 2, companions: ["情侣", "朋友", "家人"], moods: ["想治愈", "想放松", "随便"] },
    { text: "全程不查看攻略，跟着直觉走", minTime: 3, companions: allCompanions, moods: ["想冒险", "随便"] },
    { text: "为今天取一个电影名字", minTime: 3, companions: allCompanions, moods: allMoods },
    { text: "日落前完成一件一直想做的小事", minTime: 4, companions: allCompanions, moods: ["想冒险", "想治愈", "随便"] }
  ]
};

const themes = [
  { name: "城市微光计划", moods: ["想放松", "想治愈", "随便"], weather: ["不限", "晴天", "寒冷"] },
  { name: "雨声治愈剧场", moods: ["想放松", "想治愈", "随便"], weather: ["雨天"] },
  { name: "热闹逃跑路线", moods: ["想热闹", "随便"], weather: ["不限", "晴天", "炎热", "寒冷"] },
  { name: "未知坐标行动", moods: ["想冒险", "随便"], weather: ["不限", "晴天", "雨天", "炎热", "寒冷"] },
  { name: "慢慢相遇的一天", moods: ["想治愈", "想放松", "随便"], weather: ["不限", "晴天", "雨天"] }
];

// 每个选项可设 minTime / maxTime（对应 timeLevels 的值），不设则不限
const placesByRange = {
  "附近": [
    { text: "家附近从未留意过的街角", maxTime: 2 },
    { text: "步行可达的小公园", maxTime: 3 },
    { text: "附近一条没走过的小路", maxTime: 3 },
    { text: "附近一家有窗边座位的小店", maxTime: 3 },
    { text: "附近的公园或河边", minTime: 3 },
    { text: "周边还没探索过的一整片街区", minTime: 3 },
    { text: "附近半小时车程内从没去过的商圈", minTime: 3 }
  ],
  "同城": [
    { text: "城市里最近的公园" },
    { text: "一处没打卡过的展览或博物馆" },
    { text: "评价很好的旧街区" },
    { text: "城市另一端的特色商圈", minTime: 3 }
  ],
  "周边": [
    { text: "城郊的自然步道", minTime: 3 },
    { text: "周边一座陌生的小城", minTime: 4 },
    { text: "一处适合慢游的古镇", minTime: 4 },
    { text: "车程两小时内的风景地", minTime: 3 }
  ]
};

function pickPlaceByRange(range, timeLevel, random) {
  const pool = placesByRange[range] || placesByRange["附近"];
  const matched = pool.filter(p => timeLevel >= (p.minTime || 1) && timeLevel <= (p.maxTime || 99));
  return pick(matched.length ? matched : pool, random).text;
}
const boldTripScenes = { "周末": ["去周边古镇住一晚", "沿海边公路开到日落", "进山住一晚再看日出", "去邻省找一座安静的小城", "在温泉小镇放空两天"], "假期": ["跨城去看一场日出和日落", "沿一条风景公路慢慢开", "去海岛住几晚再决定下一站", "穿过两座城市寻找当地美食", "在山里住下体验几天慢生活"], "长假": ["换一座城市生活半个月", "沿着海岸线开启慢旅行", "租住山间小屋做一段短暂旅居", "用公共交通串起几座陌生城市", "去一个完全不熟悉的地方重新安排日常"] };
const boldTripActivities = { "周末": ["夜爬一座不太高的山看城市灯光", "租一辆车沿着小城周边兜一圈", "在古镇找一家民宿住下", "体验一次漂流或户外徒步", "在陌生小城随机走到天黑"], "假期": ["报名一次当地半日体验课", "在海边等一场日落再回住处", "去当地菜市场买食材做一顿饭", "安排一天完全不看攻略的自由探索", "找一段适合新手的户外路线"], "长假": ["学一项当地手艺并带走作品", "连续几天在不同街区生活", "安排一段火车慢旅行", "用一周时间完成一个主题摄影计划", "为自己设计一条不重复的日常路线"] };
boldTripScenes.周末.push("去湖边露营看一晚星星", "到山脚小镇住两晚", "沿一条县道开到终点", "去海边小城吃三顿海鲜");
boldTripScenes.假期.push("去一座火山或地质公园看看", "沿江河一路换城市旅行", "找一个小众海岛住几天", "去草原或高原看一次辽阔风景");
boldTripScenes.长假.push("在海边租房生活半个月", "沿着一条铁路慢慢移动", "去南方或北方换季生活", "选一个小城体验当地节奏");
boldTripActivities.周末.push("清晨去山顶看日出", "在露营地做一顿早餐", "沿海边骑行到下一个小镇", "报名一次当地户外体验");
boldTripActivities.假期.push("坐船去附近岛屿转一圈", "在当地找老师学一项传统手艺", "完成一次两小时以上的徒步", "为旅程拍一组主题照片");
boldTripActivities.长假.push("租一辆自行车探索整个街区", "连续七天记录同一家附近的早餐", "学会做三道当地家常菜", "为自己安排一周不重复的路线");

const transportsByRange = {
  "附近": [
    { text: "步行出发，不走最熟悉的路线", maxTime: 2 },
    { text: "骑车或共享单车慢慢过去", maxTime: 3 },
    { text: "打车出门，提前一站下车走走", minTime: 3 },
    { text: "骑车绕远路过去，顺路看看沿途", minTime: 3 },
    { text: "乘公交到一个平时不常到的站", minTime: 3 }
  ],
  "同城": [
    { text: "乘坐公共交通，在喜欢的站点下车" },
    { text: "打车前往，但提前一个路口下车" },
    { text: "选择一条平时很少走的城市路线" }
  ],
  "周边": [
    { text: "搭乘最早合适的一班车出发" },
    { text: "自驾并让同行者负责随机导航" },
    { text: "选择一段两小时内的短途路线" }
  ]
};

function pickTransportByRange(range, timeLevel, random) {
  const pool = transportsByRange[range] || transportsByRange["附近"];
  const matched = pool.filter(p => timeLevel >= (p.minTime || 1) && timeLevel <= (p.maxTime || 99));
  return pick(matched.length ? matched : pool, random).text;
}

const extras = {
  role: ["随机事件体验官", "城市秘密观察员", "快乐行动队", "临时冒险主角"],
  goal: ["在普通的一天里制造一个值得记住的片段", "完成一次不追求效率的相处", "找到一个计划之外的小惊喜", "把犹豫变成一次真实行动"],
  photoMission: ["拍下三种同一色系的东西", "拍一张没有人看镜头的照片", "用路边倒影完成一张合照", "记录今天最像电影画面的一刻", "拍下彼此挑选的一个小物件"],
  surprise: ["让同行的人决定最后去哪", "临时加一站，不管是哪里", "随便进一家看起来有意思的店", "在外面多坐一会儿再回去", "回家路上顺便买点什么"],
  ending: ["回家路上聊聊今天哪段最舒服", "回去之前再坐一会儿，不用赶", "回家后顺手发条消息给对方", "找个地方坐下来缓一缓再走"]
};
const shortEndings = ["回程前互相说出今天最喜欢的一刻", "离开前拍一张不摆拍的合照", "回家路上各自分享一个今天的新发现", "把今天最喜欢的店记进下次想去清单"];
const tripEndings = ["返程前整理一张旅程照片，选出唯一的封面", "把没走完的路线留给下一次再来", "离开前买一份当地伴手礼，回家后再拆开", "在车站或机场写下这趟旅程最意外的收获", "回家后把行李慢慢收好，再复盘最值得的一天"];

const itineraryMaterials = {
  "周末": [
    ["第1天 · 出发与熟悉", "抵达后先安顿下来，去附近吃一顿不赶时间的饭"],
    ["第2天 · 核心体验", "安排这趟旅程最期待的一件事，留出半天慢慢探索"],
    ["第3天 · 临时支线", "不查攻略，沿着当下最想去的方向走一段，再带着新发现回家"]
  ],
  "假期": [
    ["第1天 · 抵达", "熟悉住处周边，找到接下来几天会反复经过的店"],
    ["第2天 · 城市主线", "完成一处代表性景点或体验，不把行程排满"],
    ["第3天 · 在地生活", "去菜市场、街区或社区公园，像当地人一样过半天"],
    ["第4天 · 自由支线", "把一天留给临时决定的路线，遇到喜欢的地方就多停一会儿"],
    ["第5天 · 记忆收集", "买一件真正喜欢的小物，整理这几天拍下的照片"],
    ["第6天 · 慢下来", "减少移动，在一处喜欢的地方待久一点"],
    ["第7天 · 收尾", "吃一顿告别餐，选出这次旅程最想再来的地方"]
  ],
  "长假": [
    ["第1—2天 · 落地适应", "安顿、补给、熟悉周围生活设施，不急着打卡"],
    ["第3—5天 · 深度探索", "选一个主题慢慢体验：街区、美食、自然或手作"],
    ["第6—9天 · 生活章节", "像本地人一样采购、做饭、散步，建立自己的日常路线"],
    ["第10—12天 · 远方支线", "安排一次更远的短途，给旅程增加一个明显转折"],
    ["第13—14天 · 回看与收束", "整理照片和见闻，留下一个之后还会想起的习惯"]
  ]
};

function pick(list, random) {
  return list[Math.min(list.length - 1, Math.floor(random() * list.length))];
}

function getTone(input) {
  if (input.travelContext === "带娃") return "温暖童趣";
  if (input.travelContext === "带宠物") return "轻松陪伴";
  if (input.companion === "情侣" && ["想治愈", "想放松"].includes(input.mood)) return "浪漫治愈";
  if (input.companion === "朋友" && input.mood === "想热闹") return "轻松搞笑";
  if (input.companion === "自己") return "安静治愈";
  if (input.companion === "同事") return "自然轻松";
  if (input.mood === "想冒险") return "电影冒险";
  return "轻松有趣";
}

function pickMaterial(type, input, random) {
  const maxTime = timeLevels[input.time] || 2;
  const withinTime = materials[type].filter(item => item.minTime <= maxTime);
  const matched = withinTime.filter(item =>
    item.companions.includes(input.companion) &&
    (!item.contexts || item.contexts.includes(input.travelContext)) &&
    (input.mood === "随便" || item.moods.includes(input.mood) || item.moods.includes("随便"))
  );
  const pool = matched.length ? matched : withinTime;
  return pool[Math.min(pool.length - 1, Math.floor(random() * pool.length))];
}

function generateFateStory(input, random = Math.random) {
  input = {
    weather: "不限",
    budget: "不限",
    range: "附近",
    travelContext: "普通出行",
    ...input
  };
  // 先定活动，再按室内/室外筛 food 和 place
  // 带娃/带宠物场景：强制只从对应 contexts 活动中抽取
  const forcedContext = (input.travelContext === "带娃" || input.travelContext === "带宠物") ? input.travelContext : null;
  const activity = forcedContext
    ? pick(materials.activity.filter(a =>
        a.contexts && a.contexts.includes(forcedContext) &&
        (!a.minTime || (timeLevels[input.time] || 2) >= a.minTime)
      ), random) || pickMaterial("activity", input, random)
    : pickMaterial("activity", input, random);
  const isIndoor = !!activity.indoor;

  // food：室内活动优先匹配 indoor food，室外不要 indoor-only food
  const maxTimeVal = timeLevels[input.time] || 2;
  const isSnackOnly = !!activity.snackOnly;
  const foodPool = materials.food.filter(item => {
    if (item.minTime && item.minTime > maxTimeVal) return false;
    if (!item.companions.includes(input.companion)) return false;
    if (input.mood !== "随便" && !item.moods.includes(input.mood) && !item.moods.includes("随便")) return false;
    if (isIndoor && item.outdoor) return false;
    if (!isIndoor && item.indoor) return false;
    if (isSnackOnly && !item.snack) return false; // 轻户外活动只配小吃饮料
    if (!isSnackOnly && item.streetSnack) return false; // 路边摊只配散步/漫游场景
    if (item.homeOnly && activity.venue) return false; // 在家才合理的食物不配场所类活动
    return true;
  });
  const food = foodPool.length ? pick(foodPool, random) : pickMaterial("food", input, random);

  const place = isIndoor ? null : pickMaterial("place", input, random);

  // surprise：室内活动不出现"进店/去哪里"类型
  const outdoorSurprises = ["随便进一家看起来有意思的店", "在外面多坐一会儿再回去", "路上遇到什么有趣的就停下来看看", pick(extras.photoMission, random)];
  const indoorSurprises = ["顺手多做一道菜", "随机翻出一首老歌一起听", "临时换一部电影看", "泡杯好喝的再聊一会儿", "让对方选下一个节目", "翻出来一个之前没做完的游戏"];
  const surprisePool = isIndoor ? indoorSurprises : [...extras.surprise, ...outdoorSurprises];
  const surprise = pick(surprisePool, random);

  const challenge = pickMaterial("challenge", input, random);
  const durationLevel = durationGroups[input.time] || "短时";
  const isLongTrip = ["周末", "假期", "长假"].includes(durationLevel);
  // 长途旅行专用主题，不出现"在家/一天"类主题
  const longTripThemeNames = new Set(["城市微光计划", "热闹逃跑路线", "未知坐标行动", "随机漫步计划", "吃货突袭行动", "户外打卡计划", "今日随机漫游", "季节限定日"]);
  const themePool = themes.filter(item =>
    item.moods.includes(input.mood) &&
    item.weather.includes(input.weather) &&
    item.name !== input.previousTheme &&
    (!isLongTrip || longTripThemeNames.has(item.name)) &&
    (!item.indoorOnly || isIndoor)
  );
  const theme = pick(
    themePool.length
      ? themePool
      : themes.filter(t => t.name !== input.previousTheme && (!isLongTrip || longTripThemeNames.has(t.name)) && (!t.indoorOnly || isIndoor)),
    random
  ).name;
  const travelRange = isLongTrip ? (durationLevel === "周末" ? "周边" : "同城") : input.range;
  const timeLevel = timeLevels[input.time] || 2;
  const selectedPlace = isIndoor ? { text: "", range: travelRange } : { ...(place || {}), text: isLongTrip ? pick(boldTripScenes[durationLevel], random) : pickPlaceByRange(input.range, timeLevel, random), range: travelRange };
  const transport = isIndoor ? { text: "", range: travelRange } : { text: isLongTrip ? pick(["坐高铁或飞机去一个没去过的地方", "自驾出发，把导航终点设成一座陌生小城", "先买票再决定具体路线"], random) : pickTransportByRange(input.range, timeLevel, random), range: travelRange };
  if (isLongTrip && !isIndoor) activity.text = pick(boldTripActivities[durationLevel], random);
  const tone = getTone(input);
  const indoorOnlyRoles = new Set(["今日家庭CEO", "懒日记录员", "临时家庭厨师", "周末放空使者"]);
  const outdoorOnlyRoles = new Set(["城市秘密观察员", "城市探索员", "随机探店员", "临时探店侦察兵", "今日打卡负责人", "户外冒险先锋", "今日运动挑战员", "水边发呆观察员", "周末自然向导", "今日漫游者", "随机生活观察员", "今日随行拍档"]);
  const rolePool = extras.role.filter(r => isIndoor ? !outdoorOnlyRoles.has(r) : !indoorOnlyRoles.has(r));
  const role = pick(rolePool.length ? rolePool : extras.role, random);
  const goal = pick(extras.goal, random);
  const photoMission = pick(extras.photoMission, random);
  // surprise 已在上方按 isIndoor 分支赋值，此处不重复
  const indoorEndings = [
    "随手收拾一下，今天就这样了",
    "泡杯茶坐一会儿，不急着做下一件事",
    "窝着不动，把今天的状态保持久一点",
    "随便聊聊今天的感觉，然后各自散了",
    "找个舒服的姿势待着，今天到此为止",
    "把灯调暗，今天到这里"
  ];
  const endingPool = isLongTrip
    ? tripEndings
    : isIndoor
      ? indoorEndings.filter(item => item !== input.previousEnding)
      : shortEndings.filter(item => item !== input.previousEnding);
  const ending = pick(endingPool.length ? endingPool : shortEndings, random);
  const budgetText = input.budget === "不限" ? "按现场心情决定，建议理性消费" : `整段剧情控制在${input.budget}`;
  const durationText = `预计用时：${input.time}`;
  const title = `${theme} · ${input.time}篇`;
  const itinerary = (itineraryMaterials[durationLevel] || []).slice(0, durationLevel === "周末" ? (input.time === "2天" ? 2 : 3) : durationLevel === "假期" ? (input.time === "5天" ? 5 : 7) : undefined);
  const companionBase = input.companion === "自己" ? "独自" : `和${input.companion}`;
  const itineraryText = itinerary.length ? `行程分为${itinerary.length}个章节：${itinerary.map(item => `${item[0]}，${item[1]}`).join("；")}` : "";
  const indoorLeadins = ["顺便，", "还有一件事——", "另外，", "记得，", "悄悄加一条：", "有个小任务："];
  const outdoorLeadins = ["路上别忘了，", "顺便，", "还有一件事——", "另外，", "记得，", "有个小任务：", "悄悄加一条："];
  const surpriseLeadin = pick(isIndoor ? indoorLeadins : outdoorLeadins, random);
  // 旁白模板按4种情况分支，避免地点/食物/活动互相矛盾
  let narrative;
  if (isIndoor) {
    // 室内：烹饪类活动不再叠加食物
    if (activity.cookingActivity) {
      narrative = `${companionBase}${input.companion === "自己" ? "" : "一起"}${activity.text}。${surpriseLeadin}${surprise}。结束时，${ending}。`;
    } else {
      narrative = `${companionBase}${input.companion === "自己" ? "" : "一起"}${activity.text}。做完了，${food.text}。${itineraryText}${surpriseLeadin}${surprise}。结束时，${ending}。`;
    }
  } else if (isSnackOnly) {
    // 轻户外（散步/爬山/骑车/钓鱼等）：活动本身含地点，不额外插入 place，食物是随身小吃
    if (maxTimeVal <= 2) {
      // 1小时以内：极简
      narrative = `${companionBase}出门${activity.text}，路上买了${food.text}。${surpriseLeadin}${surprise}。`;
    } else {
      narrative = `${companionBase}${transport.text}出门，${activity.text}，带上${food.text}。${itineraryText}${surpriseLeadin}${surprise}。结束时，${ending}。`;
    }
  } else {
    // 正常户外（需要目的地的活动）：先到地点，再活动，饭在外面找地方吃
    if (maxTimeVal <= 2) {
      narrative = `${companionBase}去${selectedPlace.text}，${activity.text}，顺手找个地方吃了${food.text}。${surpriseLeadin}${surprise}。`;
    } else {
      narrative = `${companionBase}${transport.text}出门，到了${selectedPlace.text}，${activity.text}。结束后找个地方吃了${food.text}。${itineraryText}${surpriseLeadin}${surprise}。结束时，${ending}。`;
    }
  }
  return {
    id: `story-${Date.now()}-${Math.floor(random() * 100000)}`,
    ...input,
    travelRange,
    title,
    theme,
    tone,
    role,
    goal,
    transport,
    place: selectedPlace,
    food,
    activity,
    challenge,
    photoMission,
    surprise,
    ending,
    budgetText,
    durationText,
    durationLevel,
    itinerary,
    narrative,
    createdAt: new Date().toLocaleString("zh-CN", { hour12: false })
  };
}

materials.place.push(
  { text: "河边步道的另一端", minTime: 2, companions: allCompanions, moods: ["想放松", "想冒险", "随便"] },
  { text: "城市里的老街区", minTime: 2, companions: allCompanions, moods: ["想热闹", "想冒险", "随便"] },
  { text: "一家有特色的书店或文创园", minTime: 2, companions: allCompanions, moods: ["想放松", "想治愈", "随便"] },
  { text: "城市边缘的一片湿地或湖边", minTime: 3, companions: allCompanions, moods: ["想放松", "想冒险", "随便"] },
  { text: "一座可以看见城市全景的山顶", minTime: 3, companions: ["情侣", "朋友", "家人"], moods: ["想冒险", "想治愈", "随便"] },
  { text: "一座有地方特色的古镇", minTime: 4, companions: ["情侣", "朋友", "家人"], moods: ["想冒险", "想放松", "随便"] }
);
materials.food.push(
  { text: "当地人排队的小馆子", minTime: 2, outdoor: true, companions: allCompanions, moods: ["想冒险", "想热闹", "随便"] },
  { text: "一份当地特色早餐", minTime: 2, outdoor: true, companions: allCompanions, moods: ["想冒险", "想治愈", "随便"] },
  { text: "夜市里各买一份小吃交换着吃", minTime: 2, outdoor: true, companions: ["情侣", "朋友", "家人"], moods: ["想热闹", "随便"] },
  { text: "沿途看到的第一家当地餐馆", minTime: 3, outdoor: true, companions: allCompanions, moods: ["想冒险", "随便"] },
  { text: "民宿附近买食材自己做一顿饭", minTime: 3, outdoor: true, companions: ["情侣", "朋友", "家人"], moods: ["想治愈", "想放松", "随便"] },
  { text: "旅途中最值得专程去吃的一道菜", minTime: 4, outdoor: true, companions: allCompanions, moods: ["想冒险", "想热闹", "随便"] }
);
materials.activity.push(
  { text: "去菜市场买菜，顺便逛逛", minTime: 2, companions: allCompanions, moods: ["想热闹", "随便"], snackOnly: true },
  { text: "约人打麻将或玩桌游", minTime: 2, indoor: true, companions: ["家人", "朋友", "情侣"], moods: ["想热闹", "随便"] },
  { text: "一起做顿好吃的，认真做那种", minTime: 2, indoor: true, cookingActivity: true, companions: ["自己", "家人", "情侣", "朋友"], moods: ["想放松", "想治愈", "随便"] },
  { text: "把家里彻底打扫一遍", minTime: 3, companions: ["自己", "家人", "情侣"], moods: ["随便"] },
  { text: "在家窝着看一整天剧", minTime: 4, companions: allCompanions, moods: ["想放松", "想治愈", "随便"] },
  { text: "去附近公园或街边随便走走", minTime: 2, companions: allCompanions, moods: ["想放松", "随便"], snackOnly: true }
);
materials.challenge.push(
  { text: "问当地人一个只有本地人才知道的问题", minTime: 2, companions: allCompanions, moods: ["想冒险", "想热闹", "随便"] },
  { text: "不用导航走完一段老街", minTime: 2, companions: ["情侣", "朋友", "家人"], moods: ["想冒险", "随便"] },
  { text: "买一件不在计划里的当地小物", minTime: 2, companions: allCompanions, moods: ["想冒险", "想热闹", "随便"] },
  { text: "找个高处看看日出或街景", minTime: 3, companions: allCompanions, moods: ["想冒险", "想治愈", "随便"] },
  { text: "在旅途中写一张明信片寄给未来的自己", minTime: 3, companions: allCompanions, moods: ["想治愈", "想放松", "随便"] },
  { text: "把一天交给同行者安排", minTime: 4, companions: ["情侣", "朋友", "家人"], moods: ["想冒险", "想热闹", "随便"] }
);
extras.photoMission.push("拍一张两个人都觉得好看的地方", "随手拍一张觉得有意思的东西", "拍下今天吃的东西", "找个光线好的地方随手拍一张");
extras.surprise.push("顺路买点吃的带回去", "在外面再多待一段时间", "走到哪算哪不着急回去");
shortEndings.push("直接打车回去，路上聊聊", "找个还开着的店坐一会儿再走", "边走边随便说说今天怎么样", "回去之前再吃点东西");
tripEndings.push("找个地方把今天拍的照片翻一遍", "返程路上聊聊今天最满意的地方", "回到住处把行李整理好，看看明天还想去哪", "出发前再去吃一次最喜欢的那家");
extras.ending.push("找个舒服的地方坐着不动一会儿", "回去路上随便聊聊", "顺路再吃点什么", "不急着走，再逛一会儿");

// 带娃场景
materials.activity.push(
  { text: "去儿童乐园或游乐场玩一下午", minTime: 2, companions: ["家人", "情侣"], moods: ["想热闹", "随便"], contexts: ["带娃"] },
  { text: "在公园找一块草地让孩子随便跑", minTime: 1, companions: ["家人", "情侣"], moods: ["想放松", "随便"], contexts: ["带娃"] , snackOnly: true},
  { text: "去书店或绘本馆带孩子选一本书", minTime: 2, companions: ["家人", "情侣"], moods: ["想放松", "想治愈", "随便"], contexts: ["带娃"] },
  { text: "在家做一次亲子烘焙或手工", minTime: 2, indoor: true, companions: ["家人", "情侣"], moods: ["想放松", "随便"], contexts: ["带娃"] },
  { text: "去动物园或自然博物馆逛一圈", minTime: 3, companions: ["家人", "情侣", "朋友"], moods: ["想热闹", "想冒险", "随便"], contexts: ["带娃"] },
  { text: "去喷水广场或浅水区让孩子玩水", minTime: 2, companions: ["家人", "情侣"], moods: ["想热闹", "随便"], contexts: ["带娃"] , snackOnly: true},
  { text: "带孩子去图书馆借几本书", minTime: 1, companions: ["家人", "情侣"], moods: ["想放松", "随便"], contexts: ["带娃"] },
  { text: "去商场儿童区逛逛，看孩子想玩啥", minTime: 2, companions: ["家人", "情侣"], moods: ["想热闹", "随便"], contexts: ["带娃"] }
);
materials.place.push(
  { text: "儿童友好的公园或广场", minTime: 1, companions: ["家人", "情侣"], moods: ["想热闹", "随便"], contexts: ["带娃"] },
  { text: "附近的动物园或科技馆", minTime: 3, companions: ["家人", "情侣", "朋友"], moods: ["想热闹", "想冒险", "随便"] },
  { text: "商场里的儿童游乐区", minTime: 2, companions: ["家人", "情侣"], moods: ["想热闹", "随便"], contexts: ["带娃"] }
);
materials.food.push(
  { text: "孩子最喜欢口味的冰淇淋或小甜点", minTime: 1, companions: ["家人", "情侣"], moods: ["想放松", "随便"], contexts: ["带娃"] , snack: true}
);

// 带宠物场景
materials.activity.push(
  { text: "去宠物友好的公园遛一圈", minTime: 1, companions: allCompanions, moods: ["想放松", "随便"], contexts: ["带宠物"], snackOnly: true },
  { text: "带宠物去附近草地跑跑，看它撒欢", minTime: 1, companions: allCompanions, moods: ["想放松", "想治愈", "随便"], contexts: ["带宠物"], snackOnly: true },
  { text: "找一家宠物友好的咖啡店坐坐", minTime: 2, companions: allCompanions, moods: ["想放松", "随便"], contexts: ["带宠物"] },
  { text: "带宠物探索一条没走过的新路线", minTime: 1, companions: allCompanions, moods: ["想冒险", "想放松", "随便"], contexts: ["带宠物"], snackOnly: true },
  { text: "带宠物去宠物店逛逛，顺便挑点零食或玩具", minTime: 1, companions: allCompanions, moods: ["随便"], contexts: ["带宠物"], snackOnly: true },
  { text: "带宠物去洗澡美容，顺便等它出来", minTime: 2, companions: allCompanions, moods: ["想放松", "随便"], contexts: ["带宠物"] },
  { text: "去宠物乐园或宠物社交广场，让它认识新朋友", minTime: 2, companions: allCompanions, moods: ["想热闹", "随便"], contexts: ["带宠物"], snackOnly: true },
  { text: "带宠物去宠物医院做个年度体检", minTime: 2, companions: allCompanions, moods: ["随便"], contexts: ["带宠物"] },
  { text: "在家给宠物做一顿自制小零食", minTime: 1, indoor: true, companions: allCompanions, moods: ["想放松", "想治愈", "随便"], contexts: ["带宠物"] },
  { text: "带宠物去没去过的街道闻闻逛逛", minTime: 1, companions: allCompanions, moods: ["想冒险", "随便"], contexts: ["带宠物"], snackOnly: true },
  { text: "在公园找块草地，陪宠物晒太阳发呆", minTime: 1, companions: allCompanions, moods: ["想放松", "想治愈", "随便"], contexts: ["带宠物"], snackOnly: true },
  { text: "带宠物去宠物游泳池或水上乐园试试", minTime: 2, companions: allCompanions, moods: ["想热闹", "想冒险", "随便"], contexts: ["带宠物"], snackOnly: true }
);
materials.place.push(
  { text: "宠物友好的公园绿地", minTime: 1, companions: allCompanions, moods: ["想放松", "随便"] }
);

// 聚餐/烧烤/看望朋友
materials.activity.push(
  { text: "安排一次户外烧烤，每人带一样食材", minTime: 3, companions: ["朋友", "家人", "同事"], moods: ["想热闹", "随便"] },
  { text: "在家聚餐，每个人负责一道菜", minTime: 3, indoor: true, cookingActivity: true, companions: ["朋友", "家人", "情侣"], moods: ["想热闹", "想治愈", "随便"] },
  { text: "去一家大家都没去过的餐厅搓一顿", minTime: 2, companions: ["朋友", "家人", "情侣", "同事"], moods: ["想热闹", "随便"] },
  { text: "找个地方打牌或桌游一下午", minTime: 2, companions: ["朋友", "家人", "情侣"], moods: ["想热闹", "随便"] },
  { text: "登门拜访一个许久没见的朋友", minTime: 2, indoor: true, companions: ["自己", "情侣"], moods: ["想治愈", "随便"] },
  { text: "和同学约着在学校附近聚一聚", minTime: 2, companions: ["朋友"], moods: ["想热闹", "想治愈", "随便"] },
  { text: "去学校附近的老地方转转", minTime: 2, companions: ["自己", "朋友", "情侣"], moods: ["想治愈", "想放松", "随便"] }
);
materials.food.push(
  { text: "烧烤摊上刚烤好的一串", minTime: 2, outdoor: true, companions: ["朋友", "家人", "情侣"], moods: ["想热闹", "随便"] },
  { text: "围坐在一起涮的一顿火锅", minTime: 2, indoor: true, companions: ["朋友", "家人", "情侣"], moods: ["想热闹", "想治愈", "随便"] },
  { text: "大家合伙买的外卖大餐", minTime: 2, indoor: true, companions: ["朋友", "同事", "家人"], moods: ["想热闹", "随便"] },
  { text: "各点一道没吃过的菜交换着尝", minTime: 2, outdoor: true, companions: ["朋友", "家人", "情侣"], moods: ["想冒险", "想热闹", "随便"] }
);
materials.place.push(
  { text: "朋友家附近随便转转", minTime: 2, companions: ["朋友", "情侣"], moods: ["想治愈", "随便"] },
  { text: "学校附近的老街或小馆子", minTime: 2, companions: ["朋友", "自己", "情侣"], moods: ["想治愈", "想热闹", "随便"] },
  { text: "适合野餐或烧烤的公园空地", minTime: 3, companions: ["朋友", "家人", "情侣"], moods: ["想热闹", "随便"] }
);

// 日常生活补充
materials.activity.push(
  { text: "约朋友打一场羽毛球或乒乓球", minTime: 2, companions: ["朋友", "同事", "情侣", "家人"], moods: ["想热闹", "想冒险", "随便"] },
  { text: "去游泳馆游一个小时", minTime: 2, companions: allCompanions, moods: ["想放松", "随便"] },
  { text: "窝在家里睡一个长觉，醒来再说", minTime: 2, indoor: true, companions: ["自己"], moods: ["想放松", "随便"] },
  { text: "刷一下午综艺或短视频，彻底放空", minTime: 2, indoor: true, companions: ["自己", "情侣"], moods: ["想放松", "随便"] },
  { text: "整理一下堆了很久的衣服或杂物", minTime: 1, indoor: true, companions: ["自己", "家人", "情侣"], moods: ["随便"] },
  { text: "玩一会儿游戏，不用有目的", minTime: 1, indoor: true, companions: ["自己", "情侣", "朋友"], moods: ["想热闹", "随便"] },
  { text: "去附近健身房练一练", minTime: 2, companions: ["自己", "朋友", "情侣"], moods: ["随便"] , snackOnly: true},
  { text: "去菜市场认真逛一遍，看看今天买什么", minTime: 1, companions: allCompanions, moods: ["随便"] , snackOnly: true}
);
materials.food.push(
  { text: "奶茶或咖啡，走走喝着", minTime: 1, companions: allCompanions, moods: ["想放松", "随便"] , snack: true},
  { text: "路边摊随便吃点，不用正式", minTime: 1, outdoor: true, streetSnack: true, companions: allCompanions, moods: ["想热闹", "随便"], snack: true },
  { text: "从超市买回来一起做的家常菜", minTime: 2, indoor: true, homeOnly: true, companions: ["家人", "情侣", "朋友"], moods: ["想放松", "想治愈", "随便"] }
);
materials.place.push(
  { text: "社区球场或运动广场", minTime: 1, companions: ["朋友", "家人", "同事"], moods: ["想热闹", "随便"] },
  { text: "刚开业的新商场或美食街", minTime: 2, companions: allCompanions, moods: ["想热闹", "随便"] }
);

// 新主题
themes.push(
  { name: "亲子探索日", moods: ["想热闹", "随便"], weather: ["不限", "晴天"] },
  { name: "宠物出行计划", moods: ["想放松", "想治愈", "随便"], weather: ["不限", "晴天"] },
  { name: "朋友聚散局", moods: ["想热闹", "想治愈", "随便"], weather: ["不限", "晴天", "雨天"] },
  { name: "今日流水账", moods: ["随便"], weather: ["不限", "晴天", "雨天", "炎热", "寒冷"] },
  { name: "许久未见计划", moods: ["想治愈", "想热闹", "随便"], weather: ["不限", "晴天", "雨天"] },
  { name: "家里折腾一天", moods: ["想放松", "随便"], weather: ["雨天", "炎热", "寒冷", "不限"], indoorOnly: true }
);

// 新角色和目标
extras.role.push(
  "今日随行拍档", "聚餐总指挥", "随机探店员",
  "懒日记录员", "周末幸存者", "今日打卡负责人"
);
extras.goal.push(
  "让今天不只是普通的一天",
  "把一件一直拖着的事做了",
  "和最近没好好聚的人坐下来吃顿饭",
  "让孩子或宠物今天也玩得开心",
  "找一个不用想任何事的放空时刻",
  "好好陪着身边的人过一天"
);

// 户外运动
materials.activity.push(
  { text: "去爬一座附近的山，不用很高", minTime: 3, companions: allCompanions, moods: ["想冒险", "想放松", "随便"] , snackOnly: true},
  { text: "沿一条绿道或河边步道慢慢走", minTime: 2, companions: allCompanions, moods: ["想放松", "想治愈", "随便"] , snackOnly: true},
  { text: "去户外徒步一段不太难的路线", minTime: 3, companions: ["朋友", "情侣", "家人"], moods: ["想冒险", "想放松", "随便"] , snackOnly: true},
  { text: "约人去游泳，随便几圈", minTime: 2, companions: allCompanions, moods: ["想放松", "随便"] , snackOnly: true},
  { text: "找一片空地打一场羽毛球或飞盘", minTime: 2, companions: ["朋友", "情侣", "同事", "家人"], moods: ["想热闹", "想冒险", "随便"] , snackOnly: true},
  { text: "去附近跑一圈，配上喜欢的歌单", minTime: 1, companions: ["自己", "情侣", "朋友"], moods: ["想放松", "随便"] , snackOnly: true},
  { text: "骑车出门，不设终点随便骑", minTime: 2, companions: ["自己", "情侣", "朋友"], moods: ["想放松", "想冒险", "随便"] , snackOnly: true},
  { text: "去公园打一场太极或练一练", minTime: 2, companions: allCompanions, moods: ["想放松", "随便"] , snackOnly: true},
  { text: "去攀岩馆或室内运动场试试", minTime: 2, companions: ["朋友", "情侣", "同事"], moods: ["想冒险", "想热闹", "随便"] },
  { text: "找个空地踢球或投篮", minTime: 2, companions: ["朋友", "家人", "同事"], moods: ["想热闹", "随便"] , snackOnly: true},
  { text: "去附近山顶或高处看看风景", minTime: 3, companions: allCompanions, moods: ["想冒险", "想治愈", "随便"], snackOnly: true },
  { text: "去露营地搭帐篷过一晚", minTime: 4, companions: ["情侣", "朋友", "家人"], moods: ["想冒险", "想放松", "随便"] }
);

// 情侣约会 / 手工活动
materials.activity.push(
  { text: "去陶艺工作室一起做一件小东西", minTime: 2, companions: ["情侣", "朋友"], moods: ["想放松", "想治愈", "随便"] },
  { text: "一起画一幅水彩或素描，不求好看", minTime: 2, indoor: true, companions: ["情侣", "朋友"], moods: ["想放松", "想治愈", "随便"] },
  { text: "去花店买材料回家插花", minTime: 2, indoor: true, companions: ["情侣", "自己"], moods: ["想放松", "想治愈", "随便"] },
  { text: "一起做寿司或烘焙，边做边试吃", minTime: 2, indoor: true, cookingActivity: true, companions: ["情侣", "朋友", "家人"], moods: ["想放松", "想治愈", "随便"] },
  { text: "去看一场电影，提前选好座位", minTime: 2, companions: ["情侣", "朋友", "家人"], moods: ["想放松", "想治愈", "随便"] },
  { text: "找一家有特色的餐厅认真约一次饭", minTime: 2, companions: ["情侣", "朋友"], moods: ["想热闹", "想治愈", "随便"] },
  { text: "去桌游店玩一两局", minTime: 2, indoor: true, venue: true, companions: ["情侣", "朋友", "同事"], moods: ["想热闹", "随便"] },
  { text: "一起逛花市或集市，随便看看买什么", minTime: 2, companions: ["情侣", "朋友", "家人"], moods: ["想热闹", "想放松", "随便"] },
  { text: "去书店各自选一本书，回来交换看", minTime: 2, companions: ["情侣", "朋友"], moods: ["想放松", "想治愈", "随便"] },
  { text: "一起学一支简单的舞蹈或动作", minTime: 2, indoor: true, companions: ["情侣", "朋友"], moods: ["想热闹", "随便"] },
  { text: "去密室逃脱挑战一下", minTime: 2, indoor: true, venue: true, companions: ["情侣", "朋友", "同事"], moods: ["想冒险", "想热闹", "随便"] },
  { text: "去KTV点想唱的歌，不用全程", minTime: 2, indoor: true, venue: true, companions: ["情侣", "朋友", "同事"], moods: ["想热闹", "随便"] },
  { text: "找一个观景台或天台看夜景", minTime: 2, companions: ["情侣", "朋友"], moods: ["想放松", "想治愈", "随便"] },
  { text: "一起在网上淘一件对方挑的东西", minTime: 1, indoor: true, companions: ["情侣"], moods: ["想热闹", "随便"] },
  { text: "去剧本杀玩一局", minTime: 3, indoor: true, venue: true, companions: ["情侣", "朋友", "同事"], moods: ["想冒险", "想热闹", "随便"] },
  { text: "找一家live house听一场小型演出", minTime: 3, companions: ["情侣", "朋友"], moods: ["想热闹", "想治愈", "随便"] },
  { text: "约会开始时各买一束花互赠", minTime: 1, companions: ["情侣"], moods: ["想治愈", "想放松", "随便"] }
);

// 朋友 / 同事场景
materials.activity.push(
  { text: "约几个人打一下午牌", minTime: 2, companions: ["朋友", "同事", "家人"], moods: ["想热闹", "随便"] },
  { text: "去轰趴馆包场玩一晚", minTime: 3, companions: ["朋友", "同事"], moods: ["想热闹", "随便"] },
  { text: "一起玩联机游戏，各自在家连麦", minTime: 2, indoor: true, companions: ["朋友", "同事"], moods: ["想热闹", "随便"] },
  { text: "约人喝茶聊天，找个安静的地方坐着", minTime: 2, companions: ["朋友", "情侣", "同事"], moods: ["想放松", "想治愈", "随便"] },
  { text: "去跑马场或卡丁车场玩一次", minTime: 3, companions: ["朋友", "情侣", "同事"], moods: ["想冒险", "想热闹", "随便"] }
);

// 独自/放松场景
materials.activity.push(
  { text: "找个没去过的咖啡馆待一下午", minTime: 2, companions: ["自己", "情侣"], moods: ["想放松", "随便"] },
  { text: "去图书馆泡一下午，看点什么都行", minTime: 2, companions: ["自己", "情侣"], moods: ["想放松", "想治愈", "随便"] },
  { text: "听播客或有声书，同时做点手头的事", minTime: 1, indoor: true, companions: ["自己"], moods: ["想放松", "随便"] },
  { text: "好好泡一个澡，点上蜡烛", minTime: 1, indoor: true, companions: ["自己"], moods: ["想放松", "想治愈", "随便"] },
  { text: "把一直想读的书拿出来看几章", minTime: 1, indoor: true, companions: ["自己", "情侣"], moods: ["想放松", "想治愈", "随便"] },
  { text: "去逛展览，不用有目的", minTime: 2, companions: ["自己", "情侣", "朋友"], moods: ["想放松", "想治愈", "随便"] },
  { text: "找个安静的地方发呆，什么都不用想", minTime: 1, companions: ["自己", "情侣"], moods: ["想放松", "想治愈", "随便"] }
);

// 补充地点
materials.place.push(
  { text: "附近一条绿道或骑行道", minTime: 2, companions: allCompanions, moods: ["想放松", "想冒险", "随便"] },
  { text: "城市里的一座小山或爬山步道", minTime: 3, companions: allCompanions, moods: ["想冒险", "想放松", "随便"] },
  { text: "有意思的独立书店或唱片店", minTime: 2, companions: allCompanions, moods: ["想放松", "想治愈", "随便"] },
  { text: "露营地或野餐公园", minTime: 3, companions: ["情侣", "朋友", "家人"], moods: ["想放松", "想冒险", "随便"] },
  { text: "一家从没去过的咖啡馆", minTime: 1, companions: allCompanions, moods: ["想放松", "想治愈", "随便"] },
  { text: "当地的夜市或小吃街", minTime: 2, companions: allCompanions, moods: ["想热闹", "随便"] },
  { text: "城市里的观景台或高处", minTime: 2, companions: ["情侣", "朋友", "家人"], moods: ["想放松", "想治愈", "随便"] }
);

// 补充美食
materials.food.push(
  { text: "两个人各点一样没吃过的菜", minTime: 2, outdoor: true, companions: ["情侣", "朋友"], moods: ["想冒险", "随便"] },
  { text: "去一家早就想去但一直没去的店", minTime: 2, outdoor: true, companions: allCompanions, moods: ["想热闹", "想冒险", "随便"] },
  { text: "自制一份下午茶，水果蛋糕随便搭", minTime: 2, indoor: true, companions: ["情侣", "朋友", "家人"], moods: ["想放松", "想治愈", "随便"] },
  { text: "逛夜市，每摊各买一份小吃", minTime: 2, outdoor: true, companions: ["情侣", "朋友", "家人"], moods: ["想热闹", "随便"] },
  { text: "买一份网红或新出的东西尝尝", minTime: 1, outdoor: true, companions: allCompanions, moods: ["想热闹", "随便"] }
);

// 更多日常活动场景
materials.activity.push(
  // 家务/居家
  { text: "整理一下冰箱，顺手备点吃的", minTime: 1, indoor: true, companions: ["自己", "家人", "情侣"], moods: ["随便"] },
  { text: "把攒了很久的快递拆一下", minTime: 1, indoor: true, companions: ["自己"], moods: ["随便"] },
  { text: "换一下床单枕套，把房间弄得清爽一点", minTime: 1, indoor: true, companions: ["自己", "家人", "情侣"], moods: ["随便"] },
  { text: "给植物浇水，顺手打理一下阳台", minTime: 1, indoor: true, companions: ["自己", "情侣"], moods: ["想放松", "随便"] },
  { text: "把手机相册整理一下，删掉没用的照片", minTime: 1, indoor: true, companions: ["自己"], moods: ["想放松", "随便"] },
  { text: "收拾一下囤了很久的衣柜", minTime: 2, indoor: true, companions: ["自己", "家人", "情侣"], moods: ["随便"] },
  // 户外休闲
  { text: "去附近的湖边或河边坐坐", minTime: 1, companions: allCompanions, moods: ["想放松", "想治愈", "随便"], snackOnly: true },
  { text: "找个安静的地方随便走走，不用目的地", minTime: 1, companions: allCompanions, moods: ["想放松", "随便"], snackOnly: true },
  { text: "去广场跳广场舞或看别人跳", minTime: 1, companions: ["家人", "朋友", "情侣"], moods: ["想热闹", "随便"], snackOnly: true },
  { text: "找个公园长椅坐着发呆晒太阳", minTime: 1, companions: allCompanions, moods: ["想放松", "想治愈", "随便"], snackOnly: true },
  { text: "去附近跳蚤市场或旧货市场逛逛", minTime: 2, companions: allCompanions, moods: ["想冒险", "想热闹", "随便"] },
  { text: "去花鸟鱼虫市场随便转转", minTime: 2, companions: allCompanions, moods: ["想放松", "想热闹", "随便"], snackOnly: true },
  { text: "找一处有水的地方待着，不用做什么", minTime: 2, companions: allCompanions, moods: ["想放松", "想治愈", "随便"], snackOnly: true },
  // 社交聚会
  { text: "在家开个小派对，每人带一样东西来", minTime: 3, indoor: true, companions: ["朋友", "家人"], moods: ["想热闹", "随便"] },
  { text: "约上几个人一起看场球赛", minTime: 2, indoor: true, companions: ["朋友", "家人", "同事"], moods: ["想热闹", "随便"] },
  { text: "和朋友一起去泡温泉或汗蒸", minTime: 3, companions: ["朋友", "情侣", "家人"], moods: ["想放松", "想治愈", "随便"], snackOnly: true },
  { text: "去洗个头发或做个简单护理", minTime: 2, companions: ["自己", "情侣", "朋友"], moods: ["想放松", "随便"], snackOnly: true },
  { text: "约朋友一起去逛二手店或古着店", minTime: 2, companions: ["朋友", "情侣"], moods: ["想热闹", "想冒险", "随便"] },
  // 文化艺术
  { text: "去看一场小剧场话剧或演出", minTime: 3, companions: ["情侣", "朋友", "家人"], moods: ["想热闹", "想治愈", "随便"] },
  { text: "去博物馆或科技馆随便看看", minTime: 3, companions: allCompanions, moods: ["想放松", "想冒险", "随便"] },
  { text: "去一处网红打卡地，哪怕只是路过", minTime: 2, companions: allCompanions, moods: ["想热闹", "随便"], snackOnly: true },
  { text: "在家听一张完整的专辑，不做别的", minTime: 1, indoor: true, companions: ["自己", "情侣"], moods: ["想放松", "想治愈", "随便"] },
  // 学习探索
  { text: "去一家没去过的菜场，认认不熟悉的菜", minTime: 1, companions: allCompanions, moods: ["想冒险", "随便"], snackOnly: true },
  { text: "随机选一个地铁站下车，往不知道的方向走", minTime: 2, companions: ["情侣", "朋友"], moods: ["想冒险", "随便"], snackOnly: true },
  { text: "找一家新开的店，进去看看什么样子", minTime: 1, companions: allCompanions, moods: ["想冒险", "想热闹", "随便"] },
  // 带娃更多
  { text: "带孩子去儿童图书馆借几本绘本", minTime: 2, companions: ["家人", "情侣"], moods: ["想放松", "随便"], contexts: ["带娃"] },
  { text: "在家和孩子一起玩积木或拼图", minTime: 1, indoor: true, companions: ["家人", "情侣"], moods: ["想放松", "随便"], contexts: ["带娃"] },
  { text: "带孩子去科技馆或自然博物馆", minTime: 3, companions: ["家人", "情侣"], moods: ["想热闹", "想冒险", "随便"], contexts: ["带娃"] },
  { text: "去游乐场玩旋转木马或小型游乐设施", minTime: 2, companions: ["家人", "情侣"], moods: ["想热闹", "随便"], contexts: ["带娃"] },
  { text: "带孩子去草莓或蔬菜采摘", minTime: 3, companions: ["家人", "情侣", "朋友"], moods: ["想热闹", "想冒险", "随便"], contexts: ["带娃"] }
);

// 更多地点
materials.place.push(
  { text: "附近的湖边或河岸步道", minTime: 1, companions: allCompanions, moods: ["想放松", "想治愈", "随便"] },
  { text: "社区附近的广场或运动场", minTime: 1, companions: allCompanions, moods: ["想热闹", "随便"] },
  { text: "一处有水景的公园或湿地", minTime: 2, companions: allCompanions, moods: ["想放松", "想治愈", "随便"] },
  { text: "附近的跳蚤市场或集市", minTime: 2, companions: allCompanions, moods: ["想热闹", "想冒险", "随便"] },
  { text: "城市里的老茶馆或老字号", minTime: 2, companions: allCompanions, moods: ["想放松", "想治愈", "随便"] },
  { text: "有意思的创意园区或文创街区", minTime: 2, companions: allCompanions, moods: ["想放松", "想冒险", "随便"] },
  { text: "附近的花鸟市场或园艺店", minTime: 1, companions: allCompanions, moods: ["想放松", "随便"] },
  { text: "一家有特色的小吃街或美食城", minTime: 2, companions: allCompanions, moods: ["想热闹", "随便"] },
  { text: "城市边缘的一条安静小路", minTime: 2, companions: ["自己", "情侣", "朋友"], moods: ["想放松", "想治愈", "随便"] },
  { text: "家附近从来没进去过的一栋楼或街道", minTime: 1, companions: allCompanions, moods: ["想冒险", "随便"] }
);

// 更多美食
materials.food.push(
  { text: "一碗地道的本地早点", minTime: 1, outdoor: true, companions: allCompanions, moods: ["想放松", "随便"], snack: true },
  { text: "街边摊上刚出炉的烤红薯或玉米", minTime: 1, outdoor: true, streetSnack: true, companions: allCompanions, moods: ["想放松", "随便"], snack: true },
  { text: "逛市场时随手买的当季水果", minTime: 1, outdoor: true, companions: allCompanions, moods: ["想放松", "随便"], snack: true },
  { text: "附近评分最高的那家小馆子", minTime: 2, outdoor: true, companions: allCompanions, moods: ["想热闹", "随便"] },
  { text: "一份可以边走边吃的手持食物", minTime: 1, outdoor: true, companions: allCompanions, moods: ["想热闹", "随便"], snack: true },
  { text: "冰淇淋或刨冰，夏天必备", minTime: 1, outdoor: true, companions: allCompanions, moods: ["想放松", "想热闹", "随便"], snack: true },
  { text: "街边的炸串或关东煮", minTime: 1, outdoor: true, streetSnack: true, companions: allCompanions, moods: ["想热闹", "随便"], snack: true }
  );

// 更多主题
themes.push(
  { name: "随机漫步计划", moods: ["想冒险", "随便"], weather: ["不限", "晴天"] },
  { name: "周末充电模式", moods: ["想放松", "想治愈", "随便"], weather: ["不限", "晴天", "雨天", "炎热", "寒冷"] },
  { name: "吃货突袭行动", moods: ["想热闹", "想冒险", "随便"], weather: ["不限", "晴天", "雨天"] },
  { name: "户外打卡计划", moods: ["想冒险", "想热闹", "随便"], weather: ["不限", "晴天"] },
  { name: "治愈慢生活", moods: ["想治愈", "想放松", "随便"], weather: ["不限", "晴天", "雨天", "寒冷"] }
);

// 更多角色
extras.role.push(
  "随机冒险者", "日常体验官", "美食搜寻者",
  "周末规划师", "治愈小助手", "城市探索员", "生活记录者"
);

// 更多目标
extras.goal.push(
  "在熟悉的地方找到一件没注意过的事",
  "今天不看手机，专心陪身边的人",
  "吃到一样真正好吃的东西就够了",
  "把积累的压力踢一脚出去",
  "今天只做让自己舒服的事"
);

// 更多居家/休闲/夜间活动
materials.activity.push(
  // 居家放松
  { text: "煮一锅粥或汤，慢慢等着", minTime: 2, indoor: true, cookingActivity: true, companions: ["自己", "家人", "情侣"], moods: ["想放松", "想治愈", "随便"] },
  { text: "在家做一套简单的拉伸或瑜伽", minTime: 1, indoor: true, companions: ["自己", "情侣"], moods: ["想放松", "随便"] },
  { text: "重新布置一下书桌或客厅小角落", minTime: 1, indoor: true, companions: ["自己", "家人", "情侣"], moods: ["随便"] },
  { text: "翻出旧照片或相册，一张一张看", minTime: 1, indoor: true, companions: ["自己", "家人", "情侣"], moods: ["想放松", "想治愈", "随便"] },
  { text: "点一根香薰蜡烛，把灯关掉坐一会儿", minTime: 1, indoor: true, companions: ["自己", "情侣"], moods: ["想放松", "想治愈", "随便"] },
  { text: "随手写几行字，不用成篇", minTime: 1, indoor: true, companions: ["自己"], moods: ["想放松", "想治愈", "随便"] },
  { text: "研究一道没做过的菜，对照菜谱做一遍", minTime: 2, indoor: true, cookingActivity: true, companions: ["自己", "家人", "情侣", "朋友"], moods: ["想热闹", "随便"] },
  { text: "一起玩一局扑克或骰子，输了要表演节目", minTime: 1, indoor: true, companions: ["家人", "情侣", "朋友"], moods: ["想热闹", "随便"] },
  { text: "找出很久没用过的画材，随便涂涂", minTime: 1, indoor: true, companions: ["自己", "情侣"], moods: ["想放松", "想治愈", "随便"] },
  { text: "点外卖，好好摆盘，假装餐厅", minTime: 1, indoor: true, companions: ["自己", "家人", "情侣"], moods: ["想放松", "随便"] },
  { text: "冬天在家开暖气，围桌吃一顿火锅", minTime: 2, indoor: true, companions: ["家人", "朋友", "情侣"], moods: ["想热闹", "想治愈", "随便"] },
  // 户外探索
  { text: "去夜市或夜间小吃街逛一圈", minTime: 2, companions: allCompanions, moods: ["想热闹", "随便"] },
  { text: "找个高处或屋顶，等一次日落", minTime: 2, companions: ["情侣", "朋友", "自己"], moods: ["想放松", "想治愈", "随便"], snackOnly: true },
  { text: "去河边或湖边坐着钓鱼或发呆", minTime: 2, companions: allCompanions, moods: ["想放松", "随便"], snackOnly: true },
  { text: "去附近大学校园里逛逛", minTime: 2, companions: allCompanions, moods: ["想放松", "想治愈", "随便"], snackOnly: true },
  { text: "去书城随便翻翻，不买也没关系", minTime: 2, companions: allCompanions, moods: ["想放松", "随便"] },
  { text: "骑车绕城区慢慢兜一圈", minTime: 3, companions: ["自己", "情侣", "朋友", "家人"], moods: ["想放松", "想冒险", "随便"], snackOnly: true },
  { text: "去老城区的弄堂或小巷里穿行", minTime: 2, companions: allCompanions, moods: ["想放松", "想冒险", "随便"], snackOnly: true },
  { text: "在街边找家好看的理发或美甲店，随便做一下", minTime: 2, companions: ["自己", "情侣", "朋友"], moods: ["随便"] },
  { text: "去城市植物园或花卉展里看看", minTime: 2, companions: allCompanions, moods: ["想放松", "想治愈", "随便"], snackOnly: true },
  { text: "夜里出去走走，看看城市不一样的样子", minTime: 1, companions: ["自己", "情侣", "朋友"], moods: ["想放松", "想冒险", "随便"], snackOnly: true },
  { text: "去老字号或口碑店排个号，体验一下", minTime: 2, companions: allCompanions, moods: ["想热闹", "随便"] },
  // 季节性活动
  { text: "趁花开了去公园赏花，顺便野餐", minTime: 2, companions: allCompanions, moods: ["想放松", "想治愈", "随便"], snackOnly: true },
  { text: "秋天去公园踩落叶，顺手拍几张", minTime: 2, companions: allCompanions, moods: ["想放松", "想治愈", "随便"], snackOnly: true },
  { text: "去果园或采摘地，随便摘点当季的", minTime: 3, companions: ["家人", "情侣", "朋友"], moods: ["想热闹", "想冒险", "随便"], snackOnly: true },
  { text: "下雨天窝在家里看一整天电影", minTime: 3, indoor: true, companions: ["自己", "情侣", "朋友"], moods: ["想放松", "随便"] },
  // 个人记录
  { text: "随手拍一组今天的照片，当作日常记录", minTime: 1, companions: allCompanions, moods: ["想放松", "随便"], snackOnly: true },
  { text: "翻出一样以前喜欢但很久没碰的东西", minTime: 1, indoor: true, companions: ["自己"], moods: ["想放松", "想治愈", "随便"] },
  { text: "用手机录一段小Vlog，不用剪辑", minTime: 1, companions: allCompanions, moods: ["想热闹", "随便"] },
  // 亲子更多
  { text: "陪孩子认识公园里的花草和小虫", minTime: 2, companions: ["家人", "情侣"], moods: ["想放松", "随便"], contexts: ["带娃"], snackOnly: true },
  { text: "在家一起给孩子读睡前故事", minTime: 1, indoor: true, companions: ["家人", "情侣"], moods: ["想治愈", "随便"], contexts: ["带娃"] },
  { text: "带孩子去超市，让他自己选一样零食", minTime: 1, companions: ["家人", "情侣"], moods: ["随便"], contexts: ["带娃"] },
  { text: "带孩子玩水或踩水坑", minTime: 1, companions: ["家人", "情侣"], moods: ["想热闹", "随便"], contexts: ["带娃"], snackOnly: true },
  { text: "在家给孩子做一顿他最想吃的饭", minTime: 2, indoor: true, cookingActivity: true, companions: ["家人", "情侣"], moods: ["想治愈", "随便"], contexts: ["带娃"] },
  // 家人/长辈
  { text: "去看望一下父母或长辈，带点东西过去", minTime: 2, companions: ["自己", "情侣"], moods: ["想治愈", "随便"] },
  { text: "陪家里老人出门散步，走慢一点", minTime: 1, companions: ["家人"], moods: ["想放松", "想治愈", "随便"], snackOnly: true },
  { text: "和家人一起看一部老电影或老剧", minTime: 2, indoor: true, companions: ["家人"], moods: ["想放松", "想治愈", "随便"] },
  // 社交/聚会补充
  { text: "去浴场或洗浴中心泡一下，好好放松", minTime: 3, companions: ["朋友", "情侣", "家人"], moods: ["想放松", "想治愈", "随便"] },
  { text: "找几个人一起包饺子或做点心", minTime: 2, indoor: true, cookingActivity: true, companions: ["家人", "朋友", "情侣"], moods: ["想热闹", "想治愈", "随便"] },
  { text: "约上几个老朋友喝夜茶聊天", minTime: 2, companions: ["朋友", "同事"], moods: ["想热闹", "想治愈", "随便"] },
  { text: "找个不熟悉的同事或邻居聊聊", minTime: 1, companions: ["同事"], moods: ["想治愈", "随便"] }
);

// 更多美食
materials.food.push(
  { text: "一锅自己煮的泡面，料加满", minTime: 1, indoor: true, companions: ["自己", "情侣", "朋友"], moods: ["想放松", "随便"] },
  { text: "刚出炉的肉夹馍或手抓饼", minTime: 1, outdoor: true, companions: allCompanions, moods: ["想热闹", "随便"], snack: true },
  { text: "路边新开的店随便试一杯", minTime: 1, outdoor: true, companions: allCompanions, moods: ["想冒险", "随便"], snack: true },
  { text: "拿几样零食凑一份随机组合", minTime: 1, companions: allCompanions, moods: ["随便"], snack: true },
  { text: "自制水果捞或果盘", minTime: 1, indoor: true, companions: ["自己", "家人", "情侣"], moods: ["想放松", "想治愈", "随便"], snack: true },
  { text: "买一份水果捞或果盘带着", minTime: 1, outdoor: true, companions: allCompanions, moods: ["想放松", "想治愈", "随便"], snack: true },
  { text: "卤味拼盘，买回家慢慢吃", minTime: 1, indoor: true, companions: allCompanions, moods: ["想放松", "随便"], snack: true },
  { text: "一碗热腾腾的汤粉或汤面", minTime: 2, outdoor: true, companions: allCompanions, moods: ["想治愈", "想放松", "随便"] },
  { text: "烧烤一盘，随便点，管够", minTime: 2, outdoor: true, companions: ["朋友", "情侣", "家人", "同事"], moods: ["想热闹", "随便"] },
  { text: "随手买的一袋当季水果", minTime: 1, indoor: true, companions: allCompanions, moods: ["想放松", "随便"], snack: true },
  { text: "大家一起包的饺子", minTime: 2, indoor: true, companions: ["家人", "朋友", "情侣"], moods: ["想热闹", "想治愈", "随便"] }
);

// 更多地点
materials.place.push(
  { text: "城市滨江步道", minTime: 2, companions: allCompanions, moods: ["想放松", "想冒险", "随便"] },
  { text: "附近大学校园", minTime: 2, companions: allCompanions, moods: ["想放松", "想治愈", "随便"] },
  { text: "老城区的一条弄堂或胡同", minTime: 2, companions: allCompanions, moods: ["想冒险", "想放松", "随便"] },
  { text: "城市植物园或花卉展", minTime: 2, companions: allCompanions, moods: ["想放松", "想治愈", "随便"] },
  { text: "一家口碑很好的老字号", minTime: 2, companions: allCompanions, moods: ["想热闹", "想治愈", "随便"] },
  { text: "城市夜市聚集的那条街", minTime: 2, companions: allCompanions, moods: ["想热闹", "随便"] },
  { text: "附近安静的居民区小巷", minTime: 1, companions: ["自己", "情侣", "朋友"], moods: ["想放松", "想治愈", "随便"] },
  { text: "可以看到城市全景的高处", minTime: 2, companions: ["情侣", "朋友", "自己"], moods: ["想放松", "想治愈", "随便"] },
  { text: "一家有意思的独立影院", minTime: 2, companions: ["情侣", "朋友", "家人"], moods: ["想放松", "想治愈", "随便"] },
  { text: "果园或农场采摘区", minTime: 3, companions: ["家人", "情侣", "朋友"], moods: ["想热闹", "想冒险", "随便"] }
);

// 更多主题
themes.push(
  { name: "季节限定日", moods: ["想放松", "想冒险", "随便"], weather: ["不限", "晴天"] },
  { name: "家庭温暖日", moods: ["想治愈", "想放松", "随便"], weather: ["不限", "晴天", "雨天", "炎热", "寒冷"] },
  { name: "夜间漫步计划", moods: ["想热闹", "想冒险", "随便"], weather: ["不限", "晴天"] },
  { name: "宅家修整日", moods: ["想放松", "随便"], weather: ["雨天", "炎热", "寒冷", "不限"], indoorOnly: true },
  { name: "深度陪伴时光", moods: ["想治愈", "想放松", "随便"], weather: ["不限", "晴天", "雨天"] },
  { name: "今日随机漫游", moods: ["想冒险", "随便"], weather: ["不限", "晴天"] }
);

// 更多角色和目标
extras.role.push(
  "随机生活观察员", "临时家庭厨师", "周末放空使者",
  "今日快乐制造机", "生活慢镜头导演", "临时探店侦察兵", "当天日记记录员"
);
extras.goal.push(
  "记住今天某一个普通的瞬间",
  "不规划，跟着感觉走就对了",
  "给平淡的一天加一点颜色",
  "把今天的状态留在某个地方",
  "让身边的人今天笑一次",
  "好好睡一觉之前，把今天过好"
);

// 水上/沙滩/海边
materials.activity.push(
  { text: "去海边走走，光脚踩一踩沙滩", minTime: 3, companions: allCompanions, moods: ["想放松", "想治愈", "随便"], snackOnly: true },
  { text: "去海边捡贝壳或看涨潮退潮", minTime: 3, companions: allCompanions, moods: ["想放松", "想治愈", "随便"], snackOnly: true },
  { text: "租一个橡皮艇或皮划艇在水面上漂一漂", minTime: 3, companions: ["情侣", "朋友", "家人"], moods: ["想冒险", "想热闹", "随便"], snackOnly: true },
  { text: "去水库或湖边玩水，脚踩进去感受一下", minTime: 2, companions: allCompanions, moods: ["想放松", "随便"], snackOnly: true },
  { text: "去溪边玩水，找石头垒一垒", minTime: 2, companions: ["家人", "朋友", "情侣"], moods: ["想热闹", "想放松", "随便"], snackOnly: true },
  { text: "去漂流，夏天解暑最合适", minTime: 3, companions: ["朋友", "家人", "情侣"], moods: ["想冒险", "想热闹", "随便"], snackOnly: true },
  { text: "去海边看日落，不说话也行", minTime: 3, companions: allCompanions, moods: ["想放松", "想治愈", "随便"], snackOnly: true }
);

// 攀爬/涉水/户外挑战
materials.activity.push(
  { text: "找一条有难度的爬山路线挑战一下", minTime: 3, companions: ["朋友", "情侣", "家人"], moods: ["想冒险", "随便"], snackOnly: true },
  { text: "去攀岩，室外岩壁或室内馆都行", minTime: 2, companions: ["朋友", "情侣", "同事"], moods: ["想冒险", "想热闹", "随便"], snackOnly: true },
  { text: "找一段山间溯溪路线，踩着石头走", minTime: 3, companions: ["朋友", "家人", "情侣"], moods: ["想冒险", "随便"], snackOnly: true },
  { text: "去玩高空滑索或丛林穿越", minTime: 3, companions: ["朋友", "情侣", "同事"], moods: ["想冒险", "想热闹", "随便"], snackOnly: true },
  { text: "去蹦极或跳台高空项目挑战一次", minTime: 3, companions: ["朋友", "情侣"], moods: ["想冒险", "随便"], snackOnly: true },
  { text: "骑山地车走一段越野路线", minTime: 3, companions: ["朋友", "情侣"], moods: ["想冒险", "随便"], snackOnly: true },
  { text: "去玩射箭或飞镖，找一家训练场", minTime: 2, companions: ["朋友", "情侣", "同事"], moods: ["想热闹", "随便"] }
);

// 儿童游乐/亲子娱乐
materials.activity.push(
  { text: "带孩子去大型游乐场玩过山车或旋转木马", minTime: 3, companions: ["家人", "情侣"], moods: ["想热闹", "随便"], contexts: ["带娃"] },
  { text: "去儿童水上乐园，在水滑梯里疯一下午", minTime: 3, companions: ["家人", "情侣"], moods: ["想热闹", "随便"], contexts: ["带娃"], snackOnly: true },
  { text: "带孩子去蹦床公园跳个够", minTime: 2, companions: ["家人", "情侣"], moods: ["想热闹", "随便"], contexts: ["带娃"], snackOnly: true },
  { text: "带孩子去沙坑或儿童沙滩玩沙子", minTime: 1, companions: ["家人", "情侣"], moods: ["想放松", "随便"], contexts: ["带娃"], snackOnly: true },
  { text: "带孩子去自然农场认识小动物", minTime: 3, companions: ["家人", "情侣"], moods: ["想放松", "想热闹", "随便"], contexts: ["带娃"], snackOnly: true },
  { text: "带孩子去儿童剧场看一场演出", minTime: 2, companions: ["家人", "情侣"], moods: ["想放松", "想治愈", "随便"], contexts: ["带娃"] },
  { text: "带孩子去体验陶艺或手工课", minTime: 2, companions: ["家人", "情侣"], moods: ["想放松", "随便"], contexts: ["带娃"] },
  { text: "在家和孩子一起搭乐高或拼大拼图", minTime: 2, indoor: true, companions: ["家人", "情侣"], moods: ["想放松", "随便"], contexts: ["带娃"] }
);

// 运动健身
materials.activity.push(
  { text: "去健身房练一小时，随便练什么", minTime: 1, companions: ["自己", "朋友", "情侣"], moods: ["想放松", "随便"], snackOnly: true },
  { text: "约人打一场篮球或五人制足球", minTime: 2, companions: ["朋友", "同事"], moods: ["想热闹", "随便"], snackOnly: true },
  { text: "去网球场或乒乓馆练两局", minTime: 2, companions: ["情侣", "朋友", "同事"], moods: ["想热闹", "随便"], snackOnly: true },
  { text: "去公共泳池游几圈，不用计时", minTime: 2, companions: ["自己", "朋友", "情侣"], moods: ["想放松", "随便"], snackOnly: true },
  { text: "在家跟着视频练一套瑜伽或健身操", minTime: 1, indoor: true, companions: ["自己", "情侣"], moods: ["想放松", "随便"] },
  { text: "去公园晨练，跟着老年人做一套广播体操", minTime: 1, companions: allCompanions, moods: ["想热闹", "随便"], snackOnly: true },
  { text: "去轮滑场或滑板场转几圈", minTime: 2, companions: ["朋友", "情侣", "家人"], moods: ["想热闹", "想冒险", "随便"], snackOnly: true },
  { text: "去打高尔夫练习场挥几桶球", minTime: 2, companions: ["朋友", "同事", "情侣"], moods: ["想放松", "随便"], snackOnly: true }
);

// 更多地点补充
materials.place.push(
  { text: "附近的海边或沿海步道", minTime: 3, companions: allCompanions, moods: ["想放松", "想冒险", "随便"] },
  { text: "城市里的大型游乐场", minTime: 3, companions: ["家人", "情侣", "朋友"], moods: ["想热闹", "随便"] },
  { text: "周边的山间徒步步道", minTime: 3, companions: allCompanions, moods: ["想冒险", "想放松", "随便"] },
  { text: "附近的水库或湖边", minTime: 2, companions: allCompanions, moods: ["想放松", "想治愈", "随便"] },
  { text: "城市里的室内游乐场或综合娱乐中心", minTime: 2, companions: ["家人", "朋友", "情侣"], moods: ["想热闹", "随便"] },
  { text: "周边的乡村或农家乐", minTime: 3, companions: ["家人", "朋友", "情侣"], moods: ["想放松", "想治愈", "随便"] },
  { text: "附近的温泉度假村", minTime: 3, companions: ["情侣", "朋友", "家人"], moods: ["想放松", "想治愈", "随便"] }
);

// 更多主题
themes.push(
  { name: "户外挑战日", moods: ["想冒险", "随便"], weather: ["不限", "晴天"] },
  { name: "水边慢时光", moods: ["想放松", "想治愈", "随便"], weather: ["不限", "晴天", "炎热"] },
  { name: "运动出汗计划", moods: ["想放松", "想冒险", "随便"], weather: ["不限", "晴天"] },
  { name: "亲子快乐日", moods: ["想热闹", "随便"], weather: ["不限", "晴天"] }
);

// 更多角色
extras.role.push(
  "水边发呆观察员", "亲子快乐督导员", "户外冒险先锋",
  "今日体验测评师", "临时健身教练", "周末自然向导"
);

module.exports = { timeLevels, materials, extras, boldTripScenes, boldTripActivities, generateFateStory };
