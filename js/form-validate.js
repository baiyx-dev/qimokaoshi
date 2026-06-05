document.addEventListener("DOMContentLoaded", function () {
  var forms = document.querySelectorAll("[data-validate]");

  function setError(form, name, message) {
    var error = form.querySelector("[data-error='" + name + "']");
    if (error) error.textContent = message || "";
  }

  function validateExperience(form) {
    var ok = true;
    var name = form.elements.userName.value.trim();
    var phone = form.elements.phone.value.trim();
    var activity = form.elements.activity.value;
    var date = form.elements.date.value;
    var agree = form.elements.agree.checked;

    setError(form, "userName", "");
    setError(form, "phone", "");
    setError(form, "activity", "");
    setError(form, "date", "");
    setError(form, "agree", "");

    if (name.length < 2) {
      setError(form, "userName", "姓名至少 2 个字符");
      ok = false;
    }
    if (!/^1[3-9]\d{9}$/.test(phone)) {
      setError(form, "phone", "手机号格式有误");
      ok = false;
    }
    if (!activity) {
      setError(form, "activity", "请选择体验活动");
      ok = false;
    }
    if (!date) {
      setError(form, "date", "请选择预约日期");
      ok = false;
    }
    if (!agree) {
      setError(form, "agree", "请先确认报名信息无误");
      ok = false;
    }
    return ok;
  }

  function validateLogin(form) {
    var account = form.elements.account.value.trim();
    var password = form.elements.password.value.trim();
    setError(form, "account", account ? "" : "账号不能为空");
    setError(form, "password", password.length >= 6 ? "" : "密码不少于 6 位");
    return account && password.length >= 6;
  }

  function validateContact(form) {
    var contactName = form.elements.contactName.value.trim();
    var email = form.elements.email.value.trim();
    var message = form.elements.message.value.trim();
    setError(form, "contactName", contactName ? "" : "姓名不能为空");
    setError(form, "email", /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "" : "邮箱格式有误");
    setError(form, "message", message.length >= 10 ? "" : "内容再丰富一点");
    return contactName && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && message.length >= 10;
  }

  function renderExperienceReceipt(form, status) {
    var activity = form.elements.activity;
    var people = form.querySelector("input[name='people']:checked");
    var code = "QSSY-" + new Date().getTime().toString().slice(-6);
    var rows = [
      ["预约编号", code],
      ["体验项目", activity.options[activity.selectedIndex].text],
      ["预约日期", form.elements.date.value],
      ["参与人数", people ? people.parentNode.textContent.trim() : "1 人"]
    ];
    status.innerHTML = "";
    var title = document.createElement("strong");
    title.textContent = "预约已生成";
    status.appendChild(title);
    var list = document.createElement("dl");
    rows.forEach(function (row) {
      var dt = document.createElement("dt");
      var dd = document.createElement("dd");
      dt.textContent = row[0];
      dd.textContent = row[1];
      list.appendChild(dt);
      list.appendChild(dd);
    });
    status.appendChild(list);
  }

  forms.forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var ok = true;
      if (form.dataset.validate === "experience") ok = validateExperience(form);
      if (form.dataset.validate === "login") ok = validateLogin(form);
      if (form.dataset.validate === "contact") ok = validateContact(form);
      var status = form.querySelector("[data-form-status]");
      if (status) {
        var successText = "已开启。";
        if (form.dataset.validate === "experience") successText = "预约已点亮。";
        if (form.dataset.validate === "login") successText = "欢迎回来。";
        if (form.dataset.validate === "contact") successText = "合作邀约已送达。";
        status.className = ok ? "success" : "error";
        if (ok && form.dataset.validate === "experience") {
          renderExperienceReceipt(form, status);
        } else {
          status.textContent = ok ? successText : "再补充一点信息。";
        }
      }
    });
  });
});
