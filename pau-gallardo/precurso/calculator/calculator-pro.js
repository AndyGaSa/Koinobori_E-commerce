// This function checks if the value is valid
function notValidValue(val){                                           
    if (isNaN(val)){
        alert('Valor introducido incorrecto, introduzca un número')          // Pops alert
        val = prompt('Introduzca número')                                    // Ask for number
        return val;
    }else{
        return val
    }
}

// This function sets the number of decimals to 3
function decimals(num){
    if (Number.isInteger(num)){
        return num
    }else{
        return parseFloat(num).toFixed(3);
    }
}

// These functions make algorithmic operations and push them into an array
function sumTwoValues(num1, num2){
    let suma;
    suma = num1 + num2;
    suma = decimals(suma);
    return suma;
}                                                        //Sums a

function substractTwoValues(num1, num2){                               //Substract 
    let resta = num1 - num2;
    resta = decimals(resta);
    return resta;
}

function multiTwoValues(num1, num2){                                   //Multiply
    let multi = num1 * num2;
    multi = decimals(multi);
    return multi;
}

function divTwoValues(num1, num2){                                     //Divide 
    let divi = num1 / num2;
    divi = decimals(divi);
    return divi;
}

//Main function of the exercice

function calculatorPro() {
    debugger;
    let newNumber;                                                                  //Inicializing newNumber variable
    let numberList = [];                                                            //Inicializing numberList 
    let resultList = [];                                                            //Inicializing list to save results
  
    do {                                                                            //While the user keeps indroducing values this section keeps runing
      newNumber = prompt('Enter a number or press cancel to stop');
      while (isNaN(newNumber)){                                                     //Runs until the newNumber is a valid value
          newNumber = notValidValue(newNumber);                                     //Checks if newNumber is a valid value
      }

      if (!isNaN(newNumber) && newNumber !== null && newNumber !== ''){             //If It's a number
        numberList.push(parseFloat(newNumber));                                     //Pust the value into the numberList array in a Float format
      }
      
    } while (newNumber !== null)

    if (numberList.length === 1){                                                            //If only one number has been introduced
            console.log(
                'Results:\n' +
                'The result of the square root is '+decimals(Math.sqrt(numberList[0])));     //Prints square root of the single number
    }else{                                                                                   //There is more than one number
        for (let i = 0; i < numberList.length; i++){                                         //Operations left to right in the array

            if (i === 0){
                resultList[0] = numberList[i];
                resultList[1] = numberList[i];
                resultList[2] = numberList[i];
                resultList[3] = numberList[i];
            }else{
                resultList[0] = sumTwoValues(resultList[0], numberList[i]);
                resultList[1] = substractTwoValues(resultList[1], numberList[i]);
                resultList[2] =  multiTwoValues(resultList[2], numberList[i]);
                resultList[3] = divTwoValues(resultList[3], numberList[i]);
            }        
        }
    
        console.log (                                                               //Prints the results in the console
            'Results:\n' +
            'The result of the sum is: ' + resultList[0] +
            '\nThe result of the rest is: ' + resultList[1] +
            '\nThe result of the multiplication is: ' + resultList[2] +
            '\nThe result of the division is: ' + resultList[3] 
            );
    }    
}

var repetir = true;                                                                 //Var for repeating or not
while(repetir){                                                                     //Ask fro more numbers or shut it down
    calculatorPro();
    repetir = confirm('¿Desea realizar otra operación?');
}