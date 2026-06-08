document.addEventListener("DOMContentLoaded", function () {
  var section = document.querySelector("[data-scroll-video]");
  var video = document.querySelector("#heritageScrollVideo");
  if (!section || !video) return;

  var ticking = false;
  var duration = 0;
  var lastTime = -1;
  var lastSeekAt = 0;
  var isActive = false;
  var frameRate = Math.min(Number(video.dataset.frameRate) || 10, 10);
  var frameStep = 1 / frameRate;
  var minSeekGap = Math.max(110, 1000 / frameRate);
  var sectionTop = 0;
  var scrollable = 1;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var coarsePointer = window.matchMedia("(hover: none), (max-width: 960px)").matches;

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function getProgress() {
    return clamp((window.scrollY - sectionTop) / scrollable, 0, 1);
  }

  function measure() {
    sectionTop = section.getBoundingClientRect().top + window.scrollY;
    scrollable = Math.max(1, section.offsetHeight - window.innerHeight);
  }

  function render() {
    ticking = false;
    if (!isActive || !duration || Number.isNaN(duration)) return;
    var now = performance.now();
    if (now - lastSeekAt < minSeekGap) return;
    var rawTime = getProgress() * duration;
    var targetTime = Math.round(rawTime / frameStep) * frameStep;
    if (lastTime >= 0 && Math.abs(targetTime - lastTime) < frameStep) return;
    lastTime = targetTime;
    lastSeekAt = now;
    if (typeof video.fastSeek === "function") {
      video.fastSeek(targetTime);
    } else {
      video.currentTime = targetTime;
    }
  }

  function requestRender() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(render);
  }

  function init() {
    duration = video.duration;
    video.pause();
    measure();
    if (reduceMotion || coarsePointer) {
      if (duration && !Number.isNaN(duration)) {
        video.currentTime = Math.min(duration * 0.32, 1.2);
      }
      return;
    }
    render();
    window.addEventListener("scroll", requestRender, { passive: true });
    window.addEventListener("resize", function () {
      measure();
      requestRender();
    });
  }

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      isActive = entries.some(function (entry) {
        return entry.isIntersecting;
      });
      if (isActive) requestRender();
    }, { threshold: 0.02 });
    observer.observe(section);
  } else {
    isActive = true;
  }

  if (video.readyState >= 1) {
    init();
  } else {
    video.addEventListener("loadedmetadata", init, { once: true });
  }
});
