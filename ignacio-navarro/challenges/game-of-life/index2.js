let aliveCells = [];
aliveCells = [[3, 3], [3, 4], [3, 5], [4, 2], [4, 3], [4, 4]];

function numToArray(num) {
  const arrayOfArrays = [];
  for (let i = 0; i < num.length; i += 1) {
    const element = num[i].toString(10).replace(/\D/g, '0').split('').map(Number);
    arrayOfArrays.push(element);
  }
  return arrayOfArrays;
}
function arrToNum(arr = []) {
  const numberArray = [];
  for (let i = 0; i < arr.length; i += 1) {
    const element = Number(arr[i].join(''));
    numberArray.push(element);
  }
  return numberArray;
}

function removeDupes(arr) {
  const cellsCount = {};
  let i = arr.length;
  while (i--) {
    if (cellsCount.hasOwnProperty(arr[i])) {
      cellsCount[arr[i]] += 1;
      arr.splice(i, 1);
    } else {
      cellsCount[arr[i]] = 1;
    }
  }
  return cellsCount;
}
function cellsDepuration(countedCells) {
  const alive = [];
  for (const cell in countedCells) {
    if (countedCells[cell] === 3) {
      alive.push(parseInt(cell));
    }
  }
  return alive;
}

function cellsAround(cell) {
  const cellNeighbours = [];
  cellNeighbours.push([cell[0] - 1, cell[1] - 1]);
  cellNeighbours.push([cell[0] - 1, cell[1]]);
  cellNeighbours.push([cell[0] - 1, cell[1] + 1]);
  cellNeighbours.push([cell[0], cell[1] - 1]);
  cellNeighbours.push([cell[0], cell[1]]);
  cellNeighbours.push([cell[0], cell[1] + 1]);
  cellNeighbours.push([cell[0] + 1, cell[1] - 1]);
  cellNeighbours.push([cell[0] + 1, cell[1]]);
  cellNeighbours.push([cell[0] + 1, cell[1] + 1]);

  return cellNeighbours;
}
function touchedCells(arr = []) {
  let touched = [];
  for (let i = 0; i < arr.length; i += 1) {
    touched = touched.concat(cellsAround(arr[i]));
  }
  return touched;
}
function paintArray(arr=[]){
  let printedArray = 
    [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
  for (let i = 0; i < arr.length;i += 1){
    printedArray[arr[i][0]][arr[i][1]] = 1;
  }
  return printedArray
}

function newPhase(arr = []) {
  const cellsAroundAlive = touchedCells(arr);
  const cellsToNumbers = arrToNum(cellsAroundAlive);
  const cellsCountAll = removeDupes(cellsToNumbers);
  const newCellsAlive = cellsDepuration(cellsCountAll);
  const cellsToArray = numToArray(newCellsAlive);
  console.table(paintArray(cellsToArray));
  return cellsToArray;
}

setInterval(() => aliveCells = newPhase(aliveCells), 1000);
