// Smooth fade-in sections on scroll
const sections = document.querySelectorAll('main section');

function checkSectionVisibility() {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkSectionVisibility);
window.addEventListener('load', () => {
  checkSectionVisibility();
});

// Contact form validation and submission handling
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  formMessage.style.display = 'none';
  formMessage.textContent = '';

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    formMessage.textContent = 'Please fill in all fields.';
    formMessage.style.color = 'red';
    formMessage.style.display = 'block';
    return;
  }

  if (!emailRegex.test(email)) {
    formMessage.textContent = 'Please enter a valid email address.';
    formMessage.style.color = 'red';
    formMessage.style.display = 'block';
    return;
  }

  // If the form is static and no backend is available, just show a success message.
  formMessage.textContent = 'Thank you for your message! I will get back to you soon.';
  formMessage.style.color = 'green';
  formMessage.style.display = 'block';

  form.reset();
});
// Smooth fade-in sections on scroll
const sections = document.querySelectorAll('main section');

function checkSectionVisibility() {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkSectionVisibility);
window.addEventListener('load', () => {
  checkSectionVisibility();
});

// Contact form validation and submission handling
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  formMessage.style.display = 'none';
  formMessage.textContent = '';

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    formMessage.textContent = 'Please fill in all fields.';
    formMessage.style.color = 'red';
    formMessage.style.display = 'block';
    return;
  }

  if (!emailRegex.test(email)) {
    formMessage.textContent = 'Please enter a valid email address.';
    formMessage.style.color = 'red';
    formMessage.style.display = 'block';
    return;
  }

  // If the form is static and no backend is available, just show a success message.
  formMessage.textContent = 'Thank you for your message! I will get back to you soon.';
  formMessage.style.color = 'green';
  formMessage.style.display = 'block';

  form.reset();
});
