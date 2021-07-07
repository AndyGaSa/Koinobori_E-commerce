let number1, number2, counter = 0;

function firstNumber() { // En esta función se solicita el 1er número
    do {
        let isNumber1 = parseFloat(prompt('Enter the first number')); //Se solicita el número
        if (isNumber1) { //Si el usuario introduce un número, este se almacena...
            number1 = isNumber1;
        } else { //En caso contrario se le indica que debe introducir un número
            alert('Data introduced must be numbers');
        }
        counter++; // Este contador es solo para poner un número máximo de intentos antes de finalizar la función
    } while (!number1 && counter < 5);

}

function secondNumber() { //Esta función solicita el 2o número
    let isNumber2 = prompt('Enter the second number (optional)'); //Se solicita un número
    if (isNumber2 !== "") { //Como este numero no es obligatorio, el resto de la función solo se ejecuta si se introduce algún dato
        number2 = parseFloat(isNumber2); //Se almacena el número
        if (!number2) {
            alert('Data is not a number'); //Si los datos no son un número se informa y se vuelve a ejecutar la función
            secondNumber();
        }
    }


}

function operator(num1, num2) { //Función para obtener los resultados
    if (!num2) { //Si el usuario solo introduce un número se realizará la raíz cuadrada.
        let squareRoot = Math.sqrt(num1); // Redondeamos la raíz cuadrada de num1 * 1000 para eliminar los decimales y lo dividimos entre 1000 para fijar en 3 el máximo de decimales.
        squareRoot = decimales(squareRoot);
        console.log(`The square root of the number is ${squareRoot}`);
    } else { // Si los argumentos son 2 números, se almacenan los resultados de las cuatro operaciones en un array y se le indican al usuario de forma legible
        const results = [];
        results[0] = Math.round((num1 + num2) * 1000) / 1000; // Aplicamos la misma técnica que con la raíz cuadrada para redondear los decimales.
        results[1] = Math.round((num1 - num2) * 1000) / 1000;
        results[2] = Math.round((num1 * num2) * 1000) / 1000;
        results[3] = Math.round((num1 / num2) * 1000) / 1000;
        console.log(`The result of the sum is ${results[0]}\nThe result of the rest is ${results[1]}\nThe result of the multiplication is ${results[2]}\nThe result of the division is ${results[3]}`);
    }
}

function calculator() { //Función global para ejecutar la calculadora
    firstNumber(); //1er número
    if (number1) { //Si el 1er número se ha introducido se ejecuta el resto de funciones
        secondNumber(); //2o número
        operator(number1, number2) //Resultados
    } else { //En caso contrario se informa al usuario que ha superado el número de intentos permitidos
        alert('Attempt limit exceeded')
    }


}

calculator();


function decimales(num) {
    num = num.toString();
    for (let i = 0; i < num.length; i++) {
        if (num[i] === '.') {
            num = num.slice(0, (i + 4));
        }
    }
    num = parseFloat(num);
    return num;
}