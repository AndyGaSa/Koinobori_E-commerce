
// Variable que almacena los números random del cartón de bingo. Los números random están delimitados por casillas para evitar repetidos y 
// mantener la uniformidad del cartón (los números van de menor a mayor de izquierda a derecha y de arriba a abajo, igual que en los cartones reales)
let bingoCard = {

    'FILA 1': [randomNumberCard(1, 5), randomNumberCard(16, 20), randomNumberCard(31, 35), randomNumberCard(46, 50), randomNumberCard(61, 65)],
    'FILA 2': [randomNumberCard(6, 10), randomNumberCard(21, 25), randomNumberCard(36, 40), randomNumberCard(51, 55), randomNumberCard(66, 70)],
    'FILA 3': [randomNumberCard(11, 15), randomNumberCard(26, 30), randomNumberCard(41, 45), randomNumberCard(56, 60), randomNumberCard(71, 75)]
}

// Asignamos los valores del array de cada línea a variables separadas para facilitar su acceso
let fila1 = bingoCard['FILA 1'];
let fila2 = bingoCard['FILA 2'];
let fila3 = bingoCard['FILA 3'];

// Variable let que almacena los números sacados en el bombo para evitar repetidos
let numArray = [];

// Estás tres variables let sirven como contador para marcar las casillas con "X"
let contadorLinea1 = 0;
let contadorLinea2 = 0;
let contadorLinea3 = 0;

// Variable let de tipo bool para verificar si se ha cantado línea o no, al cantar línea la función correspondiente reasignará el valor de linea a true
let linea = false;

// Variable let de tipo bool para verificar si se ha cantado bingo o no, al cantar bingo la función correspondiente reasignará el valor de linea a true
let bingo = false;

// Variable let de tipo bool para verificar si el usuario quiere seguir jugando o parar la partida
let newTurnCheck = true;

// Variable let para calcular la puntuación inicial y final del usuario
let score = 100;

//Variable let para calcular los turnos jugados
let turns = 0;

// Objeto variable let para guardar nombre de usuario y puntuación
let player = {Alias: "", Score: 0};

// Array de objetos guardado en variable let con la información del ranking por defecto
let ranking = [

    {Alias: "Neo", Score: 100},
    {Alias: "Vegeta", Score: 90},
    {Alias: "Hisoka", Score: 80},
    {Alias: "Claire Redfield", Score: 70},
    {Alias: "Terra Brandford", Score: 60},
    {Alias: "Eren Jaeger", Score: 50},
    {Alias: "Sauron", Score: 40},
    {Alias: "Kefla", Score: 30},
    {Alias: "Biscuit Krueger", Score: 20},
    {Alias: "Spike Spiegel", Score: 10}
];


// Función que genera un número aleator io entre 1 y 75 evitando repeticiones y almacenando los números no repetidos en el array global numArray
function randomNumber(){

    let min = 1;
    let max = 75;

    let num = Math.floor(Math.random() * (max - min + 1)) + min;

    if(max === 0){
        return 0;
    }else{
    
        if(!(numArray.includes(num))){
            
            numArray.push(num);
            return num;
        }
        else{
            return randomNumber();
        }
    }

} 

// Función para generar un número random para el cartón de bingo
function randomNumberCard(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para preguntar al usuario si quiere continuar jugando o parar el juego
function newTurn() {


    if (bingo === false) {

        let newTurn = confirm("¿Quieres continuar?");

        if (newTurn === true && bingo === false) {

            return "¡Seguimos para Bingo!";
                                        
        }   
            else {
                    console.log("Gracias por jugar. ¡Vuelva pronto!");

                    return newTurn;
            }    
    }    

}

// Función que muestra por consola las normas del juego 
function rules(){

    console.log("REGLAS DE SKYLAB BINGO: ");
    console.log("El Bingo generará automáticamente un cartón de juego para ti, si no te gusta tendrás la opción de crear uno nuevo hasta que estés satisfecho/a");
    console.log("Una vez tengas tu cartón, empezará la partida");
    console.log("Empezarás con la puntuación máxima, 100 puntos, los cuales se irán reduciendo según vayan pasando los turnos. Más turnos jugados menor será tu puntuación final");
    console.log("Para conseguir la partida perfecta deberás obtener Bingo en 15 turnos. A partir del 15º, irás perdiendo puntos hasta llegar al mínimo de 0");
    console.log("El juego se completará una vez hayas conseguido tachar todos los números de tu cartón, el jugador/a con mayor puntuación al final será el ganador/a");
    console.log("La puntuación final y ranking general aparecerán al final de cada partida");
    console.log("¡¡BUENA SUERTE!!");
}

// Función que pide, comprueba y guarda el nombre del usuario
function enterName() {

    player.Alias = prompt("¿Como te llamas?");

    if (player.Alias  === " " || player.Alias  === "") {

        alert("Necesitamos que nos proporciones tu nombre para que puedas participar en el Bingo.");

        return enterName();
        } else {
                console.log(`Bienvenido ${player.Alias } este es tu cartón de bingo:`);
                ranking.push(player);
                return player.Alias;
               }    
}



// Función que pregunta al usuario si quiere generar un nuevo cartón. La función continua preguntando hasta que el usuario acepta el cartón generado
function reloadTheCard(){

    let changeCard = true; 
    console.table(bingoCard);

    do {
        changeCard = confirm("¿Te gusta el cartón que te ha tocado, o prefieres cambiarlo? (Si = Mantener cartón / No = Cambiar cartón)");

        if (!changeCard) {

            bingoCard = {

                'FILA 1': [randomNumberCard(1, 5), randomNumberCard(16, 20), randomNumberCard(31, 35), randomNumberCard(46, 50), randomNumberCard(61, 65)],
                'FILA 2': [randomNumberCard(6, 10), randomNumberCard(21, 25), randomNumberCard(36, 40), randomNumberCard(51, 55), randomNumberCard(66, 70)],
                'FILA 3': [randomNumberCard(11, 15), randomNumberCard(26, 30), randomNumberCard(41, 45), randomNumberCard(56, 60), randomNumberCard(71, 75)]
            }
            console.log("Cartón rechazado. Generando nuevo cartón...");
            console.table(bingoCard);
        }   
            else {
                    console.log("¡Cartón aceptado!");   
            }

    } while (changeCard === false); 


    return bingoCard;
}

function finalScoreRanking(ranking) {

    let rankingPosition = ranking.sort((a,b) => b.Score - a.Score);
    scoreMessage(turns);
    console.log("Este es el ranking con los 10 mejores jugadores:");
    console.table(rankingPosition);

    return rankingPosition;
}



// Función para generar número random, mostrarlo por pantalla y determinar si el número sacado coincide con los del cartón y de ser así los sustituya por "X"
function numberMatching() {

   let numeroGenerado = randomNumber();

   if (bingo === false) {

    console.log("Vamos con el número... ");
    console.log(numeroGenerado);

        for (let i = 0; i < fila1.length; i++) {

                if (numeroGenerado === bingoCard['FILA 1'][i]) {

                    bingoCard['FILA 1'][i] = "X";
                    console.log("¡HAS ENCONTRADO UN NÚMERO!");
           
                    if (bingoCard['FILA 1'][i] === "X") {
                        contadorLinea1++;
                    }   
                        if (contadorLinea1 === 5 && linea === false) {
                            console.log("¡¡¡¡LINEAAAAAAAAAAAAAAAAAAAAAAAA!!!!");
                            linea = true;

                            if (turns < 50) {
                                console.log("Has ganado 20 puntos, por conseguir línea en menos de 50 turnos");
                                score = score + 20;
                            }
                        }


                }
       
        }

        for (let j = 0; j < fila2.length; j++) {

            if (numeroGenerado === bingoCard['FILA 2'][j]) {

                    bingoCard['FILA 2'][j] = "X";
                    console.log("¡HAS ENCONTRADO UN NÚMERO!");

                    if (bingoCard['FILA 2'][j] === "X") {
                        contadorLinea2++;
                    }   
                        if (contadorLinea2 === 5 && linea === false) {
                            console.log("¡¡¡¡LINEAAAAAAAAAAAAAAAAAAAAAAAA!!!!");
                            linea = true;

                            if (turns < 50) {
                                console.log("Has ganado 20 puntos, por conseguir línea en menos de 50 turnos");
                                score = score + 20;
                            }
                           }
            }       
            }

            for (let k = 0; k < fila3.length; k++) {

                if (numeroGenerado === bingoCard['FILA 3'][k]) {

                    bingoCard['FILA 3'][k] = "X";
                    console.log("¡HAS ENCONTRADO UN NÚMERO!");

                    if (bingoCard['FILA 3'][k] === "X") {
                        contadorLinea3++;
                    }   
                        if (contadorLinea3 === 5 && linea === false) {
                            console.log("¡¡¡¡LINEAAAAAAAAAAAAAAAAAAAAAAAA!!!!");
                            linea = true;
                            
                            if (turns < 50) {
                                console.log("Has ganado 20 puntos, por conseguir línea en menos de 50 turnos");
                                score = score + 20;
                            }
                           }

                }
            }

            console.table(bingoCard); 
    }
    
}

// Función que se activa al cantar bingo verificando si las 3 lineas están tachadas. De estarlo se invoca el ranking y a la función NewGame para reiniciar el juego 
function weAreInTheEndGameNow() {

    if (contadorLinea1 === 5 && contadorLinea2 === 5 && contadorLinea3 === 5) {
        console.log("BINGOOOOOO!!!!!!!!!!!!!");
        bingo = true;
        finalScoreRanking(ranking);
        return console.log("Muchas gracias por jugar. Esperamos que vuelvas pronto.");
    }

}
// Función para preguntar al usuario si quiere reiniciar el juego, de aceptar se volvería a invocar la función Bingo y el juego volvería a empezar
function newGame() {

    let doYouWantToPlayAgain = confirm("¿Quieres volver a jugar?");

    if (doYouWantToPlayAgain === true) {

        console.clear();
        bingo = false;
        contadorLinea1 = 0;
        contadorLinea2 = 0;
        contadorLinea3 = 0;
        bingoCard = {

            'FILA 1': [randomNumberCard(1, 5), randomNumberCard(16, 20), randomNumberCard(31, 35), randomNumberCard(46, 50), randomNumberCard(61, 65)],
            'FILA 2': [randomNumberCard(6, 10), randomNumberCard(21, 25), randomNumberCard(36, 40), randomNumberCard(51, 55), randomNumberCard(66, 70)],
            'FILA 3': [randomNumberCard(11, 15), randomNumberCard(26, 30), randomNumberCard(41, 45), randomNumberCard(56, 60), randomNumberCard(71, 75)]
        }

        bingoGame();

        return bingoCard;
        
    }
        else {
            return bingo = true;
        }

}

function scoreMessage(turns) {

    console.log(`${player.Alias} has completado el Bingo en ${turns} turnos`);
    console.log(`Tu puntuación final es de ${score.toFixed(2)} puntos`);
    
    return score;
}

// Función principal que inicia el juego invocando al resto de funciones creadas según su orden de aplicación
function bingoGame() {

    rules(); 

   enterName(); 

    reloadTheCard();
 
        do {

            weAreInTheEndGameNow();

            numberMatching();

            if (newTurn() === false) {

                break;

            } else {

                turns++;
            } 
            
                if (turns > 15) {

                    score = score - 1.5;
                    player.Score = Math.floor(score);
                }


            if (bingo === true) {

                if (newGame() !== bingoCard) {

                    bingo = true;
                }
            }
            
        } 
            while (bingo === false);

    
}


bingoGame();
