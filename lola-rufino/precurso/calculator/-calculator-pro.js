// Se declaran las funciones de las operaciones
function sum(total, num) {
    return total + num;
}
function rest(total, num) {
    return total - num;
}
function multi(total, num) {
    return total * num;
}
function divi(total, num) {
    return total / num;
}
// Función principal
function calculatorPro() {
    // Se declaran las variables
    let newNumber;
    let otherNumber;
    let numberList = [];
    // Se limpia la consola por si hay resultados de otras ejecuciones del programa.
    console.clear();
    // Se pide por prompt al usuario que inserte un número
    newNumber = prompt('Introduce un número o cancela para salir.');
    // Si cancela, el programa se despide
    if (newNumber === null) {
        console.log('¡Hasta otra!');
        // Si inserta un número, ya sea decimal, negativo, entero.. etc, se quita los espacios, se pasa a flotante
        // y ejecuta la función nuevoNumero()
    } else if (!isNaN(parseFloat(newNumber)) && isFinite(newNumber)) {
        newNumber = newNumber.trim();
        newNumber = parseFloat(newNumber);
        nuevoNumero();
        // Si es diferente a un número, avisa por alert y vuelve a llamar a la función principal
    } else {
        alert('Por favor, utiliza sólo números. Gracias.');
        calculatorPro();
    }
    // Esta función añade al array el número y calcula su raíz cuadrada
    function nuevoNumero() {
        if (Number.isFinite(newNumber) === true) {
            numberList.push(newNumber);
            console.log('El resultado de la raíz cuadrada es: ' + Math.sqrt(newNumber).toFixed(3));
            otroNumeroBucle();
        } else {
            console.log('Error');
        }
    }
    // Bucle en el que se pide otro número por prompt
    function otroNumeroBucle() {
        do {
            otherNumber = prompt('Introduce otro número para operar o cancela para ver los resultados y/o salir.');
            // Si el usuario cancela, llama a la función resultados()
            if (otherNumber === null) {
                resultados();
                // Si es un número válido lo que introduce, quita espacios, pasa a número flotante y llama a la función otroNumero()
            } else if (!isNaN(parseFloat(otherNumber)) && isFinite(otherNumber)) {
                otherNumber = otherNumber.trim();
                otherNumber = parseFloat(otherNumber);
                otroNumero();
                // Si no, alerta al usuario y vuelve a llamar a la función del bucle
            } else {
                alert('Por favor, utiliza sólo números. Gracias.');
                otroNumeroBucle();
            }
        } while (otherNumber !== null)
    }
    // Añade al array el nuevo número
    function otroNumero() {
        if (Number.isFinite(otherNumber) === true) {
            numberList.push(otherNumber);
        } else {
            console.log('Error');
        }
    }
    // Función resultados y retorno o salir
    function resultados() {
        // Si el usuario cancela hay dos opciones:
        // Si hay más elementos dentro del array de numberList, muestra resultados y pregunta si quiere seguir operando
        if (numberList.length > 1) {
            console.log('La suma de todos los números es: ' + numberList.reduce(sum));
            console.log('La resta de todos los números es: ' + numberList.reduce(rest));
            console.log('La multiplicación de todos los números es: ' + numberList.reduce(multi));
            console.log('La divisón de todos los números es: ' + numberList.reduce(divi));
            // Se le pregunta al usuario si quiere seguir operando. Si es afirmativo, vuelve a llamar a la función principal.
            // Si no, se despide
            let pregunta = confirm('¿Desea volver a realizar otra operación?')
            if (pregunta === true) {
                calculatorPro();
            } else if (pregunta === false || pregunta === null) {
                console.log('¡Hasta otra!');
            } else {
                console.log('Error');
            }
        // Si no hay elementos dentro del array si no el primer número introducido, sólo se queda la raíz cuadrada
        // y el programa se despide
        } else {
            console.log('¡Hasta otra!');
        }
    }
}
// Se llama a la función principal para ejecutar el programa
calculatorPro();