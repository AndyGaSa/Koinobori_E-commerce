// sonar: sonar-scanner.bat -D"sonar.projectKey=calculator-v2" -D"sonar.sources=." -D"sonar.host.url=http://localhost:9000" -D"sonar.login=0cafb0e50b9c0fe890846b70444f6003e8959ddc"

function calculator(param1, param2){

    let sum = param1 + param2;
    let rest = param1 - param2;
    let multiplication = param1 * param2;
    let division = param1 / param2;
    
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

            if (!Number.isInteger(sum)) {sum = sum.toFixed(3)}
                     
            if (!Number.isInteger(rest)) {rest = rest.toFixed(3)}
                     
            if (!Number.isInteger(multiplication)) { multiplication = multiplication.toFixed(3)}
                     
            if (!Number.isInteger(division)) {division = division.toFixed(3)}
        
               

return  console.log("RESULTS" + '\n'
        + "The result of the sum is: " + sum 
        + " \nThe result of the rest is: " + rest  
        + " \nThe result of the multiplication is: " + multiplication  
        + " \nThe result of the division is: " + division)
}

calculator(948,26.6);
