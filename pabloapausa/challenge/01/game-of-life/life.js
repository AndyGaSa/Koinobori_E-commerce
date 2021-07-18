class Life {
    constructor() {
        this.matrix();
        console.log(cell0);
        console.log(cell1);
    }

    matrix() {
        let table = document.querySelector('.table');
        for (let xAxis = 0; xAxis <= row; xAxis++) {
            let tr = document.createElement('tr'); 
            cell0[xAxis] = []; 
            cell1[xAxis] = [];
            for (let yAxis = 0; yAxis <= column; yAxis++) {
                let td = document.createElement('td');
                td.setAttribute('id', `${xAxis}-${yAxis}`);
                td.setAttribute('class', `dead`);
                cell0[xAxis][yAxis] = 0;
                cell1[xAxis][yAxis] = 0;
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
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
                let nuevo = document.getElementById(`${x}-${y}`); 
                (cell1[x][y] === 1) ? nuevo.setAttribute('class', `alive`) : nuevo.setAttribute('class', `dead`);
            }
        }
        [cell0, cell1] = [cell1, cell0];
        return cell1;
    }

    html(button) {
        this.button = button; 
        let x; 
        let y; 
        [x, y] = this.button.id.split("-");
        if (cell0[x][y] === 0) {
            cell0[x][y] = 1;
            this.button.setAttribute('class', `alive`);
        } else {
            cell0[x][y] = 0;
            this.button.setAttribute('class', `dead`);
        } 
    }
}

let cell0 = [];
let cell1 = [];
let aux = [];

let status = false;
const [row, column] = [12, 12];
const life = new Life();
const square = document.querySelectorAll("td");
const play = document.querySelector(".play"); 

square.forEach((button) => {
    button.addEventListener("click", () => {
        life.html(button);
    })
})

let interval; 

play.addEventListener("click", () => {
    if (status === false) {
        status = true; 
        interval = setInterval(() => {
            life.execute(); 
        }, 500);
    } else {
        status = false;
        clearInterval(interval);
    }
});

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
*/
