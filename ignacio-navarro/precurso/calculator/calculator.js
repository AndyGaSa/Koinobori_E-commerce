/**
 * no se puede usar bajo ningún caso, el metodo eval()
 * le pasarás uno o dos parámetros mediante "prompt".
 * con 3 decimales como mucho
 * El programa debe contemplar e informar al usuario en el caso de que este introduzca cualquier cosa que no sean números.
 * UN solo número, deberá mostrar SOLO su raíz cuadrada.
 * DOS números se mostrarán los resultados de la suma, resta, multiplicación y división de dichos valores.
 * Los resultados deberían almacenarse dentro de una array y mostrarlos de una forma amigable al usuario.
 * Output>
*/

let numberOne;
let numberTwo;

//Verificacion de datos o loop de formulario en caso incorrecto
do {
    numberOne = parseFloat(window.prompt("Introduce el primer numero"));
    numberTwo = window.prompt("Introduce el segundo numero");
    if (isNaN(numberOne))
        {window.alert("Formato introducido incorrecto")}; 
} while (isNaN(numberOne)||isNaN(numberTwo));

//check del segundo valor y operacion final

if (numberTwo == ""){
    let squareRoot = Math.sqrt(numberOne);
    console.log(`The result of the square root is ${squareRoot}`);
} else {
    numberTwo = parseFloat(numberTwo);

    let operations = [
        numberOne + numberTwo,
        numberOne - numberTwo,
        numberOne * numberTwo,
        numberOne / numberTwo,
    ];
    resultSum = Math.round(operations[0]*1000)/1000;
    resultRest = Math.round(operations[1]*1000)/1000;
    resultMult = Math.round(operations[2]*1000)/1000;
    resultDiv = Math.round(operations[3]*1000)/1000;
    
    console.log(`The result of the sum is ${resultSum} \nThe result of the rest is ${resultRest} \nThe result of the multiplication is ${resultMult} \nThe result of the division is ${resultDiv}`);
}
