const person = {
  name: "Ayush Jha",
  age: 20,
  email: "ayushjha.240105@gmail.com",
  hobbies: ["Gym", "Coding"],
  address: {
    city: "Mumbai",
    idk: true,
  },
};

// JSON.stringify() --> converts js oject to json string
const jsonString = JSON.stringify(person);
console.log(jsonString);

// JSON.parse() --> converts json string to js object

const parsedObject = JSON.parse(jsonString);

console.log(parsedObject);