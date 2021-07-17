const matriz = [
  ['', '', '', '', '', '', '', '', '', ''],
  ['', 0, 0, 0, 0, 0, 0, 0, 0, ''],
  ['', 0, 0, 0, 0, 0, 0, 0, 0, ''],
  ['', 0, 0, 1, 1, 1, 0, 0, 0, ''],
  ['', 0, 0, 0, 1, 1, 1, 0, 0, ''],
  ['', 0, 0, 0, 0, 0, 0, 0, 0, ''],
  ['', 0, 0, 0, 0, 0, 0, 0, 0, ''],
  ['', 0, 0, 0, 0, 0, 0, 0, 0, ''],
  ['', 0, 0, 0, 0, 0, 0, 0, 0, ''],
  ['', '', '', '', '', '', '', '', '', ''],
];
const matriz2 = new Array(10);
for (let i = 0; i < matriz2.length; i++) { matriz2[i] = new Array(10); }
for (let row = 0; row < matriz2.length; row++) {
  for (col = 0; col < matriz2[row].length; col++) {
    matriz2[row][col] = 0;
  }
}

let numeroVecinos;

console.table(matriz);

function life() {
  for (let i = 1; i < matriz.length - 1; i += 1) {
    for (let j = 1; j < matriz[i].length - 1; j += 1) {
      const numeroVecinosArriba = matriz[i - 1][j - 1] + matriz[i - 1][j] + matriz[i - 1][j + 1];
      const numeroVecinosMedio = matriz[i][j - 1] + matriz[i][j + 1];
      const numeroVecinosAbajo = matriz[i + 1][j - 1] + matriz[i + 1][j] + matriz[i + 1][j + 1];
      const numeroVecinos = numeroVecinosArriba + numeroVecinosMedio + numeroVecinosAbajo;
      if (matriz[i][j] === 1) {
        if (numeroVecinos === 3 || numeroVecinos === 2) {
          matriz2[i][j] = 1;
        } else {
          matriz2[i][j] = 0;
        }
      } else if (matriz[i][j] === 0) {
        if (numeroVecinos === 3) {
          matriz2[i][j] = 1;
        }
      }
    }
  }
}
life(matriz);
console.table(matriz2);
