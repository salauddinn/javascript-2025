
let multiarray=[
    ["bird1","banana","bird6","fruit1"],// 1st array 0
    ["bird2","mango"], // 2nd array 1
    ["bird3","orange"],// 3rd array 2
    ["bird4","fruit4"]
];

// console.log(multiarray[0]);
// console.log(multiarray[1]);
// console.log(multiarray[2][1]);
for (let i=0; i<multiarray.length; i++){
   for (let j=0; j<multiarray[i].length; j++){
    if (j%2 ==0){
        console.log(multiarray[i][j]);
    }
}
}
// a[1] and a[2]== 6

let array=[1,4,2,3,5,6,79];
let total=0;
for(let i=1; i<array.length; i++){
    if(array[i]%2==0){
        total=total+array[i];
    }
   
}
console.log("total sum: "+total);
// print max element in array


// when to use if condition
// when to use for loop
// 0,1,2,3,4,5
//  asuume u want at 3 index  then use break
// if u want to skip 3 index then use continue
let arr1=[1,2,3,4,5];
// if use break 

for (let i=0; i<arr1.length; i++){

    if (i==3){
        break; // exit from loop
    }
        total=total+arr1[i];
    
}
console.log(total)
// total=0;
// let i=0;
// while(true){
//     if(total<50){
//     total=total+arr1[i];
//     }else{
//         break;// contine
//     }
//     i++;
// }
// console.log(i)
// console.log("total sum using while loop: "+total);

// for and while
