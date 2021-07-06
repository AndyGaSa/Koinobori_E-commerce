function pasapalabra() {
    /*A function is declared to get the name of the user and return the user name or the text string "Strange" if the user does not want
        give his name*/
    function sayHi() {
        let userName = window.prompt("Hola! Vamos a jugar al Pasapalabra, ¿Cuál es tu nombre?", "Leticia");
        while (userName === null) {
            userName = window.confirm("Deseas continuar sin decirnos tu nombre?");
            if (userName) {
                return "Stranger";
            } else {
                userName = window.prompt("Escribe tu nombre:");
            }
        }
        if (userName !== "") {
            return userName;
        } else {
            return "Stranger";
        }
    }
    /*A function is declared with a parameter to welcome the user using his name. It also explains the rules of the game and the point system.*/
    function welcome(userName) {
        window.alert(`Bienvenid@ ${userName}.\r\nVamos a jugar al PASAPALABRA!\r\n\r\nDeberás acertar las 27 palabras a partir de una definicion.\r\nCada palabra corresponde a una de las letras del alfabeto.\r\nEl programa no hace distinción por mayusculas ni minusculas.\r\n\En tus respuestas NO debes usar acentos.\r\nCada acierto suma un punto.\r\n\r\nSi escribes "PASAPALABRA" pasarás a la siguiente palabra sin perder ni sumar puntos, y al finalizar la ronda, volverás a tener la oportunidad de responder por esa palabra.\r\nDispones de 3 rondas para responder.\r\n\r\nSi escribes "END" en cualquier momento del juego, verás tu puntaje de respuestas acertadas y podrás salir del juego.\r\n\r\n¡COMENCEMOS A JUGAR!`);
    }
    /*A function is declared with a parameter to say goodbye to the user with his name.*/
    function sayGoodBye(userName) {
        window.alert(`Adios ${userName}, vuelve a jugar al Pasapalabra cuando quieras!`);
    }
    /*A function is declared with the name of the user as parameter, and return the const variable whit the questions for the present round.*/
    function selectTheArrayWithQuestions(finalUserName) {
        const questionsCroacia = [
            { letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien" },
            { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso" },
            { letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé" },
            { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida" },
            { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación" },
            { letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad" },
            { letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas" },
            { letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento" },
            { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano" },
            { letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba" },
            { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria" },
            { letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo" },
            { letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas" },
            { letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia" },
            { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo." },
            { letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien" },
            { letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft" },
            { letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche" },
            { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },
            { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático" },
            { letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984" },
            { letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914" },
            { letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa" },
            { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso" },
            { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética" },
            { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos" },
            { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional" },
        ];

        const questionsGrecia = [
            { letter: "a", answer: "aceite", status: 0, question: "CON LA A. Líquido graso de color verde amarillento que se obtiene prensando las aceitunas." },
            { letter: "b", answer: "buzon", status: 0, question: "CON LA B. Abertura por donde se echan las cartas por el correo." },
            { letter: "c", answer: "chandal", status: 0, question: "CON LA C. Ropa deportiva que consta de un pantalón y una chaqueta o jersey amplios." },
            { letter: "d", answer: "devoto", status: 0, question: "CON LA D. Dedicado con fervor a obras de piedad y religión." },
            { letter: "e", answer: "entera", status: 0, question: "CON LA E. Se dice de la leche que conserva toda la grasa y sustancias nutritivas." },
            { letter: "f", answer: "forestal", status: 0, question: "CON LA F. Perteneciente o relativo a los bosques y a los aprovechamientos de leñas o pastos." },
            { letter: "g", answer: "gorigori", status: 0, question: "CON LA G. Coloquialmente canto fúnebre con el que se acompañan los entierros." },
            { letter: "h", answer: "hombrera", status: 0, question: "CON LA H. Adorno especial de los vestidos en la parte correspondiente a los hombros." },
            { letter: "i", answer: "intuir", status: 0, question: "CON LA I. Percibir íntima e instantáneamente una idea o verdad tal como si se la tuviera a la vista." },
            { letter: "j", answer: "jornada", status: 0, question: "CON LA J. Tiempo de duración del trabajo diario." },
            { letter: "k", answer: "kilometro", status: 0, question: "CON LA K. Medida de longitud que equivale a 1000 metros." },
            { letter: "l", answer: "lermontov", status: 0, question: "CON LA L. Apellido del poeta ruso autor de la obra La muerte del poeta de 1837." },
            { letter: "m", answer: "menor", status: 0, question: "CON LA M. Se dice de una persona que no ha alcanzado la mayoría de edad." },
            { letter: "n", answer: "ninfa", status: 0, question: "CON LA N. Cada una de las fabulosas deidades de las aguas, bosques o selva." },
            { letter: "ñ", answer: "patraña", status: 0, question: "CONTIENE LA Ñ. Mentira o noticia fabulosa de pura invención." },
            { letter: "o", answer: "ordenanza", status: 0, question: "CON LA O. Empleado que en ciertas oficinas desempeña funciones subalternas." },
            { letter: "p", answer: "prioridad", status: 0, question: "CON LA P. Anterioridad de algo respecto de otra cosa en tiempo u orden." },
            { letter: "q", answer: "braquia", status: 0, question: "CONTIENE LA Q. Órgano respiratorio de los peces formado por láminas o filamentos." },
            { letter: "r", answer: "renard", status: 0, question: "CON LA R. Apellido del ingeniero francés que, junto a Arthur C. Krebs, construyó el dirigible militar La France en 1884." },
            { letter: "s", answer: "samba", status: 0, question: "CON LA S. Danza popular brasileña de influencia africana cantada de compás binario." },
            { letter: "t", answer: "tragaperras", status: 0, question: "CON LA T. Máquina de juegos de azar que funciona introduciendo monedas." },
            { letter: "u", answer: "usurpar", status: 0, question: "CON LA U. Atribuirse y usar un título o cargo ajeno como si fuera propio." },
            { letter: "v", answer: "vivienda", status: 0, question: "CON LA V. Lugar cerrado o cubierto construido para ser habitado por personas." },
            { letter: "w", answer: "waterpolo", status: 0, question: "CON LA W. Deporte de pelota que se juega en la piscina y en el que se enfrentan dos equipos." },
            { letter: "x", answer: "oxford", status: 0, question: "CONTIENE LA X. Ciudad inglesa cuya universidad compite cada año en una popular regata contra la universidad de Cambridge." },
            { letter: "y", answer: "leguleyo", status: 0, question: "CONTIENE LA Y. Persona que aplica el derecho sin rigor y desenfadadamente." },
            { letter: "z", answer: "zarandeo", status: 0, question: "CON LA Z. Movimiento repetido y violento de un lado a otro." },
        ];

        const questionsItalia = [
            { letter: "a", answer: "agenda", status: 0, question: "CON LA A. Libro o cuaderno en el que se apunta para no olvidarlo aquello que se ha de hacer." },
            { letter: "b", answer: "bonanza", status: 0, question: "CON LA B. Prosperidad." },
            { letter: "c", answer: "caracol", status: 0, question: "CON LA C. Nombre del molusco gasterópodo terrestre de corte en espiral cuya carne puede comerse." },
            { letter: "d", answer: "dormir", status: 0, question: "CON LA D. Estar en aquel reposo que consiste en la inacción o suspensión de los sentidos y de todo movimiento voluntarios." },
            { letter: "e", answer: "entrecot", status: 0, question: "CON LA E. Trozo de carne sacado de entre costilla y costilla de la res." },
            { letter: "f", answer: "farhadi", status: 0, question: "CON LA F. Apellido del cineasta que dirigó la película El Viajante que obtuvo el oscar a la mejor película de habla no inglesa en 2017." },
            { letter: "g", answer: "gorgorito", status: 0, question: "CON LA G. Coloquialmente quiebro que se hace con la voz con la garganta al cantar." },
            { letter: "h", answer: "hidroavión", status: 0, question: "CON LA H. Avión que lleva en lugar de ruedas uno o cuatro flotadores para posarse sobre el agua." },
            { letter: "i", answer: "inapetencia", status: 0, question: "CON LA I. Falta de gana de comer." },
            { letter: "j", answer: "jardineria", status: 0, question: "CON LA J. Arte y oficio del jardinero." },
            { letter: "k", answer: "kiwi", status: 0, question: "CON LA K. Ave corredora nocturna de unos 50 centimetros de longitud, de pico largo y curvado." },
            { letter: "l", answer: "lobera", status: 0, question: "CON LA L. Guarida de lobos." },
            { letter: "m", answer: "mentira", status: 0, question: "CON LA M. Cosa que se utiliza por el camino que no es verdad con la intención de que sea creída." },
            { letter: "n", answer: "nativo", status: 0, question: "CON LA N. Se aplica al que ha nacido en el lugar de que se trata." },
            { letter: "ñ", answer: "ñandu", status: 0, question: "CON LA Ñ. Ave corredora similar al avestruz, pero de menor tamaño, habita en las llanuras de América del Sur." },
            { letter: "o", answer: "organo", status: 0, question: "CON LA O. Parte del animal o vegetal que ejerce una función." },
            { letter: "p", answer: "plotino", status: 0, question: "CON LA P. Filósofo romano máximo representante de la escuela neoplatónica y discípulo de Ammonio Sacas de Alejandría." },
            { letter: "q", answer: "chisquero", status: 0, question: "CON LA Q. Encendedor antiguo de bolsillo." },
            { letter: "r", answer: "rafaga", status: 0, question: "CON LA R. Viento fuerte, resentido y de corta duración." },
            { letter: "s", answer: "simple", status: 0, question: "CON LA S. Se aplica a lo que no tiene complicación." },
            { letter: "t", answer: "trece", status: 0, question: "CON LA T. Número cardinal equivalente a 10 + 3." },
            { letter: "u", answer: "uderzo", status: 0, question: "CON LA U. Apellido del dibujante y guionista francés autor de la serie Asterix." },
            { letter: "v", answer: "verde", status: 0, question: "CON LA V. Se aplica el color perfectamente al de la hierba fresca o la esmeralda." },
            { letter: "w", answer: "wifi", status: 0, question: "CON LA W. Tecnología que permite conectar diferentes equipos informaticos a través de una red inalámbrica de banda ancha." },
            { letter: "x", answer: "fenix", status: 0, question: "CONTIENE LA X. Ave fabulosa, semejante a un águila, que renacía de sus propias cenizas." },
            { letter: "y", answer: "moncayo", status: 0, question: "CONTIENE LA Y. Nombre de la montaña más alta del sistema ibérico." },
            { letter: "z", answer: "zoodiacal", status: 0, question: "CON LA Z. Perteneciente o relativo al zoodíaco." },
        ];
        let countrieOptionInexistent;
        let questionsForThisRound;
        do {
            countrieOptionInexistent = false;
            questionsForThisRound = window.prompt(`${finalUserName}, elige entre éstos países aquel que más te gustaría visitar este verano gracias a los vuelos de SkyLab Airlines:\r\n\r\nCROACIA\r\n\r\nGRECIA\r\n\r\nITALIA\r\n\r\nEscribe su nombre aquí:`, "Croacia");
            if (questionsForThisRound !== null) {
                questionsForThisRound = questionsForThisRound.trim();
                questionsForThisRound = questionsForThisRound.toLowerCase();
            }
            switch (questionsForThisRound) {
                case "croacia":
                    questionsForThisRound = questionsCroacia;
                    break;
                case "grecia":
                    questionsForThisRound = questionsGrecia;
                    break;
                case "italia":
                    questionsForThisRound = questionsItalia;
                    break;
                case null:
                case "end":
                    questionsForThisRound = null;
                    break;
                default:
                    window.alert(`${finalUserName}, debes elegir uno de estos paises:\r\n\r\nCROACIA, GRECIA o ITALIA\r\n\r\nY sólo uno!`)
                    countrieOptionInexistent = true;
            }
        } while (countrieOptionInexistent);
        return questionsForThisRound;
    }
    /*A function is declared to show the definition of the letter in the play round, and return the answer of the player without spaces 
    and in lower case. If the user press "Cancel", the answer will be null.*/
    function showTheDefinition(questionForThisLetter) {
        let answerOfThePlayer = window.prompt(questionForThisLetter);
        if (answerOfThePlayer !== null) {
            answerOfThePlayer.trim();
            answerOfThePlayer.toLowerCase();
        }
        return answerOfThePlayer
    };
    /*A function is declared to show the correct answer to the player when his answer was wrong.*/
    function showCorrectAnswerFriendly(finalUserName, questionForThisLetter, answerForThisLetter) {
        return window.alert(`${finalUserName};\r\n\r\n${questionForThisLetter}\r\nla respuesta correcta es\r\n\r\n${answerForThisLetter}.`)
    }

    /*A function is declared with two parameters: the correct ansewr and the answer of the player, to compare both and return the result 
    of this chek.*/
    function matchQuestionAnswer(answerForThisLetter, answerOfThePlayer) {
        let resultOfTheLetter;
        if (answerOfThePlayer === answerForThisLetter) {
            resultOfTheLetter = "successfullAnswer";
        } else if (answerOfThePlayer === "pasapalabra") {
            resultOfTheLetter = "pasapalabra";
        } else if (answerOfThePlayer === "end") {
            resultOfTheLetter = null;
        } else {
            resultOfTheLetter = "wrongAnswer";
        }
        return resultOfTheLetter
    }
    /*A function is declared  whit four parameters, and show the result of the check to the player using window.alert.*/
    function showResultOfTheMatch(finalUserName, questionForThisLetter, answerForThisLetter, resultOfTheLetter) {
        switch (resultOfTheLetter) {
            case "successfullAnswer":
                window.alert(`CORRECTO!`);
                break;
            case "wrongAnswer":
                showCorrectAnswerFriendly(finalUserName, questionForThisLetter, answerForThisLetter);
                break;
            case "pasapalabra":
                window.alert(`Has pedido "PASAPALABRA"`);
                break;
            case null:
                break;

        };
    }
    /*A function is declared with two parameters: the definition of the letter and the result of the check. 
    This function change the statuss of the letter and return the object modifyed.*/
    function changeTheStatus(forThisLetter, resultOfTheLetter) {
        if (resultOfTheLetter === "successfullAnswer") {
            forThisLetter.status = 1;
        } else if (resultOfTheLetter === "wrongAnswer") {
            forThisLetter.status = 2;
        } else if (resultOfTheLetter === "pasapalabra") {
            forThisLetter.status = 3;
        };
        return forThisLetter;
    }
    /*A function is declared to chek the statuss of each letter. If the statuss is 1, means success. 
    The function return the number of letters with success.*/
    function thePointsOfSuccess(questionsForThisRound) {
        let pointsOfSuccess = 0;
        for (let i = 0; i < questionsForThisRound.length; i++) {
            if (questionsForThisRound[i].status === 1) {
                pointsOfSuccess += 1;
            }
        }
        return pointsOfSuccess;
    }
    /*A function is declared to chek the statuss of each letter. If the statuss is 2, means wrong answer. 
    The function return the number of letters with wrong answers.*/
    function thePointsOfWrongAnswer(questionsForThisRound) {
        let pointsOfWrongAnswer = 0;
        for (let i = 0; i < questionsForThisRound.length; i++) {
            if (questionsForThisRound[i].status === 2) {
                pointsOfWrongAnswer += 1;
            }
        }
        return pointsOfWrongAnswer;
    }
    /*A function is declared to generate random numbers that represent the scores of other players and will be displayed in the ranking positions.*/
    function toGenerateRandomPoints() {
        return Math.floor(Math.random() * (27 - 1) + 1)
    }
    /*A function is declared with two parameters: the username and the user points of success. This function declares a let variable that 
    points to an array of objects containing finctitious players and invokes the toGenerateRandomPoints() function to assign random scores 
    to them. Finally, it places the objects in descending order to return the array with the sort positions.*/
    function rankingOfPlayers(finalUserName, successPoints) {
        let arrayRankingPosition = [
            { name: "Aldana", points: toGenerateRandomPoints() },
            { name: "Emiliano", points: toGenerateRandomPoints() },
            { name: "Natalia", points: toGenerateRandomPoints() },
            { name: "Antonio", points: toGenerateRandomPoints() },
            { name: "Juan", points: toGenerateRandomPoints() },
            { name: "Isabel", points: toGenerateRandomPoints() },
            { name: `${finalUserName}`, points: `${successPoints}` },
            { name: "Angel", points: toGenerateRandomPoints() },
            { name: "Estela", points: toGenerateRandomPoints() },
            { name: "Atilio", points: toGenerateRandomPoints() },
        ];
        arrayRankingPosition.sort((a, b) => b.points - a.points);
        return arrayRankingPosition;
    }
    /* A function is declared with the array with the sort positions as parameter. The responsibility of this function is to 
    display the ranking in a friendly way using window.alert.*/
    function showTheRankingFriendly(finalUserName, arrayRankingPosition) {
        let prettyRankingPosition = [];
        for (let i = 0; i < arrayRankingPosition.length; i++) {
            prettyRankingPosition.push(`\r\n${arrayRankingPosition[i].name} respondió ${arrayRankingPosition[i].points} palabras correctamente.`);
        }
        window.alert(`${finalUserName}, ésta es tu posición en el ranking del PASAPALABRA:\r\n${prettyRankingPosition}`);
    }
    /* The next three function use the previus functions to play the game.*/
    /*A function is declared to start the play. First, the player choise one of the array with questions to play with this one all the game.
    Three rounds are availables, and the player can get out of the game when he want, pressing "cancel" or writing "end" in the placeholder of 
    the window.prompt.
    If the player dont finish the game, the function show the number of correct answers but not the ranking. 
    Else the user can see the results and the ranking.*/
    function playPasapalabra(finalUserName) {
        let questionsForThisRound = selectTheArrayWithQuestions(finalUserName);
        let arrayQuestionContinueOrNot;
        let continueTheGame;
        if (questionsForThisRound === null) {
            window.alert(`${finalUserName}, vas a salir del juego.`);
            sayGoodBye(finalUserName);
        } else {
            let rounds = 1;
            let success = 0;
            let fails = 0;
            do {
                arrayQuestionContinueOrNot = playTheRound(questionsForThisRound, finalUserName);
                continueTheGame = arrayQuestionContinueOrNot[1];
                if (continueTheGame) {
                    questionsForThisRound = arrayQuestionContinueOrNot[0];
                    rounds += 1;
                }
            } while (rounds <= 3 && continueTheGame);
            success += thePointsOfSuccess(questionsForThisRound);
            fails += thePointsOfWrongAnswer(questionsForThisRound);
            if (continueTheGame) {
                window.alert(`${finalUserName}, has respondido de forma equivocada a:\r\n\r\n${fails} palabras.`);
                window.alert(`${finalUserName}, has respondido de CORRECTAMENTE a:\r\n\r\n${success} palabras.`);
                arrayRankingPosition = rankingOfPlayers(finalUserName, success);
                showTheRankingFriendly(finalUserName, arrayRankingPosition);
            } else {
                window.alert(`${finalUserName}, vas a salir del juego.\r\n\r\nHas respondido CORRECTAMENTE a:\r\n\r\n${success} palabras.`);
                sayGoodBye(finalUserName);
            }
        }
    }
    /*A function is declared to to loop through the array and show only the answers whit statuss 0 (not answered yet) or 3 (pasapalabra).
    After that invoques de function play the letter. Finally return the array of the questions with the changes ejecuted for the function
    play the letter.*/
    function playTheRound(questionsForThisRound, finalUserName) {
        let i = 0;
        let continueTheGame = true;
        do {
            if (questionsForThisRound[i].status === 1 || questionsForThisRound[i].status === 2) {
                i++;
            } else {
                let letterResult = playTheLetter(questionsForThisRound[i], finalUserName);
                if (letterResult !== null) {
                    questionsForThisRound[i] = letterResult;
                    i++;
                } else {
                    continueTheGame = false;
                }
            }
        }
        while (i < questionsForThisRound.length && continueTheGame);
        let arrayQuestionContinueOrNot = [questionsForThisRound, continueTheGame];
        return arrayQuestionContinueOrNot;
    }
    /*A function is declared to execut the play with each letter of the array. And return the object with the statuss modifyed.*/
    function playTheLetter(forThisLetter, finalUserName) {
        let answerOfThePlayer = showTheDefinition(forThisLetter.question); //Return a string.
        if (answerOfThePlayer !== (null || "end")) {
            let resultOfTheLetter = matchQuestionAnswer(forThisLetter.answer, answerOfThePlayer);  //Check the player's answer.
            changeTheStatus(forThisLetter, resultOfTheLetter); //Change the statuss on the object and return the modified array.
            showResultOfTheMatch(finalUserName, forThisLetter.question, forThisLetter.answer, resultOfTheLetter);
        } else {
            forThisLetter = null;
        }
        return forThisLetter
    }
    //Here the program start to run
    let finalUserName = sayHi();
    let startToPlay = welcome(finalUserName);
    if (startToPlay === null) {
        sayGoodBye(finalUserName);
    } else {
        do {
            playPasapalabra(finalUserName);
        }
        while (window.confirm(`¿Deseas jugar una nueva partida de PASAPALABRA?`));
    }
}
pasapalabra();

