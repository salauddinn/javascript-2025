let array = [1, 2, 3, 4, 5, 6, 7];
let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
}
// map filter reduce
array.map((value) => {
    sum = sum + value;
});

// funtionsadd
// funtion are used for reuseability
// function declaration
// function keyword functionName(parameters){ // function signature

function helloworld(name) {
    console.log("hello "+name);
    console.log("welecome to functions");
}


helloworld("salauddin"); 

helloworld("sujatha"); 



function sumArray(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total = total + arr[i];
    }
    return total;
}
let array1 = [10, 20, 30];
let sumArray3 = sumArray(array1); 
console.log("sum of array1: " + sumArray3);
let array2 = [5, 15, 25, 35];
let sumArray4 = sumArray(array2); 
console.log("sum of array2: " + sumArray4);
//write function which takes a  value 
// prints it's even or oddd
// it should print even number 
// 11 it should print odd number
function checkOddEven(num) {
  
    if (typeof num !== 'number' || !Number.isFinite(num)) {
        console.log("Invalid input. Please enter a valid number.");
        return;
    }
    if (num % 2 === 0) {
        console.log(num + " is an even number.");
    } else {
        console.log(num + " is an odd number.");
    }


}

array.map((value) => {
    sum = sum + value;    });

// two ways to write function
// normal function
function add(a, b) {
    return a + b;    
}
// when move classes and inheritance `this` keyword
// arrow function
const a=0;

const addArrow = (a, b) =>{
    
    return a + b;
}
// hoisting 
// this keyword
console.log("=========================");
console.log(add +"add normal\n")
console.log(addArrow+ "add arrow")
console.log("=========================");

// arrow without return keyword
const add = (a, b) => a + b;
const addWithPrint = (a, b) =>  {
    console.log("adding numbers");
    return a + b
};