class Life {
    constructor() {
        cell0 = this.matrix();
        cell1 = this.matrix();
        this.otro();
    }

    matrix() {
        let array = [];
        for (let xAxis = 0; xAxis <= row; xAxis++) {
            array[xAxis] = [];  
            for (let yAxis = 0; yAxis <= column; yAxis++) {
                array[xAxis][yAxis] = '.';
            }
        }
        return array;
    }

    otro() {
        let table = document.querySelector('.table');
        for (let xAxis = 0; xAxis <= row; xAxis++) {
            let tr = document.createElement('tr'); 
            // tr.setAttribute("class", `table__row-${xAxis} row-${xAxis}`);
            // tr.setAttribute("class", `table__row-${xAxis} row-${xAxis}`);
            for (let yAxis = 0; yAxis <= column; yAxis++) {
                let td = document.createElement('td');
                // td.setAttribute("class", `row-${xAxis} row-${xAxis}__column-${yAxis}`);
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
                cell1[x][y] = ((neighbours === 3) || (neighbours === 2 && cell0[x][y] === 1)) ? 1 : '.'; 
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
        life.execute();
        //Pasar el resto a funciones de la clase.
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






function generaTabla(f, c) { // Obtener la referencia del elemento body
    const body = document.getElementsByTagName('div')[0]; // Crea un elemento <table> y un elemento <tbody>
    const tabla = document.createElement('table');
    const tblBody = document.createElement('tbody'); // Crea las celdas




    for (let i = 0; i < f; i += 1) {       // Crea las hileras de la tabla
        const hilera = document.createElement('tr');
        hilera.className = `fila${i.toString()}`;
        for (let j = 0; j < c; j += 1) { // Crea un elemento <td> y un nodo de texto, haz que el nodo de texto sea el contenido de <td>, ubica el elemento <td> al finalde la hilera de la tabla
          const celda = document.createElement('td');
          celda.className = `fila_${i.toString()}_column_${j.toString()}`;
          celda.id = 'c';
          const textoCelda = document.createTextNode(`${i}, columna ${j}`);
          celda.appendChild(textoCelda); 
          hilera.appendChild(celda);
        } // agrega la hilera al final de la tabla (al final del elemento tblbody)
        tblBody.appendChild(hilera);
      } // posiciona el <tbody> debajo del elemento <table>
      tabla.appendChild(tblBody); // appends <table> into <body>
      body.appendChild(tabla);  // modifica el atributo "border" de la tabla y lo fija a "2"; tabla.setAttribute('border', '2'); assignValue(arr);
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


  */
