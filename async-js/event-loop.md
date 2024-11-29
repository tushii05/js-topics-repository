# The Event Loop in JavaScript

The **event loop** is a fundamental concept in JavaScript's concurrency model. It is responsible for executing the code, collecting and processing events, and executing queued sub-tasks.

---

## **1. How the Event Loop Works**

JavaScript runs in a single thread, meaning only one operation can be executed at a time. The event loop continuously checks if there are any functions in the **callback queue** that need to be executed. If the call stack is empty, it moves functions from the callback queue to the call stack.

---

## **2. Phases of the Event Loop**

The event loop has several phases through which it processes asynchronous tasks:

1. **Timers**: Executes `setTimeout` and `setInterval` callbacks.
2. **I/O Callbacks**: Handles callbacks for I/O operations.
3. **Idle, Prepare**: Internal phase where the event loop is waiting for the next phase.
4. **Poll**: Checks for new events to be processed.
5. **Check**: Executes `setImmediate` callbacks.
6. **Close Callbacks**: Executes any remaining callbacks that have been closed.

---

## **3. Example: Event Loop and Timers**

The following example demonstrates how the event loop manages tasks from the callback queue.

### Example:

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Inside setTimeout");
}, 0);

setImmediate(() => {
  console.log("Inside setImmediate");
});

console.log("End");
```
