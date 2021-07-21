const canvas = document.getElementById('gol-canvas');
const ctx = canvas.getContext('2d');
let matrixGrid = [];
let timer;

// вешаем на кэнвэс событие клик:
function createMatrix() {
  const m = 40;
  const n = 40;
  for (let i = 0; i < n; i++) {
    matrixGrid[i] = [];
    for (let j = 0; j < m; j++) {
      matrixGrid[i][j] = 0;
    }
  }
}

createMatrix();

function drawField() {
  ctx.clearRect(0, 0, 400, 400);
  for (let i = 0; i < 40; i++) {
    for (let j = 0; j < 40; j++) {
      if (matrixGrid[i][j] === 1) {
        ctx.fillRect(j * 10, i * 10, 10, 10);
      }
    }
  }
}

canvas.onclick = function (event) {
  let x = event.offsetX; // при клике определяем координаты мыши относительно канваса
  let y = event.offsetY;
  console.log(x);
  console.log(y);
  x = Math.floor(x / 10); // 400/10 = 40 squares on the playfield
  y = Math.floor(y / 10); // 400/10 = 40
  matrixGrid[y][x] = 1; // onde eu cliquei, bateu 1
  console.log(matrixGrid);
  drawField();
};

function edgeZero(i) {
  if (i === 0) {
    return 40;
  }
  return i;
}
function edgeEnd(i) {
  if (i === 39) {
    return -1;
  }
  return i;
}
function startGame() {
  const matrixLifeCheck = [];
  for (let i = 0; i < 40; i++) {
    matrixLifeCheck[i] = [];
    for (let j = 0; j < 40; j++) {
      let neighbor = 0;
      if (matrixGrid[edgeZero(i) - 1][j] === 1) { // up
        neighbor++;
      }
      if (matrixGrid[i][edgeEnd(j) + 1] === 1) { // right
        neighbor++;
      }
      if (matrixGrid[edgeEnd(i) + 1][j] === 1) { // down
        neighbor++;
      }
      if (matrixGrid[i][edgeZero(j) - 1] === 1) { // left
        neighbor++;
      }
      if (matrixGrid[edgeZero(i) - 1][edgeEnd(j) + 1] === 1) { // diagonal
        neighbor++;
      }
      if (matrixGrid[edgeEnd(i) + 1][edgeEnd(j) + 1] === 1) { // diagonal
        neighbor++;
      }
      if (matrixGrid[edgeEnd(i) + 1][edgeZero(j) - 1] === 1) { // diagonal
        neighbor++;
      }
      if (matrixGrid[edgeZero(i) - 1][edgeZero(j) - 1] === 1) { // // diagonal
        neighbor++;
      }
      (neighbor === 2 || neighbor === 3) ? matrixLifeCheck[i][j] = 1 : matrixLifeCheck[i][j] == 0;
    }
  }
  matrixGrid = matrixLifeCheck;
  drawField();
  timer = setTimeout(startGame, 400);
}

document.getElementById('start').onclick = startGame;
