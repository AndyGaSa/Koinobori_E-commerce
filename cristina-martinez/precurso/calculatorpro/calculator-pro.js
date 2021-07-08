var newNumber;
var numberList= [];

function calculatorPro() {
   
    let valueResp = prompt('Introduzca un número o presione a cancelar');
     {
        if(isNaN(valueResp)){
            intentar();
        }else if(valueResp === null) {
           calculator();
        }else{
            newNumber = valueResp;
            newNumber = Number.parseFloat(newNumber);
            numberList.push(newNumber);
            calculatorPro();
        }
    } 
}

    function intentar(){
        let intento;
        intento = prompt('No ha introducido un número, vuelve a intentarlo'); {
            if(isNaN(intento)){
                intentar();
            }else {
                newNumber = intento;
                newNumber = Number.parseFloat(newNumber);
                numberList.push(newNumber);
                calculatorPro();
            }
        }
    
    }
  

function calculator() {
    if(numberList.length < 2){
            if((Math.sqrt(numberList) % 1 == 0)){
            console.log("El resultado de la raíz cuadrada es " + Math.sqrt(numberList) + ".");
            }else{
                console.log("El resultado de la raíz cuadrada es " + Math.sqrt(numberList).toFixed(3) + ".");
            }
    }else{
        var sumar = numberList.reduce(function(a, b) {
            if((a + b) % 1 == 0){
            return a + b; 
            }else {
            return (a + b).toFixed(3);

        }
        })
        
       var restar = numberList.reduce(function(a, b) {
        if((a - b) % 1 == 0){
            return a - b;
        }else{
            return (a - b).toFixed(3);
        }
        })
        
        var multiplicar = numberList.reduce(function(a, b) {
         if((a * b) % 1 == 0){
             return a * b;
         }else{
             return (a * b).toFixed(3);
         }
        })

        var dividir = numberList.reduce(function(a, b) {
         if((a / b) % 1 == 0){
             return a / b;
         }else{
             return (a / b).toFixed(3);
         }
        })
    
       console.log(numberList);
        console.log("El resultado de la suma de los elementos es " + sumar);
        console.log("El resultado de la resta de los elementos es " + restar);
        console.log("El resultado de la multiplicación de los elementos es " + multiplicar);
        console.log("El resultado de la división de los elementos es " + dividir);
           
     
        }
        despedida();
    }

function despedida() {
    let despedidas;
    despedidas = prompt('¿Desea volver a realizar otra operación? y/n'); {
        if(despedidas === "y" || despedidas === "Y"){
            console.clear();
            calculatorPro();

        }else{
        console.log("Bye!");
    } 
}
}
calculatorPro();