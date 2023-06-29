//navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger
const Hamburger = document.querySelector("#hamburger");
const Navmenu = document.querySelector("#nav-menu");

Hamburger.addEventListener("click", function () {
  Hamburger.classList.toggle("hamburger-active");
  Navmenu.classList.toggle("hidden");
});
