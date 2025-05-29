// Smooth scroll for anchor links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Highlight active section in navbar
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });
  
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
  
  // Terminal Form Animation
  const form = document.querySelector('.terminal-form');
  if (form) {
    const inputs = form.querySelectorAll('input, textarea');
  
    inputs.forEach(input => {
      input.addEventListener('focus', () => {
        if (input.previousElementSibling) {
          input.previousElementSibling.style.color = '#EB5E28'; // Using hex value for --accent
        }
        const prompt = input.parentElement.querySelector('.prompt');
        if (prompt) prompt.textContent = '>';
      });
      
      input.addEventListener('blur', () => {
        if (input.previousElementSibling) {
          input.previousElementSibling.style.color = '#FFFCF2'; // Using hex value for --cream
        }
        const prompt = input.parentElement.querySelector('.prompt');
        if (prompt) prompt.textContent = '$';
      });
    });
  
    // Form Submission (Demo)
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Message sent! (This is a demo. Connect to Formspree/Netlify Forms for real functionality.)');
      form.reset();
    });
  }
  
  // Animate skill bars on scroll
  const animateSkills = () => {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
      const level = bar.getAttribute('data-level');
      if (level) bar.style.width = level;
    });
  };
  
  // Trigger animations
  window.addEventListener('load', animateSkills);
  window.addEventListener('scroll', animateSkills);

  // Typewriter Effect
const text = "Solving problems with code and coffee.";
const typingElement = document.getElementById('typing-text');
let i = 0;

function typeWriter() {
  if (i < text.length) {
    typingElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100); // Typing speed
  }
}

// Start animation when page loads
window.addEventListener('load', () => {
  typeWriter();
});