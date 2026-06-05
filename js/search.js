document.addEventListener("DOMContentLoaded", function () {
  var cards = Array.from(document.querySelectorAll(".project-card"));
  var keyword = document.querySelector("#projectKeyword");
  var category = document.querySelector("#projectCategory");
  var region = document.querySelector("#projectRegion");
  var sort = document.querySelector("#projectSort");
  var result = document.querySelector("#projectCount");
  var list = document.querySelector("#projectList");
  var wishListView = document.querySelector("#projectWishListView");
  var selectedName = "";
  var projectDetails = {
    "安塞腰鼓": {
      intro: "安塞腰鼓看的不是某一个动作，而是队伍推进时形成的整体气势。鼓点、步伐和队形一旦连起来，陕北黄土地的力量感就会扑面而来。",
      highlights: ["鼓点一响，黄土飞扬", "动作开阔，气势奔涌", "节庆现场，热烈开场"],
      history: "流行于陕北安塞一带，常与春节、庙会、庆典和广场展演相连，是黄土高原民间舞蹈中极具力量感的代表。",
      process: ["系鼓整装，统一头巾与服饰", "鼓点起势，完成踢腿、转身、跨步等动作", "队形推进，形成群体节奏和视觉冲击"],
      inheritors: "刘延河、曹怀荣等代表性传承人长期参与安塞腰鼓训练、表演和传习。",
      value: "它把陕北人的节庆情绪、身体力量和地域性格集中呈现，适合做体验式教学和校园展演。",
      source: "央视网",
      sourceUrl: "https://news.cctv.cn/2026/02/02/ARTI1QMBaSvDG0GdMMa5XwXu260202.shtml",
      experience: "基础鼓点与队形体验"
    },
    "华县皮影戏": {
      intro: "华县皮影把雕刻、上色、操影和唱腔放在同一个表演系统里。影偶从工作台走到灯幕前，中间每一步都不轻松。",
      highlights: ["灯影一亮，人物登场", "刻线染彩，精巧入微", "戏剧与美术同台绽放"],
      history: "华县皮影戏扎根渭南华州民间，兼具皮影雕刻、唱腔音乐和幕后台前表演，是陕西皮影的重要代表。",
      process: ["选皮制坯，描样雕刻", "染色压平，装订关节", "灯幕后操影，配合唱腔和乐队完成演出"],
      inheritors: "刘华代表华县皮影戏表演传承，薛宏权代表华州皮影制作技艺传习。",
      value: "它把传统戏剧和传统美术放在同一套系统里，适合展示“看得见的手艺”和“听得见的戏曲”。",
      source: "新华网",
      sourceUrl: "https://www.news.cn/politics/20251102/9bfcd5608e944ab9b934cde2fafa47fc/c.html",
      experience: "皮影人物上色体验"
    },
    "秦腔": {
      intro: "秦腔的辨识度在声音和行当。锣鼓一起，唱腔一开，关中戏台的气口就出来了。",
      highlights: ["唱腔高亢", "行当和板式分明", "关中味道很重"],
      history: "秦腔是西北地区影响广泛的戏曲声腔，长期活跃于关中戏台、剧场和民间节庆空间。",
      process: ["认行当，理解生旦净丑的舞台分工", "听板式，分辨唱腔节奏和情绪", "看身段，观察水袖、台步和锣鼓配合"],
      inheritors: "秦腔传承依托院团、戏校、剧场和民间票友共同延续，人物线索可在后续页面继续扩展。",
      value: "秦腔能代表关中声音和地方审美，是网站中连接戏曲、城市文化和校园传播的重要项目。",
      source: "央视网",
      sourceUrl: "https://news.cctv.com/2025/03/31/ARTINeEIn80Z6ipXDrTEk9Gl250331.shtml",
      experience: "秦腔行当与唱腔体验"
    },
    "凤翔泥塑": {
      intro: "凤翔泥塑从泥胎、描线、上色到晾干，一步一步都看得见。造型质朴，颜色热烈，是关中民间美术里很有辨识度的一支。",
      highlights: ["泥胎上色最容易上手", "颜色和造型辨识度高", "常和生肖、年俗连在一起"],
      history: "凤翔泥塑以宝鸡凤翔民间年俗和乡土审美为土壤，生肖、虎、龙等形象长期出现在节庆和民间陈设中。",
      process: ["取泥制坯，模具成型", "晾干打磨，白粉打底", "勾线填彩，完成纹样和表情"],
      inheritors: "胡深、胡新明等代表性传承人持续推动凤翔泥塑的制作、展示和创新传播。",
      value: "它视觉识别度高，适合做文创、课堂彩绘和年俗主题展示，是最容易被学生记住的项目之一。",
      source: "新华网",
      sourceUrl: "https://www.news.cn/local/20240105/c7e033c5849d4c9ca9c7ef6790cf35dd/c.html",
      experience: "凤翔泥塑彩绘体验"
    },
    "宝鸡社火脸谱": {
      intro: "社火脸谱不是孤立的图案，它和社火表演、人物角色、村社活动连在一起。颜色越重，节庆气越足。",
      highlights: ["民俗气息很重", "马勺和脸谱都有角色寓意", "纹样里藏着人物性格"],
      history: "宝鸡社火脸谱来自关中村社节庆和社火表演语境，常以马勺、脸谱、角色纹样等形式传播。",
      process: ["确定人物角色和寓意", "勾勒脸谱纹样结构", "上色描边，形成强烈的节庆视觉"],
      inheritors: "这一类工艺依靠宝鸡民间艺人、非遗工坊和乡村传习场景持续传播。",
      value: "它能把民俗、绘画和角色叙事结合起来，适合做视觉设计、纹样分析和手作体验。",
      source: "新华网",
      sourceUrl: "https://www.news.cn/photo/2023-09/08/c_1129853329.htm",
      experience: "马勺脸谱描摹体验"
    },
    "陕西剪纸": {
      intro: "剪纸最贴近日常生活，窗花、婚俗、春节装饰里都能看见。它不只在展厅里，也在街巷和年节里。",
      highlights: ["图案主题丰富", "常见于窗花和节庆装饰", "与日常生活联系紧密"],
      history: "陕西剪纸广泛分布于陕北、关中等地，和春节、婚俗、窗花、祈福图案等生活场景关系紧密。",
      process: ["折纸构图，确定对称或连续纹样", "剪刻人物、动物、花草和吉祥符号", "展开整理，用于窗花、展陈或教学"],
      inheritors: "高金爱等安塞剪纸代表性传承人让陕北剪纸的质朴造型被更多人看见。",
      value: "剪纸门槛低、表现力强，很适合放进体验页形成“看资料、动手做、带作品走”的闭环。",
      source: "新华网",
      sourceUrl: "https://www.news.cn/photo/2023-02/18/c_1129376397.htm",
      experience: "窗花剪纸体验"
    },
    "黄河老腔": {
      intro: "黄河老腔由船工号子演变而来，声音粗粝、有力量。唱起来不像精修过的舞台声，更像黄河岸边的呼喊。",
      highlights: ["声音辨识度高", "传习进校园", "和黄河文化关联强"],
      history: "华阴老腔与黄河岸边的劳动号子、民间说唱和地方戏曲传统关联紧密，具有鲜明的地域声音。",
      process: ["月琴等乐器起腔", "演员以粗犷唱腔推进叙事", "帮腔、拍板和群体呼应增强现场气势"],
      inheritors: "王振中、张喜民等传承人是华阴老腔传播和舞台实践中的重要人物线索。",
      value: "它适合用声音记忆黄河文化，能和音乐体验、校园传习、影像展示结合起来。",
      source: "新华网",
      sourceUrl: "https://www.news.cn/photo/2022-09/29/c_1129042830.htm",
      experience: "黄河老腔节奏体验"
    },
    "合阳提线木偶": {
      intro: "合阳提线木偶看得见的是线，看不见的是手上的功夫。一个细小动作，台下要练很久。",
      highlights: ["表演动作细节多", "提线结构清晰可见", "和雕刻、戏曲都有关"],
      history: "合阳提线木偶流传于渭南合阳一带，以提线操控、木偶造型和戏曲演出共同构成完整舞台形态。",
      process: ["制作木偶头身和服饰", "连接提线，调整关节灵活度", "演员通过手上线位完成转身、抬手、点头等动作"],
      inheritors: "合阳提线木偶依靠当地剧团、民间艺人和传习活动延续，后续可继续补充具体人物档案。",
      value: "它能清楚展示“结构控制”和“舞台表演”的关系，适合做互动体验和机械结构观察。",
      source: "新华网",
      sourceUrl: "https://www.news.cn/photo/2022-03/04/c_1128439044.htm",
      experience: "提线木偶操控体验"
    }
  };

  function buildModal() {
    var modal = document.createElement("div");
    modal.className = "project-modal";
    modal.id = "projectModal";
    modal.hidden = true;
    modal.innerHTML = [
      '<div class="project-modal-backdrop" data-project-close></div>',
      '<section class="project-modal-card" role="dialog" aria-modal="true" aria-labelledby="projectModalTitle">',
      '<button class="modal-close" type="button" data-project-close aria-label="关闭详情">×</button>',
      '<img id="projectModalImage" class="project-modal-image" src="img/materials/hd/ansai-yangge-drum/ansai-cctv-02.jpg" alt="">',
      '<div class="project-modal-body">',
      '<p id="projectModalMeta" class="modal-meta"></p>',
      '<h2 id="projectModalTitle"></h2>',
      '<p id="projectModalIntro"></p>',
      '<ul id="projectModalHighlights" class="modal-highlights"></ul>',
      '<div id="projectModalDetails" class="modal-detail-grid"></div>',
      '<p id="projectModalExperience" class="modal-experience"></p>',
      '<a id="projectModalSource" class="source-link" href="#" target="_blank" rel="noopener">走进现场</a>',
      '<div class="modal-actions">',
      '<button id="projectWishBtn" class="btn" type="button">先收藏</button>',
      '<a class="btn secondary" href="experience.html">看看体验</a>',
      '</div>',
      '</div>',
      '</section>'
    ].join("");
    document.body.appendChild(modal);
    return modal;
  }

  var modal = cards.length ? buildModal() : null;
  var wishList = new Set(JSON.parse(localStorage.getItem("projectWishList") || "[]"));
  var highlightTargets = [];

  cards.forEach(function (card) {
    card.querySelectorAll("h3, .card-body p").forEach(function (node) {
      node.dataset.rawText = node.textContent;
      highlightTargets.push(node);
    });
  });

  function escapeRegExp(text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function applyHighlights(word) {
    highlightTargets.forEach(function (node) {
      var raw = node.dataset.rawText || node.textContent;
      node.textContent = raw;
      if (!word) return;
      var pattern = new RegExp("(" + escapeRegExp(word) + ")", "gi");
      var parts = raw.split(pattern);
      node.textContent = "";
      parts.forEach(function (part) {
        if (!part) return;
        if (part.toLowerCase() === word.toLowerCase()) {
          var mark = document.createElement("mark");
          mark.textContent = part;
          node.appendChild(mark);
        } else {
          node.appendChild(document.createTextNode(part));
        }
      });
    });
  }

  function saveWishList() {
    localStorage.setItem("projectWishList", JSON.stringify(Array.from(wishList)));
    renderWishList();
  }

  function updateWishButton() {
    var button = document.querySelector("#projectWishBtn");
    if (!button) return;
    var wished = wishList.has(selectedName);
    button.textContent = wished ? "已收藏" : "先收藏";
    button.classList.toggle("is-added", wished);
  }

  function renderWishList() {
    if (!wishListView) return;
    var names = Array.from(wishList);
    wishListView.innerHTML = "";
    if (!names.length) {
      var empty = document.createElement("p");
      empty.className = "wish-empty";
      empty.textContent = "还没有收藏。点开项目详情，把想体验的非遗先收进清单。";
      wishListView.appendChild(empty);
      return;
    }
    names.forEach(function (name) {
      var chip = document.createElement("button");
      chip.type = "button";
      chip.className = "wish-chip";
      chip.textContent = name;
      chip.addEventListener("click", function () {
        var card = cards.find(function (item) {
          return item.dataset.name === name;
        });
        if (card) openProject(card);
      });
      wishListView.appendChild(chip);
    });
  }

  function openProject(card) {
    if (!modal || !card) return;
    selectedName = card.dataset.name;
    var detail = projectDetails[selectedName] || {};
    var image = card.querySelector("img");
    var categoryText = card.querySelector(".project-meta span:first-child") ? card.querySelector(".project-meta span:first-child").textContent : "";
    var regionText = card.querySelector(".project-meta span:last-child") ? card.querySelector(".project-meta span:last-child").textContent : "";
    var modalImage = document.querySelector("#projectModalImage");
    document.querySelector("#projectModalTitle").textContent = selectedName;
    document.querySelector("#projectModalMeta").textContent = [categoryText, regionText, "入选年份：" + card.dataset.year].filter(Boolean).join(" · ");
    document.querySelector("#projectModalIntro").textContent = detail.intro || card.querySelector(".card-body p").textContent;
    document.querySelector("#projectModalExperience").textContent = detail.experience || "";
    document.querySelector("#projectModalSource").textContent = "走进现场";
    document.querySelector("#projectModalSource").href = detail.sourceUrl || "#";
    modalImage.src = image ? image.getAttribute("src") : "";
    modalImage.alt = selectedName + "大图";

    var listNode = document.querySelector("#projectModalHighlights");
    listNode.innerHTML = "";
    (detail.highlights || []).forEach(function (item) {
      var li = document.createElement("li");
      li.textContent = item;
      listNode.appendChild(li);
    });

    var detailGrid = document.querySelector("#projectModalDetails");
    detailGrid.innerHTML = "";
    [
      ["历史渊源", detail.history],
      ["技艺流程", detail.process],
      ["代表传承", detail.inheritors],
      ["保护价值", detail.value]
    ].forEach(function (block) {
      if (!block[1] || !detailGrid) return;
      var section = document.createElement("section");
      section.className = "modal-detail-block";
      var title = document.createElement("h3");
      title.textContent = block[0];
      section.appendChild(title);
      if (Array.isArray(block[1])) {
        var ol = document.createElement("ol");
        block[1].forEach(function (item) {
          var li = document.createElement("li");
          li.textContent = item;
          ol.appendChild(li);
        });
        section.appendChild(ol);
      } else {
        var p = document.createElement("p");
        p.textContent = block[1];
        section.appendChild(p);
      }
      detailGrid.appendChild(section);
    });

    modal.hidden = false;
    document.body.classList.add("modal-open");
    updateWishButton();
    var close = modal.querySelector(".modal-close");
    if (close) close.focus();
  }

  function closeProject() {
    if (!modal) return;
    modal.hidden = true;
    document.body.classList.remove("modal-open");
  }

  function applyFilters() {
    var word = keyword ? keyword.value.trim().toLowerCase() : "";
    var cate = category ? category.value : "all";
    var area = region ? region.value : "all";
    var visible = 0;

    cards.forEach(function (card) {
      var text = card.textContent.toLowerCase();
      var matchWord = !word || text.indexOf(word) > -1;
      var matchCate = cate === "all" || card.dataset.category === cate;
      var matchRegion = area === "all" || card.dataset.region === area;
      var show = matchWord && matchCate && matchRegion;
      card.hidden = !show;
      if (show) visible += 1;
    });

    if (result) {
      result.textContent = "精选 " + visible + " 项陕西非遗";
    }
    applyHighlights(word);
  }

  function applySort() {
    if (!sort || !list) return;
    var sorted = cards.slice().sort(function (a, b) {
      if (sort.value === "year") {
        return Number(a.dataset.year) - Number(b.dataset.year);
      }
      return a.dataset.name.localeCompare(b.dataset.name, "zh-Hans-CN");
    });
    sorted.forEach(function (card) {
      list.appendChild(card);
    });
    applyFilters();
  }

  [keyword, category, region].forEach(function (control) {
    if (control) control.addEventListener("input", applyFilters);
  });
  if (sort) sort.addEventListener("change", applySort);

  var params = new URLSearchParams(location.search);
  if (params.get("region") && region) {
    region.value = params.get("region");
  }
  if (params.get("category") && category) {
    category.value = params.get("category");
  }

  cards.forEach(function (card) {
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", "查看" + card.dataset.name + "详情");

    var body = card.querySelector(".card-body");
    if (body && !body.querySelector(".project-detail-btn")) {
      var button = document.createElement("button");
      button.className = "project-detail-btn";
      button.type = "button";
      button.textContent = "查看详情";
      body.appendChild(button);
    }

    card.addEventListener("click", function () {
      openProject(card);
    });
    card.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openProject(card);
      }
    });
  });

  if (modal) {
    modal.addEventListener("click", function (event) {
      if (event.target.hasAttribute("data-project-close")) {
        closeProject();
      }
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !modal.hidden) {
        closeProject();
      }
    });
    document.querySelector("#projectWishBtn").addEventListener("click", function () {
      if (!selectedName) return;
      if (wishList.has(selectedName)) {
        wishList.delete(selectedName);
      } else {
        wishList.add(selectedName);
      }
      saveWishList();
      updateWishButton();
    });
  }

  applySort();
  renderWishList();
});
