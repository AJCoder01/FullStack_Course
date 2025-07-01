// method is just a function of an object

function greet() {
  console.log(
    `Hello, my name is ${person.name} and I am ${person.age} years old`
  );
}

const person = {
  name: "John",
  age: 19,
  greet
};

// console.log(person.greet());

const person2 = {
  name: "Ayush",
  age: 20,
  greet: function(){
    return `Hello, my name is ${person2.name} and I am ${person2.age} years old!`;
  }
}

console.log(person2.greet());
