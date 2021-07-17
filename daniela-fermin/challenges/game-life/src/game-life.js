class Button {
  constructor(id, status, htmlElement) {
    this.id = id;
    this.status = status;
    this.htmlElement = htmlElement;
  }
}
const matrix = [];
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
const bff = () => {
    for (let x = 0; x < matrix.length -1; x += 1) {
        for (let y = 0; y < matrix[x].length -1; y += 1) {
            const p = [matrix[y-1][x-1].status,matrix[y-1][x].status, matrix[y-1][x+1].status];
            const c = [matrix[y][x-1].status, matrix[y][x+1].status];
            const n = [matrix[y+1][x-1].status,matrix[y+1][x].status, matrix[y+1][x+1].status];
            const neibourghs = [p, c, n].reduce((a,b) => a.concat(b))
            const sumAlive = neibourghs.reduce((a,b) => {return a + b}, 0)
            if(matrix[x][y].status === 1){
                if (ma)

            }
        }
    }
}
console.table(matrix);

const topLeft = array[xAxis - 1][yAxis - 1];
const topCenter = array[xAxis][yAxis - 1];
const topRight = array[xAxis + 1][yAxis - 1];
const centerLeft = array[xAxis - 1][yAxis];
const center = array[xAxis][yAxis];
const centerRight = array[xAxis + 1][yAxis];
const bottomLeft = array[xAxis - 1][yAxis - 1];
const bottomCenter = array[xAxis][yAxis - 1];
const bottomRight = array[xAxis + 1][yAxis - 1];





module.exports =;