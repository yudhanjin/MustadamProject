// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// When the main-menu is clicked
document.querySelector("#main-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Close the navbar when clicking outside the main-menu and navbarNav
const mainMenu = document.querySelector("#main-menu");

document.addEventListener("click", function (e) {
  if (!mainMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
