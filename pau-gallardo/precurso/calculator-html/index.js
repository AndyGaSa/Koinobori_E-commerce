//Variables
let operationArray = [];                            //Array holding numbers and operations
let screenNumberString = '';                        //String that holds numbers and operations
let firstValue = [];                                //Variables used to save number that will be operated
let secondValue = [];
let result;

const screen = document.querySelector('.screen');   


//Suport functions
function ac(){                      //Function that resets the calculator
    screen.innerHTML = 0;           //Sets to 0 the screen
    operationArray = [];            //Sets to 0 the operation array
    screenNumberString = '';        //Sets to blank the variable
}

function input(value){                      //Function that introduces values into calculator
    operationArray.push(value);             //Pushes value into the operation array
    screenNumberString += value;
    screen.innerHTML = screenNumberString;
}

function del(){                                             //Funtion that deletes the last character 
    if(operationArray.length <= 1){                    
        operationArray = [];
        screenNumberString = '';
        screen.innerHTML = 0;
    }else{
        operationArray.pop();
        screenNumberString = screenNumberString.slice(0,-1);
        screen.innerHTML = screenNumberString;
    }
}

    
function calculateResult(){
    firstValue = [];                                        //Saves the first operation numbers
    secondValue = [];                                       //Saves the second operation numbers
    let operador = '';
    result = '';

    if (operationArray[0] ==='-'){                          //If the first number is negative
        firstValue.push(operationArray[0]);
        operationArray.shift();
    }

    for (let i = 0; i < operationArray.length; i){          //Enters the loop while the array is bigger than 0
        if (isNaN(operationArray[0]) || operador !==''){
            if(operador !==''){
                if (operador ==='.'){
                    firstValue.push('.');
                    operationArray.shift();
                    operador = '';
                }else{
                    break
                }
            }else{
                operador = operationArray[0];
                operationArray.shift();
                secondValue.push(operationArray.join(''));
            }    
        }else{
            firstValue.push(operationArray[0]);
            operationArray.shift();
            if(operationArray[0] === '.'){
                operador = '.';
            }
        }
    } 

    firstValue = parseFloat(firstValue.join(''));           //Sets the values to floats
    secondValue = parseFloat(secondValue);

    switch (operador){                                      //Operations
        case '+':
            result = firstValue+secondValue;
            screen.innerHTML = result.toString();
            break
        case '-':
            result = firstValue-secondValue;
            screen.innerHTML = result.toString();
            break
        case 'x':
            result = firstValue*secondValue;
            screen.innerHTML = result.toString();
            break
        case '/':
            result = firstValue/secondValue;
            screen.innerHTML = result.toString();
            break
    }
}
