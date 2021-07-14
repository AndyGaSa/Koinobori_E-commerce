/*Global variables*/
let finalUserName;
let thisCountDown;
let initialSeconds = 115;  //Total playing time in seconds.
let i = 0;  //Variable to go through the array of questions.
let pointsOfSuccess = 0;  //Variable that accumulates a hit score.
let pointsOfWrongAnswer = 0;  //Variable that accumulates error score.
let questionsForThisRound;  //Variable that contains the specific array of questions for each game round.
let questionForThisLetter;  //Variable that contains the specific question for each letter.
let answerForThisLetter;  //Variable that contains the correct answer for the letter in play.
let answerOfThePlayer;  //Variable that saves the player's response as a text string.
let resultOfThisLetterResponse;  //Varialbe that contains the result of the response evaluation.

/*Variables that contain styles for the letters if the "rosco".*/
const playingThisLetterColor = "white";
const playingThisLetterShadow = "lightpink";
const letterBackgroundSuccess = "turquoise";
const letterBackgroundWrong = "lightpink";
const letterBoxShadowSuccess = "darkgreen";
const letterBoxShadowWrong = "darkred";
const letterBackgroundPasapalabra = "#b1c5d4";
const letterBoxShadowPasapalabra = "#71879a";


/*A function is declared to get the name of the user and return the user name or the text string "Strange".*/
function saveThePlayerName() {
    let userName = document.getElementById("name").value;
    if (userName === "" || userName === /\W/) {
        return "Stranger";
    } else {
        return userName;
    };
};
/*To prevent the submit event in the form.*/
document.getElementById('placeToTheName').addEventListener('submit', function (e) {
    e.preventDefault();
}, false);
/*A function is declared to start the play when the player press the button "JUGAR", 
and invoque others functions to run the game.*/
function playToStartButton() {
    finalUserName = saveThePlayerName();
    document.getElementById("instructionsContainer").style.display = "none";
    document.getElementById("theGame").style.visibility = "visible";
    document.getElementById("myAnswer").focus();
    questionForThisRound = selectTheArrayWithQuestions();
    questionForThisLetter = questionForThisRound[0];
    showTheDefinition(questionForThisLetter);
    changeTheLetterColor(questionForThisLetter.letter, playingThisLetterColor, playingThisLetterShadow);
    countDown();
};
/*A function is declared to start the count down and change the timer background-color when the time about to end.
If the time is end, call the funcion youLose() to show game over and the ranking positions.*/
function countDown() {
    thisCountDown = setInterval(function () {
        document.getElementById("timer").innerHTML = initialSeconds;
        initialSeconds--;
        if (initialSeconds < 30) {
            document.getElementById("timer").style.backgroundColor = "orange";
        };
        if (initialSeconds < 10) {
            document.getElementById("timer").style.backgroundColor = "red";
        }
        if (initialSeconds < 1) {
            clearInterval(thisCountDown);
            youLose(finalUserName);
        }
    }, 1000);
}

/*A function is declared to return the const variable whit the questions for the present round.*/
function selectTheArrayWithQuestions() {
    const posibleQuestions = [
        [
            { letter: "a", answer: "abducir", status: 0, question: "CON LA A. <br> Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien" },
            { letter: "b", answer: "bingo", status: 0, question: "CON LA B. <br> Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso" },
            { letter: "c", answer: "churumbel", status: 0, question: "CON LA C. <br>  Niño, crío, bebé" },
            { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. <br>  Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida" },
            { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. <br>  Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación" },
            { letter: "f", answer: "facil", status: 0, question: "CON LA F. <br>  Que no requiere gran esfuerzo, capacidad o dificultad" },
            { letter: "g", answer: "galaxia", status: 0, question: "CON LA G. <br>  Conjunto enorme de estrellas, polvo interestelar, gases y partículas" },
            { letter: "h", answer: "harakiri", status: 0, question: "CON LA H. <br>  Suicidio ritual japonés por desentrañamiento" },
            { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. <br>  Templo cristiano" },
            { letter: "j", answer: "jabali", status: 0, question: "CON LA J. <br>  Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba" },
            { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. <br>  Persona que se juega la vida realizando una acción temeraria" },
            { letter: "l", answer: "licantropo", status: 0, question: "CON LA L. <br>  Hombre lobo" },
            { letter: "m", answer: "misantropo", status: 0, question: "CON LA M. <br>  Persona que huye del trato con otras personas o siente gran aversión hacia ellas" },
            { letter: "n", answer: "necedad", status: 0, question: "CON LA N. <br>  Demostración de poca inteligencia" },
            { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. <br>  Indicio que permite deducir algo de lo que no se tiene un conocimiento directo." },
            { letter: "o", answer: "orco", status: 0, question: "CON LA O. <br>  Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien" },
            { letter: "p", answer: "protoss", status: 0, question: "CON LA P. <br>  Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft" },
            { letter: "q", answer: "queso", status: 0, question: "CON LA Q. <br>  Producto obtenido por la maduración de la cuajada de la leche" },
            { letter: "r", answer: "raton", status: 0, question: "CON LA R. <br>  Roedor" },
            { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. <br>  Comunidad salvadora de todo desarrollador informático" },
            { letter: "t", answer: "terminator", status: 0, question: "CON LA T. <br>  Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984" },
            { letter: "u", answer: "unamuno", status: 0, question: "CON LA U. <br>  Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914" },
            { letter: "v", answer: "vikingos", status: 0, question: "CON LA V. <br>  Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa" },
            { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. <br>  Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso" },
            { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X.  <br> Toxina bacteriana utilizada en cirujía estética" },
            { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. <br>  Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos" },
            { letter: "z", answer: "zen", status: 0, question: "CON LA Z. <br>  Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional" },
        ],
        [
            { letter: "a", answer: "aceite", status: 0, question: "CON LA A.<br> Líquido graso de color verde amarillento que se obtiene prensando las aceitunas." },
            { letter: "b", answer: "buzon", status: 0, question: "CON LA B. <br>  Abertura por donde se echan las cartas por el correo." },
            { letter: "c", answer: "chandal", status: 0, question: "CON LA C. <br>  Ropa deportiva que consta de un pantalón y una chaqueta o jersey amplios." },
            { letter: "d", answer: "devoto", status: 0, question: "CON LA D. <br>  Dedicado con fervor a obras de piedad y religión." },
            { letter: "e", answer: "entera", status: 0, question: "CON LA E.  <br> Se dice de la leche que conserva toda la grasa y sustancias nutritivas." },
            { letter: "f", answer: "forestal", status: 0, question: "CON LA F. <br>  Perteneciente o relativo a los bosques y a los aprovechamientos de leñas o pastos." },
            { letter: "g", answer: "gorigori", status: 0, question: "CON LA G. <br>  Coloquialmente canto fúnebre con el que se acompañan los entierros." },
            { letter: "h", answer: "hombrera", status: 0, question: "CON LA H. <br>  Adorno especial de los vestidos en la parte correspondiente a los hombros." },
            { letter: "i", answer: "intuir", status: 0, question: "CON LA I.  <br> Percibir íntima e instantáneamente una idea o verdad tal como si se la tuviera a la vista." },
            { letter: "j", answer: "jornada", status: 0, question: "CON LA J.  <br> Tiempo de duración del trabajo diario." },
            { letter: "k", answer: "kilometro", status: 0, question: "CON LA K. <br>  Medida de longitud que equivale a 1000 metros." },
            { letter: "l", answer: "lermontov", status: 0, question: "CON LA L. <br>  Apellido del poeta ruso autor de la obra La muerte del poeta de 1837." },
            { letter: "m", answer: "menor", status: 0, question: "CON LA M.  <br> Se dice de una persona que no ha alcanzado la mayoría de edad." },
            { letter: "n", answer: "ninfa", status: 0, question: "CON LA N. <br>  Cada una de las fabulosas deidades de las aguas, bosques o selva." },
            { letter: "ñ", answer: "patraña", status: 0, question: "CONTIENE LA Ñ. <br>  Mentira o noticia fabulosa de pura invención." },
            { letter: "o", answer: "ordenanza", status: 0, question: "CON LA O. <br>  Empleado que en ciertas oficinas desempeña funciones subalternas." },
            { letter: "p", answer: "prioridad", status: 0, question: "CON LA P. <br>  Anterioridad de algo respecto de otra cosa en tiempo u orden." },
            { letter: "q", answer: "braquia", status: 0, question: "CONTIENE LA Q. <br>  Órgano respiratorio de los peces formado por láminas o filamentos." },
            { letter: "r", answer: "renard", status: 0, question: "CON LA R.  <br> Apellido del ingeniero francés que, junto a Arthur C. Krebs, construyó el dirigible militar La France en 1884." },
            { letter: "s", answer: "samba", status: 0, question: "CON LA S. <br>  Danza popular brasileña de influencia africana cantada de compás binario." },
            { letter: "t", answer: "tragaperras", status: 0, question: "CON LA T.  <br> Máquina de juegos de azar que funciona introduciendo monedas." },
            { letter: "u", answer: "usurpar", status: 0, question: "CON LA U.  <br> Atribuirse y usar un título o cargo ajeno como si fuera propio." },
            { letter: "v", answer: "vivienda", status: 0, question: "CON LA V. <br>  Lugar cerrado o cubierto construido para ser habitado por personas." },
            { letter: "w", answer: "waterpolo", status: 0, question: "CON LA W. <br>  Deporte de pelota que se juega en la piscina y en el que se enfrentan dos equipos." },
            { letter: "x", answer: "oxford", status: 0, question: "CONTIENE LA X. <br>  Ciudad inglesa cuya universidad compite cada año en una popular regata contra la universidad de Cambridge." },
            { letter: "y", answer: "leguleyo", status: 0, question: "CONTIENE LA Y. <br>  Persona que aplica el derecho sin rigor y desenfadadamente." },
            { letter: "z", answer: "zarandeo", status: 0, question: "CON LA Z.  <br> Movimiento repetido y violento de un lado a otro." },
        ],
        [
            { letter: "a", answer: "agenda", status: 0, question: "CON LA A.<br> Libro o cuaderno en el que se apunta para no olvidarlo aquello que se ha de hacer." },
            { letter: "b", answer: "bonanza", status: 0, question: "CON LA B. <br>  Prosperidad." },
            { letter: "c", answer: "caracol", status: 0, question: "CON LA C. <br>  Nombre del molusco gasterópodo terrestre de corte en espiral cuya carne puede comerse." },
            { letter: "d", answer: "dormir", status: 0, question: "CON LA D. <br>  Estar en aquel reposo que consiste en la inacción o suspensión de los sentidos y de todo movimiento voluntarios." },
            { letter: "e", answer: "entrecot", status: 0, question: "CON LA E. <br>  Trozo de carne sacado de entre costilla y costilla de la res." },
            { letter: "f", answer: "farhadi", status: 0, question: "CON LA F. <br>  Apellido del cineasta que dirigó la película El Viajante que obtuvo el oscar a la mejor película de habla no inglesa en 2017." },
            { letter: "g", answer: "gorgorito", status: 0, question: "CON LA G.  <br> Coloquialmente quiebro que se hace con la voz con la garganta al cantar." },
            { letter: "h", answer: "hidroavion", status: 0, question: "CON LA H. <br>  Avión que lleva en lugar de ruedas uno o cuatro flotadores para posarse sobre el agua." },
            { letter: "i", answer: "inapetencia", status: 0, question: "CON LA I. <br>  Falta de gana de comer." },
            { letter: "j", answer: "jardineria", status: 0, question: "CON LA J. <br>  Arte y oficio del jardinero." },
            { letter: "k", answer: "kiwi", status: 0, question: "CON LA K. <br>  Ave corredora nocturna de unos 50 centimetros de longitud, de pico largo y curvado." },
            { letter: "l", answer: "lobera", status: 0, question: "CON LA L. <br>  Guarida de lobos." },
            { letter: "m", answer: "mentira", status: 0, question: "CON LA M.  <br> Cosa que se utiliza por el camino que no es verdad con la intención de que sea creída." },
            { letter: "n", answer: "nativo", status: 0, question: "CON LA N.  <br> Se aplica al que ha nacido en el lugar de que se trata." },
            { letter: "ñ", answer: "ñandu", status: 0, question: "CON LA Ñ.  <br> Ave corredora similar al avestruz, pero de menor tamaño, habita en las llanuras de América del Sur." },
            { letter: "o", answer: "organo", status: 0, question: "CON LA O. <br>  Parte del animal o vegetal que ejerce una función." },
            { letter: "p", answer: "plotino", status: 0, question: "CON LA P. <br>  Filósofo romano máximo representante de la escuela neoplatónica y discípulo de Ammonio Sacas de Alejandría." },
            { letter: "q", answer: "chisquero", status: 0, question: "CON LA Q. <br>  Encendedor antiguo de bolsillo." },
            { letter: "r", answer: "rafaga", status: 0, question: "CON LA R. <br>  Viento fuerte, resentido y de corta duración." },
            { letter: "s", answer: "simple", status: 0, question: "CON LA S. <br>  Se aplica a lo que no tiene complicación." },
            { letter: "t", answer: "trece", status: 0, question: "CON LA T.  <br> Número cardinal equivalente a 10 + 3." },
            { letter: "u", answer: "uderzo", status: 0, question: "CON LA U.  <br> Apellido del dibujante y guionista francés autor de la serie Asterix." },
            { letter: "v", answer: "verde", status: 0, question: "CON LA V. <br>  Se aplica el color perfectamente al de la hierba fresca o la esmeralda." },
            { letter: "w", answer: "wifi", status: 0, question: "CON LA W.  <br> Tecnología que permite conectar diferentes equipos informaticos a través de una red inalámbrica de banda ancha." },
            { letter: "x", answer: "fenix", status: 0, question: "CONTIENE LA X. <br>  Ave fabulosa, semejante a un águila, que renacía de sus propias cenizas." },
            { letter: "y", answer: "moncayo", status: 0, question: "CONTIENE LA Y.  <br> Nombre de la montaña más alta del sistema ibérico." },
            { letter: "z", answer: "zoodiacal", status: 0, question: "CON LA Z. <br>  Perteneciente o relativo al zoodíaco." },
        ]
    ];
    let randomIndexOfQuestions = Math.floor(Math.random() * posibleQuestions.length);
    questionsForThisRound = posibleQuestions[randomIndexOfQuestions];
    return questionsForThisRound;
}
/*An event listener is declared to perform a swith and execute a specific function when some keys are pressed.*/
document.addEventListener("keyup", function (event) {
    let keyUpPressed = event.key;
    switch (keyUpPressed) {
        case "Control":
            pasapalabraButtonPressed();
            break;
        case "Enter":
            playerResponseButton();
            break;
        case "Escape":
            pleaseExitTheGameButton();
            break;
    }
});
/*To prevent the submit event in the form.*/
document.getElementById('toThePlayerAnswer').addEventListener('submit', function (e) {
    e.preventDefault();
}, false);
/*A function is declared to take the player's answer and execute the functions to evaluate the answer and move on to the next question.*/
function playerResponseButton() {
    document.getElementById("myAnswer").focus();  //Sets the cursor in the input box.
    answerForThisLetter = questionForThisLetter.answer;
    answerOfThePlayer = takeThePlayerAnswer();
    let resultOfTheLetter = matchQuestionAnswer(answerForThisLetter, answerOfThePlayer);
    showResultOfTheMatch(answerForThisLetter, resultOfTheLetter);
    nextQuestion();
    if (ifAllAreAnswered() === false) {
        changeTheLetterColor(questionForThisLetter.letter, playingThisLetterColor, playingThisLetterShadow); //Show the letter currently in play.
    } else if (absoluteSuccess(questionsForThisRound)) {
        youWin(finalUserName);
    } else {
        youLose(finalUserName);
    };
};
/*A function is declared to execute the necessary actions after the player presses the password.*/
function pasapalabraButtonPressed() {
    document.getElementById("myAnswer").focus();
    document.getElementById("myAnswer").value = "pasapalabra";
    answerForThisLetter = questionForThisLetter.answer;
    answerOfThePlayer = takeThePlayerAnswer();
    let resultOfTheLetter = matchQuestionAnswer(answerForThisLetter, answerOfThePlayer);
    showResultOfTheMatch(answerForThisLetter, resultOfTheLetter);
    nextQuestion();
    changeTheLetterColor(questionForThisLetter.letter, playingThisLetterColor, playingThisLetterShadow);
};
/*A function is declared to request confirmation if the player press the button "Salir del juego". 
And it hides the player actions button.*/
function pleaseExitTheGameButton() {
    document.getElementById("exitTheGamePlease").style.visibility = "visible";
    document.getElementById("pasapalabraButton").style.visibility = "hidden";
    document.getElementById("okButton").style.visibility = "hidden";
    document.getElementById("endThisGameButton").style.visibility = "hidden";
};
/*A function is declared to exit the game and make the reload the page when the player confirm "Salir del juego"..*/
function exitNow() {
    location.reload();
    document.getElementById("theGame").style.display = "none";
};
/*A function is declared to continue the game.
And it shows the player action buttons again.*/
function pleaseContinue() {
    document.getElementById("myAnswer").focus();
    document.getElementById("exitTheGamePlease").style.visibility = "hidden";
    document.getElementById("pasapalabraButton").style.visibility = "visible";
    document.getElementById("okButton").style.visibility = "visible";
    document.getElementById("endThisGameButton").style.visibility = "visible";
}
/*A function is declared to display the definition that corresponds to the letter currently in play.*/
function showTheDefinition(questionForThisLetter) {
    let thisIsTheDefinition = document.getElementById("showQuestion");
    thisIsTheDefinition.innerHTML = questionForThisLetter.question;
}
/*Se declara una función para guardar la respuesta del jugador sin espacios y en minúsculas.*/
function takeThePlayerAnswer() {
    let answerOfThePlayer = document.getElementById("myAnswer").value;
    answerOfThePlayer = answerOfThePlayer.trim();
    answerOfThePlayer = answerOfThePlayer.toLowerCase();
    return answerOfThePlayer;
};
/*A function with two parameters is declared: the correct answer and the player's answer, to compare both and return the result
of this evaluation.*/
function matchQuestionAnswer(answerForThisLetter, answerOfThePlayer) {
    let resultOfTheLetter;
    if (answerOfThePlayer === answerForThisLetter) {
        resultOfTheLetter = "successfullAnswer";
    } else if (answerOfThePlayer === "pasapalabra") {
        resultOfTheLetter = "pasapalabra";
    } else {
        resultOfTheLetter = "wrongAnswer";
    }
    return resultOfTheLetter
}
/*A function is declared with two parameters: the correct answer and the player's answer.
This function executes all the necessary changes after the response evaluation has been performed:*/
function showResultOfTheMatch(answerForThisLetter, resultOfTheLetter) {
    resultOfThisLetterResponse = document.getElementById("showResultToThePlayer");
    switch (resultOfTheLetter) {
        case "successfullAnswer":
            resultOfThisLetterResponse.innerHTML = "¡CORRECTO!"; //Shows the result on screen to the player.
            changeTheLetterColor(questionForThisLetter.letter, letterBackgroundSuccess, letterBoxShadowSuccess); //Change the color of the letter in the "rosco".
            questionForThisLetter.status = 1; //Change the status of the letter in the array questions.
            pointsOfSuccess = Number(document.getElementById("pointsSuccess").innerHTML) + 1;//Updates the accumulated score of errors and successes.
            document.getElementById("pointsSuccess").innerHTML = pointsOfSuccess;
            break;
        case "wrongAnswer":
            resultOfThisLetterResponse.innerHTML = (`ERROR!  <br> La respuesta correcta es: ${answerForThisLetter}.`);
            changeTheLetterColor(questionForThisLetter.letter, letterBackgroundWrong, letterBoxShadowWrong)
            questionForThisLetter.status = 2;
            document.getElementById("pointsWrongAnswer").innerHTML = Number(document.getElementById("pointsWrongAnswer").innerHTML) + 1;
            break;
        case "pasapalabra":
            resultOfThisLetterResponse.innerHTML = "PASAPALABRA";
            changeTheLetterColor(questionForThisLetter.letter, letterBackgroundPasapalabra, letterBoxShadowPasapalabra);
            questionForThisLetter.status = 3;
            break;
    };
};
/*A function is declared to change the color of the letter in the "rosco" and thus show which one is now in play (pink),
which was answered incorrectly (red) and which was answered correctly (green).*/
function changeTheLetterColor(letter, color1, color2) {
    document.getElementById(letter).style.backgroundColor = color1;
    document.getElementById(letter).style.boxShadow = "inset 0 0 1em 0.66em " + color2;
};
/*A function is declared to find the next letter that has not been answered using the state.*/
function findTheNextLetterWithoutAnswer() {
    i++;
    if (i === questionsForThisRound.length) {
        i = 0;
    }
    while (questionsForThisRound[i].status === 1 || questionsForThisRound[i].status === 2) {
        if (i === questionsForThisRound.length) {
            i = 0;
        } else {
            i++;
        }
    }
};
/*A function is declared to check whether all letters have been answered or not. And it returns a boolean.*/
function ifAllAreAnswered() {
    let allAreAnswered = true;
    for (iter = 0; iter < questionForThisRound.length; iter++) {
        if (questionsForThisRound[iter].status === 0 || questionsForThisRound[iter].status === 3) {
            allAreAnswered = false;
        }
    }
    return allAreAnswered;
};
/*A function is declared to show if there are still letters without 
answers (and find the next letter to play) or if the player has won the game.*/
function nextQuestion() {
    if (ifAllAreAnswered() === false) {
        findTheNextLetterWithoutAnswer();
        questionForThisLetter = questionsForThisRound[i];
        document.getElementById("showQuestion").innerHTML = questionForThisLetter.question;
        document.getElementById("myAnswer").value = "";
    } else {
        document.getElementById("showQuestion").innerHTML = questionForThisLetter.question;
        clearInterval(thisCountDown);
        if (ifAllAreAnswered() && absoluteSuccess(questionsForThisRound)) {
            youWin(finalUserName);
        }
    }
};
/*A function is declared to execute the necessary actions when the player has won the game.*/
function youWin(finalUserName) {
    document.getElementById("theGame").style.display = "none";
    let arrayRankingPosition = rankingOfPlayers(finalUserName, pointsOfSuccess);
    document.getElementById("endGameLikeWinner").style.visibility = "visible";
    document.getElementById("rankingWinner").innerHTML = `${finalUserName}, ésta es tu posición en el ranking del PASAPALABRA: <br> ${showTheRankingFriendly(arrayRankingPosition)}`;
};
/*A function is declared to execute the necessary actions when the player has lose the game.*/
function youLose(finalUserName) {
    document.getElementById("theGame").style.display = "none"; //Hide the play area.
    let arrayRankingPosition = rankingOfPlayers(finalUserName, pointsOfSuccess); //Invokes the function that displays the array with the sort positions.
    document.getElementById("gameOver").style.visibility = "visible"; //Shows game over and ranking.
    document.getElementById("rankingLooser").innerHTML = `<br> ${showTheRankingFriendly(arrayRankingPosition)}`;
};
/*A function is declared to check if all letters have a correct answer (or not) and return a Boolean.*/
function absoluteSuccess(questionsForThisRound) {
    let allAreSuccessfullAnswers = true;
    for (i = 0; i < questionsForThisRound.length; i++) {
        if (questionsForThisRound[i].status !== 1) {
            allAreSuccessfullAnswers = false;
        }
    }
    return allAreSuccessfullAnswers;
};
/*A function is declared to generate random numbers that represent the scores of other players and will be displayed 
in the ranking positions.*/
function toGenerateRandomPoints() {
    return Math.floor(Math.random() * (27 - 1) + 1)
}
/*A function is declared with two parameters: the username and the user points of success. This function declares 
a let variable that points to an array of objects containing finctitious players and invokes the toGenerateRandomPoints() 
function to assign random scores to them. 
Finally, it places the objects in descending order to return the array with the sort positions.*/
function rankingOfPlayers(finalUserName, pointsOfSuccess) {
    let arrayRankingPosition = [
        { name: "Aldana", points: toGenerateRandomPoints() },
        { name: "Emiliano", points: toGenerateRandomPoints() },
        { name: "Natalia", points: toGenerateRandomPoints() },
        { name: "Antonio", points: toGenerateRandomPoints() },
        { name: "Juan", points: toGenerateRandomPoints() },
        { name: "Isabel", points: toGenerateRandomPoints() },
        { name: `${finalUserName}`, points: `${pointsOfSuccess}` },
        { name: "Angel", points: toGenerateRandomPoints() },
        { name: "Estela", points: toGenerateRandomPoints() },
        { name: "Atilio", points: toGenerateRandomPoints() },
    ];
    arrayRankingPosition.sort((a, b) => b.points - a.points);
    return arrayRankingPosition;
};
/* A function is declared with the array with the sort positions as parameter to display the ranking in a friendly way.*/
function showTheRankingFriendly(arrayRankingPosition) {
    let prettyRankingPosition = "";
    for (let i = 0; i < arrayRankingPosition.length; i++) {
        prettyRankingPosition += `${arrayRankingPosition[i].name} respondió ${arrayRankingPosition[i].points} palabras correctamente.<br>`;
    }
    return prettyRankingPosition;
};


