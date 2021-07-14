function Calculator(n1, n2){
    let results = [];

    console.log("\n\n");
    //los 2 valores pasados por parámetro son números
    if(typeof(n1) === 'number' && typeof(n2) === 'number'){
        results.push(Math.round(((n1 + n2) + Number.EPSILON)*1000)/1000);
        results.push(Math.round(((n1 - n2) + Number.EPSILON)*1000)/1000);
        results.push(Math.round(((n1 * n2) + Number.EPSILON)*1000)/1000);
        results.push(Math.round(((n1 / n2) + Number.EPSILON)*1000)/1000);

        console.log("RESULTS:\n\n");
        console.log("The result of the addition is " + results[0] + "\n");
        console.log("The result of the substraction is " + results[1] + "\n");
        console.log("The result of the multiplication is " + results[2] + "\n");
        console.log("The result of the division is " + results[3] + "\n");
    }
    //1 valor pasado por parámetro que es número
    else if(typeof(n1) === 'number' && !n2){
        results.push(Math.round((Math.sqrt(n1) + Number.EPSILON)*1000)/1000);
        
        console.log("RESULTS:\n\n");
        console.log("The result of the root square is " + results[0] + "\n");
    }
    //no se han pasado valores o los valores pasados no son números
    else{
        console.log("ERROR\n\n");
        if(n1 && typeof(n1) !== 'number') console.log("'" + n1 + "' is not a number");
        if(n2 && typeof(n2) !== 'number') console.log("'" + n2 + "' is not a number");
        else if(!n1 && !n2) console.log("No numbers added")
    }
}

Calculator(0,0);