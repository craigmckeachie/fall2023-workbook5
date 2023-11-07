"use strict";

//data
let imageFiles = [
  { path: "https://placehold.co/300x300", description: "placeholder 1" },
  { path: "https://placehold.co/300x300", description: "placeholder 2" },
  { path: "https://placehold.co/300x300", description: "placeholder 3" },
  { path: "https://placehold.co/300x300", description: "placeholder 4" },
  { path: "https://placehold.co/300x300", description: "placeholder" },
  { path: "https://placehold.co/300x300", description: "placeholder" },
  { path: "https://placehold.co/300x300", description: "placeholder" },
  { path: "https://placehold.co/300x300", description: "placeholder" },
  { path: "https://placehold.co/300x300", description: "placeholder" },
  { path: "https://placehold.co/300x300", description: "placeholder" },
  { path: "https://placehold.co/300x300", description: "placeholder" },
  { path: "https://placehold.co/300x300", description: "placeholder" },
];

//get elements
const imageList = document.querySelector("#imageList");
const addImageButton = document.querySelector("#addImageButton");
const clearImagesButton = document.querySelector("#clearImagesButton");
const imagesDiv = document.querySelector("#imagesDiv");

console.log(imageList, addImageButton, clearImagesButton, imagesDiv);

//functions
function loadImageList() {
    for (const imageFile of imageFiles) {
        let option = document.createElement("option");
        option.value = imageFile.path;
        option.innerText = imageFile.description;
        imageList.appendChild(option);
    }
}

loadImageList();


//wire-up function
