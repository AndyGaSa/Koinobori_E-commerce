document.querySelector('.timer').style.visibility='hidden';
const startButton=document.getElementById('start-game');
const answer = document.querySelector('.submit');
const userName =document.getElementById('playerName');
const input = document.getElementById('input-answer');
const pasapalabraButton = document.querySelector('.pasapalabra');
const writeQuestions = document.querySelector('.question');
const playAgainButton = document.getElementsByClassName('tryAgain');
let questions = [
  {
    letter: "a",
    answer: "angel",
    status: 0,
    question:
      "CON LA A. Piloto español y leyenda del motociclismo con un palmares de 12+1 campeonatos del mundo",
  },

  {
    letter: "b",
    answer: "burra",
    status: 0,
    question: "CON LA B. en el argot motero asi se llama a la propia moto",
  },

  {
    letter: "c",
    answer: "caldo",
    status: 0,
    question: "CON LA C.Sinonimo de Gasolina",
  },

  {
    letter: "d",
    answer: "derbi",
    status: 0,
    question:
      "CON LA D. Famosa marca española de ciclomotores cuya fabrica se uvicaba en Martorellas (Barcelona) ",
  },

  {
    letter: "e",
    answer: "enduro",
    status: 0,
    question:
      "CON LA E. pilotaje agresivo de una moto por en medio del campo o caminos inestables",
  },

  {
    letter: "f",
    answer: "franco",
    status: 0,
    question:
      "CON LA F. piloto de motociclismo Italiano, campeón mundial de Moto2 con el equipo EG 0,0 Marc VDS en 2017. Actual compañero de su mentor Valentino Rossi en motogp",
  },

  {
    letter: "g",
    answer: "giacomo",
    status: 0,
    question:
      "CON LA G. Piloto de motociclismo de velocidad con mas titulos Mundiales en la historia del motociclismo, un total de 15",
  },

  {
    letter: "h",
    answer: "hierro",
    status: 0,
    question:
      "CON LA H. motos viejas o pasadas de moda que pesan más de lo normal",
  },

  {
    letter: "i",
    answer: "invertido",
    status: 0,
    question: "CON LA I.Un caballito sobre la rueda delantera ",
  },

  {
    letter: "j",
    answer: "joey",
    status: 0,
    question:
      "CON LA J. Apodado `King of the roads` por sus innumerables victorias en circuitos de carretera, consiguió 26 triunfos en el Tourist Trophy",
  },

  {
    letter: "k",
    answer: "kawasaki",
    status: 0,
    question:
      "CON LA K. Marca Japonesa de Motocicletas que fue la primera en implementar un motor de 4 cilindros refrigerado por agua que alcanzaba los 241km/h",
  },

  {
    letter: "l",
    answer: "le mans",
    status: 0,
    question:
      "CON LA L. Carrera de resistencia de 24 horas mundialmente conocida, que tambien da nombre al tipo de salida de la misma ",
  },

  {
    letter: "m",
    answer: "motocross",
    status: 0,
    question:
      "CON LA M. Modalidad deportiva que consiste en ir dando botes por un circuito de tierra bacheado y lleno de subidas y bajadas tan bestiales que hacen sentir cómo te crujen los huesos",
  },

  {
    letter: "n",
    answer: "norton",
    status: 0,
    question:
      "CON LA N. mítica marca británica de motocicletas deportivas que se a puesto de moda en la actualidad gracias al movimiento Cafe Racer ",
  },

  {
    letter: "o",
    answer: "ohlins",
    status: 0,
    question:
      "CON LA O. Empresa sueca numero uno en el sector que desarrolla sistemas de suspension para motocicletas y otros deportes de motor",
  },

  {
    letter: "p",
    answer: "pique",
    status: 0,
    question:
      "CON LA P. cuando conduces tu moto a modo carrera con otro motorista.",
  },

  {
    letter: "q",
    answer: "qualifying",
    status: 0,
    question:
      "CON LA Q. sesiones clasificatorias que determinan la posición inicial de cada piloto en una carrera de mtogp",
  },

  {
    letter: "r",
    answer: "rebufo",
    status: 0,
    question:
      "CON LA R. ir justo detrás de una moto para así librarse del viento",
  },

  {
    letter: "s",
    answer: "superbike",
    status: 0,
    question:
      "CON LA S. Tipo de motocicleta que se utiliza en competiciones de motociclismo de velocidad en las que solo se pueden modificar: suspensiones, frenos y ruedas,",
  },

  {
    letter: "t",
    answer: "tourist trophy",
    status: 0,
    question:
      "CON LA T. Tipo competición motociclística internacional que se celebra en la isla de Man, Macau, etc, sobre carreteras cerradas al tráfico. La carrera se realiza en formato contrarreloj.",
  },

  {
    letter: "u",
    answer: "mugello",
    status: 0,
    question:
      "CONTIENE LA U. Circuito propiedad de Ferrari desde 1988, la recta principal del trazado llega a los 1.141 metros, y en qual Rossi encadenó 7 victorias",
  },

  {
    letter: "v",
    answer: "valentino",
    status: 0,
    question:
      "CON LA V. Nombre del piloto italiano que tiene en su poder 9 titulos mundiales y le gusta la piza con mayonesa",
  },

  {
    letter: "w",
    answer: "bmw",
    status: 0,
    question:
      "CONTIENE LA W. Marca de coches y motos de origen aleman que se caracteriza por la utilizacion de motores boxer bicilindricos en los modelos mas emblematicos de la marca",
  },

  {
    letter: "x",
    answer: "boxes",
    status: 0,
    question:
      "CONTIENE LA X.  Zona del circuito donde se instalan los servicios mecánicos de mantenimiento y reparación de las máquinas.",
  },

  {
    letter: "y",
    answer: "yamaha",
    status: 0,
    question:
      "CON LA Y. Marca de motos japonesa conocida como la de los tres diapasones haciendo referencia a lo que simboliza la marca: melodia, armonia y ritmo",
  },

  {
    letter: "z",
    answer: "zigzaguear",
    status: 0,
    question: "CON LA Z. serpentear entre el trafico",
  },
];
let jugadores = [
  { nombre: "Anna", puntos: Math.floor(Math.random() * 27) + 1 },
  { nombre: "Riki", puntos: Math.floor(Math.random() * 27) + 1},
  { nombre: "Andrea", puntos:Math.floor(Math.random() * 27) + 1},
  { nombre: "Maria", puntos: Math.floor(Math.random() * 27) + 1},
  { nombre: "José", puntos: Math.floor(Math.random() * 27) + 1},
  { nombre: "Antonio", puntos: Math.floor(Math.random() * 27) + 1},
];
let playerAnswer;
let points=0;
let counter = 0;
let fallos=0;
const startingTime = 13;
let timeleft = startingTime;
let timer;
let outOfGame=false;
let respuesta='gas';
let newObject ={};
startButton.addEventListener('click',function(event){//empezar juego y enseñar preguntas

event.preventDefault();//detiene la propagación de un evento, con el objetivo de q no se realice otra ejecución u otro listener lo escuche a través del DOM
document.querySelector('.juego').style.visibility='visible';
document.querySelector('.containerPresentacion').style.display='none';
document.getElementById('start-game').style.display='none'
document.querySelector('.timer').style.visibility='visible';
showQuestions();
createTimer();
console.log("boton empezar");
});

answer.addEventListener('click',function(event){ //almacenara la respuesta del usuario
  event.preventDefault();
  almacenaRespuestas();
});
input.addEventListener('keyup',function(event){//boton check para validar inputs
  if (event.keyCode === 13) {//para que chek y el boton enter funcionen de igual manera
  event.preventDefault();
  document.getElementById("check").click();
  console.log('boton CHEK pulsado')
  }
});
input.addEventListener('keyup',function(event){//boton pasapalabra
  if (event.keyCode === 27) {//para que ESC y el boton Gas funcionen de igual manera
  event.preventDefault();
  document.getElementById("pasapalabra").click();
  console.log('pasapalabrabutton',)
  }
});
//TEMPORIZADOR
let createTimer = () => (timer = setInterval(() => updateTimer(), 1000));
let updateTimer = () => {
    timeleft <= 0
      ? timeOut()
      : (document.querySelector(".timer").innerHTML = timeleft--);
    
};
//boton GAS
pasapalabraButton.addEventListener('click', function(event){ 
  event.preventDefault();
  document.getElementById(questions[counter].letter).style.background="linear-gradient(#732C02,#F29F05)";
    document.getElementById(questions[counter].letter).style.filter= "blur(.5px)";
  counter++;
  document.querySelector('.correct-answer').style.display='none'
  pasapalabraGame();
  console.log(pasapalabraButton);
});
let pasapalabraGame=()=>{ 
  if (counter===26){
      counter=0;
      if (questions.every(allAreAnswered)){
          alerta.textContent("enhorabuena! has terminado!")
          stopGame();
          askUserName();
          showResults();
          outOfGame=true;
      }
  }
  if(questions[counter].status!==0&& outOfGame==false){
    counter++;
    pasapalabraGame();
  }
  limpiezaDeValores();
  showQuestions();
}
let showQuestions=()=>{ //muestra las preguntas...ESPERO
  writeQuestions.textContent=(questions[counter].question);
}

let limpiezaDeValores=()=>{
  respuesta.value='';
  playerAnswer='';
  respuesta='';
  respuesta = document.getElementById("input-answer");
}
let almacenaRespuestas=()=>{
respuesta=document.getElementById("input-answer").value;
playerAnswer = respuesta.toLowerCase();
compruebaRespuesta();
}
let compruebaRespuesta=()=>{
  if (playerAnswer===questions[counter].answer){
    points++;
    questions[counter].status = 1;
    document.getElementById(questions[counter].letter).style.background="linear-gradient(#022601, #6AF266)";
    document.getElementById(questions[counter].letter).style.filter= "blur(.5px)";
    counter++;
    console.log("correcto");
    document.querySelector('.correct-answer').style.display='none'
  }else if ( playerAnswer==='pasapalabra'){
    document.getElementById(questions[counter].letter).style.background="linear-gradient(#732C02,#F29F05)";
  document.getElementById(questions[counter].letter).style.filter= "blur(.5px)";
    document.querySelector('.correct-answer').style.display='none'
    counter++;
    console.log("PASAPALABRA");
}
  else{
      questions[counter].status = 1;
      fallos++;
      showCorrectAnswer();
      document.getElementById(questions[counter].letter).style.background="linear-gradient(#8c1f28d8, #f2274c)";
    document.getElementById(questions[counter].letter).style.filter= "blur(.5px)";
      counter++;
      console.log("INCORRECTO");
  }
   limpiezaDeValores();
   pasapalabraGame();
}
let showCorrectAnswer=()=>{//respuesta correcta
  document.querySelector('.correct-answer').style.display='visible';
  document.getElementById("correction-answer").innerHTML=(questions[counter].answer);
}
let allAreAnswered=(questions)=>{
  if(questions.status===1){
  return true
  }
}
let timeOut=()=>{
  document.querySelector('.finJuego').style.visibility='visible';//!CAMBIAR A ALERT BONITO!!!
  stopGame();
  askUserName();
  showResults();
}
let stopGame=()=>{
  clearInterval(timer);
  document.querySelector('.juego').style.display='none';
  document.querySelector('.finJuego').style.display='visible'; 
  document.querySelector('.timer').style.display='none';      
  document.querySelectorAll('.section').style.display='visible';
        }
let askUserName=()=>{
  userName.addEventListener('click',function(event){ //almacenara el nombre del usuario
    event.preventDefault();
    almacenaRespuestas();
      console.log(userName, 'user name');
          if (userName=="" || userName==null){
              alert ("Por favor escriba su nombre.")//!CAMBIAR A ALERT BONITO!!!
              askUserName();
          }else {
              newObject.name=userName;
              newObject.points=points;
              ranking.push(newObject);
          }
  });
}
function showResults(){
  document.querySelector('.ranking-table').style.visibility='visible';
  document.querySelector('.personal-results').style.display='inline';
  document.getElementById('restart-game').style.display='inline'
  personalResults.innerHTML= userName + ", has respondido correctamente a " + points + " preguntas e incorrectamente a " + incorrectAnswers + " preguntas"
  sortRanking();
}

function sortRanking() 
  {
  ranking.sort (function(a,b){
      if (a.points > b.points) {
          return -1;
      }
      if (a.points < b.points) {
          return 1;
      }
      // a must be equal to b
      return 0;
  });
  for(let h=0; h<ranking.length; h++){
      subjectName[h].innerHTML=ranking[h].name;
      subjectPoints[h].innerHTML=ranking[h].points;
  }
  }

  

playAgainButton.addEventListener('click', function (event) { //reload new game
  event.preventDefault();
  restartGame();
});

function restartGame(){
  location.reload();
}