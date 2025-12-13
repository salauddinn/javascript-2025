
# 📘 JavaScript Functions (Simple Notes)

---

## 🔹 What is a Function?

A **function** is a block of code that:

* Does a specific task
* Can be **reused** multiple times

👉 *Write once, use many times*

---

## 🔹 Function Declaration (Normal Function)

### Syntax

```js
function functionName(parameters) {
    // code
}
```

### Example

```js
function helloworld(name) {
    console.log("hello " + name);
    console.log("welcome to functions");
}
```

### Function Call

```js
helloworld("salauddin");
helloworld("sujatha");
```

### Output

```
hello salauddin
welcome to functions
hello sujatha
welcome to functions
```

---

## 🔹 Why Use Functions?

* Avoid repeating code
* Make code clean
* Easy to maintain

---

## 🔹 Function With Return Value

### Example: Sum of an Array

```js
function sumArray(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total = total + arr[i];
    }
    return total;
}
```

### Usage

```js
let array1 = [10, 20, 30];
let result = sumArray(array1);

console.log(result); // 60
```

👉 `return` sends value back to where function was called

---

## 🔹 Function to Check Even or Odd

```js
function checkOddEven(num) {

    if (num % 2 === 0) {
        console.log(num + " is even");
    } else {
        console.log(num + " is odd");
    }
}
```

### Usage

```js
checkOddEven(10); // even
checkOddEven(11); // odd
```

---

## 🔹 Two Ways to Write Functions

---

### 1️⃣ Normal Function

```js
function add(a, b) {
    return a + b;
}
```

✔ Easy to understand
✔ Can be called before declaration

---

### 2️⃣ Arrow Function

```js
const addArrow = (a, b) => {
    return a + b;
};
```

✔ Shorter syntax
✔ Common in modern JavaScript

---

## 🔹 Arrow Function (Short Form)

```js
const add = (a, b) => a + b;
```

👉 Works when only **one line of code**

---

## 🔹 Arrow Function With Extra Code

```js
const addWithPrint = (a, b) => {
    console.log("adding numbers");
    return a + b;
};
```

---

## 🔹 Key Points to Remember

* `function` keyword → normal function
* `=>` → arrow function
* `return` gives result back
* Functions improve reusability
* Arrow functions are cleaner
