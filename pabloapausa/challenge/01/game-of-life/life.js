class Life {
    constructor() {
        world0 = this.matrix(); 
        world1 = this.matrix();
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

    kill() {
        let neighbours; 
        for (let x = 0; x <= row; x++) {
            for (let y = 0; y <= column; y++) {
                neighbours = 1;
                neighbours += ((((x + 1) < row) && ((y - 1) > 0)) && (world1[x + 1][y - 1] === 1)) ? 1 : 0; //Top, left.
                neighbours += ((((x - 1) > 0) && ((y - 1) > 0)) && (world1[x - 1][y - 1] === 1)) ? 1 : 0; //Top, right.
                neighbours += ((((x + 1) < row) && ((y + 1) < column)) && (world1[x + 1][y + 1] === 1)) ? 1 : 0; //Bottom, left.
                neighbours += ((((x - 1) > 0) && ((y + 1) < column)) && (world1[x - 1][y + 1] === 1)) ? 1 : 0; //Bottom, right. 
                neighbours += (((y - 1) > 0) && (world1[x][y - 1] === 1)) ? 1 : 0; //Top, center.
                neighbours += (((x - 1) > 0) && (world1[x - 1][y] === 1)) ? 1 : 0; //Center, left.
                neighbours += (((x + 1) < row) && (world1[x + 1][y] === 1)) ? 1 : 0; //Center, right. 
                neighbours += (((y + 1) < column) && world1[x][y + 1] === 1) ? 1 : 0; //Bottom, center.
                world1[x][y] = (neighbours === 3 ||  (neighbours === 2 && world1[x][y] === 1)) ? 1 : 0; 
                [world0, world1] = [world1, world0];
            }
        }
        console.table(world0);
        console.table(world1);
    }


}

let world0;
let world1;
const [row, column] = [12, 12];
const life = new Life();

function hello() {
    life.kill();
}

hello();




/*
if ((((x + 1) < row) && ((y - 1) > 0)) && (world[x + 1][y - 1] === 1)) neighbours += 1; //Top, left.
if ((((x - 1) > 0) && ((y - 1) > 0)) && (world[x - 1][y - 1] === 1)) neighbours += 1; //Top, right.
if ((((x + 1) < row) && ((y + 1) < column)) && (world[x + 1][y + 1] === 1)) neighbours += 1; //Bottom, left.
if ((((x - 1) > 0) && ((y + 1) < column)) && (world[x - 1][y + 1] === 1)) neighbours += 1; //Bottom, right. 
if (((y - 1) > 0) && (world[x][y - 1] === 1)) neighbours += 1; //Top, center.
if (((x - 1) > 0) && (world[x - 1][y] === 1)) neighbours += 1; //Center, left.
if (((x + 1) < row) && (world[x + 1][y] === 1)) neighbours += 1; //Center, right. 
if (((y + 1) < column) && world[x][y + 1] === 1) neighbours += 1; //Bottom, center.
world[x][y] = (neighbours === 3 ||  (neighbours === 2 && world[x][y] === 1)) ? 1 : 0; 
*/