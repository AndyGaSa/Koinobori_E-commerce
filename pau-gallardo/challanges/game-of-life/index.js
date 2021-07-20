let tableFirst = [];
let tableNext = [];
let play = false;
let bucle;

// Function that swaps alive to dead and viceversa in html and the array
function whatsMyId() {
  const id = this.id.split('_');
  const i = Number(id[0]);
  const j = Number(id[1]);
  if (this.className === 'alive') {
    this.setAttribute('class', 'dead');
    tableFirst[i][j] = 0;
  } else {
    this.setAttribute('class', 'alive');
    tableFirst[i][j] = 1;
  }
}

// Function that creates the initial table given the number of rows and columns
function createTable(rows, columns) {
  let rowArray = [];
  const tableHTML = document.querySelector('.main__table');
  for (let i = 0; i < rows; i += 1) {
    const tr = document.createElement('tr');
    for (let j = 0; j < columns; j += 1) {
      rowArray.push(0);
      const td = document.createElement('td');
      td.setAttribute('id', `${i}_${j}`);
      td.addEventListener('click', whatsMyId);
      td.setAttribute('class', 'dead');
      tr.appendChild(td);
    }
    tableFirst.push(rowArray);
    rowArray = [];
    tableHTML.appendChild(tr);
  }
}

// Funcition that counts alive neighbours
function neighbourCount(arr, i, j) {
  let count = 0;
  // TL
  if (i !== 0 && j !== 0) {
    // Look TL neighbour
    if (arr[i - 1][j - 1] === 1) {
      count += 1;
    }
  }
  // T
  if (i !== 0) {
    // Look T neighbour
    if (arr[i - 1][j] === 1) {
      count += 1;
    }
  }

  // TR
  if (j < arr[0].length - 1 && i !== 0) {
    // Look TR neighbour
    if (arr[i - 1][j + 1] === 1) {
      count += 1;
    }
  }

  // R
  if (j < arr[0].length - 1) {
    // Look R neighbour
    if (arr[i][j + 1] === 1) {
      count += 1;
    }
  }

  // BR
  if (j < arr[0].length - 1 && i < arr.length - 1) {
    // Look BR neighbour
    if (arr[i + 1][j + 1] === 1) {
      count += 1;
    }
  }

  // B
  if (i < arr.length - 1) {
    // Look B neighbour
    if (arr[i + 1][j] === 1) {
      count += 1;
    }
  }

  // BL
  if (j !== 0 && i < arr.length - 1) {
    // Look BL neighbour
    if (arr[i + 1][j - 1] === 1) {
      count += 1;
    }
  }

  // L
  if (j !== 0) {
    // Look BL neighbour
    if (arr[i][j - 1] === 1) {
      count += 1;
    }
  }
  return count;
}

// Check the life status of the cell
function amAlive(arr, i, j) {
  const count = neighbourCount(arr, i, j);
  let lifeState = arr[i][j];
  if (arr[i][j] === 1) {
    if (count >= 2 && count <= 3) {
      lifeState = 1;
    } else {
      lifeState = 0;
    }
  }
  if (count === 3 && arr[i][j] === 0) {
    lifeState = 1;
  }
  return lifeState;
}

// Function that creates a new array with de new cell status in tableNext variable
function nextGeneration() {
  let rowArray = [];
  let id = '';
  for (let i = 0; i < tableFirst.length; i += 1) {
    for (let j = 0; j < tableFirst[0].length; j += 1) {
      id = `${i}_${j}`;
      if (amAlive(tableFirst, i, j) === 1) {
        document.getElementById(id).setAttribute('class', 'alive');
      } else {
        document.getElementById(id).setAttribute('class', 'dead');
      }
      rowArray.push(amAlive(tableFirst, i, j));
    }
    tableNext.push(rowArray);
    rowArray = [];
  }
}

// Function that updates table values
function update() {
  nextGeneration();
  tableFirst = tableNext;
  tableNext = [];
  if (play) {
    bucle = setTimeout(update, 500);
  }
}

// Function that initiates the bucle and stops it
function startStop() {
  if (play === true) {
    document.getElementById('start').innerHTML = 'Play';
    play = false;
    clearTimeout(bucle);
  } else {
    document.getElementById('start').innerHTML = 'Stop';
    play = true;
    update();
  }
}

// Function that refreshes the browser window
function resetWindow() {
  location.reload();
}

// Function that creates a random Generation
function randomGeneration() {
  let rowArray = [];
  let id = '';
  let randomState;
  for (let i = 0; i < tableFirst.length; i += 1) {
    for (let j = 0; j < tableFirst[0].length; j += 1) {
      id = `${i}_${j}`;
      randomState = Math.floor(Math.random() * 18);
      if (randomState < 17) {
        randomState = 0;
      } else {
        randomState = 1;
      }
      if (randomState === 1) {
        document.getElementById(id).setAttribute('class', 'alive');
      } else {
        document.getElementById(id).setAttribute('class', 'dead');
      }
      rowArray.push(randomState);
    }
    tableNext.push(rowArray);
    rowArray = [];
  }
  tableFirst = tableNext;
  tableNext = [];
}

function gameOfLife() {
  createTable(40, 100);
  const startStopBtn = document.getElementById('start');
  startStopBtn.addEventListener('click', startStop);
  const resetBtn = document.getElementById('reset');
  resetBtn.addEventListener('click', resetWindow);
  const randomBtn = document.getElementById('random');
  randomBtn.addEventListener('click', randomGeneration);
}

//
const slider = document.getElementById('myRange');
slider.oninput = () => {
  document.getElementById('footer__button').style.width = '100px';
};

window.onload = () => { gameOfLife(); };
