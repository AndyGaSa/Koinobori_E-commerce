const matriz = [
  [0, 0, 0, 1, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
];

const matrizCopy = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];
function checkNeigbhour(i, x) {
  let contVecinos = 0;
  let c = i - 1;
  let j = x - 1;
  for (let b = 1; b < 4; b += 1) {
    if (j >= 0 && c >= 0 && j <= 4 && c <= 4) {
      if (matriz[c][j] === 1) {
        // miro los 3 de arriba
        contVecinos += 1;
      }
    }
    j += 1;
  }
  j = x - 1;
  for (let b = 1; b < 4; b += 1) {
    if (j >= 0 && j <= 4) {
      if (matriz[i][j] === 1 && j !== x) {
        contVecinos += 1;
      }
    }
    j += 1;
    // miro los 2 de su fila
  }
  c = i + 1;
  j = x - 1;
  for (let b = 1; b < 4; b += 1) {
    if (j >= 0 && c >= 0 && j <= 4 && c <= 4) {
      if (matriz[c][j] === 1) {
        contVecinos += 1;
      }
    }
    j += 1;
    // miro los 3 de abajo
  }
  return contVecinos;
}
function cpArray() {
  // i es la fila vertical
  // x es la columna dentro de la fila horizontal

  for (let i = 0; i < matriz.length; i += 1) {
    for (let x = 0; x < matriz[i].length; x += 1) {
      let contVecinos = checkNeigbhour(i, x);
      // Tota cel·la viva amb menys de dos veïns vius mor (de solitud).
      // Tota cel·la viva amb més de tres veïns vius mor (de sobreconcentració).
      // Tota cel·la viva amb dos o tres veïns vius, segueix viva per a la següent generació.
      // Tota cel·la morta amb exactament tres veïns vius torna a la vida.
      let celAlive = false;
      if (matriz[i][x] === 1) { celAlive = true; }
      if (celAlive === true) {
        if (contVecinos < 2 || contVecinos > 3) {
          matrizCopy[i][x] = 0;
        } else if (contVecinos === 2 || contVecinos === 3) {
          matrizCopy[i][x] = 1;
        }
      } else if (contVecinos === 3) {
        matrizCopy[i][x] = 1;
      } else {
        matrizCopy[i][x] = 0;
      }
      contVecinos = 0;
    }
  }
}

cpArray();
console.log(matriz);
console.table(matrizCopy);

