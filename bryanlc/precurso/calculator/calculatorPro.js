let nuevoNum;
let listaNum = [];
function calculatorPro() {

    do {
      nuevoNum = prompt("Introduce un numero o presiona cancelar");
      numero = parseInt(nuevoNum);
      if(nuevoNum !==null){
        if(/^([0-9])*$/.test(nuevoNum) && Number.isInteger(numero)){
            listaNum.push(numero);
            }
            else{ 
            alert("introduce numeros"); 
            }
        }
      } while (nuevoNum!== null)

        if(listaNum.length===1){

          let rCuadrada = Math.sqrt(listaNum[0]);
          console.log("la raiz cuadrada de " + listaNum[0] + " es "+rCuadrada);

        }else{
          let suma = listaNum[0];
          let resta = listaNum[0];
          let multi = listaNum[0];
          let div = listaNum[0];
      
          for (let i = 1; i < listaNum.length; i++) {
      
            suma += listaNum[i];
            resta -= listaNum[i];
            multi *= listaNum[i];
            div /= listaNum[i];
      
          }
          console.log("la suma de los numeros es " + suma);
          console.log("la resta de los numeros es " + resta);
          console.log("la multiplicacion de los numeros es " + multi);
          console.log("la divison de los numeros es " + div);
        }

    let elec = confirm("hacer otras operaciones?");
    if(elec=== true){
   console.clear();
    calculatorPro();
    }else{
      alert("Adios!");
    }
    
}

console.log(listaNum);

calculatorPro();




