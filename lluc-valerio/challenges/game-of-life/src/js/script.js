// ************************
// Global Vars
// ************************
// DOM
const domMain = document.getElementById('main');
const domStartButton = document.getElementById('start-button');
const domStopButton = document.getElementById('stop-button');
const domResetButton = document.getElementById('reset-button');
// GLOBAL VARS
const rows = 5;
const cols = 5;
let run = false;
// ************************
// FUNCTIONS
// ************************
function checkCell(x, y) {
  // let neighboursAlive = 0;
  // if
}
function startBoard() {
  run = true;
  do {
    for (let i = 0; i < rows; i += 1) {
      for (let j = 0; j < cols; j += 1) {
        checkCell(i, j);
      }
    }
  } while (run);
}
function stopBoard() {
  run = false;
}
function resetBoard() {
  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      document.getElementById(`cell-${i}-${j}`).innerHTML = '';
    }
  }
}
function paintCell() {
//   alert(this.id);
  //   debugger;
//   if (document.getElementById(this.id).style.background === '#fff' || document.getElementById(this.id).style.background === '') {
//     document.getElementById(this.id).style.background = '#000';
//   } else {
//     document.getElementById(this.id).style.background = '#fff';
//   }
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
// ************************
// EVENTS
// ************************
domStartButton.addEventListener('click', startBoard);
domStopButton.addEventListener('click', stopBoard);
domResetButton.addEventListener('click', resetBoard);
//
window.onload = () => {
  let dinamicBoard = '';
  for (let i = 0; i < rows; i += 1) {
    dinamicBoard += '<div class="main__row">';
    for (let j = 0; j < cols; j += 1) {
      dinamicBoard += `<div id="cell-${i}-${j}" class="main__cell"></div>`;
    }
    dinamicBoard += '</div>';
  }
  domMain.innerHTML = dinamicBoard;
  addBoardEvent();
};
