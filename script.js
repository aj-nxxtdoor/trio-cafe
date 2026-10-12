// Fade the nav background in once you scroll past the top
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 40);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Reveal items as they scroll into view
const items = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  items.forEach((el, i) => {
    // Small stagger so menu items cascade in instead of popping together
    el.style.transitionDelay = `${(i % 4) * 80}ms`;
    observer.observe(el);
  });
} else {
  // Old browsers: just show everything
  items.forEach((el) => el.classList.add("is-visible"));
}