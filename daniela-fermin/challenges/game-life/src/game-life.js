let matrix = [];
let newMatrix;
class Button {
  constructor(id, status, element) {
    this.id = id;
    this.status = status;
    this.element = element;
  }
}
let generations;
function generateMatrix(rows, columns) {
  for (let i = 0; i < rows; i += 1) {
    matrix[i] = [];
    for (let j = 0; j < columns; j += 1) {
      matrix[i][j] = new Button(`button${i}-${j}`, 0, null);
    }
  }
}
function markLife(event) {
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
const generateHtmlMatrix = () => {
  const matrixContainer = document.querySelector('.matrix-container');
  let row;
  for (let i = 1; i < matrix.length - 1; i += 1) {
    row = document.createElement('DIV');
    row.classList.add('matrix-container__row');
    for (let j = 1; j < matrix[i].length - 1; j += 1) {
      const visualButton = document.createElement('INPUT:BUTTON');
      matrix[i][j].element = visualButton;
      visualButton.id = `button${i}-${j}`;
      visualButton.classList.add('matrix-container__button');
      visualButton.addEventListener('click', markLife);
      row.appendChild(visualButton);
    }
    matrixContainer.appendChild(row);
  }
};
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

const isItAlive = () => {
  for (let i = 1; i < matrix.length - 1; i += 1) {
    for (let j = 1; j < matrix[i].length - 1; j += 1) {
      if (matrix[i][j].status === 1) {
        matrix[i][j].element.classList.add('alive');
      } else {
        matrix[i][j].element.classList.remove('alive');
      }
    }
  }
};
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

const copyWorld = () => {
  newMatrix = matrix.map((subMatrix) => subMatrix.map((x) => [x]));
  for (let i = 1; i < matrix.length - 1; i += 1) {
    for (let j = 1; j < matrix[i].length - 1; j += 1) {
      newMatrix[i][j].element = matrix[i][j].element;
    }
  }
};
function evolution() {
  generations = setInterval(() => {
    copyWorld();
    bff();
    [matrix, newMatrix] = [newMatrix, matrix];
    isItAlive();
  }, 500);
}

const buttonStart = () => {
  const startButton = document.querySelector('#start');
  startButton.addEventListener('click', evolution);
};
function stop() {
  clearInterval(generations);
}
const buttonStop = () => {
  const startButton = document.querySelector('#stop');
  startButton.addEventListener('click', stop);
};
const buttonReset = () => {
  const startButton = document.querySelector('#reset');
  startButton.addEventListener('click', theBeginning);
};
const theBeginning = () => {
  generateMatrix(20, 20);
  generateHtmlMatrix();
  buttonStart();
  initialUniverse();
  isItAlive();
  buttonStop();
  buttonReset();
};

theBeginning();
