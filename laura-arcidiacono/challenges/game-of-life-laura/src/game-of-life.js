class GameOfLife extends Array { /* extends: toma las propiedades del proto de array. */
  constructor() {
    super(); /* Invoca al constructor de Array,
                necesario porque class GameOfLife extends of class Array */
    this.gridSize = 5;
  }

  gridArrayGenerator(newGridSize) {
    let definitiveGridSize;
    if (newGridSize === undefined) {
      definitiveGridSize = this.gridSize + 2;
    } else {
      definitiveGridSize = newGridSize + 2;
      this.gridSize = newGridSize;
    }
    const myGridArray = new GameOfLife();
    myGridArray.gridSize = this.gridSize;
    for (let i = 0; i < definitiveGridSize; i += 1) {
      const temporalArray = [];
      for (let j = 0; j < definitiveGridSize; j += 1) {
        temporalArray.push(0);
      }
      myGridArray.push(temporalArray);
    }
    return myGridArray;
  }

  playRound() {
    function howManyAreAlived(i, j, myGridArray) {
      let cellsAlive = 0;

      if (myGridArray[i - 1][j - 1] === 1) {
        cellsAlive += 1;
      }
      if (myGridArray[i - 1][j] === 1) {
        cellsAlive += 1;
      }
      if (myGridArray[i - 1][j + 1] === 1) {
        cellsAlive += 1;
      }
      if (myGridArray[i][j - 1] === 1) {
        cellsAlive += 1;
      }
      if (myGridArray[i][j + 1] === 1) {
        cellsAlive += 1;
      }
      if (myGridArray[i + 1][j - 1] === 1) {
        cellsAlive += 1;
      }
      if (myGridArray[i + 1][j] === 1) {
        cellsAlive += 1;
      }
      if (myGridArray[i + 1][j + 1] === 1) {
        cellsAlive += 1;
      }
      return cellsAlive;
    }
    const newGrid = new GameOfLife();
    const changedGrid = newGrid.gridArrayGenerator(this.gridSize);
    for (let i = 1; i < this.gridSize + 1; i += 1) {
      for (let j = 1; j < this.gridSize + 1; j += 1) {
        if (this[i][j] === 0) {
          if (howManyAreAlived(i, j, this) === 3) {
            changedGrid[i][j] = 1;
          }
        }
        if (this[i][j] === 1) {
          if (howManyAreAlived(i, j, this) < 2 || howManyAreAlived(i, j, this) > 3) {
            changedGrid[i][j] = 0;
          } else {
            changedGrid[i][j] = 1;
          }
        }
      }
    }
    return changedGrid;
  }
}

module.exports = GameOfLife;
