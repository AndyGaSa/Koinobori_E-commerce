class Button {
  constructor(id, status, htmlElement) {
    this.id = id;
    this.status = status;
    this.htmlElement = htmlElement;
  }
}
let matrix = [];
const generateMatrix = (rows, columns) => {
  for (let x = 0; x < rows; x += 1) {
    matrix[x] = [];
    for (let y = 0; y < columns; y += 1) {
      matrix[x][y] = new Button(`button${x}${y}`, 0, null);
    }
  }
};

/*const fillButton = () => {
  for (let x = 0; x < matrix.length; x += 1) {
    for (let y = 0; y < matrix[x].length; y += 1) {
      matrix[x][y].id = `button${x}${y}`;
      matrix[x][y].status = 0;
      matrix[x][y].htmlElement = null;
    }
  }
};

fillButton();
*/
const bff = (button) => {
    for (let x = 0; x < matrix.length -1; x += 1) {
        for (let y = 0; y < matrix[x].length -1; y += 1) {
            const p = [matrix[y-1][x-1].status,matrix[y-1][x].status, matrix[y-1][x+1].status];
            const c = [matrix[y][x-1].status, matrix[y][x+1].status];
            const n = [matrix[y+1][x-1].status,matrix[y+1][x].status, matrix[y+1][x+1].status];
            const neihbourgs = [p, c, n].reduce((a,b) => a.concat(b))
            const sumAlive = neihbourgs.reduce((a,b) => {return a + b}, 0)
            if(!(button.status === 1 && (sumAlive > 1 && sumAlive < 4))){
                button.status = 0;
            
            } else if (button.status === 0 && (sumAlive === 0)){
                button.status = 0;
            }
        }
    }
}

let newMatrix =  matrix.map (rows => rows.map(bff(column)))

matrix = newMatrix;




module.exports =; 