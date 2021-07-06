// 2021 - LLuc Valério
// ************************
// Global Vars
// ************************
let value1 = null;          // used to calculate the actual user value with the aggregate value
let valueInc = null;        // stores the last value to calculate the increment in an equal without user value
let operatorInc = null;     // stores the last operator to calculate the increment in an equal without user value
let accum = null;           // stores the aggregate value of user's operations
let operand = false;        // used to control the last operand user choosed for the next operation
let enoughNumbers = false;  // checks if operand numbers in the display exceess 16 chars
let fromEqual = false;      // used to control if the next operation is coming from an equal, in order to allow equal increments withou crashing
let fullOperation = [];     // stores the historic of all operations in order to display it for the user
let historic = document.getElementById("historic");         // manages the historic display on HTML
let displayCell = document.getElementById('displayCell');   // manages the display on HTML
// ************************
// Functions
// ************************
// General purpouse function to manage the input from user
function newValue(newValue, action) {
    switch (action) {
        case 'edit':
            if (newValue === 'ac') {
                resetValues(false);
            } else if ('bksp') {
                backSpace();
            }
            break;
        case 'op':
            isOperand(newValue);
            break;
        case 'num':
            if (enoughNumbers === false) {  // If there are 16 numbers or more, no input allowed.
                number(newValue);
            }
            break;
        case 'eq':
            equal();
            break;
        default:
            alert('Something went wrong. Refresh the page and try it again.');
            break;
    }
    checkNumbers();
}
// Reset values 
function resetValues(equal) {
    value1 = null;
    accum = null;
    operand = false;
    enoughNumbers = false;
    fullOperation = [];
    // this conditional checks if the program flow comes from AC (reset all, if included) or from equal (if not included to allow equal increments)
    if (!equal) {
        displayCell.innerHTML = 0;
        valueInc = null;
        operatorInc = null;
        fromEqual = false;
    }
    historic.innerHTML = '';
}
// Delete the last display input, cheking that is there is only one char, set display to 0.
function backSpace() {
    if (operand === false) {
        let disp = displayCell.innerHTML;
        if (disp.length > 1) {
            disp = disp.slice(0, disp.length - 1);
            displayCell.innerHTML = disp;
        } else {
            displayCell.innerHTML = 0;
        }
    }
}
// Manage the user's interaction with any operand, saving the display value if not saved and allowing operand change. 
function isOperand(newValue) {
    if (operand) {  // if we have already operand, delete the last operand.
        fullOperation.pop();
    } else {
        fullOperation.push(displayCell.innerHTML);  //stores display value
        if (value1 !== null) {  // this controls if we are in tht first operation. If not, we calculate the aggregate.
            // calculate(newValue);
            calculate(fullOperation[(fullOperation.length - 2)]);
        }
    }
    fullOperation.push(newValue)    //stores de new operand
    operand = true;                 // boolean to know we have already operand and the display value is saved
    historic.innerHTML = fullOperation.join(' ');   // update historic display
    value1 = parseFloat(displayCell.innerHTML);     // save the user's value to calculate it when necessary
    if (accum !== null) {       // if we have an historic of operations, when selecting the operator calculate the aggregate.
        displayCell.innerHTML = accum;
    }
}
// Check width of display div and number of chars in it, adjusting dinamically the font size 
function checkSize() {
    let displayWidth = displayCell.clientWidth;
    let displayChars = displayCell.innerHTML.length;
    let sizeFontProp = displayWidth / displayChars;
    let newFontSize = Math.round((sizeFontProp * 600) / 62.5);

    if (newFontSize > 600) {      // maximum font size if calculated is bigger than this
        newFontSize = 600;
    }
    displayCell.style.fontSize = `${newFontSize}%`;
}
// Check number of chars for the operation, allowing max number of 16 chars.
function checkNumbers() {
    if (displayCell.innerHTML.length >= 16 && operand === false) {
        enoughNumbers = true;
    } else {
        enoughNumbers = false;
    }
    checkSize();
}
// Manage the user's interaction with a number (including dot), displayiong and append or and indiviudatl number
function number(newValue) {
    if (!(displayCell.innerHTML.includes('.') === true && newValue === '.' && operand === false)) { // Controls the second input of a dot in a same value.
        if (operand) {
            initDot(0);
            fromEqual = false;
        }
        operand = false;
        if (displayCell.innerHTML === '0') {
            initDot(newValue);
        } else {
            if (fromEqual === true) {
                initDot(newValue);
                fromEqual = false;
            } else {
                displayCell.innerHTML = displayCell.innerHTML + newValue;
            }
        }
    }
}
// Manage the user's interaction with equal. 
// Is no equal asked before, calculate the total amout and reset normal flow variables, saving variables for equal increments.
// If user have already pressed equal before and there is no agregatte operations, calcs equal increments with the last value and last operand used.
function equal() {
    if (!(fullOperation.length === 0 && valueInc === null && operatorInc === null)) {
        fromEqual = true;
        if (fullOperation.length === 0) {
            value1 = valueInc;
            calculate(operatorInc);
            displayCell.innerHTML = accum;
        } else {
            valueInc = parseFloat(displayCell.innerHTML);
            operatorInc = fullOperation[fullOperation.length - 1];
            calculate(operatorInc);
            displayCell.innerHTML = accum;
        }
        resetValues(true);
    }
}
// Check is user's action is a dot. In that case, appends a dot to the display or sets 0. to start a decimal.
function initDot(newValue) {
    if (newValue === '.') {
        displayCell.innerHTML = `0.`;
    } else {
        displayCell.innerHTML = newValue;
    }
}
// Make math operations with user's inputs. Checks:
// · the operator
//  · if the calculation is the first one or we have already done some calcs.
//  · for minus and division, also the order of the parameters in case user is executing equal increments.
function calculate(operator) {
    switch (operator) {
        case '/':
            if (accum === null) {
                if (fullOperation.length === 0) {
                    accum = parseFloat(displayCell.innerHTML) / value1; // equal increments
                } else {
                    accum = value1 / parseFloat(displayCell.innerHTML); // first normal operation
                }
            } else {
                accum = accum / parseFloat(displayCell.innerHTML); // operation with historic
            }
            break;
        case '*':
            if (accum === null) {
                accum = value1 * parseFloat(displayCell.innerHTML);
            } else {
                accum = accum * parseFloat(displayCell.innerHTML);
            } break;
        case '-':
            if (accum === null) {
                if (fullOperation.length === 0) {
                    accum = parseFloat(displayCell.innerHTML) - value1;
                } else {
                    accum = value1 - parseFloat(displayCell.innerHTML);
                }
            } else {
                accum = accum - parseFloat(displayCell.innerHTML);
            } break;
        case '+':
            if (accum === null) {
                accum = value1 + parseFloat(displayCell.innerHTML);
            } else {
                accum = accum + parseFloat(displayCell.innerHTML);
            } break;
        default:
            alert('Something went wrong. Refresh the page and try it again.');
            break;
    }
}
// ************************
// Event Listeners
// ************************
// Divs event listeners for mouse input
document.getElementById("ac").onclick = () => newValue('ac', 'edit');
document.getElementById("bksp").onclick = () => newValue('bksp', 'edit');
document.getElementById("divide").onclick = () => newValue('/', 'op');
document.getElementById("mult").onclick = () => newValue('*', 'op');
document.getElementById("minus").onclick = () => newValue('-', 'op');
document.getElementById("plus").onclick = () => newValue('+', 'op');
document.getElementById("equal").onclick = () => newValue('=', 'eq');
document.getElementById("dot").onclick = () => newValue('.', 'num');
document.getElementById("zero").onclick = () => newValue(0, 'num');
document.getElementById("one").onclick = () => newValue(1, 'num');
document.getElementById("two").onclick = () => newValue(2, 'num');
document.getElementById("three").onclick = () => newValue(3, 'num');
document.getElementById("four").onclick = () => newValue(4, 'num');
document.getElementById("five").onclick = () => newValue(5, 'num');
document.getElementById("six").onclick = () => newValue(6, 'num');
document.getElementById("seven").onclick = () => newValue(7, 'num');
document.getElementById("eight").onclick = () => newValue(8, 'num');
document.getElementById("nine").onclick = () => newValue(9, 'num');
// Kkeys event listener for keyboard input
window.addEventListener("keydown", function (event) {
    switch (event.key) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            newValue(parseInt(event.key), 'num');
            break;
        case '.':
            newValue(event.key, 'num');
            break;
        case '+':
        case '-':
        case '/':
        case '*':
            newValue(event.key, 'op');
            break;
        case 'Backspace':
            newValue('bksp'.key, 'edit');
            break;
        case 'Enter':
            newValue('=', 'eq');
            break;
    }
}, false);
// Window size event listener for display font size.
window.addEventListener("resize", checkSize);