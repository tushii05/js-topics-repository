# Functions in JavaScript

## Overview

A **function** is a block of code designed to perform a particular task. Functions in JavaScript can be declared in different ways, including declarations, expressions, and arrow functions.

---

### **1. Function Declaration**

Declared with the `function` keyword and can be called before they are defined due to hoisting.

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
```

### **2. Function Expression**

Assigned to a variable and not hoisted.

```javascript
const add = function (a, b) {
  return a + b;
};
```

### **3. Arrow Function**

A concise way to write functions introduced in ES6.

```javascript
const multiply = (a, b) => a * b;
```

### **4. Higher-Order Functions**

Functions that take other functions as arguments or return functions.

```javascript
function applyOperation(a, b, operation) {
  return operation(a, b);
}
```
