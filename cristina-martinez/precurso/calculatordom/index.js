let numerosUtilizados = [];
let recolector= [];

let numeros1= 0;
let numeros2 = 0;
let resultado = 0;
let contador = 0;

let suma = false;
let resta = false;
let multiplicacion = false;
let division = false;

const valorActual= document.getElementById('valorActual');
const valorAnterior = document.getElementById('valorAnterior');

function inputNumeros(num){
    if(numerosUtilizados.length<6){
       
            numerosUtilizados.push(num);
            recolector = numerosUtilizados.join('');
            valorActual.innerHTML = numerosUtilizados.join('');
    
}
}

function inputPunto(){
    if(!numerosUtilizados.includes('.')){
        numerosUtilizados.push('.');
        recolector = numerosUtilizados.join('');
        valorActual.innerHTML = numerosUtilizados.join('');
    }
}

function inputOperaciones(op){
    if(contador === 0){
        contador += 1;
        numeros1 = recolector;
    }else{
        
        numeros1 = resultado;
    }
    
    recolector = [];
    numerosUtilizados = [];
    if(op === '+'){
        valorAnterior.innerHTML = numeros1 + ' +';
        valorActual.innerHTML = 0;
        suma = true;

    }else if(op === '-'){
        valorAnterior.innerHTML = numeros1 + ' -';
        valorActual.innerHTML = 0;
        resta = true;

    }else if(op === '%'){
        valorAnterior.innerHTML = numeros1 + ' %';
        valorActual.innerHTML = 0;
        division = true;

    }else if(op === 'X'){
        valorAnterior.innerHTML = numeros1 + ' X';
        valorActual.innerHTML = 0;
        multiplicacion = true;

    }

}

function inputResultado(){

numeros2 = recolector;
numeros1 = Number(numeros1);
numeros2 = Number(numeros2);
    
if(suma === true){
    resultado = numeros1 + numeros2;
    valorAnterior.innerHTML = numeros1 + '+' + numeros2;
    valorActual.innerHTML = resultado;
    suma = false;

}else if(resta === true){
        resultado = numeros1 - numeros2;
        valorAnterior.innerHTML = numeros1 + '-' + numeros2;
        valorActual.innerHTML = resultado;
        resta = false;

    }else if(multiplicacion === true){
        resultado = numeros1 * numeros2;
        valorAnterior.innerHTML = numeros1 + '*' + numeros2;
        valorActual.innerHTML = resultado;
        multiplicacion = false;

    }else if(division === true){
        resultado = numeros1 / numeros2;
        valorAnterior.innerHTML = numeros1 + '%' + numeros2;
        valorActual.innerHTML = resultado;
        division = false;

    }
}



function inputAC(){
    numerosUtilizados = [];
    valorActual.innerHTML = 0;
    valorAnterior.innerHTML = 0;
}

function inputDeshacer(){
    numerosUtilizados.pop();
    valorActual.innerHTML = numerosUtilizados.join('');
}


