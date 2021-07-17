class LifeGrid {
  constructor(size) {
    this.width = 16 * size;
    this.height = 16 * size;

    this.grid = new Array(this.height);
    for (let i = 0; i < this.height; i += 1) {
      this.grid[i] = new Array(this.width).fill(0);
    }
  }

  changeCellState(x, y) {
    if (this.grid[y][x] === 0) {
      this.grid[y][x] = 1;
    } else {
      this.grid[y][x] = 0;
    }
    return this.grid[y][x];
  }

  aliveNeighbors(x, y) {
    let result = 0;
    for (let i = -1; i <= 1; i += 1) {
      if (y + i >= 0 && y + i <= this.height - 1) {
        for (let j = -1; j <= 1; j += 1) {
          if (x + j >= 0 && x + j <= this.width - 1 && !(i === 0 && j === 0)) {
            if (this.grid[y + i][x + j] === 1) {
              result += 1;
            }
          }
        }
      }
    }
    return result;
  }

  cellCheckNext(x, y) {
    if (this.grid[y][x] === 0 && this.aliveNeighbors(x, y) === 3) {
      return 1;
    }
    if (this.grid[y][x] === 1 && (this.aliveNeighbors(x, y) < 2 || this.aliveNeighbors(x, y) > 3)) {
      return 0;
    }
    return this.grid[y][x];
  }

  nextGeneration() {
    const aux = new LifeGrid(this.height / 16);
    for (let i = 0; i < this.height; i += 1) {
      for (let j = 0; j < this.width; j += 1) {
        aux.grid[i][j] = this.cellCheckNext(j, i);
      }
    }
    return aux;
  }
}

let gameGrid = new LifeGrid(0.5);
const canvas = document.getElementById('gameBoard');
const ctx = canvas.getContext('2d');
canvas.width = 1600;
canvas.height = 1600;
const startButton = document.getElementById('start-button');

const widthCells = gameGrid.width;
const heightCells = gameGrid.height;
let startTime = null;
const intervalTime = 100;
let running = false;

function printFullCell(x, y) {
  const unitWidth = canvas.width / widthCells;
  const unitHeight = canvas.height / heightCells;
  ctx.beginPath();
  ctx.fillStyle = '#000';
  ctx.strokeStyle = 'red';
  ctx.rect(unitWidth * x, unitHeight * y, unitWidth, unitHeight);
  ctx.fillRect(unitWidth * x, unitHeight * y, unitWidth, unitHeight);
  ctx.stroke();
}

function printEmptyCell(x, y) {
  const unitWidth = canvas.width / widthCells;
  const unitHeight = canvas.height / heightCells;
  ctx.beginPath();
  ctx.fillStyle = '#fff';
  ctx.strokeStyle = 'red';
  ctx.rect(unitWidth * x, unitHeight * y, unitWidth, unitHeight);
  ctx.fillRect(unitWidth * x, unitHeight * y, unitWidth, unitHeight);
  ctx.stroke();
}

function drawCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < heightCells; i += 1) {
    for (let j = 0; j < widthCells; j += 1) {
      if (gameGrid.grid[i][j] === 0) {
        printEmptyCell(j, i);
      } else {
        printFullCell(j, i);
      }
    }
  }
}

function onClickCanvas(x, y) {
  const cell = gameGrid.changeCellState(x, y);
  if (cell === 0) {
    printEmptyCell(x, y);
  } else {
    printFullCell(x, y);
  }
}

canvas.addEventListener('click', (evt) => {
  const pos = canvas.getBoundingClientRect();
  let posX = evt.pageX - (pos.left + window.scrollX);
  let posY = evt.pageY - (pos.top + window.scrollY);
  posX /= (pos.right / widthCells);
  posY /= (pos.bottom / heightCells);
  onClickCanvas(Math.floor(posX), Math.floor(posY));
});

function play(timestamp) {
  if (startTime === null) { startTime = timestamp; }
  const elapsed = timestamp - startTime;

  if (elapsed > intervalTime) {
    gameGrid = gameGrid.nextGeneration();
    drawCanvas();
    startTime = null;
  }
  if (running) { window.requestAnimationFrame(play); }
}

function startStop() {
  if (running) {
    running = false;
    startButton.innerHTML = 'START';
  } else {
    running = true;
    startButton.innerHTML = 'STOP';
    window.requestAnimationFrame(play);
  }
}

startButton.addEventListener('click', () => {
  startStop();
});

drawCanvas();
