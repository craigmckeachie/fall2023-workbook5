let date = new Date();
let month = date.getMonth() + 1;
let monthName = "";

// if (month == 1) {

// } else if (month == 2) {

// } else if (month == 11) {

// }

switch (month) {
  case 1:
    monthName = "January";
    break;
  case 2:
    monthName = "February";
    break;
  case 11:
    monthName = "November";
    break;
  default:
    break;
}

console.log(monthName);
