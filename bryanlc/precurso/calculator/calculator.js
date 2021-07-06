function calculator(n1,n2){
    let resultados = [];
    
 if(Number.isInteger(n1) && Number.isInteger(n2)){
        let resulSuma=n1+n2;
        resultados.push(resulSuma);
        let resulResta=n1-n2;
        resultados.push(resulResta);
        let resulMulti=n1*n2;
        resultados.push(resulMulti);
        let resulDiv=n1/n2;
        resultados.push(resulDiv);

        console.log("El resutado de la Suma es "+ resultados[0]);
        console.log("El resutado de la Resta es "+ resultados[1]);
        console.log("El resutado de la Multiplicacion es "+ resultados[2]);
        console.log("El resutado de la Division es "+ resultados[3]);

        }else if(n1===undefined){
            let rCuadrada = Math.sqrt(n2);
            console.log("la raiz cuadrada de " +n2+" es"+ rCuadrada );
        }
        else if(n2=== undefined){
            let rCuadrada = Math.sqrt(n1);
            console.log("la raiz cuadrada de " +n1+" es"+ rCuadrada );
        }
    else{
        console.log("uno de los valores no es un numero");
    }

}
calculator(4);

