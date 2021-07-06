let questions = [
  {
    letter: "a",
    answer: "angel",
    status: 0,
    question:
      "CON LA A. Piloto español y leyenda del motociclismo con un palmares de 12+1 campeonatos del mundo",
  },

  {
    letter: "b",
    answer: "burra",
    status: 0,
    question: "CON LA B. en el argot motero asi se llama a la propia moto",
  },

  {
    letter: "c",
    answer: "caldo",
    status: 0,
    question: "CON LA C.Sinonimo de Gasolina",
  },

  {
    letter: "d",
    answer: "derbi",
    status: 0,
    question:
      "CON LA D. Famosa marca española de ciclomotores cuya fabrica se uvicaba en Martorellas (Barcelona) ",
  },

  {
    letter: "e",
    answer: "enduro",
    status: 0,
    question:
      "CON LA E. pilotaje agresivo de una moto por en medio del campo o caminos inestables",
  },

  {
    letter: "f",
    answer: "franco",
    status: 0,
    question:
      "CON LA F. piloto de motociclismo Italiano, campeón mundial de Moto2 con el equipo EG 0,0 Marc VDS en 2017. Actual compañero de su mentor Valentino Rossi en motogp",
  },

  {
    letter: "g",
    answer: "giacomo",
    status: 0,
    question:
      "CON LA G. Piloto de motociclismo de velocidad con mas titulos Mundiales en la historia del motociclismo, un total de 15",
  },

  {
    letter: "h",
    answer: "hierro",
    status: 0,
    question:
      "CON LA H. motos viejas o pasadas de moda que pesan más de lo normal",
  },

  {
    letter: "i",
    answer: "invertido",
    status: 0,
    question: "CON LA I.Un caballito sobre la rueda delantera ",
  },

  {
    letter: "j",
    answer: "joey",
    status: 0,
    question:
      "CON LA J. Apodado `King of the roads` por sus innumerables victorias en circuitos de carretera, consiguió 26 triunfos en el Tourist Trophy",
  },

  {
    letter: "k",
    answer: "kawasaki",
    status: 0,
    question:
      "CON LA K. Marca Japonesa de Motocicletas que fue la primera en implementar un motor de 4 cilindros refrigerado por agua que alcanzaba los 241km/h",
  },

  {
    letter: "l",
    answer: "le mans",
    status: 0,
    question:
      "CON LA L. Carrera de resistencia de 24 horas mundialmente conocida, que tambien da nombre al tipo de salida de la misma ",
  },

  {
    letter: "m",
    answer: "motocross",
    status: 0,
    question:
      "CON LA M. Modalidad deportiva que consiste en ir dando botes por un circuito de tierra bacheado y lleno de subidas y bajadas tan bestiales que hacen sentir cómo te crujen los huesos",
  },

  {
    letter: "n",
    answer: "norton",
    status: 0,
    question:
      "CON LA N. mítica marca británica de motocicletas deportivas que se a puesto de moda en la actualidad gracias al movimiento Cafe Racer ",
  },

  {
    letter: "ñ",
    answer: "viñales",
    status: 0,
    question:
      "CONTIENE LA Ñ. Apellido del piloto catalan nacido en Roses, que reemplazo a Jorge Lorenzo en 2017 en el equipo oficial yamaha",
  },

  {
    letter: "o",
    answer: "ohlins",
    status: 0,
    question:
      "CON LA O. Empresa sueca numero uno en el sector que desarrolla sistemas de suspension para motocicletas y otros deportes de motor",
  },

  {
    letter: "p",
    answer: "pique",
    status: 0,
    question:
      "CON LA P. cuando conduces tu moto a modo carrera con otro motorista.",
  },

  {
    letter: "q",
    answer: "qualifying",
    status: 0,
    question:
      "CON LA Q. sesiones clasificatorias que determinan la posición inicial de cada piloto en una carrera de mtogp",
  },

  {
    letter: "r",
    answer: "rebufo",
    status: 0,
    question:
      "CON LA R. ir justo detrás de una moto para así librarse del viento",
  },

  {
    letter: "s",
    answer: "superbike",
    status: 0,
    question:
      "CON LA S. Tipo de motocicleta que se utiliza en competiciones de motociclismo de velocidad en las que solo se pueden modificar: suspensiones, frenos y ruedas,",
  },

  {
    letter: "t",
    answer: "tourist trophy",
    status: 0,
    question:
      "CON LA T. Tipo competición motociclística internacional que se celebra en la isla de Man, Macau, etc, sobre carreteras cerradas al tráfico. La carrera se realiza en formato contrarreloj.",
  },

  {
    letter: "u",
    answer: "mugello",
    status: 0,
    question:
      "CONTIENE LA U. Circuito propiedad de Ferrari desde 1988, la recta principal del trazado llega a los 1.141 metros, y en qual Rossi encadenó 7 victorias",
  },

  {
    letter: "v",
    answer: "valentino",
    status: 0,
    question:
      "CON LA V. Nombre del piloto italiano que tiene en su poder 9 titulos mundiales y le gusta la piza con mayonesa",
  },

  {
    letter: "w",
    answer: "bmw",
    status: 0,
    question:
      "CONTIENE LA W. Marca de coches y motos de origen aleman que se caracteriza por la utilizacion de motores boxer bicilindricos en los modelos mas emblematicos de la marca",
  },

  {
    letter: "x",
    answer: "boxes",
    status: 0,
    question:
      "CONTIENE LA X.  Zona del circuito donde se instalan los servicios mecánicos de mantenimiento y reparación de las máquinas.",
  },

  {
    letter: "y",
    answer: "yamaha",
    status: 0,
    question:
      "CON LA Y. Marca de motos japonesa conocida como la de los tres diapasones haciendo referencia a lo que simboliza la marca: melodia, armonia y ritmo",
  },

  {
    letter: "z",
    answer: "zigzaguear",
    status: 0,
    question: "CON LA Z. serpentear entre el trafico",
  },
];
let jugadores = [
  { nombre: "Anna", puntos: 55, turnos: 30 },
  { nombre: "Riki", puntos: 81, turnos: 27 },
  { nombre: "Andrea", puntos: 10, turnos: 62 },
  { nombre: "Maria", puntos: 50, turnos: 47 },
  { nombre: "José", puntos: 30, turnos: 50 },
  { nombre: "Antonio", puntos: 20, turnos: 61 },
];
let jugadoresOrdenados=[];
let counter=0;
let preguntasSegundaRonda = [];
let usuario;
let puntuacion = 0;
let endGame= false;
let welcome = () => {
  usuario = prompt(`buenos dias y bienvenido a GASALACABRA como te llamas?`);
  if (typeof usuario === "string") {
    alert(
      `${usuario} esto no es un pasapalabra normal, ¿Te consideras un auténtico motero y no se te escapa nada sobre el mundo de las dos ruedas?`
    );
    alert(
      `Entonces este juego esta hecho para ti, la dinamica es muy sencilla, el concursante debera completar un panel con las 27 letras del abecedario despues de leer su descripcion`
    );
    alert(
      `Las respuestas no distinguen entre mayusculas, minusculas o acentos,y los puntos se iran sumando a un contador para posteriormente darnos una tabla, conseguiras estar en la pole?? vamos a descubrirlo. GAS!!!`
    );
    preguntas();
  } else {
    usuario = "TROLL";
    puntuacion = 0;
    goodbye();

  }
};
let goodbye = () => {
  let estasSeguro = confirm(
    `${usuario} estas seguro que deseas avandonar el juego??`
  );
  if (estasSeguro !== true) {
    welcome();
  } else {
    alert(
      `esperamos volverte a ver pronto ${usuario} tu puntuacion en esta partida a sido de ${puntuacion} llevabas ${counter} turnos.`    );

  }
};


let preguntas = () => {
  alert(
    `Empezamos GASALACABRA. ${usuario} cada respuesta correcta sumara 3 puntos en la primera ronda y 1 punto en la segunda ronda ten cuidado en la segunda ronda ya no podras dar GASALACABRA.`
  );
  alert(
    `SI EN ALGUN MOMENTO DESEAS SALIR DEL JUEGO SOLO ESCRIBE "END" EN EL ESPACIO PARA RESPUESTAS.`
  );
  alert(
    `el boton de CANCELAR sera nuestro GASALACABRA, ya sabes ante la duda GAS!!!!`
  );

  for (i = 0; i < questions.length; i++) {
    let respuestas = prompt(questions[i].question);
      counter++;
    if (respuestas === null) {
      //cuando pasamos palabra almacenamos la pregunta para la siguiente ronda asi podremos puntuar 1 en vez de 3
      alert(`GASALACABRA`);
      questions[i].status = 1;
      preguntasSegundaRonda.push(questions[i]);
    } else if (respuestas.toLowerCase() === "end") {
      questions[i].status = 3;
      endGame=true
      break;
    } else if (respuestas.toLowerCase() !== questions[i].answer) {
      alert(
        `respuesta incorrecta, la respuesta era   !! ${questions[i].answer} !!`
      );
      puntuacion--;
      questions[i].status = 3;
    } else if (respuestas.toLowerCase() === questions[i].answer) {
      alert(`correcto, seguimos.`);
      puntuacion += 3;
      questions[i].status = 2;
    }
  }
  if(!endGame){
    segundaRonda()
  }
};
let segundaRonda = () => {
  // accedemos a la segunda vuelta del rosco donde las normas cambian y ya no se permite el pasa palabra y las puntuaciones varian un poco.
  alert(`Empezamos la segunda ronda, aqui los aciertos suman un punto y te recordamos que no tienes la opcion de dar GASALACABRA`);
  for (let i = 0; i < preguntasSegundaRonda.length; i++) {
   
    counter++;
    let respuestasSegundaRonda = prompt(preguntasSegundaRonda[i].question);
    if (respuestasSegundaRonda === null || respuestasSegundaRonda === "end") {
      endGame=true;
      preguntasSegundaRonda[i].status = 3;
      break;
    } else if (respuestasSegundaRonda.toLowerCase() !== preguntasSegundaRonda[i].answer) {
      alert(
        `respuesta incorrecta, la respuesta era   !! ${preguntasSegundaRonda[i].answer} !!`
      );
      puntuacion--;
      preguntasSegundaRonda[i].status = 3;
    } else if (respuestasSegundaRonda.toLowerCase() === preguntasSegundaRonda[i].answer) {
      alert(`correcto, seguimos.`);
      puntuacion++;
      preguntasSegundaRonda[i].status = 2;
    } else {
    }
  }
  ranking();
};
let ranking=()=>{
//hacemos recuento de puntos y turnos añadimos el usuario al resto de jugadores y hacemos la tabla de ranking
  alert(`${usuario} terminaste el juego!!! que tal divertido? vamos a ver tus puntos, lograste un total de ${puntuacion} y con ${counter} turnos.`);
  player1 =
{ nombre: usuario ,puntos:puntuacion,turnos:counter};
jugadores.push(player1);
jugadoresOrdenados = jugadores.sort((a, b) => (b.puntos) - (a.puntos));
// console.log(jugadoresOrdenados);
// alert(JSON.stringify(jugadoresOrdenados));
let rankingString= "";

for (let i = 0; i < jugadores.length; i ++){
  let user = jugadores[i]
  rankingString +=  `${user.nombre} ha obtenido ${user.puntos} puntos en ${user.turnos} turnos.
`}

alert(rankingString);
}

function pasapalabra() {
  welcome();
}
pasapalabra();
