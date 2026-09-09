document.getElementById('year').textContent = new Date().getFullYear();

const revealItems = document.querySelectorAll('.skill-card, .project-card, .timeline-item, .cert-card, .education-card');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.08 });

revealItems.forEach((item) => {
  item.style.opacity = '0';
  item.style.transform = 'translateY(14px)';
  item.style.transition = 'opacity .6s ease, transform .6s ease';
  observer.observe(item);
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.is-visible').forEach((item) => {
    item.style.opacity = '1';
    item.style.transform = 'translateY(0)';
  });
});

const style = document.createElement('style');
style.textContent = `.is-visible { opacity: 1 !important; transform: translateY(0) !important; }`;
document.head.appendChild(style);
