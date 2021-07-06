//sonaqube  
sonar.projectKey=pasapalabra

// primer set de preguntas
let questions1 = [

    { letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},

    { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},

    { letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé"},

    { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},

    { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},

    { letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"},

    { letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},

    { letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento"},

    { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano"},

    { letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},

    { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria"},

    { letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo"},

    { letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},

    { letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia"},

    { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},

    { letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},

    { letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},

    { letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"},

    { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor"},

    { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático"},

    { letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},

    { letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},

    { letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},

    { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"},

    { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"},

    { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"},

    { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"}, ]

// segundo set de preguntas
let questions2 = [

    { letter: "a", answer: "alucard", status: 0, question: "CON LA A. Nombre del protagonista de la serie Hellsing. Anagrama de Drácula"},
        
    { letter: "b", answer: "basura", status: 0, question: "CON LA B. Sustantivo que define perfectamente las películas de Crepúsculo"},
        
    { letter: "c", answer: "catsup", status: 0, question: "CON LA C. Forma alternativa de decir ketchup, parodiada por los Simpsons"},
        
    { letter: "d", answer: "dragon", status: 0, question: "CON LA D. Ser mitológico que habitualmente tiene la capacidad de volar y escupir fuego"},
        
    { letter: "e", answer: "esternocleidomastoideo", status: 0, question: "CON LA E. Músculo robusto situado a los lados del cuello, por debajo del músculo platisma y dentro de una vaina formada por la capa de revestimiento de la fascia cervical profunda."},
        
    { letter: "f", answer: "fantastic", status: 0, question: "CON LA F. En catalán, Fanta + Palo (en inglés)"},
        
    { letter: "g", answer: "ging", status: 0, question: "CON LA G. Nombre del probablemente peor padre de la historia del anime shonen. Pista: HxH"},
        
    { letter: "h", answer: "hakai", status: 0, question: "CON LA H. Técnica destructiva usada por Lord Beerus en la serie Dragon Ball Super"},
        
    { letter: "i", answer: "imperius", status: 0, question: "CON LA I. Maldición imperdonable en las películas y novelas de Harry Potter que pone a la víctima completamente bajo el control del usuario"},
        
    { letter: "j", answer: "jabba", status: 0, question: "CON LA J. Nombre de pila del personaje físicamente más atractivo (sin duda) de las películas de Star Wars. Muy fan de Javascript"},
        
    { letter: "k", answer: "kamehameha", status: 0, question: "CON LA K. Ataque por excelencia de Son Goku"},
        
    { letter: "l", answer: "liberio", status: 0, question: "CON LA L. Ciudad fícticia de la serie Attack on Titan, localizada a las afueras de Marley y donde se encuentra la zona de internamiento de los eldianos"},
        
    { letter: "m", answer: "mikasa", status: 0, question: "CON LA M. Nombre de pila de la co-protagonista (femenina) de Attack on Titan. Pista: la frase mítica de E.T. contiene la respuesta"},
        
    { letter: "n", answer: "nen", status: 0, question: "CON LA N. Nombre genérico del poder que se usa en la serie HunterxHunter. Forma típica de referirse a otra persona en Hospitalet y en Castefa"},
        
    { letter: "ñ", answer: "mañana", status: 0, question: "CONTIENE LA Ñ. Adverbio de tiempo para el que siempre dejo las cosas"},
        
    { letter: "o", answer: "ornitorrinco", status: 0, question: "CON LA O. Especie de mamífero semiacuático, con similitudes con los patos, castores y nutrias"},
        
    { letter: "p", answer: "pepsi", status: 0, question: "CON LA P. Si tenemos 3 Pepsis y nos bebemos 1. ¿Hasta que punto quedamos refrescados? (Gag de los Simpsons)"},
        
    { letter: "q", answer: "quimera", status: 0, question: "CON LA Q. Monstruo mitológico clásico, que vomitaba llamas y tenía cabeza de león, vientre de cabra y cola de dragón"},
        
    { letter: "r", answer: "riconudo", status: 0, question: "CON LA R. Peso atómico del salchichonio. (Gag de los Simpsons)"},
        
    { letter: "s", answer: "supercalifragilisticoespialidoso", status: 0, question: "CON LA S. Expresión popularizada por la película Mary Poppins (1964) que parece usarse para indicar que todo puede ir más que bien"},
        
    { letter: "t", answer: "thanos", status: 0, question: "CON LA T. Villano de los cómics y películas de los Avengers que quiere matar a la mitad de los seres vivos del universo"},
        
    { letter: "u", answer: "uroboros", status: 0, question: "CON LA U. Cepa del virus Progenitor y otros virus, creada por Albert Wesker en los videojuegos de Resident Evil. Serpiente mitológica griega que se muerde la cola"},
        
    { letter: "v", answer: "vuvuzela", status: 0, question: "CON LA V. Especie de trompeta larga o corneta hecha de material plástico, utilizada por los aficionados para animar a sus equipos o clubes deportivos"},
        
    { letter: "w", answer: "what", status: 0, question: "CON LA W. Traducción de Nani?! (japonés) al inglés"},
        
    { letter: "x", answer: "xmen", status: 0, question: "CON LA X. Nombre del grupo de mutantes dirigido por el Doctor Charles Xavier"},
        
    { letter: "y", answer: "yaya", status: 0, question: "CON LA Y. Forma cariñosa y obligatoria de llamar a mi abuela"},
        
    { letter: "z", answer: "zeno", status: 0, question: "CON LA Z. Nombre del abuelo de Killua Zoldyck en la serie HunterxHunter"}, ]

// tercer set de preguntas
let questions3 = [

    { letter: "a", answer: "antonimo", status: 0, question: "CON LA A. Palabra que significa lo contrario de una dada"},
    
    { letter: "b", answer: "biografia", status: 0, question: "CON LA B. Contar la vida de una persona por escrito"},
    
    { letter: "c", answer: "compuglobahipermeganet", status: 0, question: "CON LA C. Empresa fícticia de la cual Homer Simpson es fundador y vice-presidente ejecutivo"},
    
    { letter: "d", answer: "diccionario", status: 0, question: "CON LA D. Libro en el que aparece el significado de las palabras por orden alfabético"},
    
    { letter: "e", answer: "estrofa", status: 0, question: "CON LA E. Grupo de versos que riman entre sí o tratan de un tema determinado"},
    
    { letter: "f", answer: "futuro", status: 0, question: "CON LA F. Tiempo verbal que indica que la acción se va a realizar"},
    
    { letter: "g", answer: "grave", status: 0, question: "CON LA G. Antónimo de leve"},
    
    { letter: "h", answer: "homofonas", status: 0, question: "CON LA H. Palabras que se pronuncian igual, pero tienen significados diferentes"},
    
    { letter: "i", answer: "ilicito", status: 0, question: "CON LA I. ¿Implícito Lisa, o ...? (gag de los Simpsons)"},
    
    { letter: "j", answer: "adjetivo", status: 0, question: "CONTIENE LA J. Que expresa cualidad o estado de los nombres a los que se refiere"},
    
    { letter: "k", answer: "ko", status: 0, question: "CON LA K. Término empleado en deportes de contacto como el boxeo para referirse a tumbar a un adversario de un golpe."},
    
    { letter: "l", answer: "liliputiense", status: 0, question: "CON LA L. Gentilício de la nación insular ficticia donde transcurre la primera parte de la novela satírica Los viajes de Gulliver, del escritor Jonathan Swift."},
    
    { letter: "m", answer: "monosilaba", status: 0, question: "CON LA M. Palabra que contiene una sola sílaba"},
    
    { letter: "n", answer: "nombre", status: 0, question: "CON LA N. Así llamamos también al sustantivo"},
    
    { letter: "ñ", answer: "añorar", status: 0, question: "CONTIENE LA Ñ. Sinónimo de extrañar, echar de menos"},
    
    { letter: "o", answer: "ortografia.", status: 0, question: "CON LA O. Conjunto de normas que regulan la escritura"},
    
    { letter: "p", answer: "polisemicas.", status: 0, question: "CON LA P. Palabras con más de un significado"},
    
    { letter: "q", answer: "enclenque", status: 0, question: "CONTIENE LA Q. Dícese de la persona débil, enfermiza, muy flaca"},
    
    { letter: "r", answer: "receptor", status: 0, question: "CON LA R. El que recibe la información"},
    
    { letter: "s", answer: "sinonimo", status: 0, question: "CON LA S. Que tiene el mismo significado"},
    
    { letter: "t", answer: "tragedia", status: 0, question: "CON LA T. Obra de teatro que tiene un desenlace desgraciado"},
    
    { letter: "u", answer: "ultimo", status: 0, question: "CON LA U. Antónimo de Primero"},
    
    { letter: "v", answer: "verso", status: 0, question: "CON LA V. Cada uno de los renglones cortos que forman una poesía"},
    
    { letter: "w", answer: "whisky", status: 0, question: "CON LA W. Bebida alcohólica"},
    
    { letter: "x", answer: "saxofon", status: 0, question: "CONTIENE LA X. Intrumento musical de viento"},
    
    { letter: "y", answer: "onomatopeya", status: 0, question: "CONTIENE LA Y. Vocablo que imita o recrea un sonido"},
    
    { letter: "z", answer: "zumbido", status: 0, question: "CON LA Z. Ruido que hacen algunos insectos como las abejas"}, ]

    /*  status = 0, significa que la pregunta no ha sido respondida aún o que el jugador a pasadopalabra
        status = 1, significa que la pregunta ha sido respondida correctamente
        status = 2, significa que la pregunta ha sido respondido incorrectamente    */

let player = {name: "", points: 0}; // let que almacena el nombre introducido por el usuario y su puntuación
let turnIterator = 0; // let usado como contador de turnos 
let gameQuestions = []; // let que almacena las preguntas que aparecerán durante el juego
let answer = ""; // let que almacena las respuestas de cada pregunta para su comprobación
let endTheGame = false; // let que verifica si el juego ha terminado o aún quedan preguntas por responder

// Array de objetos guardado en variable let con la información del ranking por defecto
let ranking = [

    {name: "Neo", points: randomNumber()},
    {name: "Vegeta", points: randomNumber()},
    {name: "Hisoka", points: randomNumber()},
    {name: "Claire Redfield", points: randomNumber()},
    {name: "Terra Brandford", points: randomNumber()},
    {name: "Eren Jaeger", points: randomNumber()},
    {name: "Sauron", points: randomNumber()},
    {name: "Kefla", points: randomNumber()},
    {name: "Biscuit Krueger", points: randomNumber()},
    {name: "Spike Spiegel", points: randomNumber()}

];

// función que genera un número aleatorio para que las puntuaciones de los jugadores NPC varien en cada partida
function randomNumber() {

    max = 27;
    min = 0;
    return  Math.floor(Math.random() * (max - min + 1)) + min;
}

// función que da la bienvenida y explica las normas del juego por consola
function welcome() {

    console.log("\nBienvenidos a Pasapalabra Skylab");
    console.log("\nEl juego consiste en acertar veintisiete palabras, una por cada letra del abecedario español");
    console.log("Por orden alfabético, se nos irán proporcionando pistas o definiciones de las respuestas y el concursante deberá acertar la respuesta o decir pasapalabra");
    console.log("Las respuestas deberán escribirse sin acentos (en caso de tenerlo) y podrán escribirse tanto en mayúscula como en minúscula");
    console.log("Si el jugador cancela o acepta sin proporcionar una respuesta antes, se considerará como respuesta incorrecta");
    console.log("Si el usuario acierta la respuesta ganará 1 punto, y si usa la palabra clave PASAPALABRA tendrá la opción de responder de nuevo una vez el turno vuelva a la misma letra");
    console.log("En caso de querer salir del juego el concursante podrá decir la palabra clave END en cualquier momento y el programa se cerrará");
    console.log("Al usar END se nos informará por consola de las respuestas acertadas pero no tendremos opción de entrar en el ranking");
    console.log("Al finalizar el rosco se mostrará el ranking con las mejores puntuaciones");
}

// función que solicita al usuario su nombre y verifica que no ha dejado el nombre en blanco. También muestra el nombre introducido y la puntuación inicial que siempre será 0.
function enterPlayerName() {

    player.name = prompt("¿Como te llamas?");

        if (player.name === "" || player.name === " ") {

            alert("Necesitamos que nos proporciones un nombre");

        return enterPlayerName();

        }   else {
  
            console.log(`\nBienvenido al rosco de Pasapalabra ${player.name}. Tu puntuación inicial es de ${player.points} puntos.\n\n¡EMPEZAMOS!`);
            ranking.push(player);

            return player;
            }
}

// función que randomiza las preguntas del juego 
function questionaryGenerator() {

    let spanishAlphabet = 27;

    let min = 1;
    let max = 3;
    let num = 0;

    for (let i = 0; i < spanishAlphabet; i++) {

        num = Math.floor(Math.random() * (max - min + 1)) + min;

        if (num === 1) {

            gameQuestions.push(questions1[i]);
        }

        if (num === 2) {

            gameQuestions.push(questions2[i]);
        }

        if (num === 3) {

            gameQuestions.push(questions3[i]);
        }
    }
return gameQuestions;
}

// función que muestra por pantalla las preguntas y verifica si las respuestas son correctas, erróneas o si el jugador ha decidido pasarpalabra o renunciar
function roscoLogic() {


        for (let i = 0; i < gameQuestions.length; i++){

            if (gameQuestions[i].status === 0 && endTheGame === false) {

                let answer = prompt(gameQuestions[i].question);

                if (answer !== null)

                    answer = answer.toLowerCase();

                    else{
                        answer = "INCORRECTO";
                    }

                    switch (answer) {

                        case gameQuestions[i].answer: 

                            alert("¡RESPUESTA CORRECTA!");
                            gameQuestions[i].status = 1;
                            turnIterator++;
                            break;

                        case "end":

                            alert("Has decidido renunciar y salir del juego. Esperamos que vuelvas a intentarlo pronto.");
                            endScore();
                            endTheGame = true;
                            playAgain();
                            break;

                        case "pasapalabra": 

                            alert("Has pasadopalabra. La siguiente pregunta es: ");
                            break;

                        default: 

                            alert("¡RESPUESTA INCORRECTA!");
                            alert(`La respuesta correcta era ${gameQuestions[i].answer}`);
                            gameQuestions[i].status = 2;
                            turnIterator++;
                            break;
                    }
        
            }
        
        } 

return gameQuestions;
}

// función que repite las preguntas que no han sido respondidas usando pasapalabra
function roscoLoop() {

    do {
        roscoLogic();
    } while (turnIterator < 27);
}

// función que recuenta los puntos obtenidos durante el juego y muestra por consola la puntuación final y las letras que fueron acertadas
function endScore() {

    let finalScore = 0;
    let lettersFromCorrectAnswers = [];
    let lettersFromWrongAnswers = [];
    let lettersFromNotAnswered = [];

    for (let i = 0; i < gameQuestions.length; i++) {

        if (gameQuestions[i].status === 0) {

            lettersFromNotAnswered.push(gameQuestions[i].letter);
        }

        if (gameQuestions[i].status === 1) {

            lettersFromCorrectAnswers.push(gameQuestions[i].letter);
            finalScore++;
        }

        if (gameQuestions[i].status === 2) {

            lettersFromWrongAnswers.push(gameQuestions[i].letter);
        }
    }

    console.log(`\nTu puntuación final es de ${finalScore} puntos.`);
    console.log(`Las letras que has acertado son: ${lettersFromCorrectAnswers}`);
    console.log(`Las letras que has fallado son: ${lettersFromWrongAnswers}`);
    console.log(`Las letras que no has respondido son: ${lettersFromNotAnswered}`);

    return finalScore;
}

// función que ordena a los jugadores del ranking por por orden de puntuación
function finalRanking(ranking) {

    let rankingPosition = ranking.sort((a,b) => b.points - a.points);
    console.log("Este es el ranking con los 10 mejores jugadores:");
    console.table(rankingPosition);

    return rankingPosition;
}

// función que pregunta al usuario si quiere volver a jugar tras acabar la partida
function playAgain() {

    let yesOrNo = confirm(`¿Quieres jugar otra partida ${player.name}?`);

    switch(yesOrNo) {

        case true:

            resetQuestionStatus();

            ranking = [

                {name: "Neo", points: randomNumber()},
                {name: "Vegeta", points: randomNumber()},
                {name: "Hisoka", points: randomNumber()},
                {name: "Claire Redfield", points: randomNumber()},
                {name: "Terra Brandford", points: randomNumber()},
                {name: "Eren Jaeger", points: randomNumber()},
                {name: "Sauron", points: randomNumber()},
                {name: "Kefla", points: randomNumber()},
                {name: "Biscuit Krueger", points: randomNumber()},
                {name: "Spike Spiegel", points: randomNumber()}
            
            ];
    
            player = {name: "", points: 0}; 
            turnIterator = 0;
            gameQuestions = []; 
            endTheGame = false; 
            console.clear();
            pasapalabra();
            break;

        case false:
            console.log("Gracias por jugar. Vuelve pronto");
            break;
            
    }   

}

// función para resetar el status de las preguntas al reiniciar el juego
function resetQuestionStatus() {

    gameQuestions.forEach(element => {
        element.status = 0;
    });
}

// función principal que invoca al resto de funciones por orden de ejecución formando el juego 
function pasapalabra() {

    welcome();
    enterPlayerName();
    questionaryGenerator();
    roscoLogic();
    roscoLoop();
    player.points = endScore();
    finalRanking(ranking);
    playAgain();
}

pasapalabra();











