// Examples of error handling with try-catch

try {
    // Intentionally causing an error
    const result = 10 / 0;
    console.log(result);

    // Accessing undefined variable
    console.log(undefinedVar); // This will throw an error
} catch (error) {
    console.error("An error occurred:", error.message);
} finally {
    console.log("This block runs regardless of errors.");
}

// Throwing a custom error
function validateAge(age) {
    if (age < 18) {
        throw new Error("Age must be at least 18.");
    }
    console.log("Age is valid.");
}

try {
    validateAge(15);
} catch (error) {
    console.error("Validation error:", error.message);
}
