function pasapalabra () {
    debugger
    welcome();
    sortPrintRanking();
    play();
    updatePoints();
    goAgain();
}

const questions = {
    a: [{ letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},
        { letter: "a", answer: "alcachofa", status: 0, question: "CON LA A. Planta comestible con tallos blancos y hojas verdes. También está en la ducha."},
        { letter: "a", answer: "agorafobia", status: 0, question: "CON LA A. Fobia a los espacios abiertos."}
    ],
    b: [{ letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego para las personas de la tercera edad y proyecto del precurso"},
        { letter: "b", answer: "bodega", status: 0, question: "CON LA B. Tienda donde se compran licores."},
        { letter: "b", answer: "biologia", status: 0, question: "CON LA B. Ciencia que trata de los seres vivos."}
    ],
    c: [{ letter: "c", answer: "caracol", status: 0, question: "CON LA C. Animal que lleva la casa encima"},
         { letter: "c", answer: "camilla", status: 0, question: "CON LA C. Cama en la que se llevan de un lado a otro heridos o enfermos."},
         { letter: "c", answer: "cardiologia", status: 0, question: "CON LA C. Estudio del corazón y de sus funciones y enfermedades."}
    ],
    d: [{ letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},
        { letter: "d", answer: "diafano", status: 0, question: "CON LA D. Que tiene una gran cantidad de luz o de claridad."},
        { letter: "d", answer: "democracia", status: 0, question: "CON LA D. Forma de gobierno en la que el poder político es ejercido por los ciudadanos"}
    ],
    e: [{ letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},
        { letter: "e", answer: "engañar", status: 0, question: "CON LA E. Hacer creer a alguien que algo falso es verdadero."},
        { letter: "e", answer: "egoismo", status: 0, question: "CON LA E. Excesivo amor a sí mismo"}
    ],
    f: [{ letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"},
        { letter: "f", answer: "fabula", status: 0, question: "CON LA F. Cuento en el que los personajes son animales, con el que se aprende algo a través de una moraleja"},
        { letter: "f", answer: "fotosintesis", status: 0, question: "CON LA F. Proceso metabólico por el cual las plantas transforman la materia con la energía de la luz."}
    ],
    g: [{ letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},
        { letter: "g", answer: "gota", status: 0, question: "CON LA G. Pequeña porción de un líquido, con forma esferoidal."},
        { letter: "g", answer: "gimnasio", status: 0, question: "CON LA G. Lugar destinado al ejercicio físico"}
    ],
    h: [{ letter: "h", answer: "hereje", status: 0, question: "CON LA H. Persona que niega alguno de los dogmas establecidos en una religión."},
        { letter: "h", answer: "hamaca", status: 0, question: "CON LA H. Tela resistente que se cuelga de sus extremos y se utiliza como cama."},
        { letter: "h", answer: "hemorragia", status: 0, question: "CON LA H. Flujo de sangre por rotura de vasos sanguíneos"}
    ],
    i: [{ letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano"},
        { letter: "i", answer: "imperdible", status: 0, question: "CON LA I. Alfiler que se abrocha quedando su punta dentro de un gancho."},
        { letter: "i", answer: "icono", status: 0, question: "CON LA I. Símbolo gráfico que aparece en la pantalla de una computadora u otro dispositivo electrónico y que representa un programa, un sistema operativo, etc."}
    ],
    j: [{ letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},
        { letter: "j", answer: "jinete", status: 0, question: "CON LA J. Persona que monta a caballo."},
        { letter: "j", answer: "jamas", status: 0, question: "CON LA J. Nunca, en ningún momento."}
    ],
    k: [{ letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria"},
        { letter: "k", answer: "karaoke", status: 0, question: "CON LA K. Diversión consistente en interpretar una canción grabada, mientras se sigue la letra que aparece en una pantalla."},
        { letter: "k", answer: "kilolitro", status: 0, question: "CON LA K. Unidad de volumen equivalente a 1000 litros, es decir, 1 metro cúbico."}
    ],
    l: [{ letter: "l", answer: "lazarillo", status: 0, question: "CON LA L. Muchacho que guía y dirige a un ciego."},
        { letter: "l", answer: "litera", status: 0, question: "CON LA L. Mueble formado por dos camas puestas una encima de la otra."},
        { letter: "l", answer: "loteria", status: 0, question: "CON LA L. Rifa o sorteo que se hace con objetos, dinero y otras cosas, con autorización pública."}
    ],
    m: [{ letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},
        { letter: "m", answer: "mayonesa", status: 0, question: "CON LA M. Salsa que se hace batiendo huevo y aceite."},
        { letter: "m", answer: "metabolismo", status: 0, question: "CON LA M. Conjunto de reacciones químicas que efectúan las células de los seres vivos con el fin de sintetizar o degradar sustancias."}
    ],
    n: [{ letter: "n", answer: "nacimiento", status: 0, question: "CON LA N. Acto de nacer."},
        { letter: "n", answer: "nulo", status: 0, question: "CON LA N. Falto de valor y fuerza para obligar o tener efecto, por ser contrario a las leyes, o por carecer de las solemnidades que se requieren en la sustancia o en el modo."},
        { letter: "n", answer: "neumatico", status: 0, question: "CON LA N. Pieza de caucho que se monta sobre la llanta de una rueda"}
    ],
    ñ: [{ letter: "ñ", answer: "ñinga", status: 0, question: "CON LA Ñ. Una pizca."},
        { letter: "ñ", answer: "ñame", status: 0, question: "CON LA Ñ.  Raíz grande, tuberculosa, de corteza casi negra y cuya carne, cocida o asada, es comestible.."},
        { letter: "ñ", answer: "ñu", status: 0, question: "CON LA Ñ. Mamífero rumiante africano de la familia de los antílopes, de color pardo grisáceo, cuya cabeza recuerda la de un toro.."}
    ],
    o: [{ letter: "o", answer: "orca", status: 0, question: "CON LA O. Ballena asesina"},
        { letter: "o", answer: "orilla", status: 0, question: "CON LA O. Borde del mar, de un lago o de un río."},
        { letter: "o", answer: "ornitorrinco", status: 0, question: "CON LA O. Mamífero del orden de los monotremas, del tamaño aproximadamente de un conejo, con hocico semejante al pico de un pato, pies palmeados, con el cuerpo y la cola, larga y aplanada."}
    ],
    p: [{ letter: "p", answer: "proton", status: 0, question: "CON LA P. Partícula elemental con carga eléctrica positiva, que forma parte del núcleo del átomo."},
        { letter: "p", answer: "planchar", status: 0, question: "CON LA P. Quitar las arrugar a una prenda."},
        { letter: "p", answer: "paraguas", status: 0, question: "CON LA P. Instrumento que sirve para protegerse de la lluvia."}
    ],
    q: [{ letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"},
        { letter: "q", answer: "quitar", status: 0, question: "CON LA Q. Tomar algo separándolo y apartándolo de otras cosas, o del lugar o sitio en que estaba."},
        { letter: "q", answer: "quiromancia", status: 0, question: "CON LA Q. Adivinación de lo concerniente a una persona por las rayas de sus manos"}
    ],
    r: [{ letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor"},
        { letter: "r", answer: "racimo", status: 0, question: "CON LA R. Conjunto de uvas sostenidas en un mismo tallo."},
        { letter: "r", answer: "retorica", status: 0, question: "CON LA R. Arte de bien decir, de dar al lenguaje escrito o hablado eficacia bastante para deleitar, persuadir o conmover."}
    ],
    s: [{ letter: "s", answer: "sabana", status: 0, question: "CON LA S.  Llanura muy extensa, con escasa vegetación arbórea y abundantes plantas herbáceas, propia de zonas tropicales y subtropicales."},
        { letter: "s", answer: "sembrar", status: 0, question: "CON LA S. Enterrar semillas en la tierra para que crezcan."},
        { letter: "s", answer: "sandia", status: 0, question: "CON LA S. Fruto grande, redondo y jugoso, de color verde oscuro por fuera y rojo por dentro."}
    ],
    t: [{ letter: "t", answer: "terricola", status: 0, question: "CON LA T. Habitante del planeta Tierra."},
        { letter: "t", answer: "taburete", status: 0, question: "CON LA T. Asiento sin respaldo."},
        { letter: "t", answer: "tanatorio", status: 0, question: "CON LA T. Edificio en que son depositados los cadáveres durante las horas que preceden a su inhumación o cremación"}
    ],
    u: [{ letter: "u", answer: "urgente", status: 0, question: "CON LA U. Que urge"},
        { letter: "u", answer: "untar", status: 0, question: "CON LA U. Extender mantequilla sobre una rebanada de pan."},
        { letter: "u", answer: "uranio", status: 0, question: "CON LA U. Elemento químico metálico, radiactivo, uno de cuyos isótopos se utilizó en la primera bomba atómica"}
    ],
    v: [{ letter: "v", answer: "valiente", status: 0, question: "CON LA V. Dicho de una persona: Capaz de acometer una empresa arriesgada a pesar del peligro y el posible temor que suscita."},
        { letter: "v", answer: "vecino", status: 0, question: "CON LA V. Persona que vive en el mismo barrio o edificio que otra."},
        { letter: "v", answer: "viento", status: 0, question: "CON LA V. Corriente de aire producida en la atmósfera por causas naturales, como diferencias de presión o temperatura."}
    ],
    w: [{ letter: "w", answer: "watt", status: 0, question: "CON LA W. vatio."},
        { letter: "w", answer: "wifi", status: 0, question: "CON LA W. Sistema de conexión inalámbrica para conectarse a internet."},
        { letter: "w", answer: "wuhan", status: 0, question: "CON LA W. Ciudad donde comenzó el covid-19."}
    ],
    x: [{ letter: "x", answer: "xilofono", status: 0, question: "CON LA X.  Instrumento musical de percusión formado por láminas generalmente de madera, ordenadas horizontalmente según su tamaño y sonido, que se hacen sonar golpeándolas con dos baquetas."},
        { letter: "x", answer: "fenix", status: 0, question: "CONTIENE LA X. Ave fabulosa que los antiguos creyeron que era única y renacía de sus cenizas."},
        { letter: "x", answer: "xenofobia", status: 0, question: "CON LA X. Fobia a los extranjeros."}
    ],
    y: [{ letter: "y", answer: "ya", status: 0, question: "CON LA Y.  Inmediatamente, ahora mismo."},
        { letter: "y", answer: "yunque", status: 0, question: "CON LA Y. Hueso que se encuentra dentro del oído, situado entre el martillo y el estribo."},
        { letter: "y", answer: "yoga", status: 0, question: "CON LA Y. Tradicional disciplina física y mental que se originó en la India."}
    ],
    z: [{ letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"},
        { letter: "z", answer: "zumbido", status: 0, question: "CON LA Z. Sonido que producen algunos insectos como la abeja o el mosquito."},
        { letter: "z", answer: "zoologico", status: 0, question: "CON LA Z. Lugar en que se conservan, cuidan y a veces se crían diversas especies animales para que sean contempladas por el público y para su estudio."}
    ] 
}

let correct = 0
let incorrect = 0
let played = 0
let wheel = [];
let reuseWheel = [];
let userName = '';
// status 0 = sin responder
// status 1 = acierto
// status 2 = fallo

function askUserName (){
    userName = prompt('Como te llamas?');
        if (userName === '' || userName === null){
            alert('Por favor escriba su nombre');
            userName = prompt('Como te llamas?')
    }
}

function welcome () {
    askUserName ()
    alert( 'Bienvenido al juego de Bingo ' + userName);
    let userNameObj = {name: userName, points: 0};
    playersList.push(userNameObj);

}


function sortPrintRanking(){
    playersList.sort(function (a,b) {
        return b.points - a.points
    });
     for(let player of playersList) {
         console.log('El jugador ' + playersList[player].name + ' tiene una puntuación de: ' + playersList[player].points);
     }
}

function chooseQuestionOfLetter(letter){

    let randomQuestionNumber = Math.floor(Math.random()*(questions[letter].length - 1));

    return randomQuestionNumber;
}

function createWheel (){
    for (let letter in questions){
    number = chooseQuestionOfLetter(letter);
        wheel.push({letter: questions[letter][number].letter, answer: questions[letter][number].answer, status: questions[letter][number].status, question: questions[letter][number].question});
    }
    return wheel;
}



function play(){
    wheel= createWheel();
do {
    for (let i in wheel){

        if (wheel[i].status === 0 ){

        let userAnswer = prompt(wheel[i].question)
        if (userAnswer === null){
            alert('¡Incorrecto! La respuesta correcta es: ' + wheel[i].answer)
            wheel[i].status = 2
            incorrect++
            played++
        } else if (userAnswer.toLocaleLowerCase() === wheel[i].answer){
            alert('Correcto')
            wheel[i].status = 1
            correct++
            played++
        } else if (userAnswer.toLocaleLowerCase() === 'pasapalabra') {
            alert('PASAPALABRA')
            wheel.push({letter: wheel[i].letter, answer: wheel[i].answer, status: wheel[i].status, question: wheel[i].question})
            wheel[i].status = 0
            played++
            
        } else if (userAnswer.toLocaleLowerCase() === 'end'){
            alert ('Aciertos = ' + correct + ' ' + 'Fallos = ' + incorrect)
            printranking()
            played = 28
            break
        }

    }
}
} while (played < 27)
}



let playersList =[
    {
        name:"Paco",
        points: Math.floor(Math.random() * 64) + 1,
    },
    {
        name: "Marta",
        points: Math.floor(Math.random() * 64) + 1,
    },
    {
        name: "Juan",
        points: Math.floor(Math.random() * 64) + 1,
    },
    {
        name: "Pepita",
        points: Math.floor(Math.random() * 64) + 1,
    },
    {
        name: "Ducky",
        points: Math.floor(Math.random() * 64) + 1,
    },
];

function updatePoints(){
    let points = correct;
    for(let i = 0; i < playersList.length; i++) {
        if(playersList[i].name === userName) {
            playersList[i].points = points;
        };
    };
    sortPrintRanking()
}

function goAgain(){
    let playAgain = prompt("¿Quieres volver a jugar? Escriba S o N");
    
    if (!playAgain) {
        return console.log("Le has dado a cancelar. ¡Hasta otra!");
    }
    switch (playAgain.toLowerCase()) {
        case "s":
            wheel = [];
            let correct = 0
            let incorrect = 0
            let played = 0
            pasapalabra();
            break;
        case "n":
            console.log('Hasta la proxima');
            break;
        default:
            console.log(
                "Solo puedes introducir S o N, vuelve a intentarlo");
            goAgain();
            break;
    }
};