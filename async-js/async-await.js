// **Basic async/await Example**
async function fetchData() {
    let data = await fetch("https://api.example.com");
    console.log(data);
}

fetchData();

// **Error Handling with async/await**
async function fetchDataWithErrorHandling() {
    try {
        let data = await fetch("https://api.example.com");
        console.log(data);
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}

fetchDataWithErrorHandling();

// **Multiple async/await calls in sequence**
async function fetchDataInSequence() {
    let data1 = await fetch("https://api.example.com/data1");
    let data2 = await fetch("https://api.example.com/data2");
    console.log(data1, data2);
}

fetchDataInSequence();

// **Parallel execution with Promise.all()**
async function fetchDataInParallel() {
    let [data1, data2] = await Promise.all([
        fetch("https://api.example.com/data1"),
        fetch("https://api.example.com/data2")
    ]);
    console.log(data1, data2);
}

fetchDataInParallel();
