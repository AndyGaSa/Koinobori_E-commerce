//
// Lluc Valério
//
do {
    calculatorPro();
} while (confirm("Do you want to do more calculs?"));


function calculatorPro() {
    // Variables
    let patt = /^-?\d*\.?\d*$/;
    let newNumber;
    let numbers = [];
    let results = [];
    let oneNumber;
    let noNumbers;
    // Data Input
    do {
        // Input from user
        newNumber = prompt("Enter a number or press cancel to stop.","0");
        // Check if the input is correct.
        if ((patt.test(newNumber) === false) && (newNumber !== null)) {
            //console.log ('Enter only integers, decimals, positives, and negatives.');
            alert ('Enter only positives / negatives integers & decimals.');
        } else if ((patt.test(newNumber)) && (newNumber !== null)) {
            numbers.push(parseFloat(newNumber));
        }
    } while (newNumber !== null);
    // Calculations
    // No valid numbers
    if (numbers.length<=0) {
        noNumbers = true;
        oneNumber = false;
    } else if (numbers.length>=2) {
        let sumResult = 0;
        let multResult = 1;
        let restResult = 0;
        let divResult = 0;
        for (let i=0; i<numbers.length; i++){
            sumResult = (sumResult) + (numbers[i]);
            multResult = (multResult) * (numbers[i]);
            if (i===0) {
                restResult = numbers[i];
                divResult = numbers[i];
            } else {
                restResult = (restResult) - (numbers[i]);
                if ((numbers[i] === 0) || divResult === 'Undefined'){
                    divResult = 'Undefined';
                } else {
                    divResult = (divResult) / (numbers[i]);
                }
            }
        }
        results.push(setDecimals(sumResult));
        results.push(setDecimals(restResult));
        results.push(setDecimals(multResult));
        if (divResult === 'Undefined'){
            results.push(divResult);
        } else {
            results.push(setDecimals(divResult));
        }        
        noNumbers = false;
        oneNumber = false;
        // Just one valid number
        } else if (numbers.length === 1){
            results.push(doSquare(numbers[0]));
            noNumbers = false;
            oneNumber = true;
        }
    printResults(noNumbers, oneNumber, results, numbers);
    numbers.length = 0;
    results.length = 0;
}
//
function setDecimals(num) {
    if ((num.toString().indexOf(".")) < 0) {
        return num.toFixed(0);
    } else {
        let decimals = ((num.toString().length) - (num.toString().indexOf(".")) - 1);
        if (decimals>3){
            if (num.toString()[(num.toString().indexOf(".")+3)] === '0') {
                if (num.toString()[(num.toString().indexOf(".")+2)] === '0') {
                    if (num.toString()[(num.toString().indexOf(".")+1)] === '0') {
                        num = num.toFixed(0);
                    } else {
                        num = num.toFixed(1);
                    }
                } else {
                    num = num.toFixed(2);
                }
            } else {
                num = num.toFixed(3);
            }
            return num;
        } else {
            return num.toFixed(decimals);
        }
    }
}
function doSquare(num) {
    if (isNegative(num)) {
        return 'The square of a negative number cannot be calculated. No operation is going to be done.';
    } else {
        return setDecimals(Math.sqrt(num));
    }
}
function isNegative(num){
    if (num<0){
        return true;
    } else {
        return false;
    }
}
function printResults(noNumbers, oneNumber, results, numbers) {
    if (noNumbers) {
        console.log('No numbers inserted. No calculation is going to be done.');
    } else {
        console.log('Input numbers:');
        for (let i=0; i<numbers.length; i++) {
            console.log('   · Operator ' + (i+1) + ': ' + numbers[i]);
        }
        console.log('Results:');
        if (oneNumber) {
            console.log('The result of the square is ' + results[0]);
        } else {
            console.log('The result of the sum is ' + results[0]);
            console.log('The result of the rest is ' + results[1]);
            console.log('The result of the multiplication is ' + results[2]);
            console.log('The result of the division is ' + results[3]);
        }
    }
    console.log('End of process.')
}