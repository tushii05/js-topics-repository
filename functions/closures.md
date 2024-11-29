# Closures in JavaScript

A **closure** is a function that retains access to its lexical scope (variables) even after the outer function has finished executing. Closures allow inner functions to "remember" the environment in which they were created.

---

## **1. What is a Closure?**

A closure occurs when a function is defined inside another function and the inner function refers to variables from the outer function.

---

## **2. Basic Example of a Closure**

Here’s an example of a closure where the inner function retains access to the outer function's variables even after the outer function has returned.

### Syntax:

```javascript
function outerFunction() {
  let outerVariable = "I am from the outer function";

  return function innerFunction() {
    console.log(outerVariable); // innerFunction can access outerVariable
  };
}
```

## 3. **Closures and Returning Functions**

Closures are useful when you want to return a function from another function, maintaining access to the outer function's scope.

## 4. **Closures and Data Privacy**

Closures can also be used to create private data, which cannot be accessed directly from outside the closure.
