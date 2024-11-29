**Hoisting** -->> Hoisting is the default behaviour of javascript where all the variable and function declarations are moved on top.

```javascript
var x = 23;
console.log(x);
```

**debugger** -->> The debugger for the browser must be activated in order to debug the code. Built-in debuggers may be switched on and off, requiring the user to report faults. The remaining section of the code should stop execution before moving on to the next line while debugging.

**var and let** -->> The keyword 'Var' has a function scope. Anywhere in the function, the variable specified using var is accessible but in ‘let’ the scope of a variable declared with the 'let' keyword is limited to the block in which it is declared. Let's start with a Block Scope.

**Implicit** -->> Implicit type coercion in JavaScript is the automatic conversion of value from one data type to another. It takes place when the operands of an expression are of different data types.

**NaN property** -->> NaN property represents the “Not-a-Number” value. It indicates a value that is not a legal number.

```javascript
isNaN("Hello"); // Returns true
isNaN(345); // Returns false
isNaN("1");
```

**passed by value and passed by reference** -->> In JavaScript, primitive data types are passed by value and non-primitive data types are passed by reference.

```javascript
var x = 2;
```

**Immediately Invoked Function (IIFE)** -->> An Immediately Invoked Function ( known as IIFE and pronounced as IIFY) is a function that runs as soon as it is defined.

```javascript
(function () {
  // Do something;
})();
```

**this** -->> The “this” keyword refers to the object that the function is a property of.

The value of the “this” keyword will always depend on the object that is invoking the function.

```javascript
var obj = {
  name: "vivek",
  getName: function () {
    console.log(this.name);
  },
};

obj.getName();
```

**currying** -->> Currying is an advanced technique to transform a function of arguments n, to n functions of one or fewer arguments.

```javascript
function add(a) {
  return function (b) {
    return a + b;
  };
}

add(3)(4);
```

**Closures** -->> Closures are an ability of a function to remember the variables and functions that are declared in its outer scope.

```javascript
var Person = function (pName) {
  var name = pName;

  this.getName = function () {
    return name;
  };
};

var person = new Person("Neelesh");
console.log(person.getName());
```

**callbacks** -->> A callback is a function that will be executed after another function gets executed. In javascript, functions are treated as first-class citizens, they can be used as an argument of another function, can be returned by another function, and can be used as a property of an object.

```javascript
function divideByHalf(sum) {
  console.log(Math.floor(sum / 2));
}

function multiplyBy2(sum) {
  console.log(sum * 2);
}

function operationOnSum(num1, num2, operation) {
  var sum = num1 + num2;
  operation(sum);
}

operationOnSum(3, 3, divideByHalf); // Outputs 3

operationOnSum(5, 5, multiplyBy2); // Outputs 20
```

**memoization** -->> Memoization is a form of caching where the return value of a function is cached based on its parameters. If the parameter of that function is not changed, the cached version of the function is returned.

```javascript
function addTo256(num) {
  return num + 256;
}
addTo256(20); // Returns 276
addTo256(40); // Returns 296
addTo256(20); // Returns 276
```

**recursion** -->> Recursion is a technique to iterate over an operation by having a function call itself repeatedly until it arrives at a result.

```javascript
function add(number) {
  if (number <= 0) {
    return 0;
  } else {
    return number + add(number - 1);
  }
}
add(3) => 3 + add(2)
          3 + 2 + add(1)
          3 + 2 + 1 + add(0)
          3 + 2 + 1 + 0 = 6
```

**constructor function** -->> Constructor functions are used to create objects in javascript.

```javascript
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

var person1 = new Person("Vivek", 76, "male");
console.log(person1);

var person2 = new Person("Courtney", 34, "female");
console.log(person2);
```

**arrow functions** -->> hey provide us with a new and shorter syntax for declaring functions. Arrow functions can only be used as a function expression.

```javascript
var arrowAdd = (a, b) => a + b;
```

**promises** -->> Promises are used to handle asynchronous operations like server requests, for ease of understanding, we are using an operation to calculate the sum of three elements.

```javascript
function sumOfThreeElements(...elements) {
  return new Promise((resolve, reject) => {
    if (elements.length > 3) {
      reject("Only three elements or less are allowed");
    } else {
      let sum = 0;
      let i = 0;
      while (i < elements.length) {
        sum += elements[i];
        i++;
      }
      resolve("Sum has been calculated: " + sum);
    }
  });
}
```
