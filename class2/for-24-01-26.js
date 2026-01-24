// for or while loops
// when we have to same task mulitple times

// console.log("hello"); 
// console.log("hello"); 
// console.log("hello"); 
// console.log("hello"); 
// console.log("hello"); 

// instead of writing multiple times we use loops
// for loop syntax
// for(initialization; condition; increment/decrement){
//     // code to be executed
// }

// for (___// initialization:condtion where to stop:increment/decrement){
    // code to be executed
// }

for(let i=0; i<5; i++){
    console.log("hello");
}
let i=0;
while(i<5){
    console.log("hello from while loop");
    i++;
}

for(let i=5; i>0; i--){
    console.log("hello from decrementing for loop");
}

while(true){
let value= prompt("enter a number less than 10: ");
if(value<0){
    break;
}
}
let array=[1,2,3,4,5];


let value=1;
let secondArray=[4,5,6,8,35]
for(let i=0; i<secondArray.length; i++){
    if(secondArray[i]==value){
        console.log("value found using for loop");
    }
}
// for loop when we know how many times we know
//while loop when we dont know how many time we have to run the loop
// compare the values

// if(secondArray[0]==value){
//     console.log("value found");
// }
// if(secondArray[1]==value){
//     console.log("value found");
// }
// if(secondArray[2]==value){
//     console.log("value found");
// }

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

let array=[1,2,3,4,5];
let sum=0;
// count all values of the array and put the result in sum

for (let i=0; i< array.length; i++) {
    sum +=array[i];
}
console.log(sum)

// even number sum
let evenSum=0;
let oddSum =0;
// i is index

for (let i=0; i< array.length; i++) {
    if(array[i]%2 === 0){
        console.log(array[i])
        evenSum +=array[i];
    }else{
         oddSum +=array[i];
    }
}
console.log(evenSum,"even sum")
console.log(oddSum,"odd sum")

console.log("-----------------\n\n")
// nested 
for (let i=0; i< 3; i++) { 
console.log("i for loop",i);
for (let j=0; j<3; j++) {
    console.log(i,j);
  
}
    
    
}

// output:


// for (let i=0; i< 3; i++) { i=3
//     console.log(i) // 
// }

// ouput:
// 0
// 1
// 2
console.log("-----------------\n\n")

let array1=[1,2,3,4,5,6]
let secondArray=[4,5,6]
let result=[];
// i want values which are common in both arrays
// 4 ,5 ,6
// loops u have to when u want to repative things
// if u have to use when ur checking somethings

for (let i=0; i< array1.length; i++) { 
for (let j=0; j<secondArray.length; j++) {
  if(array1[i] === secondArray[j]) {
      result.push(array1[i])
  }
  
}
}
console.log(result)


console.log("Duplicae value")
let arr=[1,2,3,4,5,4,6];
// [1,2,3,4,5,4,6];
// 1 i=0 j=i+1
// [2,3,4,5,4,6] not present
// 2 i=1 j=i+1
// [3,4,5,4,6] not present
// 3
// [4,5,4,6] not present
// 4
// [5,4,6]  present
// 5
// [4,6]  not present
// 4
// [6]  not present
// 6
// []  not present
// [1,2,3,4,5,4,6]
// find the duplicate vlaue in the array 
// Output:4 is a duplicate value

//  one way 
// there multiple ways to the same problem

for(let i=0;i<arr.length;i++){ //arr[i] is 1
for(let j=i+1;j<arr.length;j++){
    if(arr[i] === arr[j]){
        console.log(arr[i])
    }
}    
}

// let arr=[1,2,3,4,4,5,6];
// we need asusme all are natural numbers in sort order
// only one duplcate exist
let sumArr=0;
for(let i=0;i<arr.length;i++){
    sumArr+=arr[i];
}
let totalNaturnalSum= (arr[arr.length-1]*arr[arr.length-1]-1)/2
const resultarr =sumArr - totalNaturnalSum




