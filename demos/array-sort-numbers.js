let numbers = [100, 20, 55, 67, 11, 2, 88];

// version 1
// function compare(a, b) {
//   if (a < b) return -1; // right order
//   else if (a == b) return 0;
//   else return 1; // swap, wrong order
// }

//version 2
function compare(a, b) {
  return a - b;
}

// numbers.sort(compare);

//version 3
// numbers.sort(function (a, b) {
//   return a - b;
// });

//version 4
// numbers.sort((a, b) => {
//   return a - b;
// });

//version 5
numbers.sort((a, b) => a - b);

console.log(numbers);
