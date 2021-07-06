function calculator() {
    
    let numberList = [];
    
    for(let i = 0; i <= 1; i++){
        let num = parseFloat(prompt('Ingresa tu numero por favor.'));
        numberList.push(num);
    }

    if(!isNaN(numberList[0]) && isNaN(numberList[1])){
        console.log(square(numberList[0]))
    }else if(isNaN(numberList[0]) && !isNaN(numberList[1])){
        console.log(square(numberList[1]))
    }else if(!isNaN(numberList[0]) && !isNaN(numberList[1])){
        console.log('El resultado de tus calculos es: \n' + suma(numberList[0], numberList[1]) + rest(numberList[0], numberList[1]) + mult(numberList[0], numberList[1]) + div(numberList[0], numberList[1]))
    }else if(isNaN(numberList[0]) && isNaN(numberList[1])){
        alert('Ingresa al menos un Numero. ')
        calculator();
    }
  }

calculator();


  //Calculos

function square(a){
    resultSquare = Math.sqrt(a)
    resultSquare = resultSquare.toFixed(3);
    return (resultSquare + ' Es el cuadrado de tu numero. ')
}


function suma(a, b){
    resultSum = (a + b)
    return (' Es la suma de tus numeros ' + resultSum + '\n')
}


function rest(a, b){
    resultRest = (a - b)    
    return (' Es la resta de tus numeros ' + resultRest + '\n')
}


function mult(a, b){
    resultMult = (a * b)
    return (' Es producto de tus numeros ' + resultMult + '\n')
}


function div(a, b){
    resultDiv = (a / b)
    resultDiv = resultDiv.toFixed(3);
    return (' Es coceno de tus numeros ' + resultDiv + '\n')
}

