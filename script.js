"use strict";

let btn_nav = document.querySelector(".btn-navigation__img");
btn_nav.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target.closest(".btn-navigation")) {
    e.target.closest(".header").classList.toggle("nav-open");
  }
});
