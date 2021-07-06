function calculatorPro(){
    console.clear();

    let newNumber;
    let numberList = [];
    let output = [];
    let error = false;

    //Pregunta que valores añadir
    do{
        if (error) newNumber = prompt("CALCULATOR\n\nERROR: Last value wasn't a number. Not added to the operation\nEnter a number or press cancel to stop");
        else newNumber = prompt("CALCULATOR\n\nEnter a number or press cancel to stop");
        
        if(newNumber === null) break;
        //Comprueba si el valor es un número y lo añade a numberList
        newNumber = parseFloat(newNumber);
        if(!isNaN(newNumber)){
            numberList.push(newNumber);
            error = false;
        }
        else{
            error = true;
        }
    } while(true);

    console.log("\n\n");
    //No se han añadido valores
    if(numberList.length < 1){
        console.log("//Output =>\nNo numbers added");
    }
    //Solo un valor añadido se hace la raiz cuadrada
    else if(numberList.length === 1){
        output.push(Math.sqrt(numberList[0]));
        console.log("//Output =>");
        console.log("The result of the root square is " + Math.round((output[0] + Number.EPSILON)*1000)/1000);
    }
    //Más de un valor añadido se hacen todas las operaciones
    else{
        output = [numberList[0],numberList[0],numberList[0],numberList[0]];
        for(let i=1; i<numberList.length; i++){
            output[0] += numberList[i];
            output[1] -= numberList[i];
            output[2] *= numberList[i];
            output[3] /= numberList[i];
        }

        console.log("//Output =>");
        console.log("The result of the addition is " + Math.round((output[0] + Number.EPSILON)*1000)/1000 + "\n");
        console.log("The result of the substraction is " + Math.round((output[1] + Number.EPSILON)*1000)/1000 + "\n");
        console.log("The result of the multiplication is " + Math.round((output[2] + Number.EPSILON)*1000)/1000 + "\n");
        console.log("The result of the division is " + Math.round((output[3] + Number.EPSILON)*1000)/1000);
    }

    do{
        let goOn = prompt("New numbers? y/n");
        if(goOn === "y"){
            calculatorPro();
            break;
        } 
        else if (goOn === "n" || goOn === null){
            console.log("\n\nBye!");
            break;
        }
    }while(true);
}

calculatorPro();