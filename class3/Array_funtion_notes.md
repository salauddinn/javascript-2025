# 📘 JavaScript Array Methods: `map`, `filter`, `reduce`

JavaScript provides powerful array methods to work with data **without using loops**.

---

## 🔹 `map()`

### 👉 Purpose

* Used to **transform each element** of an array.
* Performs an operation on **every element**.
* **Returns a new array** (same length as original).

### ✅ Syntax

```js
array.map((value, index, array) => {
  return newValue;
});
```

### ✅ Example

```js
let array = [1, 2, 3, 4];

const result = array.map((value) => {
  return value + 10;
});

console.log(result); // [11, 12, 13, 14]
```

### 📝 Notes

* Does **not modify** original array
* Always returns an array
* Best for **updating values**

---

## 🔹 `filter()`

### 👉 Purpose

* Used to **select elements** based on a condition.
* Returns elements that evaluate to `true`.
* **Returns a new array** (can be smaller).

### ✅ Syntax

```js
array.filter((value, index, array) => {
  return condition; // true or false
});
```

### ✅ Example (Even Numbers)

```js
let array = [1, 2, 3, 4, 5, 6];

const evenNumbers = array.filter((value) => {
  return value % 2 === 0;
});

console.log(evenNumbers); // [2, 4, 6]
```

### 📝 Notes

* Does **not change** original array
* Used for **filtering data**
* Returns only matching values

---

## 🔹 `reduce()`

### 👉 Purpose

* Used to **reduce an array to a single value**
* Useful for sum, total, average, merging data

### ✅ Syntax

```js
array.reduce((accumulator, currentValue) => {
  return updatedAccumulator;
}, initialValue);
```

### ✅ Example (Sum of Array)

```js
let array = [1, 2, 3, 4];

const sum = array.reduce((acc, current) => {
  return acc + current;
}, 0);

console.log(sum); // 10
```

### 📝 Notes

* Returns a **single value**
* `accumulator` stores the result
* `initialValue` is mandatory (best practice)

---

## 🔹 Practical Examples

### ✅ Separate Birds & Fruits

```js
let array = ["bird1", "banana", "bird2", "mango"];

const birds = array.filter((value, index) => index % 2 === 0);
const fruits = array.filter((value, index) => index % 2 !== 0);

console.log(birds);  // ["bird1", "bird2"]
console.log(fruits); // ["banana", "mango"]
```

---

### ✅ Numbers Below & Above 100

```js
let numbers = [10, 100, 20, 200, 30, 300];

const below100 = numbers.filter(value => value < 100);
const above100 = numbers.filter(value => value >= 100);

console.log(below100); // [10, 20, 30]
console.log(above100); // [100, 200, 300]
```

---

## 🔹 Quick Comparison

| Method   | Returns      | Use Case            |
| -------- | ------------ | ------------------- |
| `map`    | Array        | Modify all elements |
| `filter` | Array        | Select elements     |
| `reduce` | Single Value | Calculate result    |

---

## 🔹 Summary

* `map` → **change values**
* `filter` → **pick values**
* `reduce` → **combine values**

