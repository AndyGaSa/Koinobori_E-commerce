// Create a multidimensional array
let life2 = new Array(10);
for (let i = 0; i < life2.length; i += 1) { life2[i] = new Array(10); }
// Initialize the array
function initMatrix() {
  for (let row = 0; row < life2.length; row += 1) {
    for (let col = 0; col < life2.length; col += 1) {
      life2[row][col] = 0;
    }
  }
}
let life = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
function searchLife() {
  initMatrix(life2);
  for (let i = 1; i < life.length - 1; i += 1) {
    for (let j = 1; j < life[i].length - 1; j += 1) {
      const arrayLife = [life[i - 1][j - 1],
        life[i - 1][j], life[i - 1][j + 1],
        life[i][j - 1], life[i][j + 1],
        life[i + 1][j - 1], life[i + 1][j],
        life[i + 1][j + 1]];
      const sumNeighbours = arrayLife.reduce((i, j) => i + j, 0);
      if (life[i][j] === 1) {
        if (sumNeighbours === 2 || sumNeighbours === 3) {
          life2[i][j] = 1;
        } else {
          life2[i][j] = 0;
        }
      } else if (life[i][j] === 0) {
        if (sumNeighbours === 3) {
          life2[i][j] = 1;
        }
      }
    }
  }
  return life2;
}
let s = 0;
while (s < 5) {
  searchLife(life);
  console.table(life2);
  [life, life2] = [life2, life];
  initMatrix(life2);
  s += 1;
}
