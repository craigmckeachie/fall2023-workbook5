function isOver60(arrayValue) {
  if (arrayValue > 60) {
    return true;
  } else {
    return false;
  }
}

let numbers = [7, 9, 11, 60, 12, 13, 65, 62];


function find(ifFn) {
  for (const number of numbers) {
    let found = ifFn(number);
    if(found){
      return number
    }
  }
}

let firstValOver60 = find(isOver60);
if (firstValOver60) {
  console.log(firstValOver60);
}
