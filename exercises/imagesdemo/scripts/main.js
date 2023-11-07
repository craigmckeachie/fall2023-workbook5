"use strict";

//get elements into variables
// const decorateButton = document.getElementById("decorateButton");
const decorateButton = document.querySelector("#decorateButton");

//functions
function decorate() {
  const paragraphs = document.querySelectorAll("p");
  for (const p of paragraphs) {
    p.style.border = "3px dashed red";
    p.style.backgroundColor = "green";
  }
}

//wire-up connect functions to events
decorateButton.onclick = decorate;
