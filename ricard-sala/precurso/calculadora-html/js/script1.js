let currentValueArray = [];
let currentValueNumber = 0;
let a = null;
let b = null;
let operadores;
let resultado = 0;
let visor = (pantalla.textContent = "Sky lab");
let arrayOperadores = [];
let decimalesSiNO = false;
let arrayValues = [];
let deleteOnlyOne =[];
let buttonC = document.getElementById("btn-C");
buttonC.addEventListener("click", (event) => {
  borradoCompleto(event);
});
function borradoCompleto(event) {
   let borrar = event.target.innerHTML;

    arrayValues = [];
    currentValueArray = [];
    currentValueNumber = 0;
    a = null;
    operadores = "";
    b = null;
    operations();
    pantalla.textContent = "Sky lab";
    return borrar;
}
let buttonBackOne = document.getElementById("btn-CE");
buttonBackOne.addEventListener("click", (event) => {
  deleteOne(event);
});
function deleteOne(event) {
   let deleteOnlyOne = event.target.innerHTML;
    currentValueArray = currentValueArray.slice(0, currentValueArray.length - 1);
    currentValueNumber = currentValueArray.flat().join("");
    pantalla.textContent = currentValueNumber;
    return currentValueArray;
}
/* PENDIENTE DE MEJORA..
let buttonsimbol= document.getElementById('btn-masmenos');
buttonsimbol.addEventListener('click',(event)=>{
    changeSimbol(event);
});
function changeSimbol(event){
    simbol=event.target.innerHTML;
    currentValueArray = currentValueArray.unshift("-");
    currentValueNumber=currentValueArray.flat().join("");
    pantalla.textContent = currentValueNumber;
    console.log("borrar una sola",deleteOnlyOne)
    return currentValueArray;
}*/

let buttonNum = document.querySelectorAll(".btn-num");

buttonNum.forEach((item) => {
  item.addEventListener("click", (event) => {
    selectedNum(event);
  });
});
function selectedNum(event) {
    if (event.target.id === "btn-coma") {
        if (!currentValueArray.flat().includes(".")) {
        selectedNumLaVerdadera(event);
        }
    } else {
        selectedNumLaVerdadera(event);
    }
}
function selectedNumLaVerdadera(event) {
    let arrayValues = [];
    arrayValues.push(event.target.innerHTML);
    currentValueArray.push(arrayValues);
    currentValueNumber = currentValueArray.flat().join("");
    pantalla.textContent = currentValueNumber;
    return currentValueNumber;
}

let buttonOperator = document.querySelectorAll(".btn-op");
buttonOperator.forEach((element) => {
  element.addEventListener("click", (event) => {
    selectedOperartor(event);
  });
});
function selectedOperartor(event) {
    operadores = event.target.innerHTML;
    arrayOperadores.push(operadores);
    if (a === null) {
        a = Number(currentValueNumber);
        currentValueArray = [];
        currentValueNumber = 0;
    } else {
        b = Number(currentValueNumber);
        operations();
        a = resultado;
        arrayValues = [];
        currentValueArray = [];
        currentValueNumber = 0;
    }
    return operadores;
}
let operations = () => {
    switch (arrayOperadores[arrayOperadores.length - 2]) {
        case "+":
        resultado = a + b;
        pantalla.textContent = resultado;
        return resultado;
        case "-":
        resultado = a - b;
        pantalla.textContent = resultado;
        return resultado;
        case "x":
        resultado = a * b;
        pantalla.textContent = resultado;
        return resultado;
        case "÷":
        resultado = a / b;
        pantalla.textContent = resultado;
        return resultado;
        case "=":
        let igual = resultado;
        pantalla.textContent = igual;
        return igual;
    }
};
