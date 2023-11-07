"use strict";

//get elements into variables
// const decorateButton = document.getElementById("decorateButton");
const decorateButton = document.querySelector("#decorateButton");

//functions
function decorate() {
  const paragraphs = document.querySelectorAll("p");
  const p = paragraphs[0];
  p.style.backgroundColor = "aqua";
}

//wire-up connect functions to events
decorateButton.onclick = decorate;
