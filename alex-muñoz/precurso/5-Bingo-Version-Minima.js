//Realiza un programa que simule un Bingo. Cuando se ejecute, pedirá el nombre del jugador y deberá 
//guardarse. Durante el primer turno se mostrará un cartón con 15 números no repetidos (excluyendo el 0
//siempre).

//Un forma amigable de mostrar el cartón en consola podria ser usando console.table()

//Para pasar al siguiente turno el usuario deberá confirmar mediante confirm() visualizándose otro número. 
//Si coincide con alguno de los existentes en el cartón, cambiará por una "X".

//El cartón se mostrará al final de cada turno, con los cambios efectuados, indicando al usuario qué número 
//se ha encontrado. El programa deberá preguntar al usuario al inicio de cada turno si desea continuar, en 
//caso de que se continúe, seguirá el mismo patrón que hasta el momento.

//Por supuesto, cuando todos los números de una misma línea sean "X", mostrará un mensaje "LÍNEA!", pero la 
//ejecución seguirá, el juego solo acabará cuando todos los números estén a "X" (solamente se puede cantar línea
//1 vez).

//Cuando el juego concluya, deberá decirle al usuario en cuantos turnos se ha completado el cartón. Podeis simular
//un ranking con usuarios que tengais previamente creados en un array con sus puntuaciones aleatorias.

//Por último, deberá preguntar si desea volver a jugar.

//Comenzar por una versión muy pequeña y básica nos hará tener un programa de principio a fin, es decir, que 
//empieza, que acaba y haga lo que queramos a muy pequeña escala, una vez lo tengamos todo bien dividido podremos
 //empezar a extenderlo tanto como queramos.

//Si funciona con 5 números deberá funcionar con 15, no? 😁

//BINGO VERSION MINIMA:
//Cartón con solo 5 números (no repetidos), sin necesidad de ser generados random. Solo necesitamos un número random 
//cuando recorramos el cartón y veamos si hay alguna coincidencia. No necesitamos asegurarnos que el número random 
//de cada turno no haya salido en turnos anteriores, recuerda que estamos en la mínima versión posible, eso ya lo
//solucionaremos. Si hay coincidencia, vamos a reemplazar el número por una 'X' y mostramos el cartón modificado 
//Separarlo todo en funciones, incluidas en una función global llamada bingo(), 
//tal que:
//function()=> Generar Numero Random Bombo function()=> Nuevo turno (Match carton[i] === randomNum)
//function() => Preguntar Nuevo Turno

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
const capitalize = (n) => {
    return n.charAt(0).toUpperCase() + n.slice(1);
};
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
newNum;
newBomboNumb;
showNewBomboNumb;
numRemoved;
newBomboNumQuest;
playAgainQuest = false;
lineComprovation = false;
}
//Funcion para dar la bienvenida al usuario.
function welcome(){
    userName = capitalize(prompt('Buenos dias, ¿Cual es su nombre?').toLowerCase());
    alert(`${userName}, bienvenido/a al Bingo Skylab. A continuación te mostramos el carton que te ha tocado y empezaremos con la primera ronda del bingo.`);
}
//Funcion para crear un nuevo carton de bingo para el usuario con numeros aleatorios.
function newTurn(){
    bingoCard = [];
    for(i=0; i<5;i++){
        newNum = getRandomIntInclusive(1, 6);
        bingoCard.push(newNum);
    }
    if(bingoCard.length = 5){
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
    for(let i = 0; i<bingoCard.length; i++){
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