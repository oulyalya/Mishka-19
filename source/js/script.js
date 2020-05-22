// mobile menu
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

// size popup
var popup = document.querySelector("#popup");
var overlay = document.querySelector("#overlay");
var popupBtn = document.querySelector("#pupup_button");

if (popupBtn) {
  popupBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    overlay.classList.add("modal-overlay--show");
    popup.classList.add("modal--show");
  });
}

if(overlay) {
  overlay.addEventListener("click", function (evt) {
    evt.preventDefault();
    overlay.classList.remove("modal-overlay--show");
    popup.classList.remove("modal--show");
  });
}

// не знаю, как работает то, что ниже, но, главное, работает
document.onkeydown = function(evt) {
  evt = evt || window.event;
  var isEscape = false;
  if ("key" in evt) {
      isEscape = (evt.key == "Escape" || evt.key == "Esc");
      overlay.classList.remove("modal-overlay--show");
      popup.classList.remove("modal--show");
  }
};

