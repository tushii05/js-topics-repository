### **1. What are the differences between `var`, `let`, and `const` in JavaScript?**

#### Answer:

- **`var`**: Function-scoped or globally scoped, can be redeclared and updated.
- **`let`**: Block-scoped, can be updated but not redeclared within the same scope.
- **`const`**: Block-scoped, cannot be updated or redeclared. It is used for constants, but the value it points to (like an object or array) can be mutated.

- When you declare a variable with const, it means that the variable reference (the address in memory) cannot be changed. However, if the variable holds a reference to an object or array, the properties or elements of that object or array can still be modified.

---

### **2. What is a closure, and how is it useful in JavaScript?**

#### Answer:

A **closure** is a function that retains access to its lexical scope (variables from the outer function) even after the outer function has finished executing. This is useful for data encapsulation and private variables.

Example:

```javascript
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter(); // 1
counter(); // 2
```

---

### **3. What is the event loop in JavaScript?**

#### Answer:

The **event loop** is a mechanism in JavaScript that handles asynchronous code execution. It continuously checks the **call stack** and the **task queue**. If the stack is empty, it picks up the first event from the task queue and executes it.

- **Call Stack**: Where functions are executed.
- **Task Queue**: Where events like `setTimeout`, promises, and I/O operations are queued.
- **Web APIs**: Provide asynchronous functionality (like `setTimeout`, `fetch`).

---

### **4. What are **Promises** in JavaScript and how do they work?**

#### Answer:

A **Promise** is an object representing the eventual completion (or failure) of an asynchronous operation. It allows handling asynchronous code in a cleaner way than using callbacks.

- **Pending**: The operation is ongoing.
- **Fulfilled**: The operation completed successfully.
- **Rejected**: The operation failed.

Example:

```javascript
let promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Operation successful!");
  } else {
    reject("Operation failed!");
  }
});

promise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
```

---

### **5. What is the difference between `==` and `===` in JavaScript?**

#### Answer:

- **`==` (loose equality)**: Compares values after performing type coercion.
- **`===` (strict equality)**: Compares both the value and the type, without coercion.

Example:

```javascript
console.log(0 == "0"); // true (because type coercion)
console.log(0 === "0"); // false (different types)
```

---

### **6. What is hoisting in JavaScript?**

#### Answer:

**Hoisting** is JavaScript’s default behavior of moving declarations (but not initializations) to the top of their containing scope. This affects variables (`var`) and functions.

```javascript
console.log(x); // undefined (because declaration is hoisted, but not initialization)
var x = 5;

console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;
```

---

### **7. What are the main differences between **ES6** modules and **CommonJS** modules?**

#### Answer:

- **ES6 Modules**:

  - Syntax: `import` and `export`.
  - Supports **static** analysis, meaning dependencies are resolved before runtime.
  - Works in both the browser and Node.js (with proper support).

- **CommonJS Modules**:
  - Syntax: `require` and `module.exports`.
  - Supports **dynamic** loading, meaning modules are loaded at runtime.
  - Primarily used in Node.js.

---

### **8. Explain the concept of **throttling** and **debouncing** in JavaScript.**

#### Answer:

- **Throttling**: Limits the number of times a function can be executed within a specified time period. Useful for events like scrolling or resizing.

- **Debouncing**: Delays the execution of a function until a certain amount of time has passed since the last event. Useful for events like user input or search.

Example of **debounce**:

```javascript
function debounce(func, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(func, delay);
  };
}

const search = debounce(() => console.log("Searching..."), 500);
```

---

### **9. How does **asynchronous programming** work in JavaScript?**

#### Answer:

JavaScript handles asynchronous programming using **callbacks**, **Promises**, and **async/await**. Asynchronous code execution ensures that the program doesn't block while waiting for an operation (like fetching data from a server).

- **Callback**: Passed as an argument to a function and invoked later.
- **Promise**: An object that represents a value that may be available in the future.
- **`async/await`**: Syntactic sugar that makes asynchronous code look synchronous.

Example using `async/await`:

```javascript
async function fetchData() {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  console.log(data);
}

fetchData();
```

---

### **10. How can you optimize performance in a JavaScript application?**

#### Answer:

- **Minification**: Minify the code to reduce the size of JavaScript files.
- **Bundling**: Combine multiple files into one to reduce HTTP requests.
- **Lazy Loading**: Load only necessary resources at the start; load others when required.
- **Debouncing/Throttling**: Reduce the frequency of expensive operations like scroll or resize.
- **Memoization**: Cache the results of expensive function calls.
- **Avoiding Memory Leaks**: Properly handle object references and event listeners.

---

### **11. Explain JavaScript memory management and garbage collection.**

#### Answer:

JavaScript uses **automatic garbage collection** to free up memory by removing references to unused objects. The **garbage collector** (GC) looks for objects that are no longer accessible (i.e., no references pointing to them) and reclaims their memory.

- **Memory Leaks**: Occur when references to unused objects are not cleared, causing them to remain in memory.

Techniques to avoid memory leaks:

- Nullify references when no longer needed.
- Remove event listeners.
- Avoid global variables.

---

### **12. What is the difference between **call()**, **apply()**, and **bind()**?**

#### Answer:

- **`call()`**: Invokes a function with a specified `this` value and arguments passed individually.
- **`apply()`**: Similar to `call()`, but arguments are passed as an array.
- **`bind()`**: Returns a new function with a specified `this` value and pre-set arguments.

Example:

```javascript
const person = { name: "Alice" };

function greet(greeting) {
  console.log(greeting + ", " + this.name);
}

greet.call(person, "Hello"); // Hello, Alice
greet.apply(person, ["Hello"]); // Hello, Alice

const greetBound = greet.bind(person, "Hello");
greetBound(); // Hello, Alice
```

---

### **13. What are the advantages of using **`map()`**, **`filter()`**, and **`reduce()`** over traditional loops?**

#### Answer:

- **`map()`**: Creates a new array by applying a function to each element. Ideal for transformations.
- **`filter()`**: Creates a new array with elements that pass the condition. Ideal for filtering.
- **`reduce()`**: Accumulates all elements in an array into a single value. Ideal for summing or combining data.

Example:

```javascript
const numbers = [1, 2, 3, 4, 5];

// Using map to double the numbers
const doubled = numbers.map((num) => num * 2);

// Using filter to get even numbers
const evenNumbers = numbers.filter((num) => num % 2 === 0);

// Using reduce to sum the numbers
const sum = numbers.reduce((acc, num) => acc + num, 0);
```
