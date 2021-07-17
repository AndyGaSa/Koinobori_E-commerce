const matrix = [];
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
generateMatrix(5, 5);
matrix[2][3].status = 1;
matrix[3][3].status = 1;
matrix[4][3].status = 1;

const newMatrix = matrix.map((subMatrix) => subMatrix.map((x) => x));

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
