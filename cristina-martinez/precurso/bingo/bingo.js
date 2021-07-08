let carton = [];
let numeros = Array.from({ length: 50 }, (_, i) => i + 1);
let numerosUtilizadosX  = [];
let linea1 = 0;
let linea2 = 0;
let linea3 = 0;
let linea = false;
let turnoJugador = 0;
let jugador = { nombre: '', puntuacion:0};


function Jugador(){
    
    jugador.nombre = prompt(`Nombre del jugador:`);{
        if(jugador.nombre){
            let bienvenida = alert(`Hola, ${jugador.nombre}. A continuación verás las reglas del juego.`);
            crearCarton();
        }else{
            let despedida = alert(`¡Hasta luego, Lucas!`)
        }
    }
    
}

function crearCarton(){
    let desearCarton;

    for(let i =numeros.length-1 ; i>0 ;i--){
        let j = Math.floor( Math.random() * (i + 1) );
        [numeros[i],numeros[j]]=[numeros[j],numeros[i]];
    }

    carton = [
        [numeros[0], numeros[1], numeros[2], numeros[3], numeros[4]],
        [numeros[5], numeros[6], numeros[7], numeros[8], numeros[9]],
        [numeros[10], numeros[11], numeros[12], numeros[13], numeros[14]]
    ];

    console.table(carton);

    desearCarton = confirm(`¿Desea este cartón de Bingo?`);{
        if(desearCarton){
            generarNumeroRandom();
        }else{
            crearCarton();
        }
    }
}

function generarNumeroRandom(){
    
    let numeroRandom = Math.floor((Math.random() * (51-1))+1);
    if(numerosUtilizadosX.includes(numeroRandom)){
        generarNumeroRandom();
        
    }else{
        numerosUtilizadosX.push(numeroRandom);
        confirm(`Siguiente número cantado: ${numeroRandom}`);{

            for(let i = 0; i< carton.length; i++){
                for(let j= 0; j< carton[i].length; j++){
                    if(numeroRandom === carton[i][j]){
                        carton[i][j] = 'X'; 
                        if(i === 0){
                            linea1++;
                        }else  if(i === 1){
                            linea2++;
                        }else{
                            linea3++;
                        }                      
                    }  
                }
            }
            

    }
    console.table(carton);
            turnoJugador++;  
            if(linea){
                cantarBingo();
                
            }else{
                cantarLinea();
                
            }
        
}
}



function cantarLinea(){
    

        if(linea1 !== 5 && linea2 !== 5 && linea3 !== 5){
            preguntarNuevoTurno();

        }else if(linea1 === 5 || linea2 === 5 || linea3 === 5);{
                alert(`¡¡LÍNEA!!`);
                linea = true;
                if(turnoJugador === 5){
                    jugador.puntuacion += 300;

                }else if(turnoJugador < 10){
                    jugador.puntuacion += 250;

                }else if(turnoJugador < 15){
                    jugador.puntuacion += 200;

                }else if(turnoJugador < 20){
                    jugador.puntuacion += 100;

                }else if(turnoJugador < 30){
                    jugador.puntuacion += 50;

                }else if(turnoJugador < 40){
                    jugador.puntuacion += 35
                }else{
                    jugador.puntuacion += 25;
                }
                alert(`¡Ha ganado ${jugador.puntuacion} puntos por  conseguir hacer línea en ${turnoJugador} turnos!`)
                preguntarNuevoTurno();
            }
            
         
}
function cantarBingo(){
    
    
    if(linea1 !== 5 || linea2 !== 5 || linea3 !== 5){
        preguntarNuevoTurno();

        }else if(linea1 === 5 && linea2 === 5 && linea3 === 5){
            alert(`¡¡BINGO!!`);
            if(turnoJugador === 15){
                jugador.puntuacion += 500;
    
            }else if(turnoJugador < 20){
                jugador.puntuacion += 400
    
            }else if(turnoJugador < 30){
                jugador.puntuacion += 300;
    
            }else if(turnoJugador < 40){
                jugador.puntuacion += 100;
    
            }else if(turnoJugador < 45){
                jugador.puntuacion += 50
            }else{
                jugador.puntuacion += 25;
            }
            puntuacionFinalBingo();
        }

}

function preguntarNuevoTurno(){
    let continuarPartida;
    continuarPartida = confirm('¿Quiere continuar con la partida?');{
        if(continuarPartida){
            generarNumeroRandom();
        }else{
            puntuacionFinalBingo();
        }
    }
 
}


function puntuacionFinalBingo(){

alert(`Enhorabuena ${jugador.nombre}, su puntiación final es de ${jugador.puntuacion} puntos por conseguir hacer bingo en ${turnoJugador} turnos.`);
rankingFinal();
}


function rankingFinal(){
  
    let rankingJugadores = [
        {nombre: 'Xavi', puntuacion:800},
        {nombre: 'Maria', puntuacion:750},
        {nombre: 'Flor', puntuacion:625},
        {nombre: 'Joan', puntuacion:500},
        {nombre: 'Carla', puntuacion:350},
        {nombre: 'Jose', puntuacion: 125},
        {nombre: 'Laura', puntuacion: 100},
        {nombre: 'Carlos', puntuacion: 100},
        {nombre: 'Pablo', puntuacion: 75},
        {nombre: 'Paula', puntuacion: 50}
    ];
rankingJugadores.push(jugador);

rankingJugadores.sort(function (a, b) {
    if (a.puntuacion < b.puntuacion) {
      return 1;
    }
    if (a.puntuacion > b.puntuacion) {
      return -1;
    }
    return 0;
  });

  alert(`A continuación se muesta el ranking de los jugadores que han participado anteriormente.`)

  console.table(rankingJugadores);


nuevaPartida();
}


function nuevaPartida(){
let nuevasPartidas;
nuevasPartidas = confirm('¿Quiere empezar una nueva partida?');{
    if(nuevasPartidas){
        console.clear();

        carton = [];
        numeros = Array.from({ length: 50 }, (_, i) => i + 1);
        numerosUtilizadosX  = [];
        linea1 = 0;
        linea2 = 0;
        linea3 = 0;
        linea = false;
        turnoJugador = 0;
        jugador = { nombre: '', puntuacion:0};
        
        Jugador();
    }else{
        alert('¡Gracias por jugar con nosotros!')
    }
}
}

Jugador();








  






      

