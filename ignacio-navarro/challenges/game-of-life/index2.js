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
    touched = [...touched, ...cellsAround(arr[i])];
  }
  return touched;
}

function newPhase(arr = []) {
  const cellsAroundAlive = touchedCells(arr);
  console.log(`cellsDepuration: ${cellsAroundAlive}`);
  const cellsCountAll = removeDupes(cellsAroundAlive);
  console.log(`cellsDepuration: ${cellsCountAll}`);
  const cellsInNumbers = arrToNum(cellsCountAll);
  console.log(`cellsDepuration: ${cellsInNumbers}`);
  const newCellsAlive = cellsDepuration(cellsInNumbers);
  console.log(`cellsDepuration: ${newCellsAlive}`);
  // newCellsAlive = numToArray(newCellsAlive);
  return newCellsAlive;
}

setInterval(() => newPhase(aliveCells), 1000);
