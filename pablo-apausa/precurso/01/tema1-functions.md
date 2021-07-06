# TEMA 1. FUNCTIONS

## Documentación

● [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

● [Arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)

● [Return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)

● [Console.log()](https://developer.mozilla.org/en-US/docs/Web/API/Console/log)

## Ejercicios

● [Functions Exercises](https://www.codecademy.com/courses/introduction-to-javascript/lessons/functions/exercises/intro-to-functions)

● [Write Reusable Javascript with Functions](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/write-reusable-javascript-with-functions)

● [Passing Values to Functions with Arguments](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/passing-values-to-functions-with-arguments)

● [Return a Value from a Function with Return](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/return-a-value-from-a-function-with-return)

 
## PROYECTO TEMA 1 - Calculator! ➗➕

AVISO: Para hacer la calculadora no se puede usar bajo ningún caso, el metodo eval()

● CALCULATOR

Haz una calculadora. Un único programa al que le pasarás dos parámetros y el usuario podrá visualizar por consola la suma, resta, multiplicación y división entre ambos números. El resultado debería ser mostrado con 3 decimales como mucho (En caso de que hubieran). El programa debe contemplar e informar al usuario en el caso de que este introduzca cualquier cosa que no sean números.

● Si el usuario introduce un solo número, deberá mostrar SOLO su raíz cuadrada, si vuelve a introducir los dos, volverá a mostrar las 4 operaciones de siempre.

● Los resultados deberían almacenarse dentro de una array y mostrarlos de una forma amigable al usuario.

// Output><br>
Results:<br>
The result of the sum is resultSum<br>
The result of the rest is resultRest<br>
...

● CALCULATOR PRO

Podrías hacer que la calculadora realizara operaciones preguntándole al usuario, a traves del prompt, los números e imprimiendo los datos en consola? 
Además, se deberá preguntar continuamente hasta que el usuario presione cancelar o introduzca un número no válido, y los cálculos se deben realizar con todos los números introducidos válidos.

```javascript
function calculatorPro() {
  let newNumber;
  let numberList = [];

  do {
    newNumber = prompt('Enter a number or press cancel to stop');
    numberList.push(newNumber)
  } while (newNumber !== null)

  ...
}
```

Manteniendo los enunciados del primer calculator, como tener que filtrar los inputs que no sean números (no contemplado en el ejemplo).

Después de hacer todas las operaciones, el programa deberá preguntar al usuario si desea volver a realizar otra operación, volviendo a pedir más números y realizando el cálculo.

<strong>
calculator(n1,n2); 
</strong>

//Output =><br>
The result of the sum is resultSum<br>
The result of the rest is resultRest<br>
...

```javascript
prompt("New numbers? y/n")

  Case "y" => calculatorPro()

    //Output => 
    The result of the sum is resultSum
    The result of the rest is resultRest
    ...
    
  Case "n" => "Bye!"
```
