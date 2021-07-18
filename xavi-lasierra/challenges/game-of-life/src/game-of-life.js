class LifeGrid {
  constructor(size) {
    this.width = 16 * size;
    this.height = 16 * size;

    this.grid = new Array(this.height);
    for (let i = 0; i < this.height; i += 1) {
      this.grid[i] = new Array(this.width).fill(0);
    }
  }

  setCellState(x, y, state) {
    this.grid[y][x] = state;
    return state;
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

// VARIABLES
// board matrix
let gameGrid;

// board canvas
const canvas = document.getElementById('gameBoard');
const ctx = canvas.getContext('2d');

// buttons sliders
const startButton = document.getElementById('start-button');
const resetButton = document.getElementById('reset-button');
const nextButton = document.getElementById('next-button');
const previousButton = document.getElementById('previous-button');
const numCellsSlider = document.getElementById('number-of-cells');
const velocitySlider = document.getElementById('generation-velocity');
const styleCustom = document.getElementById('style-custom');
const backgroundColorCustom = document.getElementById('background-color');
const gridColorCustom = document.getElementById('grid-color');
const cellColorCustom = document.getElementById('cell-color');
const styleChooser = document.getElementById('style');
const cellChooser = document.getElementById('cell-creator');

// cell generation variables
let intervalTime;
let running = false;
let lastGenerations;
let gridColor;
let cellColor;
let backgroundColor;

function printFullCell(x, y) {
  const unitWidth = canvas.width / gameGrid.width;
  const unitHeight = canvas.height / gameGrid.height;
  ctx.beginPath();
  ctx.fillStyle = cellColor;
  ctx.strokeStyle = gridColor;
  ctx.rect(unitWidth * x, unitHeight * y, unitWidth, unitHeight);
  ctx.fillRect(unitWidth * x, unitHeight * y, unitWidth, unitHeight);
  ctx.stroke();
}

function printEmptyCell(x, y) {
  const unitWidth = canvas.width / gameGrid.width;
  const unitHeight = canvas.height / gameGrid.height;
  ctx.beginPath();
  ctx.fillStyle = backgroundColor;
  ctx.strokeStyle = gridColor;
  ctx.rect(unitWidth * x, unitHeight * y, unitWidth, unitHeight);
  ctx.fillRect(unitWidth * x, unitHeight * y, unitWidth, unitHeight);
  ctx.stroke();
}

function customStyleSelector() {
  switch (styleChooser.value) {
    case 'rainbow':
      backgroundColor = '#FFFFFF';
      gridColor = '#FFFFFF';
      cellColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      break;
    case 'changer':
      if (backgroundColor === '#000000') {
        backgroundColor = '#FFFFFF';
        gridColor = '#FFFFFF';
        cellColor = '#000000';
      } else {
        backgroundColor = '#000000';
        gridColor = '#000000';
        cellColor = '#FFFFFF';
      }
      break;
    default:
      backgroundColor = '#FFFFFF';
      gridColor = '#808080';
      cellColor = '#000000';
      break;
  }
}

function drawCanvas() {
  if (styleCustom.checked) { customStyleSelector(); }
  for (let i = 0; i < gameGrid.height; i += 1) {
    for (let j = 0; j < gameGrid.width; j += 1) {
      if (gameGrid.grid[i][j] === 0) {
        printEmptyCell(j, i);
      } else {
        printFullCell(j, i);
      }
    }
  }
}

function newBoard() {
  if (gameGrid === undefined || gameGrid === null) {
    gameGrid = new LifeGrid(numCellsSlider.value);
    lastGenerations = new Array(10).fill(null);

    intervalTime = velocitySlider.value;
    backgroundColor = backgroundColorCustom.value;
    gridColor = gridColorCustom.value;
    cellColor = cellColorCustom.value;
    canvas.width = 1600;
    canvas.height = 1600;
  } else {
    const aux = new LifeGrid(numCellsSlider.value);
    let nCells;
    if (gameGrid.grid.length > numCellsSlider.value * 16) {
      nCells = numCellsSlider.value * 16;
    } else {
      nCells = gameGrid.grid.length;
    }
    for (let i = 0; i < nCells; i += 1) {
      for (let j = 0; j < nCells; j += 1) {
        aux.grid[i][j] = gameGrid.grid[i][j];
      }
    }
    gameGrid = aux;
  }

  drawCanvas();
}

function customCell(x, y) {
  let clicks = [];
  switch (cellChooser.value) {
    case 'blinkerV':
      clicks = [
        [1],
        [1],
        [1]
      ];
      break;
    case 'blinkerH':
      clicks = [
        [1, 1, 1]
      ];
      break;
    case 'gliderLD':
      clicks = [
        [0, 1, 0],
        [0, 0, 1],
        [1, 1, 1]
      ];
      break;
    default:
      clicks = [[1]];
      break;
  }
  for (let i = 0; i < clicks.length; i += 1) {
    for (let j = 0; j < clicks[i].length; j += 1) {
      gameGrid.setCellState(x + j, y + i, clicks[i][j]);
    }
  }
  drawCanvas();
}

function onClickCanvas(x, y) {
  if (cellChooser.value === 'single') {
    const cell = gameGrid.changeCellState(x, y);
    if (cell === 0) {
      printEmptyCell(x, y);
    } else {
      printFullCell(x, y);
    }
  } else {
    customCell(x, y);
  }
}

canvas.addEventListener('click', (evt) => {
  if (running) return;
  const pos = canvas.getBoundingClientRect();
  let posX = evt.pageX - (pos.left + window.scrollX);
  let posY = evt.pageY - (pos.top + window.scrollY);
  posX /= (pos.right / gameGrid.width);
  posY /= (pos.bottom / gameGrid.height);
  onClickCanvas(Math.floor(posX), Math.floor(posY));
});

function play() {
  const nextGen = gameGrid.nextGeneration();
  lastGenerations.pop();
  lastGenerations.unshift(gameGrid);
  gameGrid = nextGen;
  drawCanvas();

  if (running) {
    setTimeout(play, intervalTime);
  }
}

function startStop() {
  if (running) {
    running = false;
    startButton.innerHTML = '<i class="fas fa-play fa-lg"></i>';
  } else {
    running = true;
    startButton.innerHTML = '<i class="fas fa-pause fa-lg"></i>';
    setTimeout(play, intervalTime);
  }
}

startButton.addEventListener('click', () => {
  startStop();
});

resetButton.addEventListener('click', () => {
  gameGrid = null;
  if (running) { startStop(); }
  newBoard();
});

previousButton.addEventListener('click', () => {
  if (lastGenerations === null) return;
  [gameGrid] = lastGenerations;
  lastGenerations.shift();
  lastGenerations.push(null);
  newBoard();
});

nextButton.addEventListener('click', () => {
  play();
});

numCellsSlider.addEventListener('change', () => {
  newBoard();
}, false);

velocitySlider.addEventListener('change', () => {
  intervalTime = velocitySlider.value;
}, false);

backgroundColorCustom.addEventListener('change', () => {
  backgroundColor = backgroundColorCustom.value;
  drawCanvas();
}, false);

gridColorCustom.addEventListener('change', () => {
  gridColor = gridColorCustom.value;
  drawCanvas();
}, false);

cellColorCustom.addEventListener('change', () => {
  cellColor = cellColorCustom.value;
  drawCanvas();
}, false);

styleCustom.addEventListener('change', () => {
  if (!styleCustom.checked) {
    document.getElementById('user-style').classList = 'custom-style';
    document.getElementById('choose-style').classList = 'preset-style hide';
    document.getElementById('style-type-selector__text').innerHTML = 'Custom style';

    backgroundColor = backgroundColorCustom.value;
    gridColor = gridColorCustom.value;
    cellColor = cellColorCustom.value;
    drawCanvas();
  } else {
    document.getElementById('user-style').classList = 'custom-style hide';
    document.getElementById('choose-style').classList = 'preset-style';
    document.getElementById('style-type-selector__text').innerHTML = 'Preset style';

    drawCanvas();
  }
}, false);

styleChooser.addEventListener('change', () => {
  drawCanvas();
}, false);

newBoard();
