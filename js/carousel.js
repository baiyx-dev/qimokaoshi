document.addEventListener("DOMContentLoaded", function () {
  var slides = Array.from(document.querySelectorAll(".slide"));
  var dots = Array.from(document.querySelectorAll(".dot"));
  var prev = document.querySelector("[data-carousel='prev']");
  var next = document.querySelector("[data-carousel='next']");
  var index = 0;
  var timer;

  function showSlide(nextIndex) {
    index = (nextIndex + slides.length) % slides.length;
    slides.forEach(function (slide, i) {
      slide.classList.toggle("active", i === index);
    });
    dots.forEach(function (dot, i) {
      dot.classList.toggle("active", i === index);
    });
  }

  function start() {
    timer = setInterval(function () {
      showSlide(index + 1);
    }, 4200);
  }

  function reset() {
    clearInterval(timer);
    start();
  }

  if (!slides.length) return;
  showSlide(0);
  start();

  if (prev) {
    prev.addEventListener("click", function () {
      showSlide(index - 1);
      reset();
    });
  }

  if (next) {
    next.addEventListener("click", function () {
      showSlide(index + 1);
      reset();
    });
  }

  dots.forEach(function (dot, i) {
    dot.addEventListener("click", function () {
      showSlide(i);
      reset();
    });
  });
});
