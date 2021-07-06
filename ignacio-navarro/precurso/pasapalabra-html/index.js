//Array de jugadores, cambia en caso de superar la puntuacion.
let ranking = [
  ["Manuel", 15],
  ["Jordi", 24],
  ["Laura", 13],
  ["Maria", 25],
  ["Sergio", 4],
];

//objeto con las preguntas, respuestas, y los estados de acertado fallido etc
let definitions = [
  {
    letra: "a",
    letraPrint: "A",
    answer1: "ala",
    answer2: "alas",
    answered: false,
    correctAnswer: false,
    questions: [
      "Cada una de las partes que se extienden a los lados del cuerpo principal de un edificio.",
      "Cada uno de los órganos o apéndices pares que utilizan algunos animales para volar.",
      "Cada una de las partes que a ambos lados del avión presentan al aire una superficie plana.",
    ],
  },
  {
    letra: "b",
    letraPrint: "B",
    answer1: "borracho",
    answer2: "borracho",
    answered: false,
    correctAnswer: false,
    questions: [
      "Vivamente poseído o dominado de alguna pasión, y especialmente de la ira.",
      "Que se embriaga habitualmente",
      "ebrio, embriagado por la bebida",
    ],
  },
  {
    letra: "c",
    letraPrint: "C",
    answer1: "cuenta",
    answer2: "cuentas",
    answered: false,
    correctAnswer: false,
    questions: [
      "Cálculo u operación aritmética",
      "Depósito de dinero en una entidad financiera",
      "Cada una de las bolas ensartadas que componen el rosario",
    ],
  },
  {
    letra: "d",
    letraPrint: "D",
    answer1: "diente",
    answer2: "dientes",
    answered: false,
    correctAnswer: false,
    questions: [
      "Cada una de las puntas o resaltos que presentan algunas herramientas e instrumentos",
      "Cuerpo duro engastado en las mandíbulas del hombre y de muchos animales",
      "Pieza ósea dura y blanca que crece, junto con otras, en la boca del hombre y otros vertebrados",
    ],
  },
  {
    letra: "e",
    letraPrint: "E",
    answer1: "etiqueta",
    answer2: "etiqueta",
    answered: false,
    correctAnswer: false,
    questions: [
      "Pieza de papel, cartón u otro material semejante, que se coloca en un objeto o en una mercancía para identificación, valoración, clasificación, etc.",
      "Calificación estereotipada y simplificadora.",
      "Ceremonial de los estilos, usos y costumbres que se debe guardar en actos públicos solemnes",
    ],
  },
  {
    letra: "f",
    letraPrint: "F",
    answer1: "físico",
    answer2: "fisico",
    answered: false,
    correctAnswer: false,
    questions: [
      "Del cuerpo humano, en oposición a mental, espiritual o moral, o relacionado con él.",
      "Que concierne a la naturaleza y constitución material de un cuerpo o un objeto.",
      "Aspecto exterior que muestra una persona.",
    ],
  },
  {
    letra: "g",
    letraPrint: "G",
    answer1: "galería",
    answer2: "galeria",
    answered: false,
    correctAnswer: false,
    questions: [
      "Lugar, normalmente con salas intercomunicadas, donde se exponen obras de arte.",
      "Pieza o corredor largos y espaciosos, con muchas ventanas, o sostenidos por columnas o pilares.",
      "Cada uno de los caminos subterráneos que se excavan en las minas y se utilizan para comunicación, ventilación, desagüe y descanso.",
    ],
  },
  {
    letra: "h",
    letraPrint: "H",
    answer1: "hueco",
    answer2: "hueco",
    answered: false,
    correctAnswer: false,
    questions: [
      "Que tiene sonido retumbante y profundo.",
      "Que tiene vacío el interior.",
      "Intervalo de tiempo o lugar.",
    ],
  },
  {
    letra: "i",
    letraPrint: "I",
    answer1: "imaginación",
    answer2: "imaginacion",
    answered: false,
    correctAnswer: false,
    questions: [
      "Facultad del alma que representa las imágenes de las cosas reales o ideales.",
      "Facilidad para formar nuevas ideas, nuevos proyectos, etc.",
      "Imagen formada por la fantasía.",
    ],
  },
  {
    letra: "j",
    letraPrint: "J",
    answer1: "juicio",
    answer2: "juicio",
    answered: false,
    correctAnswer: false,
    questions: [
      "Estado de sana razón opuesto a locura o delirio.",
      "Conocimiento de una causa en la cual el juez ha de pronunciar la sentencia.",
      "Facultad por la que el ser humano puede distinguir el bien del mal y lo verdadero de lo falso.",
    ],
  },
  {
    letra: "k",
    letraPrint: "K",
    answer1: "karma",
    answer2: "karma",
    answered: false,
    correctAnswer: false,
    questions: [
      "En algunas religiones de la India, energía derivada de los actos de un individuo",
      "En algunas creencias, fuerza espiritual.",
      "Creencia según la cual toda acción tiene una fuerza dinámica que se expresa e influye en las sucesivas existencias del individuo.",
    ],
  },
  {
    letra: "l",
    letraPrint: "L",
    answer1: "lazo",
    answer2: "lazo",
    answered: false,
    correctAnswer: false,
    questions: [
      "Emblema del que forma parte una cinta doblada de manera conveniente y reglamentada.",
      "Cuerda o trenza con un nudo corredizo en uno de sus extremos, que sirve para sujetar toros, caballos",
      "Atadura o nudo de cintas o cosa semejante que sirve de adorno.",
    ],
  },
  {
    letra: "m",
    letraPrint: "M",
    answer1: "manto",
    answer2: "manto",
    answered: false,
    correctAnswer: false,
    questions: [
      "Capa que llevan algunos religiosos sobre la túnica",
      "Rica vestidura de ceremonia, insignia de príncipes soberanos y de caballeros de las órdenes militares, que se ata por encima de los hombros",
      "Vestidura, generalmente recamada, que cubre algunas imágenes de la Virgen",
    ],
  },
  {
    letra: "n",
    letraPrint: "N",
    answer1: "noticia",
    answer2: "noticia",
    answered: false,
    correctAnswer: false,
    questions: [
      "Hecho divulgado",
      "Información sobre algo que se considera interesante divulgar.",
      "Dato o información nuevos, referidos a un asunto o a una persona.",
    ],
  },
  {
    letra: "ny",
    letraPrint: "Ñ",
    answer1: "ñapas",
    answer2: "ñapa",
    answered: false,
    correctAnswer: false,
    questions: [
      "Ser un chapucero, hacer las cosas mal",
      "Persona es capaz de arreglar problemas muy variados, pero con un carácter temporal, para salir del paso",
      "Albañil poco professional",
    ],
  },
  {
    letra: "o",
    letraPrint: "O",
    answer1: "ocupar",
    answer2: "ocupar",
    answered: false,
    correctAnswer: false,
    questions: [
      "Llenar un espacio o lugar.",
      "Tomar posesión o apoderarse de un territorio, de un lugar, de un edificio",
      "Dar que hacer o en qué trabajar, especialmente en un oficio o arte.",
    ],
  },
  {
    letra: "p",
    letraPrint: "P",
    answer1: "prisma",
    answer2: "prisma",
    answered: false,
    correctAnswer: false,
    questions: [
      "Objeto triangular de cristal, que se usa para producir la reflexión, la refracción y la descomposición de la luz.",
      "Cuerpo limitado por dos polígonos planos, paralelos e iguales, que se llaman bases, y por tantos paralelogramos cuantos lados tengan dichas bases.",
      "Punto de vista, perspectiva.",
    ],
  },
  {
    letra: "q",
    letraPrint: "Q",
    answer1: "quebrar",
    answer2: "quebrar",
    answered: false,
    correctAnswer: false,
    questions: [
      "Romper, separar con violencia.",
      "Doblar o torcer.",
      "Traspasar, violar una ley u obligación.",
    ],
  },
  {
    letra: "r",
    letraPrint: "R",
    answer1: "radical",
    answer2: "radical",
    answered: false,
    correctAnswer: false,
    questions: [
      "Partidario de reformas extremas.",
      "Perteneciente o relativo a la raíz.",
      "Extremoso, tajante, intransigente.",
    ],
  },
  {
    letra: "s",
    letraPrint: "S",
    answer1: "saber",
    answer2: "saber",
    answered: false,
    correctAnswer: false,
    questions: [
      "Tener habilidad o capacidad para hacer algo.",
      "Estar instruido en algo.",
      "Tener noticia o conocimiento de algo.",
    ],
  },
  {
    letra: "t",
    letraPrint: "T",
    answer1: "talla",
    answer2: "talla",
    answered: false,
    correctAnswer: false,
    questions: [
      "Estatura o altura de las personas.",
      "Obra de escultura, especialmente en madera.",
      "Medida convencional usada en la fabricación y venta de prendas de vestir.",
    ],
  },
  {
    letra: "u",
    letraPrint: "U",
    answer1: "unión",
    answer2: "union",
    answered: false,
    correctAnswer: false,
    questions: [
      "Correspondencia y conformidad de una cosa con otra.",
      "Composición que resulta de la mezcla de algunas cosas que se incorporan entre sí.",
      "Alianza, confederación, compañía.",
    ],
  },
  {
    letra: "v",
    letraPrint: "V",
    answer1: "valor",
    answer2: "valor",
    answered: false,
    correctAnswer: false,
    questions: [
      "Grado de utilidad o aptitud de las cosas para satisfacer las necesidades o proporcionar bienestar o deleite.",
      "Cualidad de las cosas, en virtud de la cual se da por poseerlas cierta suma de dinero o equivalente.",
      "Equivalencia de una cosa a otra, especialmente hablando de las monedas.",
    ],
  },
  {
    letra: "w",
    letraPrint: "W",
    answer1: "western",
    answer2: "western",
    answered: false,
    correctAnswer: false,
    questions: [
      "Género de películas del lejano Oeste.",
      "Género cinematográfico que sitúa la acción en el marco del Oeste norteamericano durante la época de su colonización.",
      "Película del lejano Oeste.",
    ],
  },
  {
    letra: "x",
    letraPrint: "X",
    answer1: "xenón",
    answer2: "xenon",
    answered: false,
    correctAnswer: false,
    questions: [
      "Elemento químico de número atómico 54",
      "gas noble incoloro e inodoro, que está presente en la atmósfera en cantidades mínimas",
      "Gas usado en lámparas y tubos electrónicos.",
    ],
  },
  {
    letra: "y",
    letraPrint: "Y",
    answer1: "yunque",
    answer2: "yunque",
    answered: false,
    correctAnswer: false,
    questions: [
      "Prisma de hierro acerado, cuyo propósito es trabajar en él a martillo los metales",
      "Persona firme y paciente en las adversidades.",
      "Uno de los huesecillos que hay en la parte media del oído de los mamíferos",
    ],
  },
  {
    letra: "z",
    letraPrint: "Z",
    answer1: "zurcir",
    answer2: "zurcir",
    answered: false,
    correctAnswer: false,
    questions: [
      "Coser la rotura de una tela, juntando los pedazos con puntadas o pasos ordenados, de modo que la unión resulte disimulada.",
      "Suplir con puntadas muy juntas y entrecruzadas los hilos que faltan en el agujero de un tejido.",
      "Unir y juntar sutilmente una cosa con otra.",
    ],
  },
];

//elementos del DOM
let userName = document.getElementById("userName");
let wordsCount = document.getElementById("wordsCount");
let failuresCount = document.getElementById("failureCount");
let mainText = document.getElementById("pregunta");
let inputs = document.getElementById("respuesta");
let countdown = document.getElementById("time");
let pasapalabra = document.getElementById("pasapalabra");
let exit = document.getElementById("exit");
let gameOn = false;
mainText.innerText = "¿Como te llamas?";
pasapalabra.addEventListener("click", nextQ);
exit.addEventListener("click", restart);

//diferentes variables necesarias a lo largo del juego
let qIndex = 0; //index de la pregunta actual
let qForRound = 0; //por cada ronda subira para tener diferentes definiciones
let aCount = 0; //numero de preguntas respondidas, tanto falladas como no
let points = 0; //contabilizacion de puntos
let failures = 0; //contabilizacion de fallos
let timeleft = 240; //tiempo establecido para el juego
let rankingForPrint = "";
let againText = "";

// diferentes comportamientos de pulsacion de Enter dependiendo del texto mostrado en pantalla
inputs.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    if (mainText.innerText == "¿Como te llamas?") {
      usuario(definitions); //pregunta inicial para saber el nombre del jugador
    } else if (mainText.innerText == againText) {
      enterAnswer = inputs.value; //pregunta por si quiere jugar de nuevo
      again(definitions);
    } else if (mainText.innerText == "Adios, espero volver a verte") {
      //despedida
    } else {
      enterAnswer = inputs.value;
      qAndA(definitions); //inicio de ronda de preguntas
    }
  }
});

/**
 * funcion que establece el nombre de usuario
 * @param {array} definitions
 * introduce el texto de la primera pregunta
 * vacia el cuadro de texto
 * inicia el temporizador
 */
function usuario(qArray) {
  if (inputs.value.length > 0) {
    userName.innerText = inputs.value;
    inputs.value = "";
    mainText.innerText = questionString(qArray);
    gameOn = true;
    startTime();
  }
}

/**
 * vacia el cuadro de texto
 * aumenta el qIndex en 1
 * llama a la siguiente pregunta despues de chequear la respuesta
 */
function nextQ() {
  if (gameOn) {
    inputs.value = "";
    qIndex++;
    if (check(definitions)) {
      mainText.innerText = questionString(definitions);
    }
  }
}

/**
 * chequea cuantas preguntas se han respondido
 * si se han respondido todas llama a @function printRanking
 * pregunta si se quiere jugar de nuevo
 * chequea cual es el index de la pregunta
 * si hay preguntas sin responder vuelve a repasar el rosco
 * chequea si la pregunta actual ya esta respondida y la salta
 * @param {array} definitions
 */
function check(qArray) {
  if (aCount >= qArray.length) {
    printRanking();
    clearInterval(downloadTimer);
    gameOn = false;
    mainText.innerText = againText;
    return false;
  } else {
    if (qIndex >= qArray.length) {
      qIndex = 0;
    }
    if (qArray[qIndex].answered) {
      qIndex++;
      check(qArray);
    }
    return true;
  }
}

/**
 * compara los elementos del ranking
 * @param {number} ranking primer elemento
 * @param {number} ranking segundo elemento
 * @returns 0, 1, o -1 para reordenar el ranking
 */
function compare(a, b) {
  if (a[1] < b[1]) {
    return 1;
  }
  if (a[1] > b[1]) {
    return -1;
  }
  return 0;
}

/**
 * imprime el ranking en la parte central
 * reordena el ranking @function compare
 * quita el ultimo elemento del ranking
 */
function printRanking() {
  let userRanking = [userName.innerText, points];
  ranking.push(userRanking);
  ranking.sort(compare);
  ranking.pop();
  for (i = 0; i < ranking.length; i++) {
    rankingForPrint += `${i + 1}. ${ranking[i][0]}: ${ranking[i][1]} puntos\n`;
  }
  againText = `tu puntuacion ha sido de ${points} puntos, ¿Quieres jugar de Nuevo? ${rankingForPrint}`;
}

/**
 * une el texto generico de inicio, con la letra, y con la pregunta
 * @param {array} definitions
 * @returns {string} texto de la pregunta
 */
function questionString(qArray) {
  let qNow = qArray[qIndex];
  questionText = `Empieza por la "${qNow.letraPrint}": ${qNow.questions[qForRound]}`;
  return questionText;
}

/**
 * cambia el estilo CSS de la letra y le añade el de acierto
 * @param {array} definitions
 */
function paintCirclesGreen(qArray) {
  let qNow = qArray[qIndex];
  document.getElementById(qNow.letra).classList.remove("letra");
  document.getElementById(qNow.letra).classList.add("letra-acierto");
}

/**
 * cambia el estilo CSS de la letra y le añade el de fallo
 * @param {array} definitions
 */
function paintCirclesRed(qArray) {
  let qNow = qArray[qIndex];
  document.getElementById(qNow.letra).classList.remove("letra");
  document.getElementById(qNow.letra).classList.add("letra-fallo");
  return;
}

/**
 * cambia el estilo CSS de la letra y le añade el de origen
 * @param {array} definitions
 * se usa solo cuando reiniciamos el juego
 */
function paintCirclesNeutral(qArray) {
  for (let i = 0; i < qArray.length; i++) {
    document.getElementById(qArray[i].letra).classList.remove("letra-acierto");
    document.getElementById(qArray[i].letra).classList.remove("letra-fallo");
    document.getElementById(qArray[i].letra).classList.add("letra");
  }
}

/**
 * en caso de fallo nos aparecera la respuesta en grande
 * @param {string} respuesta
 */
function printRightAnswer(answer) {
  rightAnswer.innerHTML = `<div class="rightAnswer">${answer.toUpperCase()}</div>`;
  setTimeout(function eraseRightAnswer() {
    rightAnswer.innerHTML = ``;
  }, 2000);
}

/**
 * parte central y mas importante
 * si se introduce @null o @end termina el juego
 * si se introduce @pasapalabra vamos a la siguiente pregunta
 * si se introduce la respuesta correcta llamamos @function paintCirclesGreen
 * aumentamos @param aCount @param points actualizamos el DOM de points
 * si se introduce la respuesta correcta llamamos @function paintCirclesRed
 * aumentamos @param aCount actualizamos el DOM de points y lo ponemos rojo
 * @param {array} definitions
 * @returns {function} nextQ
 */
function qAndA(qArray) {
  let qNow = qArray[qIndex];

  mainText.innerText = questionString(qArray);
  if (enterAnswer === null || enterAnswer == "END") {
    restart();
  } else if (enterAnswer.toLowerCase() == "pasapalabra") {
    return nextQ();
  } else if (
    enterAnswer.toLowerCase() == qNow.answer1 ||
    enterAnswer.toLowerCase() == qNow.answer2
  ) {
    paintCirclesGreen(qArray);
    qNow.answered = true;
    qNow.correctAnswer = true;
    aCount++;
    points++;
    wordsCount.innerText = points;
    return nextQ();
  } else {
    failures++;
    failuresCount.innerText = failures;
    printRightAnswer(qNow.answer1);
    paintCirclesRed(qArray);
    qNow.answered = true;
    aCount++;
    return nextQ();
  }
}

/**
 * pregunta si queremos jugar de nuevo
 * @param {array} definitions
 * resetea todo y salta a la siguiente ronda de preguntas
 * o limpia el tiempo y se despide
 */
function again(qArray) {
  if (enterAnswer == "SI" || enterAnswer == "YES" || enterAnswer == "Y") {
    gameOn = true;
    paintCirclesNeutral(qArray);
    qForRound == 2 ? (qForRound = 0) : qForRound++;
    points = 0;
    failures = 0;
    qIndex = 0;
    aCount = 0;
    timeleft = 240;
    rankingForPrint = "";
    for (let i = 0; i < qArray.length; i++) {
      qArray[i].answered = false;
      qArray[i].correctAnswer = false;
    }
    inputs.value = "";
    mainText.innerText = questionString(qArray);
  } else if (enterAnswer == "NO" || enterAnswer == "N") {
    gameOn = false;
    clearInterval(downloadTimer);
    mainText.innerText = "Adios, espero volver a verte";
  }
}

/**
 * reloj, va bajando el timer cada segundo
 * si llega al final nos lleva a chequear el juego
 */
function counterDown() {
  if (timeleft <= 0) {
    clearInterval(downloadTimer);
    aCount = 30;
    check(definitions);
    countdown.innerHTML = 0;
  } else {
    countdown.innerHTML = timeleft;
  }
  timeleft -= 1;
}

let downloadTimer;

/**
 * inicio del temporizador
 */
function startTime() {
  downloadTimer = setInterval(counterDown, 1000);
}

/**
 * reinicio de todos los parametros.
 * @returns
 */
function restart() {
  let qArray = definitions;
  paintCirclesNeutral(definitions);
  qForRound == 2 ? (qForRound = 0) : qForRound++;
  points = 0;
  qIndex = 0;
  aCount = 0;
  rankingForPrint = "";
  clearInterval(downloadTimer);
  timeleft = 240;
  userName.innerText = "";
  mainText.innerText = "¿Como te llamas?";
  for (let i = 0; i < definitions.length; i++) {
    definitions[i].answered = false;
    definitions[i].correctAnswer = false;
  }
  inputs.value = "";
}
