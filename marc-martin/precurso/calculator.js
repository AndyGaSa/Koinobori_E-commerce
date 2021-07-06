function calculator(param1, param2){

    let sum = param1 + param2;
    let rest = param1 - param2;
    let multiplication = param1 * param2;
    let division = param1 / param2;
    let arrayResultados = [sum, 
                           rest, 
                           multiplication, 
                           division];
    
        if(typeof param1 !== 'number' && typeof param2 !== 'number'){
                return "ERROR, NO NUMBERS DETECTED";
                    }
                    else if (typeof param1 === 'number' && typeof param2 !== 'number'){
                       param1 = Math.sqrt(param1);
                       return "Square root of parameter 1: " + param1.toFixed(3);

                    }else if (typeof param1 !== 'number' && typeof param2 === 'number'){
                        param2 = Math.sqrt(param2);
                        return "Square root of parameter 2: " + param2.toFixed(3);
                    }

            if (Number.isInteger(sum)) {sum} sum = sum.toFixed(3);
                     
            if (Number.isInteger(rest)) {rest} rest = rest.toFixed(3);
                     
            if (Number.isInteger(multiplication)){multiplication}  multiplication = multiplication.toFixed(3);
                     
            if (Number.isInteger(division)) {division} division = division.toFixed(3);
        
                for (i = 0; i < arrayResultados.length; i++){

                    console.log(`Results stored in the array: ${arrayResultados}`);}

return  "RESULTS" + "\n"
        + " The result of the sum is: " + sum + "\n"
        + " The result of the rest is: " + rest + "\n" 
        + " The result of the multiplication is: " + multiplication + "\n" 
        + " The result of the division is: " + division + "\n";
}

calculator(948,26.6);
