const avatarOptions = ["😎", "🐱", "🐻", "🐰", "🦊", "🐼", "🐵", "🦁"];
const { modes, defaultOptions } = require("../../data/modes");
const { getTemplateById, makeTemplateOptions } = require("../../data/templates");
const optionHints = {
  bill: "例如：添加参与者姓名",
  eat: "例如：火锅、烧烤、日料",
  do: "例如：看电影、去散步、打游戏",
  starter: "例如：小明、小红、主持人",
  coin: "例如：正面、反面",
  number: "例如：8、16、1-100、200-300",
  movie: "例如：喜剧片、悬疑片、动画片",
  weekend: "例如：公园、商场、周边短途游",
  truth: "例如：讲糗事、模仿动物、分享秘密",
  group: "例如：1组、2组、3组",
  challenge: "例如：喝水、早睡、走8000步",
  custom: "例如：选项一、选项二、选项三"
};

const optionEmojiOptions = ["🍀", "🎉", "🎈", "🌟", "🔥", "✨", "🪄", "🎯", "🎲", "🎁"];
const modeEmojiMap = {
  eat: ["🍜", "🍔", "🍕", "🍣", "🥗", "🍲"],
  do: ["🎬", "🚶", "🎮", "🏃", "🧹", "😴"],
  starter: ["🚀", "🎤", "🙋", "⚡"],
  coin: ["🪙", "💿"],
  number: ["🎲"],
  movie: ["🎬", "🍿", "🎞️", "📺", "🎥"],
  weekend: ["🗺️", "🏞️", "🏕️", "🏝️", "🏙️"],
  truth: ["😈", "🤫", "🎲", "🙈", "🔥"],
  group: ["1️⃣", "2️⃣", "3️⃣"],
  challenge: ["🔥", "💪", "⏰", "📌", "✅"],
  custom: ["🎡", "✨", "🎯"],
  blind: ["🎁", "🎊", "✨", "🎉", "🎈", "🪄"]
};
const modePickerEmojiMap = {
  eat: ["🍜", "🍔", "🍕", "🍣", "🥗", "🍲", "🍛", "🍱", "🥟", "🌮", "🥪", "🍤"],
  do: ["🎬", "🚶", "🎮", "🏃", "🧹", "😴", "🎵", "📚", "🛍️", "🧘", "📷", "🎨"],
  starter: ["🚀", "🎤", "🙋", "⚡", "🥇", "🎉", "🫡", "👏"],
  coin: ["🪙", "💿", "☀️", "🌙", "🔴", "🔵", "✋", "🤚"],
  number: ["🎲", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "🔢", "🧮"],
  movie: ["🎬", "🍿", "🎞️", "📺", "🎥", "👻", "😂", "🕵️", "🤖", "💕", "🐉", "🌌"],
  weekend: ["🗺️", "🏞️", "🏕️", "🏝️", "🏙️", "🎡", "🚗", "🚄", "⛺", "🛶", "🌄", "🏖️"],
  truth: ["😈", "🤫", "🎲", "🙈", "🔥", "💥", "👀", "🎭", "🫣", "💬", "⚠️", "🎪"],
  group: ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "👥", "🧩", "🏷️", "📣"],
  challenge: ["🔥", "💪", "⏰", "📌", "✅", "🏃", "💧", "🌙", "🎯", "📝", "🥦", "📵"],
  custom: ["🎡", "✨", "🎯", "🎁", "🌟", "🎈", "🎉", "🪄"],
  blind: ["🎁", "🎊", "✨", "🎉", "🎈", "🪄", "🌟", "🎀"]
};
const keywordEmojiMap = [
  { words: ["火锅", "烧烤", "烤肉", "串"], emoji: "🍲" },
  { words: ["面", "粉", "粥", "饭", "米"], emoji: "🍜" },
  { words: ["寿司", "日料"], emoji: "🍣" },
  { words: ["汉堡", "快餐"], emoji: "🍔" },
  { words: ["披萨", " pizza "], emoji: "🍕" },
  { words: ["电影", "影片"], emoji: "🎬" },
  { words: ["游戏"], emoji: "🎮" },
  { words: ["运动", "跑步"], emoji: "🏃" },
  { words: ["散步", "逛街"], emoji: "🚶" },
  { words: ["公园", "爬山", "旅行"], emoji: "🌳" },
  { words: ["购物", "商场"], emoji: "🛍️" },
  { words: ["睡觉", "休息"], emoji: "😴" },
  { words: ["音乐", "唱歌"], emoji: "🎵" },
  { words: ["挑战", "任务"], emoji: "🎯" }
];

function makeId() {
  return `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
}

Page({
  data: {
    participants: [],
    modes,
    activeMode: "bill",
    currentMode: modes[0],
    modeTitle: modes[0].title,
    modeListTitle: modes[0].listTitle,
    modeCountText: "3 / 12",
    modeResultLabel: modes[0].resultLabel,
    modeButtonText: modes[0].buttonText,
    isBillMode: true,
    options: [],
    result: null,
    isDrawing: false,
    showModal: false,
    newName: "",
    selectedAvatar: avatarOptions[0],
    avatarOptions,
    showOptionModal: false,
    newOption: "",
    optionHint: optionHints.bill,
    optionEmojiOptions,
    currentOptionEmojiOptions: optionEmojiOptions,
    selectedOptionEmoji: optionEmojiOptions[0],
    keyboardActive: false,
    showSaveModal: false,
    saveName: "",
    savedWheelId: "",
    canDraw: false,
    wheelItems: [],
    wheelGradient: "conic-gradient(#ffd7c5 0deg 360deg)",
    wheelRotation: 0,
    showResultModal: false,
    billHistory: [],
    betText: "",
    showBetInput: false,
    isBlindMode: false,
    isRevealing: false
  },
  onLoad(options) {
    const participants = [
      { id: makeId(), name: "我", avatar: "😎" },
      { id: makeId(), name: "朋友A", avatar: "🐱" },
      { id: makeId(), name: "朋友B", avatar: "🐻" }
    ];
    wx.removeStorageSync("billParticipants");
    wx.removeStorageSync("pendingModeOptions");
    this.setData({ participants });
    const template = options.templateId ? getTemplateById(options.templateId) : null;
    const modeId = template ? template.mode : (options.mode || "bill");
    const savedWheels = wx.getStorageSync("commonWheels") || [];
    const savedWheel = options.savedId ? savedWheels.find(item => item.id === options.savedId) : null;
    const pendingOptions = savedWheel ? savedWheel.options : (template ? makeTemplateOptions(template) : null);
    this.refreshMode(modeId, participants, pendingOptions);
    if (template) {
      const currentMode = { ...this.data.currentMode, name: template.name, title: template.name, desc: template.desc, listTitle: "模板选项" };
      this.setData({ currentMode, modeTitle: template.name, modeListTitle: "模板选项" });
    }
    if (savedWheel) {
      this.setData({ savedWheelId: savedWheel.id, saveName: savedWheel.name });
    }
  },
  onShow() {
    if (this.data.participants.length) {
      wx.setStorageSync("billParticipants", this.data.participants);
    }
  },
  showAddModal() {
    this.setData({ showModal: true, newName: "", selectedAvatar: avatarOptions[0], keyboardActive: true });
  },
  changeMode(e) {
    this.refreshMode(e.currentTarget.dataset.id);
  },
  refreshMode(modeId, participants = this.data.participants, pendingOptions) {
    const currentMode = modes.find(item => item.id === modeId) || modes[0];
    let options = this.data.options;
    if (modeId === "bill") {
      options = [];
    } else if (pendingOptions && pendingOptions.length && modeId !== "bill") {
      options = pendingOptions;
    } else if (modeId === "coin") {
      options = [{ id: "heads", name: "正面", icon: "🪙" }, { id: "tails", name: "反面", icon: "💿" }];
    } else if (modeId === "number") {
      options = [{ id: "number", name: "1 - 100", icon: "🎲" }];
    } else if (modeId !== "custom" && modeId !== "blind") {
      options = defaultOptions[modeId].map((name, index) => ({
        id: `${modeId}-${index}`,
        name,
        icon: (modeEmojiMap[modeId] || optionEmojiOptions)[index % (modeEmojiMap[modeId] || optionEmojiOptions).length]
      }));
    } else if (!options.length) {
      const defaults = defaultOptions[modeId] || defaultOptions.custom;
      options = defaults.map((name, index) => ({ id: `${modeId}-${index}`, name, icon: modeId === "blind" ? "🎁" : "✨" }));
    }
    const isBillMode = modeId === "bill";
    const canDraw = isBillMode ? participants.length >= 2 : modeId === "number" || options.length >= 2;
    const modeCountText = isBillMode ? `${participants.length} 人` : `${options.length} 个选项`;
    options = isBillMode ? options : this.assignUniqueIcons(options, modeId);
    participants = isBillMode ? this.assignUniqueIcons(participants, "bill") : participants;
    const rawWheelItems = isBillMode
      ? participants.map(item => ({ ...item, icon: item.avatar || "🙂" }))
      : options;
    const wheelItems = this.decorateWheelItems(rawWheelItems);
    const isBlindMode = modeId === "blind";
    // 盲盒模式：转盘上的标签全部显示 ?
    const displayWheelItems = isBlindMode
      ? wheelItems.map(item => ({ ...item, displayName: "?" }))
      : wheelItems;
    this.setData({
      activeMode: modeId,
      currentMode,
      modeTitle: currentMode.title,
      modeListTitle: currentMode.listTitle,
      modeCountText,
      modeResultLabel: currentMode.resultLabel,
      modeButtonText: currentMode.buttonText,
      optionHint: optionHints[modeId] || "例如：添加一个选项",
      isBillMode,
      participants,
      options,
      canDraw,
      result: null,
      wheelItems: displayWheelItems,
      wheelGradient: this.makeWheelGradient(wheelItems),
      isBlindMode,
      isRevealing: false
    });
  },
  makeWheelGradient(items) {
    if (!items.length) return "conic-gradient(#ffd7c5 0deg 360deg)";
    const colors = ["#ff9676", "#ffd166", "#77c8a4", "#78b7e8", "#9b8cff", "#e99bc5"];
    const segment = 360 / items.length;
    return `conic-gradient(${items.map((item, index) => `${colors[index % colors.length]} ${index * segment}deg ${(index + 1) * segment}deg`).join(",")})`;
  },
  parseNumberRange(text) {
    const match = String(text).match(/^\s*(-?\d+(?:\.\d+)?)\s*[-~至到]\s*(-?\d+(?:\.\d+)?)\s*$/);
    if (!match) {
      const single = String(text).match(/^\s*-?\d+(?:\.\d+)?\s*$/);
      if (!single) return null;
      const value = Number(single[0]);
      return { min: value, max: value };
    }
    const first = Number(match[1]);
    const second = Number(match[2]);
    return {
      min: Math.min(first, second),
      max: Math.max(first, second)
    };
  },
  decorateWheelItems(items) {
    if (!items.length) return [];
    const segment = 360 / items.length;
    return items.map((item, index) => {
      const angle = index * segment + segment / 2;
      const name = String(item.name);
      const displayName = name.length > 10 ? `${name.slice(0, 10)}…` : name;
      const fontSize = name.length > 12 || items.length > 8 ? 18 : 22;
      const radians = angle * Math.PI / 180;
      const labelRadius = 122;
      const x = Math.sin(radians) * labelRadius;
      const y = Math.cos(radians) * labelRadius;
      return {
        ...item,
        displayName,
        labelStyle: `left: calc(50% + ${x}rpx); top: calc(50% - ${y}rpx); font-size: ${fontSize}rpx; transform: translate(-50%, -50%) rotate(${angle + 90}deg);`
      };
    });
  },
  getOptionIcon(name, modeId = this.data.activeMode, existingOptions = this.data.options) {
    const usedIcons = new Set(existingOptions.map(item => item.icon).filter(Boolean));
    const normalizedName = String(name).toLowerCase();
    const matched = keywordEmojiMap.find(rule =>
      rule.words.some(word => normalizedName.includes(word.trim().toLowerCase()))
    );
    const modeIcons = modeEmojiMap[modeId] || optionEmojiOptions;
    const candidates = matched
      ? [matched.emoji, ...modeIcons]
      : modeIcons;
    return candidates.find(icon => !usedIcons.has(icon)) || candidates[0];
  },
  assignUniqueIcons(items, modeId = this.data.activeMode) {
    const usedIcons = new Set();
    return items.map(item => {
      const icon = this.getOptionIcon(
        item.name,
        modeId,
        Array.from(usedIcons).map(value => ({ icon: value }))
      );
      usedIcons.add(icon);
      return { ...item, icon };
    });
  },
  hideAddModal() {
    this.setData({ showModal: false, keyboardActive: false });
  },
  stopPropagation() {},
  onNameInput(e) {
    this.setData({ newName: e.detail.value });
  },
  selectAvatar(e) {
    this.setData({ selectedAvatar: e.currentTarget.dataset.avatar });
  },
  addParticipant() {
    const name = this.data.newName.trim();
    if (!name) {
      wx.showToast({ title: "先输入昵称", icon: "none" });
      return;
    }
    if (this.data.participants.some(item => item.name === name)) {
      wx.showToast({ title: "这个昵称已经在场", icon: "none" });
      return;
    }
    const participantIcon = this.getOptionIcon(
      name,
      "bill",
      this.data.participants.map(item => ({ icon: item.avatar }))
    );
    const participants = this.data.participants.concat({
      id: makeId(),
      name,
      avatar: participantIcon
    });
    wx.setStorageSync("billParticipants", participants);
    this.setData({ participants, showModal: false, newName: "", result: null });
    this.refreshMode(this.data.activeMode, participants);
  },
  removeParticipant(e) {
    const id = e.currentTarget.dataset.id;
    const participants = this.data.participants.filter(item => item.id !== id);
    wx.setStorageSync("billParticipants", participants);
    this.setData({ participants, result: null });
    this.refreshMode(this.data.activeMode, participants);
  },
  showOptionModal() {
    const pickerOptions = modePickerEmojiMap[this.data.activeMode]
      || modeEmojiMap[this.data.activeMode]
      || optionEmojiOptions;
    this.setData({
      showOptionModal: true,
      newOption: "",
      keyboardActive: true,
      currentOptionEmojiOptions: pickerOptions,
      selectedOptionEmoji: pickerOptions[0]
    });
  },
  hideOptionModal() {
    this.setData({ showOptionModal: false, keyboardActive: false });
  },
  showSaveModal() {
    this.setData({ showSaveModal: true, saveName: this.data.saveName || "", keyboardActive: true });
  },
  hideSaveModal() {
    this.setData({ showSaveModal: false, keyboardActive: false });
  },
  onSaveNameInput(e) {
    this.setData({ saveName: e.detail.value });
  },
  saveCommonWheel() {
    const name = this.data.saveName.trim();
    if (!name) {
      wx.showToast({ title: "请输入转盘名称", icon: "none" });
      return;
    }
    const wheels = wx.getStorageSync("commonWheels") || [];
    const wheel = {
      id: this.data.savedWheelId || `wheel-${Date.now()}`,
      name,
      mode: this.data.activeMode,
      modeName: this.data.currentMode.name,
      icon: this.data.currentMode.icon,
      options: this.data.options.map(item => ({ id: item.id, name: item.name, icon: item.icon })),
      updatedAt: new Date().toLocaleString("zh-CN", { hour12: false })
    };
    const next = [wheel].concat(wheels.filter(item => item.id !== wheel.id)).slice(0, 30);
    wx.setStorageSync("commonWheels", next);
    this.setData({ showSaveModal: false, savedWheelId: wheel.id, saveName: name });
    wx.showToast({ title: "已保存", icon: "success" });
  },
  onOptionInput(e) {
    this.setData({ newOption: e.detail.value });
  },
  selectOptionEmoji(e) {
    this.setData({ selectedOptionEmoji: e.currentTarget.dataset.emoji });
  },
  addOption() {
    const names = this.data.newOption
      .split(/[、\s]+/)
      .map(name => name.trim())
      .filter(Boolean);
    if (!names.length) {
      wx.showToast({ title: "先输入选项", icon: "none" });
      return;
    }
    const existingNames = new Set(this.data.options.map(item => item.name));
    const options = this.data.options.slice();
    names.forEach(name => {
      if (existingNames.has(name)) return;
      const icon = this.getOptionIcon(name, this.data.activeMode, options);
      options.push({ id: makeId(), name, icon });
      existingNames.add(name);
    });
    if (options.length === this.data.options.length) {
      wx.showToast({ title: "选项已存在", icon: "none" });
      return;
    }
    const wheelItems = this.decorateWheelItems(options);
    this.setData({
      options,
      showOptionModal: false,
      newOption: "",
      result: null,
      canDraw: options.length >= 2,
      wheelItems,
      wheelGradient: this.makeWheelGradient(options)
    });
  },
  shareResult() {
    if (!this.data.result) {
      wx.showToast({ title: "请先转出结果", icon: "none" });
      return;
    }
    const ctx = wx.createCanvasContext("result-poster-canvas", this);
    const result = this.data.result;
    const posterTitle = this.data.currentMode?.title || this.data.modeTitle || "随机决定";
    const optionNames = (this.data.isBillMode ? this.data.participants : this.data.options)
      .map(item => item.name)
      .slice(0, 6)
      .join("    ");

    const funSubtitles = {
      bill: ["不是我选的，是命运选的 🤭", "别怪我，怪转盘就好", "宇宙认为你今天请客"],
      eat: ["今天的胃，交给命运安排", "选择困难症的终极解法 🍜", "它选的，必须好吃"],
      do: ["懒得想？让命运帮你安排", "说干就干，不许摸鱼", "今日任务，随机下达"],
      starter: ["谁先来？命运点名了 🚀", "没有借口，转盘认证", "先后有序，命运排列"],
      coin: ["古老智慧，一抛定乾坤 🪙", "正反之间，命运一线", "老祖宗的决策方法"],
      number: ["数字从不说谎 🎲", "随机，但绝对公平", "宇宙选中了这个数"],
      movie: ["今晚的影单，命运推荐 🎬", "不纠结了，就看这个", "命运影评人上线"],
      weekend: ["周末去哪，老天来定 🗺️", "说走就走，命运导航", "最随性的出行指南"],
      truth: ["真心话大冒险，开始 😈", "抽到啥做啥，没商量", "逃不掉的，迟早都要来"],
      group: ["公平分组，命运保证 👥", "随机，但很公正", "组队靠缘分"],
      challenge: ["打卡任务已下达 🔥", "命运出的题，你来答", "坚持七天，你可以的"],
      custom: ["你的转盘，你的命运 🎡", "万物皆可随机", "随机里藏着惊喜"]
    };
    const modeId = this.data.activeMode;
    const subtitles = funSubtitles[modeId] || funSubtitles.custom;
    const funSubtitle = subtitles[Math.floor(Math.random() * subtitles.length)];

    const funDescs = {
      bill: ["钱包，准备好了吗？💸", "友谊的小船，安全着陆", "下次提前说没带手机 📱"],
      eat: ["今天就它了，不许换！", "闭眼吃，肯定好吃", "命运推荐，拒绝踩雷"],
      do: ["说干就干，不许摸鱼", "就这么定了，行动吧", "转盘说了算，不准反悔"],
      starter: ["幸运儿，请就位 🚀", "荣誉与压力并存", "掌声鼓励一下 👏"],
      coin: ["硬币不会骗人 🪙", "听硬币的，没问题", "古法决策，效果拔群"],
      number: ["这就是命运的数字", "随机，但很有道理", "记住它，这是缘分"],
      movie: ["今晚不许换片！", "命运影评人强烈推荐 🍿", "闭眼入，绝对好看"],
      weekend: ["出发吧，别犹豫了 🧳", "好玩不好玩，去了才知道", "打卡这里，记得发朋友圈"],
      truth: ["鼓起勇气，做就完了", "这关逃不掉的，加油 😈", "大家等着呢，别磨叽"],
      group: ["天意如此，服从分配", "这组最强！（随机认证）", "队友靠缘分，配合靠努力"],
      challenge: ["从今天开始，坚持就是赢", "打卡七天，你行的 💪", "命运出题，你来破关"],
      custom: ["命运已经替你决定了", "选了就别后悔 🎯", "就是这个，没有更好的选项了"]
    };
    const descs = funDescs[modeId] || funDescs.custom;
    const funDesc = result.desc && result.desc !== "命运已经替你做出决定。"
      ? result.desc
      : descs[Math.floor(Math.random() * descs.length)];

    const gradient = ctx.createLinearGradient(0, 0, 750, 1000);
    gradient.addColorStop(0, "#ff8b62");
    gradient.addColorStop(1, "#ee4f68");

    // 背景
    ctx.setFillStyle(gradient);
    ctx.fillRect(0, 0, 750, 1000);

    // 装饰圆
    ctx.setFillStyle("rgba(255,255,255,.16)");
    ctx.beginPath();
    ctx.arc(660, 90, 160, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(60, 880, 200, 0, Math.PI * 2);
    ctx.fill();
    ctx.setFillStyle("rgba(255,255,255,.08)");
    ctx.beginPath();
    ctx.arc(375, 150, 300, 0, Math.PI * 2);
    ctx.fill();

    // 顶部标题
    ctx.setFillStyle("#ffffff");
    ctx.setFontSize(posterTitle.length > 10 ? 28 : 34);
    ctx.fillText(posterTitle, 54, 90);
    ctx.setFillStyle("rgba(255,255,255,.82)");
    ctx.setFontSize(24);
    ctx.fillText(funSubtitle, 54, 132);

    // 结果卡片
    ctx.setFillStyle("#fff8ed");
    ctx.fillRect(44, 196, 662, 420);

    // 卡片红色顶栏
    ctx.setFillStyle("#ee5b57");
    ctx.fillRect(44, 196, 662, 58);
    ctx.setFillStyle("#ffffff");
    ctx.setFontSize(24);
    ctx.setTextAlign("center");
    ctx.fillText("✨  命运已经揭晓  ✨", 375, 234);

    // 结果标签（动态，来自各模式配置）
    ctx.setFillStyle("#a78368");
    ctx.setFontSize(26);
    ctx.fillText(this.data.modeResultLabel || "结果揭晓", 375, 306);

    // 结果名字（大字）
    ctx.setFillStyle("#ee5b57");
    const nameFontSize = result.name.length > 6 ? 58 : result.name.length > 3 ? 74 : 88;
    ctx.setFontSize(nameFontSize);
    ctx.fillText(result.name, 375, 432);

    // 结果趣味描述
    ctx.setFillStyle("#806d63");
    ctx.setFontSize(24);
    ctx.fillText(funDesc, 375, 488);

    // 卡片底部趣味口号（融入卡片，用暖棕色）
    ctx.setFillStyle("#f0dfc8");
    ctx.fillRect(78, 522, 594, 2);
    ctx.setFillStyle("#c4956a");
    ctx.setFontSize(22);
    ctx.fillText("转盘说了算，不许抵赖 😎", 375, 580);

    ctx.setTextAlign("left");

    // 二维码背景
    const qrX = 548;
    const qrY = 790;
    const qrSize = 126;
    ctx.setFillStyle("#ffffff");
    ctx.fillRect(qrX - 12, qrY - 12, qrSize + 24, qrSize + 24);
    const drawFinder = (x, y) => {
      ctx.setFillStyle("#241c21");
      ctx.fillRect(x, y, 34, 34);
      ctx.setFillStyle("#ffffff");
      ctx.fillRect(x + 6, y + 6, 22, 22);
      ctx.setFillStyle("#241c21");
      ctx.fillRect(x + 12, y + 12, 10, 10);
    };
    drawFinder(qrX, qrY);
    drawFinder(qrX + 92, qrY);
    drawFinder(qrX, qrY + 92);
    ctx.setFillStyle("#241c21");
    const qrDots = [
      [48, 8], [60, 8], [72, 8], [48, 20], [72, 20], [48, 32], [60, 32],
      [48, 50], [60, 50], [72, 50], [84, 50], [36, 62], [60, 62], [84, 62],
      [96, 62], [36, 74], [48, 74], [72, 74], [96, 74], [48, 86], [72, 86],
      [84, 86], [96, 86], [60, 98], [72, 98], [84, 98], [108, 98], [108, 110]
    ];
    qrDots.forEach(([x, y]) => ctx.fillRect(qrX + x, qrY + y, 8, 8));

    ctx.setFillStyle("rgba(255,255,255,.86)");
    ctx.setFontSize(22);
    ctx.fillText("扫码打开小程序，再来一次 ~", 54, 852);
    ctx.setFontSize(20);
    ctx.fillText("把结果晒给朋友，让决定更有趣", 54, 900);

    ctx.draw(false, () => {
      wx.canvasToTempFilePath({
        canvasId: "result-poster-canvas",
        width: 750,
        height: 1000,
        destWidth: 1500,
        destHeight: 2000,
        success: res => {
          if (wx.showShareImageMenu) {
            wx.showShareImageMenu({ path: res.tempFilePath });
          } else {
            wx.saveImageToPhotosAlbum({
              filePath: res.tempFilePath,
              success: () => wx.showToast({ title: "海报已保存", icon: "success" }),
              fail: () => wx.showToast({ title: "请允许保存到相册", icon: "none" })
            });
          }
        },
        fail: () => wx.showToast({ title: "海报生成失败", icon: "none" })
      }, this);
    });
  },
    removeOption(e) {
    const options = this.data.options.filter(item => item.id !== e.currentTarget.dataset.id);
    const wheelItems = this.decorateWheelItems(options);
    this.setData({
      options,
      result: null,
      canDraw: options.length >= 2,
      wheelItems,
      wheelGradient: this.makeWheelGradient(options)
    });
  },
  drawWinner() {
    if (this.data.isDrawing || !this.data.canDraw) return;
    this.setData({ isDrawing: true, result: null });
    let winner;
    let winnerIndex;
    if (this.data.activeMode === "bill") {
      winnerIndex = Math.floor(Math.random() * this.data.participants.length);
      const item = this.data.participants[winnerIndex];
      winner = { ...item, desc: "别紧张，下次一定轮到别人 😄" };
    } else if (this.data.activeMode === "number") {
      winnerIndex = Math.floor(Math.random() * this.data.options.length);
      const selectedRange = this.data.options[winnerIndex];
      const range = this.parseNumberRange(selectedRange.name);
      if (!range) {
        wx.showToast({ title: "请输入类似 1-100 的范围", icon: "none" });
        this.setData({ isDrawing: false });
        return;
      }
      const number = Number.isInteger(range.min) && Number.isInteger(range.max)
        ? Math.floor(Math.random() * (range.max - range.min + 1)) + range.min
        : (Math.random() * (range.max - range.min) + range.min).toFixed(2);
      winner = {
        id: "number-result",
        name: String(number),
        avatar: "😎",
        desc: `来自范围 ${selectedRange.name}`
      };
    } else {
      winnerIndex = Math.floor(Math.random() * this.data.options.length);
      const item = this.data.options[winnerIndex];
      winner = { ...item, desc: "命运已经替你做出决定。" };
    }
    const segment = this.data.wheelItems.length ? 360 / this.data.wheelItems.length : 360;
    const currentRotation = ((this.data.wheelRotation % 360) + 360) % 360;
    const targetAngle = (360 - (winnerIndex || 0) * segment - segment / 2 + 360) % 360;
    const settleRotation = (targetAngle - currentRotation + 360) % 360;
    const targetRotation = this.data.wheelRotation + 1440 + settleRotation;
    this.setData({ wheelRotation: targetRotation });
    setTimeout(() => {
      this.setData({ isDrawing: false, result: winner, showResultModal: true, isRevealing: this.data.activeMode === "blind", betText: "" });
      wx.vibrateShort({ type: "heavy" });
      // 盲盒模式：翻牌动画完成后停止 revealing 状态
      if (this.data.activeMode === "blind") {
        setTimeout(() => this.setData({ isRevealing: false }), 700);
      }
      // 记录历史
      const history = wx.getStorageSync("wheelHistory") || [];
      history.unshift({
        id: makeId(),
        mode: this.data.activeMode,
        modeName: this.data.currentMode.name,
        modeIcon: this.data.currentMode.icon,
        resultName: winner.name,
        resultDesc: winner.desc,
        bet: "",
        time: new Date().toLocaleString("zh-CN", { hour12: false })
      });
      wx.setStorageSync("wheelHistory", history.slice(0, 50));
    }, 1250);
  },
  closeResultModal() {
    this.setData({ showResultModal: false });
  },
  drawAgain() {
    this.setData({ showResultModal: false, result: null });
    setTimeout(() => this.drawWinner(), 100);
  },
  shareAndClose() {
    this.setData({ showResultModal: false });
    this.shareResult();
  },
  // 分组模式：一键把所有人分完
  groupAll() {
    const items = this.data.isBillMode ? this.data.participants : this.data.options;
    if (items.length < 2) {
      wx.showToast({ title: "至少需要 2 个选项", icon: "none" });
      return;
    }
    const shuffled = items.slice().sort(() => Math.random() - 0.5);
    const groupNames = this.data.options.map(o => o.name);
    const groupCount = groupNames.length || 2;
    const groups = Array.from({ length: groupCount }, (_, i) => ({
      name: groupNames[i] || `${i + 1}组`,
      members: []
    }));
    shuffled.forEach((item, i) => {
      groups[i % groupCount].members.push(item.name);
    });
    const resultText = groups.map(g => `${g.name}：${g.members.join("、")}`).join("\n");
    wx.showModal({
      title: "分组结果",
      content: resultText,
      showCancel: false,
      confirmText: "好的"
    });
  }
});







