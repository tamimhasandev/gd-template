const nav = document.querySelector(".nav");
const body = document.querySelector("body");
const navList = document.querySelectorAll(".nav-list > li");
function navShow() {
  nav.classList.add("show");
  body.style.overflow = "hidden";
}

const closeMenu = () => {
  nav.classList.remove("show");
  body.style.overflow = "scroll";
};

for (let i = 0; i < navList.length; i++) {
  navList[i].addEventListener("click", () => {
    nav.classList.remove("show");
    body.style.overflow = "scroll";
  });
}
