// This function checks if the value is valid
function notValidValue(val){                                           
    if (isNaN(val)){
        alert('Valor introducido incorrecto, introduzca un número')    // Pops alert
        val = prompt('Introduzca número')                              // Ask for number
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
function sumTwoValues(arr, num1, num2){
    let suma;
    suma = num1 + num2;
    suma = decimals(suma);
    arr.push(suma);                                                    //Sums and pushes the value into the array
}

function substractTwoValues(arr, num1, num2){                          //Substract and push into array
    let resta = num1 - num2;
    resta = decimals(resta);
    arr.push(resta);
}

function multiTwoValues(arr, num1, num2){                              //Multiply and push
    let multi = num1 * num2;
    multi = decimals(multi);
    arr.push(multi);
}

function divTwoValues(arr, num1, num2){                                //Divide and push
    let divi = num1 / num2;
    divi = decimals(divi);
    arr.push(divi);
}

// Main function of the exercise
function calculator(){
    debugger;
    var num1 = prompt('Introduzca un número o déjelo en blanco');      // Ask for first num
    while (isNaN(num1)){                                //Runs till the values are correct
        num1 = notValidValue(num1);
    }
    var num2 = prompt('Introduzca otro número o déjelo en blanco');    // Ask for second num
    arr = [];
    
    while (isNaN(num2)){                                //Runs till the values are correct
        num2 = notValidValue(num2);
    }
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (num1 !== '' && num2 !== ''){                                   //We have both numbers
        sumTwoValues(arr, num1, num2);                                 //Operate and push
        substractTwoValues(arr, num1, num2);
        multiTwoValues(arr, num1, num2);
        divTwoValues(arr, num1, num2);

        console.log ( 
            'Results:\n' +
            'The result of the sum is: ' + arr[0] +
            '\nThe result of the rest is: ' + arr[1] +
            '\nThe result of the multiplication is: ' + arr[2] +
            '\nThe result of the division is: ' + arr[3] 
            );
    }else{                                                             //We have one number
        if (num1 ==='' && num2 !==''){
            arr.push(decimals(Math.sqrt(num2)));
            console.log(
                'Results:\n' +
                'The result of the square root is '+arr[0]
            );
        }else{
            arr.push(decimals(Math.sqrt(num1)));
            console.log(
                'Results:\n' +
                'The result of the square root is '+arr[0]
            )
        }      
    }
}
var repetir = true;                                                    //Var for repeating or not

while(repetir){
    calculator();
    repetir = confirm('¿Desea realizar otra operación?');
}


