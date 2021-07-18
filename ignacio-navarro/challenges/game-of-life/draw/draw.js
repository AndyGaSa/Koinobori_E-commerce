let canvas = document.getElementById("canvas-container");
let ctx = canvas.getContext("2d");  
let startButton = document.getElementById("start-button");
let stopButton = document.getElementById("stop-button");
let resetButton = document.getElementById("reset-button");
let clearButton = document.getElementById("clear-button");
let speedSlider = document.getElementById("speed-slider")
let wantedSpeed = 50;
let startTime =0;
let paintMode = false;

let aliveCells = [];
let cellsReservoir = []
aliveCells = [];
let arraySize = 400
let parcelSize = 2

startButton.addEventListener("click",start)
stopButton.addEventListener("click",stop)
resetButton.addEventListener('click',reset)
clearButton.addEventListener('click',clear)
speedSlider.addEventListener("change", speedChange)
canvas.addEventListener("mousedown",()=>{paintMode = true})
canvas.addEventListener("mouseup",()=>{paintMode = false})
canvas.addEventListener("mouseleave",()=>{paintMode = false})
canvas.addEventListener("mousemove",updateCellsArray)

function clear (){
  aliveCells =[]
  paintArray(aliveCells)
}
function reset (){
  aliveCells = cellsReservoir
  paintArray(aliveCells)
}

function speedChange(){
  if (startTime >= 1){
    stop()
    if (speedSlider.value === "0"){
      wantedSpeed = 1;
    } else {
      wantedSpeed = speedSlider.value;
    }
    start()
  } else {
    if (speedSlider.value === "0"){
      wantedSpeed = 1;
    } else {
      wantedSpeed = speedSlider.value;
    }
  }
  
}

function newCell (e){
  let windowWidth = e.srcElement.clientWidth;
  let blockSize = windowWidth/arraySize;
  let clickedCell = [Math.round(e.offsetY / blockSize)+parcelSize, Math.round(e.offsetX / blockSize)]
  return clickedCell
}
function updateCellsArray (e) {
  if (newCell(e)!==undefined){
    if (paintMode){
      aliveCells.push(newCell(e))
      paintArray(aliveCells)
      cellsReservoir = aliveCells
    }
  }
  
  
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
    if ((cell[1] !== 0) && (cell[0] !== 0)){
      cellNeighbours.push([cell[0] - 1, cell[1] - 1]);
    }
    if ((cell[1] !== arraySize) && (cell[0] !== 0)){
      cellNeighbours.push([cell[0] - 1, cell[1] + 1]);
    }
    if (cell[0] !== 0){
      cellNeighbours.push([cell[0] - 1, cell[1]]);
    }
    if (cell[1] !== 0){
      cellNeighbours.push([cell[0], cell[1]-1]);
    }
    if (cell[1] !== arraySize){
      cellNeighbours.push([cell[0], cell[1]+1]);
    }
    if ((cell[0] !== arraySize/2-1) && (cell[1] !== 0)){
      cellNeighbours.push([cell[0] + 1, cell[1] - 1]);
    }
    if ((cell[0] !== arraySize/2-1) && (cell[1] !== arraySize)){
      cellNeighbours.push([cell[0] + 1, cell[1] + 1]);
    }
    if (cell[0] !== arraySize/2-1){
      cellNeighbours.push([cell[0]+1, cell[1]]);
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
  startTime = setInterval(() => aliveCells = newPhase(aliveCells), (5000/wantedSpeed));
}

function stop (){
  clearInterval(startTime)
  startTime = 0;
}
