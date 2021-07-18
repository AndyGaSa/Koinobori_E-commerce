class GameOfLife {
  constructor() {
    this.gridSize = 5;
  }

  gridArrayGenerator(newGridSize) {
    if (newGridSize === undefined) {
      newGridSize = this.gridSize;
    }
    const myGridArray = [];
    for (let i = 0; i < newGridSize; i += 1) {
      const temporalArray = [];
      for (let j = 0; j < newGridSize; j += 1) {
        temporalArray.push(0);
      }
      myGridArray.push(temporalArray);
    }
    return myGridArray;
  }
}

module.exports = GameOfLife;
