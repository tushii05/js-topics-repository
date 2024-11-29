# `setTimeout`, `setInterval`, `setImmediate` in JavaScript

These functions are part of JavaScript's timer API. They are used for delaying or scheduling code execution.

---

## **1. `setTimeout()`**

The `setTimeout()` function is used to execute a function after a specified number of milliseconds.

### Syntax:

```javascript
setTimeout(function, delay, arg1, arg2, ...);
```

- function: The callback function to be executed.
- delay: The number of milliseconds to wait before executing the function.
- arg1, arg2, ...: Optional arguments to pass to the callback function.

## **2. setInterval()**

The setInterval() function is used to execute a function repeatedly, with a fixed time delay between each call.

## **3. setImmediate()**

The setImmediate() function is used to execute a function after the current event loop cycle completes. It is similar to setTimeout() but with a delay of 0 milliseconds.

## **4. The Difference Between setTimeout(), setInterval(), and setImmediate()**

- setTimeout(): Executes once after a specified delay.
- setInterval(): Repeatedly executes the callback at regular intervals.
- setImmediate(): Executes the callback after the current event loop cycle finishes (prioritized after I/O events).
