//VARIABLES
let red = true;
let grid;
let canDrop = false;
let gameOn = false;
let colOn = null;
let redCpu = false;
let yellowCpu = false;
let userName1;
let userName2;
let turn;
let gameTime;
let timer;
let restart;
//BUTTONS
let playButton = document.getElementById('play-button');
playButton.addEventListener("click", function(){
    gameScene();
});
let homeButton = document.getElementById('home-button');
homeButton.addEventListener("click", function(){
    popUp(false);
});
let exitButton = document.getElementById('exit-button');
exitButton.addEventListener("click", function(){
    popUp(false);
});
let resetButton = document.getElementById('reset-button');
resetButton.addEventListener("click", function(){
    popUp(true);
});
let player1Type = document.getElementById('player1-type');
player1Type.addEventListener("click", function(){
    playerType(true);
});
let player2Type = document.getElementById('player2-type');
player2Type.addEventListener("click", function(){
    playerType(false);
});
let yesButton = document.getElementById('yes-button');
yesButton.addEventListener("click", function(){
    popUpConfirm(true);
});
let noButton = document.getElementById('no-button');
noButton.addEventListener("click", function(){
    popUpConfirm(false);
});
let winHomeButton = document.getElementById('win-home-button');
winHomeButton.addEventListener("click", function(){
    popUpConfirm(true);
});
let playAgainButton = document.getElementById('win-play-button');
playAgainButton.addEventListener("click", function(){
    gameScene();
});

//FUNCTIONS
//Llamada al inicio, añade funcionalidad a las columnas del juego
function startGame(){
    /*Si hacias scroll con el mouse del portátil entre turnos de tirar la ficha el programa detectaba mal donde estaba el cursor situado
    y aparecia la ficha en una columna equivocada, por eso no permito scroll mientras la ficha cae a la posicion correspondiente*/
    window.addEventListener('scroll', function(){
        if(!canDrop && gameOn)
            window.scrollTo(0, 0);
    });

    /*Al pasar el cursor por encima de una columna aparece una ficha en la parte superior para marcar donde se tirará.
    si se hace click se llama la funcion dropToken().
    Si el mouse se pasa por encima de una columna mientras la animación de caida de ficha se esta produciendo guarda
    la columna donde está ne colOn y al acabar la animación se activa la ficha en la parte superior sin necesidad de
    mover el mouse de nuevo*/
    for(let i=0; i<7; i++){
        document.getElementById(`col${i}`).addEventListener('mouseover', function(){
            colOn = i;
            if(!canDrop){
                return;
            }
            if(red)
                document.getElementById(`t${i}`).classList.add('active-red');
            else
                document.getElementById(`t${i}`).classList.add('active-yellow');
        });

        document.getElementById(`col${i}`).addEventListener('mouseout', function(){
            colOn = null;
            if(!canDrop){
                return;
            }
            if(red)
                document.getElementById(`t${i}`).classList.remove('active-red');
            else
                document.getElementById(`t${i}`).classList.remove('active-yellow');
        });

        document.getElementById(`col${i}`).addEventListener('click', function(){
            if(!canDrop) return;
            dropToken(i);
        });
    }
}

//Cuando se pulsa el botón de salir o reset mientras estás en un juego empezado salta una pantalla que te pregunta si quieres salir o reiniciar
function popUp(res) {
    if(!gameOn) return;
    canDrop = false;
    gameOn = false;

    restart = res;
    if(res)
        document.getElementById('question-pop').innerHTML = '¿Estás seguro que quieres reiniciar la partida?';
    else
        document.getElementById('question-pop').innerHTML = '¿Estás seguro que quieres salir?';

    document.getElementById('sure-exit').classList.remove('disabled');
    document.getElementById('pop-up').classList.remove('disabled');
}

//Despues de confirmar que quieres salir en el pop-up o al acabar la partida
function popUpConfirm(goBack){
    //reinicia el juego y vuelve a 'main' o a la escena del juego
    if(goBack){
        if(restart){
            gameScene();
        }
        else{
            restartScene();
            document.getElementById('main').classList.remove('game-on');
            document.getElementById('board-container').className = 'center game-off';
            document.getElementById('hud').className = 'disabled';
        }
    }
    else{
        gameOn = true;
        if(red && redCpu)
            cpu();
        else if (!red && yellowCpu)
            cpu();
        else
            canDrop = true;
    }
    //Si no se quiere salir solo cierra el pop-up
    document.getElementById('sure-exit').classList.add('disabled');
    document.getElementById('pop-up').classList.add('disabled');      
}

//Cambia la pantalla cuando se activa o desactiva si quieres jugar contra la maquina
function playerType(red){
    if(red){
        if(player1Type.checked){
            document.getElementById('player1-name').classList.add('disabled');
            document.getElementById('player1-cpu').classList.remove('disabled');
        }
        else{
            document.getElementById('player1-cpu').classList.add('disabled');
            document.getElementById('player1-name').classList.remove('disabled');
        }
    }
    else{
        if(player2Type.checked){
            document.getElementById('player2-name').classList.add('disabled');
            document.getElementById('player2-cpu').classList.remove('disabled');
        }
        else{
            document.getElementById('player2-cpu').classList.add('disabled');
            document.getElementById('player2-name').classList.remove('disabled');
        }
    }

    let str='';
    if(player1Type.checked)
        str += 'MÁQUINA';
    else
        str += 'JUGADOR';
    str += ' <i>vs</i> ';
    if(player2Type.checked)
        str += 'MÁQUINA';
    else
        str += 'JUGADOR';
    
    document.getElementById('pvp').innerHTML = str;
}

//Activa la 'escena' del juego
function gameScene() {
    restartScene();

    //Obtiene usernames
    userName1 = document.getElementById('player1-name').value;
    if(userName1 === '') userName1 = 'Jugador1';
    userName2 = document.getElementById('player2-name').value;
    if(userName2 === '') userName2 = 'Jugador2';

    //Mira si son CPU y cambia username a CPU en ese caso
    redCpu = player1Type.checked;
    if(redCpu) userName1 = 'CPU';
    yellowCpu = player2Type.checked;
    if(yellowCpu) userName2 = 'CPU';

    document.getElementById('main').className = 'game-on';
    document.getElementById('board-container').className = 'center';
    document.getElementById('game-starting-border').classList.remove('disabled'); //Pone quien empieza tirando

    turn = 1;
    document.getElementById('turn').innerHTML = `Turno ${turn}`;
    document.getElementById('game-starting').innerHTML = `<i>EMPIEZA LA PARTIDA</i><br><br><strong style="color:red">Turno rojo</strong><br><p>${userName1}</p>`;

    setTimeout(function(){
        document.getElementById('game-starting-border').classList.add('disabled'); //desactiva el mensaje de quien empieza tirando

        //Activa el hud, añade los valores correspondientes e inica el timer
        document.getElementById('who-turn').innerHTML = `Turno de<br>${userName1}`;
        document.getElementById('turn-token').className = 'token-choose active-red';
        document.getElementById('hud').classList.remove('disabled');
        startTimer();

        //Inicia el turno rojo de jugador o cpu
        gameOn= true;
        if(redCpu)
            cpu();
        else{
            canDrop = true;
            if(colOn !== null)
                document.getElementById(`t${colOn}`).classList.add('active-red'); //Activa la ficha en la que el cursor esta encima
        }
    },2000);
}

//Cronómetro
function startTimer(){
    gameTime = 0;
    document.getElementById('timer').innerHTML = '00:00';
    timer = setInterval(function(){
        let minutes = Math.floor(gameTime/60).toString();
        if(minutes.length === 1)
            minutes = '0' + minutes;
        let seconds = (gameTime%60).toString();
        if(seconds.length === 1)
            seconds = '0' + seconds;
        document.getElementById('timer').innerHTML = `${minutes}:${seconds}`;
        gameTime++;
    }, 1000);
}

//Reinicia valores y 'escena'
function restartScene(){
    document.getElementById('end-game-hud').className = 'disabled';
    document.getElementById('hud').className = 'disabled';
    document.getElementById('home-button').className = 'small-button';
    document.getElementById('body').className = '';

    clearInterval(timer);

    red = true;
    grid = [];
    for(let i=0; i<7; i++){
        grid[i] = new Array(6).fill(0);
    }

    for(let i=0; i<7; i++){
        for(let j=0; j<6; j++){
            document.getElementById(`s${j}${i}`).className = 'slot';
        }
    }
}

//Llamado al hacer click en una columna, hace caer una ficha
function dropToken(col){
    canDrop = false; //Controla que no se pueda tirar otra ficha hasta que acaba la animación de caida

    //Mira en que posicion (profundidad) caerá, si no hay espacio en la columna no seguirá con la función
    let depth = 5;
    while(grid[col][depth] !== 0){
        depth--;
        if(depth < 0){
            canDrop = true;
            return;
        }
    }

    //Añade valor (rojo 1, amarillo 2) a la matriz tablero (grid)
    if(red)
        grid[col][depth] = 1;
    else
        grid[col][depth] = 2;

    //Animación de caida de ficha
    document.getElementById(`t${col}`).animate([
        {transform: 'translate(0%, 0%)'},
        {transform: `translate(0%, ${+90 + 100*depth}px)`},
        {transform: `translate(0%, ${+90 + 97*depth}px)`},
        {transform: `translate(0%, ${+90 + 100*depth}px)`},
        {transform: `translate(0%, ${+90 + 100*depth}px)`},
    ], {
        duration: 200 + 1000*(depth + 1)/10
    });
    
    //Cambia la clase del slot que toca para que su interior tenga la ficha dibujada y no transparente. La ficha que ha sido animada se desactiva
    //para poder usarla otra vez como marcador de donde se tirará
    setTimeout(function(){
        if(red){
            document.getElementById(`s${depth}${col}`).classList.add('slot-red');
            document.getElementById(`t${col}`).classList.remove('active-red');
        }
        else{
            document.getElementById(`s${depth}${col}`).classList.add('slot-yellow');
            document.getElementById(`t${col}`).classList.remove('active-yellow');
        }

        winCheck(col, depth);
    },150 + 1000*(depth + 1)/10);
}

//Comprueba despues de cada turno si el jugador que ha tirado la ficha ha ganado
function winCheck(col, depth){
    let win, colAux, depthAux;
    let firstCoinWin;
    //Mira las fichas que hay abajo para ver si ha ganado
    win = 1;
    depthAux = depth;
    firstCoinWin = [col,depth];

    let type = 1;
    if(!red)
        type = 2;

    do{
        if(check(col, depthAux+1, type)){
            win++;
            depthAux++;
            if(win === 4){
                endGame(firstCoinWin, 0);
                return;
            }
        }
        else
            break;
    }while(true);

    //Mira derecha izquierda
    win = 1;
    colAux = col;
    firstCoinWin = [col,depth];
    do{
        if(check(colAux-1, depth, type)){
            win++;
            colAux--;
            firstCoinWin = [colAux,depth];
            if(win === 4){
                endGame(firstCoinWin, 1);
                return;
            }
        }
        else
            break;
    }while(true);
    colAux = col;
    do{
        if(check(colAux+1, depth, type)){
            win++;
            colAux++;
            if(win === 4){
                endGame(firstCoinWin, 1);
                return;
            }
        }
        else
            break;
    }while(true);

    //Mira diagonal \
    win = 1;
    colAux = col;
    depthAux = depth;
    firstCoinWin = [col,depth];
    do{
        if(check(colAux-1, depthAux-1, type)){
            win++;
            colAux--;
            depthAux--;
            firstCoinWin = [colAux,depthAux];
            if(win === 4){
                endGame(firstCoinWin, 2);
                return;
            }
        }
        else
            break;
    }while(true);
    colAux = col;
    depthAux = depth;
    do{
        if(check(colAux+1, depthAux+1, type)){
            win++;
            colAux++;
            depthAux++;
            if(win === 4){
                endGame(firstCoinWin, 2);
                return;
            }
        }
        else
            break;
    }while(true);
   
    //Mira diagonal /
    win = 1;
    colAux = col;
    depthAux = depth;
    firstCoinWin = [col,depth];
    do{
        if(check(colAux-1, depthAux+1, type)){
            win++;
            colAux--;
            depthAux++;
            firstCoinWin = [colAux,depthAux];
            if(win === 4){
                endGame(firstCoinWin, 3);
                return;
            }
        }
        else
            break;
    }while(true);
    colAux = col;
    depthAux = depth;
    do{
        if(check(colAux+1, depthAux-1, type)){
            win++;
            colAux++;
            depthAux--;
            if(win === 4){
                endGame(firstCoinWin, 3);
                return;
            }
        }
        else
            break;
    }while(true);
    
    //Mira si hay empate
    let tie = 0;
    for(let i=0; i<7; i++){
        if(grid[i][0] !== 0)
            tie++;
    }
    if(tie === 7){
        endTie();
        return;
    }

    //Si no hay victoria cambia de turno
    red = !red;
    if(red){
        turn++;
        document.getElementById('turn').innerHTML = `Turno ${turn}`;

        document.getElementById('who-turn').innerHTML = `Turno de<br>${userName1}`;
        document.getElementById('turn-token').classList.remove('active-yellow');
        document.getElementById('turn-token').classList.add('active-red');

        if(redCpu)
            cpu();
        else{
            canDrop = true;
            //Activa la ficha en la que el cursor esta  encima
            if(colOn !== null)
                document.getElementById(`t${colOn}`).classList.add('active-red');
        }
    }
    else{
        document.getElementById('who-turn').innerHTML = `Turno de<br>${userName2}`;
        document.getElementById('turn-token').classList.remove('active-red');
        document.getElementById('turn-token').classList.add('active-yellow');

        if(yellowCpu)
            cpu();
        else{
            canDrop = true;
            //Activa la ficha en la que el cursor esta  encima
            if(colOn !== null)
                document.getElementById(`t${colOn}`).classList.add('active-yellow');          
        }
    }
}

//Comprueba el valor que hay en el grid a la posicion que se le pasa
function check(col, depth, type){
    if(depth > 5 || depth < 0 || col > 6 || col < 0)
        return false;
    
    if(grid[col][depth] === type)
        return true;
    else
        return false;
}

//Llamada si algun jugador ha ganado
function endGame(first, direction){
    //Desactiva timer y boton salir
    gameOn = false;
    clearInterval(timer);
    document.getElementById('home-button').classList.add('disabled');
    let type;
    if(red){
        type = 1;
        document.getElementById('body').className = 'red-win';
    }
    else{
        type = 2;
        document.getElementById('body').className = 'yellow-win';
    }

    //Ilumina las fichas que han hecho ganar
    let tw = first;
    let light = setInterval(function(){
        if(red){
            document.getElementById(`s${tw[1]}${tw[0]}`).classList.remove('slot-red');
            document.getElementById(`s${tw[1]}${tw[0]}`).classList.add('slot-red-win');
        }
        else{
            document.getElementById(`s${tw[1]}${tw[0]}`).classList.remove('slot-yellow');
            document.getElementById(`s${tw[1]}${tw[0]}`).classList.add('slot-yellow-win');
        }

        switch (direction){
            case 0:
                if(check(tw[0], tw[1]+1, type))
                    tw[1]++;
                else{
                    clearInterval(light);
                    gameSummary(false);
                }
                break;
            case 1:
                if(check(tw[0]+1, tw[1], type))
                    tw[0]++;
                else{
                    clearInterval(light);
                    gameSummary(false);
                }
                break;
            case 2:
                if(check(tw[0]+1, tw[1]+1, type)){
                    tw[0]++;
                    tw[1]++;
                }
                else{
                    clearInterval(light);
                    gameSummary(false);
                }
                break;
            case 3:
                if(check(tw[0]+1, tw[1]-1, type)){
                    tw[0]++;
                    tw[1]--;
                }
                else{
                    clearInterval(light);
                    gameSummary(false);
                }
                break;
            default:
                break;
        }
    }, 250);
}

//Salta en caso de empate abre gameSummary
function endTie(){
    gameOn = false;
    clearInterval(timer);
    document.getElementById('home-button').classList.add('disabled');
    gameSummary(true);
}

//Activa el resumen de la partida
function gameSummary(tie){
    document.getElementById('hud').classList.add('disabled');
    document.getElementById('board-container').className = 'center game-win';
    
    if(tie){
        document.getElementById('who-won').innerHTML = `EMPATE`;
        document.getElementById('win-info').innerHTML = `<strong>Turno</strong><br>${turn}<br><br><strong>Tiempo</strong><br>${document.getElementById('timer').innerHTML}<br><br><strong>Oponentes</strong><br>${userName1}<br>${userName2}`;
    }else{
        if(red){
            document.getElementById('who-won').innerHTML = `HA GANADO<br>${userName1}`;
            document.getElementById('win-info').innerHTML = `<strong>Turno</strong><br>${turn}<br><br><strong>Tiempo</strong><br>${document.getElementById('timer').innerHTML}<br><br><strong>Oponente</strong><br>${userName2}`;
        }
        else{
            document.getElementById('who-won').innerHTML = `HA GANADO<br>${userName2}`;
            document.getElementById('win-info').innerHTML = `<strong>Turno</strong><br>${turn}<br><br><strong>Tiempo</strong><br>${document.getElementById('timer').innerHTML}<br><br><strong>Oponente</strong><br>${userName1}`;
        }
    }
    document.getElementById('end-game-hud').classList.remove('disabled');
}

//CPU con sistema de puntos
function cpu(){
    if(!gameOn) return;

    let score = [0, -999999];
    for(let i=0; i<7; i++){
        let canCheck = true;
        let auxScore = 0;

        let depth = 5;
        while(grid[i][depth] !== 0 && canCheck){
            depth--;
            if(depth < 0){
                canCheck = false;
            }
        }

        if(canCheck){
            //Añade valor (rojo 1, amarillo 2) a la matriz tablero (grid)
            if(red)
                grid[i][depth] = 1;
            else
                grid[i][depth] = 2;

            //Suma de puntuación para decidir donde tirar
            //Tirada en columna central +4 puntos
            //2 en linea +2 puntos
            //3 en linea +6 puntos
            //victoria +10000 puntos (siempre la elige)

            if(i === 3)
                auxScore += 4;

            //Abajo
            let aux = cpuCheck(grid[i][depth], i, depth, 0, 1);
            switch(aux){
                case 0:
                    break;
                case 1:
                    auxScore += 2;
                    break;
                case 2:
                    auxScore += 6;
                    break;
                default:
                    auxScore += 10000;
                    break;
            }
            //Derecha izquierda
            aux = cpuCheck(grid[i][depth], i, depth, -1, 0) + cpuCheck(grid[i][depth], i, depth, 1, 0);
            switch(aux){
                case 0:
                    break;
                case 1:
                    auxScore += 2;
                    break;
                case 2:
                    auxScore += 6;
                    break;
                default:
                    auxScore += 10000;
                    break;
            }
            //Diagonal /
            aux = cpuCheck(grid[i][depth], i, depth, -1, 1) + cpuCheck(grid[i][depth], i, depth, 1, -1);
            switch(aux){
                case 0:
                    break;
                case 1:
                    auxScore += 2;
                    break;
                case 2:
                    auxScore += 6;
                    break;
                default:
                    auxScore += 10000;
                    break;
            }
            //Diagonal \
            aux = cpuCheck(grid[i][depth], i, depth, -1, -1) + cpuCheck(grid[i][depth], i, depth, 1, 1);
            switch(aux){
                case 0:
                    break;
                case 1:
                    auxScore += 2;
                    break;
                case 2:
                    auxScore += 6;
                    break;
                default:
                    auxScore += 10000;
                    break;
            }

            //Resta la puntuacion del posible turno del oponente(peor caso)
            auxScore -= oponentsTurnCheck();


            //Vuelve a poner la grid como antes y mira si la puntuación obtenida es mejor que la mejor anterior y la guarda
            grid[i][depth] = 0;

            if(auxScore >= score[1]){
                if(auxScore === score[1]){
                    if(Math.round(Math.random()) === 0)
                        score = [i, auxScore];
                }
                else{
                    score = [i, auxScore];
                }
            }
        }      
    }

    if(red)
        document.getElementById(`t${score[0]}`).classList.add('active-red');
    else
        document.getElementById(`t${score[0]}`).classList.add('active-yellow');
    dropToken(score[0]);
}

//Mira todos los posibles turnos del oponente despues del turno del posible turno del cpu
function oponentsTurnCheck(){
    let score = 0;
    for(let i=0; i<7; i++){
        let canCheck = true;
        let auxScore = 0;


        let depth = 5;
        while(grid[i][depth] !== 0 && canCheck){
            depth--;
            if(depth < 0){
                canCheck = false;
            }
        }

        if(canCheck){
            //Añade valor (rojo 1, amarillo 2) a la matriz tablero (grid)
            if(red)
                grid[i][depth] = 2;
            else
                grid[i][depth] = 1;


            //Suma de puntuación del oponente para ver si le favorece la posible tirada del cpu
            //2 en linea +1 punto
            //3 en linea +3 puntos
            //3 en linea con 2 espacios vacios en los laterales +200 puntos (victoria siguiente turno)
            //victoria +500puntos
            //Abajo
            let aux = cpuCheck(grid[i][depth], i, depth, 0, 1);
            switch(aux){
                case 0:
                case 1:
                    auxScore += 1;
                    break;
                case 2:
                    auxScore += 3;
                    break;
                default:
                    auxScore += 500;
                    break;
            }   
            //Derecha izquierda
            aux = cpuCheck(grid[i][depth], i, depth, -1, 0, true) + cpuCheck(grid[i][depth], i, depth, 1, 0, true);
            switch(aux){
                case 0:
                case 10:
                case 20:
                    break;
                case 1:
                case 11:
                case 21:
                    auxScore += 1;
                    break;
                case 2:
                case 12:
                    auxScore += 3;
                    break;
                default:
                    auxScore += 500;
                    break;
            }
            //Diagonal /
            aux = cpuCheck(grid[i][depth], i, depth, -1, 1, true) + cpuCheck(grid[i][depth], i, depth, 1, -1, true);
            switch(aux){
                case 0:
                case 10:
                case 20:
                    break;
                case 1:
                case 11:
                case 21:
                    auxScore += 1;
                    break;
                case 2:
                case 12:
                    auxScore += 3;
                    break;
                default:
                    auxScore += 500;
                    break;
            }
            //Diagonal \
            aux = cpuCheck(grid[i][depth], i, depth, -1, -1, true) + cpuCheck(grid[i][depth], i, depth, 1, 1, true);
            switch(aux){
                case 0:
                case 10:
                case 20:
                    break;
                case 1:
                case 11:
                case 21:
                    auxScore += 1;
                    break;
                case 2:
                case 12:
                    auxScore += 3;
                    break;
                default:
                    auxScore += 500;
                    break;
            }
            
            //Vuelve a poner la grid como antes y mira si la puntuación obtenida es mejor que la mejor anterior y la guarda
            //guarda el peor caso
            grid[i][depth] = 0;
            if(auxScore > score){
                score = auxScore;
            }
        }
    }
    return score;
}

//comprueba cuantos en linea hay
function cpuCheck(type, col, depth, directionCol, directionDepth, next){
    let row = 0;
    do{
        if(check(col + directionCol, depth + directionDepth, type)){
            row++;
            col += directionCol;
            depth += directionDepth;
        }
        else{ //si hay espacio en blanco en el lateral suma +10 para poder detectarlo (solo se hace si 'next' === true)
            if(next && check(col + directionCol, depth + directionDepth, 0))
                row += 10;
            break;
        }
    }while(true);

    return row;
}

//CODIGO
startGame();