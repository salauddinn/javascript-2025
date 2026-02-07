/// find the maximam value in that array 

function maxValue(array){
// assume that this function already writted 
// 10,20,30,40,22,45,77,22,44
// [10] => max=10  value
// [10,20] max<newvalue(20)=> max=20
   
// [10,20,30] max<newvalue(30)=> max=30
//  [10,20,30,40] max<newvalue(40)=> max=40
// [10,20,30,40,22] max(40) <newvalue (22)=>max=40
max=Number.MIN_VALUE; //-100000
// let a=[10,20,30,40,22,45,77,22,44];
for(let i=0;i<array.length;i++){
    // i=0 max is in negative 
    // array[0] 10 
 // i=1
 // array[1] 20
 
 // 10<20 ??  true     max = 20
 // should check new value is more than max then change the value
//

    if(max < array[i]){
        // max=10
        max=array[i]
    }
}
return max
}
function minValue(array){
min=1;// max value 9999


for(let i=1;i<array.length;i++){
  // if the new value is less than my exisitng min then change the value
  // min=30 new=20
  // 20<30
  // 
    if(array[i]<min){
        min=array[i]
       
    }
}
return min
}


let a=[10,20,30,40,22,45,77,22,44];
const result=maxValue(a) // 77
const minResult=minValue(a) //10

console.log(result); // 77







// 40<20 ??  false
// 40>20 ?? true
// 50 > 200 ?? false
// 50 is greater than 200 // this statement false 
// Humans can fly with wings  ?? false


// 70 < 10

// 70  less than 10 ?? false
//small <  large true
//large > small  true 


// 10 < 20 ?? true

// small < large 
// large < small false
// 200 < 50
 
// 400 < 5000 ?? true
// 233>579 ??false
// 2350<1000 ?? false
// 200>100 ?? true



// let a =[1,2,3,4,5]
// it should print 5 4 3 2 1  max to min 
// let a2=[35, 6 ,8,1,3,3]
// print 35,8,6,3,3,1 