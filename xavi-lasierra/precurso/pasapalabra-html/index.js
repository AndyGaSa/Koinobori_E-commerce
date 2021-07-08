//VARIABLES
const allQuestions = [
    {letter: "a", answer: "abducir", status: 0, type: "CON", question: "Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},
    {letter: "b", answer: "bingo", status: 0, type: "CON", question: "Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},
    {letter: "c", answer: "churumbel", status: 0, type: "CON", question: "Niño, crío, bebé"},
    {letter: "d", answer: "diarrea", status: 0, type: "CON", question: "Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},
    {letter: "e", answer: "ectoplasma", status: 0, type: "CON", question: "Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},
    {letter: "f", answer: "facil", status: 0, type: "CON", question: "Que no requiere gran esfuerzo, capacidad o dificultad"},
    {letter: "g", answer: "galaxia", status: 0, type: "CON", question: "Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},
    {letter: "h", answer: "harakiri", status: 0, type: "CON", question: "Suicidio ritual japonés por desentrañamiento"},
    {letter: "i", answer: "iglesia", status: 0, type: "CON", question: "Templo cristiano"},
    {letter: "j", answer: "jabali", status: 0, type: "CON", question: "Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},
    {letter: "k", answer: "kamikaze", status: 0, type: "CON", question: "Persona que se juega la vida realizando una acción temeraria"},
    {letter: "l", answer: "licantropo", status: 0, type: "CON", question: "Hombre lobo"},
    {letter: "m", answer: "misantropo", status: 0, type: "CON", question: "Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},
    {letter: "n", answer: "necedad", status: 0, type: "CON", question: "Demostración de poca inteligencia"},
    {letter: "ñ", answer: "señal", status: 0, type: "CONTIENE", question: "Indicio que permite deducir algo de lo que no se tiene un conocimiento directo"},
    {letter: "o", answer: "orco", status: 0, type: "CON", question: "Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},
    {letter: "p", answer: "pesadilla", status: 0, type: "CON", question: "Sueño que produce angustia o temor"},
    {letter: "q", answer: "queso", status: 0, type: "CON", question: "Producto obtenido por la maduración de la cuajada de la leche"},
    {letter: "r", answer: "raton", status: 0, type: "CON", question: "Roedor"},
    {letter: "s", answer: "stackoverflow", status: 0, type: "CON", question: "Comunidad salvadora de todo desarrollador informático"},
    {letter: "t", answer: "terminator", status: 0, type: "CON", question: "Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},
    {letter: "u", answer: "unamuno", status: 0, type: "CON", question: "Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},
    {letter: "v", answer: "vikingos", status: 0, type: "CON", question: "Nombre dado a los guerreros de los pueblos nórdicos, famosos por sus incursiones y pillajes en Europa"},
    {letter: "w", answer: "sandwich", status: 0, type: "CONTIENE", question: "Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"},
    {letter: "x", answer: "botox", status: 0, type: "CONTIENE", question: "Toxina bacteriana utilizada en cirujía estética"},
    {letter: "y", answer: "peyote", status: 0, type: "CONTIENE", question: "Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"},
    {letter: "z", answer: "zen", status: 0, type: "CON", question: "Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"},
    {letter: "a", answer: "armario", status: 0, type: "CON", question: "Mueble con puertas y estantes o perchas para guardar ropa y otros objectos"},
    {letter: "a", answer: "alcalde", status: 0, type: "CON", question: "Presidente del ayuntamiento y primera autoridad gubernativa en un municipio"},
    {letter: "b", answer: "botanica", status: 0, type: "CON", question: "Ciencia que trata de los vegetales"}
];
let ranking = [
    {name: "Sara", good: 26, bad: 0, time: 0, new: false},
    {name: "Abel", good: 24, bad: 3, time: 20, new: false},
    {name: "Mary", good: 22, bad: 4, time: 0, new: false},
    {name: "Samuel", good: 22, bad: 5, time: 15, new: false},
    {name: "Alan", good: 20, bad: 4, time: 0, new: false},
    {name: "Carla", good: 17, bad: 10, time: 40, new: false},
    {name: "Cintia", good: 14, bad: 0, time: 0, new: false},
    {name: "Axel", good: 12, bad: 15, time: 26, new: false},
    {name: "Merce", good: 8, bad: 19, time: 32, new: false},
    {name: "Nadia", good: 5, bad: 12, time: 0, new: false},
];
let currentGameQuestions;
let currentObject;
let goods;
let bads;
let gameTime;
let asciiLetter;
let gameRound;
let isGameEnded;
let scene = 0;
let userName;

//BUTTONS
let playButton = document.getElementById('play-button');
playButton.addEventListener("click", function(){
    firstScene();
});

let startButton = document.getElementById('start-button');
startButton.addEventListener("click", function(){
    secondScene();
});

let checkButton = document.getElementById('answer-button');
checkButton.addEventListener("click", function(){
    checkAnswer(false);
});

let pasapalabraButton = document.getElementById('pasapalabra-button');
pasapalabraButton.addEventListener("click", function(){
    checkAnswer(true);
});

let quitButton = document.getElementById('quit-button');
quitButton.addEventListener("click", function(){
    if(scene !== 3)
        return;
    if(confirm('PASAPALABRA\n\n¿Estás seguro que quieres salir?\nNo podrás entrar en el ranking.'))
        endGame(2);
});

let restartButton = document.getElementById('play-again-button');
restartButton.addEventListener("click", function(){
    playAgain(false);
});

let homeButton = document.getElementById('home-button');
homeButton.addEventListener("click", function(){
    playAgain(true);
});

document.addEventListener('keyup', function(event) {
    if(event.key === 'Enter'){
        enterKey();    
    }
});

//FUNCTIONS

//Es llamada cuando se presiona el botón jugar. Deshabilita la div y habilita la siguiente
function firstScene(){
    document.getElementById('title').classList.add('disabled');
    document.getElementById('name-selection').classList.remove('disabled');
    document.getElementById('user-name').value = '';
    document.getElementById('user-name').focus(); //Para que el cursor este directamente en el input

    scene = 1; //para controlar que div esta habilitada para ver que hacer cuando se presiona la tecla 'enter'
}

//Es llamada cuando se presiona el botón empezar. Deshabilita la div i habilita la div que da inicio al juego
function secondScene(restart){
    userName = document.getElementById('user-name').value; //Coge que valor tiene el input user-name
    //si userName es igual a '' no deshabilita la div actual y llama la funcion Shake
    if(userName === '')
        Shake(document.getElementById('user-name'));
    //si hay algun valor en userName pasa a la siguiente div guardandose el nombre.
    else{
        document.getElementById('name-selection').classList.add('disabled');
        document.getElementById('game-start').classList.remove('disabled');
        document.getElementById('timer-box').classList.remove('disabled');
        document.getElementById('timer').innerHTML = '200';
        document.getElementById('points-good').innerHTML = '0';
        document.getElementById('points-bad').innerHTML = '0';
        document.getElementById('game-start-timer').innerHTML= '';

        //Se inicia una cuenta atrás y da inicio al juego cuando se acaba esta
        let timeLeft = 4;
        let timer = setInterval(function(){
            if(timeLeft <= 0){
                clearInterval(timer);
                setTimeout(function(){startGame(); },1000);
            }else if(timeLeft <= 1)
                document.getElementById('game-start-timer').innerHTML= "TIEMPO";
            else if(timeLeft <=4){
                document.getElementById('game-start-timer').innerHTML= (timeLeft-1).toString();
                document.getElementById('game-start-timer').animate([
                    {fontSize: '0px'},
                    {fontSize: '100px'},
                ], {
                    duration: 200
                });
            }
            timeLeft--;
        }, 1000);

        scene = 2;
    }
}

//Empieza el juego
function startGame(){
    document.getElementById('game-start').classList.add('disabled');

    //Resetea las variables
    currentGameQuestions = [];
    asciiLetter = 97;
    gameRound = 1;
    goods = 0;
    bads = 0;

    //Empieza el timer
    gameTime = 200;
    isGameEnded = false;
    let timer = setInterval(function(){
        if(isGameEnded){
            clearInterval(timer);
            return;
        }
        gameTime--;
        if(gameTime <= 0){
            document.getElementById('timer').innerHTML = '0';
            endGame(0);
            clearInterval(timer);
        }else{
            document.getElementById('timer').innerHTML = gameTime.toString();
        }
    }, 1000);
    
    //Llama la funcion newTurn con la variable asciiLetter que es la letra que toca en orden alfabético en código ACII
    document.getElementById('game').classList.remove('disabled');
    newTurn(String.fromCharCode(asciiLetter).toString());
}

//Pasada por valor la letra que toca y en que ronda esta
function newTurn(currentLetter){
    //Añade a currentGameQuestions 1 pregunta de la lista de la letra que toca
    if(gameRound === 1){
        let aux = [];
        for(let i=0; i<allQuestions.length; i++){
            if(allQuestions[i].letter === currentLetter)
                aux.push(i);
        }    
        currentGameQuestions.push(allQuestions[aux[Math.round(Math.random() * (aux.length - 1))]]);
    }
       
    //Imprime la pregunta
    document.getElementById('answer').value = '';
    document.getElementById('answer').focus();
    currentObject = currentGameQuestions.find(({letter}) => letter === currentLetter);
    document.getElementById('question-type').innerHTML= currentObject.type + ' LA';
    document.getElementById('question-letter').innerHTML= currentObject.letter.toUpperCase();
    document.getElementById('question').innerHTML= currentObject.question;
    //Cambia la letra activa
    document.getElementById(currentObject.letter).classList.remove('normal-circle');
    document.getElementById(currentObject.letter).classList.add('active-circle');

    scene = 3;
}

//Llamada cuando se pulsa el botón checkButton o el botón pasapalabra
function checkAnswer(pasa){
    //Mira si la respuesta es correcta/pasapalabra/salir
    /*STATUS
    0: no respondida
    1: correcta
    2:incorrecta
    */

    //Quita la active letter
    document.getElementById(currentObject.letter).classList.remove('active-circle');

    //Si pasapalabra
    if(pasa){
        document.getElementById('good-bad-answer').innerHTML = 'PASAPALABRA';
        document.getElementById('explanation').innerHTML = '';
        document.getElementById(currentObject.letter).classList.add('normal-circle');
    }
    //Comprueba respuesta
    else{
        let ans = document.getElementById('answer').value.toLowerCase();
        ans = ans.normalize("NFD").replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1").normalize(); //Quita accentos

        //Si la respuesta esta vacia llama la funcion Shake y no comprueba la respuesta
        if(ans === ''){
            Shake(document.getElementById('answer'));
            document.getElementById(currentObject.letter).classList.add('active-circle');
            return;
        }

        //Respuesta correcta
        if(ans === currentObject.answer){
            goods++;
            document.getElementById('good-bad-answer').innerHTML = '¡CORRECTO!';
            document.getElementById('explanation').innerHTML = '';
            document.getElementById(currentObject.letter).classList.add('green-circle');
            document.getElementById('rosco').classList.add('green'); //cambia color de fondo
            currentObject.status = 1;
        }
        //Respuesta incorrecta
        else{
            bads++;
            document.getElementById('good-bad-answer').innerHTML = '¡NO!';
            document.getElementById('explanation').innerHTML = `La respuesta correcta era<br>${currentObject.answer.toUpperCase()}`;
            document.getElementById(currentObject.letter).classList.add('red-circle');
            document.getElementById('rosco').classList.add('red'); //cambia color de fondo
            currentObject.status = 2;
        }
    }

    //Imprime letras correctas/incorrectas
    document.getElementById('points-good').innerHTML = goods.toString();
    document.getElementById('points-bad').innerHTML = bads.toString();
    //Cambia la div activa a la answer-correction
    document.getElementById('game').classList.add('disabled');
    document.getElementById('answer-correction').classList.remove('disabled');
 
    scene = 4;

    //Cambia de div despues de un segundo al nuevo turno o endGame si ya ha completado el rosco
    if(currentGameQuestions.length < 27 || currentGameQuestions.find(({status}) => status === 0))
        setTimeout('calculateNextTurn()',1000);
    else
        setTimeout('endGame(1)',1000);
    
    //Vuelve a poner el fondo del color original
    setTimeout(function(){
        document.getElementById('rosco').className = 'center';
    },1000);
}

//calcula la siguiente letra y llama a newTurn
function calculateNextTurn(){
    if(isGameEnded) return;

    do{
        if(asciiLetter === 110)
            asciiLetter = "ñ".charCodeAt(0);
        else if(asciiLetter === "ñ".charCodeAt(0))
            asciiLetter = 111;
        else if(asciiLetter === 122){
            asciiLetter = 97;
            gameRound++;
        }
        else
            asciiLetter++;
    }while(gameRound != 1 && currentGameQuestions.find(({letter}) => letter === String.fromCharCode(asciiLetter)).status !== 0);

    newTurn(String.fromCharCode(asciiLetter).toString());

    document.getElementById('answer-correction').classList.add('disabled');
    document.getElementById('game').classList.remove('disabled');
}

//Llamada cuando completas el rosco o se acaba el tiempo
function endGame(endType) {
    isGameEnded = true;

    //Se ha acabado porque el tiempo se ha acabado
    if(endType === 0){
        //desactiva la div donde estaba
        if(scene === 3){
            document.getElementById('game').classList.add('disabled');
            document.getElementById(currentObject.letter).classList.remove('active-circle');
            document.getElementById(currentObject.letter).classList.add('normal-circle');
            
        }
        else if(scene === 4){
            document.getElementById('answer-correction').classList.add('disabled');
        }
        document.getElementById('time-is-up').innerHTML = 'Se ha acabado el tiempo';
        rankingIn(); //para ver si entra en el ranking
    }
    //Se ha acabado porque se ha completado el rosco
    else if(endType === 1){
        document.getElementById('answer-correction').classList.add('disabled');
        document.getElementById('time-is-up').innerHTML = 'Has completado el rosco';
        rankingIn(); //para ver si entra en el ranking
    }
    //Se ha acabado porque se ha salido en mitad de la partida
    else{
        //no puede entrar al ranking
        document.getElementById('game').classList.add('disabled');
        document.getElementById(currentObject.letter).classList.remove('active-circle');
        document.getElementById(currentObject.letter).classList.add('normal-circle');
        document.getElementById('time-is-up').innerHTML = 'Has salido del juego';
        document.getElementById('ranking-entry').innerHTML = 'No puedes entrar al ranking sin acabar el juego';
    }
    //Imprime la puntuación y tiempo restante
    document.getElementById('goods-summary').innerHTML = goods.toString();
    document.getElementById('bads-summary').innerHTML = bads.toString();
    document.getElementById('time-summary').innerHTML = gameTime.toString() + 's';
    document.getElementById('game-summary').classList.remove('disabled');

    scene = 5;
}

//Mira si entra al ranking
function rankingIn(){
    let inRank = false;
    if((goods > ranking[9].good) || (goods === ranking[9].good && bads < ranking[9].bad) || (goods === ranking[9].good && bads === ranking[9].bad && gameTime >= ranking[9].time))
        inRank = true;
    
    //Si entra en el ranking
    if(inRank){
        document.getElementById('ranking-entry').innerHTML = 'Has conseguido entrar en el ranking.<br>¡Enhorabuena!';

        //Añade y ordena el ranking
        ranking.pop();
        ranking.push({name: userName, good: goods, bad: bads, time: gameTime, new: true});
        ranking.sort(function(a,b){
            if(a.good === b.good){
                if(a.bad === b.bad){
                    return b.time - a.time;
                }
                return a.bad - b.bad;
            }
            return b.good - a.good;
        });
        printRank();
    }
    else{
        document.getElementById('ranking-entry').innerHTML = 'No has conseguido entrar en el ranking.<br>¡Intentalo de nuevo!';
    }
}

//Imprime el ranking
function printRank(){
    let aux = document.getElementById('ranking-data').getElementsByTagName('tr');
    for(let i=0; i<aux.length; i++){
        let aux2 = aux[i].getElementsByTagName('td');
        aux2[0].innerHTML = `${(i+1).toString()}. ${ranking[i].name}`;
        aux2[1].innerHTML = ranking[i].good;
        aux2[2].innerHTML = ranking[i].bad;
        aux2[3].innerHTML = ranking[i].time;
        //Si hay un usuario nuevo en el ranking se aumenta y resalta durante 2.5s
        if(ranking[i].new){
            aux[i].classList.add('ranking-new');
            document.getElementById('ranking-table').classList.add('ranking-active');
            setTimeout(function(){
                aux[i].classList.remove('ranking-new');
                ranking[i].new = false;
                document.getElementById('ranking-table').classList.remove('ranking-active');
            },2500);
        }
    }
}

//Resetea los valores usados en el juego y se pone en la div inicial o inicia el juego de nuevo directamente con el mismo userName
function playAgain(home){
    document.getElementById('game-summary').classList.add('disabled');

    //Reset valores rosco
    let x = document.getElementById('rosco').childNodes;
    for (let circleLetter of x){
        circleLetter.className = 'normal-circle';
    }
    currentGameQuestions.forEach(function (ob) {
        ob.status = 0;
    });

    //Escena main o vuelve a empezar el juego
    if(home){
        document.getElementById('title').classList.remove('disabled');
        document.getElementById('timer-box').classList.add('disabled');
        scene = 0;
    }
    else
        secondScene();
}

//Hace vibrar el elemento pasado por valor durante 0.5s
function Shake(el){
    el.animate([
        {transform: 'translate(-50%, -50%) rotate(0deg)'},
        {transform: 'translate(-52%, -48%) rotate(2deg'},
        {transform: 'translate(-49%, -51%) rotate(-2deg)'},
        {transform: 'translate(-51%, -49%) rotate(2deg)'},
        {transform: 'translate(-50%, -50%) rotate(0deg)'} 
    ], {
        duration: 500
    });
    document.getElementById('user-name').focus();
}

//Cuando se presiona la tecla enter es llamada esta funcion y segun en que escena esta pasa a la siguiente
function enterKey(){
    if(scene === 0)
        firstScene();
    else if(scene === 1)
        secondScene();
    else if(scene === 3)
            checkAnswer(document.getElementById('answer').value === '');
}

//Lamada al inicio, mueve todas las letras a su posición
function createRosco(){
    let allLetters = document.getElementById('rosco').children;
    console.log(allLetters);

    console.log('hello');
    for(let i=0; i<allLetters.length; i++){
        let rot = 270 + i*(360/27);
        allLetters[i].style.transform = `rotate(${rot}deg) translate(280px) rotate(-${rot}deg)`;
    }
}

//CODIGO
createRosco();
printRank();