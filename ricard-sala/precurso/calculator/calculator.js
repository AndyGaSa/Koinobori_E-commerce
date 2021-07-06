//CALCULATOR
let n1;
let n2;
// declaramos dos variables let para los numeros que queremos que el usuario nos de 
do{
n1 = parseFloat(prompt(`buenos dias introduce un numero`));//pedimos un valor al usuarioy almacenamos en n1

if (isNaN(n1)){
  alert(`Formato incorrecto`)
  } else if(!n1){
    alert(`deves introducir un valor`);
  //si n1 no es un Number damos el mensage de que no es un formato correcto o que debe introducir un valor
}else{
   n2 = prompt(`ahora introduce el segundo numero`);// lo mismo en n2
if (isNaN(n2))
    {alert(`Formato incorrecto`)}; 
}
} while (isNaN(n1)||isNaN(n2));// igualamos parametros en n1 y n2

if (!n2){ //if (n2 == null || n2 == ""){ esta opcion fue mi primera alternativa pero la otra engloba todo a mi parecer
let squareRoot = Math.round(Math.sqrt(n1)*1000)/1000;// damos que si no damos ningun valor a n2 aga la raiz de n1 
console.log(`la raiz cuadrada es ${squareRoot}`);
} else {
n2 = parseFloat(n2);// en caso de dar un valor valido a n2 seguimos

function calculator(num1,num2){ //hacemos la funcion para las operaciones matematicas y con (*1000)/1000; redondeamos a 3 dijitos 
    let resultados=[];
      
     const suma = Math.round((num1 + num2) * 1000) / 1000;
       resultados.push(`el resultado de la suma es: ${suma}`);
     const resta = Math.round((num1 - num2) * 1000) / 1000;
       resultados.push(`el resultado de la resta es:${resta}`);
     const multiplicación = Math.round((num1 * num2) * 1000) / 1000;
       resultados.push(`el resultado de la multiplicación es: ${multiplicación}`)
     const división = Math.round((num1 / num2) * 1000) / 1000;
       resultados.push(`el resultado de la división es: ${división}`);
       


for (let i = 0; i < resultados.length; i++) {
  console.log(resultados[i]);
  //pedimos los resultados por consola 
}  
}
calculator(n1,n2);
}