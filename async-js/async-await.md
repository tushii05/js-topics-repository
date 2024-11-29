## **1. What is `async`/`await`?**

- `async` is a keyword used to define a function that will always return a **Promise**. Inside an `async` function, you can use the `await` keyword.
- `await` is used to pause the execution of an `async` function until a **Promise** is resolved or rejected.

---

## **2. Basic Syntax of `async`/`await`**

### Example of `async` function:

```javascript
async function fetchData() {
  let data = await someAsyncTask();
  console.log(data);
}

fetchData();
```

## 3. **Handling Errors with try/catch**

Just like synchronous code, you can handle errors inside an async function using try/catch.

```javascript
async function fetchData() {
  try {
    let data = await fetch("https://api.example.com");
    console.log(data);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}
```

## 4. **Parallel Execution with Promise.all()**

If you want multiple asynchronous operations to run in parallel, use Promise.all() with async/await.

```javascript
async function fetchData() {
  let [data1, data2] = await Promise.all([
    fetch("https://api.example.com/data1"),
    fetch("https://api.example.com/data2"),
  ]);
  console.log(data1, data2);
}
```
