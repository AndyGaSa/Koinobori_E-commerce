// Defino una función de dos parámetros para las operaciones 
function operaciones(param1, param2) {
  let resultSum = param1 + param2;
  let resultRest = param1 - param2;
  let resultMulti = param1 * param2;
  let resultDiv = param1 / param2;

// Propongo condiciones para el redondeo de hasta 3 decimales si fuera necesario
  if (Number.isInteger(resultSum) === true) {
      console.log(`The result of the sum is ${resultSum}.`);
  } else {
      console.log(`The result of the sum is ${resultSum.toFixed(3)}.`);
  }

  if (Number.isInteger(resultRest) === true) {
      console.log(`The result of the rest is ${resultRest}.`);
  } else {
      console.log(`The result of the rest is ${resultRest.toFixed(3)}.`);
  }

  if (Number.isInteger(resultMulti) === true) {
      console.log(`The result of the multiplication is ${resultMulti}.`);
  } else {
      console.log(`The result of the multiplication is ${resultRest.toFixed(3)}.`);
  }

  if (Number.isInteger(resultDiv) === true) {
      console.log(`The result of the divition is ${resultDiv}.`);
  } else {
      console.log(`The result of the divition is ${resultDiv.toFixed(3)}.`);
  }

}

// Defino una función de dos parámetros que comprobará las condiciones indicadas en el ejercicio
function calculadora(num1, num2) {

  // Defino un primer if para que si el usuario no ha puesto un segundo número, y el número que ha puesto es de verdad un número, muestre su raíz cuadrada
  if (num2 === undefined && Number.isFinite(num1) === true) {
      return 'The result of the square root is ' + Math.sqrt(num1).toFixed(3);
  // Defino la condición de que si alguno de los dos parámetros no es un número, que le diga al usuario que solo introduzca números 
  } else if (Number.isFinite(num1) === false || Number.isFinite(num2) === false) {
      return 'Por favor, utiliza sólo números. Gracias.';
  
  // Si el flujo va bien y el usuario ha introducido dos números, entonces que me haga las operaciones de la función operaciones
  } else {
      return operaciones(num1, num2);
  }
}

// Llamo a la función calculadora a ver si funciona al completo
calculadora(-8, 32.5);

// Por alguna razón, por consola, me sale un "undefined" cuando uso parámetros que son números enteros o números decimales