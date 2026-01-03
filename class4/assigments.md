# JavaScript Objects - Practice Exercises

## Exercise 1: Basic Object Creation

Create an object representing a book with the following properties:
- title
- author
- year
- pages
- isRead (boolean)

Then add a method called `getSummary()` that returns a string like: "The Great Gatsby by F. Scott Fitzgerald, published in 1925"

**Hint:** Use the `this` keyword inside the method to access object properties.

---

## Exercise 2: Nested Objects

Create an object representing a student with:
- name
- age
- address (object with street, city, zipCode)
- courses (array of course names)

Write code to:
1. Access the student's city
2. Add a new course to the courses array
3. Update the street address

**Hint:** Use dot notation for nested object access, and array methods for the courses array.

---

## Exercise 3: Object Methods

Create a `rectangle` object with:
- width
- height
- Methods: `getArea()`, `getPerimeter()`, `isSquare()`

**Hint:** Use `this.width` and `this.height` inside the methods.

---

## Exercise 4: Object.keys(), Object.values(), Object.entries()

Given the following object:
```javascript
const scores = {
  math: 85,
  science: 92,
  english: 88,
  history: 90
};
```

Write code to:
1. Get all subject names
2. Get all scores
3. Calculate the average score
4. Find the highest score and its subject

**Hint:** Use `Object.keys()`, `Object.values()`, and `Object.entries()`. For calculations, use array methods like `reduce()`.

---

## Exercise 5: Object.assign() and Copying

Create two objects and merge them using `Object.assign()`:
```javascript
const defaultSettings = {
  theme: "light",
  fontSize: 14,
  notifications: true
};

const userSettings = {
  fontSize: 16,
  language: "en"
};
```

Merge them so that userSettings overrides defaultSettings.

**Hint:** The order of arguments in `Object.assign()` matters. You can also use the spread operator `{...obj}`.

---

## Exercise 6: Constructor Function

Create a constructor function `Car` that takes make, model, and year as parameters. Add a method to the prototype called `getAge()` that returns how old the car is.

**Hint:** 
- Constructor functions start with a capital letter
- Use `this` to assign properties
- Add methods to `Car.prototype`
- Create instances using the `new` keyword

---

## Exercise 7: Factory Function

Create a factory function `createCounter()` that returns an object with:
- A private count variable starting at 0
- Methods: `increment()`, `decrement()`, `getCount()`, `reset()`

**Hint:** Use closure to keep the count variable private. The function should return an object with methods that can access the count variable.

---

## Exercise 8: Object Destructuring

Given this user object:
```javascript
const user = {
  id: 101,
  name: "John Doe",
  email: "john@example.com",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA"
  },
  preferences: {
    theme: "dark",
    notifications: true
  }
};
```

Use destructuring to:
1. Extract name and email
2. Extract city from nested address
3. Extract theme with a default value
4. Extract everything except id into a new object

**Hint:** Use nested destructuring for nested properties, and the rest operator `...` for remaining properties.

---

## Exercise 9: Deep Copy Challenge

Create a function that performs a deep copy of an object. Test it with this nested object:
```javascript
const original = {
  name: "Alice",
  scores: [85, 90, 92],
  address: {
    city: "Boston",
    coordinates: {
      lat: 42.3601,
      lng: -71.0589
    }
  }
};
```

**Hint:** You'll need recursion to handle nested objects and arrays. Check the type of each value before copying. Alternatively, use `structuredClone()` or `JSON.parse(JSON.stringify())`.

---

## Exercise 10: Shopping Cart System

Create a shopping cart system with:
- Factory function `createCart()`
- Methods: `addItem(item, price, quantity)`, `removeItem(item)`, `getTotal()`, `getItems()`
- Store items as objects with name, price, and quantity

**Hint:** 
- Use an array to store items internally
- Check if an item already exists before adding
- Use `reduce()` to calculate the total
- Return `this` from methods to enable method chaining

---

## Exercise 11: Object.freeze() vs Object.seal()

Demonstrate the difference between `Object.freeze()` and `Object.seal()` with examples.

Create two objects and:
1. Freeze one object and try to modify, add, and delete properties
2. Seal another object and try to modify, add, and delete properties
3. Show what happens with nested objects

**Hint:** 
- `Object.freeze()` = completely immutable
- `Object.seal()` = can modify, cannot add/delete
- Both are shallow operations
- Use `Object.isFrozen()` and `Object.isSealed()` to check status

---

## Exercise 12: Bank Account System

Create a comprehensive bank account system using constructor functions:
- `BankAccount` constructor with accountNumber, ownerName, balance
- Methods: `deposit()`, `withdraw()`, `getBalance()`, `transfer()`
- Validation: Cannot withdraw more than balance, amounts must be positive
- Bonus: Track transaction history

**Hint:** 
- Use constructor function with prototype methods
- Add validation checks in each method
- Store transactions in an array
- For transfer, modify both account balances

---

## Exercise 13: Inventory Management System

Create an inventory management system with:
- Products with id, name, price, stock
- Methods to add/remove stock, check availability, calculate total value
- Use factory functions

Required methods:
- `addProduct(name, price, stock)`
- `removeProduct(id)`
- `updateStock(id, quantity)`
- `isAvailable(id, quantity)`
- `getTotalValue()`
- `getLowStock(threshold)`
- `searchByName(searchTerm)`

**Hint:** 
- Use a Map or object to store products
- Generate unique IDs automatically
- Use `reduce()` for calculations
- Use `filter()` or loops for searching

---

## Exercise 14: Complex Object Manipulation

Given an array of user objects:
```javascript
const users = [
  { id: 1, name: "Alice", age: 28, city: "New York", salary: 75000 },
  { id: 2, name: "Bob", age: 35, city: "Los Angeles", salary: 85000 },
  { id: 3, name: "Charlie", age: 28, city: "New York", salary: 70000 },
  { id: 4, name: "Diana", age: 42, city: "Chicago", salary: 95000 },
  { id: 5, name: "Eve", age: 35, city: "Los Angeles", salary: 90000 }
];
```

Tasks:
1. Group users by city
2. Calculate average salary by age
3. Find the user with the highest salary in each city
4. Create a summary object with total users, average age, and total salary

**Hint:** Use `reduce()` extensively for grouping and calculations. Use `Object.entries()` to iterate over grouped data.

---

## Exercise 15: Product Catalog

Create a product catalog system where:
- Each product has: id, name, category, price, tags (array), rating
- Methods to filter by category, search by tags, sort by price/rating
- Method to get products within a price range

**Hint:** Use `filter()`, `sort()`, and `includes()` methods. Consider using method chaining.

---

## Exercise 16: Task Manager

Build a task manager with:
- Task properties: id, title, description, priority, status, dueDate
- Methods: `addTask()`, `updateTask()`, `deleteTask()`, `completeTask()`
- Filter methods: `getTasksByStatus()`, `getTasksByPriority()`, `getOverdueTasks()`
- Use constructor function or factory function

**Hint:** Use Date objects for due dates. Store tasks in an array. Use `find()` and `filter()` for retrieving tasks.

---

## Exercise 17: Object Comparison

Write a function `deepEqual(obj1, obj2)` that compares two objects deeply and returns true if they are equal.

Test with:
```javascript
const obj1 = { a: 1, b: { c: 2, d: [3, 4] } };
const obj2 = { a: 1, b: { c: 2, d: [3, 4] } };
const obj3 = { a: 1, b: { c: 2, d: [3, 5] } };
```

**Hint:** Use recursion. Check if both values are objects, then compare their keys and values recursively.

---

## Exercise 18: Library System

Create a library management system with:
- Book object: title, author, ISBN, available
- Library object with methods:
  - `addBook(book)`
  - `removeBook(ISBN)`
  - `borrowBook(ISBN)`
  - `returnBook(ISBN)`
  - `searchBooks(query)` - search by title or author
  - `getAvailableBooks()`
  - `getBorrowedBooks()`

**Hint:** Use a Map with ISBN as key. Track borrowed status. Use string methods for searching.

---

## Exercise 19: Nested Object Flattening

Write a function that flattens a nested object:

Input:
```javascript
const nested = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: 4
    }
  },
  g: 5
};
```

Output:
```javascript
{
  "a": 1,
  "b.c": 2,
  "b.d.e": 3,
  "b.d.f": 4,
  "g": 5
}
```

**Hint:** Use recursion and build key paths as you go deeper.

---

## Exercise 20: E-commerce Order System

Create an order management system with:
- Order object: orderId, customerId, items (array of {productId, quantity, price}), status, orderDate
- Methods:
  - `createOrder(customerId, items)`
  - `addItem(orderId, item)`
  - `removeItem(orderId, productId)`
  - `calculateTotal(orderId)`
  - `updateStatus(orderId, status)`
  - `getOrdersByCustomer(customerId)`
  - `getOrdersByStatus(status)`

**Hint:** Use a factory function or class. Store orders in an array or Map. Use array methods for calculations.

---

## Challenge Exercise 21: Object Cloning with Custom Rules

Create a function `customClone(obj, rules)` that clones an object with custom transformation rules:
```javascript
const user = {
  id: 1,
  password: "secret123",
  email: "user@example.com",
  profile: {
    name: "John",
    age: 30
  }
};

const rules = {
  exclude: ["password"],
  transform: {
    email: (value) => value.toLowerCase(),
    "profile.age": (value) => value + 1
  }
};
```

The function should exclude specified fields and apply transformations.

**Hint:** Combine deep cloning with rule checking. Handle nested paths using dot notation.

---

## Challenge Exercise 22: Multi-level Cache System

Implement a caching system with:
- Multiple cache levels (L1, L2, L3)
- Each level has a size limit
- LRU (Least Recently Used) eviction policy
- Methods: `get(key)`, `set(key, value)`, `delete(key)`, `clear()`

**Hint:** Use Maps to maintain insertion order. Track access times or use a counter. When cache is full, remove the least recently used item.

---

## Challenge Exercise 23: Object Schema Validator

Create a function that validates objects against a schema:
```javascript
const schema = {
  name: { type: "string", required: true, minLength: 2 },
  age: { type: "number", required: true, min: 0, max: 150 },
  email: { type: "string", required: false, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ },
  address: {
    type: "object",
    required: false,
    properties: {
      city: { type: "string", required: true },
      zipCode: { type: "string", required: true }
    }
  }
};
```

The validator should return validation errors if any.

**Hint:** Recursively validate nested objects. Check type, required fields, and custom rules. Return an array of error messages.

---

## Bonus Challenge: Memory Efficient Object Pool

Create an object pool that reuses objects instead of creating new ones:
- `acquire()` - get an object from the pool
- `release(obj)` - return an object to the pool
- Set max pool size
- Reset object properties when released

**Hint:** Use an array as the pool. When acquiring, pop from pool or create new if empty. When releasing, reset properties and push back to pool.