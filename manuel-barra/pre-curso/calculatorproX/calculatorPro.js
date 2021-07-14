/**
 * *   The Calculator HTML 
 * *
 **/


let recolector = [] // 
let inputNum = []

let numA = 0;
let numB = 0;

document.getElementById('numero-actual').innerHTML = ''
document.getElementById('numero-anterior').innerHTML = ''

let sum = false
let rest = false
let mult = false
let div = false

let resultado = 0;

let contador = 0;

function inputsNumeros(num) { // Recogemos los numeros, limitando su largo a 9 y filtrando que no sea el string "b"
    if (recolector.length < 9 && num !== 'b') {
        inputNum.push(num)
        recolector = inputNum.join('') //Quitamos las comas del array
    } else if (num === 'b') { // Si el numero si es "b", borra el numero con las funcion pop()
        inputNum.pop()
        recolector = inputNum.join('')
    }
    document.getElementById('numero-actual').innerHTML = recolector //Mostraoms el numero por pantalla
}

function punto(p) { // Esta funcion permite introducir la coma en el numero recolector
    if (!inputNum.includes('.')) {
        inputNum.push('.')
        recolector = inputNum.join('')
    }
    document.getElementById('numero-actual').innerHTML = recolector // Muestra por pantalla eñl recolector
}

function operador(ope) { //Cuando se ingresa un operdor
    if (contador === 0) {
        numA = recolector
        contador += 1
    } else if (contador > 0) {
        numA = resultado
    }
    inputNum = []
    recolector = []
    if (ope === '+') {
        sum = true
        document.getElementById('numero-anterior').innerHTML = numA + "+"
    } else if (ope === '-') {
        rest = true
        document.getElementById('numero-anterior').innerHTML = numA + "-"
    } else if (ope === '*') {
        mult = true
        document.getElementById('numero-anterior').innerHTML = numA + "*"
    } else if (ope === '/') {
        div = true
        document.getElementById('numero-anterior').innerHTML = numA + "/"
    }
}

function mostrarResultado(result) {

    numB = recolector
    numA = Number(numA)
    numB = Number(numB)
    if (sum === true) {
        resultado = numA + numB
        document.getElementById('numero-anterior').innerHTML = numA + "+" + numB
        document.getElementById('numero-actual').innerHTML = resultado
        sum = false

    } else if (rest === true) {
        resultado = numA - numB
        document.getElementById('numero-anterior').innerHTML = numA + "-" + numB
        document.getElementById('numero-actual').innerHTML = resultado
        rest = false

    } else if (mult === true) {
        resultado = numA * numB
        document.getElementById('numero-anterior').innerHTML = numA + "*" + numB
        document.getElementById('numero-actual').innerHTML = resultado
        mult = false

    } else if (div === true) {
        resultado = numA / numB
        document.getElementById('numero-anterior').innerHTML = numA + "/" + numB
        document.getElementById('numero-actual').innerHTML = resultado.toFixed(2)
        div = false
    }
}

function actualizar(ac) {
    if (ac === 'ac') {
        recolector = []
        inputNum = []
        numA = 0;
        numB = 0;
        sum = false
        rest = false
        mult = false
        div = false
        resultado = 0;
        contador = 0;
        document.getElementById('numero-actual').innerHTML = ''
        document.getElementById('numero-anterior').innerHTML = ''

    }

}