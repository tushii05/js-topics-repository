# Data Types in JavaScript

JavaScript has two main types of data:

1. **Primitive Data Types**
2. **Reference (Non-Primitive) Data Types**

---

## **1. Primitive Data Types**

These are immutable and stored directly in the stack.

1. **String**

   - Used for text.
   - Example: `"Hello, World!"`

   ```javascript
   let name = "John";
   ```

2. **Number**

- Represents integers and floating-point numbers.
- Example: 42, 3.14

```javascript
let age = 25;
let pi = 3.14;
```

3. **Boolean**

- Represents true or false.
- Example: true, false

```javascript
let isAdmin = true;
```

4. **Undefined**

- A variable declared but not assigned a value.

```javascript
let x;
console.log(x); // undefined
```

5. **Null**

- Represents an intentional absence of value.

```javascript
let data = null;
```

6. **Symbol (ES6)**

- Unique and immutable value, often used as object keys.

```javascript
let sym = Symbol("id");
```

7. **BigInt (ES11)**

- Used for integers larger than Number.MAX_SAFE_INTEGER.

```javascript
let bigNum = 1234567890123456789012345678901234567890n;
```
