document.addEventListener("DOMContentLoaded", function () {
  var quiz = document.querySelector("[data-quiz]");
  if (!quiz) return;

  var questionNode = quiz.querySelector("[data-quiz-question]");
  var optionsNode = quiz.querySelector("[data-quiz-options]");
  var progressNode = quiz.querySelector("[data-quiz-progress]");
  var resultNode = quiz.querySelector("[data-quiz-result]");
  var restartButton = quiz.querySelector("[data-quiz-restart]");
  var current = 0;
  var score = 0;
  var questions = [
    {
      text: "陕西戏曲最有代表性的名片是哪一项？",
      answer: "秦腔",
      options: ["秦腔", "茶艺", "昆曲"]
    },
    {
      text: "一灯一幕、操纵影偶讲故事的是哪项非遗？",
      answer: "华县皮影戏",
      options: ["华县皮影戏", "凤翔泥塑", "安塞腰鼓"]
    },
    {
      text: "以红鼓、白头巾和集体鼓点形成气势的是哪项？",
      answer: "安塞腰鼓",
      options: ["黄河老腔", "安塞腰鼓", "陕西剪纸"]
    },
    {
      text: "以生肖、虎、龙等泥胎彩绘见长的是哪项？",
      answer: "凤翔泥塑",
      options: ["合阳提线木偶", "凤翔泥塑", "秦腔"]
    },
    {
      text: "声音粗粝、常和黄河岸边传习相连的是哪项？",
      answer: "黄河老腔",
      options: ["黄河老腔", "宝鸡社火脸谱", "华县皮影戏"]
    }
  ];

  function renderQuestion() {
    var question = questions[current];
    questionNode.textContent = question.text;
    resultNode.textContent = "";
    progressNode.textContent = "第 " + (current + 1) + " / " + questions.length + " 题 · 当前得分 " + score;
    optionsNode.innerHTML = "";
    restartButton.hidden = true;
    question.options.forEach(function (option) {
      var button = document.createElement("button");
      button.type = "button";
      button.textContent = option;
      button.addEventListener("click", function () {
        choose(option, button);
      });
      optionsNode.appendChild(button);
    });
  }

  function choose(option, button) {
    var question = questions[current];
    var correct = option === question.answer;
    if (correct) score += 1;
    Array.from(optionsNode.querySelectorAll("button")).forEach(function (item) {
      item.disabled = true;
      if (item.textContent === question.answer) item.classList.add("correct");
    });
    if (!correct) button.classList.add("wrong");
    resultNode.textContent = correct ? "答对了，这一项很有陕西辨识度。" : "这题选 " + question.answer + " 更合适。";
    window.setTimeout(function () {
      current += 1;
      if (current < questions.length) {
        renderQuestion();
      } else {
        renderResult();
      }
    }, 820);
  }

  function renderResult() {
    questionNode.textContent = "挑战完成";
    optionsNode.innerHTML = "";
    progressNode.textContent = "最终得分 " + score + " / " + questions.length;
    resultNode.textContent = score >= 4 ? "你已经能认出陕西非遗的关键线索。" : "再逛一圈项目页，很多答案都藏在图片和介绍里。";
    restartButton.hidden = false;
  }

  restartButton.addEventListener("click", function () {
    current = 0;
    score = 0;
    renderQuestion();
  });

  renderQuestion();
});
