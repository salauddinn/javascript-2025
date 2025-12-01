

// const userName = prompt("Please enter your name:");
// console.log("Hello, " + userName + "!");
// for loop

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// intialization; condition; increment/decrement
for (let i=0; i<3; i++){
    console.log(i);
}
//  i=0
// 0<3 -> true
// print 0
// i=1 increment
// 1<3 -> true
// print 1
// i=2 increment
// 2<3 -> true
// print 2
// i=3 increment
// 3<3 -> false
// exit loop
for (let j=3; j>0; j--){
    console.log(j);
}

// nested for loop
for (let i=0; i<3; i++){
    //i=0 
    for (let j=0; j<2; j++){ // j=0,1
        console.log("i: "+i+" j: "+j);
    }
}
// i=0
// j=0 -> print i:0 j:0
// j=1 -> print i:0 j:1
// i=1
// j=0 -> print i:1 j:0
// j=1 -> print i:1 j:1
// i=2
// j=0 -> print i:2 j:0
// j=1 -> print i:2 j:1

// print table of 5
// for (let i=1; i<=10; i++){
//     console.log("5 x "+i+" = "+(5*i));
// }
// let a=['a','b','c'];
// for (let i=0; i<a.length; i++){ // < i=0,1,2 <= 0,1,2,3
//     console.log(a[i]);
    
// }
// differnce
// i<a.length 
// i<=a.length
let array=["bird1","banana","bird2","mango","bird3","orange"];
for (let i=0; i<array.length; i++){
    if(i%2 !==0){
    console.log(array[i]);
    }
   
}


// fruits

// multiarary[0][1] returns ["bird1","banana"]
//["bird1","banana"][0] returns "bird1"
//["bird1","banana"][1] returns "banana"
// multiarray[1] returns ["bird2","mango"]


// console.log(multiarray)

let multiarray=[
    ["bird1","banana"],// 1st array 0
    ["bird2","mango"] // 2nd array 1
    ["bird3","orange"]// 3rd array 2
];

// console.log(multiarray[0][1]);
// console.log(multiarray[1][1]);
// console.log(multiarray[2][1]);
for (let i=0; i<multiarray.length; i++){
   for (let j=0; j<multiarray[i].length; j++){
    if (j%2 !==0){
        console.log(multiarray[i][j]);
    }
}

// output should be 
// banana
// mango
// orange