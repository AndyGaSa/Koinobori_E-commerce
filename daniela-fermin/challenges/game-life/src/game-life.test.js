const matrix = [[0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0]];

const bff = () => {
  debugger;
  const newArray = [];
  for (let x = 1; x < matrix.length - 1; x += 1) {
    for (let y = 1; y < matrix[x].length - 1; y += 1) {
      const p = [matrix[y - 1][x - 1], matrix[y - 1][x], matrix[y - 1][x + 1]];
      const c = [matrix[y][x - 1], matrix[y][x + 1]];
      const n = [matrix[y + 1][x - 1], matrix[y + 1][x], matrix[y + 1][x + 1]];
      const neihbourgs = [p, c, n].reduce((a, b) => a.concat(b));
      const sumAlive = neihbourgs.reduce((a, b) => a + b, 0);
      if (matrix[x][y] === 0) {
        if (sumAlive === 3) {
          newArray.push(1);
        } else { newArray.push(0); }
      } else if (matrix[x][y] === 1) {
        if (sumAlive > 1 && sumAlive > 4) {
          newArray.push(1);
        } else {
          newArray.push(0);
        }
      }
    }
  }
};

bff();
