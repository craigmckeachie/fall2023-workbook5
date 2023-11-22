"use strict";

let products = [
  { prodId: 2, name: "Notepads (12 pk)", price: 12.29 },
  { prodId: 12, name: "Black Pens (12 pk)", price: 5.7 },
  { prodId: 50, name: "Printer", price: 199.99 },
  { prodId: 22, name: "Lenova Laptop", price: 500.0 },
];

products.sort((productA, productB) => {
  if (productA.name < productB.name) return -1;
  else if (productA.name == productB.name) return 0;
  return 1;
});

console.log("Sorted by Title");
console.log(products);

console.log("----------------------------------------");

products.sort((productA, productB) => Number(productB.price) - Number(productA.price));

console.log("Sorted by Fee");
console.log(products);
