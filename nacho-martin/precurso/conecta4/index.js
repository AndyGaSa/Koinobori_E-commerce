//Global variables:
let positions = [ //This array will contain the ordered positions of the board
    [],
    [],
    [],
    [],
    [],
    [],
    []
];
let round = 1; //Rounds counter
let winner = '';
let players = 0;
let tie = false;
const title = document.querySelector('.game-title');
title.addEventListener('click', main);

function main() {
    const game = document.querySelector('.game');
    game.classList.remove('currentSection');
    mainMenu();
}

//preGame section: 
const multiPlayerButton = document.querySelector('#multiPlayer');
multiPlayerButton.addEventListener('click', multiPlayer);

const singlePlayerButton = document.querySelector('#singlePlayer');
singlePlayerButton.addEventListener('click', singlePlayer);
//game section:
function gameScreen() { //Change section displayed
    const preGame = document.querySelector('.preGame');
    const game = document.querySelector('.game');

    preGame.classList.remove('currentSection');
    game.classList.add('currentSection');
}

function createBoard() { //Create the game board elements 
    const board = document.querySelector('.game-board')
    const boardBackplate = document.querySelector('.game-board-backplate')
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
            const buttonSpace = document.createElement('DIV');
            const button = document.createElement('input:button');

            buttonSpace.classList.add('game-board-buttonSpace');
            buttonSpace.id = `buttonSpace${i}${j}`;
            button.classList.add('game-board-button');
            buttonSpace.addEventListener('click', addEvents);
            button.id = `b${i}${j}`

            board.appendChild(buttonSpace);
            boardBackplate.appendChild(button);
        }

    }

}

function addEvents(e) { //Add eventListeners to the board positions
    if (e) {
        let target = e.target.id;
        let targetArray = Array.from(target);
        let column = targetArray[targetArray.length - 1];

        if (winner === '' && !tie) {
            placeChip(column);
            if (players === 1) {
                setTimeout(() => {
                    machineRound();
                }, 500);

            }
        }
    }

}

function placePositions() { // Get the positions ordered in the array 'positions'
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
            const position = document.querySelector(`#b${i}${j}`);
            if (j < 7) {
                positions[j].unshift(position);
            }
        }
    }
}

function placeChip(column) { //Place chip on proper position when a column is clicked
    let index = 0;

    for (let i = 0; i < 6; i++) {
        if (positions[column][index] === 'p1' || positions[column][index] === 'p2') {
            index++;
        }

    }
    if (index < 6) {
        if (round % 2 !== 0) {
            positions[column][index].classList.add('player1');
            positions[column][index] = 'p1';
        } else {
            positions[column][index].classList.add('player2');
            positions[column][index] = 'p2';

        }
        let x = index;
        let y = parseInt(column);
        checkResults(x, y);
        round++;
    }

}

function checkResults(row, column) { //Check for a win situation
    let counter = 1;
    let currentPlayer = '';
    if (round % 2 !== 0) {
        currentPlayer = 'p1';
    } else {
        currentPlayer = 'p2';
    }

    for (let i = 0; i < 6; i++) { //Check for horizontal win
        if (positions[i][row] === currentPlayer && positions[i + 1][row] === currentPlayer) {
            counter++;
        } else {
            counter = 1;
        }
        if (counter === 4) {
            gameOver();
        }

    }
    counter = 1;
    for (let i = 0; i < 5; i++) { //Check for vertical win
        if (positions[column][i] === currentPlayer && positions[column][i + 1] === currentPlayer) {
            counter++;
        } else {
            counter = 1;
        }
        if (counter === 4) {
            gameOver();
        }

    }
    counter = 1;
    if (row >= column) { //Check for diagonal win (bottom-left to top-right)
        for (let i = 0; i + (row - column) < 5; i++) { //Check for diagonal win (from bottom/left to top/right)
            if (positions[i][i + (row - column)] === currentPlayer && positions[i + 1][i + (row - column) + 1] === currentPlayer) {
                counter++;
            } else {
                counter = 1;
            }
            if (counter === 4) {
                gameOver();
            }
        }
        counter = 1;

    } else {
        for (let i = 0; i + (column - row) < 6; i++) {
            if (positions[i + (column - row)][i] === currentPlayer && positions[i + (column - row) + 1][i + 1] === currentPlayer) {
                counter++;
            } else {
                counter = 1;
            }
            if (counter === 4) {
                gameOver();
            }
        }
        counter = 1;

    }
    if ((6 - column) <= row) { //Check for diagonal win (from bottom-right to top-left)
        for (let i = 0;
            (i + row - (6 - column)) < 5; i++) {
            if (positions[6 - i][row - (6 - column) + i] === currentPlayer && positions[6 - i - 1][row - (6 - column) + i + 1] === currentPlayer) {
                counter++;
            } else {
                counter = 1;
            }
            if (counter === 4) {
                gameOver();
            }
        }
        counter = 1;

    } else {
        for (let i = 0;
            (row + column) - i > 0; i++) {
            if (positions[(row + column) - i][i] === currentPlayer && positions[(row + column) - i - 1][i + 1] === currentPlayer) {
                counter++;
            } else {
                counter = 1;
            }
            if (counter === 4) {
                gameOver();
            }
        }
        counter = 1;
    }
    //In case of tied game
    let places = positions.map(function(column) {
        return column.map(function(row) {
            if (row === 'p1' || row === 'p2') {
                return 'occupied';
            } else {
                return 'empty';
            }
        })
    });
    places = places.flat();
    const isOccupied = (currentPlace) => currentPlace === 'occupied';
    if (places.every(isOccupied)) {
        tie = true;
        gameOver();
    }
}

function launch() {
    gameScreen();
    createBoard();
    placePositions();
    addEvents();
}
//Multiplayer:
function multiPlayer() { //Starts the multiplayer game
    players = 2;
    launch()
}

//single player:
function singlePlayer() { //Starts the single player game 
    players = 1;
    launch()
}

function machineRound() { //The machine makes its move
    if (round % 2 === 0 && winner === '' && !tie) {
        placeChip(selectColumn());
    }
}

function selectColumn() { //Select the best movement possible

    const places = positions.map(function(column) {
        return column.map(function(row) {
            if (row === 'p1') {
                return 'player';
            } else if (row === 'p2') {
                return 'CPU';
            } else {
                return 'empty';
            }
        })
    });
    let counter = 1;
    //Machine's overall game state:
    //Machine's vertical winning option:
    for (let i = 0; i <= 6; i++) {
        for (let j = 0; j < 4; j++) {
            if (places[i][j] === 'CPU' && places[i][j + 1] === 'CPU') {
                counter++;
            } else {
                counter = 1;
            }
            if (counter === 3) {
                if (j + 2 <= 5) {
                    if (places[i][j + 2] === 'empty') {
                        return i;
                    } else { counter = 1 }
                }
            }
        }
        counter = 1;
    }

    //Machine's horizontal winning option:
    for (let j = 0; j <= 5; j++) {
        for (let i = 0; i < 6; i++) {
            if (places[i][j] === 'CPU' && places[i + 1][j] === 'CPU') {
                counter++;
            } else {
                counter = 1;
            }
            if (counter === 3) {
                if (j === 0) {
                    if (i < 5) {
                        if (places[i + 2][j] === 'empty') {
                            return i + 2;
                        }
                    }
                    if (i > 1) {
                        if (places[i - 2][j] === 'empty') {
                            return i - 2;
                        }
                    }
                } else {
                    if (i < 5) {
                        if (places[i + 2][j] === 'empty' && places[i + 2][j - 1] !== 'empty') {
                            return i + 2;
                        }
                    }
                    if (i > 1) {
                        if (places[i - 2][j] === 'empty' && places[i - 2][j - 1] !== 'empty') {
                            return i - 2;
                        }
                    }
                }
            }
        }
        counter = 1;
    }
    //Machine's diagonal winning options
    //Diagonal bottom-left to top-right (board's top half section)
    for (let j = 0; j < 5; j++) {
        for (let i = 0; i < 6; i++) {
            if (places[i][i + j] === 'CPU' && places[i + 1][i + j + 1] === 'CPU') {
                counter++;
            } else {
                counter = 1;
            }
            if (counter == 3) {
                if (i + j + 2 < 5) {

                    if (places[i + 2][i + j + 2] === 'empty' && places[i + 2][i + j + 1] !== 'empty') {
                        return i + 2;
                    }
                }
            }
        }
        counter = 1;
    }
    //Diagonal bottom-left to top-right (board's bottom half section)
    for (let j = 0; j < 5; j++) {
        for (let i = 0; i + j < 6; i++) {
            if (places[i + j][i] === 'CPU' && places[i + j + 1][i + 1] === 'CPU') {
                counter++;
            } else {
                counter = 1;
            }
            if (counter == 3) {
                if (i + j + 2 <= 6) {

                    if (places[i + j + 2][i + 2] === 'empty' && places[i + j + 2][+1] !== 'empty') {
                        return i + j + 2;
                    }
                }
            }
        }
        counter = 1;
    }
    //Diagonal bottom-right to top-left (board's top half section)
    for (let j = 0; j < 5; j++) {
        for (let i = 0; i < 6; i++) {
            if (places[6 - i][i + j] === 'CPU' && places[6 - i - 1][i + j + 1] === 'CPU') {
                counter++;
            } else {
                counter = 1;
            }
            if (counter == 3) {
                if (i + j + 2 <= 5) {

                    if (places[6 - i - 2][i + j + 2] === 'empty' && places[6 - i - 2][i + j + 1] !== 'empty') {
                        return 6 - i - 2;
                    }
                }
            }
        }
        counter = 1;
    }
    //Diagonal bottom-right to top-left (board's bottom half section)

    //Player's overall game state:
    //Vertical verifications:
    for (let i = 0; i <= 6; i++) {
        for (let j = 0; j < 4; j++) {
            if (places[i][j] === 'player' && places[i][j + 1] === 'player') {
                counter++;
            } else {
                counter = 1;
            }
            if (counter === 3) {
                if (j + 2 <= 5) {
                    if (places[i][j + 2] === 'empty') {
                        return i;
                    } else { counter = 1 }
                }
            }
        }
        counter = 1;
    }
    // Player's horizontal winning option
    for (let j = 0; j <= 5; j++) {
        for (let i = 0; i < 6; i++) {
            if (places[i][j] === 'player' && places[i + 1][j] === 'player') {
                counter++;
            } else {
                counter = 1;
            }
            if (counter === 3) {
                if (j === 0) {
                    if (i < 5) {
                        if (places[i + 2][j] === 'empty') {
                            return i + 2;
                        }
                    }
                    if (i > 1) {
                        if (places[i - 2][j] === 'empty') {
                            return i - 2;
                        }
                    }
                } else {
                    if (i < 5) {
                        if (places[i + 2][j] === 'empty' && places[i + 2][j - 1] !== 'empty') {
                            return i + 2;
                        }
                    }
                    if (i > 1) {
                        if (places[i - 2][j] === 'empty' && places[i - 2][j - 1] !== 'empty') {
                            return i - 2;
                        }
                    }
                }
            }
        }
        counter = 1;
    }
    //Diagonal bottom-left to top-right (board's top half section)
    for (let j = 0; j < 5; j++) {
        for (let i = 0; i < 6; i++) {
            if (places[i][i + j] === 'player' && places[i + 1][i + j + 1] === 'player') {
                counter++;
            } else {
                counter = 1;
            }
            if (counter == 3) {
                if (i + j + 2 < 6) {

                    if (places[i + 2][i + j + 2] === 'empty' && places[i + 2][i + j + 1] !== 'empty') {
                        return i + 2;
                    }
                }
            }
        }
        counter = 1;
    }
    //Diagonal bottom-left to top-right (board's bottom half section)
    for (let j = 0; j < 5; j++) {
        for (let i = 0; i + j < 6; i++) {
            if (places[i + j][i] === 'player' && places[i + j + 1][i + 1] === 'player') {
                counter++;
            } else {
                counter = 1;
            }
            if (counter == 3) {
                if (i + j + 2 <= 6) {

                    if (places[i + j + 2][i + 2] === 'empty' && places[i + j + 2][+1] !== 'empty') {
                        return i + j + 2;
                    }
                }
            }
        }
        counter = 1;
    }
    //Diagonal bottom-right to top-left (board's top half section)
    for (let j = 0; j < 5; j++) {
        for (let i = 0; i < 6; i++) {
            if (places[6 - i][i + j] === 'player' && places[6 - i - 1][i + j + 1] === 'player') {
                counter++;
            } else {
                counter = 1;
            }
            if (counter == 3) {
                if (i + j + 2 <= 5) {

                    if (places[6 - i - 2][i + j + 2] === 'empty' && places[6 - i - 2][i + j + 1] !== 'empty') {
                        return 6 - i - 2;
                    }
                }
            }
        }
        counter = 1;
    }
    //Diagonal bottom-right to top-left (board's bottom half section)


    //Player's horizontal two-end menace
    for (let j = 0; j < 5; j++) {
        for (let i = 0; i < 6; i++) {
            if (places[i][j] === 'player' && places[i + 1][j] === 'player') {
                counter++;
            }
            if (counter === 2) {
                if (j === 0) {
                    if (i > 1 && i < 5) {
                        if (places[i + 2][j] === "empty") {
                            return i + 2;
                        } else if (places[i - 1][j] === 'empty') {
                            return i - 1;
                        } else {
                            counter = 1;
                        }
                    }

                } else {
                    if (i > 1 && i < 5) {
                        if (places[i + 2][j] === "empty" && places[i + 2][j - 1] !== 'empty') {
                            return i + 2;
                        } else if (places[i - 1][j] === 'empty' && places[i - 1][j - 1] !== 'empty') {
                            return i - 1;
                        } else {
                            counter = 1;
                        }
                    }
                }

            }
        }
        counter = 1;
    }


    return (randomize());
}

function randomize() {
    let randomColumn = Math.floor(Math.random() * 6)
    const places = positions.map(function(column) {
        return column.map(function(row) {
            if (row === 'p1') {
                return 'player';
            } else if (row === 'p2') {
                return 'CPU';
            } else {
                return 'empty';
            }
        })
    });
    if (places[randomColumn][5] === 'empty') {
        return randomColumn;
    } else {
        randomize();
    }
}
//postGame section:

function gameOver() {
    if (round % 2 !== 0) {
        winner = 'Las azules';
    } else {
        winner = 'Las rojas';
    }

    const game = document.querySelector('.game');
    const postGame = document.querySelector('.postGame');

    setTimeout(() => {
        game.classList.remove('currentSection');
        postGame.classList.add('currentSection');
    }, 2500);

    const anouncement = document.querySelector('.winner');
    if (tie) {
        anouncement.textContent = '¡Empate!'
    } else {
        anouncement.textContent = `¡${winner} ganan la partida!`;
    }
}


function resetBoard() {
    poitions = [
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ];
    round = 1;
    winner = '';
    tie = false;
    const board = document.querySelector('.game-board');
    while (board.firstChild) {
        board.removeChild(board.firstChild);
    }
    const boardBackplate = document.querySelector('.game-board-backplate');
    while (boardBackplate.firstChild) {
        boardBackplate.removeChild(boardBackplate.firstChild);
    }
    const postGame = document.querySelector('.postGame');
    postGame.classList.remove('currentSection');

}

function newGame() {
    resetBoard();
    if (players === 2) {
        multiPlayer();
    } else {
        singlePlayer();
    }

}

function mainMenu() {
    resetBoard();
    const preGame = document.querySelector('.preGame');
    preGame.classList.add('currentSection');
}