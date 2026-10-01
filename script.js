const menu = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
menu?.addEventListener('click', () => nav.classList.toggle('menu-open'));

document.querySelectorAll('.nav a').forEach(a => {
  a.addEventListener('click', () => nav.classList.remove('menu-open'));
});

const year = document.getElementById('year'); if (year) year.textContent = new Date().getFullYear();

const reveal = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      reveal.unobserve(entry.target);
    }
  });
}, {threshold: .12});

document.querySelectorAll('.section, .video-card, .info-card, .run-card, .cast-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity .7s ease, transform .7s ease';
  reveal.observe(el);
});

const style = document.createElement('style');
style.textContent = '.revealed{opacity:1!important;transform:translateY(0)!important}';
document.head.appendChild(style);
