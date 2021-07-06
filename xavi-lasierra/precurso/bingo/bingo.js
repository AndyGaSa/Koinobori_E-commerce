let userName;
let carton;
let randNumers;
let alreadyLinea;
let turns;
let ranking = [
    {
        name: "Chris",
        score: 50
    },
    {
        name: "Sonia",
        score: 42
    },
    {
        name: "Juan",
        score: 31
    },
    {
        name: "Petra",
        score: 24
    },
    {
        name: "Violeta",
        score: 22
    },
    {
        name: "Leonardo",
        score: 15
    },
    {
        name: "Maria",
        score: 12
    },
    {
        name: "Felix",
        score: 8
    },
    {
        name: "Angela",
        score: 6
    },
    {
        name: "Federico",
        score: 2
    }
];

function bingo(){
    console.clear();
    console.log(`BINGO\n\nBienvenido!`);
    //Enseña sistema de puntuación y ranking
    console.log(`\n\nRanking:\n`);
    console.table(ranking);
    console.log(`\nSistema de puntuación:\nSi consigues hacer bingo en 15 turnos = 75 puntos.\nCada turno que pasa a partir del 15 se resta 1 punto a la puntuación final.`);

    do{
        userName = prompt(`BINGO\n\nInserte el nombre de usuario:`);
    }while(typeof(userName) !== "string" || userName === "");

    //Crea el carton
    do{
        carton = createCarton();
        console.clear();
        console.log(`BINGO\n\nHola ${userName}, este es tu cartón:\n`);
        console.table(carton);
        let aux = prompt(`BINGO\n\n¿Quieres jugar con este cartón?\n[YES] para proceder`,`YES`);
        if(typeof(aux) === "string")
            aux = aux.toUpperCase();
        if(aux === "YES" || aux === "Y")
            break;
    }while(true);

    //Añade todos los numeros al bombo
    alreadyLinea = false;
    turns = 0;
    randNumers = [];
    for(let i=1; i<=90; i++){
        randNumers.push(i);
    }

    //Inicia el juego
    do{
        let endGame = newTurn();

        if(!continuePlaying(endGame))
            break;        
    }while(true);

    console.clear();
    console.log(`BINGO\n\nGracias por jugar.`);
}

function createCarton(){
    //Crea el carton vacio
    const table = [];
    for(let i=0; i<3; i++) {
        table[i] = new Array(5);
    }

    //Añade 15 numeros aleatorios a un array
    const randNum = [];
    while(randNum.length < 15){
        let num = Math.ceil(Math.random() * 90);
        if(!randNum.find(x => x === num))
            randNum.push(num);
    }
    randNum.sort(function(a,b){return a - b});

    //Añade los 15 numeros aleatorios al carton
    let x = 0;
    for(let j=0; j<5; j++){
        for(let i=0; i<3; i++){
            table[i][j] = randNum[x];
            x++;
        }
    }
    return table;
}

function newTurn(){
    turns++;
    //Numero aleatorio
    let num = getRandomNumber();

    //Comprueba si esta en el carton y si hay lo cambia por X
    //Comprueba si hay linea/bingo
    let found = false;
    let bingo = true;
    let linea = false;
    for(let i=0; i<3; i++){
        let auxLinea = true;
        for(let j=0; j<5; j++){
            if(carton[i][j] === num){
                carton[i][j] = "X";
                found = true;
            }
            if(carton[i][j] !== "X"){
                auxLinea = false;
                bingo = false;
            }
        }
        if(auxLinea)
            linea = true;
    }

    //Imprime los resultados
    console.clear();
    console.log(`BINGO\n\nTurno: ${turns.toString()} - Número: ${num.toString()}!`);
    console.table(carton);
    if(found){
        if(linea && !alreadyLinea){
            alreadyLinea = true;
            console.log(`\n¡LINEA!`);
        }
        else if(bingo){
            console.log(`\n¡BINGO!`);
            return true;
        }
        else
            console.log(`\n¡Genial! Tienes el número ${num.toString()}.`);
    }
    else
        console.log(`\nNada.`);
    return false;
}

function getRandomNumber(){
    let aux = Math.round(Math.random() * (randNumers.length - 1));
    return Number(randNumers.splice(aux,1));
}

function continuePlaying(endG){
    if(endG){
        //Muestra n turnos y ranking de usuarios
        let score = 90 - turns;
        if(score > ranking[9].score){
            ranking.pop();
            ranking.push({name: userName, score: score});
            ranking.sort(function(a,b){return b.score - a.score});
        }
        console.log(`\n\nHas conseguido hacer Bingo en ${turns.toString()} turnos.\n¡Has conseguido ${score.toString()} puntos!\n\nRanking:\n`);
        console.table(ranking);
        //Pregunta si quieres volver a jugar
        let aux = prompt(`BINGO\n\n¿Quieres volver a jugar?\n[YES] para proceder`,`YES`);
        if(typeof(aux) === "string")
            aux = aux.toUpperCase();
        if(aux === "YES" || aux === "Y")
            bingo();
        return false;
    }
    else{
        if(confirm(`BINGO\n\n¿Quieres seguir jugando?`))
            return true;
        else
            return false;
    }
}

bingo();