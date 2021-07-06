//Primero creamos una pseudo base de datos donde almacenar varias preguntas y respuestas por letra
const dataBase = [
    { letter: 'A', definition: ['Resumir. Acortar un discurso o historia.', 'Curiosidad. Carente de relevancia.', 'Serpiente de grandes dimensiones endémica de Sudamérica'], answer: ['abreviar', 'anecdota', 'anaconda'] },
    { letter: 'B', definition: ['Esfera.', 'En singular, tipo de calzado robusto que se usa para la montaña.', 'Vara que se usa para ayudarse a caminar.'], answer: ['bola', 'bota', 'baston'] },
    { letter: 'C', definition: ['Mensaje que se suele enviar en un sobre.', 'Órgano del sistema nervioso que nos permite pensar.', 'Construir, inventar o fabricar algo.'], answer: ['carta', 'cerebro', 'crear'] },
    { letter: 'D', definition: ['Último día de la semana.', 'Conjunto de animales extintos debido al impacto de un meteorito.', 'Reposar, recuperarse.'], answer: ['domingo', 'dinosaurios', 'descansar'] },
    { letter: 'E', definition: ['Tumbarse. Echarse.', 'Alzar una estatua o monumento.', 'Bolsa o recipiente para guardar utensilios o herramientas.'], answer: ['estirarse', 'erigir', 'estuche'] },
    { letter: 'F', definition: ['Convertir en líquido un sólido.', 'Entrometido. Cotilla.', 'Se dice de algo o alguien que resulta conocido.'], answer: ['fundir', 'fisgon', 'familiar'] },
    { letter: 'G', definition: ['Alarido. Chillido.', 'Felino doméstico.', 'Movimiento artístico posterior al románico.'], answer: ['grito', 'gato', 'gotico'] },
    { letter: 'H', definition: ['Bello. Agraciado.', 'Conjunto de los seguidores o partidarios de una persona o de una causa.', 'Robar. Saquear.'], answer: ['hermoso', 'hueste', 'hurtar'] },
    { letter: 'I', definition: ['Estimular algo para que aumente o mejore.', 'Comienzo de algo.', 'Que no debe o no puede tocarse.'], answer: ['incentivar', 'inicio', 'intangible'] },
    { letter: 'J', definition: ['Terreno donde se cultivan plantas con fines ornamentales.', 'Gradación de personas, valores o dignidades.', 'Adorno de gran valor que suele tener perlas o piedras preciosas.'], answer: ['jardin', 'jerarquia', 'joya'] },
    { letter: 'K', definition: ['Género teatral japonés.', 'Mamífero marsupial parecido a un oso pequeño.', 'Unidad de temperatura termodinámica del sistema internacional.'], answer: ['kabuki', 'koala', 'kelvin'] },
    { letter: 'L', definition: ['Cada uno de los signos gráficos que componen el alfabeto de un idioma.', 'Ave de colores llamativos capaz de repetir palabras.', 'Órgano tubular del aparato fonológico.'], answer: ['letra', 'loro', 'laringe'] },
    { letter: 'M', definition: ['Historia ficticia de carácter legendario.', 'Amante de la música, especialmente de la clásica.', 'Planeta más próximo al Sol.'], answer: ['mito', 'melomano', 'mercurio'] },
    { letter: 'N', definition: ['Niebla poco espesa y baja.', 'Dejar de reconocer algo, no admitir su existencia.', 'Inquieto. Alterado.'], answer: ['neblina', 'negar', 'nervioso'] },
    { letter: 'Ñ', definition: ['Chapuza. Trabajo mal hecho.', 'Soso. Aburrido.', 'Mamífero africano similar al toro.'], answer: ['napa', 'nono', 'nu'] },
    { letter: 'O', definition: ['Obra dramática cuyo texto se canta y va acompañada de orquesta.', 'Última letra del alfabeto griego.', 'Decorativo. Que no tiene función práctica.'], answer: ['opera', 'omega', 'ornamental'] },
    { letter: 'P', definition: ['Recubriemiento velludo de un animal.', 'Poco civilizado. Rudimentario.', 'Hueso de la pierna.'], answer: ['pelaje', 'primitivo', 'perone'] },
    { letter: 'Q', definition: ['Producto lácteo fermentado.', 'Sala de operaciones médicas.', 'Adivinación de lo concerniente a una persona por las rayas de sus manos.'], answer: ['queso', 'quirofano', 'quiromancia'] },
    { letter: 'R', definition: ['Utensilio que se utiliza para pintar o escribir en diferentes superficies.', 'Movimiento de la Tierra en qué gira sobre sí misma.', 'Forma geométrica de cuatro lados iguales, con dos ángulos obtusos y dos agudos.'], answer: ['rotulador', 'rotacion', 'rombo'] },
    { letter: 'S', definition: ['Pieza de papel o de tela que se utiliza para limpiarse.', 'Onda susceptible de ser percibida por el oído humano.', 'Plantar semillas para cultivarlas.'], answer: ['servilleta', 'sonido', 'sembrar'] },
    { letter: 'T', definition: ['Carácter, manera de ser o de reaccionar de las personas.', 'Material desmenuzable de que principalmente se compone el suelo natural.', 'Estruendo, asociado al rayo, producido en las nubes por una descarga eléctrica.'], answer: ['temperamento', 'tierra', 'trueno'] },
    { letter: 'U', definition: ['Despreciar o tratar con desvío a alguien.', 'Animal fabuloso de forma de caballo y con un cuerno recto en mitad de la frente.', 'Institución de enseñanza superior que comprende diversas facultades, y que confiere los grados académicos correspondientes.'], answer: ['ultrajar', 'unicornio', 'universidad'] },
    { letter: 'V', definition: ['En masculino, perteneciente o relativo a la reina Victoria de Inglaterra o a su época.', 'Función pública en que a alguien se le aclama o aplaude una hazaña o acción gloriosa.', 'Lugar cerrado y cubierto construido para ser habitado por personas.'], answer: ['victoriano', 'vitor', 'vivienda'] },
    { letter: 'W', definition: ['Reproductor portátil de casetes provisto de auriculares.', 'Salsa japonesa extremadamente picante', 'Red informática.'], answer: ['walkman', 'wasabi', 'web'] },
    { letter: 'X', definition: ['Tejido leñoso de las plantas vasculares, que transporta principalmente agua y minerales de una parte a otra de estos organismos.', 'Fobia a los extranjeros.', 'Extranjerismo que conserva su grafía original'], answer: ['xilema', 'xenofobia', 'xenismo'] },
    { letter: 'Y', definition: ['Especie de mandioca.', 'Pieza de la armadura antigua que resguardaba la cabeza y el rostro.', 'Árbol de la familia de las dipterocarpáceas, que alcanza hasta 20 m de altura y cuya madera se emplea en construcciones y en ebanistería.'], answer: ['yuca', 'yelmo', 'yacal'] },
    { letter: 'Z', definition: ['Estado del mar o del viento que constituye una amenaza para la navegación.', 'Zapato de madera de una pieza.', 'Bolsa grande de pellejo, que regularmente usan los pastores para guardar y llevar su comida u otras cosas.'], answer: ['zozobra', 'zueco', 'zurron'] },
];
//En questions, para cada partida se almacenarán una pregunta y su respuesta por letra
let questions = [];
const pregunta = document.querySelector('.definicion');
let numPregunta = 0;
let respuesta = "";
let tiempo;
let preguntasContestadas = 0;
let primeraPartida = true;

let endGame = false; //Booleano para controlar si el usuario quiere finalizar la partidaa 
let position = 0; //Contador para controlar la letra a preguntar en cada turno
let hits = 0; //Contador de aciertos
let mistakes = 0; //Contador de errores
let player = "";

//Ranking de usuarios
const ranking = [
    { name: 'Eric', hits: 26, mistakes: 1 },
    { name: 'Sandra', hits: 25, mistakes: 1 },
    { name: 'Guille', hits: 23, mistakes: 2 },
    { name: 'Lucas', hits: 22, mistakes: 1 },
    { name: 'Martina', hits: 21, mistakes: 3 },
    { name: 'Clara', hits: 20, mistakes: 2 },
    { name: 'Joan', hits: 19, mistakes: 3 },
    { name: 'Ana', hits: 17, mistakes: 5 },
    { name: 'Patri', hits: 16, mistakes: 4 },
    { name: 'Luis', hits: 14, mistakes: 6 },
];

//Primera sección: Esta sección corresponde al pre-juego. En ella se presenta el mismo y se solicita al usuario los datos para empezar
function establecerDatos() { //Función para establecer el tiempo de partida
    const cuadroTiempo = document.querySelector('#cuadroTiempo')
    const usuario = document.querySelector('#cuadroNombre')
    cuadroTiempo.addEventListener('input', (e) => { // Se va validando la cantidad de segundos que escribe el jugador
        tiempo = parseInt(e.target.value); //Se pasan a números los segundos y se establece el valor de tiempo 
    })
    usuario.addEventListener('input', (e) => { //Se guarda el nombre del jugador
        player = e.target.value;
    })
}
establecerDatos();

function empezarPartida() { //Función para iniciar la partida
    const intro = document.querySelector('.presentacion'); //Elementos html que usa la función
    const juego = document.querySelector('.juego');
    if (player != "" && tiempo && tiempo > 0) { //Si el usuario escribe un nombre y un tiempo válido inicia la partida
        intro.classList.remove('seccionActual');
        juego.classList.add('seccionActual');
        partida();
    } else if (player != "") { //En caso de que el tiempo no sea válido se avisa durante 3s al jugador de que debe escribir un tiempo válido
        const alerta = document.createElement('P'); //Se crea el HTML
        alerta.textContent = 'El tiempo debe ser un número mayor a 0' //Se le da contenido
        alerta.classList.add('noHayTiempo') //Se añaden las clases necesarias
        intro.appendChild(alerta); //Se introduce el html donde corresponda

        //*Nota: A lo largo del código se repite esta mecánica para crear HTML por lo que estos mismos comentarios se pueden aplicar al resto de casos.

        setTimeout(() => { //Se elimina el aviso a los 3s
            alerta.remove();
        }, 3000);
    } else { //Si no ha escrito su nombre también se le avisa
        const alerta = document.createElement('P');
        alerta.textContent = 'El nombre no puede estar vacío'
        alerta.classList.add('noHayTiempo')
        intro.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}

//Segunda sección: Correspondiente a la partida.  
function seleccionarPreguntas(min, max) { //Función para seleccionar una pregunta por cada letra para la partida
    for (let i = 0; i <= 26; i++) {
        let question = {}; //Se crea un objeto en el que se almacenará la info de la pregunta
        let option = Math.floor(Math.random() * (max - min + 1)) + min; //Se genera un nº aleatorio dentro del rango de preguntas por letra
        question.letter = dataBase[i].letter; //Se almacena la info de la pregunta en el objeto pregunta
        question.definition = dataBase[i].definition[option];
        question.answer = dataBase[i].answer[option];
        question.status = 0;
        questions.push(question); //Se almacena la pregunta en el array questions
    }
}

function borrarClase() { //Función para eliminar la clase actual y cambiar el color de la letra a azul
    for (let i = 0; i <= 26; i++) { //Se recorren todas las posiciones para encontrar el elemento con la clase preguntaActual y se elimina dicha clase
        let preguntaAnterior = document.querySelector('#l' + i);
        if (preguntaAnterior.classList.contains('preguntaActual')) {
            preguntaAnterior.classList.remove('preguntaActual')
        }
    }
}

function mostrarPregunta() { //Función para mostrar la pregunta actual y cambiar la letra a color amarillo
    borrarClase();
    if (questions[numPregunta].status == 0) { //Si la pregunta no se ha contestado ejecuta la función
        let letra = document.querySelector('#l' + numPregunta)
        letra.classList.add('preguntaActual');
        pregunta.textContent = questions[numPregunta].definition;
    } else { //Si la pregunta ya había sido contestada pasa a la siguiente llamando a la función pasapalabra
        pasapalabra();
    }

}

function cambiarPregunta() { //Función para actualizar el contador de pregunta
    if (numPregunta < 26) {
        numPregunta++;
    } else {
        numPregunta = 0;
    }
}

function obtenerRespuesta() { //Función para obtener la respuesta introducida por el usuario
    const texto = document.querySelector('#cuadroRespuesta')

    texto.addEventListener('change', (e) => { //A través de un eventListener se aobtiene el valor de la respuesta y se almacena
        respuesta = e.target.value;
    })
}

function validarRespuesta() { //Función para validar la respuesta del usuario
    respuesta = respuesta.normalize("NFD").replace(/[\u0300-\u036f]/g, "") //Se eliminan caracteres especiales para aceptar palabras con o sin acento (esto tambien elimina la 'ñ' por lo que se ha sustituido por una 'n' en las respuestas)
    if (respuesta.toLowerCase() === questions[numPregunta].answer) { //En caso de acierto la pregunta pasa a status 1
        questions[numPregunta].status = 1;
        mostrarMensaje('¡Correcto!') //Se muestra un mensaje de acierto
        hits++; //Se suma un acierto al usuario

        let letra = document.querySelector('#l' + numPregunta)
        letra.classList.add('acierto');

    } else {
        questions[numPregunta].status = 2; //En caso de fallo la pregunta pasa a status 2
        mostrarMensaje(`¡Lástima! La respuesta era ${questions[numPregunta].answer}`) //Se muestra la respuesta correcta
        mistakes++; //Se suma un fallo al usuario

        let letra = document.querySelector('#l' + numPregunta)
        letra.classList.add('error');
    }
    contador();
}

function contador() { //Función para actualizar el número de aciertos en pantalla
    const contadorAciertos = document.querySelector('.contadorAciertos');
    contadorAciertos.textContent = hits;
}

function limpiarTexto() { //Función para borrar el contenido del cuadro de respuesta
    const texto = document.querySelector('#cuadroRespuesta')
    texto.value = ""; //Se elimina el texto del cuadro
    respuesta = ""; //Se elimina la respuesta para que no de falsos resultados
}

function pasapalabra() { //Función para el botón pasapalabra
    limpiarTexto(); //Se borra el cuadro de respuesta
    cambiarPregunta(); //Se actualiza el número de pregunta
    mostrarPregunta(); //Se muestra la nueva definicón
}

function mostrarMensaje(mensaje) { //Función para comunicar al usuario el estado de su respuesta
    const alerta = document.createElement('P'); //Elementos html que usa la función
    const rosco = document.querySelector('.rosco');

    alerta.classList.add('alerta');
    alerta.textContent = mensaje; //El contenido del mensaje es dinámico en función de la respuesta
    rosco.appendChild(alerta);

    setTimeout(() => { //A los 1.5s se borra el mensaje
        alerta.remove();
    }, 1500);
}

function ronda() { //Función para el botón de enviar respuesta
    if (respuesta !== "") { //Si hay respuesta se validará si es correcta o no y se pasará a la siguiente pregunta
        preguntasContestadas++;
        validarRespuesta();
        if (preguntasContestadas < 27) {
            cambiarPregunta();
            mostrarPregunta();
        }
        limpiarTexto();
    } else { //Si el cuadro de respuesta está vacío se le indica al jugador que debe responder 
        mostrarMensaje('La respuesta no puede estar vacía');
    }
    finPartida();
}

function responderConEnter() { //Función para responder al apretar la tecla enter
    document.querySelector("#cuadroRespuesta")
        .addEventListener("keyup", function(event) { //Al presionar enter desde el cuadro de respuestas se hace click en el botón de responder
            event.preventDefault();
            if (event.code === 'Enter') {
                document.querySelector("#responder").click();
            }
        });
}

function temporizador() { //Función para controlar el tiempo
    let reloj = document.querySelector('.tiempo');
    const crono = setInterval(() => { //Se crea un temporizador que se actualizará a cada segundo
        if (tiempo >= 0) { //Mientras quede tiempo se mostrará el tiempo restante en pantalla y se reducirá en 1 el tiempo
            reloj.textContent = `${tiempo}`;
            tiempo--;
            if (preguntasContestadas == 27) {
                clearInterval(crono);
            }
        } else { //Al finalizar el tiempo se avisa al jugador y se detiene el temporizador
            tiempoCero();
            clearInterval(crono);
        }
    }, 1000);
}

function partida() { //Función para iniciar la partida
    temporizador(); //Se inicia el temporizador
    seleccionarPreguntas(0, 2); //Se seleccionan las preguntas
    mostrarPregunta(); //Se muestra la 1a pregunta
    obtenerRespuesta(); //Se llama a la función para "leer" las respuestas
    if (primeraPartida) {
        responderConEnter(); //Se inicia la opción de responder apretando Enter
        primeraPartida = false;
    }
}

function tiempoCero() { //Función para alertar que se ha acabado el tiempo
    const juego = document.querySelector('.juego'); //Elementos html que usa la función
    const aviso = document.querySelector('.finTiempo');
    juego.classList.remove('seccionActual');
    aviso.classList.add('seccionActual'); //Se cambia de sección
    mostrarResultado(); //Se llama a la función para mostrar los resultados
}

function finPartida() { //Función para finalizar si acaba el rosco
    const juego = document.querySelector('.juego'); //Elementos html que usa la función
    if (preguntasContestadas === 27) { //Si se han respondido las 27 preguntas se espera 1.5s y se pasa a mostrar la sección de resultados
        setTimeout(() => {
            juego.classList.remove('seccionActual');
            mostrarResultado();
        }, 1500);

    }
}

function pasandoAResultados() { //Esta función sirve para pasar de la sección de notificación de que se ha acabado el tiempo a los resultados en sí
    const aviso = document.querySelector('.finTiempo');
    return new Promise(resolve => { //Se devuelve una promesa para más tarde hacer uso de una función asíncrona
        setTimeout(() => {
            resolve(aviso.classList.remove('seccionActual'));
        }, 1500);
    })
}

//Tercera sección: Esta sección contiene los elementos de post-partida. Se ven los resultados y se da la opción de iniciar un nuevo juego
function crearPerfil() { //Función para crear el html de los datos del usuario
    const usuarioAntiguo = document.querySelector('.usuarioRegistrado');
    if (usuarioAntiguo) { //Si no es la 1a partida se eliminará el html con los datos anteriores del usuario
        usuarioAntiguo.remove();
    }
    const seccion = document.querySelector('.ranking'); //Se crea el html 
    const usuario = document.createElement('P');
    usuario.classList.add('usuarioRegistrado', 'marco');
    usuario.textContent = `Jugador/a: ${player}. Aciertos: ${hits} Fallos: ${mistakes}.`
    seccion.appendChild(usuario);
}

function showRanking() { // Función para mostrar el ranking
    const user = { //Datos del usuario
        name: "",
        hits: 0,
        mistakes: 0
    };
    const rankingAnterior = document.querySelector('.rankingPartida');
    if (rankingAnterior) { //Se elimina el ranking de partidas anteriores si lo hay
        rankingAnterior.remove();
    }
    user.name = player;
    user.hits = hits;
    user.mistakes = mistakes;
    for (let i = 0; i < ranking.length; i++) {
        if (ranking.length < 11) {
            if (user.hits > ranking[i].hits) {
                ranking.splice(i, 0, user) //Si la puntuación del usuario es mayor a la de un puesto del ranking se almacena en su sitio.
            } else if (user.hits == ranking[i].hits) {
                if (user.mistakes < ranking[i].mistakes) { //Si hay empate en aciertos se comprueba el número de errores para actualizar el ranking
                    ranking.splice(i, 0, user)
                }
            }
        }
    }
    if (ranking.length > 10) { //Si se ha añadido al usuario se elimina el último puesto del ranking
        ranking.pop();
    }
    const seccion = document.querySelector('.ranking'); //Se crea el html del ranking 
    const tablaTitulo = document.createElement('H3'); //Título
    tablaTitulo.textContent = 'Ranking';
    const tabla = document.createElement('DIV'); //Un contenedor para el ranking
    tabla.appendChild(tablaTitulo);
    tabla.classList.add('rankingPartida', 'marco');
    seccion.appendChild(tabla);
    for (let i = 0; i < ranking.length; i++) { //Los elementos del ranking
        const usuario = document.createElement('P');
        usuario.textContent = `${i+1}º: ${ranking[i].name}, con ${ranking[i].hits} aciertos y ${ranking[i].mistakes} fallos.`
        tabla.appendChild(usuario);
    }
}

async function mostrarResultado() { //Función asíncrona para mostrar los resultados
    const resultado = document.querySelector('.resultado');
    await pasandoAResultados() //Se espera a que termine la función para que el mensaje de que acabó el tiempo se vea 1,5s en pantalla antes de los resultados
    crearPerfil(); //Los datos del usuario
    showRanking(); //El ranking
    resultado.classList.add('seccionActual');
}

function nuevaPartida() { //Función para jugar de nuevo
    const intro = document.querySelector('.presentacion') //Elementos html que usa la función
    const resultados = document.querySelector('.resultado');
    const tiempo = document.querySelector('#cuadroTiempo');
    const contadorAciertos = document.querySelector('.contadorAciertos');
    let reloj = document.querySelector('.tiempo');
    tiempo.value = "";

    limpiarTexto() //Se restablecen las variables necesarias para empezar de nuevo
    questions = [];
    hits = 0;
    mistakes = 0;
    preguntasContestadas = 0;
    reloj.textContent = "";
    contadorAciertos.textContent = hits;
    for (let i = 0; i < 27; i++) {
        const letra = document.querySelector('#l' + i)
        letra.classList.remove('acierto');
        letra.classList.remove('error');
        numPregunta = 0;
    }

    resultados.classList.remove('seccionActual'); //Se muestra de nuevo la presentación para elegir el tiempo (el nombre se guarda, pero se podrá cambiar a elección del usuario)
    intro.classList.add('seccionActual');
}