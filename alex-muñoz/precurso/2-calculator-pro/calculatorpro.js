let results = [];
let numberList = [];
let numFloat = "";
let newNum;
let newOp = false;
let restart;

//Funciones
function newNumber(){
    newNum = prompt('Introduce los numeros sobre los cuales deseas realizar los calculos');
    if (newNum === null){
        alert('Has cancelado la operación')
    }
    else if(isNaN(newNum)){
        alert('Porfavor, introduce solo carateres numericos');
    }
    else if(newNum ==="" || newNum.trim().length === 0){
        alert('Si no desea introducir ningun numero,cancele por favor.');  
    }
    else if(!isNaN(newNum) && newNum !== ""  && newNum !== null){
        numFloat = parseFloat(newNum);
        numberList.push(numFloat); 
        console.log(numberList)
    } 
}
function calculos(){
    let sum = 0;
    let rest = 0;
    let mult = 1;
    let div = 1;

    for (let i = 0; i < numberList.length; i++){
        sum += numberList[i];
        rest -= numberList[i];
        mult *= numberList[i];
        numberList[i] /= div;
    }

    results.push(sum);
    results.push(rest);
    results.push(mult);
    results.push(div);

    sum = Math.round(results[0]*1000)/1000;
    rest = Math.round(results[1]*1000)/1000;
    mult = Math.round(results[2]*1000)/1000;
    div = Math.round(results[3]*1000)/1000;

    console.log(`El resultado de la suma es: ${results[0]}`);
    console.log(`El resultado de la resta es: ${results[1]}`);
    console.log(`El resultado de la mutliplicación es: ${results[2]}`);
    console.log(`El resultado de la división es: ${results[3]}`);

    numberList = [];
    results = [];
}
function calculatorPro(){
    do {
        newNumber();
        } while (newNum !== null)
    //si el usuario cancela el segundo numero , se calcula la raiz del primer numero:
    if(numberList.length === 1 && newNum !== isNaN && newNum !== "" && newNum == null){
        console.log(`La raíz cuadrada de  ${numberList[0]}  es:  ${Math.sqrt(numberList[0]).toFixed(3)}`);
    }
    if (numberList.length >= 2 && newNum === null){
        calculos();
        newOp = true;
    }
}
//codigo
calculatorPro();
while (newOp === true){
    restart = prompt("¿Desea realizar otra nueva operación? (Y/N)");
    restart = restart.toLowerCase();
    switch (restart) {
        case "y":
            calculatorPro();
            break;
        case "n":
            console.log("Adiooos!");
            newOp = false;     
    }
}
