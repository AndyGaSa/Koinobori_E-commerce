// Declaración de variables para el funcionamiento de la calculadora
const pantalla = document.querySelector('.screen');
let digits = "";
let currentNumber;
let result = 0;
let operator = 0;

//Las siguientes funciones marcan el comportamiento al hacer click en los botones

//Los botones de los números y el punto sirven para almacenar y mostrar los números con los que se va a operar
function addDigits(i) {
    if (digits.length < 24) {
        digits += i;
        toNumber();
        showNumber();
    }
}

function addPoint() {
    if (digits.length < 24 && !digits.includes('.')) {
        digits += '.';
        toNumber();
        showNumber();
    }
}

function borrar() { //El botón de borrar elimina el último dígito y luego guarda el número
    digits = digits.slice(0, digits.length - 1);
    toNumber();
    showNumber();
}

function igual() { //El botón = muestra el resultado tras realizar la última operación
    if (operator !== 0) { //Se realiza la última operación, se guarda el resultado en currentNumber para poder seguir operando con ese número, se muestra el resultado y se restablece el valor del operador en 0
        operar();
        currentNumber = result;
        showResult();
        operator = 0;

    } else { //Si no se ha realizado ninguna operación simplemente se muestra el número introducido
        result = currentNumber;
        showResult();
    }
    digits = ""; //Finalmente se restablece el valor de digits para poder escribir un número nuevo

}

function AC() { //El botón AC restablece todos los parámetros de la calculadora a su valor predeterminado
    digits = "";
    showNumber();
    operator = 0;
    result = 0;
    currentNumber = 0;
}

function toNumber() { //Esta función pasa a número el string de dígitos y lo almacena en la variable currentNumber
    if (digits !== "") {
        currentNumber = parseFloat(digits)
    } else {
        currentNumber = 0;
    }
}

function showNumber() { //Esta función muestra los números en la pantalla
    pantalla.textContent = digits;
}

function showResult() { //Esta función muestra en pantalla el resultado
    pantalla.textContent = result;
}

/*Las siguientes funciones son las que permiten realizar las operaciones. 
A modo de resumen general, el funcionamiento de la calculadora es el siguiente:
Al apretar un botón de operar (+, -, * o /) no se realiza esa operación, sino que se realiza la operación previa y se cambia el valor de 
la variable de apoyo 'operator' para que al volver a apretar un operador se realice la operación correcta. Al apretar el botón = se realiza
la última operación. */

function sumar() { //Función para sumar
    if (operator === 0) { // Si el operador vale 0 se guardará el número anterior como resultado y se cambiará el valor de operador a 1
        operator = 1;
        result = currentNumber;
    } else { //Si la operación anterior era distinta se realizará mediante la función operar y se cambiará el operador a 1
        operar();
        operator = 1;
    }
    digits = "";
    currentNumber = 0; //El número actual pasa a ser 0, de este modo si se aprieta repetidamente el botón + no seguirá realizando sumas
}

function restar() { //Función para restar
    if (operator === 0) { // Si el operador vale 0 se guardará el número anterior como resultado y se cambiará el valor de operador a 2
        operator = 2;
        result = currentNumber;
    } else { //Si Si la operación anterior era distinta se realizará mediante la función operar y se cambiará el operador a 2
        operar();
        operator = 2;
    }
    digits = "";
    currentNumber = 0; //Nuevamente, se cambia el número actual a 0 para que no se hagan restas continuas apretando el botón -
}

function multiplicar() { //Función para multiplicar
    if (operator === 0) { //Si no se ha realizado ninguna operación anterior se guarda el número como resultado y operator cambia a 3
        operator = 3;
        result = currentNumber;
    } else { // Si la operación anterior era diferente se realiza y se cambia operator a 3
        operar();
        operator = 3;
    }
    digits = "";
    currentNumber = 1; //Se cambia el número actual a 1 para que no se realicen multiplicaciones al apretar solo el botón *
}

function dividir() { //Función para dividir 
    if (operator === 0) { //Si no se ha realizado ninguna operación previa se guarda el número como resultado y operator cambia a 4
        operator = 4;
        result = currentNumber;
    } else { //Si la operación anterior no era una división, se realiza y se cambia opertor a 4
        operar();
        operator = 4;
    }
    digits = "";
    currentNumber = 1; //Se evita que se realicen divisiones continnuamente al apretar repetidamente /
}

function operar() { //Función de apoyo para mezclar operaciones
    switch (operator) { //Si la operación anterior era una suma
        case 1:
            result += currentNumber;
            break;

        case 2: //Si la operación anterior era una resta
            result -= currentNumber;
            break;

        case 3: //Si la función anterior era una multiplicación
            result *= currentNumber;
            break;

        case 4: //Si la función anterior era una división
            result /= currentNumber;
            break;

        default:

            break;
    }
    showResult();
}