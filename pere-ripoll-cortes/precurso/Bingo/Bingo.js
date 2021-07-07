//Funciones globales:
let valoresUsadosBombo = [];
let contador = 1; 
const jugadores = {
  "jugador1":{
    "Nombre":"Pere Ripoll",
    "Puntuación": 1000
  }
}

//Inicio Programa
bingo();

function bingo() {
  valoresUsadosBombo = [];
  contador++;
    console.table(jugadores);
    let check = false; 
    let carton;
    let verify;

    //Solicitar credenciales:
    let nombre = login();
    jugadores["jugador"+contador]={"Nombre":nombre, "Puntuación":1000}
    console.log("Usuarios registrados:");
    console.table(jugadores);

    do {
      //Generar carton de juego:
      carton = gcarton();
      console.table(carton);

      verify = prompt("Le gusta este carton? yes/no");
      if (verify.toLowerCase().localeCompare("yes") === 0) {
        console.log("Carton aceptado!");
        check = true;
      }else if (verify.toLowerCase().localeCompare("no") === 0){
        console.log("Cambiamos carton");
        carton = gcarton();
        console.table(carton);
      }else{
        alert("Error!, valor no aceptable");
      }

    } while (!check);

    check = false;
    let checkLinia = false;
    let numBombo;
    let linia;
    let bingoCarton;
    do {
      //Generamos el numero del bombo
      numBombo = numberoBombo();
      console.log("El numero que ha salido és: " + numBombo);

      //Se revisa si hay linia. Si no se restan 5 puntos
      if (!checkLinia) {
        linia = hayLinia(carton);
        console.log(linia);
        if(linia.indexOf(5) !== -1){
          console.log("Linia!!!");
          checkLinia = true;
        }else{
          jugadores["jugador"+contador]["Puntuación"] = jugadores["jugador"+contador]["Puntuación"] - 5;
        }
      }
      
      //Se revisa si hay Bingo, si no se restan 2 puntos.
      bingoCarton = hayLinia(carton);
      console.log(bingoCarton);
      if(bingoCarton[0] === 5 && bingoCarton[1] === 5 && bingoCarton[2] === 5){
        console.log("BINGOOOO!");
        check = false;
        bingo();
      }else{
        jugadores["jugador"+contador]["Puntuación"] = jugadores["jugador"+contador]["Puntuación"] - 2;
      }

      //Se muestra la puntuación actual del jugador:
      console.log("La puntuación actual de " + nombre + " es " + jugadores["jugador"+contador]["Puntuación"]);


      //Se revisa si el numero del bombo (numBombo) esta en el carton
      revisarCarton(carton, numBombo);
      console.table(carton);

      //Se pregunta al usuario si quiere continuar.
      check = !window.confirm("Lanzar otra bola?");

    } while (!check);

    let juagarDeNuevo;
    juagarDeNuevo = confirm("Se ha terminado la partida. Quieres utilizar otro usuario?");
    if(juagarDeNuevo){
      bingo();
    }else{
      console.log("Cerrando el programa...")
    }

}

//Función para pedir los datos del usuario
function login() {
    let check = false;
    let verificacion; 

    //Se pide el nombre al usuario
    let nombre = prompt("Bievenido al Bingo \n" + 
    "Por favor introduzca su nombre:");

    //Bucle do... while para verificar si el nombre introducido es correcto
    do {
        verificacion = prompt("Su nombre es: " + nombre + " ?  y/n");
        if (verificacion.toLowerCase().localeCompare("y") === 0) {
            console.log("Bienvenido " + nombre);
            check = true;
        }else if (verificacion.toLowerCase().localeCompare("n") === 0){
            console.log("Valor introducido incorrecto!");
            check = true;
            login();
        }else{
            alert("Error!, valor no aceptable");
        }

    } while (!check);

    return nombre;
}

//Función para generar un carton.
function gcarton() {
  const carton = {
    fila1:{
      col1:undefined,
      col2:undefined,
      col3:undefined,
      col4:undefined,
      col5:undefined
    },
    fila2:{
      col1:undefined,
      col2:undefined,
      col3:undefined,
      col4:undefined,
      col5:undefined
    },
    fila3:{
      col1:undefined,
      col2:undefined,
      col3:undefined,
      col4:undefined,
      col5:undefined
    }
  }


    let valoresUsados = [];
    let generarValor;
    let check = false;

    for (const fila in carton) {
        for (const col in carton[fila]) {
          generarValor = parseInt((Math.random()*100).toFixed(0));
          do {
            for (let j = 0; j < valoresUsados.length; j++) {
              if(generarValor === valoresUsados[j] || generarValor === 0){
                generarValor = parseInt((Math.random()*100).toFixed(0));
              }
            }
            valoresUsados.push(generarValor);
            check = true;
          } while (!check);
          carton[fila][col] = generarValor;
        }
      }
    
    return carton;
}

//Función que generara el número del bombo
function numberoBombo(params) {
  let check = false;
  let nuevoValor;
  do {
    nuevoValor = parseInt((Math.random()*100).toFixed(0));
    for(let i = 0; i < valoresUsadosBombo.length; i++){
      if(nuevoValor === valoresUsadosBombo[i]){
        nuevoValor = parseInt((Math.random()*100).toFixed(0));
      }
    }
    check = true;

  } while (!check);
  valoresUsadosBombo.push(nuevoValor);
  return nuevoValor;
}

//Funcion para comparar los valors del objeto carton con el valor "random" del numbombo
function revisarCarton(obj, num) {
  for (const fila in obj) {
    for (const col in obj[fila]) {
      if(obj[fila][col] == num){
        obj[fila][col] = "X";
      }
    }
  }
}

function hayLinia(carton){
  let linia = [0,0,0];
  for(const fila in carton){
      for(const col in carton[fila]){
          if (fila.localeCompare("fila1")==0) {
              if (carton[fila][col]=="X") {
                  linia[0]++;
              }
          }

          if (fila.localeCompare("fila2")==0) {
              if (carton[fila][col]=="X") {
                  linia[1]++;
              }
          }

          if (fila.localeCompare("fila3")==0) {
              if (carton[fila][col]=="X") {
                  linia[2]++;
              }
          }


      }
  }
  return linia;
}