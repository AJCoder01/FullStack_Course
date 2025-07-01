// OBJECTS --> {label: value}

const person = {
  firstName: "Ayush",
  lastName: "Jha",
  age: 20,
  location: ["Planet", "Earth"],
  isProgrammer: true,
};

// const arr = [];
// console.log(typeof arr) --> object

// console.log(person);

// accessing items

// console.log(person.age);
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.isProgrammer);

// console.log(person["firstName"]);

person.firstName = "Aayush";

console.log(person.firstName);

delete person.firstName;

console.log(person)