//click functions
let numCells = document.getElementsByClassName('number');
for (let cell of numCells){
    cell.addEventListener("click", function() {
        addNumber(cell.id);
    });
}

let simCells = document.getElementsByClassName('symbol');
for (let cell of simCells){
    cell.addEventListener("click", function(){
        symbol(cell.id);
    });
}

//variables
let printOp = '';
let newNum = '0';
let operation = '';
let auxNum;

//addNumber() es llamada cuando se pulsa un numero o '.' en la calculadora
function addNumber(id){
    //si se añade un numero nuevo despues de acabar la operacion (con '=') se resetea la operacion antes de añadirlo
    if(operation === 'equal')
        Restart();

    //se añade a newNum el numero o '.' (newNum es un string), si newNum.length >= 10 no se añade ningun numero mas
    if(newNum.length < 10){
        if(id === 'decimal'){
            if(newNum === '-')
                newNum = '-0.';
            else if(!newNum.includes('.')) //si ya hay un '.' no deja añadir más
                newNum += '.';
        }  
        else if(newNum === '0')
            newNum = id[1];
        else
            newNum += id[1]
    }
    else
        document.getElementById('error').innerHTML = 'MAX NUM REACHED';

    //imprime newNum en result
    document.getElementById('result').innerHTML = newNum;
}

//addSymbol() es llamada cuando se pulsa un simbolo en la calculadora
function symbol(idS){
    if(idS === "ac")
        restart();
    else if(idS === "back")
        deleteLast();
    else if(idS === "equal")
        calculateResult(true);
    else
        addSymbol(idS);

    document.getElementById('error').innerHTML = ''; //quita si habia el error max num reached
}

//Crea la operacion
function addSymbol(id){
    if(newNum === '-') return; //si newNum solo es el simbolo - no deja seguir la operacion

    //si newNum es 0(ningun numero añadido o 0) se añade - a newNum (crea numeros negativos)
    if(newNum === '0' && id === 'sub'){
        newNum = '-';
        document.getElementById('result').innerHTML = newNum;
        return;
    }

    //si se añade una nueva operacion cuando ya hay una anterior hecha calcula el resultado de la anterior antes de proseguir
    if(printOp !== '')
        calculateResult(false); //actualiza newNum con el resultado de la operacion

    operation = id; //guarda cual sera la operacion que tenga que hacer

    //Imprime en operation el numero con la operacion
    printOp = newNum;
    auxNum = parseFloat(newNum);
    newNum = '0';
    switch(id){
        case 'div':
            printOp += ' ÷';
            break;
        case 'mult':
            printOp += ' ×';
            break;
        case 'sub':
            printOp += ' -';
            break;
        case 'sum':
            printOp += ' +';
            break;
        default:
            break;
    }

    document.getElementById('operation').innerHTML = printOp;
    document.getElementById('error').innerHTML = '';
    document.getElementById('result').innerHTML = '0';
}
  
//elimina el ultimo valor o signo
function deleteLast(){
    if(operation === 'equal')
        restart();
    else if(newNum !== '0'){
        if(newNum.length === 1)
            newNum = '0';
        else
            newNum = newNum.substring(0, newNum.length - 1);
        
        document.getElementById('result').innerHTML = newNum;    
    }
    else{
        let aux = auxNum.toString();
        restart();
        newNum = aux;
        document.getElementById('result').innerHTML = newNum;
    }
}

//reinicia la calculadora
function restart(){
    printOp = '';
    newNum = '0';
    operation = '';
    auxNum = 0;
    document.getElementById('operation').innerHTML = '';
    document.getElementById('error').innerHTML = '';
    document.getElementById('result').innerHTML = '0';
}

//calcula el resultado
function calculateResult(eq){
    let result;
    switch(operation){
        case 'div':
            result = Math.round(((auxNum / parseFloat(newNum)) + Number.EPSILON)*1000000000)/1000000000;
            break;
        case 'mult':
            result = Math.round(((auxNum * parseFloat(newNum)) + Number.EPSILON)*1000000000)/1000000000;
            break;
        case 'sub':
            result = Math.round(((auxNum - parseFloat(newNum)) + Number.EPSILON)*1000000000)/1000000000;
            break;
        case 'sum':
            result = Math.round(((auxNum + parseFloat(newNum)) + Number.EPSILON)*1000000000)/1000000000;
            break;
        default:
            result = Math.round((parseFloat(newNum) + Number.EPSILON)*1000000000)/1000000000;
            break;
    }

    //si no es llamado desde = no entra (no imprime ' =' ni el resultado final en result)
    //si ya se ha pedido = anteriormente no lo vuelve a hacer
    if(eq && operation !== 'equal'){
        operation = 'equal';
        printOp += ` ${newNum} =`;
        document.getElementById('operation').innerHTML = printOp;
        document.getElementById('error').innerHTML = '';
        document.getElementById('result').innerHTML = lengthCheck(result);
    }
    newNum = result.toString();
}

//comprueba como de largo es el numero para redondearlo con el mayor numero de decimales que quepan o convertirlo en notacion cientifica
function lengthCheck(result){
    if(result.toString() === 'NaN' || result.toString() === 'Infinity')
        return 'Math error';
    else if(result.toString().length <= 10)
        return result.toString();
    else if(Math.round(result).toString().length <= 10){
        let aux = 10**(9 - Math.round(result).toString().length);
        return (Math.round((result + Number.EPSILON)*aux)/aux).toString();
    }
    else{
        let aux = result.toExponential().toString();
        let n = aux.search("e");
        let num = aux.substring(0,n);
        let el = aux.substring(n+2, aux.length);
        if(el.length > 2){
            return 'Math error';
        }
      
        if(num.length > 6)
            num = num.substring(0, 4);
        return num + "×10^" + el;
    }
}