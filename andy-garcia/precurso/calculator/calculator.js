/*
PROYECTO TEMA 1 - Calculator! ➗➕
AVISO: Para hacer la calculadora no se puede usar bajo ningún caso, el metodo eval()

● CALCULATOR

Haz una calculadora. Un único programa al que le pasarás uno o dos parámetros mediante "prompt". 
Los resultados deberían ser mostrados con 3 decimales como mucho (En caso que hubieran). 
El programa debe contemplar e informar al usuario en el caso de que este introduzca cualquier cosa que no sean números.

● Si el usuario introduce UN solo número, deberá mostrar SOLO su raíz cuadrada.

● Si introduce DOS números se mostrarán los resultados de la suma, resta, multiplicación y división de dichos valores.

● Los resultados deberían almacenarse dentro de una array y mostrarlos de una forma amigable al usuario.

// Output>
Results:
The result of the sum is resultSum
The result of the rest is resultRest
...  */

var parametrosUser = prompt('Introduce un numero: ','Introducelo aqui');
var check = isNaN(parametrosUser);
while(check === true){
    parametrosUser = prompt('No has introducido un numero valido , vuelve a escribirlo: ','Introducelo aqui');
    check = isNaN(parametrosUser);
};


var parametrosUser2 = prompt('Introduce si quieres otro numero: ','Introducelo aqui o Cancela');
var check2 = isNaN(parametrosUser2);
while(check2 === true){
    parametrosUser2 =  prompt('No has introducido un numero valido , vuelve a escribirlo: ','Introducelo aqui o pulsa Cancelar');
    check2 = isNaN(parametrosUser2);
};

function Decimales(parametroFinal){
    parametroFinal = parseFloat(parametroFinal);
    if(Number.isInteger(parametroFinal) === false){
        parametroFinal = parametroFinal.toFixed(3);
    }
    return parametroFinal;
}

parametrosUser = Decimales(parametrosUser);
parametrosUser2 = Decimales(parametrosUser2);

let resultados = [];

if( isNaN(parametrosUser2) ){
    console.log('La raiz quadrada de '+ parametrosUser + ' es ' + Math.sqrt(parametrosUser));
}else{
    resultados.push(parametrosUser2 + parametrosUser);
    resultados[0] = Decimales(resultados[0]);
    resultados.push(parametrosUser - parametrosUser2);
    resultados[1] = Decimales(resultados[1]);
    resultados.push(parametrosUser2 * parametrosUser);
    resultados[2] = Decimales(resultados[2]);
    resultados.push(parametrosUser2 / parametrosUser);
    resultados[3] = Decimales(resultados[3]);
   

    console.log('El resultado de la suma de '+ parametrosUser + ' + ' + parametrosUser2 + ' es '  + resultados[0] + 
    '\nEl resultado de la resta es '+ resultados[1] +  
    '\nEl resultado de la multiplicacion es '+ resultados[2] +  
    '\nEl resultado de la division es '+ resultados[3] );
};
