//
// Lluc Valério
//
// Global vars
// nest 4 vars I used 'let' instead of 'const' because const give me "problems" reloading the page, so it is easy to debug this way. But I think 'const' should be better.
let minRandomNumber = 1; // minim possible number.
let maxRandomNumber = 30; // maxim possible number; if bigger, more numbers possible and also longer the game will be. The point rangking was thought for 99.
let numRowsBingoCard = 3; // Row number of the bingo card
let numColsBingoCard = 5; // Column nunmber of the bingo card
//
let playerName; // the name of the player
let lineDone; // bool used to know if line is achieved
let bingoDone; // bool used to know if bingo is achieved;
let numRolls; // number of rolls used by the player
let bingoCard; // stores the player's numbers
let numsAppeared; // stores the numbers appeared during the lucky draw
let scoring = [ // stores names and scores
    {
        name: `Roc`,
        points: 99
    },
    {
        name: `Muriel`,
        points: 154
    },
    {
        name: `Lluc`,
        points: 15
    },
    {
        name: `John`,
        points: 87
    },
    {
        name: `Paul`,
        points: 67
    },
    {
        name: `George`,
        points: 23
    },
    {
        name: `Ringo`,
        points: 45
    },
];
//
bingo();
// Functions
function bingo() {
    // local vars
    let stay = false;
    //
    do {
        // ask player name - if no name ends program.
        switch (getPlayerName()) {
            case true:
                // Initialize variables
                initVars();
                // Generate and show Bingo Card and ask if OK or want another one
                setBingoCard();
                showScoring();
                // Star the game loop
                let gameIsOn = true;
                console.log(`\nLet's Start!!!!!!\n`);
                do {
                    let actualNumber = 0;
                    // Generate the next number checking if it has appeared before
                    do {
                        actualNumber = getRandomArbitrary(minRandomNumber, maxRandomNumber);
                    } while (checkNumber(numsAppeared, actualNumber));
                    numsAppeared.push(actualNumber);
                    alert(`The number is ${actualNumber}`);
                    numRolls++;
                    // Check player's board - updated if necessary - and Check for line & Bingo
                    boardUpdate(actualNumber);
                    // Check if the game is over and / or if player wants to keep playing
                    if (bingoDone) {
                        gameIsOn = false;
                        // If the game is finished, update the rankings.
                        setRanking(numRolls);
                        alert(`Game finished!!!`);
                    } else if (!confirm(`Do you want to keep playing?`)){
                        gameIsOn = false;
                    }
                } while (gameIsOn);
                // Ask user for a new game or exit
                stay = yesNo(`Do you want to play again?\n Yes (y)\n  No (n)`);
                break;
            case false:
            default:
                stay = false;
                break;
        }
    } while (stay);
}
// Set global critic variables to init values
function initVars () {
    lineDone = false;
    bingoDone = false;
    numRolls = 0;
    numsAppeared = [];
    bingoCard = [];
    for (let i=0; i<numRowsBingoCard; i++) {
        bingoCard[i] = [];
    }
    console.clear();
}
// check the number of rolls used by the player and update the rankings,,
function setRanking(numRolls) {
    let finalScoring = 0;
    let rankingUpdated = false;
    if (numRolls <= (numRowsBingoCard * numColsBingoCard)) {
        finalScoring = 84;
    } else {
        finalScoring = 84 - (numRolls - (numRowsBingoCard * numColsBingoCard));
    }
    scoring.forEach(element => {
        if (element.name === playerName) {
            element.points = element.points + finalScoring;
            rankingUpdated = true;
        }
    });
    if (!rankingUpdated) {
        scoring.push({name:playerName,points:finalScoring});
    }
    console.log (`You have finished the game with ${numRolls} throws.\nThis is aobut ${finalScoring} points.\nScore List:`)
    console.table(scoring.sort(function (a, b) { return b.points - a.points }));
}
// Update board in relation with the last number, and also check if the user has line or bingo.
function boardUpdate(actualNumber) {
    let linePosDone;
    let bingoPosDone = 0;
    for (let i = 0; i < numRowsBingoCard; i++) {
        linePosDone = 0;
        for (let j = 0; j < numColsBingoCard; j++) {
            if (bingoCard[i][j] === actualNumber) {
                bingoCard[i][j] = `X`;
                console.log(`Number ${actualNumber}; You got it!!!!`);
            }
            if (bingoCard[i][j] === `X`) {
                linePosDone++;
                bingoPosDone++;
            }
        }
        if ((linePosDone === numColsBingoCard) && (lineDone === false)) {
            console.log(`\nLINE!!!!!!\n`)
            lineDone = true;
        }
    }
    if (bingoPosDone === (numColsBingoCard * numRowsBingoCard)) {
        console.log(`\nBINGO!!!!!!\n`)
        bingoDone = true;
    }
    console.table(bingoCard);
}
// Check FOR A SIMPLE ARRAY if the number has already appeared. If appeared return true, otherwise return false and add the number to numsAppeared for future checks
function checkNumber(array, actualNumber) {
    if (array.includes(actualNumber)) {
        return true;
    } else {
        return false;
    }
}
// Shows scoring rules and actual scoring.
function showScoring() {
    console.log(`BINGO SCORING RULES\nYou start the game with 84 points. After the first ${numRowsBingoCard * numColsBingoCard} shots, you are goinig to lose 1 point per round.`);
    console.log(`Score List:`);
    console.table(scoring.sort(function (a, b) { return b.points - a.points }));
}
// Set A Bingo Card and validate it with user
function setBingoCard() {
    let bingoCardOK = false;
    do {
        bingoCard=[];
        for (let i = 0; i < numRowsBingoCard; i++) {
            bingoCard[i]=[];
            for (let j = 0; j < numColsBingoCard; j++) {
                let newNumber= 0;
                do {
                    newNumber = getRandomArbitrary(minRandomNumber, maxRandomNumber);

                //} while (checkBingoCardNumber(newNumber))
                } while (bingoCard.some(row => row.includes(newNumber)));
                bingoCard[i][j] = newNumber;
            }
        }
        //console.table (bingoCard,5);
        console.table(bingoCard);
        bingoCardOK = yesNo(`Do you accept this Bingo Card?\n Yes (y)\n No (n)`);
    } while (!bingoCardOK)
}
// Generic function to return a random int between min (included) and max (excluded)
function getRandomArbitrary(min, max) {
    return (Math.random() * (max - min) + min).toFixed(0);
}
// Generic function to convert string Yes/No question to boolean answer.
function yesNo(question) {
    do {
        let answer = prompt(question);
        if (answer === null) {
            return false;
        } else if (answer.toLowerCase() === 'y') {
            return true;
        } else if (answer.toLowerCase() === 'n') {
            return false;
        }
    } while (true)
}
// Ask user's name and validate if exists name
function getPlayerName() {
    playerName = prompt(`What's yout name?`);
    if ((playerName === undefined) || (playerName === null)) {
        return false;
    } else {
        return true;
    }
}