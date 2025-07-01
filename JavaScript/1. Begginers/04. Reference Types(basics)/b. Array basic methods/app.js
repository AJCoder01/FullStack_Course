const fruits = [
  "apple",
  "pomegranate",
  "mango",
  "strawberriers",
  "pineapples",
  "grapefruit",
];

// .push() --> adds to end of array

fruits.push("banana");

// console.log(fruits);

// .pop() --> remove end element of array

fruits.pop();
// console.log(fruits);

// shift() --> removes first element of array

fruits.shift();
// console.log(fruits);

// unshift() --> add a first element of array

fruits.unshift("orange");
// console.log(fruits);

const newFruits = ["melon", "strawberries"];

const totalFruits = fruits.concat(newFruits);

console.log(totalFruits);

const pl = ["Javascript", "golang", "python", "php"];
const numbers = [5, 4, 3, 1, 2];

// console.log(pl.includes("golang"));

console.log(pl.join("-")); //  joins all elements with a '-'

// console.log(pl.reverse());

// console.log(pl.slice(0,3))

// console.log(numbers.sort());

// splice()
const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
