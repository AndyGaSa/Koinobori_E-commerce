//Variables globales:
const questions = [

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

    { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"}, 
]
    
let contador = 1;
let contadorPreguntas;
let numAciertos = 0;
let numFallos = 0;
let nombre;

const jugadores = {
    "jugador1":{
        "Nombre":"Pere Ripoll",
        "Aciertos": 27,
        "Fallos":0
    }
}

const ranking = {
    "jugador1":{
        "Nombre":"Pere Ripoll",
        "Aciertos": 27,
        "Fallos":0
    }
}

menu();

//Menú del juego
function menu() {
    let volver;
    let accio = parseInt(prompt("Bienvenido a Pasapalabra!!! \n" + 
    "Que quieres hacer? \n" + 
    "Jugar -- pulsar 1 \n" +
    "Ver jugadores -- pulsar 2 \n" +
    "Ver ranquing de jugadores -- pulsar 3 \n" + 
    "Saalir del programa -- pulsar 4"));

    switch (accio) {
        case 1:
            pasapalabra();
            break;
        case 2:
            console.table(jugadores);
            volver = window.confirm("Volver al menú?");
            if(volver){
                menu();
            }else{
                console.log("Se ha cerrado el programa!");
            }
            break;
        case 3:
            mostrarRanking();
            volver = window.confirm("Volver al menú?");
            if(volver){
                menu();
            }else{
                console.log("Se ha cerrado el programa!");
            }
            break;
        case 4:
            console.log("Adios!");
            break;
        default:
            console.log("Valor INCORRECTO!!!");
            menu();
    }

}
    
    
    //función "main" del programa
    function pasapalabra() {
        contadorPreguntas = 0;
        contador++;
        let empezar;

        //Se pide el nombre al usuario y se añade al ranking
        nombre = login();
        jugadores["jugador"+contador]={"Nombre":nombre, "Aciertos":0, "Fallos":0};

        //Preguntamos al usuario si quiere empezar:
        empezar = window.confirm("Empezamos?");
        if (empezar) {
            console.log("Empezamos!");
            for(let k = 0; k < questions.length; k++){
                questions[k].status = 0;
            }
            numAciertos = 0;
            numFallos = 0;
            generarPregunta();
        }else{
            let cerrar = window.confirm("Quieres cerrar el juego?");
            if(!cerrar){
                pasapalabra();
            }else{
                console.log("Vuelva pronto!");
            }
        }
    }
    
    //Función para solicitar el nombre al usuario
    function login() {
        let check = false;
        let verificacion; 
    
        //Se pide el nombre al usuario
        let nombre = prompt("Bievenido a Pasapalabra \n" + 
        "Por favor introduzca su nombre:");
    
        //Bucle do... while para verificar si el nombre introducido es correcto
        do {
            verificacion = prompt("Su nombre es: " + nombre + " ?  y/n");
            if(verificacion !== null){
                if (verificacion.toLowerCase().localeCompare("y") === 0) {
                    console.log("Bienvenido " + nombre);
                    check = true;
                }else if (verificacion.toLowerCase().localeCompare("n") === 0){
                    check = true;
                    login();
                }else{
                    alert("Error!, valor no aceptable");
                }
            }else{
                check = true;
                login();
            }
    
        } while (!check);
    
        return nombre;
    }

    //función para mostrar las preguntas al usuario y gestionar la respuesta
    function generarPregunta() {
        let respuesta;
        let solucion;

        //Si el contadorPreguntas < a la dimensión del array es qu ehay preguntas pendientes de responder.
        if (contadorPreguntas < questions.length) {
            //Se revisa el estado. 0 -> no respondido | 1 -> acierto | 2 -> Fallo. si es 0 ejecutamos la condición
            if (questions[contadorPreguntas].status == 0) {
                //Se asgina la respuesta del usuario a la variable respuesta y la solución a la variable solución.
                respuesta = prompt(questions[contadorPreguntas].question);
                solucion = (questions[contadorPreguntas].answer).toLowerCase();
    
                if(respuesta !== null){
                    //Si acierta:
                    if (respuesta.toLowerCase().localeCompare(solucion) == 0) {
                        numAciertos++;
                        console.log("Has ACERTADO!");
                        questions[contadorPreguntas].status = 1;
                        contadorPreguntas++;
                        generarPregunta();
        
                    //Si pasapalabra:
                    }else if(respuesta.toLowerCase().localeCompare("pasapalabra") == 0){
                        console.log("Pasamos palabra");
                        contadorPreguntas++;
                        generarPregunta();
        
                    //Si falla:
                    }else{
                        numFallos++;
                        console.log("Has fallado!");
                        questions[contadorPreguntas].status = 2;
                        contadorPreguntas++;
                        generarPregunta();
                    }
                }else{
                    console.log("El usuario ha cerrado el programa");
                    console.log("Numero de aciertos: " + numAciertos + "\n" +
                    "Numero de fallos: " + numFallos);
                    jugadores["jugador"+contador].Aciertos = numAciertos;
                    jugadores["jugador"+contador].Fallos = numFallos;
                    console.log("Regresamos al menú");
                    menu();
                }
    
            }else{
                contadorPreguntas++;
                //Primero se revisa si hay preguntas pendientes de responder desde la posición actual.
                if(pendentRespondre(contadorPreguntas) !== -1){
                    contadorPreguntas = pendentRespondre(contadorPreguntas);
                    generarPregunta();

                //Si no, se revisa desde la posición inicial.
                }else if(pendentRespondre(0) !== -1){
                    contadorPreguntas = pendentRespondre(0);
                    generarPregunta();

                //No hay preguntas pendientes de responder.
                }else{
                    contadorPreguntas = 0;
                    console.log("Has terminado, tu resultado ha sido el siguiente:");
                    console.table("Numero de aciertos: " + numAciertos + "\n" +
                    "Numero de fallos: " + numFallos);
                    jugadores["jugador"+contador].Aciertos = numAciertos;
                    jugadores["jugador"+contador].Fallos = numFallos;
                    ranking["jugador"+contador]={"Nombre":nombre, "Aciertos":numAciertos, "Fallos":numFallos};
                    menu();
                }
            }
        }else{
            /*Se ha llegado al final. Para verificar que no haya palabras pendientes de responder
            inicializamos el contador y lanzamos de nuevo la función*/
            contadorPreguntas = 0;
            generarPregunta();
        }
        
        //Función para revisar si hay preguntas pendientes de responder
        function pendentRespondre(num) {
            let pendent = -1;
            for (let i = num; i < questions.length; i++) {
                if(questions[i].status === 0){
                    pendent = i;
                    break;
                }
            }
            return pendent;
        }

    }

function mostrarRanking() {
    let arr = []
    let rankingarr = []
    for(const jug in ranking){
        let result = (ranking[jug].Aciertos)-(ranking[jug].Fallos);
        arr.push(result);
    }
    
    arr.sort(function(a, b){return b - a});
    
    for(const jug in ranking){
        let result = (ranking[jug].Aciertos)-(ranking[jug].Fallos);
        rankingarr[arr.indexOf(result)] =  ranking[jug].Nombre;
    }
    
    for (let i = 0; i < rankingarr.length; i++) {
        let pos = parseInt(i) + parseInt(1);
        console.log("En la posición " + pos + " se encuentra " + rankingarr[i]);
    }
}
