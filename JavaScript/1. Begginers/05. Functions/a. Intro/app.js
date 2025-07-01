// -------------------------------
// A function is a block of code that performs a specific task.
// Function makes the code reusable. You can declare it once and use it multiple times.
// Function makes the program easier as each small task is divided into a function.
// Function increases readability.
// DRY - Don't Repeat Yourself
// function name(parameterIfAny) {...}

function greet() {
  console.log("Hello from function!");
}

// call, run, execute
// greet();
// greet();
// greet();

function sayHello(userName) {
  console.log(`Hello ${userName}`);
}

// sayHello("Ayush");
// sayHello("Piyush");

// return --> function

function add(x, y) {
  return x + y;
}

const res1 = add(10, 20);
const res2 = add(100, 20);

console.log(res1);
console.log(res2);
