/**
 * Realiza un programa que simule un Bingo.
 * pedirá el nombre del jugador y deberá guardarse.
 * Se mostrará un cartón con 15 números no repetidos.
 * forma amigable de mostrar el cartón.
 * Para pasar al siguiente turno el usuario deberá confirmar.
 * Si coincide con alguno de los existentes en el cartón, cambiará por una "X".
 * El cartón se mostrará al final de cada turno, con los cambios efectuados, indicando al usuario qué número se ha encontrado.
 * El programa deberá preguntar al usuario al inicio de cada turno si desea continuar
 * cuando todos los números de una misma línea sean "X", mostrará un mensaje "LÍNEA!"
 * el juego solo acabará cuando todos los números estén a "X"
 * solamente se puede cantar línea 1 vez
 * Cuando el juego concluya, deberá decirle al usuario en cuantos turnos se ha completado el cartón.
 * Por último, deberá preguntar si desea volver a jugar.
 * Cuando se muestre la carta, se preguntará al usuario si realmente quiere ese cartón o generar otro
 * Establece un sistema de puntos
 * antes de empezar el juego, muestra el sistema de puntos al usuario.
 * Ranking de usuarios (ordenado por puntos).
 */
let carton = {};
let rows = 3;
let columns = 5;
let xNumbers = [];
let lineaCantada = false;
let bingoCantado = false;
let gameCounter = 0;
let userName;
let pointSystem = {
  "puntos iniciales": 100,
  "por cada acierto": +10,
  "por cada fallo": -2,
  linea: 30,
  bingo: 50,
};
let points = 100;
let ranking = [
  ["Manuel", 215],
  ["Jordi", 60],
  ["Laura", 95],
  ["Maria", 83],
  ["Sergio", -10],
];
let numbersOutBingo = [];
let numbersOutCarton = [];

bingo();

function restart() {
  let playAgain = window.prompt("¿Quieres volver a jugar?");
  if (playAgain == "yes" || playAgain == "si" || playAgain == "y") {
    bingo();
  }
}

function restartValues() {
  carton = {};
  xNumbers = [];
  lineaCantada = false;
  bingoCantado = false;
  gameCounter = 0;
  points = 100;
  numbersOutBingo = [];
  numbersOutCarton = [];
}

function bingo() {
  restartValues();
  usuario();
  pointTable();
  generateCarton();
}

function usuario() {
  userName = window.prompt("¿Como te llamas?");
  window.alert(`Bienvenido ${userName}`);
}

function pointTable() {
  console.table(pointSystem);
}

function compare(a, b) {
  if (a[1] < b[1]) {
    return 1;
  }
  if (a[1] > b[1]) {
    return -1;
  }
  return 0;
}

function printRanking() {
  ranking.sort(compare);
  console.table(ranking);
}

function generateCarton() {
  for (let i = 0; i < rows; i++) {
    carton["linea " + i] = [];
    for (let j = 0; j < columns; j++) {
      carton["linea " + i].push(checkNumberCarton());
    }
  }
  printCarton(carton);

  let otherCarton = window.confirm("¿Quieres un carton diferente?");

  if (otherCarton) {
    numbersOutCarton = [];
    return generateCarton();
  } else {
    newPhase(carton);
  }
}

function printCarton(numberList) {
  console.table(numberList);
}

function newNumber() {
  return parseInt(Math.random() * 100 + 1);
}

function checkNumber(numbersOut, number) {
  return numbersOut.some(function (numberCheck) {
    return number === numberCheck;
  });
}

function checkNumberCarton() {
  let number = newNumber();
  if (checkNumber(numbersOutCarton, number)) {
    return checkNumberCarton();
  } else {
    numbersOutCarton.push(number);
    return number;
  }
}

function checkNumberBingo() {
  let number = newNumber();
  if (checkNumber(numbersOutBingo, number)) {
    return checkNumberBingo();
  } else {
    numbersOutBingo.push(number);
    return number;
  }
}

function newPhase(numberList = {}) {
  points -= 2;
  let number = checkNumberBingo();
  console.log(number);
  gameCounter++;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (numberList["linea " + i][j] == number) {
        points += 10;
        xNumbers.push(number);
        console.log(`Has tenido suerte, el numero ${number} ha salido`);
        numberList["linea " + i][j] = "x";
        console.log(`ya tienes los numeros ${xNumbers}`);
        printCarton(numberList);
        if (!lineaCantada) {checkLinea(numberList)}
        checkBingo(numberList);
      }
    }
  }
  if (bingoCantado) {
    window.alert(`Has completado el Bingo en ${gameCounter} tiradas`);
    window.alert(`Tu score es de ${points} puntos`);
    let userRanking = [userName, points];
    ranking.push(userRanking);
    printRanking();
    restart();
  } else {
    if (window.confirm("¿Quieres probar de nuevo?")) {
      return newPhase(numberList);
    } else {
      window.alert("Adios!!");
    }
  }
}

function checkHLine(numberList){
  let linea = 0;
  for (let i = 0; i < rows; i++) {
    linea = 0;
    for (let j = 0; j < columns; j++) {
      if (numberList["linea " + i][j] == "x") {
        linea++;
      }
      if (linea == columns) {
        console.log("linea!");
        lineaCantada = true;
        points += 30;
      }
    }
  }
}
function checkVLine(numberList){
  let columna = 0;
  for (let i = 0; i < columns; i++) {
    columna = 0;
    for (let j = 0; j < rows; j++) {
      if (numberList["linea " + j][i] == "x") {
        columna++;
        if (columna == rows) {
          console.log("linea!");
          lineaCantada = true;
          points += 30;
        }
      }
    }
  }
}

function checkLinea(numberList) {
  if (!lineaCantada) {
  checkHLine(numberList)
  checkVLine(numberList)
  
}
}
function checkBingo(numberList) {
  let counter = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (numberList["linea " + i][j] == "x") {
        counter++;
      }
      if (counter == columns * rows) {
        console.log("Bingo!!");
        bingoCantado = true;
        points += 50;
      }
    }
  }
}
