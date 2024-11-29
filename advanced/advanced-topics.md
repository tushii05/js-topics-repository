# Advanced JavaScript Topics

This document covers advanced topics in JavaScript including **Modules (ES6, CommonJS)**, **JavaScript Engines**, **Performance Optimization**, and **Memory Management**.

---

## **1. Modules in JavaScript**

JavaScript modules are used to divide code into smaller, reusable pieces. Modules help in improving code organization, readability, and maintainability.

### **1.1. ES6 Modules (ESM)**

ES6 modules are the standard way of importing and exporting code in modern JavaScript.

- **Export**: Use `export` to expose functions, objects, or values from a module.
- **Import**: Use `import` to bring in functionality from another module.

#### Example:

```javascript
// math.js (Export)
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

```
