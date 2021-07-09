
//**Variables**//
let bingoCard = [];
let bomboNumList = [];
let newNum;
let newBomboNumb;
let showNewBomboNumb;
let numRemoved;
let newBomboNumQuest;
let playAgainQuest;
let lineComprovation = false;


//**Funciones utiles**//
//Funcion para poner la primera letra en mayuscula.
const capitalize = (n) => {return n.charAt(0).toUpperCase() + n.slice(1)}
//Funcion para obtener numeros aleatorios comprendidos entre dos valores ambos incluidos.
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//**Funciones**//
//Funcion para el reinicio de las variables.
function resetVariables(){
bingoCard = [];
bomboNumList = [];
playAgainQuest = false;
lineComprovation = false;
}
//Funcion para dar la bienvenida al usuario.
function welcome(){
    let userName = capitalize(prompt('Buenos dias, ¿Cual es su nombre?').toLowerCase());
    alert(`${userName}, bienvenido/a al Bingo Skylab. A continuación te mostramos el carton que te ha tocado y empezaremos con la primera ronda del bingo.`);
}
//Funcion para crear un nuevo carton de bingo para el usuario con numeros aleatorios.
function newTurn(){
    bingoCard = [];
    for(let i=0; i<5;i++){
        newNum = getRandomIntInclusive(1, 6);
        bingoCard.push(newNum);
    }
    if(bingoCard.length === 5){
        console.table(bingoCard);
    }
}
//Funcion para generar un numero aleatorio
function newBomboNumber(){
    newBomboNumb = parseFloat(getRandomIntInclusive(1, 6));
    showNewBomboNumb = alert(`Bola numero ${newBomboNumb}`);
    bomboNumList.push(newBomboNumb);
}
//Funcion para comprobar si el numero generado está en el carton del usuario, de ser asi se sustituiria el numero del carton por una X.
function numberComprovation(){
    for(let i in bingoCard){
        if(bomboNumList[bomboNumList.length-1] === bingoCard[i]){               //comprovamos si el ultimo elemento del array bombonumlist, que es la utlima bola que ha salido, coincide con algun numero de nuestro carton.
            bingoCard.splice(bingoCard.indexOf(bingoCard[i]), 1, 'X');          //En caso de ser true, entonces sustituimos el numero que ha coinciddido en el carton por una 'X'.
            console.table(bingoCard);                                           //imprimimos el carton con el cambio realizado.
            line();                                                             //Llamamos a la funcion line para comprovar si hemos hecho linea.
        }
    }
}
//Funcion para comprovar si hay linea mediante metodo .every el cual comprueva que todos los elementeos del array sean iguales a 'X'.
function line(){
    lineComprovation = bingoCard.every(elem => elem == 'X');
    if(lineComprovation === true){
        alert('¡Felicidades, has hecho LINEA!')
    }
}
//Funcion bucle para preguntar al usuario si quiere seguir en el juego.
function bingoLoop(){
    newBomboNumQuest = confirm(`¿Desea que salga una nueva bola?`);
    if(newBomboNumQuest === true){
        newBomboNumber();
        numberComprovation();
        if(lineComprovation === false){
            bingoLoop();
        }
        else if(lineComprovation === true){
            playAgain();
        }
    }else(alert('¡Aquí se acaba el juego entonces, adios!'));
}
//Funcion para volver a echar otra partida.
function playAgain(){
    playAgainQuest = confirm('¿Quieres jugar otra vez?')
    if(playAgainQuest === true){
        console.clear()
        resetVariables()
        bingo()
    }else{
        alert('¡Hasta la próxima!')
    }
}
//Funcion general la cual reune la llamada de todas las funciones anteriormente definidas.  
function bingo(){
    welcome();
    newTurn();
    newBomboNumber();
    numberComprovation();
    bingoLoop();
}
//Llamada de la función general para inciar el juego
bingo();