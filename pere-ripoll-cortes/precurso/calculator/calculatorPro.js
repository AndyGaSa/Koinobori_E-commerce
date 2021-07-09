start();

function start(){
  let operation;
  let values = [];

  //Ask operation type to the user.
  operation = getOperationType();

  //Ask values for operation
  if(operation ==='sq'){
    values = getvalues(1);
  }else{
    values = getvalues(2);
  }

  //Do operation
  doOperation(operation, values);
  console.log("--------------------------");
  let newop = false;
  do {
    let a = prompt("Do you want to do another operation? y/n");
    if (a === 'y') {
      newop = true;
      start();
    }else if (a === 'n') {
      newop = true;
    } else{
      console.log("Wrong value \n select: 'y' or 'n' ");
    }
  } while (!newop);

}

function getOperationType(){
  const text = "What operation type do you want to do? \n"
+ "Choose an option: \n"
+ "Suma: + \n"
+ "Resta: - \n"
+ "Multiplicación: *  \n"
+ "Division: / \n"
+ "Square: sq ";
  let check = false;
  let operation = prompt(text);
  do {
    switch (operation) {
      case 'sq':
      case '+':
      case '-':
      case '*':
      case '/':
        check = true;
        break;
      default:
        alert("Wrong value, try again please")
        operation = prompt(text);
    }
  } while (!check);
  return operation;
}

function getvalues(num){
  let newNumber;
  let numberList = [];
    do {
      newNumber = parseFloat(prompt('Enter a number: '));
      if(isNaN(newNumber)){
        alert("Wrong value, try again");
        console.log("Wrong value, try again");
      }else{
        numberList.push(newNumber);
      }
    } while (numberList.length < num);
    return numberList;
}

function doOperation(operation, values){
  switch (operation) {
    case 'sq':
      console.log("The result of the square: " + Math.sqrt(values[0]).toFixed(3));
      break;
    case '+':
      console.log("The result of the sum: " + (values[1] + values[0]).toFixed(3));
      break;
    case '-':
      console.log("The result of subtraction: " + (values[0] - values[1]).toFixed(3));
      break;
    case '*':
      console.log("The result of multiplication: " + (values[0] * values[1]).toFixed(3));
      break;
    case '/':
      console.log("The result of division: " + (values[0] / values[1]).toFixed(3));
      break;
  }
}