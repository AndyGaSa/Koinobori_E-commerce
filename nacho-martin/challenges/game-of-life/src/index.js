let matrix = [];
let newMatrix;

class Button {
  constructor(id, status, element) {
    this.id = id;
    this.status = status;
    this.element = element;
  }
}
let generation;

function generateMatrix(rows, columns) {
  for (let i = 0; i < rows; i += 1) {
    matrix[i] = [];
    for (let j = 0; j < columns; j += 1) {
      matrix[i][j] = new Button(`button${i}-${j}`, 0, null);
    }
  }
}

function life(event) {
  const { id } = event.target;
  const uniMatrix = matrix.reduce((a, b) => a.concat(b));
  const targetButton = uniMatrix.find((element) => element.id === id);
  if (targetButton.status === 1) {
    targetButton.status = 0;
    targetButton.element.classList.remove('alive');
  } else {
    targetButton.status = 1;
    targetButton.element.classList.add('alive');
  }
}

function generateHTML() {
  const container = document.querySelector('.matrix-container');
  for (let i = 1; i < matrix.length - 1; i += 1) {
    const row = document.createElement('DIV');
    row.classList.add('matrix-container__row');
    for (let j = 1; j < matrix[i].length - 1; j += 1) {
      const visualButton = document.createElement('INPUT:BUTTON');
      visualButton.id = `button${i}-${j}`;
      visualButton.classList.add('matrix-conatiner__button');
      visualButton.addEventListener('click', life);
      matrix[i][j].element = visualButton;
      row.appendChild(visualButton);
    }
    container.appendChild(row);
  }
}
function initialUniverse() {
  matrix[2][3].status = 1;
  matrix[3][3].status = 1;
  matrix[4][3].status = 1;
  matrix[5][7].status = 1;
  matrix[2][6].status = 1;
  matrix[6][6].status = 1;
  matrix[4][6].status = 1;
  matrix[5][6].status = 1;
  matrix[4][3].status = 1;
}

function isAlive() {
  for (let i = 1; i < matrix.length - 1; i += 1) {
    for (let j = 1; j < matrix[i].length - 1; j += 1) {
      if (matrix[i][j].status === 1) {
        matrix[i][j].element.classList.add('alive');
      } else {
        matrix[i][j].element.classList.remove('alive');
      }
    }
  }
}

function bff() {
  for (let i = 1; i < matrix.length - 1; i += 1) {
    for (let j = 1; j < matrix[i].length - 1; j += 1) {
      const p = [matrix[i - 1][j - 1].status, matrix[i - 1][j].status, matrix[i - 1][j + 1].status];
      const c = [matrix[i][j - 1].status, matrix[i][j + 1].status];
      const n = [matrix[i + 1][j - 1].status, matrix[i + 1][j].status, matrix[i + 1][j + 1].status];
      const neighbours = [p, c, n].reduce((a, b) => a.concat(b));
      const sumAlive = neighbours.reduce((a, b) => a + b);
      if (matrix[i][j].status === 1) {
        if (sumAlive > 1 && sumAlive < 4) {
          newMatrix[i][j].status = 1;
        } else {
          newMatrix[i][j].status = 0;
        }
      } else if (sumAlive === 3) {
        newMatrix[i][j].status = 1;
      } else {
        newMatrix[i][j].status = 0;
      }
    }
  }
}
function copyWorld() {
  newMatrix = matrix.map((subMatrix) => subMatrix.map((x) => [x]));
  for (let i = 1; i < matrix.length - 1; i += 1) {
    for (let j = 1; j < matrix[i].length; j += 1) {
      newMatrix[i][j].element = matrix[i][j].element;
    }
  }
}

function evolution() {
  generation = setInterval(() => {
    copyWorld();
    bff();
    matrix = [...newMatrix];
    isAlive();
  }, 500);
}

function buttonStart() {
  const startButton = document.querySelector('#start');
  startButton.addEventListener('click', evolution);
}

function stop() {
  clearInterval(generation);
}

function buttonStop() {
  const stopButton = document.querySelector('#stop');
  stopButton.addEventListener('click', stop);
}

function bigBang() {
  generateMatrix(20, 30);
  generateHTML();
  buttonStart();
  initialUniverse();
  isAlive();
  buttonStop();
}

bigBang();
