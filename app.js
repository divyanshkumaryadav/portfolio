// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// Active link on scroll
const sections = document.querySelectorAll('section[id], header[id]');
const navItems = document.querySelectorAll('nav.links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 90;
    if (window.scrollY >= top) current = sec.id;
  });
  navItems.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});

// Typing effect
const typingEl = document.getElementById('typing');
const words = ['Web Developer.', 'UI Enthusiast.', 'Problem Solver.', 'AIML Student.'];
let wIndex = 0, cIndex = 0, deleting = false;
function type() {
  const word = words[wIndex];
  if (!deleting) {
    cIndex++;
    typingEl.textContent = word.slice(0, cIndex);
    if (cIndex === word.length) { deleting = true; setTimeout(type, 1200); return; }
  } else {
    cIndex--;
    typingEl.textContent = word.slice(0, cIndex);
    if (cIndex === 0) { deleting = false; wIndex = (wIndex + 1) % words.length; }
  }
  setTimeout(type, deleting ? 40 : 80);
}
type();

// Reveal on scroll
const revealEls = document.querySelectorAll('.skill-card, .project-card, .tl-item, .card, .about-photo, .about-text');
revealEls.forEach(el => el.classList.add('reveal'));
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.15 });
revealEls.forEach(el => obs.observe(el));

// Contact form (front-end only demo)
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Thanks for reaching out! (Connect this form to a backend or service like Formspree to actually receive messages.)');
  this.reset();
});

document.getElementById('year').textContent = new Date().getFullYear();