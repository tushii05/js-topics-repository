// Declaring variables
var globalVar = "I'm a var variable!";
let blockScopedVar = "I'm a let variable!";
const constantVar = "I'm a constant variable!";

// Printing variables
console.log(globalVar);
console.log(blockScopedVar);
console.log(constantVar);

// Attempting to modify a constant (will throw an error)
// constantVar = "New Value"; // Uncomment to see the error

// Demonstrating block scoping
if (true) {
    let blockScoped = "I exist only in this block!";
    console.log(blockScoped);
}
// console.log(blockScoped); // Uncomment to see a ReferenceError
