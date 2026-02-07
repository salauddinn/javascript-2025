


//
// write function to check the balnace
// write to function with draw balcne 
// write a funtion to add the balance
 
 
var bank=[
    {
        balence:1000,
        name:"Khusboo"
    },
    {
        balence:1001,
        name:"Sujatha"
        
    }
        
]


console.log(knowMyBalance(bank,"Sujatha"));

function knowMyBalance(bank,name){

    for(let i=0;i<bank.length;i++){
      
        if(bank[i].name === name){
            
            return bank[i].balence;
        }
    }
console.log("Acccount not found")
}
// function withdrawBalance(name,wBal){
    
// }


// function addBalance(name,aBal){
    
// }
