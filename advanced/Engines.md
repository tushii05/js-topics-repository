- JavaScript engines are responsible for executing JavaScript code. They parse, compile, and run JavaScript.

## 2.1.** V8 Engine**

The V8 engine is used by Chrome and Node.js. It directly compiles JavaScript into native machine code for fast execution.

**How It Works:**
**Parsing:** Converts JavaScript code into an Abstract Syntax Tree (AST).
**Compilation:** Converts the AST into machine code.
**Execution:** Executes the machine code on the CPU.

## 2.2. **SpiderMonkey (Firefox)**

SpiderMonkey is Firefox's JavaScript engine. Like V8, it parses, compiles, and executes JavaScript. However, it supports different features and optimizations specific to Firefox.

## 2.3. **Chakra (Microsoft Edge)**

Chakra is the engine used in the older Microsoft Edge browser (pre-Chromium). It also handles parsing, compilation, and execution like V8 and SpiderMonkey.
