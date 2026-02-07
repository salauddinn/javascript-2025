let array=[1,2,3,4,5,6,7,8];

for(let i=0; i<array.length; i++){
    if(i%2==0){
        console.log("even index value: "+array[i]);
    }else{
        console.log("odd index value: "+array[i]);
    }
}
const newArray = array.map((value) => {
    return "hello " + value;
});
// console.log("new array: " + newArray);

const evenNumbers = array.filter((value) => {
  return value % 2 === 0;
});
const oddNumbers = array.filter((value) => {
  return value % 2 !== 0;
});
console.log("even numbers: " + evenNumbers);
console.log("odd numbers: " + oddNumbers);
// sum of all array elements

// 1 
// total=0, current=1
// 0+1=1
// total=1, current=2
// 1+2=3
// total=3, current=3
// 3+3=6
// total=6, current=4
// 6+4=10
// total=10, current=5
// 10+5=15
// ...
const sum = array.reduce((total, current) => {
  return total + current;
}, 0);

// let totalSum=0;
// for(let i=0; i<array.length; i++){
//     totalSum = totalSum + array[i];
// }   


// i want two new arrays
// if i want add 10 to each element then will map be suitable
// one with above 100 [100,200,300]
// one with below 100 [10,20,30]

// reduce to 
// should i use map, filter or reduce
// map is used to transform each element or add someting to each elemnt in aray
// filter is used  select some elements based on condition
// reduce is used to reduce all elements to single value like sum, multiplication


let numbers = [10, 100, 20, 200, 30, 300];
// one with above 100 [100,200,300]
// one with below 100 [10,20,30]
// map/filter/reduce
// this case i need to use filter
const above100=numbers.filter((value)=>{
    return value>100;
})
const below100=numbers.filter((value)=>{
    return value<=100;
});
console.log("above 100: "+above100);
console.log("below 100: "+below100);

let arraynumbers = [1, 2, 3, 4];
let newArray3= arraynumbers.map((value)=>
    {return value+5});
console.log("new array 3: "+newArray3);