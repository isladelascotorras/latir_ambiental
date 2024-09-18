const navLinks = document.querySelectorAll('nav ul li a');
const mainSections = document.querySelectorAll('main');

// Mostrar el contenido del "home" por defecto
const homeSection = document.getElementById('home');
homeSection.classList.add('active');

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetSection = document.getElementById(event.target.getAttribute('href').replace('#', ''));
    mainSections.forEach((section) => {
      section.classList.remove('active');
    });
    targetSection.classList.add('active');
  });
});