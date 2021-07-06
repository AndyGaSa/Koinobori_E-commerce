function calculatorPro() {
  let newNumber;
  let numberList = [];
  let results = [];
  let resultsFinal = [];

  do {
    newNumber = prompt(`Enter a number or press cancel to stop`);
    numeroValido = parseFloat(newNumber); //pasamos valor a numero flotante
    if (newNumber !== null && isNaN(numeroValido)) {
      alert(`introduzca un valor permitido`);
    }
    if (!isNaN(numeroValido)) {
      numberList.push(numeroValido); //nos aseguramos que los valores que entran ya estan verificados
    }
  } while (newNumber !== null); // si el usuario solo da un valor le damos la raiz cuadrada
  if (numberList.length === 1) {
    console.log(
      `La raíz cuadrada de ${numberList[0]} es: ${Math.sqrt(
        numberList[0]
      ).toFixed(3)}`
    );
  } else  // si da mas de un valor hacemos las operaciones correspondientes
  {
    for (let i = 0; i < numberList.length; i++) {
      if (i == isNaN) {
        for (let j = 0; j < 4; j++) {
          results[j] = numberList[i];
        }
      } else if (i === 0) {
        results[0] = numberList[i];
        results[1] = numberList[i];
        results[2] = numberList[i];
        results[3] = numberList[i];
      } else {
        results[0] = (Math.round(results[0] + numberList[i]) * 1000) / 1000; //redondeamos a 3 decimales como maximo
        results[1] = (Math.round(results[1] - numberList[i]) * 1000) / 1000;
        results[2] = (Math.round(results[2] * numberList[i]) * 1000) / 1000;
        results[3] = (Math.round(results[3] / numberList[i]) * 1000) / 1000;
      }
      resultsFinal[0] = `el resultado de la suma de todos valores es: ${results[0]}`;
      resultsFinal[1] = `el resultado de la resta de todos valores es: ${results[1]}`;
      resultsFinal[2] = `el resultado de la multiplicacion de todos valores es: ${results[2]}`;
      resultsFinal[3] = `el resultado de la division de todos valores es: ${results[3]}`;
    }

    switch (
      prompt(`quiere introducir mas valores?? y/n`) //preguntamos de nuevo al usuario si quiere realizar alguna operacion mas
    ) {
      case `y`:
        for (let j = 0; j <= resultsFinal.length; j++) {
          console.log(resultsFinal[j]);
        }
        calculatorPro();

      case `n`:
        for (let j = 0; j <= resultsFinal.length; j++) {
          console.log(resultsFinal[j]);
        }
      default:
        console.log(`adios muchas gracias`);
        break;
    }
  }
}

calculatorPro();
