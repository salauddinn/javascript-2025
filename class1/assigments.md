# JavaScript Assignments - Class 1

---

## Part A: Basic Level

### Assignment 1: Variables and Data Types

#### Q1: Student Profile
Create variables for a student profile with the following information:
- Student's name (text)
- Student's age (number)
- Enrollment status (true/false)
- Current grade/marks (number)
- Address information including street, city, and zipCode

Print all the information to the console.

#### Q2: Product Collection
Create a collection of 3 products where each product has:
- Product name
- Price
- Availability status

**Example structure:**
```javascript
{name: "laptop", price: 50000, inStock: true}
```

#### Q3: Variable Reassignment
- Declare a variable that can be changed
- Assign it a number value and print it
- Change it to a text value and print it
- Change it to a true/false value and print it

---

### Assignment 2: Conditional Statements (if-else)

#### Q1: Grade Evaluator
Create a variable for student marks and determine the grade:
- 90 or above: "Excellent"
- 70 to 89: "Good"
- 50 to 69: "Pass"
- Below 50: "Fail"

#### Q2: Number Checker
Create a number variable and determine if it's even or odd.

#### Q3: Age Category Classifier
Create an age variable and classify the person as:
- Below 13: "Child"
- 13 to 19: "Teenager"
- 20 to 59: "Adult"
- 60 and above: "Senior"

#### Q4: Login System
Create username and password variables. Check if:
- Username is "admin"
- Password is "12345"

Print appropriate success or failure message.

---

### Assignment 3: Switch Case

#### Q1: Month Converter
Create a variable for month number (1-12) and print the corresponding month name.

**Hint:** 1 should give "January", 2 should give "February", etc.

#### Q2: Traffic Signal
Create a variable for signal color and print the action:
- Red signal: Display stop message
- Yellow signal: Display ready message
- Green signal: Display go message
- Any other value: Display error message

#### Q3: Simple Calculator
Create three variables:
- First number
- Second number
- Operation type (+, -, *, /)

Perform the calculation based on the operation and show the result.

---

### Assignment 4: Arrays

#### Q1: Fruit Basket
- Create a collection of 5 fruit names
- Display the first fruit
- Display the last fruit
- Display total number of fruits

#### Q2: Number List Operations
Start with this list: `[10, 20, 30, 40, 50]`

Perform these operations and print results after each:
- Add 60 at the end
- Remove the last item
- Change the first item to 100

#### Q3: Color Finder
Create a list of colors: `["red", "blue", "green", "yellow"]`
- Find the position of "green"
- Check if "purple" exists in the list

#### Q4: Student Records
Create a table (2D structure) with 3 students:
- Each row has: [name, age, grade]

**Example:**
```javascript
[["John", 20, 85], ["Jane", 22, 90], ["Bob", 21, 78]]
```
Display the second student's name and grade.

#### Q5: Book Collection
Create a collection of 3 books where each book has:
- Title
- Author name
- Number of pages
- Reading status (finished/not finished)

Tasks:
- Display title of first book
- Display title of second book
- Display title of third book
- Check if first book has more than 200 pages

---

## Part B: Intermediate Level

### Assignment 5: Array & Conditionals Combined

#### Q1: Three Students Analysis
Create exactly 3 student records with name, age, and marks.

Manually check and display:
- First student's name if marks > 75
- Second student's name if marks > 75
- Third student's name if marks > 75
- Check each student individually if marks < 50
- Compare all three to find highest marks

#### Q2: Shopping Cart Calculator (3 Items)
Create exactly 3 products with name, price, category, and stock status.

Calculate:
- Add price of first product (if in stock)
- Add price of second product (if in stock)
- Add price of third product (if in stock)
- Apply discount based on category using if-else
- Show final amount

#### Q3: Number Comparison
Create 5 individual number variables: `num1, num2, num3, num4, num5`

Tasks:
- Check if num1 equals num2
- Check if num3 equals num4
- Find the largest among first 3 numbers using if-else
- Find the smallest among last 2 numbers

---

### Assignment 6: String Challenges

#### Q1: Single Word Analysis
Create a word variable (e.g., "JavaScript")

Count manually:
- Check each character individually if it's a vowel
- Use if-else to count vowels
- Calculate total characters minus vowels for consonants

#### Q2: Three Word Reversal
Create 3 separate word variables:
- word1 = "Java"
- word2 = "Script"
- word3 = "Code"

Reverse each word by accessing characters individually and building new strings.

#### Q3: Password Checker
Create a password variable.

Check using string methods:
- Length is at least 8 characters
- Contains at least one number (check character by character)
- Has at least one uppercase letter
- Show pass/fail for each condition

---

### Assignment 7: Number Logic

#### Q1: Prime Number Checker
Create a single number variable.

Check if it's prime:
- Test if divisible by 2
- Test if divisible by 3
- Test if divisible by 5
- Test if divisible by 7
- Determine if prime based on results

#### Q2: Fibonacci First 5
Generate exactly 5 Fibonacci numbers manually:
- First = 0
- Second = 1
- Third = first + second
- Fourth = second + third
- Fifth = third + fourth

Store in 5 separate variables and display.

#### Q3: Simple Pattern
Display first 3 lines manually:
```
1
2 2
3 3 3
```
Use console.log three times with proper strings.

---

### Assignment 8: Array Operations

#### Q1: Matrix Addition (2x2)
Create two 2x2 grids:
```javascript
matrix1 = [[1, 2], [3, 4]]
matrix2 = [[5, 6], [7, 8]]
```

Add manually:
- result[0][0] = matrix1[0][0] + matrix2[0][0]
- result[0][1] = matrix1[0][1] + matrix2[0][1]
- result[1][0] = matrix1[1][0] + matrix2[1][0]
- result[1][1] = matrix1[1][1] + matrix2[1][1]

#### Q2: Three Students Grade Book
Create 3 students with 3 subject marks each:
```javascript
[
  ["John", 85, 90, 78],
  ["Jane", 92, 88, 95],
  ["Bob", 76, 82, 80]
]
```

Calculate manually:
- John's average = (mark1 + mark2 + mark3) / 3
- Jane's average = (mark1 + mark2 + mark3) / 3
- Bob's average = (mark1 + mark2 + mark3) / 3
- Compare to find highest

#### Q3: Tic-Tac-Toe Check
Create a 3x3 board with "X", "O", or empty.

Check manually:
- First row: Are all three same?
- Second row: Are all three same?
- Third row: Are all three same?
- First column: Are all three same?
- Diagonal: Are all three same?

---

### Assignment 9: Complex Conditionals

#### Q1: Movie Ticket Pricing
Calculate ticket price with nested if-else:
- Start with base price based on age
- Add/subtract based on day type
- Add/subtract based on show time
- Apply membership discount at the end

#### Q2: Student Final Grade
Use nested if-else:
- First check attendance
- If attendance OK, then check marks range
- Assign appropriate grade

#### Q3: Loan Approval System
Check each condition with if-else:
- First check age range
- Then check income
- Then check credit score
- Then check employment
- Then check existing loans
- Display reason for each failed condition

---

### Assignment 10: Array Comparison (Small Sets)

#### Q1: Compare Two Small Arrays
```javascript
arr1 = [5, 2, 8]
arr2 = [2, 9, 5]
```

Check manually:
- Is arr1[0] in arr2? Check each element
- Is arr1[1] in arr2? Check each element
- Is arr1[2] in arr2? Check each element
- Build common elements array

#### Q2: Find Largest in Small Array
Array: `[25, 67, 12, 45, 33]`

Compare manually:
- Compare first two, keep larger
- Compare result with third, keep larger
- Compare result with fourth, keep larger
- Compare result with fifth, keep larger

#### Q3: Remove Duplicates (Small Array)
Array: `[1, 2, 3, 2, 4, 1]`

Check each element:
- Take first element, check if it appears again
- Take second element, check if it appeared before
- Build new array with unique values only

