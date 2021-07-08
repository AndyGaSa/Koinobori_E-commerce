
/*Declaro la funcion que permitirá obtener el primer numero. La funcion va a: 
1- Desplegar una ventana emergente que solicita ingresar un número;
2- Mientras que los caracteres ingresados no sean numeros, se despliega una ventana de error que solicita ingresar números.
3- Retornar un numero (al convertir el string que entrega la ventana prompt con el metodo Number)*/
function obtenerPrimerNumero() {
    let stringDelPrimerNumero = window.prompt('Si ingresas dos números realizaremos operaciones matemáticas con ellos. Escribe un número', 'Por ejemplo: 22');
    while (isNaN(stringDelPrimerNumero)) {
        stringDelPrimerNumero = window.prompt('Error: debes escribir un numero', 'Por ejemplo: 13');
    };
    return Number(stringDelPrimerNumero);
}

/*Declaro la funcion que permitirá obtener el primer numero. La funcion va a: 
1- Desplegar una ventana emergente que solicita ingresar un número;
2- Mientras que los caracteres ingresados no sean numeros, se despliega una ventana de error que solicita ingresar números;
3- Si el usuario presiona Cancel, la funcion retornará null;
4- Si se ingresaron numeros, la funcion retornar un numero (al convertir el string que entrega la ventana prompt con el metodo Number).*/
function obtenerSegundoNumero() {
    let stringDelSegundoNumero = window.prompt('Escribe otro número', 'Por ejemplo: 15');
    while (isNaN(stringDelSegundoNumero)) {
        stringDelSegundoNumero = window.prompt('Error: debes escribir un numero', 'Por ejemplo: 45');
    };
    if (stringDelSegundoNumero === null) {
        return null;
    }
    else {
        return Number(stringDelSegundoNumero);
    }
}

/*Declaro las funciones que permitiran realizar las diversas operaciones matemáticas.*/
function raizCuadrada(num1) {
    return Math.sqrt(num1).toFixed(3)
}

function calcularSuma(num1, num2) {  
        return (num1 + num2).toFixed(3);
    }

function calcularResta(num1, num2) {
        return (num1 - num2).toFixed(3);
    }

function calcularMultiplicacion(num1, num2) {
        return (num1 * num2).toFixed(3);
    }

function calcularDivision(num1, num2) {
        return (num1 / num2).toFixed(3);
    }
    
/*Aquí se comienza a ejecutar el código.
Declaro las variables let: */    
let primerNumero = obtenerPrimerNumero(); //Apunta al valor retornado por la función obtenerPrimerNumero.
let segundoNumero = obtenerSegundoNumero();  //Apunta al valor retornado por la función obtenerSegundoNumero.
let arrayConResultadoDeOperaciones = []; //Apunta al valor de un arreglo.

/*Declaro un condicional que evalua que segundoNumero no sea null.
        En ese caso, se ejecuta el metodo push que modificará el arraglo de la variable let arrayConREsultadoDeOperaciones.
        Los elementos añadidos al arreglo son template literals que describen la operación, los numeros ingresados y muestran el resultado de las operaciones
        utilizando las funciones de las operaciones matemáticas.*/
if (segundoNumero !== null) {
    arrayConResultadoDeOperaciones.push(`El resultado de la suma de ${primerNumero} mas ${segundoNumero} es igual a ${calcularSuma(primerNumero, segundoNumero)}.`); 
    arrayConResultadoDeOperaciones.push(`El resultado de la resta de ${primerNumero} menos ${segundoNumero} es igual a ${calcularResta(primerNumero, segundoNumero)}.`);
    arrayConResultadoDeOperaciones.push(`El resultado de la multiplicación de ${primerNumero} por ${segundoNumero} es igual a ${calcularMultiplicacion(primerNumero, segundoNumero)}.`);
    arrayConResultadoDeOperaciones.push(`El resultado de la división de ${primerNumero} por ${segundoNumero} es igual a ${calcularDivision(primerNumero, segundoNumero)}.`);
    }
/*En el caso de que segundoNumero sea null, se ejecuta el metodo push que añadirá al arraglo un template literals que describe la operación realizada, 
        los numeros ingresados y muestra el resultado de la raiz cuadrada del primer número.*/
    else {
        arrayConResultadoDeOperaciones.push(`El resultado de la raiz cuadrada de ${primerNumero} es igual a ${raizCuadrada(primerNumero)}.`);
    }
console.log(arrayConResultadoDeOperaciones);