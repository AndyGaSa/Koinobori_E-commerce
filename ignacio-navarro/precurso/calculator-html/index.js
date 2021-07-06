let numberButtons = Array.from(document.getElementsByClassName("numbers"));
let symbolButtons = Array.from(document.getElementsByClassName("symbol"));
let resultElm = document.getElementById('screen');
let deleteLastButton = document.getElementById("delete")
let deleteAllButton = document.getElementById("deleteAll");
let finalOperation = document.getElementById("finalOperation")
let plusminus = document.getElementById("changeSign");
let firstNumber = null;
let clearOnNextInput = false;
let operation = null;

numberButtons.forEach(element=>{element.addEventListener("click",updateOperator)});
symbolButtons.forEach(element=>{element.addEventListener("click",updateOperation)});
deleteLastButton.addEventListener("click",deleteLast);
deleteAllButton.addEventListener("click",deleteAll);
finalOperation.addEventListener("click",computeResult);
plusminus.addEventListener("click",changeSign);

function deleteLast(){
    resultElm.innerText = resultElm.innerText.slice(0, -1);
    if (resultElm.innerText.length == 0){
      resultElm.innerText = "0";
    }
 }

function changeSign(){
  let number = parseFloat(resultElm.innerText);
  let modifiedNumber = -number;
  resultElm.innerText= modifiedNumber;  
}

//----------LIMPIEZA TOTAL--------//

function deleteAll(){
  firstNumber = null;
  let secondNumber = null;
  operation = null;
  resultElm.innerText = "0";
}

//---- RESULTADO OPERACION-----//

function computeResult(){
  
  if (firstNumber && operation && !isNaN(resultElm.innerText)){
    let operators ={ 
    "+" : (a, b) => a + b,
    "-" : (a, b) => a - b,
    "x" : (a, b) => a * b,
    "/" : (a, b) => a / b,
    }
  
    firstNumber = parseFloat(firstNumber);
    let secondNumber = parseFloat(resultElm.innerText);
    let expression = operators[operation];
    let ressult = expression(firstNumber, secondNumber);
    let roundedRessult = (Math.round(ressult*1000))/1000
    if (roundedRessult.toString().length > 9){
        roundedRessult = "error"
    }
    resultElm.innerText = roundedRessult;
    operation = null;
    firstNumber = null;
    clearOnNextInput = true;  
    }
}
  

//-------- OPERADORES---------//

function updateOperation(event){
  if (firstNumber && operation && !isNaN(resultElm.innerText)){
    computeResult();
  }
  operation = event.target.innerText;
}

//------- INGESTA DE DATOS -------//

function updateOperator(event){
  let number = event.target.innerText;
  
  //--------OPERACION CON PREVIA------//
  
  if(!firstNumber && operation && clearOnNextInput){
    clearOnNextInput = false;
    
  }
  
  //-------- TRIGER PARA LIMPIAR CONTENIDO ----------// 
  
  if (clearOnNextInput) {
        deleteAll();
        clearOnNextInput = false;
  }
  
  //-------- CASOS DE CERO ----------// 
  
  if (resultElm.innerText === "0") {
      resultElm.innerText = "";
  }
    
  //-------- PRIMERA OPERACION ----------// 
  
  if (!firstNumber && operation){
    firstNumber = resultElm.innerText;
    resultElm.innerText = '';
  }
  
  //-------- CASOS DE COMA ----------// 
  
  if (event.target.innerText == ","){
    number = "."
    if (resultElm.innerText[0] == "." || resultElm.innerText == ""){
      let comaNumber = "0".concat(resultElm.innerText);
      resultElm.innerText = comaNumber;
    }
    if (resultElm.innerText.includes(".")){
     number = "";
    } 
  }
  
  //-------- TOPE DE CARACTERES ----------// 
  
  if (resultElm.innerText.length > 9){
    number = "";
  }
  resultElm.innerText += number;
}

