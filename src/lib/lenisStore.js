let lenis = null;

export function setLenis(instance) {
  lenis = instance;
}

export function scrollToHash(hash) {
  const target = document.querySelector(hash);
  if (!target) return;
  if (lenis) {
    lenis.scrollTo(target, { offset: -60, duration: 1.1 });
  } else {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}