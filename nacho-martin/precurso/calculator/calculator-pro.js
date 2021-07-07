function calculatorPro() {
    let newNumber;
    let numberList = [];

    do {
        newNumber = prompt('Enter a number or press cancel to stop');
        let isANumber = parseFloat(newNumber); // Se convierte en integer el string que pasa el usuario.
        if (!isANumber) { // En caso de que los datos introducidos no sean números se informa al usuario.

            console.log('Not a number');
        } else {
            numberList.push(isANumber) // Almacenamos el número (ya como integer) en el array }

        }
    } while (newNumber !== null && isANumber) // Si el usuario presiona cancelar o introduce un dato no númerico se dejan de solicitar datos
    if (numberList[numberList.length - 1] === null || !numberList[numberList.length - 1]) { // Si el usuario presiona cancelar o escribe algo que no sea un número, el ultimo objeto sera nulo o NaN, por lo que lo quitamos del arreglo.
        numberList.pop();
    }

    switch (numberList.length) { //En función de la cantidad de números en el arreglo se realizara una operación diferente.
        case 0: //Si no hay números se le indica al usuario que introduzca al menos un número.
            console.log('Introduce at least 1 number');
            break;
        case 1: //Si solo hay un número realiza la raíz cuadrada
            let squareRoot = Math.round(Math.sqrt(parseInt(numberList[0])) * 1000) / 1000;
            console.log(`The square root of ${numberList[0]} is ${squareRoot}`);
            break;

        default: //En caso de que haya más de un número en el arreglo se realizan las cuatro operaciones
            let results = [];
            for (let i = 0; i < numberList.length; i++) { //Creamos un bucle para repetir la operación tantas veces como cifras tengamos
                if (i === 0) { // En la 1a vuelta del bucle asignamos a los resultados  el valor de la 1a cifra del array.
                    for (let j = 0; j < 4; j++) {
                        results[j] = numberList[i];
                    }
                } else { // Para el resto de cifras, realizaremos cada una de las operaciones y almacenaremos el resultado en el arreglo
                    results[0] = Math.round((results[0] + numberList[i]) * 1000) / 1000;
                    results[1] = Math.round((results[1] - numberList[i]) * 1000) / 1000;
                    results[2] = Math.round(results[2] * numberList[i] * 1000) / 1000;
                    results[3] = Math.round(results[3] / numberList[i] * 1000) / 1000;
                }
            }
            //Se imprimen los resultados en la consola. Al no permitir que se introduzcan datos no númericos no es necesario filtrar los resultados, ya que siempre serán números.
            console.log(`The result of the sum is ${results[0]}\nThe result of the rest is ${results[1]}\nThe result of the multiplication is ${results[2]}\nThe result of the division is ${results[3]}`);



    }
    let newOp = prompt('Do another operation? y/n'); //Se le solicita al usuario si quiere realizar otra operación

    if (newOp === 'y') {
        calculatorPro(); //En caso de que el usuario indica que si se llama de forma recursiva a la función calculatorPro
    } else {
        console.log('Bye!') //En caso de que indique que no, se finaliza la ejecución del programa
    }

}



calculatorPro();