const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.15 });

reveals.forEach((el) => observer.observe(el));

const heroCard = document.querySelector('.hero-card');

window.addEventListener('mousemove', (event) => {
  if (!heroCard) return;
  const x = (event.clientX / window.innerWidth - 0.5) * 18;
  const y = (event.clientY / window.innerHeight - 0.5) * 18;
  heroCard.style.transform = `translate(${x}px, ${y}px)`;
});
