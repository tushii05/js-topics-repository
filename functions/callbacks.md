# Callbacks in JavaScript

A **callback** is a function passed as an argument to another function. The callback function is then invoked inside the outer function when an event or task is completed. This allows asynchronous operations like reading files, making HTTP requests, etc., to be handled in JavaScript.

---

## **1. Why Callbacks?**

Callbacks are essential for asynchronous programming. JavaScript's single-threaded nature means that asynchronous tasks like reading files or making HTTP requests can't block the execution of the rest of the code. Callbacks allow you to handle these tasks once they are completed.

---

## **2. Basic Example of a Callback**

In the following example, a `greet` function takes a `callback` function and executes it after printing a greeting message.

### Syntax:

```javascript
function greet(callback) {
  console.log("Hello, World!");
  callback(); // Calling the callback function
}
```

## 3. **Callback with Parameters**

You can also pass parameters to callback functions. Here’s how you can do it:

```javascript
Example: function add(a, b, callback) {
  const sum = a + b;
  callback(sum);
}

function displaySum(result) {
  console.log("The sum is: " + result);
}

add(5, 3, displaySum); // Passing displaySum as a callback
```

## **4. Callback Hell (Nested Callbacks)**

When multiple callbacks are nested, it can lead to "callback hell," making the code difficult to read and maintain. This happens when one callback is passed inside another.

```javascript
Example: function firstTask(callback) {
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
```

## **5. Fixing Callback Hell with Promises and Async/Await**

To avoid callback hell, you can use Promises or Async/Await to handle asynchronous operations in a more readable way.

---
