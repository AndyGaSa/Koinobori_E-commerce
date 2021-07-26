const reset = document.querySelector('.reset');
const start = document.querySelector('.start');
const clear = document.querySelector('.clear');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const resolution = 10;
canvas.width = 600;
canvas.height = 600;

const COLS = canvas.width / resolution;
const ROWS = canvas.height / resolution;

function buildMatriz() {
  return new Array(COLS).fill(null)
    .map(() => new Array(ROWS).fill(null)
      .map(() => Math.floor(Math.random() * 2)));
}
function clearMatriz() {
  return new Array(COLS).fill(null)
    .map(() => new Array(ROWS).fill(null));
}
function paint(matriz) {
  for (let i = 0; i < matriz.length; i += 1) {
    for (let x = 0; x < matriz[i].length; x += 1) {
      const celda = matriz[i][x];
      ctx.beginPath();
      ctx.rect(i * resolution, x * resolution, resolution, resolution);
      ctx.fillStyle = celda ? 'purple' : 'pink';
      ctx.fill();
    }
  }
}
function checkNeighbour(matriz) {
  const matrizCopy = matriz.map((arr) => [...arr]);
  let contVecinos = 0;
  for (let i = 0; i < matriz.length; i += 1) {
    for (let x = 0; x < matriz[i].length; x += 1) {
      let c = i - 1;
      let j = x - 1;
      for (let b = 1; b < 4; b += 1) {
        if (matriz[j] !== undefined && matriz[c] !== undefined) {
          if (matriz[c][j] === 1) {
            // miro los 3 de arriba
            contVecinos += 1;
          }
        }
        j += 1;
      }
      j = x - 1;
      for (let b = 1; b < 4; b += 1) {
        if (matriz[j] !== undefined) {
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
        if (matriz[j] !== undefined && matriz[c] !== undefined) {
          if (matriz[c][j] === 1) {
            contVecinos += 1;
          }
        }
        j += 1;
        // miro los 3 de abajo
      }
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

  return matrizCopy;
}

let matriz = buildMatriz();
paint(matriz);

function getMousePosition(canvasS, event) {
  const rect = canvasS.getBoundingClientRect();
  let x = event.clientX - rect.left + window.scrollX;
  let y = event.clientY - rect.top + window.scrollY;
  x /= (rect.right / COLS);
  y /= (rect.bottom / ROWS);
  if (matriz[Math.floor(x)][Math.floor(y)] === 1) {
    matriz[Math.floor(x)][Math.floor(y)] = 0;
  } else {
    matriz[Math.floor(x)][Math.floor(y)] = 1;
  }
  paint(matriz);
}

canvas.addEventListener('mousedown', (e) => {
  getMousePosition(canvas, e);
});

function update() {
  matriz = checkNeighbour(matriz);
  paint(matriz);
  requestAnimationFrame(update);
}

start.onclick = function play() {
  requestAnimationFrame(update);
};
reset.onclick = function resetF() {
  matriz = buildMatriz();
};
clear.onclick = function clearF() {
  matriz = clearMatriz();
  paint(matriz);
};
