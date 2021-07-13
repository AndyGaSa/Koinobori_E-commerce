/**
 * no se puede usar bajo ningún caso, el metodo eval()
 * le pasarás uno o dos parámetros mediante "prompt".
 * con 3 decimales como mucho
 * El programa debe contemplar e informar al usuario en el caso de que este introduzca cualquier cosa que no sean números.
 * UN solo número, deberá mostrar SOLO su raíz cuadrada.
 * DOS números se mostrarán los resultados de la suma, resta, multiplicación y división de dichos valores.
 * Los resultados deberían almacenarse dentro de una array y mostrarlos de una forma amigable al usuario.
 * Output>
 * 
 * se deberá preguntar continuamente hasta que el usuario no quiera introducir más valores
 * los cálculos se deben realizar con todos los números introducidos válidos
 * valor no válido saltara alert pero se debe dar la opción de seguir introduciendo valores
 * Después de hacer todas las operaciones, el programa deberá preguntar al usuario
*/

let numbers = [];
let operations = [];

//Entrada de numeros redundante
function newNumber (){
    let value = window.prompt("Introduce un numero");
    if (value === null){
        console.log("break");
        operation(numbers)
    } else if (isNaN(parseFloat(value)) || value == "") {
        window.alert("no se ha introducido un numero valido");
        newNumber();
    } else {   
        numbers.push(parseFloat(value));
        newNumber();
    }
}
newNumber()

//reinicio de la operacion segun usuario
function loop() { 
    let repeat = window.prompt("¿Quieres hacer otra operacion? Y/N")
    if (repeat === null || repeat.toLowerCase() == "n"){
        window.alert("Adios!!");
    } else if (repeat.toLowerCase() == "y"){
        numbers = [];
        newNumber();
    } else {
        window.alert("Disculpa, No te he entendido");
        loop();
    }
}

//operaciones matematicas y log
function operation (values = []){
    let resultSum = 0;
    let resultRest = 0;
    let resultMult = 1;
    let resultDiv = 1;

    for (let value of values) {
        resultSum += value;
        resultRest -= value;
        resultMult *= value;
        resultDiv /= value;
      }
    
    operations[0] = resultSum;
    operations[1] = resultRest;
    operations[2] = resultMult;
    operations[3] = resultDiv;

    resultSum = Math.round(operations[0]*1000)/1000;
    resultRest = Math.round(operations[1]*1000)/1000;
    resultMult = Math.round(operations[2]*1000)/1000;
    resultDiv = Math.round(operations[3]*1000)/1000;

    console.log(`The result of the sum is ${resultSum} \nThe result of the rest is ${resultRest} \nThe result of the multiplication is ${resultMult} \nThe result of the division is ${resultDiv}`);
    
    loop();

}

