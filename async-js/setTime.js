function exampleFunction() {
    console.log("Function execution started");

    // setTimeout: Executes after the specified delay (1000ms = 1 second)
    setTimeout(() => {
        console.log("setTimeout executed: After 1 second");
    }, 1000);

    // setInterval: Executes repeatedly at the specified interval (500ms)
    let intervalCount = 0;
    const interval = setInterval(() => {
        console.log(`setInterval executed: Interval ${++intervalCount}`);
        if (intervalCount === 3) {
            clearInterval(interval); // Stops the interval after 3 executions
            console.log("setInterval cleared");
        }
    }, 500);

    // setImmediate: Executes immediately after the current event loop cycle
    setImmediate(() => {
        console.log("setImmediate executed: Right after current I/O events");
    });

    console.log("Function execution ended");
}

exampleFunction();

// **setTimeout Example**
setTimeout(() => {
    console.log("This runs after 2 seconds");
}, 2000);

// **setInterval Example**
let counter = 0;
const intervalId = setInterval(() => {
    counter++;
    console.log("Counter:", counter);
    if (counter === 5) {
        clearInterval(intervalId);  // Stop the interval after 5 executions
    }
}, 1000);

// **setImmediate Example**
setImmediate(() => {
    console.log("This runs after the current event loop cycle");
});
