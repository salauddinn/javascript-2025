# JavaScript Assignments - Class 1

## Assignment 1: Variables and Data Types

### Q1: Create variables for a student profile
Create the following variables:
- `studentName` (string): your name
- `studentAge` (number): your age
- `isEnrolled` (boolean): enrollment status
- `grade` (number): your grade/marks
- `address` (object): with properties street, city, zipCode

Print all variables to console

### Q2: Create an array of 3 product objects
Each product should have: `name`, `price`, `inStock` (boolean)

**Example:**
```javascript
{name: "laptop", price: 50000, inStock: true}
```

### Q3: Variable reassignment
- Create a variable with `let` and reassign it 3 times with different data types
- Print the variable after each reassignment

---

## Assignment 2: if-else Statements

### Q1: Grade Calculator
Create a variable `marks` with a number value. Write if-else to print:
- "Excellent" if marks >= 90
- "Good" if marks >= 70
- "Pass" if marks >= 50
- "Fail" if marks < 50

### Q2: Even or Odd
- Create a variable `number` and check if it's even or odd
- Print the result

### Q3: Age Category
Create a variable `age` and categorize:
- "Child" if age < 13
- "Teenager" if age >= 13 and age < 20
- "Adult" if age >= 20 and age < 60
- "Senior" if age >= 60

### Q4: Login Validation
- Create variables: `username` and `password`
- Check if username === "admin" AND password === "12345"
- Print "Login Successful" or "Invalid Credentials"

---

## Assignment 3: Switch Case

### Q1: Month Name
- Create a variable `monthNumber` (1-12)
- Use switch case to print the month name
- **Example:** 1 = "January", 2 = "February", etc.

### Q2: Traffic Light
Create a variable `lightColor` with values: "red", "yellow", "green"

Use switch case to print:
- "red" → "Stop"
- "yellow" → "Get Ready"
- "green" → "Go"
- default → "Invalid color"

### Q3: Calculator
- Create variables: `num1`, `num2`, `operator` (+, -, *, /)
- Use switch case to perform the operation and print result
- **Example:** num1=10, num2=5, operator="+" should print 15

---

## Assignment 4: Arrays

### Q1: Fruit Array
- Create an array of 5 fruits
- Print the first fruit, last fruit, and total number of fruits

### Q2: Array Manipulation
Create an array: `[10, 20, 30, 40, 50]`
- Add 60 to the end using `push()`
- Remove the last element using `pop()`
- Change the first element to 100
- Print the array after each operation

### Q3: Find Element
Create an array of colors: `["red", "blue", "green", "yellow"]`
- Print the index of "green" using `indexOf()`
- Check if "purple" exists in the array (indexOf returns -1 if not found)

### Q4: 2D Array
Create a 2D array representing a class with 3 students. Each student has [name, age, grade]

**Example:**
```javascript
[["John", 20, 85], ["Jane", 22, 90], ["Bob", 21, 78]]
```
Print the second student's name and grade

### Q5: Array of Objects
- Create an array of 3 books
- Each book should have: `title`, `author`, `pages`, `isRead` (boolean)
- Print all book titles
- Print books with pages > 200

---

## Bonus Challenge

### Shopping Cart System
Create a shopping cart system that:
1. Creates an array of product objects (name, price, quantity)
2. Calculates total price of all items (price × quantity for each)
3. Applies 10% discount if total > 1000
4. Prints final total and discount status
