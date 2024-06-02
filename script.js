function fizzBuzz(params) {
    let num
   
        for (let num = 0; num <= 100; num++) {
            if(num % 3 === 0){
                console.log("Fizz")
            }
            else if (num % 5 === 0) {
                console.log("Buzz");
            }
            else if (num % 3 === 0 && num % 5 === 0){
                console.log("FizzBuzz");
            }
            else {
                console.log(num);
            }
         
    }
    
    
    
   
    
}
fizzBuzz()