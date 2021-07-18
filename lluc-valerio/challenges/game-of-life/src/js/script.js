// ************************
// Global Vars
// ************************
// DOM
const domMain = document.getElementById('main');
const domStartButton = document.getElementById('start-button');
const domStopButton = document.getElementById('stop-button');
const domResetButton = document.getElementById('reset-button');
const domSizeButton = document.getElementById('size-button');
const domSizeContainer = document.getElementById('size-container');
const domColsTextBox = document.getElementById('cols');
const domRowsTextBox = document.getElementById('rows');
// GLOBAL VARS
let rows = 9;
let cols = 9;
const iterationBoard = [];
let IntervalId; // Id used for clear the asincron routine when the game is stopped.

// ************************
// FUNCTIONS
// ************************
function godMode(alive, x, y) {
  if (alive) {
    iterationBoard[x][y] = 'X';
  } else {
    iterationBoard[x][y] = '';
  }
}
function isAlive(x, y) {
  if (document.getElementById(`cell-${x}-${y}`).innerHTML === 'X') {
    return 1;
  }
  return 0;
}

function checkNeighbours(x, y) {
  let neighboursAlive = 0;
  // case -1,-1
  if (((x - 1) > -1) && ((y - 1) > -1)) {
    neighboursAlive += isAlive(x - 1, y - 1);
  }
  // case -1,0
  if (((x - 1) > -1)) {
    neighboursAlive += isAlive(x - 1, y);
  }
  // case -1,1
  if (((x - 1) > -1) && ((y + 1) < cols)) {
    neighboursAlive += isAlive(x - 1, y + 1);
  }
  // case 0,-1
  if (((y - 1) > -1)) {
    neighboursAlive += isAlive(x, y - 1);
  }
  // case 0,1
  if (((y + 1) < cols)) {
    neighboursAlive += isAlive(x, y + 1);
  }
  // case 1,-1
  if (((x + 1) < rows) && ((y - 1) > -1)) {
    neighboursAlive += isAlive(x + 1, y - 1);
  }
  // case 1,0
  if (((x + 1) < rows)) {
    neighboursAlive += isAlive(x + 1, y);
  }
  // case 1,1
  if (((x + 1) < rows) && ((y + 1) < cols)) {
    neighboursAlive += isAlive(x + 1, y + 1);
  }
  return neighboursAlive;
}
function checkCell(x, y) {
  const neighboursAlive = checkNeighbours(x, y);
  const isActualCellAlive = document.getElementById(`cell-${x}-${y}`).innerHTML === 'X';
  //
  if (neighboursAlive === 3 || (neighboursAlive >= 2 && neighboursAlive < 4 && isActualCellAlive)) {
    godMode(true, x, y);
  } else {
    godMode(false, x, y);
  }
}
function updateBoard() {
  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      document.getElementById(`cell-${i}-${j}`).innerHTML = iterationBoard[i][j];
    }
  }
}
function resetiterartionBoard() {
  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      iterationBoard[i][j] = 0;
    }
  }
}
function game() {
  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      checkCell(i, j);
    }
  }
  updateBoard();
}
function startBoard() {
  domResetButton.style.visibility = 'hidden';
  domSizeButton.style.visibility = 'hidden';
  domSizeContainer.style.visibility = 'hidden';
  //
  IntervalId = setInterval(game, 500);
}
function stopBoard() {
  clearInterval(IntervalId);
  domResetButton.style.visibility = 'visible';
  domSizeButton.style.visibility = 'visible';
  domSizeContainer.style.visibility = 'visible';
  //
  resetiterartionBoard();
}
function resetBoard() {
  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      document.getElementById(`cell-${i}-${j}`).innerHTML = '';
    }
  }
}
function paintCell() {
  if (document.getElementById(this.id).innerHTML === '') {
    document.getElementById(this.id).innerHTML = 'X';
  } else {
    document.getElementById(this.id).innerHTML = '';
  }
}
function addBoardEvent() {
  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      document.getElementById(`cell-${i}-${j}`).addEventListener('click', paintCell);
    }
  }
}
function generateBoard() {
  let dinamicBoard = '';
  domMain.innerHTML = dinamicBoard;
  //
  for (let i = 0; i < rows; i += 1) {
    iterationBoard[i] = [];
    dinamicBoard += '<div class="main__row">';
    for (let j = 0; j < cols; j += 1) {
      dinamicBoard += `<div id="cell-${i}-${j}" class="main__cell"></div>`;
    }
    dinamicBoard += '</div>';
  }
  domMain.innerHTML = dinamicBoard;
  addBoardEvent();
}
function changeSize() {
  cols = parseInt(domColsTextBox.value, 10);
  rows = parseInt(domRowsTextBox.value, 10);
  //
  domMain.innerHTML = '';
  generateBoard();
}
// ************************
// EVENTS

// ************************
domStartButton.addEventListener('click', startBoard);
domStopButton.addEventListener('click', stopBoard);
domResetButton.addEventListener('click', resetBoard);
domSizeButton.addEventListener('click', changeSize);
//
window.onload = () => {
  generateBoard();
  //
  domColsTextBox.value = cols;
  domRowsTextBox.value = rows;
};
