//Variables
let results = [];
let numberList = [];
let num1Float = "";
let num2Float = "";

//Funciones
function calculos(){
    let sum = Math.round((num1Float+num2Float) * 1000)/ 1000;
    let rest = Math.round((num1Float-num2Float) * 1000) / 1000;
    let mult = Math.round((num1Float*num2Float) * 1000) / 1000;
    let div = Math.round((num1Float/num2Float) * 1000 )/ 1000;

    results.push(sum);
    results.push(rest);
    results.push(mult);
    results.push(div);
    
    return results
}

//Codigo

let num1 = prompt('Pon el primer numero sobre el cual deseas realizar los calculos');
if(isNaN(num1) && num1 !== ""){
    do {
        num1 = prompt('Porfavor, introduce solo carateres numericos');
    } while (isNaN(num1));

    if(!isNaN(num1) && num1 !== ""){
        num1Float = parseFloat(num1);
        numberList.push(num1Float);
    }
    else if(num1 ===""){
        do {
            num1 = prompt('Porfavor, introduce al menos un numero o cancela');
        } while (isNaN(num1)|| num1 === "");   
        if(!isNaN(num1)){
            num1Float = parseFloat(num1);
            numberList.push(num1Float);
        }
    }
}
else if(num1 ===""){
    do {
        num1 = prompt('Porfavor, introduce al menos un numero o cancela');
    } while (isNaN(num1)|| num1 === "");   
    if(!isNaN(num1)){
        num1Float = parseFloat(num1);
        numberList.push(num1Float);
    }
}
else if(!isNaN(num1) && num1 !== "" && num1 !== null){
    num1Float = parseFloat(num1);
    numberList.push(num1Float);

}
//hasta aqui bien el bulce para solicitar el primer numero, ahora para el siguiente, si quiere cancelar tendra que dar la raiz del primer numero, si no, sera el mismo programa que el anterior
if(numberList.length === 1){let num2 = prompt('Pon el segundo numero sobre el cual deseas realizar los calculos');

    if(isNaN(num2) && num2 !== ""){
        do {
            num2 = prompt('Porfavor, introduce solo carateres numericos');
        } while (isNaN(num2));

        if(!isNaN(num2) && num2 !== "" && num2 !==null){
            num2Float = parseFloat(num2);
            numberList.push(num2Float);
        }
        else if(num2 ===""){
            do {
                num2 = prompt('Si no quiere introducir un segundo numero, cancela por favor');
            } while (isNaN(num2)|| num2 === "");   
            if(!isNaN(num2) && num2 !==null){
                num2Float = parseFloat(num2);
                numberList.push(num2Float);
            }
        }
    }
    else if(num2 ===""){
        do {
            num2 = prompt('Si no quiere introducir un segundo numero, cancela por favor');
        } while (isNaN(num2)|| num2 === "");   
        if(!isNaN(num2) && num2 !==null){
            num2Float = parseFloat(num2);
            numberList.push(num2Float);
        }
    }
    else if(!isNaN(num2) && num2 !== "" && num2 !== null){
        num2Float = parseFloat(num2);
        numberList.push(num2Float);
    }
//si el usuario cancela el segundo numero , se calcula la raiz del primer numero:
if(!isNaN(num2) && num2 !== "" && num2 == null){
    console.log(`La raíz cuadrada de  ${numberList[0]}  es:  ${Math.sqrt(numberList[0]).toFixed(3)}`);  
}
    if (numberList.length === 2){calculos();
        console.log(`El resultado de la sum es: ${results[0]}`);
        console.log(`El resultado de la resta es: ${results[1]}`);
        console.log(`El resultado de la mutliplicación es: ${results[2]}`);
        console.log(`El resultado de la división es: ${results[3]}`);
    }  
};