/*Declaration of let variables of global scope*/
let screen = document.getElementById(`principalScreen`);
let firstNumber = null;
let secondNumber;
let resetNumber = false;
let maximumNumberOfDigits = 9;
let maxCountOfDecimals = 2;
let lastOperation = null;
/*A function is declared whit one number as parameter to "print" the numbers in the screen of the calculator.*/
function buttonNumberPressed(num) {
    if (resetNumber) {
        screen.innerHTML = num;
        resetNumber = false;
    } else if (screen.innerHTML.length < maximumNumberOfDigits) {
        screen.innerHTML += num;
        if (/[\.]/.test(screen.innerHTML) === false) { //With the test method and regExp, only allow a dot to exist in the number.
            screen.innerHTML = Number(screen.innerHTML);
        }
    };
};
/*A function is declared to check if there is a first number, and invoque the function madeTheOperatios if first number is not null.*/
function checkFirstNumber() {
    if (firstNumber !== null) {
        secondNumber = screen.innerHTML;
        screen.innerHTML = madeTheOperations(firstNumber, lastOperation, secondNumber);
        firstNumber = screen.innerHTML;
    } else {
        firstNumber = screen.innerHTML;
    }
    resetNumber = true;
};
/*A function is declared to chack the length of the result, so if the number its bigger than the maximun number of digits allow, return error, 
else, return the result.*/
function checkTheLength(calculationResult) {
    if (Number(calculationResult).toString().length > maximumNumberOfDigits) {
        firstNumber = null;
        return "ERROR";
    } else {
        return calculationResult;
    }
};
/*A function is declared with the test method and regExp, and only allow a dot to exist in the number.*/
function dotPressed() {
    if (/[\.]/.test(screen.innerHTML) === false) {
        screen.innerHTML += ".";
    };
};
/*A function is declared to clear the screen.*/
function allClear() {
    screen.innerHTML = "0";
    firstNumber = null;
};
/*A function is declared to allow change the sign and use positive or negative numbers in the operation.*/
function changeTheSign() {
    if (/[\-]/.test(screen.innerHTML) === false) {
        screen.innerHTML = "-" + screen.innerHTML;
    } else {
        screen.innerHTML = screen.innerHTML.slice(1);
    }
};
/*A function is declared to allow to remove the last digit of the number on the screen and return the screen to "0" when
user wants to erase all digits.*/
function deleteLastDigit() {
    if (screen.innerHTML.length === 1) {
        screen.innerHTML = '0';
    } else {
        screen.innerHTML = screen.innerHTML.slice(0, -1);
    }
};
/*A function is declares with one parameter and invoque the funcion checkFirstNumber, and return the name of the operation to do. */
function runOperation(thisOperation){
    checkFirstNumber();
    lastOperation = thisOperation;
};
/*A function is declared with three paramaters: first and second number, and the last operation selected by the user. 
with the switch, the last operation, invoque the function of the operation to do. And it returns the result of the operation in number format.*/
function madeTheOperations(firstNumber, lastOperation, secondNumber) {
    let operationResult;
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    switch (lastOperation) {
        case "divide":
            operationResult = calculateDivide(firstNumber, secondNumber);
            break;
        case "multiply":
            operationResult = calculateMultiply(firstNumber, secondNumber);
            break;
        case "rest":
            operationResult = calculateRest(firstNumber, secondNumber);
            break;
        case "sum":
            operationResult = calculateSum(firstNumber, secondNumber);
            break;
    }
    if (operationResult !== 'ERROR') {
        operationResult = Number(operationResult);
    }
    return operationResult;
};
/*A function is declared to execute madeTheOperations when the sign equal is pressed, only if firstNumber is not null.*/
function runEqualSign() {
    if (firstNumber !== null) {
        secondNumber = screen.innerHTML;
        screen.innerHTML = madeTheOperations(firstNumber, lastOperation, secondNumber);
        resetNumber = true;
        firstNumber = null;
    }
};
/*Four functions are declared to execute the selected operation and return the result after checking the length of the number.*/
function calculateDivide(firstNumber, secondNumber) {
    let calculationResult = (firstNumber / secondNumber).toFixed(maxCountOfDecimals);
    return checkTheLength(calculationResult);
};
function calculateMultiply(firstNumber, secondNumber) {
    let calculationResult = (firstNumber * secondNumber).toFixed(maxCountOfDecimals);
    return checkTheLength(calculationResult);
};
function calculateRest(firstNumber, secondNumber) {
    let calculationResult = (firstNumber - secondNumber).toFixed(maxCountOfDecimals);
    return checkTheLength(calculationResult);
};
function calculateSum(firstNumber, secondNumber) {
    let calculationResult = (firstNumber + secondNumber).toFixed(maxCountOfDecimals);
    return checkTheLength(calculationResult);
};