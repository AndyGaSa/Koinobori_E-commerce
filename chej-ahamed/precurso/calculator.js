number1 =  parseFloat(prompt("Please type the first number","Please a valid input or cancel!"));// parseInt() metod to insure that input is numbers
number2 = parseFloat(prompt("Please type the second number","Please a valid input or cancel!"));
const results = [];

    function calculator (number1, number2)
    {
         
        
    
            

        
        }if (number1 >=0 && number2 >=0 ){
            let resultSum=(number1,number2)=>{
                resultSum= number1+number2;
                results.push(`The sum of both numbers is : ${resultSum}`);
            }
                
            
            let resultDivide=(number1,number2)=>{
                resultDivide = number1/number2;

                results.push(`The division of both numbers is : ${resultDivide}`);
            }

            let resultMultiple=(number1,number2)=>{
                resultMultiple = number1*number2;
                results.push(`The multiplication of both numbers is : ${resultMultiple}`);
            }

            let resultSubstract=(number1,number2)=>{
                resultSubstract = number1-number2;
                results.push(`The sumbstraction of both numbers is : ${resultSubstract}`);
            }
            resultSum();
            resultDivide();
            resultMultiple();
            resultSubstract();
            console.log( results);
        
        }else if(number1>=0 || isNaN(number2))
        {
            
            let resultSqr=(number1)=>{
                resultSqr = Math.sqrt(number1);
                results.push(`The square of the number : ${resultSqr}`);
            }
            resultSqr();
            console.log( results.push(resultSqr().toFixed(3)));

        }else if( isNaN(number2)|| number1>=0)
        {
            
            let resultSqr=(number2)=>{
                resultSqr = Math.sqrt(number2);
                results.push(`The square of the number : ${resultSqr}`);
            }
            resultSqr();
            console.log( results.push(resultSqr().toFixed(3)));
        }else {

             alert ("Please input a number");
        }
    
    calculator();
   
  