"use strict";

//get elements into variables
// const decorateButton = document.getElementById("decorateButton");
const decorateButton = document.querySelector("#decorateButton");


//functions
function decorate() {
    console.log("garland, garland,...");
}

//wire-up connect functions to events
decorateButton.onclick = decorate;

