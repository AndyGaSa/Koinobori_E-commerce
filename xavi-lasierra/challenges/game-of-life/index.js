const LifeGrid = require('./src/game-of-life');

let gameGrid = new LifeGrid(1);

gameGrid.changeCellState(3, 2);
gameGrid.changeCellState(3, 3);
gameGrid.changeCellState(3, 4);
console.table(gameGrid.grid);
gameGrid = gameGrid.nextGeneration();
console.table(gameGrid.grid);
