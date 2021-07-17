const tableFirst = [];
const tableNext = [];
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

// Function that creates a new array with de new cell status
function nextGeneration(arr) {
  let rowArray = [];
  for (let i = 0; i < arr[0].length; i += 1) {
    for (let j = 0; j < arr.length; j += 1) {
      rowArray.push(amAlive(arr, i, j));
    }
    tableNext.push(rowArray);
    rowArray = [];
  }
}

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
  const tableHTML = document.querySelector('.mainTable');
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

function play() {

}
