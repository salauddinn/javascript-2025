

let array = [1, 2, 3, 4, 5, 6, 7, 8];
// let sum=0;
// for (let i=0; i<array.length; i++){
//    sum = sum + array[i];
// }

// map 
// arguments
// can be 
// number,string,boolean,array,object
// even function

const resultMap = array.map((value) => {
    return value + 10
});
///
// (value) => {
//     return value + 10
// }
// function valueAddtion(value) {
//     return value + 10;
// }
// let resultArray = [];
// for(let i=0; i<array.length; i++){
//    resultArray =valueAddtion(array[i]);
// }
// console.log("result array using function: "+resultArray);





console.log("map result: " + resultMap)
//filter  
// even and odd number
const result = array.filter((value) => {
    if (value % 2 == 0) {
        return value
    }
});
console.log("filter result: " + result)
// reduce
const reducedValue = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log("reduced value: " + reducedValue);


// map is used to add to something // opertion overall array
// filter is used to filter something
// reduce is used to reduce something to single value

let arraywithStrings = ["bird1", "banana", "bird2", "mango", "bird3", "orange"];

// two arrays
// one with bird names
// one with fruit names
// use map filter reduce functions 


// get an array of bird names
const birdArray = arraywithStrings.filter((value, index) => {
    if (index % 2 === 0) {
        return value;
    }
});
console.log("bird array: " + birdArray);
// ftuit array

const fruitsArray = arraywithStrings.filter((value, index) => {
    if (index % 2 !== 0) {
        return value;
    }
});
console.log("fruits array: " + fruitsArray);



let arrayWithNumbers = [10, 100, 20, 200, 30, 300];
// create new array with below 100
// create new array with above 100
const arraywithBelow100 = arrayWithNumbers.filter((value) => {
    if (value < 100) { return value; }

});
//[10, 0, 20, 0, 30, 0];
const arraywithAbove100 = arrayWithNumbers.filter((value) => {
    if (value >= 100) {
        return value;
    }

});
console.log("array with below 100: " + arraywithBelow100, arraywithBelow100.length);
console.log("array with above 100: " + arraywithAbove100, arraywithAbove100.length);

/// arrayname.[map/filter/reduce]((value)=>{return value+10})
// map and filter both return array
// reduce returns single value
