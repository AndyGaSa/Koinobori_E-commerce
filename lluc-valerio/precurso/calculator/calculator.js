//
// Lluc Valério
//
let numOne = parseFloat(prompt("Insert the first number.","0"));
let numTwo = parseFloat(prompt("Insert the second number.","0"));
let results = [];
let twoNumbers;
let noNumbers;

calculator();

function calculator() {
    // No valid numbers
    if ((isNaN(numOne)) && (isNaN(numTwo))) {
        noNumbers = true;
        twoNumbers =false;
    } else if (!(isNaN(numOne)) && !(isNaN(numTwo))) {
        // SUMA
        results.push(setDecimals(numOne+numTwo));
        // RESTA
        results.push(setDecimals(numOne-numTwo));
        // MULTIPLICACIO
        results.push(setDecimals(numOne*numTwo));
        // DIVISIO
        results.push(doDivision(numOne,numTwo));
        twoNumbers = true;
        noNumbers = false;
        // Just one valid number
        } else if (!(isNaN(numOne)) || !(isNaN(numTwo))){
            // numOne is the valid one
            if (!(isNaN(numOne))) {            
                results.push(doSquare(numOne));
                // numTwo is the valid one  
            } else {
                results.push(doSquare(numTwo));
            }
            twoNumbers = false;
            noNumbers = false;
        }
    printResults();
}
//
function isNegative(num){
    if (num<0){
        return true;
    } else {
        return false;
    }
}
function setDecimals(num) {
    if ((num.toString().indexOf(".")) < 0) {
        return num.toFixed(0);
    } else {
        let decimals = ((num.toString().length) - (num.toString().indexOf(".")) - 1);
        if (decimals>3){
            return num.toFixed(3);
        } else {
            return num.toFixed(decimals);
        }
    }
}
function doDivision(numOne,numTwo) {
    if (numTwo === 0) {
        return 'Undefined';
    } else {
        return setDecimals(numOne/numTwo)
    }
}
function doSquare(num) {
    if (isNegative(num)) {
        return 'The square of a negative number cannot be calculated. No operation is going to be done.';
    } else {
        return setDecimals(Math.sqrt(num));
    }
}
function printResults() {
    if (noNumbers) {
        console.log('No numbers inserted. No calculation is going to be done.');
    } else {
        console.log('Input numbers:');
        console.log('   · First Operator: ' + numOne);
        console.log('   · Second Operator: ' + numTwo);
        console.log('Results:');
        if (twoNumbers) {
            console.log('The result of the sum is ' + results[0]);
            console.log('The result of the rest is ' + results[1]);
            console.log('The result of the multiplication is ' + results[2]);
            console.log('The result of the division is ' + results[3]);
        } else {
            console.log('The result of the square is ' + results[0]);
        }
    }
    console.log('End of process.')
}