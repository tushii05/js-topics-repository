// **Basic Closure Example**
function outerFunction() {
    let outerVariable = "I am from the outer function";

    return function innerFunction() {
        console.log(outerVariable);  // innerFunction can access outerVariable
    };
}

const closureExample = outerFunction();
closureExample();  // Logs "I am from the outer function"


// **Closures and Returning Functions Example**
function multiplier(factor) {
    return function (number) {
        return number * factor;
    };
}

const multiplyByTwo = multiplier(2);
console.log(multiplyByTwo(5));  // Logs 10


// **Closures and Data Privacy Example**
function counter() {
    let count = 0;  // `count` is a private variable
    return {
        increment: function () {
            count++;
            console.log(count);
        },
        decrement: function () {
            count--;
            console.log(count);
        },
        getCount: function () {
            return count;
        }
    };
}

const myCounter = counter();
myCounter.increment();  // Logs 1
myCounter.increment();  // Logs 2
console.log(myCounter.getCount());  // Logs 2
