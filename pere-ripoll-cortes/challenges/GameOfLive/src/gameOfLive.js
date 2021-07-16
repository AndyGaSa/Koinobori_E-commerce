const worldFirtsGenerator = [
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0],
];

const worldSecondGenerator = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

const checkValues = function (arr, f, c) {
  let contador = 0;

  function checkFila() {
    if (arr[f][c - 1] === 1) {
      contador += 1;
    }
    if (arr[f][c + 1] === 1) {
      contador += 1;
    }
  }
  function checkFilaSuperior() {
    for (let i = (c - 1); i < 3; i += 1) {
      if (arr[f - 1][i] === 1) {
        contador += 1;
      }
    }
  }
  function checkFilaInferior() {
    for (let i = (c - 1); i < 3; i += 1) {
      if (arr[f + 1][i] === 1) {
        contador += 1;
      }
    }
  }

  if (f === 0 || f === arr.length) {
    if (f === 0) {
      checkFila(arr, f, c);
      checkFilaInferior(arr, f, c);
    } else {
      checkFila(arr, f, c);
      checkFilaSuperior(arr, f, c);
    }
  } else {
    checkFila(arr, f, c);
    checkFilaSuperior(arr, f, c);
    checkFilaInferior(arr, f, c);
  }

  return contador;
};

for (let f = 0; f < worldFirtsGenerator.length; f += 1) {
  for (let c = 0; c < worldFirtsGenerator.length; c += 1) {
    if (worldFirtsGenerator[f][c] === 0) {
      if (checkValues(worldFirtsGenerator, f, c) === 3) {
        worldSecondGenerator[f][c] = 1;
      }
    }

    if (worldFirtsGenerator[f][c] === 1) {
      if (checkValues(worldFirtsGenerator, f, c) < 2
      || checkValues(worldFirtsGenerator, f, c) > 3) {
        worldSecondGenerator[f][c] = 0;
      }
    }
  }
}

console.log(worldFirtsGenerator[1][0 - 1]);
