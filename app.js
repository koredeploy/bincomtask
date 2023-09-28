let menu = document.querySelector(".menu");
let navLinks = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
  if (navLinks.classList.contains("active")) {
    navLinks.classList.remove("active");
  } else {
    navLinks.classList.add("active");
  }
});

if (navItems.classList.contains("active")) {
  navItems.classList.remove("active");
} else {
  navItems.classList.add("active");
}
