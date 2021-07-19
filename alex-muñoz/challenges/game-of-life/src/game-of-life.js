let genOne = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
let start;

function changeStatus() {
  const idCell = this.id.split('');
  const rows = Number(idCell[1]);
  const columns = Number(idCell[3]);
  if (genOne[rows][columns] === 1) {
    this.setAttribute('class', 'dead');
    genOne[rows][columns] = 0;
  } else {
    this.setAttribute('class', 'live');
    genOne[rows][columns] = 1;
  }
}

function changeColor() {
  for (let rows = 1; rows < genOne.length - 1; rows += 1) {
    for (let columns = 1; columns < genOne[rows].length - 1; columns += 1) {
      const id = document.getElementById(`f${rows}c${columns}`);
      id.addEventListener('click', changeStatus);
      if (genOne[rows][columns] === 0) {
        id.setAttribute('class', 'dead');
      } else {
        id.setAttribute('class', 'live');
      }
    }
  }
}

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
  changeColor();
  [genOne] = [genOneClone];
}

function startGame() {
  start = setInterval(() => {
    gameOfLife();
  }, 500);
}

document.getElementById('footer-container__start-button').addEventListener('click', startGame);

function stopGame() {
  clearInterval(start);
}

document.getElementById('footer-container__stop-button').onclick = stopGame;
