(() => {
  Object.defineProperty(Array.prototype, "chunk", {
    value: function (n) {
      return !this.length
        ? []
        : [this.slice(0, n)].concat(this.slice(n).chunk(n));
    },
  });
})();
let jugadores = [
  {
    nombre: "Pedro",
    puntos: 100,
    intentos: 76,
  },
  {
    nombre: "Julian",
    puntos: 140,
    intentos: 58,
  },
  {
    nombre: "Andrea",
    puntos: 110,
    intentos: 62,
  },
  {
    nombre: "Maria",
    puntos: 150,
    intentos: 47,
  },
  {
    nombre: "José",
    puntos: 130,
    intentos: 83,
  },
  {
    nombre: "Antonio",
    puntos: 120,
    intentos: 41,
  },
];
let puntosPartida = 0;
let puntosRonda = 0;
let puntosBingo = 100;
let puntosNumero = 0;
let listaNumerosRandom = [];
let listaNumerosBombo = [];
let bingoCard = [];
let intentos = 0;
let linea = 0;
let linea1 = 0;
let linea2 = 0;
let linea3 = 0;
let counter = 0;
let numeroDelBombo = 0;
let user;
let finJuego = false;
let copyCard = new Array();
usuario();

function usuario() {
  //identificamos al usuario y intentamos que no nos trolee
  user = prompt(`bienvenido al bingo como te llamas?`);

  if (typeof user === "string") {
    bingo();
  } else {
   let confirmBye = confirm(`seguro que desea salir?`);
    if ((confirmBye = true)) {
      alert(
        `gracias vuelve cuando tengas ganas de jugar TROLL REVIENTA JUEGOS`
      );
    } else {
      usuario();
      console.log(`suerte in da live`)
    }
  }
}

function numerosCarton() {
  //crear un listado con numeros para que el usuario decida si son los que quiere en caso SI almacenamos en bingoCard en caso NO repetimos operacion
  for (let i = 0; i < 15; i++) {
    let numerosRandom = Math.floor(Math.random() * 90) + 1;
    if (listaNumerosRandom.includes(numerosRandom)) {
      i--;
    } else {
      listaNumerosRandom.push(numerosRandom);
    }
    if (listaNumerosRandom.length === 15) {
      let estasSeguro = confirm(
        `${user} quieres estos numeros para tu carton?${listaNumerosRandom}`
      );

      if (estasSeguro === true) {
        bingoCard = [
          {
            number: listaNumerosRandom[0],
            matched: false,
          },
          {
            number: listaNumerosRandom[1],
            matched: false,
          },
          {
            number: listaNumerosRandom[2],
            matched: false,
          },
          {
            number: listaNumerosRandom[3],
            matched: false,
          },
          {
            number: listaNumerosRandom[4],
            matched: false,
          },
          //nueva linea
          {
            number: listaNumerosRandom[5],
            matched: false,
          },
          {
            number: listaNumerosRandom[6],
            matched: false,
          },
          {
            number: listaNumerosRandom[7],
            matched: false,
          },
          {
            number: listaNumerosRandom[8],
            matched: false,
          },
          {
            number: listaNumerosRandom[9],
            matched: false,
          },
          //nueva linea
          {
            number: listaNumerosRandom[10],
            matched: false,
          },
          {
            number: listaNumerosRandom[11],
            matched: false,
          },
          {
            number: listaNumerosRandom[12],
            matched: false,
          },
          {
            number: listaNumerosRandom[13],
            matched: false,
          },
          {
            number: listaNumerosRandom[14],
            matched: false,
          },
        ];
      } else {
        listaNumerosRandom = [];
        numerosCarton();
      }
    }
  }
}

function numerosBombo() {
  // dividiremos nuestro carton en linias y empezaremos a sacar numeros aleatorios
  linea1 = bingoCard.slice(0, 5);
  linea2 = bingoCard.slice(5, 10);
  linea3 = bingoCard.slice(10, 15);
  do {
    numeroDelBombo = Math.floor(Math.random() * 90) + 1;
    if (!listaNumerosBombo.includes(numeroDelBombo)) {
      listaNumerosBombo.push(numeroDelBombo);
      preguntaTurno = confirm(
        //preguntamos a cada numero si se quiere seguir de ser asi se comparan los numeros con nuestra bingoCard
        `${user} salio el numero ${numeroDelBombo}, seguimos para bingo?`
      );
      if (preguntaTurno === true) {
        puntosRonda++;
        bingoCard.forEach((obj) => {
          if (obj.number === numeroDelBombo) {
            obj.matched = true;
            obj.number = "x";
            counter++;
            puntosNumero += 2;
          }
          copyCard = new Array();
          bingoCard.forEach((item) => copyCard.push(item.number));
          console.clear();
          console.table(copyCard.chunk(5));
        });

        if (
          linea === 0 &&
          (linea1.every((elem) => elem.matched === true) ||
            linea2.every((elem) => elem.matched === true) ||
            linea3.every((elem) => elem.matched === true))
        ) {
          linea++;
          // buscamos cuando toda una linea este completa y avisamos al usuario lo mismo cuando todos los num del carton hayan salido
          alert("¡LÍNEA!");
        } else if (bingoCard.every((elem) => elem.matched === true)) {
          alert("¡¡¡¡BINGO!!!");
          finJuego = true;
          console.log(
            `¡Enhorabuena! Has completado el cartón en ${puntosRonda} turnos.`
          );
        }
      } else {
        alert(`Gracias ${user} por jugar con nosotros`);
        break;
      }
    }
  } while (counter < 15);
}

function puntosUser() {
  // aqui calculamos la puntuacion del juego
  puntosPartida = puntosNumero + puntosBingo - puntosRonda;
  alert(`${user} tus puntos en esta partida son: ${puntosPartida}`);
}

function ranking() {
  // pasaremos los datos y puntuaciones de nuestro usuario y lo comparamos con el ranking
  player1 = {
    nombre: user,
    puntos: puntosPartida,
    intentos: puntosRonda,
  };
  jugadores.push(player1);
  let jugadoresOrdenados = jugadores.sort(
    (a, b) => a.puntuacion - b.puntuacion
  );
  console.log("RANKING:");
  console.table(jugadoresOrdenados);
}

function replay() {
  let playAgain = confirm("¿Desea volver a jugar?");
  if (playAgain === true) {
    //restablecemos valores a 0 antes de reiniciar juego
    puntosPartida = 0;
    puntosRonda = 0;
    puntosBingo = 100;
    puntosNumero = 0;
    listaNumerosRandom = [];
    listaNumerosBombo = [];
    bingoCard = [];
    intentos = 0;
    linea = 0;
    linea1 = 0;
    linea2 = 0;
    linea3 = 0;
    counter = 0;
    numeroDelBombo = 0;
    user=undefined;
    finJuego = false;
    //Se ejecuta un nuevo juego
    usuario();
  } else {
    // si no se quiere reiniciar nos despediomos
    console.log(`Gracias ${user} por jugar con nosotros`);
  }
}

function bingo() {
  //almacenamos todas nuestras funciones
  numerosCarton();
  numerosBombo();
  puntosUser();
  ranking();
  replay();
}
