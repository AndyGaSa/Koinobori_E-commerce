calculatorPro();

function calculatorPro() {
    let newNumber;
    let numberList = [];
    let results = [];
    let square, resultSum, resultRest, resultMult, resultDiv;
  
    do {
      newNumber = prompt('Enter a number or press cancel to stop');
      numberList.push(newNumber)
    } while (numberList.length < 2);

    let valor1 = parseInt(numberList[0]);
    let valor2 = parseInt(numberList[1]);

    if(isNaN(valor1) && !isNaN(valor2)){
      square = Math.sqrt(valor2);
      return console.log(square);

    }else if(!isNaN(valor1) && isNaN(valor2)){
      square = Math.sqrt(valor1);
      return console.log(square);

    }else if(!isNaN(valor1) && !isNaN(valor2)){
      resultSum = valor1 + valor2;
      resultRest = valor1 - valor2;
      resultMult = valor1 * valor2;
      resultDiv = (valor1 / valor2);
      results.push(resultSum.toFixed(3), resultRest.toFixed(3), resultMult.toFixed(3), resultDiv.toFixed(3));
      
      for (let i = 0; i < results.length; i++) {
        switch (i) {
          case 0:
            console.log("la suma de " + valor1 + " y " + valor2 + " es: " + results[i]);
            break;
          case 1:
            console.log("la resta de " + valor1 + " y " + valor2 + " es: " + results[i]);
            break;
          case 2:
            console.log("la multiplicación de " + valor1 + " y " + valor2 + " es: " + results[i]);
            break;
          case 3:
            console.log("la división de " + valor1 + " y " + valor2 + " es: " + results[i]);
            break;
        }
      }

    }else return console.log("Valores incorrectos");
    
}