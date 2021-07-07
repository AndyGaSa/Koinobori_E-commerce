const card = [ //Empezamos creando un array con tantos elementos (también arrays) como líneas tendrá el cartón de bingo
    [],
    [],
    []
];
const gotIt = []; //En este array vacío se almacenarán los nº que ya estén en el cartón para evitar duplicados
let number; // Esta variable almacenará el valor de los nº (para crear el cartón y para las rondas)
const alreadyCalled = []; //Este array almacenará los nº que ya hayas salido para que no vuelvan a salir 
let newRound = true; // Mientras el usuario quiera seguir jugando este bool será true, si no quiere seguir la partida será false
let line = false; // Este bool servirá para saber que ya se ha cantado líne y que no ocurra más de 1 vez
let line1 = 0, //Las siguientes 3 variables servirán de contador para saber cuántos nº se han tachado en cada línea
    line2 = 0,
    line3 = 0;
let endGame = false; // Este bool servirá para saber si el usuario ya ha cantado bingo
let round = 0; //Contador de rondas
let points = 100; //Puntuación del usuario
const ranking = [ //Este array tiene las puntuaciones más altas registradas
    { player: 'Lídia', points: 91 },
    { player: 'Marc', points: 84 },
    { player: 'Pedro', points: 80 },
    { player: 'Cris', points: 78 },
    { player: 'Anna', points: 74 },
    { player: 'Julián', points: 72 },
    { player: 'Raquel', points: 67 },
    { player: 'Alba', points: 65 },
    { player: 'Rodri', points: 61 },
    { player: 'Alex', points: 55 },
];
const user = { player: '', points: '' }; //Datos del usuario (nombre y puntuación)


function bingo() { //La función principal del juego
    user.player = prompt('¡Hola! ¿Cómo te llamas?'); //1º pide el nombre del usuario
    rules(); //A continuación explica las normas
    game(); //Finalmente ejecuta el juego
}

function rules() { //Las reglas se explican mediantes distintos alerts
    alert(`¡Hola, ${user.player}! A continuación jugarás una partida de bingo.`);
    alert('Para empezar, se te ofrecerá un cartón con 15 números entre el 1 y el 100. ' +
        'Si no te gustan esos números, podrás elegir un nuevo cartón con 15 números nuevos.')
    alert('En cada turno saldrá un número. Si está en tu cartón, se tachará. ' +
        'La 1a vez que taches los 5 números de la misma línea obtendrás \'línea\', si lo consigues en menos de 20 rondas ganarás 10p. ' +
        'Cuando los taches todos tendrás \'Bingo\'.');
    alert('Empezarás con una puntuación de 100 puntos, por cada número que salga que no tengas, perderás 1 punto. ' +
        'Al final de la partida, podrás ver si estás entre los 10 mejores jugadores.');
}

function game() { //El juego
    askForCard(); // Función para obtener el cartón de nº

    do { //Mientras el usuario quiera seguir jugando y no haya finalizado la partida seguirá el juego
        checkResults(); //Función para obtener un número y compararlo con el cartón
        if (!line) {
            linea(); //Mientras no se haya cantado línea esta función comprueba si se cumple este evento
        }
        gameOver(); //Función para comprobar si ha terminado la partida
        if (endGame === false) { //En caso de que no haya terminado, se pregunta si se quiere seguir jugando
            newRound = window.confirm('¿Jugar otra ronda?')
        } else { //Si la partida termina, se informa al usuario indicando el nº de turnos que se ha tardado y ejecuta la función del ranking
            alert(`¡Enhorabuena! ¡Has cantado bingo en ${round} turnos!`)
            showRanking();
        }

    } while (newRound && !endGame);

    newGame(); //Al finalizar, se da la opción de empezar una partida nueva
}

function askForCard() { //Función para confirmar los nº:
    let cardConfirmed = false; //Este bool indica si el usuario ha confirmado jugar ese cartón
    do {
        createCard(); //Función para crear un cartón nuevo
        console.table(card); //Muestra el cartón al usuario
        cardConfirmed = window.confirm('¿Quieres jugar con estos números?'); //Solicita al usuario si quiere jugar esos nº

    } while (!cardConfirmed); //Se repetirá esta función hasta que el usuario decida jugar el cartón obtenido


}

function createCard() { //Función para crear el cartón:
    /* En el array gotIt se almacenan los nº que ya han aparecido en el cartón para evitar que se repitan.
    Por eso, al generar un nuevo cartón (si el usuario no quiere esos nº o si empieza una partida nueva) hay que borrar los elementos 
    de este array para que puedan volver a salir */
    if (gotIt.length > 0) {
        gotIt.splice(0, gotIt.length); //Vaciado del array gotIt
    }

    for (let i = 0; i < 3; i++) { //Dos loops anidados recorren las posiciones del cartón para almacenar los nº a jugar
        for (let j = 0; j < 5; j++) {
            function newNumber() { //Función para generar los nº 
                let numberLocal = Math.round(Math.random() * 99) + 1; // Se obtiene un nº aleatorio entre el 1 y el 100
                if (gotIt.includes(numberLocal)) { //Si ese nº ya ha salido, se obtiene un nº nuevo
                    newNumber();
                } else {
                    card[i][j] = numberLocal; //Si no ha salido, se almacena en la posición actual del cartón
                    gotIt.push(numberLocal); //Se incluye el nº en gotIt para evitar que vuelva a salir
                }
            }

            newNumber();
        }

    }

}

function generateNumber() { //Función para generar el nº de cada ronda
    number = Math.round(Math.random() * 99) + 1; //Se genera un nº aleatorio entre 1 y 100
}

function currentNumber() { //Función para evaluar si el nº de cada ronda ya ha salido:
    generateNumber(); //Generar un nº
    if (alreadyCalled.includes(number)) { //Si el nº ya ha salido se genera uno nuevo
        currentNumber();
    } else {
        alreadyCalled.push(number); //Si no había salido se almacena en el array alreadyCalled para que no se repita
    }

}

function checkResults() { //Función para comprobar los resultados de la partida:
    round++; // Aumentar el contador de la ronda
    if (round > 15) { // Una partida perfecta se haría en 15 rondas, por cada nº que no se tenga se tarda una ronda más y se pierde 1 p
        points--;
    }
    currentNumber(); //Se llama a la función para generar el nº de la ronda

    alert(`Ha salido el número: ${number}`); //Se informa del nº que ha salido
    for (let i = 0; i < 3; i++) { //Con 2 loop anidados se revisa si el nº está en el cartón
        for (let j = 0; j < 5; j++) {
            if (card[i][j] === number) { //Si está, se tacha el nº y se informa al usuario
                card[i][j] = 'X';
                alert(`¡Enhorabuena! Se ha tachado el número ${number} de la ${i + 1}ª línea de tu cartón`);

                //Mediante 3 condicionales anidados se suma 1 al contador de línea correspondiente 
                if (i === 0 && line1 < 5) {
                    line1++;
                } else if (i === 1 && line2 < 5) {
                    line2++;
                } else {
                    line3++;
                }
            }

        }

    }
    console.table(card); //Se muestra el cartón al usuario

}

function linea() { //Función para cantar línea:
    if (line1 === 5 || line2 === 5 || line3 === 5) { //Si un de los contadores de línea llega a 5 (se han tachado todos los nº)
        alert('¡Enhorabuena! ¡Has cantado línea!'); //Se avisa al usuario de que ha obtenido línea 
        line = true; //Se cambia el indicador de línea a true para que no se vuelva a cantar
        if (round < 20) { //Si se canta línea en las primeras 15 rondas se obtienen 10p de bonus
            points += 10;
            alert('¡Ganas 10 puntos adicionales!')
        }
    }
}

function gameOver() { //Función para comprobar si ha terminado la partida
    if (line1 === 5 && line2 === 5 && line3 === 5) {
        endGame = true; //Al tachar todos los nº del cartón, el indicaador de fin de partida cambia a true
    }
}

function showRanking() { //Funcion para obtener el ranking
    user.points = points; //Se almacenan los puntos del usuario


    for (let i = 0; i < ranking.length; i++) { //Con el loop se recorren las posiciones del ranking
        if (ranking.length < 11) { //El condicional sirve para evitar que la puntuación se almacene más de una vez en el ranking
            if (user.points > ranking[i].points) {
                ranking.splice(i, 0, user)
            } //Si lel usuario entra en el ranking se almacenan sus datos en el puesto correspondiente
        }
    }
    if (ranking.length > 10) { //Se comprueba que en el ranking no haya más de 10 elementos
        ranking.pop(); //Si hay uno más (el usuario ha entrado en el ranking), se elimina el último elemento para dejar solo 10
    }
    console.table(ranking); //Se muestra el ranking
}

function newGame() { //Función para empezar otra partida:
    let newGame = window.confirm('¿Quieres jugar de nuevo?'); //Se pregunta si quiere jugar de nuevo
    if (newGame) {
        let stillYou = window.confirm(`¿Quieres seguir como ${user.player}?`); //Se pregunta si quiere seguir con el mismo nombre
        if (!stillYou) {
            user.player = prompt('¿Cómo te llamas?'); //Si quiere cambiar de nombre se solicita el nuevo
        }
        alreadyCalled.splice(0, alreadyCalled.length); //Se restablecen los valores de la partida a los iniciales
        line = false;
        endGame = false;
        line1 = 0;
        line2 = 0;
        line3 = 0;
        round = 0;
        points = 100;
        game(); //Se ejecuta un nuevo juego
    }
}

bingo(); //Empieza el juego