// Cargar menú
fetch("menu.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("menu-container").innerHTML = data;
    initializeMenu();
  });

// Cargar footer
fetch("footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer-container").innerHTML = data;
  });

// Cargar página inicial
loadPage("pages/portada.html");

// Función para cargar páginas
function loadPage(page) {
  const mainContent = document.getElementById("main-content");
  mainContent.innerHTML = '<div class="loading">Cargando...</div>';

  fetch(page)
    .then((response) => response.text())
    .then((data) => {
      mainContent.innerHTML = data;
    })
    .catch((error) => {
      mainContent.innerHTML =
        '<div class="error">Error al cargar la página</div>';
      console.error("Error:", error);
    });
}

// Inicializar menú
function initializeMenu() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  // const navLinks = document.querySelectorAll('.nav-link');
  const navLinks = document.querySelectorAll(".dropdown-item");

  // Toggle menú móvil
  if (hamburger) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  // Manejar clics en los enlaces
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const page = link.getAttribute("data-page");
      if (page) {
        loadPage(page);
        navMenu.classList.remove("active"); // Cerrar menú móvil
      }
    });
  });
}
