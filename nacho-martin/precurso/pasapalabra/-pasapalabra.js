//Primero creamos una pseudo base de datos donde almacenar varias preguntas y respuestas por letra
const dataBase = [
    { letter: 'A', definition: ['Resumir. Acortar un discurso o historia.', 'Curiosidad. Carente de relevancia.', 'Serpiente de grandes dimensiones endémica de Sudamérica'], answer: ['abreviar', 'anécdota', 'anaconda'] },
    { letter: 'B', definition: ['Esfera.', 'En singular, tipo de calzado robusto que se usa para la montaña.', 'Vara que se usa para ayudarse a caminar.'], answer: ['bola', 'bota', 'bastón'] },
    { letter: 'C', definition: ['Mensaje que se suele enviar en un sobre.', 'Órgano del sistema nervioso que nos permite pensar.', 'Construir, inventar o fabricar algo.'], answer: ['carta', 'cerebro', 'crear'] },
    { letter: 'D', definition: ['Último día de la semana.', 'Conjunto de animales extintos debido al impacto de un meteorito.', 'Reposar, recuperarse.'], answer: ['domingo', 'dinosaurios', 'descansar'] },
    { letter: 'E', definition: ['Tumbarse. Echarse.', 'Alzar una estatua o monumento.', 'Bolsa o recipiente para guardar utensilios o herramientas.'], answer: ['estirarse', 'erigir', 'estuche'] },
    { letter: 'F', definition: ['Convertir en líquido un sólido.', 'Entrometido. Cotilla.', 'Se dice de algo o alguien que resulta conocido.'], answer: ['fundir', 'fisgón', 'familiar'] },
    { letter: 'G', definition: ['Alarido. Chillido.', 'Felino doméstico.', 'Movimiento artístico posterior al románico.'], answer: ['grito', 'gato', 'gótico'] },
    { letter: 'H', definition: ['Bello. Agraciado.', 'Conjunto de los seguidores o partidarios de una persona o de una causa.', 'Robar. Saquear.'], answer: ['hermoso', 'hueste', 'hurtar'] },
    { letter: 'I', definition: ['Estimular algo para que aumente o mejore.', 'Comienzo de algo.', 'Que no debe o no puede tocarse.'], answer: ['incentivar', 'inicio', 'intangible'] },
    { letter: 'J', definition: ['Terreno donde se cultivan plantas con fines ornamentales.', 'Gradación de personas, valores o dignidades.', 'Adorno de gran valor que suele tener perlas o piedras preciosas.'], answer: ['jardín', 'jerarquía', 'joya'] },
    { letter: 'K', definition: ['Género teatral japonés.', 'Mamífero marsupial parecido a un oso pequeño.', 'Unidad de temperatura termodinámica del sistema internacional.'], answer: ['kabuki', 'koala', 'kelvin'] },
    { letter: 'L', definition: ['Cada uno de los signos gráficos que componen el alfabeto de un idioma.', 'Ave de colores llamativos capaz de repetir palabras.', 'Órgano tubular del aparato fonológico.'], answer: ['letra', 'loro', 'laringe'] },
    { letter: 'M', definition: ['Historia ficticia de carácter legendario.', 'Amante de la música, especialmente de la clásica.', 'Planeta más próximo al Sol.'], answer: ['mito', 'melómano', 'mercurio'] },
    { letter: 'N', definition: ['Niebla poco espesa y baja.', 'Dejar de reconocer algo, no admitir su existencia.', 'Inquieto. Alterado.'], answer: ['neblina', 'negar', 'nervioso'] },
    { letter: 'Ñ', definition: ['Chapuza. Trabajo mal hecho.', 'Soso. Aburrido.', 'Mamífero africano similar al toro.'], answer: ['ñapa', 'ñoño', 'ñu'] },
    { letter: 'O', definition: ['Obra dramática cuyo texto se canta y va acompañada de orquesta.', 'Última letra del alfabeto griego.', 'Decorativo. Que no tiene función práctica.'], answer: ['ópera', 'omega', 'ornamental'] },
    { letter: 'P', definition: ['Recubriemiento velludo de un animal.', 'Poco civilizado. Rudimentario.', 'Hueso de la pierna.'], answer: ['pelaje', 'primitivo', 'peroné'] },
    { letter: 'Q', definition: ['Producto lácteo fermentado.', 'Sala de operaciones médicas.', 'Adivinación de lo concerniente a una persona por las rayas de sus manos.'], answer: ['queso', 'quirófano', 'quiromancia'] },
    { letter: 'R', definition: ['Utensilio que se utiliza para pintar o escribir en diferentes superficies.', 'Movimiento de la Tierra en qué gira sobre sí misma.', 'Forma geométrica de cuatro lados iguales, con dos ángulos obtusos y dos agudos.'], answer: ['rotulador', 'rotación', 'rombo'] },
    { letter: 'S', definition: ['Pieza de papel o de tela que se utiliza para limpiarse.', 'Onda susceptible de ser percibida por el oído humano.', 'Plantar semillas para cultivarlas.'], answer: ['servilleta', 'sonido', 'sembrar'] },
    { letter: 'T', definition: ['Carácter, manera de ser o de reaccionar de las personas.', 'Material desmenuzable de que principalmente se compone el suelo natural.', 'Estruendo, asociado al rayo, producido en las nubes por una descarga eléctrica.'], answer: ['temperamento', 'tierra', 'trueno'] },
    { letter: 'U', definition: ['Despreciar o tratar con desvío a alguien.', 'Animal fabuloso de forma de caballo y con un cuerno recto en mitad de la frente.', 'Institución de enseñanza superior que comprende diversas facultades, y que confiere los grados académicos correspondientes.'], answer: ['ultrajar', 'unicornio', 'universidad'] },
    { letter: 'V', definition: ['En masculino, perteneciente o relativo a la reina Victoria de Inglaterra o a su época.', 'Función pública en que a alguien se le aclama o aplaude una hazaña o acción gloriosa.', 'Lugar cerrado y cubierto construido para ser habitado por personas.'], answer: ['victoriano', 'vítor', 'vivienda'] },
    { letter: 'W', definition: ['Reproductor portátil de casetes provisto de auriculares.', 'Salsa japonesa extremadamente picante', 'Red informática.'], answer: ['walkman', 'wasabi', 'web'] },
    { letter: 'X', definition: ['Tejido leñoso de las plantas vasculares, que transporta principalmente agua y minerales de una parte a otra de estos organismos.', 'Fobia a los extranjeros.', 'Extranjerismo que conserva su grafía original'], answer: ['xilema', 'xenofobia', 'xenismo'] },
    { letter: 'Y', definition: ['Especie de mandioca.', 'Pieza de la armadura antigua que resguardaba la cabeza y el rostro.', 'Árbol de la familia de las dipterocarpáceas, que alcanza hasta 20 m de altura y cuya madera se emplea en construcciones y en ebanistería.'], answer: ['yuca', 'yelmo', 'yacal'] },
    { letter: 'Z', definition: ['Estado del mar o del viento que constituye una amenaza para la navegación.', 'Zapato de madera de una pieza.', 'Bolsa grande de pellejo, que regularmente usan los pastores para guardar y llevar su comida u otras cosas.'], answer: ['zozobra', 'zueco', 'zurrón'] },
];
//En questions, para cada partida se almacenarán una pregunta y su respuesta por letra
const questions = [];
let endGame = false; //Booleano para controlar si el usuario quiere finalizar la partidaa 
let position = 0; //Contador para controlar la letra a preguntar en cada turno
let hits = 0; //Contador de aciertos
let mistakes = 0; //Contador de errores
const user = {}; //Datos del usuario
//Ranking de usuarios
const ranking = [
    { name: 'Eric', hits: 26 },
    { name: 'Sandra', hits: 25 },
    { name: 'Guille', hits: 23 },
    { name: 'Lucas', hits: 22 },
    { name: 'Martina', hits: 21 },
    { name: 'Clara', hits: 20 },
    { name: 'Joan', hits: 19 },
    { name: 'Ana', hits: 17 },
    { name: 'Patri', hits: 16 },
    { name: 'Luis', hits: 14 },
];

function presentacion() { //Función de presentación del juego (se pide el nombre y se explican las reglas)
    user.name = prompt('¡Hola! Indica tu nombre:');
    alert('¡Bienvenido/a, ' + user.name + '! Estás a punto de echar una partida a "Pasapalabra".');
    alert('En cada turno se te presentará una definición de una palabra que empieza con la letra indicada. Deberás escribir tu respuesta en la ventana emergente.');
    alert('Si no estás seguro/a de la respuesta y prefieres dejar esa palabra para más tarde escribe "pasapalabra", de ese modo se te volverá a preguntar más adelante.');
    alert('Si deseas finalizar el juego, escribe "end" en el cuadro de respuestas. Con eso se finalizará el juego y se temostrarán tus resultados.');
    alert('Si finalizas la partida, podrás ver si has logrado entrar en nuestro ranking. ¿Preparado/a? ¡Suerte!');
}

function selectQuestions(min, max) { //Función para seleccionar una pregunta por cada letra para la partida
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

function askQuestion() { //Función para realizar las perguntas
    if (questions[position].status === 0) { //Si la letra todavía no se ha contestado se realiza la pregunta
        let ask = prompt(`Con la ${questions[position].letter}: ${questions[position].definition}`);
        if (ask !== null) {
            switch (ask.toLowerCase()) {
                case questions[position].answer: //En caso de acierto
                    alert('¡Correcto!');
                    questions[position].status = 1;
                    hits++;
                    break;

                case 'pasapalabra': //En caso de que el jugador pase palabra el status de la pregunta sigue en 0 para volver a preguntarla

                    break;

                case 'end': //En caso que el jugador indique que quiere acabar el indicador de finalizar cambia a true
                    endGame = true;
                    break;

                default: //Cualquier otra respuesta se considera un fallo
                    alert(`¡No! La respuesta es ${questions[position].answer}.`)
                    questions[position].status = 2;
                    mistakes++;
            }
        } else {
            alert('Por favor, escribe tu respuesta, utiliza \'pasapalabra\' o escribe \'end\' para finalizar el juego');
            askQuestion();
        }


    }

}

function round() { //Función para ejecutar las rondas
    do {
        askQuestion(); //Se llama a la función de las preguntas
        position < 26 ? position++ : position = 0; //Se actualiza la posición del rosco
    } while (!endGame && questions.some(question => question.status === 0));
    /*Se realiza la función mientras haya preguntas 
       sin contestar y el usuario no indique que desea finalizar*/
}

function results() { // Función para registrar los datos del usuario
    user.hits = hits;
    alert(`¡Enhorabuena, ${user.name}! Has logrado acertar ${hits} palabras, y has fallado ${mistakes}`);

}

function showRanking() { // Función para mostrar el ranking
    for (let i = 0; i < ranking.length; i++) {
        if (ranking.length < 11) { //Si la puntuación del usuario es mayor a la de un puesto del ranking se almacena en su sitio.
            if (user.hits > ranking[i].hits) {
                ranking.splice(i, 0, user)
            }
        }
    }
    if (ranking.length > 10) { //Si se ha añadido al usuario se elimina el último puesto del ranking
        ranking.pop();
    }
    console.table(ranking);
}

function pasapalabra() { //El juego
    presentacion(); //Introducción

    selectQuestions(0, 2); //Se eligen las preguntas

    round(); //Se realizan las preguntas

    results(); //Se guarda la puntuación

    if (!endGame) { //Si la partida acaba porque no quedan más letras se muestra el ranking, pero si el usuario ha acabado antes no se muestra
        showRanking();
    }
}

pasapalabra();