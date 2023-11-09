"use strict";

let value;
// value = "";
// value = undefined;
// value = null;


if (value == "" || value == undefined || value == null) {
  console.log(false);
}

if (!value) {
  console.log(false);
}

if (value) {
  console.log("do something with the value");
}
