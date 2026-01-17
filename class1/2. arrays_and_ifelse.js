// will learn about arraya
// index 0,1,2,3,4
let array=["apple","banana","grapes","mango","orange"];
// console.log(array);
// console.log(array[1]);
// console.log(array.length);
// console.log(array[array.length-1]);
const OfferCODE="AI30";
console.log("Offer code is "+OfferCODE);
const numArray=[1,2,3,4,5];
array=[1,4,5];
// array=[true,false,true];
numArray[0]=10;
numArray[1]=20;
numArray[2]=30;

// console.log(numArray);
array.push(6);

// console.log(array);
// console.log("popped element:");
// console.log(array.pop());

// console.log("After pop")
// console.log(array);
// map filter reduce once we learn functions

// string
// let message="hello";
// meesage= ['h','e','l','l','o'];
let msg='hello world';
let msg2=`hello world`;
// console.log("string length "+message.length);
// console.log(message[0]);
// string methods
// console.log(message.toUpperCase()," converted to upper case");
// console.log(message.toLowerCase()," converted to lower case");
// console.log(message.indexOf('l'));
// console.log(message.lastIndexOf('l'));
// console.log(msg.slice(5,11));
// console.log(message.replace('llo','y there'));
// console.log(message.charAt(4));
// typescript
// objects
let age=10;
// if else 
    // if(_____ -> true/false){
    //     console.log("adult");
    // }else{
    //     console.log("not adult");
    // }
    if(age>18){
        console.log("adult");
    }else{
        console.log("not adult");
    }
// if else
let balence=-10;
if (balence>0){
    console.log("balance is positive");
}
else if (balence==0){
    console.log("balance is zero");
}
else{
    console.log("balance is negative");
}

let str="1";
// == vs ===
// === strict equality does type checking as well

if (str==="a"){
    console.log("string is a");
}
else{
    console.log("string is not a");
}
let bool=true;
if(bool){
    console.log("this is true");
}else{
    console.log("this is false");
}

// swtich case
let day=10;
switch(day){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("invalid day");
}

// operators
// arithmetic + - * / % ++ --
//++ increment
//-- decrement
// <= >= == !=
//  || !
// logical and, or , not

let count=0;
let x=10;
let a=13;
if(a%2 == 0){
    console.log("even number");
}else{
    console.log("odd number");
}
a= prompt("enter a number: ");
// for loop
