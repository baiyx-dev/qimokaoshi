document.addEventListener("DOMContentLoaded", function () {
  var current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach(function (link) {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    }
  });

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav-list");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", nav.classList.contains("open"));
    });
  }
});
