let initialInput = prompt('Please input your numbers');

let sumOutput;
let subOutput;
let multOutput;
let divOutput;

function sum(a, b) {
  sumOutput = parseFloat(a) + parseFloat(b);
  sumOutput = sumOutput.toFixed(3);
    return sumOutput;
}

function sub(a, b) {
  subOutput = parseFloat(a) - parseFloat(b);
  subOutput = subOutput.toFixed(3);
    return subOutput;
}

function mult(a, b) {
  multOutput = parseFloat(a) * parseFloat(b);
  multOutput = multOutput.toFixed(3);
    return multOutput;
}

function div(a, b) {
    if (parseFloat(b) === 0) {
    divOutput = "impossible to calculate, because you can't divide by zero";
  } else {
      divOutput = parseFloat(a) / parseFloat(b);
      divOutput = divOutput.toFixed(3);
  }
    return divOutput;
}

let operOutput = [];
let parameters = initialInput.match(/\d+/g);
    if (parameters === null) {
        alert('Nice try😏 Please insert a number');
    } else {
        if (parameters[1] === undefined) {
            let squareroot = Math.sqrt(parameters[0]);
            console.log(`Square root of ${parameters[0]} is ${squareroot}`);
        } else {        
            sum(parameters[0], parameters[1]);
            operOutput.push(`The sum of the input numbers is ${sumOutput}`);

            sub(parameters[0], parameters[1]);
            operOutput.push(`The result of subtraction of the input numbers is ${subOutput}`);

            mult(parameters[0], parameters[1]);
            operOutput.push(`The result of multiplication of the input numbers is ${multOutput}`);

            div(parameters[0], parameters[1]);
            operOutput.push(`The result of division of the input numbers is ${divOutput}`);

            console.log(operOutput);
        }
     }