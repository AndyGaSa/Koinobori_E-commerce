const row = 10;
const columns = 10;

// ------Declaración de Arrays-------

const generation1 = new Array(row);

for (let i = 0; i < columns; i += 1) {
  generation1[i] = new Array(columns);
  for (let j = 0; j < columns; j += 1) {
    generation1[i][j] = 0;
  }
}

const generation2 = new Array(row);

for (let i = 0; i < columns; i += 1) {
  generation2[i] = new Array(columns);
  for (let j = 0; j < columns; j += 1) {
    generation2[i][j] = 0;
  }
}

generation1[1][3] = 1;
generation1[2][3] = 1;
generation1[3][3] = 1;

// -----------------------------------

// --------Función contar los vecinos----

const neighbours = (f, c) => {
  const arr = [generation1[f + 1][c], generation1[f + 1][c + 1],
    generation1[f + 1][c - 1], generation1[f - 1][c],
    generation1[f - 1][c + 1], generation1[f - 1][c - 1],
    generation1[f][c + 1], generation1[f][c - 1]];

  // console.table(arr);

  const checkArr = arr.reduce((a, b) => a + b);
  // console.log(checkArr);

  if (generation1[f][c] === 0 && checkArr === 3) {
    generation2[f][c] = 1;
  }

  if (generation1[f][c] === 1 && (checkArr === 3 || checkArr === 2)) {
    generation2[f][c] = 1;
  }
};

// -------- Función para recorrer los arrays----

const generations = () => {
  for (let f = 1; f < generation1.length - 1; f += 1) {
    for (let c = 1; c < generation1.length - 1; c += 1) {
      neighbours(f, c);
    }
  }
};

const showResult = () => {
  for (let f = 1; f < generation2.length - 1; f += 1) {
    for (let c = 1; c < generation2.length - 1; c += 1) {
      generation1[f][c] = generation2[f][c];
    }
  }
  console.table(generation1);
};

let a = 0;
do {
  generations();
  showResult();
  a++;
} while (a < 20);
