/* const GameOfLife = require('./src/game-of-life'); */
class GameOfLife extends Array { /* extends: toma las propiedades del proto de array. */
  constructor() {
    super(); /* Invoca al constructor de Array,
                  necesario porque class GameOfLife extends of class Array */
    this.gridSize = 5;
  }

  gridArrayGenerator(newGridSize) {
    let definitiveGridSize;
    if (newGridSize === undefined) {
      definitiveGridSize = this.gridSize + 2; /* Incremento en dos el valor de gridSize para
                                                  obtener dos filas y dos columnas que no serán
                                                  utilizadas en el juego,pero son necesarias para
                                                  realizar la comprobacion de cellulas vivas. */
    } else {
      definitiveGridSize = newGridSize + 2;
      this.gridSize = newGridSize;
    }
    const myGridArray = new GameOfLife();
    myGridArray.gridSize = this.gridSize;
    for (let i = 0; i < definitiveGridSize; i += 1) {
      const temporalArray = [];
      for (let j = 0; j < definitiveGridSize; j += 1) {
        temporalArray.push(0);
      }
      myGridArray.push(temporalArray);
    }
    return myGridArray;
  }

  playRound() {
    function howManyAreAlived(i, j, myGridArray) {
      let cellsAlive = 0;

      if (myGridArray[i - 1][j - 1] === 1) {
        cellsAlive += 1;
      }
      if (myGridArray[i - 1][j] === 1) {
        cellsAlive += 1;
      }
      if (myGridArray[i - 1][j + 1] === 1) {
        cellsAlive += 1;
      }
      if (myGridArray[i][j - 1] === 1) {
        cellsAlive += 1;
      }
      if (myGridArray[i][j + 1] === 1) {
        cellsAlive += 1;
      }
      if (myGridArray[i + 1][j - 1] === 1) {
        cellsAlive += 1;
      }
      if (myGridArray[i + 1][j] === 1) {
        cellsAlive += 1;
      }
      if (myGridArray[i + 1][j + 1] === 1) {
        cellsAlive += 1;
      }
      return cellsAlive;
    }
    const newGrid = new GameOfLife();
    const changedGrid = newGrid.gridArrayGenerator(this.gridSize);
    for (let i = 1; i < this.gridSize + 1; i += 1) {
      for (let j = 1; j < this.gridSize + 1; j += 1) {
        if (this[i][j] === 0) {
          if (howManyAreAlived(i, j, this) === 3) {
            changedGrid[i][j] = 1;
          }
        }
        if (this[i][j] === 1) {
          if (howManyAreAlived(i, j, this) < 2 || howManyAreAlived(i, j, this) > 3) {
            changedGrid[i][j] = 0;
          } else {
            changedGrid[i][j] = 1;
          }
        }
      }
    }
    return changedGrid;
  }
}
const myGridArray = new GameOfLife();
let gameArray = myGridArray.gridArrayGenerator(10);

function cellsAliveChosen() {
  for (let i = 0; i <= 10; i += 1) {
    for (let j = 0; j <= 10; j += 1) {
      const currentTh = document.getElementById(`item-${i}-${j}`);
      if (currentTh.style.backgroundColor === 'rgb(255, 255, 0)') {
        gameArray[i][j] = 1;
      }
    }
  }
}
/* gameArray[2][1] = 1;
gameArray[2][2] = 1;
gameArray[2][3] = 1; */

const hola = document.getElementById('main__game-of-life-grid');
let tableHtml = '<table cellpadding=0 cellspacing=0>';
for (let i = 0; i <= 10; i += 1) {
  tableHtml += '<tr>';
  for (let j = 0; j <= 10; j += 1) {
    tableHtml += `<th id=item-${i}-${j} class=itemTh onclick=changeColor('item-${i}-${j}')>`;
    tableHtml += '</th>';
  }
  tableHtml += '</tr>';
}
tableHtml += '</table>';
hola.innerHTML = tableHtml;

function letsGoDrawTheGrid(gameOfLifeArray) {
  for (let i = 1; i < gameOfLifeArray.length - 1; i += 1) {
    for (let j = 1; j < gameOfLifeArray.length - 1; j += 1) {
      if (gameOfLifeArray[i][j] === 1) {
        document.getElementById(`item-${i}-${j}`).style.backgroundColor = 'rgb(255, 255, 0)';
      } else {
        document.getElementById(`item-${i}-${j}`).style.backgroundColor = 'rgb(126, 126, 126)';
      }
    }
  }
}
function toPlay(gameOfLifeArray) {
  const playGameRound = gameOfLifeArray.playRound();
  letsGoDrawTheGrid(playGameRound);
  return playGameRound;
}

function changeColor(thIdName) {
  const currentTh = document.getElementById(thIdName);
  if (currentTh.style.backgroundColor === 'rgb(255, 255, 0)') {
    currentTh.style.backgroundColor = 'rgb(126, 126, 126)';
  } else {
    currentTh.style.backgroundColor = 'rgb(255, 255, 0)';
  }
}
function startPlay() {
  cellsAliveChosen();
  const buttonToStart = document.getElementById('startButton');
  buttonToStart.innerHTML = 'STOP';
  setInterval(() => { gameArray = toPlay(gameArray); }, 800);
}
document.getElementById('startButton').addEventListener('click', () => { startPlay(); });

function clear() {
  document.location.reload();
}
document.getElementById('clearButton').addEventListener('click', () => { clear(); });
