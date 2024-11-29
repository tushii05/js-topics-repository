// promises.js
// Example of Promises in JavaScript

// Creating a Promise
const fetchData = (simulateError = false) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (simulateError) {
                reject("Error: Something went wrong!");
            } else {
                resolve("Data fetched successfully!");
            }
        }, 2000);
    });
};

// Using the Promise
fetchData()
    .then((data) => {
        console.log(data); // "Data fetched successfully!"
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log("Operation complete!");
    });
