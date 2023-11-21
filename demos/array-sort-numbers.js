let numbers = [100, 20, 55, 67, 11, 2, 88];

function compare(a, b) {
  if (a < b) return -1; // right order
  else if (a == b) return 0;
  else return 1; // swap, wrong order
}

numbers.sort(compare);
console.log(numbers);
