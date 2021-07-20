let matrix = [];

function generateMatrix(rows, columns) {
  for (let i = 0; i < rows; i += 1) {
    matrix[i] = [];
    for (let j = 0; j < columns; j += 1) {
      matrix[i][j] = 0;
    }
  }
}
generateMatrix(11, 11);
matrix[2][3] = 1;
matrix[3][3] = 1;
matrix[4][3] = 1;
matrix[5][7] = 1;
matrix[2][6] = 1;
matrix[6][6] = 1;
matrix[4][6] = 1;
matrix[5][6] = 1;
matrix[4][3] = 1;
matrix[3][6] = 1;
matrix[9][3] = 1;
matrix[8][3] = 1;
matrix[7][3] = 1;
let newMatrix = matrix.map((subMatrix) => subMatrix.map((x) => x));
function bff() {
  for (let i = 1; i < matrix.length - 1; i += 1) {
    for (let j = 1; j < matrix[i].length - 1; j += 1) {
      const p = [matrix[i - 1][j - 1], matrix[i - 1][j], matrix[i - 1][j + 1]];
      const c = [matrix[i][j - 1], matrix[i][j + 1]];
      const n = [matrix[i + 1][j - 1], matrix[i + 1][j], matrix[i + 1][j + 1]];
      const neighbours = [p, c, n].reduce((a, b) => a.concat(b));
      const sumAlive = neighbours.reduce((a, b) => a + b);
      if (matrix[i][j] === 1) {
        if (sumAlive > 1 && sumAlive < 4) {
          newMatrix[i][j] = 1;
        } else {
          newMatrix[i][j] = 0;
        }
      } else if (sumAlive === 3) {
        newMatrix[i][j] = 1;
      } else {
        newMatrix[i][j] = 0;
      }
    }
  }
}
function evolution() {
  setInterval(() => {
    newMatrix = matrix.map((subMatrix) => subMatrix.map((x) => x));
    bff();
    console.table(newMatrix);
    [matrix, newMatrix] = [newMatrix, matrix];
  }, 1000);
}

evolution();
