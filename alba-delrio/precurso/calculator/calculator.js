// calculator
let calculator = function (num1,num2){
    if(typeof num1 !== 'number' && typeof num2 !== 'number'){
        return "These elements are not numbers. Please insert at least one number, thank you!.";
    }else if (typeof num1 === 'number' && typeof num2 !== 'number'){
       return square(num1);
    }else if (typeof num1 !== 'number' && typeof num2 === 'number'){
        return square(num2);
    }else{
      return "Results:"+"\n" + multiplication(num1,num2)+"\n"+ addition(num1,num2)+"\n"+division(num1,num2)+"\n"+ rest(num1,num2);
    }
    
  }
  
  
  console.log(calculator(6,7.098765));
  
  //Calculator's functions
  
  function square(num){
    let resultSquare;
    resultSquare = num*num;
    if(resultSquare%1!==0){
      resultSquare = resultSquare.toFixed(3);
    }
      return "The result of the square root is" +" "+ resultSquare + ".";
  }
  
  function multiplication (num1,num2){
    let resultMul;
    resultMul= num1*num2;
    if(resultMul%1 !==0){
      resultMul= resultMul.toFixed(3);
   }
     return "The result of the multiplication is"+" "+ resultMul +".";
  }
  
  function addition (num1, num2){
    let resultSum;
    resultSum= num1+num2;
    if(resultSum%1!==0){
      resultSum= resultSum.toFixed(3);
    }
      return "The result of the sum is"+" "+ resultSum +".";
    
  }
  function division (num1, num2){
    let resultDiv;
    resultDiv= num1/num2;
    if(resultDiv%1!==0){
      resultDiv= resultDiv.toFixed(3);
    }
      return "The result of the division is"+" "+ resultDiv+".";
  }
  
  function rest (num1, num2){
    let restResult;
    restResult = num1-num2;
    if(restResult%1 !== 0){
      restResult= restResult.toFixed(3);
    }
      return "The result of the rest is" +" "+ restResult+".";
  }