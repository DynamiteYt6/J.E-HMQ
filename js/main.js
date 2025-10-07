// Toggle dark mode
function darkMode() {
  const body = document.body;
  const icon = document.querySelector('.dark-mode-toggle i');
  body.classList.toggle('dark-mode');

  if (icon) {
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
  }
}

// Toggle mobile nav
function expand() {
  const navLinks = document.querySelector('.nav-links');
  const burgerIcon = document.querySelector('.hamburger i');

  navLinks.classList.toggle('open');
  burgerIcon.classList.toggle('fa-bars');
  burgerIcon.classList.toggle('fa-xmark');
}

