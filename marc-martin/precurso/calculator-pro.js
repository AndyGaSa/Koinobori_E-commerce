  function Sum() {
       
        let resultSum = 0;
        
                for (let i = 0; i < savedArray.length; i++) {resultSum += savedArray[i];}

                if(!Number.isInteger(resultSum)) resultSum = resultSum.toFixed(3);
                
        return resultSum;
}
    
function Rest() {
    
        let resultRest = 0;
        
        for (let i = 0; i < savedArray.length; i++) {resultRest = savedArray[i]*(-1) - resultRest;}

        if(!Number.isInteger(resultRest)) resultRest = resultRest.toFixed(3);
    
        return resultRest;
} 
  
    
function Multiply() {
    
        let resultMultiplication = savedArray.reduce((p,c) => p*c);

        if(!Number.isInteger(resultMultiplication)) resultMultiplication = resultMultiplication.toFixed(3);
    
        return resultMultiplication;
} 
    
    
function Div() {
        
        let resultDivision = savedArray.reduce((p,c) => p/c); 

        if(!Number.isInteger(resultDivision)) resultDivision = resultDivision.toFixed(3);
    
        return resultDivision;
}

function SquareRoot(){
        
        let squareRootResult = Math.sqrt(savedArray[0]);

        if (savedArray.length === 1){
    
                if(!Number.isInteger(squareRootResult)) {squareRootResult = squareRootResult.toFixed(3);}
    
                        return "RESULT: Square root of the first parameter: " + squareRootResult;
    
                } else {
                        console.log("Square root NOT calculated as the array has more than 1 parameter");
                        }
    
        return squareRootResult;
}   

function RequestNumbers(){

        let newNumber = 0;
        let savedArray = [];
    
        do {
                newNumber = prompt('Enter a number or press cancel to stop');
                
                if (!isNaN(parseFloat(newNumber)) && isFinite(newNumber)) {
                        newNumber = newNumber.trim();
                        newNumber = parseFloat(newNumber);
                        savedArray.push(newNumber);
                                              } else console.log("NO VALID NUMBER!!");
                } while (newNumber !== null);   
                  
        return savedArray;
    }  

    let savedArray = RequestNumbers();
    
function CalculatorPro() {

        let finalSquareRoot = SquareRoot();
        let finalSum = Sum();
        let finalRest = Rest();
        let finalMultiplication = Multiply();
        let finalDivision = Div();
    
        if (!savedArray[1]){
    
                console.log(finalSquareRoot);
        } else {
                
                console.log("RESULTS:");
                console.log("The result of the sum is: " + finalSum); 
                console.log("The result of the rest is: " + finalRest); 
                console.log("The result of the multiplication is: " + finalMultiplication); 
                console.log("The result of the division is: " + finalDivision);
        }
        
          let repeatLoop = confirm("New numbers?");
            
            switch (repeatLoop){
    
                    case true : 
                            savedArray.splice(0);
                            console.clear();
                            savedArray = RequestNumbers();
                            CalculatorPro();
                            break;
                
                    case false : 
                            console.log("Bye!"); 
                            break;
                
                    default: break;
                }
}

CalculatorPro();


