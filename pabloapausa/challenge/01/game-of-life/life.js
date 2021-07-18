class Life {
    constructor() {
        cell0 = this.matrix();
        cell1 = this.matrix();
    }

    matrix() {
        let array = [];
        for (let xAxis = 0; xAxis <= row; xAxis++) {
            array[xAxis] = [];  
            for (let yAxis = 0; yAxis <= column; yAxis++) {
                array[xAxis][yAxis] = 0;
            }
        }
        return array;
    }

    execute() {
        let neighbours; 
        for (let x = 1; x < row; x++) {
            for (let y = 1; y < column; y++) {
                neighbours = 0;
                neighbours += (cell0[x - 1][y - 1] === 1) ? 1 : 0; // Top left position.
                neighbours += (cell0[x][y - 1] === 1) ? 1 : 0; // Top center position.
                neighbours += (cell0[x + 1][y - 1] === 1) ? 1 : 0; // Top right position.
                neighbours += (cell0[x - 1][y] === 1) ? 1 : 0; // Center left position.
                neighbours += (cell0[x + 1][y] === 1) ? 1 : 0; // Center right position. 
                neighbours += (cell0[x - 1][y + 1] === 1) ? 1 : 0; // Bottom left position. 
                neighbours += (cell0[x][y + 1] === 1) ? 1 : 0; // Bottom center position.
                neighbours += (cell0[x + 1][y + 1] === 1) ? 1 : 0; // Bottom right position. 
                cell1[x][y] = ((neighbours === 3) || (neighbours === 2 && cell0[x][y] === 1)) ? 1 : 0; 
            }
        }
        return cell1;
    }


}

let cell0;
let cell1;
const [row, column] = [12, 12];
const life = new Life();

function hello() {
    cell0[6][5] = 1; 
    cell0[6][6] = 1; 
    cell0[6][7] = 1; 
    console.table(cell0);
    for (let i = 0; i < 5; i++) {
        life.execute(cell0);
        console.table(cell1);
        [cell0, cell1] = [cell1, cell0];  
    }

}

hello();

/* 
    neighbours = 1;
    neighbours += ((((x - 1) > 0) && ((y - 1) > 0)) && (cell0[x - 1][y - 1] === 1)) ? 1 : 0; // Top left position.
    neighbours += (((y - 1) > 0) && (cell0[x][y - 1] === 1)) ? 1 : 0; // Top center position.
    neighbours += ((((x + 1) < row) && ((y - 1) > 0)) && (cell0[x + 1][y - 1] === 1)) ? 1 : 0; // Top right position.
    neighbours += (((x - 1) > 0) && (cell0[x - 1][y] === 1)) ? 1 : 0; // Center left position.
    neighbours += (((x + 1) < row) && (cell0[x + 1][y] === 1)) ? 1 : 0; // Center right position. 
    neighbours += ((((x - 1) > 0) && ((y + 1) < column)) && (cell0[x - 1][y + 1] === 1)) ? 1 : 0; // Bottom left position. 
    neighbours += (((y + 1) < column) && cell0[x][y + 1] === 1) ? 1 : 0; // Bottom center position.
    neighbours += ((((x + 1) < row) && ((y + 1) < column)) && (cell0[x + 1][y + 1] === 1)) ? 1 : 0; // Bottom right position. 
    cell0[x][y] = ((neighbours === 3) || (neighbours === 2 && cell0[x][y] === 1)) ? 1 : 0; // Chooses which cells live and which ones die.


                    if (cell0[x - 1][y - 1] === 1) neighbours += 1; // Top left position.
                if (cell0[x][y - 1] === 1) neighbours += 1; // Top center position.
                if (cell0[x + 1][y - 1] === 1) neighbours += 1; // Top right position.
                if (cell0[x - 1][y] === 1) neighbours += 1; // Center left position.
                if (cell0[x + 1][y] === 1) neighbours += 1; // Center right position. 
                if (cell0[x - 1][y + 1] === 1) neighbours += 1; // Bottom left position. 
                if (cell0[x][y + 1] === 1) neighbours += 1; // Bottom center position.
                if (cell0[x + 1][y + 1] === 1) neighbours += 1; // Bottom right position. 

*/




//Genera dos arrays. 
//Los cambios los comprueba en el primero. 
//Los cambios se aplican en el segundo. 

/*
function searchLife(arr) {
    initMatrix(life2);
    for (let i = 1; i < arr.length - 1; i += 1) {
      for (let j = 1; j < arr.length - 1; j += 1) {
        const arrayLife = [arr[i - 1][j - 1],
          arr[i - 1][j], arr[i - 1][j + 1],
          arr[i][j - 1], arr[i][j + 1],
          arr[i + 1][j - 1], arr[i + 1][j],
          arr[i + 1][j + 1]];
        const sumNeighbours = arrayLife.reduce((i, j) => i + j, 0);
        if (arr[i][j] === 1) {
          life2[i][j] = (sumNeighbours === 2 || sumNeighbours === 3) ? 1 : 0;
        } else if (life2[i][j] === 0) {
          if (sumNeighbours === 3) life2[i][j] = 1;
        }
      }
    }
    return life2;
  }
  let s = 0;
  addGrid();
  while (s < 5) {
    searchLife(life);
    console.table(life2);
    [life, life2] = [life2, life];
    s += 1;
  }
*/