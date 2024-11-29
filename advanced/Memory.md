Memory management refers to the process of allocating, managing, and releasing memory in JavaScript applications.

## 1. **Garbage Collection**

JavaScript uses automatic garbage collection to clean up unused objects. The Garbage Collector (GC) periodically looks for objects that are no longer in use and frees their memory.

## 2. **Manual Memory Management Techniques**

While JavaScript handles most memory management, developers can still take actions to optimize memory usage:

- Avoid global variables.
- Use closures carefully to avoid memory leaks.
- Make sure to nullify references to objects when they are no longer needed.

## 3. **Memory Leaks**

Memory leaks happen when an object is no longer needed but is not removed from memory. Common causes include:

- Global variables not cleaned up.
- Unused event listeners that remain attached.
- Closures holding references to large objects.
