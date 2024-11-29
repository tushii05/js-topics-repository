// **Primitive Data Types**

// String
let name = "John Doe";
console.log("String:", name, "| Type:", typeof name);

// Number
let age = 30;
let temperature = 36.6;
console.log("Number (Integer):", age, "| Type:", typeof age);
console.log("Number (Float):", temperature, "| Type:", typeof temperature);

// Boolean
let isLoggedIn = true;
console.log("Boolean:", isLoggedIn, "| Type:", typeof isLoggedIn);

// Undefined
let x;
console.log("Undefined:", x, "| Type:", typeof x);

// Null
let data = null;
console.log("Null:", data, "| Type:", typeof data); // Note: typeof null is "object" (quirk in JS)

// Symbol
let sym = Symbol("id");
console.log("Symbol:", sym, "| Type:", typeof sym);

// BigInt
let bigNum = 1234567890123456789012345678901234567890n;
console.log("BigInt:", bigNum, "| Type:", typeof bigNum);

// **Reference Data Types**

// Object
let person = { name: "Alice", age: 30 };
console.log("Object:", person, "| Type:", typeof person);

// Array
let fruits = ["apple", "banana", "cherry"];
console.log("Array:", fruits, "| Type:", typeof fruits);

// Function
function greet() {
    console.log("Hello, World!");
}
console.log("Function:", greet, "| Type:", typeof greet);

// Date
let today = new Date();
console.log("Date:", today, "| Type:", typeof today);

// **Type Checking**
let sampleVar = "This is a string";
console.log("Value:", sampleVar, "| Type:", typeof sampleVar);
