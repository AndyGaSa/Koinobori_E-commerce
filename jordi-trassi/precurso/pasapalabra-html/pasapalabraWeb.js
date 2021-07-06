       
var todasLasPreguntas = [
    [{letra: 'a', status: 0, respuesta: 'aladin', pregunta: 'Con la A:  El que se encontró la lámpara mágica.'},
    {letra: 'b', status: 0, respuesta: 'bambi', pregunta:'Con la B:  El ciervo más famoso de Disney.' },
    {letra: 'c', status: 0, respuesta: 'caperucita', pregunta:'Con la C:  De apellido Roja y su abuelita era un lobo.' },
    {letra: 'd', status: 0, respuesta: 'disney', pregunta:'Con la D:  Apellido del inventor de Mickey Mouse.' },
    {letra: 'e', status: 0, respuesta: 'elefante', pregunta:'Con la E:  Qué animal era Dumbo?' },
    {letra: 'f', status: 0, respuesta: 'filemon', pregunta:'Con la F:  El compañero de Mortadelo?' },
    {letra: 'g', status: 0, respuesta: 'goliat', pregunta:'Con la G:  Contra quién luchó David?' },
    {letra: 'h', status: 0, respuesta: 'heidi', pregunta:'Con la H:  Cual fué la niña de los Alpes que vivía con su abuelo y tenía un amigo llamado Pedro?' },
    {letra: 'i', status: 0, respuesta: 'invaders', pregunta:'Con la I:  Uno de los primeros videojeugos matamarcianos más importantes de la historia: Space... ' },
    {letra: 'j', status: 0, respuesta: 'jackie', pregunta:'Con la J:  Hermano de Nuca y uno de los oseznos que vivían felices en la montaña Tallac.' },
    // {letra: 'k', status: 0, respuesta: 'koala', pregunta:'Con la K:  Qué animal era Mofli?' },
    {letra: 'l', status: 0, respuesta: 'lisa', pregunta:'Con la L:  Cómo se llama la hermana de Bart Simpson?' },
    {letra: 'm', status: 0, respuesta: 'millhouse', pregunta:'Con la M:  Amigo de Bart Simpson.' },
    {letra: 'n', status: 0, respuesta: 'nemo', pregunta:'Con la N:  Un pez payaso muy famoso.' },
    {letra: 'o', status: 0, respuesta: 'obelix', pregunta:'Con la O:  De pequeño se cayó en una marmita con una poción mágica.' },
    {letra: 'p', status: 0, respuesta: 'popeye', pregunta:'Con la P:  Le encantaban las espinacas.' },
    {letra: 'q', status: 0, respuesta: 'quasimodo', pregunta:'Con la Q:  Niño jorobado que habitaba en la Catedral de Notre Dame, tocando las campanas.' },
    {letra: 'r', status: 0, respuesta: 'rapunzel', pregunta:'Con la R:  Tubo que utilizar su largo pelo para que el príncipe subiera a la torre donde estaba encerrada para salvarla.' },
    {letra: 's', status: 0, respuesta: 'shrek', pregunta:'Con la S:  El ogro que tenía un asno como amigo.' },
    {letra: 't', status: 0, respuesta: 'tornasol', pregunta:'Con la T:  Es un profesor creado por Hergé y que sale en una serie donde aparece un perro llamado Milu.' },
    {letra: 'u', status: 0, respuesta: 'ulises', pregunta:'Con la U:  Odiseo o ... ' },
    {letra: 'v', status: 0, respuesta: 'vicky', pregunta:'Con la V:  Era un niño vikingo de nombre...?' },
    // {letra: 'w', status: 0, respuesta: 'wendy', pregunta:'Con la W:  La niña que encuentra la sombra de Peter Pan.' },
    {letra: 'x', status: 0, respuesta: 'x-men', pregunta:'Con la X:  Serie animada de superheroes.' },
    {letra: 'y', status: 0, respuesta: 'yoda', pregunta:'Con la Y:  El maestro de la Guerra de las Galaxias.' },
    {letra: 'z', status: 0, respuesta: 'zanaorias', pregunta:'Con la Z:  En plural, lo que le gusta a Bugs Bunny.' },
    ],
    [{letra: 'a', status: 0, respuesta: 'arnold', pregunta:'Con la A:  Actor con apellido impronunciable que protagonizó Terminator.' },
    {letra: 'b', status: 0, respuesta: 'bruce', pregunta:'Con la B:  Nombre del cantante de la canción: BORN IN THE U.S.A.' },
    {letra: 'c', status: 0, respuesta: 'celia', pregunta:'Con la C:  Nombre de la inventora de la SALSA y de origen cubana.' },
    {letra: 'd', status: 0, respuesta: 'dj', pregunta:'Con la D:  Tiesto, Ghetta, Hardwell, Afrojack... qué profesión tienen?' },
    {letra: 'e', status: 0, respuesta: 'elvis', pregunta:'Con la E:  El Rey del Rock and Roll.' },
    {letra: 'f', status: 0, respuesta: 'freddie', pregunta:'Con la F:  Nombre artístico de Farrokh Bulsara.' },
    {letra: 'g', status: 0, respuesta: 'gigi', pregunta:'Con la G:  Dj italiano de apellido D´Agostino.' },
    {letra: 'h', status: 0, respuesta: 'haddaway', pregunta:'Con la H:  Cantante de música dance de los temas: What Is Love - Life - Fly Away.' },
    {letra: 'i', status: 0, respuesta: 'it', pregunta:'Con la I:  Adaptación cinematográfica de la conocida novela de Stephen King "Eso".' },
    {letra: 'j', status: 0, respuesta: 'janet', pregunta:'Con la J:  La hermana pequeña de los Jackson.' },
    // {letra: 'k', status: 0, respuesta: 'kaoma', pregunta:'Con la K:  Grupo que inventó la LAMBADA.' },
    {letra: 'l', status: 0, respuesta: 'laurel', pregunta:'Con la L:  Cómo se llamaba el GORDO del duo humorístico y que iba acompañado de Hardy?' },
    {letra: 'm', status: 0, respuesta: 'matrix', pregunta:'Con la M:  Película donde un grupo de rebeldes del mundo real liderados por Morfeo, rescata al hacker Neo.' },
    {letra: 'n', status: 0, respuesta: 'nirvana', pregunta:'Con la N:  Banda de grunge donde los budistas encuentran su estado de liberación.' },
    {letra: 'o', status: 0, respuesta: 'oscar', pregunta:'Con la O:  Premio anual concedido por la Academia de las Artes y las Ciencias Cinematográficas.' },
    {letra: 'p', status: 0, respuesta: 'pitbull', pregunta:'Con la P:  Cantante latino con nombre de perro.' },
    {letra: 'q', status: 0, respuesta: 'quentin', pregunta:'Con la Q:  Tarantino, de nombre...' },
    {letra: 'r', status: 0, respuesta: 'rem', pregunta:'Con la R:  Grupo de la canción PERDIENDO MI RELIGIÓN.' },
    {letra: 's', status: 0, respuesta: 'salvador', pregunta:'Con la S:  El nombre de Dalí. ' },
    {letra: 't', status: 0, respuesta: 'transformer', pregunta:'Con la T:  Qué es un DECEPTICON?' },
    {letra: 'u', status: 0, respuesta: 'ub40', pregunta:'Con la U:  Grupo inglés de música pop reggae y dub, autores del tema: Can´t help falling in love.' },
    {letra: 'v', status: 0, respuesta: 'vivaldi', pregunta:'Con la V:  Se le considera uno de los más grandes compositores barrocos, era apodado ´Il prete rosso´ «El cura rojo» por ser sacerdote y pelirrojo.' },
    // {letra: 'w', status: 0, respuesta: 'wham', pregunta:'Con la W:  Duo británico de pop, creado en 1981 por George Michael y Andrew Ridgeley.' },
    {letra: 'x', status: 0, respuesta: 'xilofono', pregunta:'Con la X:  Instrumento musical de percusión.' },
    {letra: 'y', status: 0, respuesta: 'yellow', pregunta:'Con la Y:  Color del submarino de los Beatles.' },
    {letra: 'z', status: 0, respuesta: 'zambomba', pregunta:'Con la Z:  Instrumento musical de fricción tambien conocido como RUNCHO.' },
    ],
    [{letra: 'a', status: 0, respuesta: 'atari', pregunta:'Con la A: Empresa pionera en los juegos de arcade, las consolas de videojuegos domésticos y las computadoras domésticas.' },
    {letra: 'b', status: 0, respuesta: 'bitcoin', pregunta:'Con la B: Criptomoneda.' },
    {letra: 'c', status: 0, respuesta: 'cpu', pregunta:'Con la C: Siglas de la Unidad Central de Procesamiento.' },
    {letra: 'd', status: 0, respuesta: 'donkey', pregunta:'Con la D: Cómo se llama el mono de Nintendo?' },
    {letra: 'e', status: 0, respuesta: 'ethernet', pregunta:'Con la E: Es un estándar de redes de área local para computadoras.' },
    {letra: 'f', status: 0, respuesta: 'floppy', pregunta:'Con la F: Como se denominaban ateriormente en en inglés los disquetes:... disk.' },
    {letra: 'g', status: 0, respuesta: '5g', pregunta:'Contiene la G: Reciente tecnoligía inalámbrica.' },
    {letra: 'h', status: 0, respuesta: 'html', pregunta:'Con la H: Lenguaje para programación web.' },
    {letra: 'i', status: 0, respuesta: 'internet', pregunta:'Con la I: Conjunto descentralizado de redes de comunicación interconectadas que utilizan la familia de protocolos TCP/IP.' },
    {letra: 'j', status: 0, respuesta: 'joystick', pregunta:'Con la J: Periférico de entrada que consiste en una palanca que gira sobre una base e informa su ángulo o dirección al dispositivo que está controlando.' },
    // {letra: 'k', status: 0, respuesta: 'kirby', pregunta:'Con la K: Cómo se llamaba el abogado que defendió a Nintendo por usar el nombre Donkey Kong y al ganar le homenajearon poniendo su nombre a un vidiojeugo? ' },
    {letra: 'l', status: 0, respuesta: 'luigi', pregunta:'Con la L: Hermano menor de Mario Bros.' },
    {letra: 'm', status: 0, respuesta: 'mario', pregunta:'Con la M: Fontanero ítalo-estadounidense.' },
    {letra: 'n', status: 0, respuesta: 'nintendo', pregunta:'Con la N: Empresa que su origen se remonta a 1889 fundada por el artesano Fusajirō Yamauchio​ con el objetivo de producir y comercializar naipes Hanafuda.' },
    {letra: 'o', status: 0, respuesta: 'overclocking', pregunta:'Con la O: Es la práctica que pretende alcanzar una mayor frecuencia de reloj para un componente electrónico.' },
    {letra: 'p', status: 0, respuesta: 'pacman', pregunta:'Con la P: Se tenía que comer todas las bolitas de la pantalla y encontrar la salida del nivel, intentando que no le pillasen los fantasmas.' },
    {letra: 'q', status: 0, respuesta: 'qwerty', pregunta:'Con la Q: Distribución más común de las letras del teclado.' },
    {letra: 'r', status: 0, respuesta: 'raid', pregunta:'Con la R: Siglas en inglés de matriz redundante de discos independientes.' },
    {letra: 's', status: 0, respuesta: 'sonic', pregunta:'Con la S: El erizo de Sega.' },
    {letra: 't', status: 0, respuesta: 'tetris', pregunta:'Con la T: El juego creado por Alekséi Pázhitnov en 1984.' },
    {letra: 'u', status: 0, respuesta: 'usb', pregunta:'Con la U: Siglas del bus universal en serie.' },
    {letra: 'v', status: 0, respuesta: 'vhs', pregunta:'Con la V: Sistema doméstico de grabación y reproducción analógica de video.' },
    // {letra: 'w', status: 0, respuesta: 'wifi', pregunta:'Con la W: Tecnología que permite la interconexión inalámbrica de dispositivos electrónicos.' },
    {letra: 'x', status: 0, respuesta: 'xbox', pregunta:'Con la X: Consola de juegos desarrollada y propiedad de Microsoft.' },
    {letra: 'y', status: 0, respuesta: 'yoshi', pregunta:'Con la Y: Dinosaurio híbrido antropomórfico perteneciente a la franquicia de Super Mario.' },
    {letra: 'z', status: 0, respuesta: 'zelda', pregunta:'Con la Z: Juego desarrollado por Nintendo que describe las heroicas aventuras del joven guerrero Link.' },]
    ];
        
var yourName;       // Variable que recoge el nombre del participante
var puntos;
var ranking = [];
var letrasAcertadas = [];
var letrasError = [];
var x = 0;      
var y = 0;      // Y cuenta la pregunta que toca.           
var w = 0;      // W es la variable que gestiona el siguiente objeto de preguntas en el array.
var z = 0;                 
    
        
function introNombre() {            
    yourName = prompt('Bienvenido a PASAPALABRA!' + '\n' + 'Cual es tu nombre?');
    if (yourName == null || yourName == "") {
                    // No hace nada y así se cierra la ventana del PROMPT y se queda en pagina principal
    } else {
        document.getElementById("nombre").innerHTML = yourName;            
        empezar();                                                    
    }                  
}

function empezar() {
    document.getElementById("texto").style.display = 'none';
    document.getElementById("nombre").style.visibility = 'visible';       
    document.getElementById("controles").style.visibility = 'visible';
    document.getElementById("controles").style.display = 'inline';
    document.getElementById("preguntas").style.visibility = 'visible';
    document.getElementById("preguntas").style.display = 'inline';
    document.getElementById("crono").style.visibility = 'visible';
    cuentaRegresiva()
    iniciarPartida();
}

function control() {
    if (y === todasLasPreguntas[x].length) {    // primero comprobamos si estamos en la ultima pregunta del grupro de preguntas 
        x++;
        y = 0;
        iniciarPartida();
    } else {
        iniciarPartida ();
    }
}

function iniciarPartida() {                                 
    if (x < 2) {            // X cuenta la ronda del grupo de preguntas 
        if (z < 24) {           // Z el total de letras contestadas.
            if (todasLasPreguntas[x][y].status < 3) {                   // 0 es la PRIMERA pregunta de cada grupo de preguntas.
                document.getElementById("preguntas").innerHTML = todasLasPreguntas[x][y].pregunta;                                                                                                              
            } else if (y < todasLasPreguntas[x].length) { 
                y++;
                control();
            } else {
                x++;
                y = 0;
                control();
            }           
        } else {            // Aqui Z es igual a 24 o sea que ya se han completado todas las letras.
            salirPasapalabra(2);
        }               
    } else if (x === 2 && z < 24) {
        document.getElementById("aviso").style.visibility = 'visible';
        document.getElementById("pasapalabra").style.display = 'none';          // Ultima ronda de preguntas ya no se puede usar el PASAPALABRA.  
        if (z < 24) {         
            if (todasLasPreguntas[x][y].status < 3) {           
                document.getElementById("preguntas").innerHTML = todasLasPreguntas[x][y].pregunta;                                 
            } else {  
                y++;
                control();
            }    
        } else {
            salirPasapalabra(2);        // Aqui Z es igual a 24 o sea que ya se han completado todas las letras.
        }
    }           
}


var letraVerde;
var letraRoja;
var tuRespuesta;    

function comprobarRespuesta() {
    tuRespuesta = document.getElementById("respuesta").value;    
    tuRespuesta.toString;
    tuRespuesta = tuRespuesta.toLowerCase();    
    if (tuRespuesta === todasLasPreguntas[x][y].respuesta) {    // respuesta correcta y STATUS pasa a 3.
        letraVerde = todasLasPreguntas[x][y].letra;
        document.getElementById(letraVerde + 1).style.visibility = 'visible';  // Visualizamos en Verde la letra correcta.                                                                            
        for (w = x; w < todasLasPreguntas.length; w++) {
            todasLasPreguntas[w][y].status = 3;                         // Aqui marcamos como acertadas todas las letras iguales de les diferentes arrays.
        }
        letrasAcertadas.push(todasLasPreguntas[x][y].letra);
        z++;                                   // Sumamos una letra contestada más al contador.
        y++;                 
    } else if (tuRespuesta === null || tuRespuesta !== todasLasPreguntas[x][y].respuesta ) {
        letraRoja = todasLasPreguntas[x][y].letra;
        document.getElementById(letraRoja + 2).style.visibility = 'visible' // Visualizamos en Rojo la lentra incorrecta.       
        for (w = x; w < todasLasPreguntas.length; w++) {         // respuesta incorrecta y STATUS pasa a 4.
            todasLasPreguntas[w][y].status = 4;
        }
        letrasError.push(todasLasPreguntas[x][y].letra);
        z++;                                    // Sumamos una letra contestda más al contador.
        y++;
    }                                                                        
    limpiaInput();     
}

function limpiaInput() {            // Función para limpiar el INPUT y comprobar si es la última pregunta de todas.
    document.getElementById("respuesta").value = "";
    if (x === 2 && y === todasLasPreguntas[x].length) {
        salirPasapalabra(2);        // Aquí salimos en el caso que se hayan terminado los 3 roscos
    } else if (z === 24) {
        salirPasapalabra(2);        // Aquí salimos en el caso que hayamos completado todas las preguntas        
    } else {
    control();
    }    
}
    
function pasapalabra() {        // PASAPALABRA si el usuario quiere saltar la letra y dejarla para la siguiente ronda.
    todasLasPreguntas[x][y].status = todasLasPreguntas[x][y].status + 1;  // Status passa a 1.
    if (y === 24 && x < 2) {
        x++;
        y = 0;    
    } else {
        y++;
    }    
    control();
}

    
function resultados() {             // Con esta funcion visualizamos las letras ACERTADAS y las FALLADAS
    document.getElementById("acertadas").innerHTML = letrasAcertadas.length;
    document.getElementById("falladas").innerHTML = letrasError.length; 
    rankingTotal();               
}

function statusReset() {     // Con esta funcion ponemos los contadores a 0 para el siguiente participante.
    let g;              // Variable que gestiona el objeto GRUPO de preguntas para resetear el STATUS.
    let i;              // Variable que gestiona la PREGUNTA de cada grupo para resetear el STATUS.
    let h;              // Variable para resetear la visualizacion de las letras verdes y rojas.
    let resetRosco = ""; 
    for (g = 0; g < todasLasPreguntas.length; g++) {
        for (i = 0; i < todasLasPreguntas[g].length; i++){
            todasLasPreguntas[g][i].status = 0;
        }
    }
    letrasAcertadas.splice(0);
    letrasError.splice(0);
    z = 0;
    w = 0;
    y = 0;
    x = 0;    
    document.getElementById("finPartida").style.display = 'none'; 
    document.getElementById("texto").style.display = 'inline';
    document.getElementById("nombre").style.visibility = 'hidden';
    document.getElementById("pasapalabra").style.display = 'inline'; 
    document.getElementById("acertadas").innerHTML = "";
    document.getElementById("falladas").innerHTML = "";
    document.getElementById('crono').innerHTML = '';    
    for (h = 0; h < todasLasPreguntas[0].length; h++) {
        resetRosco = todasLasPreguntas[0][h].letra;
        document.getElementById(resetRosco + 2).style.visibility = 'hidden';
        document.getElementById(resetRosco + 1).style.visibility = 'hidden'; 
    }    
}

function rankingTotal() {
    let p;
    let listaRanking = "";
    ranking.sort(function (a, b) {
        if (a.puntos > b.puntos) {
            return -1;
        }
        if (a.puntos < b.puntos) {
            return 1;
        }
        return 0;
    });    
    for (p = 0; p < ranking.length; p++) {                            
        listaRanking += '<li>'+ ranking[p].nombre + " --- " + ranking[p].puntos +'</li>';
    }
    document.getElementById("listadoJugadores").innerHTML = listaRanking;
}


function salirPasapalabra(m) {
    let j = letrasAcertadas.length;
    if (m === 1) {                      // Salir del programa cuando el usuario pulsa el boton STOP.
        document.getElementById("controles").style.display = 'none';
        document.getElementById("preguntas").style.display = 'none';
        document.getElementById("aviso").style.visibility = 'hidden';
        document.getElementById("finPartida").style.display = 'inline';
        clearInterval(timer);    
        resultados();
    } else if (m === 2) {               // El usuario ha finalizado todas las preguntas o ha completado todas las letras.                
        ranking.push({nombre: yourName, puntos: j});              
        document.getElementById("controles").style.display = 'none';
        document.getElementById("preguntas").style.display = 'none';
        document.getElementById("aviso").style.visibility = 'hidden';
        document.getElementById("finPartida").style.display = 'inline';
        clearInterval(timer);         
        resultados();                            
    }  
}


var timer;
function cuentaRegresiva() {   // Funcion para la cuanta regresiva.
    let minTotales = 5;
    let segTotales = 60;
    document.getElementById('crono').innerHTML = '&nbsp;&nbsp;&nbsp;' + minTotales + ' : 00';   
    
    var sg = segTotales - 1;
    var mn = minTotales - 1;    
    timer = setInterval(mostrarCrono, 1000);

    function mostrarCrono() {      
        if (sg < 10) {
            sg = "0" + sg;
            if (sg == 0){
                document.getElementById('crono').innerHTML = '&nbsp;&nbsp;&nbsp;' + mn + ' : ' + sg;
                mn--;
                sg = 60;
            }
        }
        if (mn < 0) {
            clearInterval(timer);
            salirPasapalabra(2);
            document.getElementById('crono').innerHTML = 'TIEMPO!';
            return;
        } 
        if (sg != 60) {                             
            document.getElementById('crono').innerHTML = '&nbsp;&nbsp;&nbsp;' + mn + ' : ' + sg;
        }    
        sg--;       
    }   
} 

