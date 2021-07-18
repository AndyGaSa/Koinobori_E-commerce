let matrix = [];
class Button {
  constructor(id, status, element) {
    this.id = id;
    this.status = status;
    this.element = element;
  }
}
function generateMatrix(rows, columns) {
  for (let i = 0; i < rows; i += 1) {
    matrix[i] = [];
    for (let j = 0; j < columns; j += 1) {
      matrix[i][j] = new Button(`button${i}${j}`, 0, null);
    }
  }
}

const generateHtmlMatrix = () => {
    const matrixContainer  = document.querySelector('.matrix-container')  
    let row;
    for (let i = 1; i < matrix.length - 1; i += 1) {
        row = document.createElement('DIV')
        row.classList.add('matrix-container__row')
        for (let j = 1; j < matrix[i].length - 1; j += 1) {
            const visualButton = document.createElement('INPUT;BUTTON')
            visualButton.classList.add('matrix-container__button')
            matrix[i][j].element = visualButton;
            row.appendChild(visualButton)
        }
        matrixContainer.appendChild(row)
}
const initialUniverse = () => {
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
 if (matrix[i][j].status === 1){
     matrix[i][j].element
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
function evolution() {
    const generations = setInterval(() => {
    let newMatrix = matrix.map((subMatrix) => subMatrix.map((x) => x));
    bff();
    [matrix, newMatrix] = [newMatrix, matrix];
  }, 1000);
}



clearInterval(generations)

const theBeginning = () =>{
generateMatrix (20,20);
generateHtmlMatrix();
initialUniverse();
isItAlive();
}

theBeginning()















module.exports =; 