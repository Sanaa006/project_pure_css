// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Form submission
  document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Code to submit form data goes here
  });
  