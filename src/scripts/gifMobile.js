// On devices without hover (touch/mobile), use IntersectionObserver
// to reveal GIFs when cards scroll into the center of the viewport.
if (!window.matchMedia("(hover: hover)").matches) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.style.opacity = entry.isIntersecting ? "0" : "";
      });
    },
    { rootMargin: "-30% 0px -30% 0px" }
  );

  function observe() {
    document.querySelectorAll(".gif-preview").forEach((el) => observer.observe(el));
  }

  // Support both initial load and Astro client-side navigation
  observe();
  document.addEventListener("astro:page-load", observe);
}