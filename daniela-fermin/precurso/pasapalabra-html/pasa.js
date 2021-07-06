
let wheel = [
{letter: "a", answer: "alcachofa", status: 0, question: "CON LA A. Planta comestible con tallos blancos y hojas verdes. También está en la ducha."}, 
{letter: "b", answer: "bodega", status: 0, question: "CON LA B. Tienda donde se compran licores."},
{letter: "c", answer: "camilla", status: 0, question: "CON LA C. Cama en la que se llevan de un lado a otro heridos o enfermos."}, 
{letter: "d", answer: "diafano", status: 0, question: "CON LA D. Que tiene una gran cantidad de luz o de claridad."},
{letter: "e", answer: "engañar", status: 0, question: "CON LA E. Hacer creer a alguien que algo falso es verdadero."},
{letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"},
{letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},
{letter: "h", answer: "hereje", status: 0, question: "CON LA H. Persona que niega alguno de los dogmas establecidos en una religión."},
{letter: "i", answer: "imperdible", status: 0, question: "CON LA I. Alfiler que se abrocha quedando su punta dentro de un gancho."},
{letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},
{letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria"},
{letter: "l", answer: "litera", status: 0, question: "CON LA L. Mueble formado por dos camas puestas una encima de la otra."},
{letter: "m", answer: "mayonesa", status: 0, question: "CON LA M. Salsa que se hace batiendo huevo y aceite."},
{letter: "n", answer: "nulo", status: 0, question: "CON LA N. Falto de valor y fuerza para obligar o t…es que se requieren en la sustancia o en el modo."},
{letter: "ñ", answer: "ñinga", status: 0, question: "CON LA Ñ. Una pizca."},
{letter: "o", answer: "orca", status: 0, question: "CON LA O. Ballena asesina"},
{letter: "p", answer: "proton", status: 0, question: "CON LA P. Partícula elemental con carga eléctrica positiva, que forma parte del núcleo del átomo."},
{letter: "q", answer: "quitar", status: 0, question: "CON LA Q. Tomar algo separándolo y apartándolo de otras cosas, o del lugar o sitio en que estaba."},
{letter: "r", answer: "racimo", status: 0, question: "CON LA R. Conjunto de uvas sostenidas en un mismo tallo."},
{letter: "s", answer: "sembrar", status: 0, question: "CON LA S. Enterrar semillas en la tierra para que crezcan."},
{letter: "t", answer: "terricola", status: 0, question: "CON LA T. Habitante del planeta Tierra."},
{letter: "u", answer: "untar", status: 0, question: "CON LA U. Extender mantequilla sobre una rebanada de pan."},
{letter: "v", answer: "vecino", status: 0, question: "CON LA V. Persona que vive en el mismo barrio o edificio que otra."},
{letter: "w", answer: "watt", status: 0, question: "CON LA W. vatio."},
{letter: "x", answer: "xilofono", status: 0, question: "CON LA X.  Instrumento musical de percusión formad…que se hacen sonar golpeándolas con dos baquetas."},
{letter: "y", answer: "yunque", status: 0, question: "CON LA Y. Hueso que se encuentra dentro del oído, situado entre el martillo y el estribo."},
{letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"}];

let correct = 0;
let incorrect = 0;
let played = 0;
let start = document.getElementById('start-game');

function startGame () {
    start.addEventListener('click', play);
    start.addEventListener('click', countdown);
}

function play(){
do {
    for (let i in wheel){

        if (wheel[i].status === 0 ){
            document.getElementById('concept').innerHTML = wheel[i].question;

        let userAnswer = document.getElementById(userAnswer).value;
        if (userAnswer === null){
            wheel[i].status = 2
            bad();
            incorrect++
            played++
        } else if (userAnswer.toLocaleLowerCase() === wheel[i].answer){
            wheel[i].status = 1
            good();
            correct++
            played++
        } else if (userAnswer.toLocaleLowerCase() === 'pasapalabra') {
            wheel.push({letter: wheel[i].letter, answer: wheel[i].answer, status: wheel[i].status, question: wheel[i].question})
            wheel[i].status = 0
            played++
            
        } else {
            alert('¡Incorrecto! La respuesta correcta es: ' + wheel[i].answer)
            wheel[i].status = 2
            bad();
            incorrect++
            played++
        }

    }
}
} while (remainingTime > 0)
}

let remainingTime = 30;
    let elem = document.getElementById('time');
    let timer = setInterval(countdown, 1000); //set the countdown to every second
    function countdown() {
      if (remainingTime == -1) {
        clearTimeout(timer);
        gameOver();
      } else {
        elem.innerHTML = remainingTime;
        remainingTime--; 
      }
    }
function good () {
    let greenCircle = document.querySelector('.wheel .item')
    greenCircle.style.backgroundImage = 'radial-gradient(circle, #9ee379, #4caf50)';
    let youAreCorrect = document.getElementById('right-answer').innerHTML;
    youAreCorrect.removeClass('hidden');

}

function bad () {
    let redCircle = document.querySelector('.wheel .item')
    greenCircle.style.backgroundImage = 'radial-gradient(circle, #b9121b, #8e001c)';
    let youAreIncorrect = document.getElementById('no-good').innerHTML;
    youAreIncorrect.removeClass('hidden');
    youAreIncorrect.innerHTML = 'Incorrecto' + wheel[i].answer;
}

function gameOver (){

}














