
class Life {
    constructor() { 
        first = this.matrix();
        second = this.matrix();
        this.displayInHtml();

    }

    displayInHtml

    matrix() {
        let array = []; 
        for (let x = 0; x <= row; x++) {
            array[x] = [];
            for (let y = 0; y <= column; y++) {
                array[x][y] = 0; 
            }
        }
        return array;
    }

    user(cell) {
        this.cell = cell; 
        let [x, y] = this.cell.id.split("-");
        if (first[x][y] === 0) return this.isAlive(first, x, y); 
        return this.isDead(first, x, y); 
    }

    computer() {
        for (let x = 1; x < row; x++) {
            for (let y = 1; y < column; y++) {
                let neighbours = this.find(first, x, y);
                (neighbours === 3 || (neighbours === 2 && first[x][y] === 1))
                ? this.isAlive(second, x, y) : this.isDead(second, x, y);
            }
        }
        return [first, second] = [second, first];
    }

    isAlive(array, x, y) { // Closure function. 
        [this.array, this.x, this.y] = [array, x, y];
        let cell = document.getElementById(`${this.x}-${this.y}`);
        cell.setAttribute('class', 'alive');  
        return this.array[this.x][this.y] = 1; 
    }

    isDead(array, x, y) { // Closure function. 
        [this.array, this.x, this.y] = [array, x, y];
        let cell = document.getElementById(`${this.x}-${this.y}`); 
        cell.setAttribute('class', 'dead');
        return this.array[this.x][this.y] = 0; 
    }

    find(array, x, y) { // Closure function. 
        [this.array, this.x, this.y] = [array, x, y];
        let neighbours = 0;
        neighbours += (first[x - 1][y - 1] === 1) ? 1 : 0; // Top left. 
        neighbours += (first[x][y - 1] === 1) ? 1 : 0; // Top center. 
        neighbours += (first[x + 1][y - 1] === 1) ? 1 : 0; // Top right. 
        neighbours += (first[x - 1][y] === 1) ? 1 : 0; // Middle left. 
        neighbours += (first[x + 1][y] === 1) ? 1 : 0; // Middle right.  
        neighbours += (first[x - 1][y + 1] === 1) ? 1 : 0; // Bottom left. 
        neighbours += (first[x][y + 1] === 1) ? 1 : 0; // Bottom center. 
        neighbours += (first[x + 1][y + 1] === 1) ? 1 : 0; // Bottom right. 
        return neighbours;
    }

    //Execute. 

}

let [first, second] = [[], []];
let [interval, status] = [null, false];  
const [row, column] = [50, 50];
const life = new Life();
const cell = document.querySelectorAll("td");
const play = document.querySelector(".play"); 

cell.forEach((cell) => {
    cell.addEventListener("click", () => {
        life.user(cell);
    })
})

play.addEventListener("click", () => {
    if (status === false) {
        status = true; 
        interval = setInterval(() => {
            life.computer(); 
        }, 100);
    } else {
        status = false;
        clearInterval(interval);
    }
});


//CÓMO SE INDICAN POSICIONES EN CANVAS? 