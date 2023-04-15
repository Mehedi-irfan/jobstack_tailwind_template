let navMenu = document.getElementById("nav-menu");
let navBar = document.getElementById("menu-bar");

navBar.addEventListener("click", () => {
  navMenu.classList.toggle("hidden");
});

// scroll btn
const header = document.getElementById("headerId");
const scrollBtn = document.getElementById("scollBtn");

scrollBtn.addEventListener("click", () => {
  header.scrollIntoView({ behavior: "smooth" });
});

// dark mode light mode
const switchToggle = document.getElementById("switch-toggle");
const mainHtml = document.getElementById("mainHtml");

switchToggle.addEventListener("click", () => {
  mainHtml.classList.toggle("dark");
});
