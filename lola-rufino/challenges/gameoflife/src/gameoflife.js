let genOne = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
];

function gameOfLife() {
  const genOneClone = genOne.map((outer) => outer.map((inner) => inner));
  for (let rows = 1; rows < genOne.length - 1; rows += 1) {
    for (let columns = 1; columns < genOne[rows].length - 1; columns += 1) {
      const neighbourArr = [
        [genOne[rows - 1][columns - 1]],
        [genOne[rows - 1][columns]],
        [genOne[rows - 1][columns + 1]],
        [genOne[rows][columns - 1]],
        [genOne[rows][columns + 1]],
        [genOne[rows + 1][columns - 1]],
        [genOne[rows + 1][columns]],
        [genOne[rows + 1][columns + 1]]
      ];

      const neighbourFlat = neighbourArr.flat();

      const reducer = (accumulator, currentValue) => accumulator + currentValue;

      if (genOne[rows][columns] === 0 && neighbourFlat.reduce(reducer) === 3) {
        genOneClone[rows][columns] = 1;
      } else if (genOne[rows][columns] === 1 && (neighbourFlat.reduce(reducer) < 2
      || neighbourFlat.reduce(reducer) > 3)) {
        genOneClone[rows][columns] = 0;
      } else {
        genOne[rows][columns] = genOneClone[rows][columns];
      }
    }
  }
  [genOne] = [genOneClone];
}

gameOfLife();

/* function startGame() {
  const start = setInterval(() => { gameOfLife(); }, 5000);
}

function stopGame() {
  clearInterval(start);
} */
