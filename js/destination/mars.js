"use strict";

// fetch("./data.json")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => console.log(data.destinations[0]));
const body = document.querySelector("body");
const burger = document.querySelector(".burger img");
const nav = document.querySelector(".nav_links");
const navLinks = document.querySelectorAll(".nav_links li");
const div = document.querySelectorAll(".one");
const anchor = document.querySelectorAll("a");
const html = document.querySelector("html");
const span = document.querySelectorAll("span");
const newAnchor = document.querySelectorAll(".new_a");
const secDiv = document.querySelectorAll(".sec");

let f = 0;
burger.addEventListener("click", function () {
  nav.classList.toggle("nav_active");

  navLinks.forEach((links, index) => {
    if (links.style.animation) {
      links.style.animation = "";
    } else {
      links.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.5
      }s`;
    }
  });
  if (f === 0) {
    burger.setAttribute("src", "/starter-code/assets/shared/icon-close.svg");
    f = 1;
  } else {
    burger.setAttribute(
      "src",
      "/starter-code/assets/shared/icon-hamburger.svg"
    );
    f = 0;
  }
});

window.onresize = function (e) {
  document.location.reload(true);
};
const windowSize = window.innerWidth;
console.log(windowSize);
if (windowSize > 325) {
  body.style.overflowX = "hidden";
}
if (windowSize <= 325) {
  body.style.overflowX = "hidden";
  html.style.overflowX = "scroll";
}
if (windowSize > 1000 && windowSize < 1200) {
  body.style.overflowX = "scroll";
}

if (windowSize < 700) {
  anchor[1].classList.add("hovering");
}
if (windowSize > 700) {
  div[1].classList.add("hovering");
}
let c = 1;
for (let i = 0; i < 4; i++) {
  if (windowSize < 1000) {
    span[i].classList.add("hide");
  }
  anchor[i].addEventListener("click", function (e) {
    if (windowSize <= 700) {
      if (c != i) {
        anchor[i].classList.add("hovering");
        anchor[c].classList.remove("hovering");
        c = i;
      } else {
        anchor[i].classList.add("hovering");
      }
    }
    if (windowSize > 700) {
      if (c != i) {
        div[c].classList.remove("hovering");
        div[i].classList.add("hovering");
        c = i;
      } else {
        div[i].classList.add("hovering");
      }
    }
  });

  anchor[i].addEventListener("mouseover", function () {
    if (windowSize <= 700) {
      anchor[i].classList.add("hovering_two");
    } else {
      div[i].classList.add("hovering_two");
    }
  });
  anchor[i].addEventListener("mouseout", function () {
    if (windowSize <= 700) {
      anchor[i].classList.remove("hovering_two");
    } else {
      div[i].classList.remove("hovering_two");
    }
  });
}
let x = 1;
secDiv[1].classList.add("hovering");
for (let i = 0; i < 4; i++) {
  newAnchor[i].addEventListener("mouseover", function () {
    secDiv[i].classList.add("hovering_two");
  });
  newAnchor[i].addEventListener("mouseout", function () {
    secDiv[i].classList.remove("hovering_two");
  });
  newAnchor[i].addEventListener("click", function () {
    if (x != i) {
      secDiv[x].classList.remove("hovering");
      secDiv[i].classList.add("hovering");
      x = i;
    } else {
      secDiv[i].classList.add("hovering");
    }
  });
}
