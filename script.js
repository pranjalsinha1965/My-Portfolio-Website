function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
  document.getElementById('theme-switcher').addEventListener('change', (event) => {
    const theme = event.target.value;
    document.body.className = theme;  // Update the body's class to switch the theme
  });
  