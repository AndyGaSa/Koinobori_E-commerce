const canvas = document.getElementById('canvas-container');
const ctx = canvas.getContext('2d');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button');
const clearButton = document.getElementById('clear-button');
const speedSlider = document.getElementById('speed-slider');
let wantedSpeed = 50;
let startTime = 0;
let paintMode = false;

let aliveCells = [];
let cellsReservoir = [];
aliveCells = [];
const arraySize = 400;
const parcelSize = 2;

function newArray(width, height) {
  const arr = [];
  for (let i = 0; i < height; i += 1) {
    arr.push([]);
    for (let j = 0; j < width; j += 1) {
      arr[i].push(0);
    }
  }
  return arr;
}
function paintArray(arr = []) {
  const printedArray = newArray(arraySize, arraySize / 2);
  ctx.clearRect(0, 0, 800, 400);
  for (let i = 0; i < arr.length; i += 1) {
    printedArray[arr[i][0]][arr[i][1]] = 1;
    ctx.fillStyle = 'orange';
    ctx.fillRect((arr[i][1] * parcelSize) - parcelSize, (arr[i][0] * parcelSize) - parcelSize, parcelSize * 2, parcelSize * 2);
  }
  return printedArray;
}
function clear() {
  aliveCells = [];
  paintArray(aliveCells);
}
function reset() {
  aliveCells = cellsReservoir;
  paintArray(aliveCells);
}
function arrToNum(arr = []) {
  const numberArray = [];
  for (let i = 0; i < arr.length; i += 1) {
    const element = arr[i];
    const elementArray = element.toString();
    numberArray.push(elementArray);
  }
  return numberArray;
}
function removeDupes(arr) {
  const cellsCount = {};
  for (let i = arr.length; i >= 0; i -= 1) {
    if (Object.prototype.hasOwnProperty.call(cellsCount, arr[i])) {
      cellsCount[arr[i]] += 1;
      arr.splice(i, 1);
    } else {
      cellsCount[arr[i]] = 1;
    }
  }
  return cellsCount;
}
function cellsAround(cell) {
  const cellNeighbours = [];
  if ((cell[1] !== 0) && (cell[0] !== 0)) {
    cellNeighbours.push([cell[0] - 1, cell[1] - 1]);
  }
  if ((cell[1] !== arraySize) && (cell[0] !== 0)) {
    cellNeighbours.push([cell[0] - 1, cell[1] + 1]);
  }
  if (cell[0] !== 0) {
    cellNeighbours.push([cell[0] - 1, cell[1]]);
  }
  if (cell[1] !== 0) {
    cellNeighbours.push([cell[0], cell[1] - 1]);
  }
  if (cell[1] !== arraySize) {
    cellNeighbours.push([cell[0], cell[1] + 1]);
  }
  if ((cell[0] !== arraySize / 2 - 1) && (cell[1] !== 0)) {
    cellNeighbours.push([cell[0] + 1, cell[1] - 1]);
  }
  if ((cell[0] !== arraySize / 2 - 1) && (cell[1] !== arraySize)) {
    cellNeighbours.push([cell[0] + 1, cell[1] + 1]);
  }
  if (cell[0] !== arraySize / 2 - 1) {
    cellNeighbours.push([cell[0] + 1, cell[1]]);
  }
  cellNeighbours.push([cell[0], cell[1]]);
  return cellNeighbours;
}
function touchedCells(arr = []) {
  let touched = [];
  for (let i = 0; i < arr.length; i += 1) {
    touched = touched.concat(cellsAround(arr[i]));
  }
  return touched;
}
function cellsDepuration(countedCells) {
  const stringAlive = arrToNum(aliveCells);
  const alive = [];
  const countedCellsArray = Object.keys(countedCells);
  for (let cell = 0; cell < countedCellsArray.length; cell += 1) {
    if (stringAlive.includes(countedCellsArray[cell])) {
      if (countedCells[countedCellsArray[cell]] === 3
        || countedCells[countedCellsArray[cell]] === 4) {
        alive.push(countedCellsArray[cell]);
      }
    } else if (countedCells[countedCellsArray[cell]] === 3) {
      alive.push(countedCellsArray[cell]);
    }
  }

  return alive;
}
function numToArray(num) {
  const arrayOfArrays = [];
  for (let i = 0; i < num.length; i += 1) {
    const element = num[i].split(',');
    element[0] = Number(element[0]);
    element[1] = Number(element[1]);
    arrayOfArrays.push(element);
  }
  return arrayOfArrays;
}
function newPhase(arr = []) {
  const cellsAroundAlive = touchedCells(arr);
  const cellsToNumbers = arrToNum(cellsAroundAlive);
  const cellsCountAll = removeDupes(cellsToNumbers);
  const newCellsAlive = cellsDepuration(cellsCountAll);
  const cellsToArray = numToArray(newCellsAlive);
  paintArray(cellsToArray);
  return cellsToArray;
}
function start() {
  startTime = setInterval(() => { aliveCells = newPhase(aliveCells); }, (5000 / wantedSpeed));
}

function stop() {
  clearInterval(startTime);
  startTime = 0;
}

function speedChange() {
  if (startTime >= 1) {
    stop();
    if (speedSlider.value === '0') {
      wantedSpeed = 1;
    } else {
      wantedSpeed = speedSlider.value;
    }
    start();
  } else if (speedSlider.value === '0') {
    wantedSpeed = 1;
  } else {
    wantedSpeed = speedSlider.value;
  }
}

function newCell(e) {
  const windowWidth = e.srcElement.clientWidth;
  const blockSize = windowWidth / arraySize;
  const clickedCell = [Math.round(e.offsetY / blockSize) + parcelSize,
    Math.round(e.offsetX / blockSize)];
  return clickedCell;
}

function updateCellsArray(e) {
  if (newCell(e) !== undefined) {
    if (paintMode) {
      aliveCells.push(newCell(e));
      paintArray(aliveCells);
      cellsReservoir = aliveCells;
    }
  }
}

startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);
clearButton.addEventListener('click', clear);
speedSlider.addEventListener('change', speedChange);
canvas.addEventListener('mousedown', () => { paintMode = true; });
canvas.addEventListener('mouseup', () => { paintMode = false; });
canvas.addEventListener('mouseleave', () => { paintMode = false; });
canvas.addEventListener('mousemove', updateCellsArray);
