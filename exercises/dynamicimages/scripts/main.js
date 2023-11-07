"use strict";

//data
let imageFiles = [
  { id: "1", path: "https://placehold.co/300x300", description: "placeholder 1" },
  { id: "2", path: "https://placehold.co/300x300", description: "placeholder 2" },
  { id: "3", path: "https://placehold.co/300x300", description: "placeholder 3" },
  { id: "3", path: "https://placehold.co/300x300", description: "placeholder 4" },
  { id: "4", path: "https://placehold.co/300x300", description: "placeholder 5" },
  { id: "5", path: "https://placehold.co/300x300", description: "placeholder 6" },
  { id: "6", path: "https://placehold.co/300x300", description: "placeholder 7" },
  { id: "7", path: "https://placehold.co/300x300", description: "placeholder 8" },
  { id: "8", path: "https://placehold.co/300x300", description: "placeholder 9" },
  { id: "9", path: "https://placehold.co/300x300", description: "placeholder 10" },
  { id: "10", path: "https://placehold.co/300x300", description: "placeholder 11" },
  { id: "11", path: "https://placehold.co/300x300", description: "placeholder 12" },
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
