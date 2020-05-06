var nav = document.querySelector(".main-nav");
var btn = document.querySelector(".main-nav__toggle");

if (nav && nav.classList.contains("main-nav--nojs")) {
  nav.classList.remove("main-nav--nojs");
  nav.classList.add("main-nav--closed");
}

if (btn) {
  btn.addEventListener("click", function (evt) {
    evt.preventDefault();
    nav.classList.toggle("main-nav--closed");
    btn.classList.toggle("main-nav__toggle--off");
  });
}
