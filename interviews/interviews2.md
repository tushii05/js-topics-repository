1. **Currying** ::-->> Currying in JavaScript is a technique of transforming a function that takes multiple arguments into a sequence of functions, each with a single argument. It allows us to create more flexible and reusable code.

2. **Hoisting** ::-->> Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope during compilation.

3. **Closures** ::-->> A closure is a function that has access to the outer function's variables even after the outer function has finished executing.

4. **Prototypal inheritance** ::-->> Prototypal inheritance is where objects inherit properties and methods from other objects.

5. **Asynchronous programming** :-->>: Asynchronous programming in JavaScript allows operations to be performed concurrently, without blocking the execution of the program.
   This is achieved using callbacks, promises, async/await, and event listeners.

6. **promises** ::-->> Promises represent the eventual completion or failure of an asynchronous operation and its resulting value.
   They provide a cleaner way to handle asynchronous operations compared to callbacks.

7. **Scope** ::-->> Scope determines the accessibility of variables in JavaScript.

8. **This** ::-->> The 'this` keyword refers to the current execution context in JavaScript. Its value depends on how a function is called.

9. **bind** ::-->> The bind() method creates a new function that, when called, has its this keyword set to the provided value. It doesn't immediately invoke the function but instead returns a new function with the specified this value and optional arguments.

10. **Call** ::-->> The call() method calls a function with a given this value and arguments provided individually.

11. **Apply**: The apply() method is similar to call(), except that it accepts arguments as an array.

12. **Async/Await**::-->> Async/await is a modern way of handling asynchronous code in JavaScript. It allows you to write asynchronous code as if it were synchronous, making it easier to read and write. The `async` keyword is used to declare an asynchronous function, and the `await` keyword is used to pause the execution of an async function until a promise is resolved.

13. **Synchronous (Sync) Programming**::-->> In synchronous programming, each operation is executed one after the other in a sequential manner. When one operation completes, the next one starts. This means that if one operation takes a long time to complete (e.g., reading a file or making a network request), the entire program is blocked until that operation finishes.

14. **Spread Operators**::-->> The spread operator allows spreading elements of an array or iterable object into places where multiple elements are expected.

```javascript
const person = {
  name: "Hii",
  age: 23,
};
const { name, ...rest } = person; //remove using rest
const Spread = { ...person, name: "hii" }; //add and update with spread
```

15. **use strict**::-->> is a directive in JavaScript that enables strict mode within a script or a function. Strict mode provides enhanced error checking and enforcement of stricter syntax rules. It helps to write more secure, optimized, and maintainable JavaScript code.

16. **prototype** ::-->> The JavaScript prototype property allows you to add new properties to object constructors.
