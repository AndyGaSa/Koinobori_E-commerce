//BINGO VERSION COMPLETA
//● Cuando se muestre la carta, se preguntará al usuario si realmente quiere ese cartón o generar otro, si realmente
//quiere ese cartón, deberá responder "Yes" para proceder.

//● Establece un sistema de puntos, en cuantos más turnos se complete el cartón, menos puntos (el sistema de puntos
//intégralo como quieras), por el contrario, a menos turnos, más puntos.

//● Antes de empezar el juego, muestra el sistema de puntos al usuario.

//● Ranking de usuarios (ordenado por puntos).

//**Variables**//
let bingoCard = [];
let bomboNumList = [];
let randomNumList = [];
let user = { Player: '', Points: 90 };
let newBingoCardQuest;
let newNum;
let showNewBomboNum;
let newBomboNumQuest;
let playAgainQuest;
let line1Check = false;
let line2Check = false;
let line3Check = false;
let bingoCheck = false;
let rank = [
    { Player: 'Mireia', Points: 73 },
    { Player: 'Carlos', Points: 69 },
    { Player: 'Raul', Points: 68 }
];

//**Funciones utiles**//

//Funcion para poner la primera letra en mayuscula.
const capitalize = (n) => {
    return n.charAt(0).toUpperCase() + n.slice(1);
};
//Funcion para obtener numeros aleatorios comprendidos entre dos valores ambos incluidos.
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//Funcion para generar numeros aleatorios y enviarlos a una matriz que se utilizara como 'baul' de numeros ya que en esta matriz los numeros se podran repetir.
function randomNumberGenerate(){
    newNum = getRandomIntInclusive(1, 20);
    randomNumList.push(newNum);
}
//Funcion para mostrar el ranking de los mejores jugadores ordenadamente.
function ranking() {
    rank = rank.sort((a, b) => (b.Points) - (a.Points));
    console.log('RANKING:');
    console.table(rank);
}
//Funcion para comprovar si hay alguna linea mediante metodo .every el cual comprueva que todos los elementeos del array sean iguales, a 'X' en este caso,y en caso de ser asi nos devuelve true.
function lineCheck(){
    line1Check = bingoCard[0].every(elem => elem == 'X');
    line2Check = bingoCard[1].every(elem => elem == 'X');
    line3Check = bingoCard[2].every(elem => elem == 'X');
}
//Funcion para el reinicio de las variables.
function resetVariables(){
    bingoCard = [];
    bomboNumList = [];
    randomNumList = [];
    user = { Player: '', Points: 90 };
    newBingoCardQuest
    newNum;
    showNewBomboNum;
    newBomboNumQuest;
    playAgainQuest;
    line1Check = false;
    line2Check = false;
    line3Check = false;
    bingoCheck = false;
    rank = [{ Player: 'Mireia', Points: 73 },{ Player: 'Carlos', Points: 69 },{ Player: 'Raul', Points: 68 }]
}

//**Funciones Principales del Programa**//

//Funcion para dar la bienvenida al usuario.
function welcome(){
    user.Player = capitalize(prompt('Buenos dias, ¿Cual es su nombre?').toLowerCase());
    alert(`${user.Player}, bienvenido/a al Bingo Skylab. A continuación te mostraremos las reglas, el ranking y el carton que te ha tocado y empezaremos con la primera ronda del bingo.`);
    alert('Las reglas del bingo son muy sencillas, se empieza con 90 puntos, que es el numero total de bolas, y por cada bola que vaya saliendo se ira restando un punto.\nLa partida perfecta seria con 15 bolas asi que el maximo de puntuacion seria 75.')
    ranking();
}
//Funcion para crear un nuevo carton de bingo para el usuario con numeros aleatorios.
function newTurn(){
    bingoCard = [];
    while(bingoCard.length<15){
        randomNumberGenerate()
        if(bingoCard.includes(randomNumList[randomNumList.length-1]) === false && newNum !== isNaN){
            bingoCard.push(newNum);
        }else{randomNumberGenerate()}
    }
    if(bingoCard.length = 15){
        bingoCard[0] = bingoCard.slice(0, 5);
        bingoCard[1] = bingoCard.slice(5, 10);
        bingoCard[2] = bingoCard.slice(10, 15);
        bingoCard.length = 3
        console.table(bingoCard);
        randomNumList = [];
        bomboNumList = [];
    }
    changeBingoCard();
}
//Funcion para preguntar al usuario si desea cambiar su cartón de bingo.
function changeBingoCard(){
    newBingoCardQuest = confirm(`¿Desea cambiar de cartón?`);
    switch(newBingoCardQuest){
        case true:
            console.clear();
            newTurn();
            break;
        case false:
            break;
    }
}
//Funcion para generar un numero aleatorio sin que se repita. Se hace push a los nuemros aleatorios en una matriz 'baul' y se comrpueva si este numero esta en la matriz bombonumlist, en caso de ser false se pushea ese numero a dicha matriz.
function newBomboNumber(){
    randomNumberGenerate()
    if(bomboNumList.includes(randomNumList[randomNumList.length-1]) === false){
        bomboNumList.push(newNum);
        showNewBomboNum = alert(`Bola numero ${newNum}`);
        user.Points--;
    }else(newBomboNumber())
}
//Funcion para comprobar si el numero generado está en el carton del usuario, de ser asi se sustituiria el numero del carton por una X.
function numberComprovation(){
    for(let i = 0; i<bingoCard.length; i++){
        for(let j=0; j<bingoCard[i].length;j++){
            if(bomboNumList[bomboNumList.length-1] === bingoCard[i][j]){               //comprovamos si el ultimo elemento del array bombonumlist, que es la utlima bola que ha salido, coincide con algun numero de nuestro carton.
                console.clear()
                console.log(`Felicidades el numero ${bingoCard[i][j]} está en tu carton.`)
                bingoCard[i][j] = 'X';        //En caso de ser true, entonces sustituimos el numero que ha coinciddido en el carton por una 'X'.
                console.table(bingoCard);       //imprimimos el carton con el cambio realizado.                                        
                if(line1Check === false && line2Check === false && line3Check === false){
                line();                                                    //Llamamos a la funcion line para comprovar si hemos hecho linea.
                }
                else if(line1Check === true || line2Check === true || line3Check === true){
                bingo();
                };      
            }
        }
    }
}
//Funcion para realizar un alert y notificar al usuario que ha hecho linea en caso de que una de las lineas sea true.
function line(){
    lineCheck()
    if(line1Check === true || line2Check === true || line3Check === true){
        alert('¡Felicidades, has hecho LINEA!\n¡Seguimos para Bingo!');
    }
}
//Funcion para realizar un alert en caso de bingo y ofrecer el poder volver a jugar otra partida.
function bingo(){
    lineCheck()
    if (line1Check === true && line2Check === true && line3Check === true){
    bingoCheck = true;
    alert('¡Felicidades, has hecho BINGOOOO!');
    rank.push(user);
    ranking();
    playAgain();
    }
}
//Funcion bucle para preguntar al usuario si quiere seguir en el juego.
function bingoLoop(){
    newBomboNumQuest = confirm(`¿Desea que salga una nueva bola?`);
    if(newBomboNumQuest === true && bingoCheck === false){
        newBomboNumber();
        numberComprovation();
        bingoLoop();
    }else(alert('¡Aquí se acaba el juego entonces, adios!'));
        playAgain();
}
//Funcion para volver a echar otra partida.
function playAgain(){
    playAgainQuest = confirm('¿Quieres jugar otra vez?')
    if(playAgainQuest === true){
        console.clear()
        resetVariables()
        bingoGame()
    }else{
        alert('¡Hasta la próxima!')
        console.clear()
        resetVariables()
    }
}
//Funcion general la cual reune la llamada de todas las funciones principales anteriormente definidas.  
function bingoGame(){
    welcome();
    newTurn();
    newBomboNumber();
    numberComprovation();
    bingoLoop();
}
//Llamada de la función general para inciar el juego
bingoGame();