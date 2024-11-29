
// **1. ES6 Modules Example**
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// Importing ES6 modules (in another file)
// import { add, subtract } from './advanced-topics.js';

// **2. CommonJS Modules Example**
// In CommonJS, we use module.exports and require
module.exports = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
};

// Importing CommonJS modules (in another file)
// const math = require('./advanced-topics.js');

// **3. JavaScript Engine Example (V8 Engine)**
// In the browser or Node.js, the V8 engine will compile and execute the code.

console.log("JavaScript Engine: V8 is used by Chrome and Node.js");

// **4. Performance Optimization: Minification and Bundling**
// **4. Performance Optimization: Higher-Order Array Methods**

const numbers = [1, 2, 3, 4, 5];

// Using map() to create a new array with values doubled
const doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers);  // Output: [2, 4, 6, 8, 10]

// Using forEach() to iterate over an array without returning a new array
numbers.forEach(number => console.log(number));
// Output: 1 2 3 4 5 (prints each number)

// **5. Garbage Collection**
// JavaScript automatically handles memory management with garbage collection.

function createObject() {
    let obj = { name: "Memory Management" };
    return obj;
}

let obj1 = createObject();

// In this case, obj1 will eventually be garbage collected when no longer referenced.

// **6. Memory Leaks**
// Potential memory leak due to global variable usage.
let globalVar = "Leaked";

// Use local variables and avoid unnecessary global variables.

function removeGlobal() {
    globalVar = null; // Nullify references to avoid memory leak
}

removeGlobal();
