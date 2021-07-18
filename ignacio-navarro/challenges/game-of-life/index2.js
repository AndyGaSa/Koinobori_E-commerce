let canvas = document.getElementById("canvas-container");
let ctx = canvas.getContext("2d");  
let startButton = document.getElementById("start-button");
let stopButton = document.getElementById("stop-button");
let startTime;

let aliveCells = [];
aliveCells = [];
let arraySize = 80
let parcelSize = 10

startButton.addEventListener("click",start)
stopButton.addEventListener("click",stop)
canvas.addEventListener("click",updateCellsArray)

function newCell (e){
  let windowWidth = e.srcElement.clientWidth;
  let blockSize = windowWidth/arraySize;
  let clickedCell = [Math.round(e.offsetY / blockSize), Math.round(e.offsetX / blockSize)]
  return clickedCell
}
function updateCellsArray (e) {
  aliveCells.push(newCell(e))
  paintArray(aliveCells)
}

function paintArray(arr=[]){
  let printedArray = newArray(arraySize,arraySize/2)
  ctx.clearRect(0, 0, 800, 400);
  for (let i = 0; i < arr.length;i += 1){
    printedArray[arr[i][0]][arr[i][1]] = 1;
    ctx.fillStyle = 'orange'; 
    ctx.fillRect(arr[i][1]*parcelSize, arr[i][0]*parcelSize, parcelSize, parcelSize)
  }
  return printedArray
}
function numToArray(num) {
  const arrayOfArrays = [];
  for (let i = 0; i < num.length; i += 1) {
    let element = num[i].split(",");
    element[0] = parseInt(element[0])
    element[1] = parseInt(element[1])
    arrayOfArrays.push(element);
  }
  return arrayOfArrays;
}
function arrToNum(arr = []) {
  const numberArray = [];
  for (let i = 0; i < arr.length; i += 1) {
    const element = arr[i]
    let elementArray = element.toString();
    numberArray.push(elementArray);
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
  let stringAlive = arrToNum(aliveCells);
  console.log(aliveCells)
  const alive = [];
  for (const cell in countedCells) {
    if(stringAlive.includes(cell)){
      if (countedCells[cell] === 3 || countedCells[cell] === 4){
        alive.push(cell);
      }
    } else if (countedCells[cell] === 3) {
      alive.push(cell);
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
function newArray(width,height){
  let arr = [];
  for (let i = 0; i < height; i+=1){
      arr.push([])
      for (let j = 0; j < width; j+=1){
          arr[i].push(0)
      }
  }
  return arr
}
function newPhase(arr = []) {
  const cellsAroundAlive = touchedCells(arr);
  const cellsToNumbers = arrToNum(cellsAroundAlive);
  const cellsCountAll = removeDupes(cellsToNumbers);
  const newCellsAlive = cellsDepuration(cellsCountAll);
  const cellsToArray = numToArray(newCellsAlive);
  paintArray(cellsToArray)
  return cellsToArray;
}

function start (){
  startTime = setInterval(() => aliveCells = newPhase(aliveCells), 1000);
}

function stop (){
  clearInterval(startTime)
}
