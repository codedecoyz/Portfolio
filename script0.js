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

// Binary Background Generator
function createBinaryBackground() {
  // Create container
  const binaryBg = document.createElement('div');
  binaryBg.className = 'binary-background';
  document.body.appendChild(binaryBg);

  // Generate random binary strings
  function generateBinaryString(length = 30) {
    let binary = '';
    for (let i = 0; i < length; i++) {
      binary += Math.random() > 0.5 ? '1' : '0';
      // Add spaces occasionally for readability
      if (i % 8 === 7 && i !== length - 1) {
        binary += ' ';
      }
    }
    return binary;
  }

  // Create binary streams
  for (let i = 0; i < 10; i++) {
    const stream = document.createElement('div');
    stream.className = 'binary-stream';
    
    // Generate multiple lines of binary code
    const lines = [];
    for (let j = 0; j < 8; j++) {
      lines.push(generateBinaryString(Math.floor(Math.random() * 20) + 15));
    }
    
    stream.innerHTML = lines.join('<br>');
    binaryBg.appendChild(stream);
  }

  // Refresh binary content periodically for variety
  setInterval(() => {
    const streams = document.querySelectorAll('.binary-stream');
    streams.forEach(stream => {
      const lines = [];
      for (let j = 0; j < 8; j++) {
        lines.push(generateBinaryString(Math.floor(Math.random() * 20) + 15));
      }
      stream.innerHTML = lines.join('<br>');
    });
  }, 8000); // Change every 8 seconds
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', createBinaryBackground);
