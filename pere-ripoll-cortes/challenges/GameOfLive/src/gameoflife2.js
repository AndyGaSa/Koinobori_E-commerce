const FirtsGenerator = [
  [2, 2, 2, 2, 2, 2, 2],
  [2, 0, 0, 0, 0, 0, 2],
  [2, 0, 0, 1, 0, 0, 2],
  [2, 0, 0, 1, 0, 0, 2],
  [2, 0, 0, 1, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 2],
  [2, 2, 2, 2, 2, 2, 2],
];

const SecondGenerator = [
  [2, 2, 2, 2, 2, 2, 2],
  [2, 0, 0, 0, 0, 0, 2],
  [2, 0, 0, 1, 0, 0, 2],
  [2, 0, 0, 1, 0, 0, 2],
  [2, 0, 0, 1, 0, 0, 2],
  [2, 0, 0, 0, 0, 0, 2],
  [2, 2, 2, 2, 2, 2, 2],
];

let ad = 0;

do {
  for (let f = 1; f < FirtsGenerator.length - 1; f += 1) {
    for (let c = 1; c < FirtsGenerator.length - 1; c += 1) {
      const checkArr = [FirtsGenerator[f][c + 1],
        FirtsGenerator[f][c - 1], FirtsGenerator[f + 1][c],
        FirtsGenerator[f + 1][c - 1], FirtsGenerator[f + 1][c + 1],
        FirtsGenerator[f - 1][c], FirtsGenerator[f - 1][c + 1],
        FirtsGenerator[f - 1][c - 1]];

      const result = checkArr.filter((value) => value === 1);
      const total = result.reduce((a, b) => a + b, 0);

      if (FirtsGenerator[f][c] === 0) {
        if (total === 3) {
          SecondGenerator[f][c] = 1;
        }
      }
      if (FirtsGenerator[f][c] === 1) {
        if (total === 2 || total === 3) {
          SecondGenerator[f][c] = 0;
        }
      }
    }
  }

  for (let i = 0; i < SecondGenerator.length; i += 1) {
    for (let j = 0; j < SecondGenerator.length; j += 1) {
      FirtsGenerator[i][j] = SecondGenerator[i][j];
    }
  }
  ad++;
  console.table(FirtsGenerator);
} while (ad < 10);
