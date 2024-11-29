// **Basic Callback Example**
function greet(callback) {
    console.log("Hello, World!");
    callback(); // Calling the callback function
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet(sayGoodbye); // Passing sayGoodbye as a callback to greet

function add(a, b, callback) {
    const sum = a + b;
    callback(sum); // Pass the result to the callback
}

function displaySum(result) {
    console.log("The sum is: " + result);
}

add(5, 3, displaySum); // Passing displaySum as a callback

// **Callback Hell Example (Nested Callbacks)**
function firstTask(callback) {
    setTimeout(() => {
        console.log("First task completed");
        callback();
    }, 1000);
}

function secondTask(callback) {
    setTimeout(() => {
        console.log("Second task completed");
        callback();
    }, 1000);
}

firstTask(() => {
    secondTask(() => {
        console.log("Both tasks completed");
    });
});