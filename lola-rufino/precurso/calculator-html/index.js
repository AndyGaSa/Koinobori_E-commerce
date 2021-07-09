// Variables
let newNumber;
let currentResult;
let numberList = [];
let displayScreen = document.getElementById('display');

/*Variable of currentOperation goes from 0 to 5
0: not operation waiting
1: sum operation waiting
2: rest operation waiting
3: multiplication operation waiting
4: divition operation waiting
5: user click on equal to see the final result*/
let currentOperation = 0;

// Input number or decimal
function input(num) {

/*If the number is decimal, we accept JUST one comma. If the display is already showing 9 numbers,
our calculator doesn't accept more*/
    if (num === ',' || document.getElementById('display').textContent.length > 9) {
        if (numberList.includes(',') || document.getElementById('display').textContent.length > 9) {
            numberList.push(num);
            numberList.pop(num);
        } else {
            numberList.push(num);
            displayScreen.innerHTML = numberList.join('');
            newNumber = numberList.join('');
        }
    }else {
        num = parseFloat(num);
        numberList.push(num);
        displayScreen.innerHTML = numberList.join('');
        newNumber = numberList.join('');
        newNumber = parseFloat(newNumber.replace(/,/, '.'));
    }
}

//AC button. Delete everything in display screen
function saveAndShow() {
    numberList = [];
    currentResult = 0;
    newNumber = 0;
    currentOperation = 0;
    displayScreen = document.getElementById('display');
    displayScreen.innerHTML = '0';
}

document.getElementById('ac').onclick = saveAndShow;

//Delete button. Delete last input
function deleteFunc() {
    numberList.pop();
    displayScreen = document.getElementById('display');
    displayScreen.innerHTML = numberList.join('');
    newNumber = numberList.join('');
    newNumber = parseFloat(newNumber.replace(/,/, '.'));
}

document.getElementById('delete').onclick = deleteFunc;

/* Operation selector. 
User start at currentOperation 0, and depending on the operation waiting, the calculator resolve that
operation when the user inputs a new operation (or click result to finnish), and change the currentOperation variable to the new one.*/
function operation(operator) {

    //With this conditional we can introduce negative numbers. Thanks to my classmate Xavi because I was stuck to solve this.
    if(numberList.length === 0 && operator === '-'){
        numberList.push('-');
            displayScreen.innerHTML = numberList.join('');
            newNumber = numberList.join('');
            newNumber = parseFloat(newNumber.replace(/,/, '.'));
        return;
    }

    switch (operator) {
        
        case '+':
            numberList = [];
            operationInProcess();
            currentOperation = 1;
            displayScreen = document.getElementById('display');
            displayScreen.innerHTML = '+';
            break;
        case '-':
            numberList = [];
            operationInProcess();
            currentOperation = 2;
            displayScreen = document.getElementById('display');
            displayScreen.innerHTML = '-';
            break;
        case 'x':
            numberList = [];
            operationInProcess();
            currentOperation = 3;
            displayScreen = document.getElementById('display');
            displayScreen.innerHTML = 'x';
            break;
        case '/':
            numberList = [];
            operationInProcess();
            currentOperation = 4;
            displayScreen = document.getElementById('display');
            displayScreen.innerHTML = '/';
            break;
        case '=':
            numberList = [];
            operationInProcess();
            currentOperation = 5;
            currentResult = currentResult.toString().replace(/\./g, ',');
            displayScreen = document.getElementById('display');
            displayScreen.innerHTML = currentResult;
            currentResult = parseFloat(currentResult);
            break;
        default:
            console.log('Error');
            break;
    }

}

// Operations
function sum(resultCurrent, numberNew) {
    return resultCurrent +numberNew;
}

function rest(resultCurrent, numberNew) {
    return resultCurrent - numberNew;
}

function multi(resultCurrent, numberNew) {
    return resultCurrent * numberNew;
}

function divi(resultCurrent, numberNew) {
    return resultCurrent / numberNew;
}

// Operations in process
function operationInProcess() {
    switch (currentOperation) {
        case 0:
            currentResult = newNumber;
            break;
        case 1:
            currentResult = sum(currentResult, newNumber);
            break;
        case 2:
            currentResult = rest(currentResult, newNumber);
            break;
        case 3:
            currentResult = multi(currentResult, newNumber);
            break;
        case 4:
            currentResult = divi(currentResult, newNumber);
            break;
        case 5:
            this.currentResult = currentResult;
            break;
        default:
            console.log('Error');
            break;
    }
}