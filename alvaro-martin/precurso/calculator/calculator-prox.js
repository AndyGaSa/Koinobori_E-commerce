function calculatorPro() {
    let newNumber;
    let numberList = [];

    do{
        newNumber = prompt("Introduce un número o presiona cancelar para parar");
            if(isNaN(newNumber)){
               alert("Este elemento no es un número");
            }else {
                 if( newNumber != null){
                     numberList.push(newNumber);
                 }
             }
     }while(newNumber !== null);
     if (numberList.length === 1) {
        console.log ("El resultado de la raíz cuadrada es " + Math.sqrt(numberList[0]).toFixed(3)); 
         preguntarDeNuevo();      
    }else{
        console.log ( "Resultados:\n" 
        + suma(numberList) +
         "\n" + resta(numberList) + 
         "\n" + multi(numberList)  + 
         "\n" + divi(numberList) );
        preguntarDeNuevo() ;
    }  

function suma(numeros){
    let resultadoSuma =0;
    for (let i = 0; i < numeros.length; i++) {

        resultadoSuma += Number(numeros[i]); 
    }
    if(resultadoSuma % 1 !== 0){
        resultadoSuma= resultadoSuma.toFixed(3);
    }
    return "El resultado de la suma es " + resultadoSuma;
}

function resta(numeros) {
    let restaResultado=0;
    for (let i = 0; i < numeros.length; i++) {
        if (i === 0) {
            restaResultado = numeros[0];
        } else {
            restaResultado = restaResultado - numeros[i];
        }
    }
    if (restaResultado % 1 !== 0) {
        restaResultado = restaResultado.toFixed(3);
    }
    return "El resultado de la resta es " + restaResultado;
}

function multi(numeros) {
    let resultadoMulti = 1;
    for (let i = 0; i < numeros.length; i++) {
        resultadoMulti = numeros[i] * resultadoMulti;
    }
    if (resultadoMulti % 1 !== 0) {
        resultadoMulti = resultadoMulti.toFixed(3);
    }
    return "El resultado de la multiplicación es " + resultadoMulti;
}

function divi(numeros) {
    let resultadoDivi=1;
    for (let i = 0; i < numeros.length; i++) {
        if (i === 0) {
            resultadoDivi = numeros[0];
        } else {
            resultadoDivi = resultadoDivi / numeros[i];
        }
    }
    if (resultadoDivi % 1 !== 0) {
        resultadoDivi = resultadoDivi.toFixed(3);
    }
    return "El resultado de la división es " + resultadoDivi;
}

function preguntarDeNuevo() {
    let respuesta = prompt("Nuevos números? s/n");
    switch (respuesta) {
        case 's':
            calculatorPro();
            break;
        case 'n':
            alert("Que la fuerza te acompañe!");
            break;
        default:
            preguntarDeNuevo();
    }
}

}

calculatorPro()