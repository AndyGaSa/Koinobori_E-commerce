function bingo () {
    beginGame();
}

let playersList =[
    {
        name:"Paco",
        points: Math.floor(Math.random() * 64) + 1,
    },
    {
        name: "Marta",
        points: Math.floor(Math.random() * 64) + 1,
    },
    {
        name: "Juan",
        points: Math.floor(Math.random() * 64) + 1,
    },
    {
        name: "Pepita",
        points: Math.floor(Math.random() * 64) + 1,
    },
    {
        name: "Ducky",
        points: Math.floor(Math.random() * 64) + 1,
    },
];

let userName = '';

function sortPrintRanking(){
    playersList.sort(function (a,b) {
        return b.points - a.points
    });
     for(let i = 0; i < playersList.length; i++) {
         console.log('El jugador ' + playersList[i].name + ' tiene una puntuación de: ' + playersList[i].points);
     }
}


function askUserName (){
    userName = prompt('Como te llamas?');
        if (userName === '' || userName === null){
            alert('Por favor escriba su nombre');
            userName = prompt('Como te llamas?')
    }
}

function welcome () {
    askUserName ()
    alert( 'Bienvenido al juego de Bingo ' + userName);
    let userNameObj = {name: userName, points: 0};
    playersList.push(userNameObj);

}

function doYouWantToPlay(){
    let gameStartAnswer = prompt("Quieres comenzar a jugar? S/N" )
    if (gameStartAnswer === 's'|| gameStartAnswer === 'S'){
        theGame();
    } else {
        endGame();
        sortPrintRanking();
    }
}

function endGame () {
    console.log('Good Bye!')
}

function beginGame(){
    welcome ();
    doYouWantToPlay();
}

let bingoCard = [

    { number: 'randomNumber', matched: false },

    { number: 'randomNumber', matched: false },

    { number: 'randomNumber', matched: false },

    { number: 'randomNumber', matched: false },

    { number: 'randomNumber', matched: false },

    //next line

    { number: 'randomNumber', matched: false },

    { number: 'randomNumber', matched: false },

    { number: 'randomNumber', matched: false },

    { number: 'randomNumber', matched: false },

    { number: 'randomNumber', matched: false },

    //next line

    { number: 'randomNumber', matched: false },

    { number: 'randomNumber', matched: false },
  
    { number: 'randomNumber', matched: false },
  
    { number: 'randomNumber', matched: false },
  
    { number: 'randomNumber', matched: false },
]

let randomCardNumber = 0;
let randomPickedNumber = 0;
let line1 = [];
let line2 = [];
let line3 = [];
let cardNumbers = [];
let turns = 0;
let pickedNumbers =[];
let line = false;
let bingoWinner = false;
let line1Complete = false;
let line2Complete = false;
let line3Complete = false;



function createFirstCard () {
    cardNumbers = [];
    for(let i = 0; i < bingoCard.length; i++) {
        randomCardNumber = Math.floor(Math.random() * 90) + 1; 
        if(bingoCard[i].number === 'randomNumber') {
            if (cardNumbers.includes(randomCardNumber) === false){
                cardNumbers.push(randomCardNumber)
                bingoCard[i].number = randomCardNumber
            } else {
                i--
            }
        }
    }

}

function divideInLines() {
    for(let i = 0; i < bingoCard.length; i++) {
        if(i < 5) {
            if(bingoCard[i].matched === false) {
                line1.push(bingoCard[i].number);
            } else {
                line1.push('X');
            }
        } else if(i < 10) {
            if(bingoCard[i].matched === false) {
                line2.push(bingoCard[i].number);
            } else {
                line2.push('X');      
            } 
        } else {
            if(bingoCard[i].matched === false) {
                line3.push(bingoCard[i].number);
            } else {
                line3.push('X');        
            }
        }

    }

}

function showCard() {
    console.log('\t\n' + line1.join('   |   ') + '\n');
    console.log('\t\n' + line2.join('   |   ') + '\n');
    console.log('\t\n' + line3.join('   |   ') + '\n\n')
}

function theGame(){
    createCard();
    if (bingoWinner === false){
        nextTurn();
    } else {
        theScore()
    }
}
function createCard(){
    line1 = [];
    line2 = [];
    line3 = [];
    createFirstCard();
    divideInLines();
    showCard();
    alert('Estos son tus números:');
    let start = confirm('Presiona Ok si te gusta tu carton o dale cancelar si prefieres otro carton');
    switch(start) {
        case true:
                alert('Que empiece el juego!');
                break;
        case false:
                for(let i = 0; i < bingoCard.length; i++) {
                    if(typeof bingoCard[i].number === 'number') {
                        bingoCard[i].number = 'randomNumber';
                    }
                }
            createCard();
        break;
    }
}



function nextTurn() {

    if(bingoWinner === false) {
        let newTurn = confirm('Quieres probar suerte?');
        switch(newTurn) {
            case true:
                turns++;
                pickNumbersFromBombo();
                compareNumbers();
                clearLineArrays();
                divideInLines();
                isItMatched();
                checkForLine();
                checkForBingo();
                showCard();
                nextTurn();
                break;
            case false:
                alert('Hasta pronto!');
                turns = 0;
                sortPrintRanking();
                break;
        };
    } else {
        alert('Ganaste!');    
    };
};


function compareNumbers() {
        let ball = randomPickedNumber;
          for(let j = 0; j < bingoCard.length; j++) {
             if(bingoCard[j].number == ball) {
              bingoCard[j].matched = true;
            } 
    
        }

}

function pickNumbersFromBombo () {
    randomPickedNumber = Math.floor(Math.random() * 90) + 1
    if (pickedNumbers.includes(randomPickedNumber) === false) {
        pickedNumbers.push(randomPickedNumber);
        console.log(`El numero que ha salido es el ${randomPickedNumber}`)   

    } else {
        repeatedNumber();

    }

}
function repeatedNumber(){
    if(pickedNumbers.includes(randomPickedNumber) === true){
        pickAgain();
    }

}

function pickAgain() {
    pickNumbersFromBombo ();

} 

function clearLineArrays(){
    line1 = [];
    line2 = [];
    line3 = [];
}

function clearForNextGame () {
    for(let k = 0; k < bingoCard.length; k++) {
        if(typeof bingoCard[k].number === 'number') {
            bingoCard[k].number = 'randomNumber';
        }  
    }
    for (let l = 0; l < bingoCard.length; l++){
        if (bingoCard[l].matched === true){
            bingoCard[l].matched = false
        }
    }
randomCardNumber = 0;
randomPickedNumber = 0; 
line1 = [];
line2 = [];
line3 = [];
cardNumbers = [];
turns = 0;
pickedNumbers =[];
line = false;
bingoWinner = false;
line1Complete = false;
line2Complete = false;
line3Complete = false;
    
}

function isItMatched () {
    const isMatched = (matchedNumber) => matchedNumber === 'X';
    line1Complete = line1.every(isMatched);
    line2Complete = line2.every(isMatched);
    line3Complete = line3.every(isMatched);
}

function checkForLine () {
    if (line === false){
        if (line1Complete === true || line2Complete === true || line3Complete === true) {
            console.log('LINEA!!!!');
            line = true;
        }
    }
}

function checkForBingo () {
    if (bingoWinner === false) {
        if(line1Complete === true && line2Complete === true && line3Complete === true) {
            console.log('BINGO!!!!');
            bingoWinner = true; 
        }
    }
}

function theScore(){
    console.log('Has ganado! te mostraremos las reglas de puntucion y como has quedado en el ranking')
    pointSystem();
    score(turns);
    addToRanking(userName,turns);
    sortPrintRanking();
    goAgain();
}


function score(turns){
    if(turns <= 30){
        return 180;
    } else if(turns <= 70){
        return 120;
    } else if(turns <= 80){
        return 90;
    } else if(turns <= 84){
        return 60;
    } else if(turns <= 86){
        return 40;
    } else if(turns <= 88){
        return 30;
    } else if(turns <= 90){
        return 15;
    } else if(turns === 100){
        return 0;
    }
}

function addToRanking(userName, turns) {
    let points = score(turns);
    for(let i = 0; i < playersList.length; i++) {
        if(playersList[i].name === userName) {
            playersList[i].points = points;
        }
    }
}

function pointSystem(){
    console.log ("REGLAS DEL JUEGO" +'\n'+ "Si haces Bingo antes de los 30 turnos tendras 180 puntos, mientras mas turnos menos puntos tendras. si pasas de los 100 turnos no recibiras puntos"
    );
}

function goAgain(){
    let playAgain = prompt("¿Quieres volver a jugar? Escriba S o N");
    
    if (!playAgain) {
        return console.log("Le has dado a cancelar. ¡Hasta otra!");
    }
    switch (playAgain.toLowerCase()) {
        case "s":
            clearForNextGame ();
            bingo();
            break;
        case "n":
            console.log('Hasta la proxima');
            break;
        default:
            console.log(
                "Solo puedes introducir S o N, vuelve a intentarlo");
            goAgain();
            break;
    }
}
