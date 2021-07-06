const allQuestions = [
    {letter: "a", answer: "abducir", status: 0,question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},
    {letter: "b", answer: "bingo", status: 0,question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},
    {letter: "c", answer: "churumbel", status: 0,question: "CON LA C. Niño, crío, bebé"},
    {letter: "d", answer: "diarrea", status: 0,question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},
    {letter: "e", answer: "ectoplasma", status: 0,question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},
    {letter: "f", answer: "facil", status: 0,question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"},
    {letter: "g", answer: "galaxia", status: 0,question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},
    {letter: "h", answer: "harakiri", status: 0,question: "CON LA H. Suicidio ritual japonés por desentrañamiento"},
    {letter: "i", answer: "iglesia", status: 0,question: "CON LA I. Templo cristiano"},
    {letter: "j", answer: "jabali", status: 0,question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},
    {letter: "k", answer: "kamikaze", status: 0,question: "CON LA K. Persona que se juega la vida realizando una acción temeraria"},
    {letter: "l", answer: "licantropo", status: 0,question: "CON LA L. Hombre lobo"},
    {letter: "m", answer: "misantropo", status: 0,question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},
    {letter: "n", answer: "necedad", status: 0,question: "CON LA N. Demostración de poca inteligencia"},
    {letter: "ñ", answer: "señal", status: 0,question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},
    {letter: "o", answer: "orco", status: 0,question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},
    {letter: "p", answer: "protoss", status: 0,question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},
    {letter: "q", answer: "queso", status: 0,question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"},
    {letter: "r", answer: "raton", status: 0,question: "CON LA R. Roedor"},
    {letter: "s", answer: "stackoverflow", status: 0,question: "CON LA S. Comunidad salvadora de todo desarrollador informático"},
    {letter: "t", answer: "terminator", status: 0,question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},
    {letter: "u", answer: "unamuno", status: 0,question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},
    {letter: "v", answer: "vikingos", status: 0,question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},
    {letter: "w", answer: "sandwich", status: 0,question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"},
    {letter: "x", answer: "botox", status: 0,question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"},
    {letter: "y", answer: "peyote", status: 0,question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"},
    {letter: "z", answer: "zen", status: 0,question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"},
    {letter: "a", answer: "armario", status: 0,question: "CON LA A. Mueble con puertas y estantes o perchas para guardar ropa y otros objectos"},
    {letter: "a", answer: "alcalde", status: 0,question: "CON LA A. Presidente del ayuntamiento y primera autoridad gubernativa en u municipio"},
    {letter: "b", answer: "botanica", status: 0,question: "CON LA B. Ciencia que trata de los vegetales"}
];
let ranking = [
    {name: "Chris", score: 26},
    {name: "Sonia", score: 25},
    {name: "Juan", score: 24},
    {name: "Petra", score: 22},
    {name: "Violeta", score: 21},
    {name: "Leonardo", score: 20},
    {name: "Maria", score: 19},
    {name: "Felix", score: 16},
    {name: "Angela", score: 15},
    {name: "Federico", score: 12}
];
let userName;
let currentGameQuestions;
let score;

function pasapalabra(){
    console.clear();
    console.log(`PASAPALABRA\n\nBienvenido!`);
    //Enseña sistema de puntuación y ranking
    console.log(`\n\nRanking:\n`);
    console.table(ranking);
    console.log(`Sistema de puntuación: 1 punto por cada palabra correcta.`);

    //Pide el nombre
    do{
        userName = prompt(`PASAPALABRA\n\nInserte el nombre de usuario:`);
    }while(typeof(userName) !== "string" || userName === "");

    //Empieza el juego
    currentGameQuestions = [];
    let asciiLetter = 97;
    let round = 1;
    score = 0;
    do{
        let closeGame = newTurn(String.fromCharCode(asciiLetter).toString(), round);

        if(closeGame)
            break;
        
        //Calcula siguiente letra
        do{
            if(asciiLetter === 110)
                asciiLetter = "ñ".charCodeAt(0);
            else if(asciiLetter === "ñ".charCodeAt(0))
                asciiLetter = 111;
            else if(asciiLetter === 122){
                asciiLetter = 97;
                round++;
            }
            else
                asciiLetter++;
        }while(round != 1 && currentGameQuestions.find(({letter}) => letter === String.fromCharCode(asciiLetter)).status !== 0);             
    }while(true);
}

function newTurn(currentLetter, round){
    //Añade a currentGameQuestions 1 pregunta de la lista de la letra que toca
    if(round === 1){
        let aux = [];
        for(let i=0; i<allQuestions.length; i++){
            if(allQuestions[i].letter === currentLetter)
                aux.push(i);
        }    
        currentGameQuestions.push(allQuestions[aux[Math.round(Math.random() * (aux.length - 1))]]);
    }
    
    console.clear();
    console.log(`PASAPALABRA\n\n`);

    //Imprime el progreso
    let allLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let correctLetters = `Letras acertadas: `;
    let failedLetters = `Letras falladas: `;
    let dueLetters = `Letras sin responder: `;
    let x = 0;
    for(let i=0; i<currentGameQuestions.length; i++){
        if(currentGameQuestions[i].status === 1)
            correctLetters += `${allLetters.splice(x,1)}, `;
        else if(currentGameQuestions[i].status === 2)
            failedLetters += `${allLetters.splice(x,1)}, `;
        else
            x++;
    }
    for(let i=0; i<allLetters.length; i++){
        dueLetters +=  `${allLetters[i]}, `;
    }
    console.log(`PROGRESO:\n\n${correctLetters}\n${failedLetters}\n${dueLetters}`);
    
    let currentObject = currentGameQuestions.find(({letter}) => letter === currentLetter);
    /*
    //Imprime la pregunta
    console.log(`PREGUNTA:\n\n${currentObject.question}`);
    */
    
    //Pide respuesta
    let answer;
    do{
        answer = prompt(`PASAPALABRA\n\n${currentObject.question}\n\nRespuesta:\n\n[PASAPALABRA]: para pasar a la siguiente letra\n[END]: para salir`);
    }while(typeof(answer) !== "string" || answer === "");

    //Mira si la respuesta es correcta/pasapalabra/salir
    /*STATUS
    0: no respondida
    1: correcta
    2:incorrecta
    */
   let endGameCheck = allLetters.length;
    switch(answer.toLowerCase()){
        case currentObject.answer:
            currentObject.status = 1;
            score++;
            endGameCheck--;
            if(score<=1) alert(`PASAPALABRA\n\n¡CORRECTO! Tienes ${score} punto.`);
            else alert(`PASAPALABRA\n\n¡CORRECTO! Tienes ${score} puntos.`);
            break;
        case "pasapalabra":
            break;
        case "end":
            endGame(false);
            return true;
        default:
            currentObject.status = 2;
            endGameCheck--;
            alert(`PASAPALABRA\n\n¡NO!\nLa respuesta correcta era ${currentObject.answer}.`);
            break;
    }

    //Acaba le juego
    if(endGameCheck === 0){
        endGame(true);
        return true;
    }

    return false;
}

function endGame(won){
    console.clear();
    console.log(`PASAPALABRA\n\nGracias por jugar ${userName}.\n\nHas conseguido ${score} puntos (${score} letras acertadas, ${27 - score} letras falladas).\n\n`);

    if(won){
        if(score >= ranking[9].score){
            ranking.pop();
            ranking.push({name: userName, score: score});
            ranking.sort(function(a,b){return b.score - a.score});
            console.log(`Has conseguido entrar en el ranking. ¡Enhorabuena!`);
        }
        else
            console.log(`No has conseguido entrar en el ranking.`);
        console.log(`\nRAKING:`);
        console.table(ranking);

        if(confirm(`¿Quieres volver a jugar?`)){
            //reinicializa status questions
            currentGameQuestions.forEach(function (ob) {
                ob.status = 0;
            });
            pasapalabra();
        }
        else
            console.log(`\n¡Hasta la próxima!`);
    }
    else
        console.log(`¡Hasta la próxima!`);
}

pasapalabra();