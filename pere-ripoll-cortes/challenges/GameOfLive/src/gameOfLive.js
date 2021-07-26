const rows = 25;
const columns = 25;

const worldFirtsGenerator = new Array(rows);

for (let i = 0; i < rows; i += 1) {
  worldFirtsGenerator[i] = new Array(columns);
  for (let j = 0; j < columns; j += 1) {
    worldFirtsGenerator[i][j] = 0;
  }
}

worldFirtsGenerator[3][5] = 1;
worldFirtsGenerator[4][5] = 1;
worldFirtsGenerator[5][5] = 1;
worldFirtsGenerator[5][4] = 1;
worldFirtsGenerator[4][3] = 1;

worldFirtsGenerator[2][20] = 1;
worldFirtsGenerator[3][20] = 1;
worldFirtsGenerator[4][20] = 1;
worldFirtsGenerator[4][21] = 1;
worldFirtsGenerator[3][22] = 1;

worldFirtsGenerator[22][1] = 1;
worldFirtsGenerator[22][2] = 1;
worldFirtsGenerator[23][2] = 1;
worldFirtsGenerator[24][2] = 1;
worldFirtsGenerator[23][0] = 1;

const worldSecondGenerator = new Array(rows);

for (let i = 0; i < rows; i += 1) {
  worldSecondGenerator[i] = new Array(columns);
  for (let j = 0; j < columns; j += 1) {
    worldSecondGenerator[i][j] = 0;
  }
}

function generaTabla(f, c) {
  // Obtener la referencia del elemento body
  const body = document.getElementsByTagName('div')[0];

  // Crea un elemento <table> y un elemento <tbody>
  const tabla = document.createElement('table');
  const tblBody = document.createElement('tbody');

  // Crea las celdas
  for (let i = 0; i < f; i += 1) {
    // Crea las hileras de la tabla
    const hilera = document.createElement('tr');
    hilera.className = `fila${i.toString()}`;

    for (let j = 0; j < c; j += 1) {
      // Crea un elemento <td> y un nodo de texto, haz que el nodo de
      // texto sea el contenido de <td>, ubica el elemento <td> al final
      // de la hilera de la tabla
      const celda = document.createElement('td');
      celda.className = `fila_${i.toString()}_column_${j.toString()}`;
      celda.id = 'c';
      /* const textoCelda = document.createTextNode(`${i}, columna ${j}`);
      celda.appendChild(textoCelda); */
      hilera.appendChild(celda);
    }

    // agrega la hilera al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(hilera);
  }

  // posiciona el <tbody> debajo del elemento <table>
  tabla.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tabla);
  // modifica el atributo "border" de la tabla y lo fija a "2";
  // tabla.setAttribute('border', '2');
  // assignValue(arr);
}
generaTabla(rows, columns);

function assignValue(arr) {
  for (let f = 0; f < arr.length; f += 1) {
    for (let c = 0; c < arr.length; c += 1) {
      const a = document.querySelector(`.fila_${f.toString()}_column_${c.toString()}`);
      if (arr[f][c] === 1) {
        a.style.background = 'white';
      } else {
        a.style.background = 'black';
      }
    }
  }
}

const checkValues = (arr, f, c) => {
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
    if (arr[f - 1][c] === 1) {
      contador += 1;
    }
    if (arr[f - 1][c - 1] === 1) {
      contador += 1;
    }
    if (arr[f - 1][c + 1] === 1) {
      contador += 1;
    }
  }
  function checkFilaInferior() {
    if (arr[f + 1][c] === 1) {
      contador += 1;
    }
    if (arr[f + 1][c - 1] === 1) {
      contador += 1;
    }
    if (arr[f + 1][c + 1] === 1) {
      contador += 1;
    }
  }

  if (f === 0 || f === arr.length - 1) {
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

const logic = () => {
  for (let f = 0; f < worldFirtsGenerator.length; f += 1) {
    for (let c = 0; c < worldFirtsGenerator.length; c += 1) {
      if (worldFirtsGenerator[f][c] === 0) {
        if (checkValues(worldFirtsGenerator, f, c) === 3) {
          worldSecondGenerator[f][c] = 1;
        }
      }
      if (worldFirtsGenerator[f][c] === 1) {
        if (checkValues(worldFirtsGenerator, f, c) === 2
        || checkValues(worldFirtsGenerator, f, c) === 3) {
          worldSecondGenerator[f][c] = 1;
        } else {
          worldSecondGenerator[f][c] = 0;
        }
      }
    }
  }

  for (let i = 0; i < worldSecondGenerator.length; i += 1) {
    for (let j = 0; j < worldSecondGenerator.length; j += 1) {
      worldFirtsGenerator[i][j] = worldSecondGenerator[i][j];
    }
  }

  assignValue(worldFirtsGenerator);
};

function run() {
  setInterval(logic, 500);
}

function stop() {
  window.location.reload(true);
}

function newValue(evento) {
  const elemento = evento.target;
  const regex = /(\d+)/g;
  const pos = elemento.className;
  const num = pos.match(regex);
  const numArr = [Number.parseInt(num[0]), Number.parseInt(num[1])];
  console.log(numArr);
}

function agregareventos() {
  const lista = document.querySelectorAll('td');
  for (let f = 0; f < lista.length; f += 1) {
    const elemento = lista[f];
    elemento.addEventListener('click', newValue);
  }
}

window.addEventListener('load', agregareventos);
