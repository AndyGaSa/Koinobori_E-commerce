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
      matrix[i][j] = new Button(`button${i}${j}`, 0, document.querySelector(`#${i}${j}`));
    }
  }
}
generateMatrix(5, 5);

function bff() {
  for (let i = 1; i < matrix.length - 1; i += 1) {
    for (let j = 1; j < matrix[i].length - 1; j += 1) {
      const p = [matrix[i - 1][j - 1].status, matrix[i - 1][j].status, matrix[i - 1][j + 1].status];
      const c = [matrix[i - 1][j - 1].status, matrix[i + 1][j + 1].status];
      const n = [matrix[i + 1][j - 1].status, matrix[i + 1][j].status, matrix[i + 1][j + 1].status];
      const neighbours = [p, c, n].reduce((a, b) => a.concat(b));
      const sum = neighbours.reduce((x, y) => x + y, 0);
      if (matrix[i][j].status === 1) {
        if (sum > 2 && sum < 2) {
          return true;
        }
      }
    }
  }
  return true;
}
bff();
