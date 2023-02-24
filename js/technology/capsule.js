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
if (windowSize > 1000 && windowSize < 1210) {
  body.style.overflowX = "scroll";
}

if (windowSize < 700) {
  anchor[3].classList.add("hovering");
}
if (windowSize > 700) {
  div[3].classList.add("hovering");
}
let c = 0;
for (let i = 0; i < 4; i++) {
  if (windowSize < 1000) {
    span[i].classList.add("hide");
  }
  anchor[i].addEventListener("click", function () {
    if (windowSize <= 700) {
      if (c != i) {
        anchor[i].classList.add("hovering");
        anchor[c].classList.remove("hovering");
        c = i;
      }

      //   else {
      //     anchor[i].classList.add("hovering");
      //   }
    }
    if (windowSize > 700) {
      if (c != i) {
        div[c].classList.remove("hovering");
        div[i].classList.add("hovering");
        c = i;
      }

      //   else {
      //     div[i].classList.add("hovering");
      //   }
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

const image = document.querySelector(".image_text img");
if (windowSize <= 1000) {
  image.setAttribute(
    "src",
    "/html/technology/images/image-space-capsule-landscape.jpg"
  );
} else {
  image.setAttribute(
    "src",
    "/html/technology/images/image-space-capsule-portrait.jpg"
  );
}

const buttons = document.querySelectorAll(".numbering");

buttons[1].classList.add("activate");
let t = 0;
for (let i = 0; i < 3; i++) {
  buttons[i].addEventListener("mouseover", function () {
    buttons[i].classList.add("active");
  });
  buttons[i].addEventListener("mouseout", function () {
    buttons[i].classList.remove("active");
  });

  buttons[i].addEventListener("click", function (e) {
    if (t != i) {
      buttons[i].classList.add("activate");
      buttons[t].classList.remove("activate");
      t = i;
    }
  });
}
