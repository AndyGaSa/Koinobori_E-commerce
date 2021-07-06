function sumar(param1, param2) {
    if((param1 + param2) % 1 == 0){
        return "El resultado de la suma es " + (param1 + param2);
    }else {
    return "El resultado de la suma es " + (param1 + param2).toFixed(3);
    }
}


function restar(param1, param2) {
    if((param1 - param2) % 1 == 0){
        return "El resultado de la resta es " + (param1 - param2);
    }else {
    return "El resultado de la resta es " + (param1 - param2).toFixed(3);
    }
}


function multiplicar(param1, param2) {
    if((param1 * param2) % 1 == 0){
        return "El resultado de la multiplicación es " + (param1 * param2);
    }else {
    return "El resultado de la multiplicación es " + (param1 * param2).toFixed(3);
    }
}

function dividir(param1, param2) {
    if((param1 / param2) % 1 == 0){
        return "El resultado de la división es " + (param1 / param2);
    }else {
    return "El resultado de la división es " + (param1 / param2).toFixed(3);
    }
}

function calculator(parametro1, parametro2){
    let resultado = [];

    if(typeof parametro1 != "number" && typeof parametro2 != "number"){
        return "No ha introducido números";

    }else if(typeof parametro1 != "number" && typeof parametro2 == "number"){

        if((Math.sqrt(parametro2) % 1 == 0)){
            return "El resultado de la raíz cuadrada es " + Math.sqrt(parametro2);
            }else{
                return "El resultado de la raíz cuadrada es " + Math.sqrt(parametro2).toFixed(3);
            }
     
    }else if(typeof parametro1 == "number" && typeof parametro2 != "number"){
        
        if((Math.sqrt(parametro1) % 1 == 0)){
        return "El resultado de la raíz cuadrada es " + Math.sqrt(parametro1);
        }else{
            return "El resultado de la raíz cuadrada es " + Math.sqrt(parametro1).toFixed(3);
        }
    }
    else if(typeof parametro1== "number" && typeof parametro2== "number"){
        resultado = [
            sumar(parametro1, parametro2),
            restar(parametro1, parametro2),
            multiplicar(parametro1, parametro2),
            dividir(parametro1, parametro2)
        ];
        for(i=0; i<resultado.length; i++){
            console.log(resultado[i]);
        }
    }
}

calculator(5);