// Traditional Function
function bob(a) {
  return a + 100;
}

let result = bob(10);
console.log(result);

// Arrow Function
const bob2 = (a) => a + 100;

let result2 = bob2(10);
console.log(result2);

// function add(a,b) {
//   return a+ b;
// }

//keyword name parameter list
// const name = parameter list arrow =>

const add = (a, b) => a + b;

console.log(add(2, 2));

const functionName = (params) => "what you want to return";

// function buildTableRow(park){
//   let tr = parksTableBody.insertRow();

//   let td1 = tr.insertCell();
//   td1.innerText = park.LocationName;

//   let td2 = tr.insertCell();
//   td2.innerText = park.State;

//   let td3 = tr.insertCell();
//   td3.innerText = park.Phone;
// }

const buildTableRow = (park) => {
  let tr = parksTableBody.insertRow();

  let td1 = tr.insertCell();
  td1.innerText = park.LocationName;

  let td2 = tr.insertCell();
  td2.innerText = park.State;

  let td3 = tr.insertCell();
  td3.innerText = park.Phone;
};
