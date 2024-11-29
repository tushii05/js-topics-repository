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
