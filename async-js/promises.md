# Promises in JavaScript

## Overview

A **Promise** is an object representing the eventual completion or failure of an asynchronous operation.

---

### **States of a Promise**

1. **Pending**: The initial state.
2. **Fulfilled**: The operation completed successfully.
3. **Rejected**: The operation failed.

---

### **Creating a Promise**

Promises are created using the `Promise` constructor.

```javascript
const myPromise = new Promise((resolve, reject) => {
  // Perform an operation
  if (success) {
    resolve("Operation successful!");
  } else {
    reject("Operation failed!");
  }
});
```

### **Using Promises**

1. **then():** Handles resolved values.
2. **catch():** Handles errors.
3. **finally():** Executes after completion (success or failure).
