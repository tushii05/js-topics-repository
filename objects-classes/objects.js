// objects.js
// Examples of working with objects in JavaScript

// Object Creation
const person = {
    name: "John Doe",
    age: 30,
    greet: function () {
        console.log(`Hello, my name is ${this.name}.`);
    },
};

// Accessing Properties
console.log(person.name); // John Doe
console.log(person["age"]); // 30

// Adding a Property
person.job = "Software Developer";
console.log(person.job); // Software Developer

// Object Methods
person.greet(); // Hello, my name is John Doe.

// Using Object.keys and Object.values
console.log(Object.keys(person)); // ["name", "age", "greet", "job"]
console.log(Object.values(person)); // ["John Doe", 30, ƒ, "Software Developer"]
