//FIZZBUZZ
//FIZZ FOR MULTIPLE OF 3.BUZZ FOR MULTIPLES OF 5,FIZZBUZZ FOR MULTIPLES OF BOTH 3 AND 5.
let i ;
let number = prompt("enter your number :");
for(i=1;i<=number;i++){
     if(i % 3 === 0 && i % 5 === 0){
        console.log("FIZZBUZZ");
    }
   else if(i % 3 === 0){
        console.log("FIZZ");
    }
    else if(i % 5 === 0){
        console.log("BUZZ");
    }
    else{
        console.log(i);
    }
}
