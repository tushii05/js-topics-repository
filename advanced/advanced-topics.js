
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
// Here, minification and bundling can be done with tools like Webpack or Terser.
// For now, let's focus on optimizing code logic.

const calculateSum = (a, b) => a + b;
const calculateDifference = (a, b) => a - b;

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
