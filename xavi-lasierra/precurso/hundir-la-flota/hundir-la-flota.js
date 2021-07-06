//Xavier Lasierra
/*Juego de hundir la flota
-Juegas contra la máquina
-Permite crear el tablero que quieras o te proporciona uno aleatorio*/

//VARIABLES
let username;
let board;
let boatList;
let oppBoard;
let oppBoatList;
let hitBoard;
let lastShotWasHit;

//variables IA
let oppOptions;
let hitCoords;
let hitOr;

//FUNCIONES
//Main function
function hundirLaFlota(){
    console.clear();
    console.log(`HUNDIR LA FLOTA\n\n¡Bienvenido!`);

    //Nombre del usuario
    do {
        username = prompt(`HUNDIR LA FLOTA\n\n¡Bienvenido! Inserte su nombre:`);
    } while(username === null || username === '');

    //Imprime normas
    console.clear();
    console.log(`HUNDIR LA FLOTA\n\n¡Hola ${username}!\n\n`);
    console.log(`Normas:\n
    -El juego consiste en hundir la flota del contrincante (máquina) mientras él intenta hundir la tuya.\n
    -Cada jugador dispone de dos cuadrícula que será oculta al otro. En una de ellas se han de colocar los barcos que el oponente intentará derribar y en la otra se marcarán los disparos que realizan en cada turno.\n
    -Los barcos se tienen que colocar respetando una franja de cuadros en blanco alrededor. Si se pueden colocar junto los bordes de la cuadricula.\n
    -Cada jugador debe colocar los siguientes barcos en posición horizontal o vertical:\n
        ·1 barco que ocupa 4 cuadros.\n
        ·2 barco que ocupa 3 cuadros.\n
        ·3 barco que ocupa 2 cuadros.\n
        ·4 barco que ocupa 1 cuadro.\n
    -Cada jugador dispone de un turno de disparo que se irá alternando. Para hacerlo escribirá las coordenadas (p. ej. "B3"), significa que su disparo corresponde a la casilla que se encuentra en esa coordenada.\n
    -Al disparar se comprobará el resultado en el tablero del oponente:\n
        ·AGUA -> Casilla en blanco\n
        ·TOCADO -> Casilla con barco. El jugador tiene derecho a otro disparo el mismo turno.\n
        ·HUNDIDO -> Casilla con barco de 1 cuadro o última parte de un barco ya tocado. También tiene derecho a otro disparo el mismo turno.\n
    -Quedará marcado en la cuadrícula los resultados de los disparos.\n
    -Finalmente, gana el jugador que antes consigue hundir la flota del otro.`);

    //Confirma si quiere empezar el juego (Ya ha leido las normas)
    if(confirm(`HUNDIR LA FLOTA\n\n¿Quieres empezar la partida?`)){
        console.clear();
        console.log(`HUNDIR LA FLOTA\n\nColoca tus barcos.\n
        Los barcos no pueden tocarse entre ellos. Cada jugador tiene:\n
            ·1 barco que ocupa 4 cuadros.\n
            ·2 barco que ocupa 3 cuadros.\n
            ·3 barco que ocupa 2 cuadros.\n
            ·4 barco que ocupa 1 cuadro.\n`);
        
        //Creación de tablero aleatorio o eligiendo donde poner cada barco
        if(confirm(`HUNDIR LA FLOTA\n\n¿Quieres crear tu propio tablero?\nSi pulsas cancelar se te proporcionará uno aleatorio.`)){
            do{
                board = createBoard();
                console.clear();
                console.log(`HUNDIR LA FLOTA\n\nTu tablero:`);
                printBoard(board);
                if(!board)
                    break;
                //Confirma si quieres jugar con el tablero creado o hacer otro
                if(confirm(`HUNDIR LA FLOTA\n\n¿Quieres jugar con este tablero?\n\nSi pulsas cancelar volverás a la creación de tablero.`))
                    break;
            }while(true);
        }
        //Creación de tablero aleatorio
        else{
            do{
                board = createRandomBoard(false);
                console.clear();
                console.log(`HUNDIR LA FLOTA\n\nTu tablero:`);
                printBoard(board);
                //Confirma si quieres jugar con el tablero creado o hacer otro
                if(confirm(`HUNDIR LA FLOTA\n\n¿Quieres jugar con este tablero?\n\nSi pulsas cancelar se generará otro aleatorio.`))
                    break;
            }while (true);
        }
        
        //Ya se ha creado el tablero del jugador (si no hay tablero se cierra el juego)
        if(board){
            //Crea tablero aleatorio oponente
            oppBoard = createRandomBoard(true);
            //Inicializa variables oponente
            oppOptions = [];
            for(let i=0; i<10; i++){
                for(let j=0; j<10; j++){
                    oppOptions.push(100*i + j);
                }
            }
            hitCoords = null;
            hitOr = null;
            //inicializa variables partida
            let gameEnded = false;
            let yourTurn = true;
            //Crea tablero de disparos
            hitBoard = [];
            for(let i=0; i<10; i++){
                hitBoard[i] = new Array(10).fill(0);
            }

            //Avisa que empieza el juego con tu turno
            alert(`HUNDIR LA FLOTA\n\n¡Empieza el juego!\nTu turno.`);

            //Bucle de la partida, no sale de el hasta que acaba el juego (se pide salir o un jugador dispara a todos los barcos del oponente)
            let exit = false;
            while(!gameEnded){
                //Imprime tableros
                console.clear();
                console.log(`HUNDIR LA FLOTA\n\n`);
                printBoatsLeft(true);
                printBoard(board);
                printBoatsLeft(false);
                printBoard(hitBoard);
                
                //Si toca el turno del jugador
                if(yourTurn){
                    let coordAux = prompt(`HUNDIR LA FLOTA\n\n¿Dónde quieres disparar?\nEjemplo: B5\n\nPulsa cancelar para salir del juego.`);
                    if(coordAux === null){
                        exit = true;
                        break;
                    }
                    
                    let coord = toCoords(coordAux);
                    //Comprueba si la coordenada añadida es válida
                    if(!coord){
                        alert(`HUNDIR LA FLOTA\n\nCoordenada introducida no válida.`);
                        continue;
                    }
                    //Comprueba si el espacio no ha sido ya disparado
                    if(hitBoard[coord[0]][coord[1]] !== 0){
                        alert(`HUNDIR LA FLOTA\n\nYa se ha disparado en ${coordAux.toUpperCase()}.`);
                        continue;
                    }

                    gameEnded = turn(coord);
                }
                //Turno máquina
                else{
                    gameEnded = oppTurn();
                }

                if(!lastShotWasHit)
                    yourTurn = !yourTurn; //Cambia de quien es el turno
            }
            if(!exit){
                //Final de partida, imprime tableros y quien ha ganado
                console.clear();
                console.log(`HUNDIR LA FLOTA\n`);
                if(yourTurn)
                    console.log(`¡Enhorabuena ${username}, has ganado!\n\n`);
                else
                    console.log(`Ha ganado la máquina. ¡Vuelve a intentarlo ${username}!\n\n`);
                printBoatsLeft(true);
                printBoard(board);
                printBoatsLeft(false);
                printBoard(hitBoard);
                console.log(`Tablero del oponente:`);
                printBoard(oppBoard);
    
                //Pide por prompt si se quiere volver a jugar
                do{
                    let aux = prompt(`HUNDIR LA FLOTA\n\n¿Quieres volver a jugar?\n[Y,N]`);
                    if(typeof(aux) === 'string') aux = aux.toUpperCase();
    
                    if(aux === null)
                        break;
                    else if(aux === 'N')
                        break;
                    else if(aux === 'Y'){
                        hundirLaFlota();
                        return;
                    }
                }while(true);
            }
        }    
    }

    //Mensaje final de juego
    console.clear();
    console.log(`HUNDIR LA FLOTA\n\n¡Hasta la próxima ${username}!`);
}

//Creacion de tablero pidiendo orientación y posición de cada barco
function createBoard() {
    let boatCanCreate;
    let grid;
    let boatLength = 4;
    let or;
    let coord;
    boatList = [];

    //CREA TABLERO
    grid = [];
    for(let i=0; i<10; i++){
        grid[i] = new Array(10).fill(0);
    }

    //Pide donde colocar barcos 1 a 1
    for(let i=10; i>=1; i--){
        do{
            console.clear();
            console.log(`HUNDIR LA FLOTA\n\nBarco ${boatLength} cuadros.\n\nSelecciona en que orientación lo quieres:`);
            console.log(`Vertical`);
            printBoat(boatLength, 0);
            console.log(`Horizontal`);
            printBoat(boatLength,1);
            console.log(`\n\n`);
            printBoard(grid);

            boatCanCreate = true;
            if(boatLength > 1){
                //Orientación
                let orAux;
                if(boatLength === 4)
                    orAux = prompt(`HUNDIR LA FLOTA\n\nBarco ${boatLength} cuadros, orientación vertical o horizontal?\n[V,H]\n\nPulsa cancelar para salir.`);
                else
                    orAux = prompt(`HUNDIR LA FLOTA\n\nBarco ${boatLength} cuadros, orientación vertical o horizontal?\n[V,H]\n\nPulsa cancelar para reiniciar la colocación de los barcos.`);

                //Salir del juego o reiniciar creación
                if(orAux === null){
                    if(boatLength === 4)
                        return false;
                    else{
                        createBoard();
                        return false;
                    }
                }

                //Si es diferente a V o H vuelve a pedir
                if(typeof(orAux) === 'string') orAux = orAux.toUpperCase();

                if(orAux !== 'V' && orAux !== 'H')
                    continue;

                //Pide posición
                console.clear();
                if(orAux === 'V'){
                    or = 0;
                    console.log(`HUNDIR LA FLOTA\n\nBarco ${boatLength} cuadros, orientación vertical. Selecciona en que cuadro quieres colocarlo.`);    
                }
                else{
                    or = 1;
                    console.log(`HUNDIR LA FLOTA\n\nBarco ${boatLength} cuadros, orientación horizontal. Selecciona en que cuadro quieres colocarlo.`);
                }
            }
            //Si el barco es solo de un cuadro no pide la orientación
            else{
                or = 0;
                console.clear();
                console.log(`HUNDIR LA FLOTA\n\nBarco ${boatLength} cuadro.\nSelecciona en que cuadro quieres colocarlo.`);
            }
            
            printBoat(boatLength, or);
            console.log(`\n\n`);
            printBoard(grid);
            
            //Pide posición
            do{
                let coordAux;
                if(boatLength === 1){
                    coordAux = prompt(`HUNDIR LA FLOTA\n\nBarco ${boatLength} cuadro.\n¿En que coordenada quieres colocarlo?\nEjemplo: B5\n\nPulsa cancelar para reiniciar la colocación de los barcos.`);
                }
                else{
                    coordAux = prompt(`HUNDIR LA FLOTA\n\nBarco ${boatLength} cuadros.\n¿En que coordenada quieres colocarlo?\nEjemplo: B5\n\nPulsa cancelar para volver a escoger la orientación.`);
                }
                
                //Salir del juego o reiniciar creación
                if(coordAux === null){
                    if(boatLength === 1){
                        createBoard();
                        return false;
                    }else{
                        boatCanCreate = false;
                        break;
                    }
                }

                coord = toCoords(coordAux);
                //Comprueba si la coordenada añadida es válida
                if(!coord){
                    alert(`HUNDIR LA FLOTA\n\nCoordenada introducida no válida.`);
                    continue;
                }
                //Comprueba si hay espacio para añadir el barco
                if(!canAdd(grid, or, coord, boatLength)){
                    alert(`HUNDIR LA FLOTA\n\nNo cabe el barco en la posición ${coordAux.toUpperCase()}.`);
                    continue;
                }
                break;      
            }while(true)

            //Si se puede crear el barco llama addBoat y sale del bucle
            if(boatCanCreate){
                grid = addBoat(grid, or, coord, boatLength, i, false);
                break;
            }
        }while(true);
        
        //Para crear los barcos desados con los cuadros deseados
        if(i === 10 || i === 8 || i === 5)
            boatLength--;
    }
    return grid;
}

//Creación de tablero aleatorio
function createRandomBoard(opp){
    let grid;
    let canCreate;
    do{
        if(opp)
            oppBoatList = [];
        else
            boatList = [];
        //CREA TABLERO
        grid = [];
        for(let i=0; i<10; i++){
            grid[i] = new Array(10).fill(0);
        }

        //AÑADE BARCOS
        canCreate = true;
        let boatLength = 4;
        for(let i=10; i>=1; i--){
            grid = addRandomBoat(grid, boatLength, i, opp);
            if(!grid){ //Si no puede añadir el barco (no hay posiciones libres) vuelve a empezar
                canCreate = false;
                break;
            }
            if(i === 10 || i === 8 || i === 5)
                boatLength--;
        }

    }while(!canCreate)

    return grid;
}

//Añade barco aleatorio al grid pasado
function addRandomBoat(grid, boatLength, id, opp){
    let coord;
    let or; //=0 vertical =1 horizontal
    let canCreate;
    let tries = 0;
    do{
        or = Math.round(Math.random());
        if(or === 0)
            coord = [Math.floor(Math.random() * (10 - boatLength)), Math.floor(Math.random() * 10)];
        else
            coord = [Math.floor(Math.random() * 10), Math.floor(Math.random() * (10 - boatLength))];

        //Comprueba si puede añadir al tablero
        canCreate = canAdd(grid, or, coord, boatLength);

        tries ++;
        if(tries > 100)
            return false;
    }while(!canCreate)
 
    return addBoat(grid, or, coord, boatLength, id, opp);
}

//Comprueba si se puede añadir un barco de x cuadros en la posicion y grid pasados por valor
function canAdd(grid, or, coord, boatLength){
    if(or === 0){
        if(coord[0]+boatLength > 10)
            return false;

        for(let i=0; i<boatLength; i++){
            if(grid[coord[0] + i][coord[1]] !== 0)
                return false;
        }
    }
    else{
        if(coord[1]+boatLength > 10)
            return false;

        for(let j=0; j<boatLength; j++){
            if(grid[coord[0]][coord[1] + j] !== 0)
                return false;
        }
    }
    return true;
}

//Añade el barco en la grid y los margenes donde no se puede poner otro barco
function addBoat(grid, or, coord, boatLength, id, opp){
    if(or === 0){
        //barco
        for(let i=0; i<boatLength; i++){
            grid[coord[0] + i][coord[1]] = id;
        }
        //margen
        if(coord[0] - 1 >= 0) //arriba
            grid[coord[0] - 1][coord[1]] = -1;
        if(coord[0] + boatLength < 10) //abajo
            grid[coord[0] + boatLength][coord[1]] = -1;
        if(coord[1] - 1 >= 0){ //izquierda
            for(let i=-1; i<=boatLength; i++){
                if(coord[0] + i >= 0 && coord[0] + i < 10)
                    grid[coord[0] + i][coord[1] - 1] = -1;
            }
        }
        if(coord[1] + 1 < 10){ //derecha
            for(let i=-1; i<=boatLength; i++){
                if(coord[0] + i >= 0 && coord[0] + i < 10)
                    grid[coord[0] + i][coord[1] + 1] = -1;
            }
        }
    }
    else{
        //barco
        for(let j=0; j<boatLength; j++){
            grid[coord[0]][coord[1] + j] = id;
        }
        //margen
        if(coord[0] - 1 >= 0){ //arriba
            for(let j=-1; j<=boatLength; j++){
                if(coord[1] + j >= 0 && coord[1] + j < 10)
                    grid[coord[0] - 1][coord[1] + j] = -1;
            }
        }
        if(coord[0] + 1 < 10){ //abajo
            for(let j=-1; j<=boatLength; j++){
                if(coord[1] + j >= 0 && coord[1] + j < 10)
                    grid[coord[0] + 1][coord[1] + j] = -1;
            }
        }
        if(coord[1] - 1 >= 0) //izquierda
            grid[coord[0]][coord[1] - 1] = -1;
        if(coord[1] + boatLength < 10) //derecha
            grid[coord[0]][coord[1] + boatLength] = -1;
    }

    //Añade barco a la lista de barcos
    if(opp){
        oppBoatList.push({id: id, boatLength: boatLength, length: boatLength, or: or, coord: coord});
    }
    else{
        boatList.push({id: id, boatLength: boatLength, length: boatLength, or: or, coord: coord});
    }

    return grid;
}

//Turno del jugador, mira si ha dado a un barco con la coordenada pasada por valor. Devuelve true si tocado y hundido
function turn(coord){
    /*hitBoard values
    -2: agua
    -3: tocado
    -4: tocado y hundido*/
    if(oppBoard[coord[0]][coord[1]] <= 0){
        lastShotWasHit = false;

        hitBoard[coord[0]][coord[1]] = -2;
        alert(`HUNDIR LA FLOTA\n\nAGUA`);
    }
    else{
        lastShotWasHit = true;

        let ind = oppBoatList.findIndex(x => x.id === oppBoard[coord[0]][coord[1]]);

        oppBoatList[ind].length--;

        if(oppBoatList[ind].length === 0){
            if(oppBoatList[ind].or === 0){
                for(let i=0; i<oppBoatList[ind].boatLength; i++){
                    hitBoard[oppBoatList[ind].coord[0] + i][oppBoatList[ind].coord[1]] = -4;
                }
            }
            else{
                for(let j=0; j<oppBoatList[ind].boatLength; j++){
                    hitBoard[oppBoatList[ind].coord[0]][oppBoatList[ind].coord[1] + j] = -4;
                }
            }
            //Elimina de la lista el objeto si ya ha sido disparado totalmente
            oppBoatList.splice(ind, 1);

            alert(`HUNDIR LA FLOTA\n\nTOCADO Y HUNDIDO`);
            //winCheck
            if(oppBoatList.length === 0)
                return true;
        }
        else{
            hitBoard[coord[0]][coord[1]] = -3;
            alert(`HUNDIR LA FLOTA\n\nTOCADO`);
        }
    }
    return false;
}

//Turno de la máquina
function oppTurn(){
    let coord;

    //CALCULA DONDE DISPARAR
    coord = whereHit();
       
    //DISPARA
    /*board values
    -2: agua
    -3: tocado
    -4: tocado y hundido*/

    //agua
    if(board[coord[0]][coord[1]] <= 0){
        lastShotWasHit = false;

        alert(`HUNDIR LA FLOTA\n\nTurno del oponente.\n\nDispara a ${toLetterCoords(coord)}\nAGUA`);
    }
    //hit
    else{
        lastShotWasHit = true;

        let ind = boatList.findIndex(x => x.id === board[coord[0]][coord[1]]);

        boatList[ind].length--;

        //Añade coordenada en hitCoords, hitOr para calcular siguiente disparo
        if(hitCoords === null)
            hitCoords = [];
        else if(hitOr === null){//Si ya ha habido un hit anterior mira cual es la orientación del barco
            if(Math.floor(hitCoords[0]/100) === coord[0])
                hitOr = 1;
            else
                hitOr = 0;
        }
        hitCoords.push(coord[0]*100+coord[1]);

        //HUNDE el barco
        if(boatList[ind].length === 0){
            if(boatList[ind].or === 0){
                for(let i=0; i<boatList[ind].boatLength; i++){
                    board[boatList[ind].coord[0] + i][boatList[ind].coord[1]] = -4;
                }
            }
            else{
                for(let j=0; j<boatList[ind].boatLength; j++){
                    board[boatList[ind].coord[0]][boatList[ind].coord[1] + j] = -4;
                }
            }
            //Elimina de la lista el objeto si ya ha sido disparado totalmente
            boatList.splice(ind, 1);

            //Elimina los margenes del barco hundido ya que no puede haber otro en esas posiciones
            deleteMarginFromOptions();
            hitCoords = null;
            hitOr = null;

            alert(`HUNDIR LA FLOTA\n\nTurno del oponente.\n\nDispara a ${toLetterCoords(coord)}\nTOCADO Y HUNDIDO`);
            //winCheck
            if(boatList.length === 0)
                return true;
        }
        //NO HUNDE el barco
        else{
            board[coord[0]][coord[1]] = -3;

            alert(`HUNDIR LA FLOTA\n\nTurno del oponente.\n\nDispara a ${toLetterCoords(coord)}\nTOCADO`);
        }
    }
    return false;
}

//Calcula donde disparar
function whereHit(){
    let coordAux;
    //Si no ha hit anterior dispara a un cuadro aleatorio disponible en oppOptions
    if(hitCoords === null){
        coordAux = oppOptions.splice(Math.floor(Math.random() * oppOptions.length), 1)[0];
    }
    //Si hay hitAnterior calcula donde disparar
    else{
        coordAux = shotChoose();
    }
    return [Math.floor(coordAux/100), coordAux%100];
}

//Calcula donde disparar si hay hit anterior
function shotChoose(){
    let aux;

    //en bucle hasta que encuentra un sitio válido donde disparar
    while(true){
        //Direccion donde puede disparar segun la orientacion hitOr
        if(hitOr === null)
            aux = Math.floor(Math.random() * 4);
        else if (hitOr === 0)
            aux = Math.floor(Math.random() * 2);
        else
            aux = Math.floor(Math.random() * 2) + 2;

        //Desde el primer hit a la direccion obtenida mira si puede disparar, si ya ha sido disparado ese cuadro mira el siguiente. Si no se puede disparar
        //en el cuadro (no esta oppOptions) sale del bucle y vuelve a intentarlo en otra dirección aleatoria.
        //Si puede disparar devuelve la coordenada dispararda
        let coordAux = hitCoords[0];
        do{
            if(aux === 0){
                coordAux -= 100;
                if(coordAux < 0)
                    break;
            }
            else if(aux === 1){
                coordAux += 100;
                if(coordAux >= 1000)
                    break;
            }
            else if(aux === 2){
                coordAux -= 1;
                if(coordAux % 100 >= 10)
                    break;
            }
            else{
                coordAux += 1;
                if(coordAux % 100 >= 10)
                    break;
            }

            //Comprueba que no haya sido ya un hit del mismo barco
            if(!hitCoords.includes(coordAux)){
                if(oppOptions.includes(coordAux)) //Mira si puede ser disparado(no esta descartado)
                    return deleteFromOptions(coordAux);
                break;
            }
        }while(true);
    }   
}

//Elimina la coordenada pasada por valor del array oppOptions
function deleteFromOptions(value){
    const index = oppOptions.findIndex(val => val === value);

    if(index !== -1){
        return oppOptions.splice(index, 1)[0];
    }
}

//ELimina los margenes despues de que el barco se haya hundido
function deleteMarginFromOptions(){
    hitCoords.sort((a, b) => a - b);

    if(hitOr === null){
        deleteFromOptions(hitCoords[0] - 100); //arriba
        deleteFromOptions(hitCoords[0] + 100); //abajo
        //izquierda
        for(let i=-1; i<=1; i++){
            deleteFromOptions(hitCoords[0] - 1 + i*100);
        }
        //derecha
        for(let i=-1; i<=1; i++){
            deleteFromOptions(hitCoords[0] + 1 + i*100);
        }
    }
    else if(hitOr === 0){
        deleteFromOptions(hitCoords[0] - 100); //arriba
        deleteFromOptions(hitCoords[0] + hitCoords.length*100); //abajo
        //izquierda
        for(let i=-1; i<=hitCoords.length; i++){
            deleteFromOptions(hitCoords[0] - 1 + i*100);
        }
        //derecha
        for(let i=-1; i<=hitCoords.length; i++){
            deleteFromOptions(hitCoords[0] + 1 + i*100);
        }
    }
    else{
        //arriba
        for(let i=-1; i<=hitCoords.length; i++){
            deleteFromOptions(hitCoords[0] - 100 + i);
        }
        //abajo
        for(let i=-1; i<=hitCoords.length; i++){
            deleteFromOptions(hitCoords[0] + 100 + i);
        }
        deleteFromOptions(hitCoords[0] - 1); //izquierda
        deleteFromOptions(hitCoords[0] + hitCoords.length); //derecha
    }
}

//Imprime el tablero de juego cambiando numeros por emojis y el indice lateral a letras
function printBoard(grid){
    let printGrid = [];
    for(let i=0; i<10; i++){
        printGrid[i] = new Array(10);
    }

    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[i].length; j++){
            if(grid[i][j] > 0)
                printGrid[i][j] = '🚢';
            else if(grid[i][j] === -2)
                printGrid[i][j] = '💧';
            else if(grid[i][j] === -3)
                printGrid[i][j] = '✘';
            else if(grid[i][j] === -4)
                printGrid[i][j] = '❌';
            else
                printGrid[i][j] = '';
        }
    }

    let printTable = {
        A: printGrid[0],
        B: printGrid[1],
        C: printGrid[2],
        D: printGrid[3],
        E: printGrid[4],
        F: printGrid[5],
        G: printGrid[6],
        H: printGrid[7],
        I: printGrid[8],
        J: printGrid[9],
    }
    console.table(printTable);
}

//Imprime un barco con los cuadros y orientación deseados (esta funcion es usada en createBoard)
function printBoat(boatLength, or){
    let aux = '';
    if(or === 0){
        for(let i=0; i<boatLength; i++){
            aux += '🚢\n';
        }
    }
    else{
        for(let i=0; i<boatLength; i++){
            aux += '🚢';
        }
    }
    console.log(aux);
}

//Imprime los barcos que le quedan al jugador deseado
function printBoatsLeft(yourBoats){
    let str;
    let list;
    let n1=0;
    let n2=0;
    let n3=0;
    let n4=0;
    if(yourBoats){
        str = 'Tu tablero:';
        list = boatList;
    }
    else{
        str = 'Disparos:';
        list = oppBoatList;
    }

    for(let i=0; i<list.length; i++){
        switch (list[i].boatLength){
            case 1:
                n1++;
                break;
            case 2:
                n2++;
                break;
            case 3:
                n3++;
                break;
            case 4:
                n4++;
                break;
            default:
                break;
        }
    }
    console.log(`${str}     🚢🚢🚢🚢x${n4}  🚢🚢🚢x${n3}  🚢🚢x${n2}  🚢x${n1}`);
}

//Convierte la coordenada pasada por valor del estilo letra numero en dos numeros
function toCoords(str){
    let coord = [0, 0];
    str = str.replace(/\s+/g, ''); //Si hay espacios en blanco los quita

    let lett = str.slice(0, 1).toUpperCase();
    switch (lett){
        case 'A':
            coord[0] = 0;
            break;
        case 'B':
            coord[0] = 1;
            break;
        case 'C':
            coord[0] = 2;
            break;
        case 'D':
            coord[0] = 3
            break;
        case 'E':
            coord[0] = 4;
            break;
        case 'F':
            coord[0] = 5;
            break;
        case 'G':
            coord[0] = 6;
            break;
        case 'H':
            coord[0] = 7;
            break;
        case 'I':
            coord[0] = 8;
            break;
        case 'J':
            coord[0] = 9;
            break;
        default:
            return false;
    }

    let num = parseInt(str.slice(1,2));

    if(num >= 0 && num <= 9)
        coord[1] = parseInt(num);
    else
        return false;

    return coord;
}

//Convierte de coordenada numero numero a coordenada letra numero
function toLetterCoords(coord){
    let lettAux;
    switch (coord[0]){
        case 0:
            lettAux = 'A';
            break;
        case 1:
            lettAux = 'B';
            break;
        case 2:
            lettAux = 'C';
            break;
        case 3:
            lettAux = 'D';
            break;
        case 4:
            lettAux = 'E';
            break;
        case 5:
            lettAux = 'F';
            break;
        case 6:
            lettAux = 'G';
            break;
        case 7:
            lettAux = 'H';
            break;
        case 8:
            lettAux = 'I';
            break;
        case 9:
            lettAux = 'J';
            break;
        default:
            break;
    }

    return lettAux + coord[1].toString();
}

//CÓDIGO
hundirLaFlota();