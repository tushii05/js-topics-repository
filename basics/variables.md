# Variables in JavaScript

## Overview

In JavaScript, variables are containers for storing data values. You can declare variables using `var`, `let`, or `const`.

---

### **1. var**

- Function-scoped.
- Can be re-declared and updated.

```javascript
var x = 10;
x = 20; // Updates the value
```

### **2. let**

- Block-scoped.
- Can be updated but not re-declared within the same scope.

```javascript
let y = 10;
y = 20; // Allowed
// let y = 30; // Error
```

### **3. const**

Block-scoped.
Cannot be updated or re-declared.

```javascript
const z = 10;
// z = 20; // Error
```
