//
// Lluc Valério
//
// VARIABLES
// tipo constantes - se usa let en vez de const para facilitar la depuración.
const alphabetNumLetters = 27; // alfabeto + ñ
const numQuestionsRep = 3; // Número de preguntas por letra que tiene el repositorio
// Status: --> 1 = contestada || 0 = pendiente || -1 = fallada
const questionsRepository = [ // repositorio de todas las preguntas del juego.
    { letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien" },
    { letter: "a", answer: "aceite", status: 0, question: "CON LA A. Líquido graso de color verde amarillento que se obtiene prensando las aceitunas." },
    { letter: "a", answer: "aragorn", status: 0, question: "CON LA A. Hijo de Arathorn, heredero del linaje de Eléndil." },
    { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso" },
    { letter: "b", answer: "buzon", status: 0, question: "CON LA B. Abertura por donde se echan las cartas por el correo." },
    { letter: "b", answer: "balrog", status: 0, question: "CON LA B. Criaturas demoníacas que fueron maiar antes de ser corrompidas por Mórgoth." },
    { letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé" },
    { letter: "c", answer: "chandal", status: 0, question: "CON LA C. Ropa deportiva que consta de un pantalón y una chaqueta o jersey amplios." },
    { letter: "c", answer: "coruscant", status: 0, question: "CON LA C. Capital durante años de la república galáctica primero y del imperio galáctico después, fue destruido por el nuevo orden." },
    { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida" },
    { letter: "d", answer: "devoto", status: 0, question: "CON LA D. Dedicado con fervor a obras de piedad y religión." },
    { letter: "d", answer: "denethor", status: 0, question: "CON LA D. Hijo de Echtélion, padre de Bóromir y Faramir." },
    { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación" },
    { letter: "e", answer: "entera", status: 0, question: "CON LA E. Se dice de la leche que conserva toda la grasa y sustancias nutritivas." },
    { letter: "e", answer: "elendil", status: 0, question: "CON LA E. Padre de Isildur y fundador del reino de Arnor, propietario de Narsil, murió combatiendo a Sauron junto a Guil-Galad." },
    { letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad" },
    { letter: "f", answer: "forestal", status: 0, question: "CON LA F. Perteneciente o relativo a los bosques y a los aprovechamientos de leñas o pastos." },
    { letter: "f", answer: "fangorn", status: 0, question: "CON LA F. Bosque situado al nord-este de Ísengard governado por Céleborn y Galadriel." },
    { letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas" },
    { letter: "g", answer: "gorigori", status: 0, question: "CON LA G. Coloquialmente canto fúnebre con el que se acompañan los entierros." },
    { letter: "g", answer: "guimli", status: 0, question: "CON LA G. Hijo de Glóin, de la casa de Durin, fue el único enano que formó parte de la comunidad del anillo fundada en Rivendell." },
    { letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento." },
    { letter: "h", answer: "hombrera", status: 0, question: "CON LA H. Adorno especial de los vestidos en la parte correspondiente a los hombros." },
    { letter: "h", answer: "hogwarts", status: 0, question: "CON LA H. Escuela de mágia y brujeria situada en algún lugar de escocia." },
    { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano." },
    { letter: "i", answer: "intuir", status: 0, question: "CON LA I. Percibir íntima e instantáneamente una idea o verdad tal como si se la tuviera a la vista." },
    { letter: "i", answer: "isengard", status: 0, question: "CON LA I. Fortaleza situada al nord-este de Rohan que estuvo en manos de Saruman el Blanco a finales de la tercera edad." },
    { letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba" },
    { letter: "j", answer: "jornada", status: 0, question: "CON LA J. Tiempo de duración del trabajo diario." },
    { letter: "j", answer: "javascript", status: 0, question: "CON LA J. Lenguaje script basado en objetos implementado originariamente por Netscape Communications Corporation." },
    { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria" },
    { letter: "k", answer: "kirk", status: 0, question: "CON LA K. Apellido de uno de los capitanes de la nave estelar U.S.S. ENTERPRISE." },
    { letter: "k", answer: "klingon", status: 0, question: "CON LA K. Raza humanoide con un fuerte sentido del honor, enemiga durante muchos años de la Federación Unida de Planetas." },
    { letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo" },
    { letter: "l", answer: "lermontov", status: 0, question: "CON LA L. Apellido del poeta ruso autor de la obra La muerte del poeta de 1837." },
    { letter: "l", answer: "legolas", status: 0, question: "CON LA L. Hijo de Thranduil, fiel amigo de Guimli y miembro de la comunidad del Anillo." },
    { letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas" },
    { letter: "m", answer: "menor", status: 0, question: "CON LA M. Se dice de una persona que no ha alcanzado la mayoría de edad." },
    { letter: "m", answer: "mithrandir", status: 0, question: "CON LA M. Maiar miembro de los Istari, se le conocia por muchos nombres, entre ellos Gandalf." },
    { letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia" },
    { letter: "n", answer: "ninfa", status: 0, question: "CON LA N. Cada una de las fabulosas deidades de las aguas, bosques o selva." },
    { letter: "n", answer: "norberto", status: 0, question: "CON LA N. Nombre con el que Hagrid bautiza al dragon nacido en su cabaña delante de Ron, harry y Hermione." },
    { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo." },
    { letter: "ñ", answer: "patraña", status: 0, question: "CONTIENE LA Ñ. Mentira o noticia fabulosa de pura invención." },
    { letter: "ñ", answer: "españa", status: 0, question: "CONTIENE LA Ñ. País de la unión europea con más paro juvenil, doblando la tasa europea, en 2021." },
    { letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien" },
    { letter: "o", answer: "ordenanza", status: 0, question: "CON LA O. Empleado que en ciertas oficinas desempeña funciones subalternas." },
    { letter: "o", answer: "oestron", status: 0, question: "CON LA O. Lengua conocida como lengua común en la tierra media." },
    { letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft" },
    { letter: "p", answer: "prioridad", status: 0, question: "CON LA P. Anterioridad de algo respecto de otra cosa en tiempo u orden." },
    { letter: "p", answer: "palantir", status: 0, question: "CON LA P. Piedra vidente traida de Numenor por Eléndil." },
    { letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche" },
    { letter: "q", answer: "branquia", status: 0, question: "CONTIENE LA Q. Órgano respiratorio de los peces formado por láminas o filamentos." },
    { letter: "q", answer: "qwerty", status: 0, question: "CON LA Q. Distribución de teclado diseñado por Christopher Sholes, la cual es la más utilizada actualmente." },
    { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },
    { letter: "r", answer: "renard", status: 0, question: "CON LA R. Apellido del ingeniero francés que, junto a Arthur C. Krebs, construyó el dirigible militar La France en 1884." },
    { letter: "r", answer: "rohan", status: 0, question: "CON LA R. Reino situado entre los rios Isen i Adorn con la capital en Édoras." },
    { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático" },
    { letter: "s", answer: "samba", status: 0, question: "CON LA S. Danza popular brasileña de influencia africana cantada de compás binario." },
    { letter: "s", answer: "snape", status: 0, question: "CON LA S. Apellido de, segun Harry Potter, uno de los mejores directores de Hogwarts." },
    { letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984" },
    { letter: "t", answer: "tragaperras", status: 0, question: "CON LA T. Máquina de juegos de azar que funciona introduciendo monedas." },
    { letter: "t", answer: "tolkien", status: 0, question: "CON LA T. Apellido del poeta, escritor, filologo y profesor universitario inglés autor de, entre otros, 'El Silmarillion'." },
    { letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914" },
    { letter: "u", answer: "usurpar", status: 0, question: "CON LA U. Atribuirse y usar un título o cargo ajeno como si fuera propio." },
    { letter: "u", answer: "uruk-hai", status: 0, question: "CON LA U. Subespecie de orcos aparecidos en la tercera edad, mas grandes y fuertes que los orcos." },
    { letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa" },
    { letter: "v", answer: "vivienda", status: 0, question: "CON LA V. Lugar cerrado o cubierto construido para ser habitado por personas." },
    { letter: "v", answer: "voldemort", status: 0, question: "CON LA V. El que no puede ser nombrado." },
    { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso" },
    { letter: "w", answer: "whisky", status: 0, question: "CON LA W. Bebida originaria de Irlanda y Escócia la cual proviene de la destilacion de la malta fermentada de cereales." },
    { letter: "w", answer: "weasly", status: 0, question: "CON LA W. Apellido de una familia de magos de sangre pura con 7 hijos pelirrojos, los cuales todos han ido a la residencia de Gryffindor, en Hogwarts. " },
    { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética" },
    { letter: "x", answer: "oxford", status: 0, question: "CONTIENE LA X. Ciudad inglesa cuya universidad compite cada año en una popular regata contra la universidad de Cambridge." },
    { letter: "x", answer: "x-wing", status: 0, question: "CON LA X. Modelo de caza estelar muy usado por la resistencia galáctica y, también, por Luke Skywalker." },
    { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos" },
    { letter: "y", answer: "leguleyo", status: 0, question: "CONTIENE LA Y. Persona que aplica el derecho sin rigor y desenfadadamente." },
    { letter: "y", answer: "yondu", status: 0, question: "CON LA Y. Pirata espacial, padre adoptivo de Peter Quill, se caracterizaba por controlar una fecha autopropulsada controlado a través de los silbidos." },
    { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional" },
    { letter: "z", answer: "zarandeo", status: 0, question: "CON LA Z. Movimiento repetido y violento de un lado a otro." },
    { letter: "z", answer: "zazu", status: 0, question: "CON LA Z. Leal consejero del rey Mufasa." },
];
// tipo let
let playerName; // nombre del jugador
let endGame; // booleano utilizado para saber cuando ha finalizado el juego.
let letterIndex; // memoria del turno; almacena cual es la siguiente letra del juego.
let questions = []; // contiene las preguntas del juego en curso, generado dinámicamente antes de empezar la partida.
let scoring = [ // almacena nombres y puntuaciones de los jugadores
    { name: `Roc`, points: 99 },
    { name: `Muriel`, points: 154 },
    { name: `Lluc`, points: 15 },
    { name: `John`, points: 87 },
    { name: `Paul`, points: 67 },
    { name: `George`, points: 23 },
    { name: `Ringo`, points: 45 },
];
// PROGRAMA PRINCIPAL
pasapalabra();
// FUNCIONES
// Función principal del juego
function pasapalabra() {
    let stay = false;
    //
    do {
        // Pregunta el nombre del jugador - si no hay nombre finaliza el programa
        switch (getPlayerName()) {
            case true:
                initVars();
                // Generamos el rosco del juego.
                getQuestions();
                // Iniciamos el bucle del juego
                let gameIsOn = true;
                console.log(`Reglas del juego:\n · las respuestas pueden ser en mayusculas o minusculas; no se tendra en cuenta.\n · las respuestas están SIN tildes. Un tilde dará una respuesta correcta por mala.\n · escribir la palabra 'END' finaliza el juego, descartando los puntos acumulados.\n`);
                console.log(`\nEmpieza el juego!!!!!!\n`);
                do {
                    // Lanzamos la pregunta y gestionamos la respuesta
                    throwQuestion();
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
                } while (gameIsOn);
                // Preguntamos al usuario si quiere jugar otra partida o salir
                stay = yesNo(`Quieres jugar otra vez?\n Si (s)\n  No (n)`);
                break;
            case false:
            default:
                stay = false;
                break;
        }
    } while (stay);
}
// Gestion al turno de preguntas, realizando la pregunto que toca y gestionando la respuesta.
function throwQuestion() {
    while ((questions[letterIndex].status === 1) || (questions[letterIndex].status === -1)) {
        letterIndex++;
        if (letterIndex >= alphabetNumLetters) {
            letterIndex = 0;
        }
    }
    let answer = prompt(questions[letterIndex].question);
    switch (answer.toLowerCase()) {
        case 'end':
            endGame = true;
            break;
        case 'pasapalabra':
            alert(`Pasapalabra!!\n`);
            break;
        case questions[letterIndex].answer:
            questions[letterIndex].status = 1;
            alert(`Correcto!!!\nHas acertado; sumas 1 punto!!\n`);
            break;
        default:
            questions[letterIndex].status = -1;
            alert(`Error; has fallado!!\nLa respuesta era\n${questions[letterIndex].answer}\n`);
            break;
    }
    letterIndex++;
    if (letterIndex >= alphabetNumLetters) {
        letterIndex = 0;
    }
}
// Gestiona el final del juego, ya sea por abandono o por finalización, mostrando si atañe las puntuaciones.
function finishGame(wrongAnswers, correctAnswers) {
    let rankingUpdated = false;
    //
    if ((wrongAnswers + correctAnswers) < 27) {
        console.log(`Has acertado ${correctAnswers} preguntas.\nHas fallado ${wrongAnswers} preguntas.\nAl abandonar la partida no se contabilizaran los puntos realizados.\n`)
    } else {
        console.log(`Has acertado ${correctAnswers} preguntas.\nHas fallado ${wrongAnswers} preguntas.\nPUNTUACIÓN FINAL: ${correctAnswers}.\n`)
        scoring.forEach(element => {
            if (element.name === playerName) {
                element.points = element.points + correctAnswers;
                rankingUpdated = true;
            }
        });
        if (!rankingUpdated) {
            scoring.push({ name: playerName, points: correctAnswers });
        }
        console.table(scoring.sort(function (a, b) { return b.points - a.points }));
    }
}
// Generador del array de preguntas del juego en curso.
function getQuestions() {
    //*************************************************
    // provado con push  mas abajo, con slice (creo que en el airlines-pro me funcionó) y con spread operator. Me sigue variando el valor del status de
    // 'questionsRepository' cuando modifico el de 'questions'.
    // *************************************
    //questions = questionsRepository.slice();
    questions = [...questionsRepository];
    //
    for (i = 0; i < alphabetNumLetters; i++) {
        let numQuestion = getRandomArbitrary(0, 3);
        switch (numQuestion) {
            case 2:
                questions.splice(i, 2);
                break;
            case 1:
                questions.splice(i+2, 1);
                questions.splice(i, 1);
                break;
            case 0:
            default:
                questions.splice(i+1, 2);
                break;
        }
    }
    /*for (let i = 0; i < alphabetNumLetters; i++) {
        let numQuestion = getRandomArbitrary((i * (numQuestionsRep - 1)), (numQuestionsRep + (i * (numQuestionsRep - 1))));
        questions.push(questionsRepository[i + numQuestion]);
    }*/
}
// Función genérica que retorna un valor aleatorio de tipo int entre min (incluido) i max (excluido)
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * ((max - min) + min));
}
// Pregunta al usuario por su nombre i comprueba el valor recibido
function getPlayerName() {
    playerName = prompt(`Cual es tu nombre?`);
    if ((playerName === undefined) || (playerName === null)) {
        return false;
    } else {
        return true;
    }
}
// Función genérica que convierte una respuesta Si/No a un booleno.
function yesNo(question) {
    do {
        let answer = prompt(question);
        if (answer === null) {
            return false;
        } else if (answer.toLowerCase() === 's') {
            return true;
        } else if (answer.toLowerCase() === 'n') {
            return false;
        }
    } while (true)
}
// IniciSet global critic variables to init values
function initVars() {
    letterIndex = 0;
    endGame = false;
    questions = [];
    // necesario al no poder evitar la modificación de este array cuando se modifica el array 'questions'.
    questionsRepository.forEach(element => {
        element.status = 0;
    });
    //    
    console.clear();
}