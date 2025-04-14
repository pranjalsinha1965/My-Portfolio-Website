// Toggle Hamburger Menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Theme Switcher Logic
document.getElementById('theme-switcher').addEventListener('change', (event) => {
  const theme = event.target.value;

  // Remove any previously applied theme classes
  document.body.classList.remove("soft-beach", "purple-90s", "bright-power");

  // Apply selected theme class
  if (theme !== "soft-beach") {
    document.body.classList.add(theme);
  }
});
