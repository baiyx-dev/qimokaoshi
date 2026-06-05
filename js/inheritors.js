document.addEventListener("DOMContentLoaded", function () {
  var cards = Array.from(document.querySelectorAll(".inheritor-card"));
  var keyword = document.querySelector("#inheritorKeyword");
  var level = document.querySelector("#inheritorLevel");
  var category = document.querySelector("#inheritorCategory");
  var region = document.querySelector("#inheritorRegion");
  var count = document.querySelector("#inheritorCount");
  var activeName = "";

  var details = {
    "胡深": {
      meta: "国家级代表性传承人 · 泥塑（凤翔泥塑） · 宝鸡凤翔",
      intro: "胡深长期从事凤翔彩绘泥塑制作，作品延续凤翔泥塑质朴、饱满、色彩强烈的民间美术气质。",
      points: ["自幼随家人学习彩绘泥塑", "代表形象包括泥塑马、大座虎等", "适合作为凤翔泥塑人物档案入口"],
      imageNote: "当前配图为凤翔泥塑传习现场图。",
      source: "国家图书馆中国记忆",
      sourceUrl: "https://ich.nlc.cn/detail/1953"
    },
    "胡新明": {
      meta: "国家级代表性传承人 · 泥塑（凤翔泥塑） · 宝鸡凤翔",
      intro: "胡新明是第五批国家级非遗代表性项目泥塑（凤翔泥塑）代表性传承人，长期从事凤翔彩绘泥塑创作。",
      points: ["重视传统题材延续", "推动材料、模具和产品形态创新", "与宝鸡民间工艺传播关系密切"],
      imageNote: "当前配图为凤翔泥塑制作现场图。",
      source: "中国非遗网",
      sourceUrl: "https://www.ihchina.cn/ccr_detail/2881.html"
    },
    "薛宏权": {
      meta: "省级代表性传承人 · 华县皮影制作技艺 · 渭南华州",
      intro: "薛宏权是陕西华州皮影制作技艺省级代表性传承人，新华网报道其通过传习所和创新演出推动华州皮影焕新。",
      points: ["14岁开始接触皮影制作", "擅长皮影雕刻、上色与传习", "适合连接体验页的皮影上色活动"],
      imageNote: "当前配图为薛宏权皮影制作工作照。",
      source: "新华网",
      sourceUrl: "https://www.news.cn/politics/20251102/9bfcd5608e944ab9b934cde2fafa47fc/c.html"
    },
    "刘华": {
      meta: "国家级代表性传承人 · 皮影戏（华县皮影戏） · 渭南华县",
      intro: "刘华是第二批国家级非遗代表性项目皮影戏（华县皮影戏）代表性传承人，长期从事华县皮影音乐与表演。",
      points: ["与东府碗碗腔传统关系紧密", "资料适合补充华县皮影戏项目详情", "展现传统戏剧类非遗的表演维度"],
      imageNote: "当前配图为华县皮影戏演出资料图。",
      source: "中国非遗网",
      sourceUrl: "https://www.ihchina.cn/ccr_detail/1790.html"
    },
    "刘延河": {
      meta: "国家级代表性传承人 · 安塞腰鼓 · 延安安塞",
      intro: "刘延河是第五批国家级非遗代表性项目安塞腰鼓代表性传承人，长期探索适合现代审美的腰鼓训练方法。",
      points: ["自幼接触秧歌和腰鼓", "重视训练方法与队形表达", "适合连接延安地域非遗路线"],
      imageNote: "当前配图为安塞腰鼓人物资料画面。",
      source: "中国非遗网",
      sourceUrl: "https://www.ihchina.cn/ccr_detail/1434/"
    },
    "曹怀荣": {
      meta: "国家级代表性传承人 · 安塞腰鼓 · 延安安塞",
      intro: "曹怀荣是第二批国家级非遗代表性项目安塞腰鼓代表性传承人，从小随父学习腰鼓，掌握安塞腰鼓表演技艺。",
      points: ["代表传统舞蹈类传承谱系", "突出安塞腰鼓家族和师承关系", "可与刘延河形成同项目对照展示"],
      imageNote: "当前配图为安塞腰鼓队员准备现场图。",
      source: "中国非遗网",
      sourceUrl: "https://www.ihchina.cn/ccr_detail/1248/"
    },
    "王振中": {
      meta: "国家级代表性传承人 · 皮影戏（华阴老腔） · 渭南华阴",
      intro: "王振中是第二批国家级非遗代表性项目皮影戏（华阴老腔）代表性传承人，精通乐理和月琴演奏。",
      points: ["推动老腔进入电影、戏剧等传播场景", "体现黄河文化中的声音传统", "适合补充传统音乐/戏剧交叉内容"],
      imageNote: "当前配图为华阴老腔演出现场图。",
      source: "中国非遗网",
      sourceUrl: "https://www.ihchina.cn/ccr_detail/1793.html"
    },
    "张喜民": {
      meta: "国家级代表性传承人 · 华阴老腔 · 渭南华阴",
      intro: "张喜民长期带领班社演出华阴老腔，公开报道记录了其作为华阴老腔传承人的传播实践。",
      points: ["强调班社演出与现场传播", "适合连接黄河老腔项目卡片", "补强渭南区域非遗人物线索"],
      imageNote: "当前配图为华阴老腔传承现场图。",
      source: "中新网",
      sourceUrl: "https://www.chinanews.com.cn/cul/2012/09-20/4198149.shtml"
    },
    "高金爱": {
      meta: "国家级代表性传承人 · 剪纸（安塞剪纸） · 延安安塞",
      intro: "高金爱是第一批国家级非遗代表性项目剪纸（安塞剪纸）代表性传承人，作品造型质朴、剪法浑厚。",
      points: ["代表作品包括《艾虎》等", "体现陕北民间美术与生活礼俗", "适合与剪纸体验、年俗内容联动"],
      imageNote: "当前配图为陕北非遗展演现场图。",
      source: "中国非遗网",
      sourceUrl: "https://www.ihchina.cn/ccr_detail/2624.html"
    },
    "李建中": {
      meta: "国家级代表性传承人 · 民间社火（洋县悬台社火） · 汉中洋县",
      intro: "李建中是第五批国家级非遗代表性项目民间社火（洋县悬台社火）代表性传承人，出身社火世家。",
      points: ["精通悬台社火锣鼓和组装技艺", "补充陕西南部民俗类非遗版图", "让传承人页面地域覆盖更完整"],
      imageNote: "当前配图为民间社火活动现场图。",
      source: "中国非遗网",
      sourceUrl: "https://www.ihchina.cn/ccr_detail/3711.html"
    }
  };

  function buildModal() {
    var modal = document.createElement("div");
    modal.className = "project-modal inheritor-modal";
    modal.id = "inheritorModal";
    modal.hidden = true;
    modal.innerHTML = [
      '<div class="project-modal-backdrop" data-inheritor-close></div>',
      '<section class="project-modal-card" role="dialog" aria-modal="true" aria-labelledby="inheritorModalTitle">',
      '<button class="modal-close" type="button" data-inheritor-close aria-label="关闭详情">×</button>',
      '<img id="inheritorModalImage" class="project-modal-image" src="img/materials/hd/fengxiang-clay/fengxiang-xinhua-video-poster.png" alt="">',
      '<div class="project-modal-body">',
      '<p id="inheritorModalMeta" class="modal-meta"></p>',
      '<h2 id="inheritorModalTitle"></h2>',
      '<p id="inheritorModalIntro"></p>',
      '<ul id="inheritorModalPoints" class="modal-highlights"></ul>',
      '<p id="inheritorModalImageNote" class="modal-experience"></p>',
      '<a id="inheritorModalSource" class="source-link" href="#" target="_blank" rel="noopener">查看公开资料</a>',
      '</div>',
      '</section>'
    ].join("");
    document.body.appendChild(modal);
    return modal;
  }

  var modal = cards.length ? buildModal() : null;

  function applyFilters() {
    var word = keyword ? keyword.value.trim().toLowerCase() : "";
    var selectedLevel = level ? level.value : "all";
    var selectedCategory = category ? category.value : "all";
    var selectedRegion = region ? region.value : "all";
    var visible = 0;

    cards.forEach(function (card) {
      var text = card.textContent.toLowerCase();
      var matchWord = !word || text.indexOf(word) > -1 || (card.dataset.project || "").toLowerCase().indexOf(word) > -1;
      var matchLevel = selectedLevel === "all" || card.dataset.level === selectedLevel;
      var matchCategory = selectedCategory === "all" || card.dataset.category === selectedCategory;
      var matchRegion = selectedRegion === "all" || card.dataset.region === selectedRegion;
      var show = matchWord && matchLevel && matchCategory && matchRegion;
      card.hidden = !show;
      if (show) visible += 1;
    });

    if (count) {
      count.textContent = "当前显示 " + visible + " 位真实传承人";
    }
  }

  function openInheritor(card) {
    if (!modal || !card) return;
    activeName = card.dataset.name;
    var detail = details[activeName] || {};
    var image = card.querySelector("img");
    document.querySelector("#inheritorModalTitle").textContent = activeName;
    document.querySelector("#inheritorModalMeta").textContent = detail.meta || card.querySelector(".inheritor-meta").textContent;
    document.querySelector("#inheritorModalIntro").textContent = detail.intro || card.querySelector(".card-body p").textContent;
    document.querySelector("#inheritorModalImageNote").textContent = detail.imageNote || "";
    document.querySelector("#inheritorModalSource").href = detail.sourceUrl || "#";
    document.querySelector("#inheritorModalSource").textContent = "查看公开资料：" + (detail.source || "来源页面");
    var modalImage = document.querySelector("#inheritorModalImage");
    modalImage.src = image ? image.getAttribute("src") : "";
    modalImage.alt = activeName + "相关图片";

    var points = document.querySelector("#inheritorModalPoints");
    points.innerHTML = "";
    (detail.points || []).forEach(function (item) {
      var li = document.createElement("li");
      li.textContent = item;
      points.appendChild(li);
    });

    modal.hidden = false;
    document.body.classList.add("modal-open");
    modal.querySelector(".modal-close").focus();
  }

  function closeInheritor() {
    if (!modal) return;
    modal.hidden = true;
    document.body.classList.remove("modal-open");
  }

  [keyword, level, category, region].forEach(function (control) {
    if (!control) return;
    control.addEventListener("input", applyFilters);
    control.addEventListener("change", applyFilters);
  });

  cards.forEach(function (card) {
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", "查看" + card.dataset.name + "详情");

    var body = card.querySelector(".card-body");
    if (body && !body.querySelector(".inheritor-detail-btn")) {
      var button = document.createElement("button");
      button.className = "project-detail-btn inheritor-detail-btn";
      button.type = "button";
      button.textContent = "查看档案";
      button.addEventListener("click", function () {
        openInheritor(card);
      });
      body.appendChild(button);
    }

    card.addEventListener("click", function (event) {
      if (event.target.closest("a, button")) return;
      openInheritor(card);
    });
    card.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openInheritor(card);
      }
    });
  });

  if (modal) {
    modal.addEventListener("click", function (event) {
      if (event.target.hasAttribute("data-inheritor-close")) {
        closeInheritor();
      }
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !modal.hidden) {
        closeInheritor();
      }
    });
  }

  applyFilters();
});
