# JavaScript Objects

## What is an Object?

An **object** is a collection of key-value pairs where keys are strings (or Symbols) and values can be any data type. Objects are used to store related data and functionality together, making them fundamental to JavaScript programming.

## Why Do We Use Objects?

- **Data Organization**: Group related information together
- **Real-world Modeling**: Represent real entities (users, products, etc.)
- **Code Structure**: Organize code logically
- **Encapsulation**: Bundle data with methods that operate on that data
- **Reusability**: Create templates for multiple similar entities

## Basic Syntax
```javascript
// Object literal syntax
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Empty object
const emptyObj = {};

// Using new Object()
const obj = new Object();
obj.name = "Jane";
```

## Accessing Object Properties
```javascript
const user = {
  firstName: "Alice",
  lastName: "Smith",
  age: 25
};

// Dot notation
console.log(user.firstName); // "Alice"

// Bracket notation
console.log(user["lastName"]); // "Smith"

// Dynamic property access
const prop = "age";
console.log(user[prop]); // 25
```

## Adding and Modifying Properties
```javascript
const car = {
  brand: "Toyota"
};

// Add new property
car.model = "Camry";
car.year = 2023;

// Modify existing property
car.brand = "Honda";

console.log(car); // { brand: "Honda", model: "Camry", year: 2023 }
```

## Nested Objects
```javascript
const company = {
  name: "Tech Corp",
  address: {
    street: "123 Main St",
    city: "San Francisco",
    state: "CA",
    coordinates: {
      lat: 37.7749,
      lng: -122.4194
    }
  },
  employees: {
    count: 500,
    departments: ["Engineering", "Sales", "HR"]
  }
};

// Accessing nested properties
console.log(company.address.city); // "San Francisco"
console.log(company.address.coordinates.lat); // 37.7749
console.log(company.employees.departments[0]); // "Engineering"

// Optional chaining (prevents errors if property doesn't exist)
console.log(company.address?.zipCode); // undefined
console.log(company.location?.city); // undefined
```

## Methods in Objects
```javascript
const calculator = {
  value: 0,
  
  add: function(num) {
    this.value += num;
    return this;
  },
  
  subtract(num) { // ES6 shorthand
    this.value -= num;
    return this;
  },
  
  multiply: (num) => { // Arrow function (be careful with 'this')
    // Note: arrow functions don't have their own 'this'
    console.log(num);
  },
  
  getValue() {
    return this.value;
  },
  
  reset() {
    this.value = 0;
  }
};

// Using methods
calculator.add(10).subtract(3); // Method chaining
console.log(calculator.getValue()); // 7
calculator.reset();
```

## Object Methods

### Object.assign()

Copies properties from source objects to a target object.
```javascript
const target = { a: 1, b: 2 };
const source1 = { b: 3, c: 4 };
const source2 = { c: 5, d: 6 };

const result = Object.assign(target, source1, source2);
console.log(result); // { a: 1, b: 3, c: 5, d: 6 }
console.log(target); // target is modified

// Clone an object (shallow copy)
const original = { x: 1, y: 2 };
const clone = Object.assign({}, original);
console.log(clone); // { x: 1, y: 2 }
```

### Object.keys()

Returns an array of object's own property names.
```javascript
const person = {
  name: "Bob",
  age: 30,
  city: "Boston"
};

const keys = Object.keys(person);
console.log(keys); // ["name", "age", "city"]

// Iterate over keys
keys.forEach(key => {
  console.log(`${key}: ${person[key]}`);
});
```

### Object.values()

Returns an array of object's own property values.
```javascript
const scores = {
  math: 95,
  science: 88,
  english: 92
};

const values = Object.values(scores);
console.log(values); // [95, 88, 92]

const average = values.reduce((a, b) => a + b) / values.length;
console.log(average); // 91.67
```

### Object.entries()

Returns an array of [key, value] pairs.
```javascript
const product = {
  name: "Laptop",
  price: 999,
  inStock: true
};

const entries = Object.entries(product);
console.log(entries);
// [["name", "Laptop"], ["price", 999], ["inStock", true]]

// Convert to Map
const productMap = new Map(entries);

// Iterate over entries
for (const [key, value] of Object.entries(product)) {
  console.log(`${key}: ${value}`);
}
```

### Object.freeze()

Makes an object immutable (cannot add, delete, or modify properties).
```javascript
const config = {
  apiUrl: "https://api.example.com",
  timeout: 5000
};

Object.freeze(config);

config.apiUrl = "https://newapi.com"; // Ignored in strict mode, error in strict mode
config.newProp = "test"; // Ignored
delete config.timeout; // Ignored

console.log(config); // Original object unchanged

// Check if frozen
console.log(Object.isFrozen(config)); // true
```

### Object.seal()

Prevents adding or deleting properties, but allows modifying existing ones.
```javascript
const settings = {
  theme: "dark",
  fontSize: 14
};

Object.seal(settings);

settings.theme = "light"; // Allowed
settings.language = "en"; // Ignored
delete settings.fontSize; // Ignored

console.log(settings); // { theme: "light", fontSize: 14 }

// Check if sealed
console.log(Object.isSealed(settings)); // true
```

### Object.preventExtensions()

Prevents adding new properties but allows deletion and modification.
```javascript
const user = {
  name: "Charlie"
};

Object.preventExtensions(user);

user.name = "Charles"; // Allowed
user.age = 25; // Ignored
delete user.name; // Allowed

console.log(Object.isExtensible(user)); // false
```

## Constructor Functions

Create multiple objects with the same structure.
```javascript
// Constructor function (capitalize first letter by convention)
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  
  this.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
  };
}

// Create instances using 'new' keyword
const person1 = new Person("John", "Doe", 30);
const person2 = new Person("Jane", "Smith", 25);

console.log(person1.getFullName()); // "John Doe"
console.log(person2.getFullName()); // "Jane Smith"

// Adding methods to prototype (more efficient)
Person.prototype.greet = function() {
  return `Hello, I'm ${this.firstName}`;
};

console.log(person1.greet()); // "Hello, I'm John"
```

## Factory Functions

Functions that return new objects.
```javascript
// Factory function
function createCar(make, model, year) {
  return {
    make: make,
    model: model,
    year: year,
    
    getInfo() {
      return `${this.year} ${this.make} ${this.model}`;
    },
    
    // Private variable using closure
    getAge() {
      const currentYear = new Date().getFullYear();
      return currentYear - this.year;
    }
  };
}

const car1 = createCar("Toyota", "Camry", 2020);
const car2 = createCar("Honda", "Civic", 2022);

console.log(car1.getInfo()); // "2020 Toyota Camry"
console.log(car1.getAge()); // 5 (or current year - 2020)

// Factory with private variables
function createBankAccount(initialBalance) {
  let balance = initialBalance; // Private variable
  
  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    
    withdraw(amount) {
      if (amount <= balance) {
        balance -= amount;
        return balance;
      }
      return "Insufficient funds";
    },
    
    getBalance() {
      return balance;
    }
  };
}

const account = createBankAccount(1000);
console.log(account.deposit(500)); // 1500
console.log(account.withdraw(200)); // 1300
console.log(account.balance); // undefined (private)
```

## Object Reference vs Copy

### Reference
```javascript
// Objects are assigned by reference
const original = { name: "Alice", age: 30 };
const reference = original;

reference.age = 31;
console.log(original.age); // 31 (both point to same object)

console.log(original === reference); // true
```

### Shallow Copy
```javascript
const original = {
  name: "Bob",
  age: 25,
  address: { city: "NYC" }
};

// Method 1: Object.assign()
const copy1 = Object.assign({}, original);

// Method 2: Spread operator
const copy2 = { ...original };

copy1.name = "Charlie";
console.log(original.name); // "Bob" (primitive copied)

// But nested objects are still referenced
copy1.address.city = "LA";
console.log(original.address.city); // "LA" (nested object referenced)
```

### Deep Copy
```javascript
const original = {
  name: "Dave",
  age: 30,
  address: {
    city: "Boston",
    coordinates: { lat: 42.3601, lng: -71.0589 }
  },
  hobbies: ["reading", "gaming"]
};

// Method 1: JSON (limitations: loses functions, dates, undefined, etc.)
const deepCopy1 = JSON.parse(JSON.stringify(original));

// Method 2: structuredClone() (modern browsers)
const deepCopy2 = structuredClone(original);

// Method 3: Recursive function
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof Array) return obj.map(item => deepClone(item));
  
  const clonedObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key]);
    }
  }
  return clonedObj;
}

const deepCopy3 = deepClone(original);

deepCopy2.address.city = "Seattle";
console.log(original.address.city); // "Boston" (unchanged)
```

## Destructuring Objects

Extract properties into variables.
```javascript
const user = {
  id: 1,
  username: "johndoe",
  email: "john@example.com",
  age: 28,
  address: {
    street: "123 Main St",
    city: "NYC"
  }
};

// Basic destructuring
const { username, email } = user;
console.log(username); // "johndoe"

// Rename variables
const { username: userName, age: userAge } = user;
console.log(userName); // "johndoe"

// Default values
const { phone = "N/A" } = user;
console.log(phone); // "N/A"

// Nested destructuring
const { address: { city, street } } = user;
console.log(city); // "NYC"

// Rest operator
const { id, ...rest } = user;
console.log(rest); // All properties except 'id'

// Function parameters
function displayUser({ username, email, age = 18 }) {
  console.log(`${username} (${email}), Age: ${age}`);
}

displayUser(user);

// Array destructuring
const colors = ["red", "green", "blue"];
const [first, second] = colors;
console.log(first); // "red"
```

## Additional Object Features

### Computed Property Names
```javascript
const propName = "score";
const dynamicKey = "user_" + 123;

const obj = {
  [propName]: 95,
  [dynamicKey]: "Alice",
  ["total" + "Count"]: 100
};

console.log(obj); // { score: 95, user_123: "Alice", totalCount: 100 }
```

### Property Shorthand
```javascript
const name = "Emma";
const age = 27;

// Old way
const person1 = { name: name, age: age };

// Shorthand
const person2 = { name, age };

console.log(person2); // { name: "Emma", age: 27 }
```

### Checking Properties
```javascript
const book = {
  title: "JavaScript Guide",
  author: "John Doe"
};

// Check if property exists
console.log("title" in book); // true
console.log("publisher" in book); // false

// hasOwnProperty (doesn't check prototype chain)
console.log(book.hasOwnProperty("title")); // true

// Check for undefined
console.log(book.title !== undefined); // true
```

### Deleting Properties
```javascript
const product = {
  name: "Phone",
  price: 599,
  stock: 50
};

delete product.stock;
console.log(product); // { name: "Phone", price: 599 }
```

## Complete Example
```javascript
// Factory function with all concepts
function createStudent(name, age, grades = {}) {
  // Private variable
  let studentId = Math.random().toString(36).substr(2, 9);
  
  const student = {
    name,
    age,
    grades: { ...grades }, // Shallow copy
    enrolledCourses: [],
    
    // Method
    enroll(course) {
      this.enrolledCourses.push(course);
      return this;
    },
    
    // Method with nested object access
    addGrade(subject, grade) {
      this.grades[subject] = grade;
    },
    
    // Calculate average
    getAverage() {
      const scores = Object.values(this.grades);
      if (scores.length === 0) return 0;
      return scores.reduce((a, b) => a + b) / scores.length;
    },
    
    // Access private variable
    getId() {
      return studentId;
    },
    
    // Get student info
    getInfo() {
      return {
        id: studentId,
        name: this.name,
        age: this.age,
        courses: this.enrolledCourses.length,
        average: this.getAverage()
      };
    }
  };
  
  // Seal the student object
  return Object.seal(student);
}

// Usage
const student1 = createStudent("Alice", 20, { math: 95, science: 88 });
student1.enroll("Physics").enroll("Chemistry");
student1.addGrade("english", 92);

console.log(student1.getInfo());
console.log(`Average: ${student1.getAverage().toFixed(2)}`);

// Destructuring
const { name, age } = student1;
console.log(`${name} is ${age} years old`);

// Object methods
const courses = Object.keys(student1.grades);
console.log("Enrolled in:", courses);
```

## Summary Table

| Feature | Description | Example |
|---------|-------------|---------|
| `Object.keys()` | Returns array of keys | `Object.keys(obj)` |
| `Object.values()` | Returns array of values | `Object.values(obj)` |
| `Object.entries()` | Returns array of [key, value] pairs | `Object.entries(obj)` |
| `Object.assign()` | Copies properties (shallow) | `Object.assign({}, obj)` |
| `Object.freeze()` | Makes object immutable | `Object.freeze(obj)` |
| `Object.seal()` | Prevents add/delete, allows modify | `Object.seal(obj)` |
| `Object.preventExtensions()` | Prevents adding properties | `Object.preventExtensions(obj)` |
| Spread operator | Copies object (shallow) | `{...obj}` |
| Destructuring | Extracts properties | `const {name} = obj` |

