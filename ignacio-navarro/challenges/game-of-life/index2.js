let aliveCells = [33,34,35,42,43,44]

function checkNeighbours (arr = []){
    let cellsAroundAlive = [];
    arr.forEach(element=>(cellsAroundAlive = cellsAroundAlive.concat(cellsAround(element))))
    let newCellsAlive = removeDupes(cellsAroundAlive)
    return newCellsAlive
}

function cellsAround (cell){
    let cellNeighbours = [];
    cellNeighbours.push(cell-11);
    cellNeighbours.push(cell-10);
    cellNeighbours.push(cell-9);
    cellNeighbours.push(cell-1);
    cellNeighbours.push(cell);
    cellNeighbours.push(cell+1);
    cellNeighbours.push(cell+9);
    cellNeighbours.push(cell+10);
    cellNeighbours.push(cell+11);
    return cellNeighbours
}


function removeDupes(arr) {
    let cellsCount = {};
    let i = arr.length;
  
    while (i--) {   
      if (cellsCount.hasOwnProperty(arr[i])) {
        cellsCount[arr[i]]+=1;
        arr.splice(i, 1);
      } else {
        cellsCount[arr[i]] = 1;
      }
    }
    return cellsCount;
  }

