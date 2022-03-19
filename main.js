"use strict";
let scrollContent = document.querySelectorAll(".w");
let scrollContent1 = document.querySelectorAll(".q");
addEventListener("scroll", function () {
  for (let i = 0; i < scrollContent.length; i++) {
    let qayt = scrollContent[i].getBoundingClientRect().top;
    if (qayt < 600) {
      scrollContent[i].style.opacity = "1";
      scrollContent[i].style.transform = "translateX(0)";
    } else {
      scrollContent[i].style.opacity = "0";
      scrollContent[i].style.transform = "translateX(400px)";
    }
  }
});
addEventListener("scroll", function () {
  for (let i = 0; i < scrollContent1.length; i++) {
    let ket = scrollContent1[i].getBoundingClientRect().top;
    if (ket < 600) {
      scrollContent1[i].style.opacity = "1";
      scrollContent1[i].style.transform = "translateX(0px)";
    } else {
      scrollContent1[i].style.opacity = "0";
      scrollContent1[i].style.transform = "translateX(-400px)";
    }
  }
});
