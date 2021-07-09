// 2021 - LLuc Valério
// ************************
// Global Vars
// ************************
// DOM
let startButton = document.getElementById('startButton');
let abortButton = document.getElementById('abortButton');
let rankButton = document.getElementById('rankButton');
let circumSection = document.getElementById('circum');
let timerTag = document.getElementById('timer');
let questionText = document.getElementById('question');
let answerText = document.getElementById('answer');
let nameButton = document.getElementById('nameButton');
let ranking = document.getElementById('ranking');
let rightAnswer = document.getElementById('rightAnswer');
// Const vars
const alphabetNumLetters = 27; // Alphabet + ñ
const numQuestionsRep = 3; // Number of questions for each letter
// Status: --> 1 = answeres || 0 = pending || -1 = wrong
const questionsRepository = [ // Questions repository.
    { letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien." },
    { letter: "a", answer: "aceite", status: 0, question: "CON LA A. Líquido graso de color verde amarillento que se obtiene prensando las aceitunas." },
    { letter: "a", answer: "aragorn", status: 0, question: "CON LA A. Hijo de Arathorn, heredero del linaje de Eléndil." },
    { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso." },
    { letter: "b", answer: "buzon", status: 0, question: "CON LA B. Abertura por donde se echan las cartas por el correo." },
    { letter: "b", answer: "balrog", status: 0, question: "CON LA B. Criaturas demoníacas que fueron maiar antes de ser corrompidas por Mórgoth." },
    { letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé." },
    { letter: "c", answer: "chandal", status: 0, question: "CON LA C. Ropa deportiva que consta de un pantalón y una chaqueta o jersey amplios." },
    { letter: "c", answer: "coruscant", status: 0, question: "CON LA C. Capital durante años de la república galáctica primero y del imperio galáctico después, fue destruido por el nuevo orden." },
    { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida." },
    { letter: "d", answer: "devoto", status: 0, question: "CON LA D. Dedicado con fervor a obras de piedad y religión." },
    { letter: "d", answer: "denethor", status: 0, question: "CON LA D. Hijo de Echtélion, padre de Bóromir y Faramir." },
    { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación." },
    { letter: "e", answer: "entera", status: 0, question: "CON LA E. Se dice de la leche que conserva toda la grasa y sustancias nutritivas." },
    { letter: "e", answer: "elendil", status: 0, question: "CON LA E. Padre de Isildur y fundador del reino de Arnor, propietario de Narsil, murió combatiendo a Sauron junto a Guil-Galad." },
    { letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad." },
    { letter: "f", answer: "forestal", status: 0, question: "CON LA F. Perteneciente o relativo a los bosques y a los aprovechamientos de leñas o pastos." },
    { letter: "f", answer: "fangorn", status: 0, question: "CON LA F. Bosque situado al nord-este de Ísengard governado por Céleborn y Galadriel." },
    { letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas." },
    { letter: "g", answer: "gorigori", status: 0, question: "CON LA G. Coloquialmente canto fúnebre con el que se acompañan los entierros." },
    { letter: "g", answer: "guimli", status: 0, question: "CON LA G. Hijo de Glóin, de la casa de Durin, fue el único enano que formó parte de la comunidad del anillo fundada en Rivendell." },
    { letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento." },
    { letter: "h", answer: "hombrera", status: 0, question: "CON LA H. Adorno especial de los vestidos en la parte correspondiente a los hombros." },
    { letter: "h", answer: "hogwarts", status: 0, question: "CON LA H. Escuela de mágia y brujeria situada en algún lugar de escocia." },
    { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano." },
    { letter: "i", answer: "intuir", status: 0, question: "CON LA I. Percibir íntima e instantáneamente una idea o verdad tal como si se la tuviera a la vista." },
    { letter: "i", answer: "isengard", status: 0, question: "CON LA I. Fortaleza situada al nord-este de Rohan que estuvo en manos de Saruman el Blanco a finales de la tercera edad." },
    { letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba." },
    { letter: "j", answer: "jornada", status: 0, question: "CON LA J. Tiempo de duración del trabajo diario." },
    { letter: "j", answer: "javascript", status: 0, question: "CON LA J. Lenguaje script basado en objetos implementado originariamente por Netscape Communications Corporation." },
    { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria." },
    { letter: "k", answer: "kirk", status: 0, question: "CON LA K. Apellido de uno de los capitanes de la nave estelar U.S.S. ENTERPRISE." },
    { letter: "k", answer: "klingon", status: 0, question: "CON LA K. Raza humanoide con un fuerte sentido del honor, enemiga durante muchos años de la Federación Unida de Planetas." },
    { letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo." },
    { letter: "l", answer: "lermontov", status: 0, question: "CON LA L. Apellido del poeta ruso autor de la obra La muerte del poeta de 1837." },
    { letter: "l", answer: "legolas", status: 0, question: "CON LA L. Hijo de Thranduil, fiel amigo de Guimli y miembro de la comunidad del Anillo." },
    { letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas." },
    { letter: "m", answer: "menor", status: 0, question: "CON LA M. Se dice de una persona que no ha alcanzado la mayoría de edad." },
    { letter: "m", answer: "mithrandir", status: 0, question: "CON LA M. Maiar miembro de los Istari, se le conocia por muchos nombres, entre ellos Gandalf." },
    { letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia." },
    { letter: "n", answer: "ninfa", status: 0, question: "CON LA N. Cada una de las fabulosas deidades de las aguas, bosques o selva." },
    { letter: "n", answer: "norberto", status: 0, question: "CON LA N. Nombre con el que Hagrid bautiza al dragon nacido en su cabaña delante de Ron, harry y Hermione." },
    { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo." },
    { letter: "ñ", answer: "patraña", status: 0, question: "CONTIENE LA Ñ. Mentira o noticia fabulosa de pura invención." },
    { letter: "ñ", answer: "españa", status: 0, question: "CONTIENE LA Ñ. País de la unión europea con más paro juvenil, doblando la tasa europea, en 2021." },
    { letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien." },
    { letter: "o", answer: "ordenanza", status: 0, question: "CON LA O. Empleado que en ciertas oficinas desempeña funciones subalternas." },
    { letter: "o", answer: "oestron", status: 0, question: "CON LA O. Lengua conocida como lengua común en la tierra media." },
    { letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft." },
    { letter: "p", answer: "prioridad", status: 0, question: "CON LA P. Anterioridad de algo respecto de otra cosa en tiempo u orden." },
    { letter: "p", answer: "palantir", status: 0, question: "CON LA P. Piedra vidente traida de Numenor por Eléndil." },
    { letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche." },
    { letter: "q", answer: "branquia", status: 0, question: "CONTIENE LA Q. Órgano respiratorio de los peces formado por láminas o filamentos." },
    { letter: "q", answer: "qwerty", status: 0, question: "CON LA Q. Distribución de teclado diseñado por Christopher Sholes, la cual es la más utilizada actualmente." },
    { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor." },
    { letter: "r", answer: "renard", status: 0, question: "CON LA R. Apellido del ingeniero francés que, junto a Arthur C. Krebs, construyó el dirigible militar La France en 1884." },
    { letter: "r", answer: "rohan", status: 0, question: "CON LA R. Reino situado entre los rios Isen i Adorn con la capital en Édoras." },
    { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático." },
    { letter: "s", answer: "samba", status: 0, question: "CON LA S. Danza popular brasileña de influencia africana cantada de compás binario." },
    { letter: "s", answer: "snape", status: 0, question: "CON LA S. Apellido de, segun Harry Potter, uno de los mejores directores de Hogwarts." },
    { letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984." },
    { letter: "t", answer: "tragaperras", status: 0, question: "CON LA T. Máquina de juegos de azar que funciona introduciendo monedas." },
    { letter: "t", answer: "tolkien", status: 0, question: "CON LA T. Apellido del poeta, escritor, filologo y profesor universitario inglés autor de, entre otros, 'El Silmarillion'." },
    { letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914." },
    { letter: "u", answer: "usurpar", status: 0, question: "CON LA U. Atribuirse y usar un título o cargo ajeno como si fuera propio." },
    { letter: "u", answer: "uruk-hai", status: 0, question: "CON LA U. Subespecie de orcos aparecidos en la tercera edad, mas grandes y fuertes que los orcos." },
    { letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa." },
    { letter: "v", answer: "vivienda", status: 0, question: "CON LA V. Lugar cerrado o cubierto construido para ser habitado por personas." },
    { letter: "v", answer: "voldemort", status: 0, question: "CON LA V. El que no puede ser nombrado." },
    { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso." },
    { letter: "w", answer: "whisky", status: 0, question: "CON LA W. Bebida originaria de Irlanda y Escócia la cual proviene de la destilacion de la malta fermentada de cereales." },
    { letter: "w", answer: "weasly", status: 0, question: "CON LA W. Apellido de una familia de magos de sangre pura con 7 hijos pelirrojos, los cuales todos han ido a la residencia de Gryffindor, en Hogwarts. " },
    { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética." },
    { letter: "x", answer: "oxford", status: 0, question: "CONTIENE LA X. Ciudad inglesa cuya universidad compite cada año en una popular regata contra la universidad de Cambridge." },
    { letter: "x", answer: "x-wing", status: 0, question: "CON LA X. Modelo de caza estelar muy usado por la resistencia galáctica y, también, por Luke Skywalker." },
    { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos." },
    { letter: "y", answer: "leguleyo", status: 0, question: "CONTIENE LA Y. Persona que aplica el derecho sin rigor y desenfadadamente." },
    { letter: "y", answer: "yondu", status: 0, question: "CON LA Y. Pirata espacial, padre adoptivo de Peter Quill, se caracterizaba por controlar una fecha autopropulsada controlado a través de los silbidos." },
    { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional." },
    { letter: "z", answer: "zarandeo", status: 0, question: "CON LA Z. Movimiento repetido y violento de un lado a otro." },
    { letter: "z", answer: "zazu", status: 0, question: "CON LA Z. Leal consejero del rey Mufasa." },
];
// let vars
let gameIsOn = false; // used to control if game is on course.
let gameIsOff = false; // used to control when game is not running; used to capture 'enter' key input in controlled moments.
let rightAnswerTime = 0; // used to delay the hidding of the right answer when wrong answer occurs 
let gameTime = 240; //Start and remainig time of the game
let timeFinished = false; // Bool used to know if the game is finished because of the timer.
let clockId; // Id used for clear the clock when the game ends.
let playerName; // Player's name
let endGame; // Boolean used to know when the game has ended.
let letterIndex; // Turn memory; saves the next letter of the game.
let questions = []; // contains the questions of the game on course, generated dynamically before starting the game.
let scoring = [ // Stores names and points of the players.
    { name: `Roc`, points: 99 },
    { name: `Muriel`, points: 154 },
    { name: `Lluc`, points: 15 },
    { name: `John`, points: 87 },
    { name: `Paul`, points: 67 },
    { name: `George`, points: 23 },
    { name: `Ringo`, points: 45 },
];
// ************************
// Functions
// ************************
// Prepares the game's interface and allow player to insert his / her name.
function newUser() {
    startButton.disabled = true;
    startButton.className = 'disabled'
    abortButton.disabled = false;
    abortButton.className = 'button'
    rankButton.disabled = true;
    rankButton.className = 'disabled'
    //
    questionText.innerHTML = '¿Cual es tu nombre?'
    questionText.style.position = 'absolute';
    centerQuestionText();
    // Answer input text position
    answerText.style.visibility = "visible";
    answerText.style.position = 'absolute';
    // Start button position.
    nameButton.style.visibility = "visible";
    nameButton.style.position = 'absolute';
    // Right answer position when user's mistake occurs. 
    rightAnswer.style.visibility = "visible";
    rightAnswer.style.position = 'absolute';
    //
    insideCircleElementsPos();
    //
    answerText.focus();
    gameIsOff = true;
}
// Abort the current game, may be for time or for user interaction.
function abortGame() {
    endGame = true;
    checkGame();
}
// Resets all values and comes back the display to initial status
function resetGame() {
    if (rankButton.innerHTML === 'Ver Ranking') {
        startButton.disabled = false;
        startButton.className = 'button';
    } else {
        startButton.disabled = true;
        startButton.className = 'disabled';
    }

    abortButton.disabled = true;
    abortButton.className = 'disabled';
    rankButton.disabled = false;
    rankButton.className = 'button';
    //
    questionText.innerHTML = '';
    timerTag.innerHTML = '';
    answerText.style.visibility = "hidden";
    answerText.placeholder = 'Anónimo';
    answerText.value = '';
    nameButton.style.visibility = 'hidden';
    rightAnswer.innerHTML = '';
    //
    gameIsOn = false;
    playerName = '';
    endGame = false;
    letterIndex = '';
    questions = [];
    // 
    gameTime = 240;
    clearInterval(clockId);
    //
    for (let i = 1; i <= 27; ++i) {
        // Position of letter's circle
        document.getElementById(`lett${i}`).style.backgroundColor = '#3f77f0';
    }
}
// Shows / hide the ranking.
function showRanking() {
    if (ranking.style.visibility === 'hidden' || ranking.style.visibility === '') {
        fillRanking();
        circumSection.style.visibility = 'hidden'
        ranking.style.visibility = 'visible';
        startButton.disabled = true;
        startButton.className = 'disabled';
        abortButton.disabled = true;
        abortButton.className = 'disabled';
        rankButton.disabled = false;
        rankButton.className = 'button';
        rankButton.innerHTML = 'Ocultar Ranking'
    } else {
        ranking.style.visibility = 'hidden';
        circumSection.style.visibility = 'visible'
        startButton.disabled = false;
        startButton.className = 'button';
        abortButton.disabled = true;
        abortButton.className = 'disabled';
        rankButton.disabled = false;
        rankButton.className = 'button';
        rankButton.innerHTML = 'Ver Ranking'
    }
}
// Preapre the game (questions and interface), present game's rules,
// and starts timer and first question
function prepareGame() {
    gameIsOff = false;
    //
    playerName = answerText.value;
    if (playerName === '') {
        playerName = 'Anónimo';
    }
    answerText.value = '';
    nameButton.style.visibility = 'hidden';
    questionText.innerHTML = '';
    //
    initVars();
    getQuestions();
    //
    let rules =
        `Reglas del juego:
     · las respuestas pueden ser en mayusculas o minusculas; no se tendra en cuenta.
     · las respuestas están SIN tildes. Un tilde dará una respuesta correcta por mala.
     · la tecla ENTER validará la respuesta.
     · escribir "pasapalabra" o pulsar la tecla ESPACIO saltará de pregunta.
     · finalizar la partida NO sumará los puntos acumulados al ranking.

     · NOTA: mantener el 'foco' en el campo de texto. De lo contrario las teclas NO FUNCIONARÁN.`;
    alert(rules);
    //
    answerText.placeholder = '';
    //
    gameIsOn = true;
    startTimer();
    throwQuestion();
}
// Manage questions, asking for the right question and
// checking if there are more questions to go.
function throwQuestion() {
    let auxCount = 0
    while (((questions[letterIndex].status === 1) || (questions[letterIndex].status === -1)) && endGame === false) {
        letterIndex++;
        if (letterIndex >= alphabetNumLetters) {
            letterIndex = 0;
        }
        //
        auxCount++;
        if (auxCount === questions.length) {
            endGame = true;
        }
    }
    if (!endGame) {
        questionText.innerHTML = questions[letterIndex].question;
        document.getElementById(`lett${letterIndex + 1}`).style.backgroundColor = '#dee758';
        centerQuestionText();
    }
    answerText.focus();
}
// Checks answer on the input text updating the questions array, updates letter's color,
// and check the game's status, throwing a new question or ending the game.
function checkAnswer(answer) {
    switch (answer.toLowerCase().trim()) {
        case 'pasapalabra':
            document.getElementById(`lett${letterIndex + 1}`).style.backgroundColor = '#3f77f0';
            break;
        case questions[letterIndex].answer:
            questions[letterIndex].status = 1;
            document.getElementById(`lett${letterIndex + 1}`).style.backgroundColor = '#58e770';
            break;
        default:
            questions[letterIndex].status = -1;
            document.getElementById(`lett${letterIndex + 1}`).style.backgroundColor = '#e64a4a';
            rightAnswer.innerHTML = questions[letterIndex].answer;
            rightAnswer.style.left = `${((circumSection.clientWidth / 2) - (rightAnswer.clientWidth / 2))}px`;
            rightAnswerTime = 0;
            break;
    }
    letterIndex++;
    if (letterIndex >= alphabetNumLetters) {
        letterIndex = 0;
    }
    answerText.value = '';
    checkGame();
    if (gameIsOn) {
        throwQuestion();
    }
}
// Check the game status and call finish rutine if ended.
function checkGame() {
    // Revisamos cuantas palabras se han contestado.
    let correctAnswers = 0;
    let wrongAnswers = 0;
    questions.forEach(element => {
        if (element.status === 1) {
            correctAnswers++;
        } else if (element.status === -1) {
            wrongAnswers++;
        }
    });
    if (((correctAnswers + wrongAnswers) === questions.length) || (endGame)) {
        finishGame(wrongAnswers, correctAnswers);
        gameIsOn = false;
    }
}
// Ends the game, showing a message to the player, 
// updating ranking if necessary and making a reset for new game.
function finishGame(wrongAnswers, correctAnswers) {
    let rankingUpdated = false;
    //
    if (((wrongAnswers + correctAnswers) < 27) && !timeFinished) {
        alert(`Has acertado ${correctAnswers} preguntas.\nHas fallado ${wrongAnswers} preguntas.\nAl abandonar la partida no se contabilizaran los puntos realizados.\n`)
    } else {
        alert(`Has acertado ${correctAnswers} preguntas.\nHas fallado ${wrongAnswers} preguntas.\nPUNTUACIÓN FINAL: ${correctAnswers}.\n`)
        scoring.forEach(element => {
            if (element.name === playerName) {
                element.points = element.points + correctAnswers;
                rankingUpdated = true;
            }
        });
        if (!rankingUpdated) {
            scoring.push({ name: playerName, points: correctAnswers });
        }
        showRanking();
    }
    resetGame();
}
// Centers each question according to the text of the question.
function centerQuestionText() {
    // questionText.style.top = `${((circumSection.clientHeight / 2) - 150)}px`;
    questionText.style.top = `${((75.5 * circumSection.clientWidth) / 164)}px`;
    questionText.style.left = `${((circumSection.clientWidth / 2) - (questionText.clientWidth / 2))}px`;
}
// General purpouse function that returns a random int number
// between min (included) and max (NOT included)
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * ((max - min) + min));
}
// Generate a new group of questions from the repository.
function getQuestions() {
    questions = [...questionsRepository];
    //
    for (i = 0; i < alphabetNumLetters; i++) {
        let numQuestion = getRandomArbitrary(0, 3);
        switch (numQuestion) {
            case 2:
                questions.splice(i, 2);
                break;
            case 1:
                questions.splice(i + 2, 1);
                questions.splice(i, 1);
                break;
            case 0:
            default:
                questions.splice(i + 1, 2);
                break;
        }
    }
}
// Set global critic variables to init values
function initVars() {
    letterIndex = 0;
    endGame = false;
    questions = [];
    questionsRepository.forEach(element => {
        element.status = 0;
    });
}
// Starts timer for a new game and sets its position to the interface.
function startTimer() {
    timeFinished = false;
    timerTag.innerHTML = gameTime;
    timerTag.style.position = 'absolute';
    timerTag.style.left = `${((circumSection.clientWidth / 2) - (timerTag.clientWidth / 2))}px`;
    clockId = setInterval(timer, 1000);
}
// Checks the game's time, finishing the game if over,
// and also hiddes wrong answer corrections after 3 seconds and also
// show the remaining time.
function timer() {
    if (gameTime <= 0) {
        timeFinished = true;
        abortGame()
    } else {
        gameTime--;
        timerTag.innerHTML = gameTime;
        if (rightAnswer.innerHTML !== '') {
            rightAnswerTime++;
            if (rightAnswerTime > 3) {
                rightAnswer.innerHTML = '';
                rightAnswerTime = 0;
            }
        } else {
            rightAnswerTime = 0;
        }
    }
}
// Generate the ranking to the DOM.
function fillRanking() {
    let dinamicRank = '<thead><th>Posición</th><th>Nombre</th><th>Puntuación</th></thead>';
    scoring.sort(function (a, b) { return b.points - a.points });
    for (let i = 0; i < scoring.length; i++) {
        dinamicRank += `<tr><td>${i + 1}</td><td>${scoring[i].name}</td><td>${scoring[i].points}</td></tr>`;
    }
    // document.getElementById('rankTable').append(dinamicRank);
    document.getElementById('rankTable').innerHTML = dinamicRank;
}
// Resizes interface in relation with parent size 
function checkSize() {
    let degrees = -93;
    let radius = circumSection.clientWidth / 2;
    let offsetToParentCenter = parseInt(circumSection.offsetWidth / 2); //assumes parent is square
    // let offsetToChildCenter = 5;
    // let totalOffset = offsetToParentCenter - offsetToChildCenter;
    for (let i = 1; i <= 27; ++i) {
        // Position of letter's circle
        let letterDiv = document.getElementById(`lett${i}`);
        letterDiv.style.position = 'absolute';
        let y = Math.sin((degrees) * (Math.PI / 180)) * radius;
        let x = Math.cos((degrees) * (Math.PI / 180)) * radius;
        // letterDiv.style.top = (y + totalOffset).toString() + "px";
        letterDiv.style.top = (y + offsetToParentCenter).toString() + "px";
        // letterDiv.style.left = (x + totalOffset).toString() + "px";
        letterDiv.style.left = (x + offsetToParentCenter).toString() + "px";
        degrees += 360 / 27;
        //
        // Size letter's div
        if (circumSection.clientWidth > 400) {
            letterDiv.style.width = '40px';
            letterDiv.style.height = '40px';
            letterDiv.style.paddingTop = '10px'
        }
        if (circumSection.clientWidth <= 400 && circumSection.clientWidth > 250) {
            letterDiv.style.width = '30px';
            letterDiv.style.height = '30px';
            letterDiv.style.paddingTop = '7px'
        }
        if (circumSection.clientWidth <= 250 && circumSection.clientWidth > 170) {
            letterDiv.style.width = '20px';
            letterDiv.style.height = '20px';
            letterDiv.style.paddingTop = '5px'
        }
        if (circumSection.clientWidth <= 170) {
            letterDiv.style.width = '10px';
            letterDiv.style.height = '10px';
            letterDiv.style.paddingTop = '2px'
        }
    }
    insideCircleElementsPos();
    // Letters size according to the window width
    if (circumSection.clientWidth > 400) {
        circumSection.style.fontSize = '100%';
    }
    if (circumSection.clientWidth <= 400 && circumSection.clientWidth > 250) {
        circumSection.style.fontSize = '70%';
    }
    if (circumSection.clientWidth <= 250 && circumSection.clientWidth > 170) {
        circumSection.style.fontSize = '40%';
    }
    if (circumSection.clientWidth <= 170) {
        circumSection.style.fontSize = '30%';
    }
}
function insideCircleElementsPos() {
    // Timer position
    timerTag.style.top = `${((26.5 * circumSection.clientWidth) / 164)}px`;
    // timerTag.style.top = `${(circumSection.clientHeight / 2 - 300)}px`;
    timerTag.style.left = `${((circumSection.clientWidth / 2) - (timerTag.clientWidth / 2))}px`;
    // Question text position
    questionText.style.top = `${((75.5 * circumSection.clientWidth) / 164)}px`;
    // questionText.style.top = `${((circumSection.clientHeight / 2) - 150)}px`;
    questionText.style.left = `${((circumSection.clientWidth / 2) - (questionText.clientWidth / 2))}px`;
    // Answer input text position
    answerText.style.top = `${((100.5 * circumSection.clientWidth) / 164)}px`;
    // answerText.style.top = `${((circumSection.clientHeight / 2) - 70)}px`;
    answerText.style.left = `${((circumSection.clientWidth / 2) - (answerText.clientWidth / 2))}px`;
    // Start button position.
    nameButton.style.top = `${((125.5 * circumSection.clientWidth) / 164)}px`;
    // nameButton.style.top = `${((circumSection.clientHeight / 2) - 25)}px`;
    nameButton.style.left = `${((circumSection.clientWidth / 2) - (nameButton.clientWidth / 2))}px`;
    // Right answer position when user's mistake occurs. 
    rightAnswer.style.top = `${((135.5 * circumSection.clientWidth) / 164)}px`;
    // rightAnswer.style.top = `${((circumSection.clientHeight / 2) - 25)}px`;
    rightAnswer.style.left = `${((circumSection.clientWidth / 2) - (rightAnswer.clientWidth / 2))}px`;
}
// ************************
// Event Listeners
// ************************
// Event for answering - Enter for an answer; space for pass
answerText.addEventListener('keypress', function (event) {
    if (event.key === 'Enter' && gameIsOn) {
        checkAnswer(answerText.value);
    }
    if (event.key === 'Enter' && gameIsOff) {
        prepareGame();
    }
    if (event.key.charCodeAt() === 32 && gameIsOn) {
        checkAnswer('pasapalabra');
    }
});

// Window size event listener for display font size.
window.addEventListener("resize", checkSize);
// ************************
// DOM Starter Styling
// ************************
checkSize();
abortButton.disabled = true;
abortButton.className = 'disabled';
answerText.style.visibility = 'hidden';
nameButton.style.visibility = 'hidden';