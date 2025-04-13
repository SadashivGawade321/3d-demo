// Optional spotlight effect following mouse
const spotlight = document.querySelector('.spotlight');
document.addEventListener('mousemove', e => {
  spotlight.style.background = `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, rgba(255,255,255,0.1) 0%, transparent 70%)`;
});
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
  const lenis = new Lenis();
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

