const menuBtn = document.querySelector(".header__menuBars");
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  let x = document.querySelector(".header__navList");
  if (x.style.display === "flex") {
    x.style.display = "none";
    menuBtn.classList.remove("header__closeMenu");
  } else {
    x.style.display = "flex";
    menuBtn.classList.add("header__closeMenu");
  }
}
