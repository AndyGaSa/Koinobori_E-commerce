/* CODIGO ROSCO */
let items = document.querySelectorAll('.menuItem');

for (let i = 0, l = items.length; i < l; i++) {
    items[i].style.left = (50 - 35 * Math.cos(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";

    items[i].style.top = (50 + 35 * Math.sin(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";
}

document.querySelector('.center').onclick = function (e) {
    e.preventDefault();
    document.querySelector('.circle').classList.toggle('open');
}
/* CODIGO ROSCO */
let questions = [

    {
        letter: "a",
        answer: "abducir",
        status: 0,
        question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"
    },

    {
        letter: "b",
        answer: "bingo",
        status: 0,
        question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"
    },

    {
        letter: "c",
        answer: "churumbel",
        status: 0,
        question: "CON LA C. Niño, crío, bebé"
    },

    {
        letter: "d",
        answer: "diarrea",
        status: 0,
        question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"
    },

    {
        letter: "e",
        answer: "ectoplasma",
        status: 0,
        question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"
    },

    {
        letter: "f",
        answer: "facil",
        status: 0,
        question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"
    },

    {
        letter: "g",
        answer: "galaxia",
        status: 0,
        question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"
    },

    {
        letter: "h",
        answer: "harakiri",
        status: 0,
        question: "CON LA H. Suicidio ritual japonés por desentrañamiento"
    },

    {
        letter: "i",
        answer: "iglesia",
        status: 0,
        question: "CON LA I. Templo cristiano"
    },

    {
        letter: "j",
        answer: "jabali",
        status: 0,
        question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"
    },

    {
        letter: "k",
        answer: "kamikaze",
        status: 0,
        question: "CON LA K. Persona que se juega la vida realizando una acción temeraria"
    },

    {
        letter: "l",
        answer: "licantropo",
        status: 0,
        question: "CON LA L. Hombre lobo"
    },

    {
        letter: "m",
        answer: "misantropo",
        status: 0,
        question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"
    },

    {
        letter: "n",
        answer: "necedad",
        status: 0,
        question: "CON LA N. Demostración de poca inteligencia"
    },

    {
        letter: "ñ",
        answer: "señal",
        status: 0,
        question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."
    },

    {
        letter: "o",
        answer: "orco",
        status: 0,
        question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"
    },

    {
        letter: "p",
        answer: "protoss",
        status: 0,
        question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"
    },

    {
        letter: "q",
        answer: "queso",
        status: 0,
        question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"
    },

    {
        letter: "r",
        answer: "raton",
        status: 0,
        question: "CON LA R. Roedor"
    },

    {
        letter: "s",
        answer: "stackoverflow",
        status: 0,
        question: "CON LA S. Comunidad salvadora de todo desarrollador informático"
    },

    {
        letter: "t",
        answer: "terminator",
        status: 0,
        question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"
    },

    {
        letter: "u",
        answer: "unamuno",
        status: 0,
        question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"
    },

    {
        letter: "v",
        answer: "vikingos",
        status: 0,
        question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"
    },

    {
        letter: "w",
        answer: "sandwich",
        status: 0,
        question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"
    },

    {
        letter: "x",
        answer: "botox",
        status: 0,
        question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"
    },

    {
        letter: "y",
        answer: "peyote",
        status: 0,
        question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"
    },

    {
        letter: "z",
        answer: "zen",
        status: 0,
        question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"
    }
]

let Turno = 0;
let Centro = document.getElementById("center");
let Pregunta = document.getElementById("pregunta");
let Respuesta = document.getElementById("respuesta");
let Enviar = document.getElementById("enviar");
let Timer = document.getElementById("timer");
let AciertosButton = document.getElementById("aciertos");
let FallosButton = document.getElementById("fallos");
let segundos = 0;
let Aciertos = 0;
let Fallos = -1;

Respuesta.addEventListener('submit', function(event) {
    event.preventDefault();
}, false);


Respuesta.style.display = "none";
Enviar.style.display = "none";
Timer.style.display = "none";
AciertosButton.style.display = "none";
FallosButton.style.display = "none";

function MostrarPista() {
    Pregunta.innerHTML = questions[Turno].question + ' Pulsa enviar cuando estes listo.';
}
let TimerFunction = setInterval(function() {
    segundos--;
    if(segundos>0){
        Timer.innerHTML= segundos;
    }else if(segundos ===0){
        FinJuego();
    }
}, 1000);

Centro.addEventListener("click", function Start() {
    MostrarPista();
    Turno = 0;
    Aciertos = 0;
    Fallos = 0;
    Centro.style.display = "none";
    Respuesta.style.display = "block";
    Enviar.style.display = "block";
    Timer.style.display = "block";
    AciertosButton.style.display = "block";
FallosButton.style.display = "block";
    segundos = 300;
    
});

Enviar.addEventListener("click", function ComprobarRespuesta() {

    let RespuestaLower ;

    if (RespuestaLower != 'end') {
        
        if (Respuesta.innerHTML != null) {
            RespuestaLower = Respuesta.value.toLowerCase();
        }
        if (RespuestaLower != 'pasapalabra') {
            console.log(RespuestaLower);
            if (RespuestaLower == questions[Turno].answer) {
                Pregunta.innerHTML = '¡Correcto! ¡Has ganado un punto!';
                Aciertos++;
                AciertosButton.innerHTML = Aciertos;
                questions[Turno].status = 1;
                Respuesta.style.color = '#05ffa1';
                AciertosButton.style.color = '#05ffa1';
                document.getElementById(questions[Turno].letter).style.color ='#05ffa1' ;
            } else {
                Fallos++;
                Respuesta.style.color = '#E93479';
                FallosButton.innerHTML = Fallos;
                FallosButton.style.color = '#E93479';
                document.getElementById(questions[Turno].letter).style.color ='#E93479' ;
                Pregunta.innerHTML = 'MEEEEEC. Palabra incorrecta... \nLa respuesta correcta era: ' + questions[Turno].answer + '.';
            }
        } else {
            Pregunta.innerHTML = 'PASAPALABRA';
            Respuesta.style.color = '#01CDFE';
            document.getElementById(questions[Turno].letter).style.color ='#01CDFE' ;
        }
        setTimeout(() => { Respuesta.style.color = black; Respuesta.value=''}, 2000);

    }

    if (RespuestaLower === 'end') {
        FinJuego();
    } else if (Turno === 26){
        FinJuego();
    }else{
        setTimeout(() => {  Turno++; MostrarPista(); }, 2000);
    }
    
});

function FinJuego() {
    Pregunta.innerHTML = 'Has acertado ' + Aciertos + ' palabra/s y has fallado ' + Fallos + ' palabra/s. \nPuedes volver a jugar cuando quieras pulsando play!';
    Respuesta.style.display = "none";
    Enviar.style.display = "none";
    Timer.style.display = "none";
    Centro.style.display = "block";
    AciertosButton.style.display = "none";
    FallosButton.style.display = "none";
    document.querySelector('.circle').classList.toggle('open');
}