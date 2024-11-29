// functions.js
// Examples of functions in JavaScript

// Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function Expression
const add = function (a, b) {
    return a + b;
};

// Arrow Function
const multiply = (a, b) => a * b;

// Higher-Order Function (Accepts another function as argument)
function applyOperation(a, b, operation) {
    return operation(a, b);
}

// Using the functions
console.log(greet("Alice")); // Hello, Alice!
console.log(add(2, 3));      // 5
console.log(multiply(4, 5)); // 20

// Using a higher-order function
console.log(applyOperation(10, 5, multiply)); // 50
