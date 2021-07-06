//Función de un ranking ficticio
let rank = [
    { nombre: 'Francesc', puntuacion: 17 },
    { nombre: 'Maki', puntuacion: 25 },
    { nombre: 'Serafín', puntuacion: 21 }
];
//Defino 3 array con preguntas diferentes. Siempre defino con 'let' pero si no ponía 'var', la consola del chrome me daba fallos. Aún no he entendido bien por qué.
var questionsRandom1 = [
    { a: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien" },
    { b: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso" },
    { c: "CON LA C. Niño, crío, bebé" },
    { d: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida" },
    { e: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación" },
    { f: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad" },
    { g: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas" },
    { h: "CON LA H. Suicidio ritual japonés por desentrañamiento" },
    { i: "CON LA I. Templo cristiano" },
    { j: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba" },
    { k: "CON LA K. Persona que se juega la vida realizando una acción temeraria" },
    { l: "CON LA L. Hombre lobo" },
    { m: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas" },
    { n: "CON LA N. Demostración de poca inteligencia" },
    { ñ: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo" },
    { o: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien" },
    { p: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft" },
    { q: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche" },
    { r: "CON LA R. Roedor" },
    { s: "CON LA S. Comunidad salvadora de todo desarrollador informático" },
    { t: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984" },
    { u: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914" },
    { v: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa" },
    { w: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso" },
    { x: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética" },
    { y: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos" },
    { z: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional" }
];
var questionsRandom2 = [
    { a: "CON LA A. Alejar un miembro o una región del cuerpo del plano medio que divide imaginariamente el organismo en dos partes simétricas" },
    { b: "CON LA B. Juego de azar semejante a la lotería en el que cada jugador debe completar los números de su cartón según van saliendo en el sorteo, y en el que gana el que antes completa todos" },
    { c: "CON LA C. Niño, muchacho" },
    { d: "CON LA D. Síntoma o fenómeno morboso que consiste en evacuaciones de vientre líquidas y frecuentes" },
    { e: "CON LA E. Emanación visible del cuerpo del médium" },
    { f: "CON LA F. Dicho de un suceso: Bastante probable" },
    { g: "CON LA G. Agrupación de estrellas, cuerpos celestes y materia cósmica que está concentrada en una determinada región del espacio por efecto de la atracción gravitatoria y constituye una unidad en el universo" },
    { h: "CON LA H. Forma de suicidio ritual, practicado en el Japón por razones de honor o por orden superior, consistente en abrirse el vientre" },
    { i: "CON LA I. Congregación de los fieles cristianos en virtud del bautismo" },
    { j: "CON LA J. Mamífero paquidermo de la familia del cerdo, de unos 110 a 150 cm de longitud, pelaje tupido y fuerte de color marrón o gris, cuello robusto, orejas tiesas, cabeza y hocico agudos, y dos colmillos curvos que le sobresalen de la boca" },
    { k: "CON LA K. En la Segunda Guerra Mundial, piloto suicida japonés que tripulaba un avión con explosivos con el que se lanzaba contra un objetivo" },
    { l: "CON LA L. Persona que, según la tradición popular, se convierte en lobo las noches de plenilunio" },
    { m: "CON LA M. Humano que siente aversión al trato con personas." },
    { n: "CON LA N. Dicho o hecho necio" },
    { ñ: "CONTIENE LA Ñ. Signo o medio que se emplea para luego acordarse de algo" },
    { o: "CON LA O. Una de las razas clásicas de el videojuego World of Warcraft" },
    { p: "CON LA P. Una de las tres razas del videojuego StarCraft, junto con los Zerg y los Terran" },
    { q: "CON LA Q. Producto obtenido por maduración de la cuajada de la leche con características propias para cada uno de los tipos según su origen o método de fabricación" },
    { r: "CON LA R. Mamífero roedor de pequeño tamaño, de hocico puntiagudo y cola larga, de pelaje corto" },
    { s: "CON LA S. Sitio que contiene preguntas y respuestas sobre una amplia gama de temas de programación" },
    { t: "CON LA T. Película que consolidó a Arnold Schwarzenegger como actor en 1984" },
    { u: "CON LA U. Escritor y filósofo español perteneciente a la generación del 98" },
    { v: "CON LA V. Dicho de una persona: De los pueblos navegantes escandinavos que entre los siglos VIII y XI realizaron incursiones por las islas del Atlántico y por casi toda la Europa occidental" },
    { w: "CONTIENE LA W. Especie de bocadillo hecho con dos o más rebanadas de pan de molde entre las que se pone algún tipo de alimento; se puede tomar frío o caliente" },
    { x: "CONTIENE LA X. Sustancia tóxica que produce parálisis muscular y que se utiliza con fines médicos y estéticos" },
    { y: "CONTIENE LA Y. Planta cactácea no espinosa, de pequeño tamaño y cubierta de pelos sedosos que contiene mescalina, alcaloide que produce efectos narcóticos" },
    { z: "CON LA Z. Escuela budista que tiende a alcanzar la iluminación espiritual mediante la meditación que no se somete al conocimiento intelectual y a sus conceptos" }
];
var questionsRandom3 = [
    { a: "CON LA A. Dicho de una persona o de una creación humana: Suscitar en alguien una poderosa atracción" },
    { b: "CON LA B. Indica que se ha solucionado o acertado algo" },
    { c: "CON LA C. Forma coloquial de llamar a un niño, muchacho" },
    { d: "CON LA D. Deposición, tres o más veces al día (o con una frecuencia mayor que la normal para la persona) de heces sueltas o líquidas" },
    { e: "CON LA E. Parte externa del citoplasma de algunas células de aspecto más fluido; es evidente en los protozoos" },
    { f: "CON LA F. Que se adapta con flexibilidad a las circunstancias" },
    { g: "CON LA G. Conjunto amplio de cosas, hechos, conceptos, etc., de características parecidas" },
    { h: "CON LA H. Suicidio ritual de origen japonés que se realiza por razones de honor y consiste en abrirse el vientre con un arma blanca" },
    { i: "CON LA I. Gobierno eclesiástico general del sumo pontífice, concilios y prelados" },
    { j: "CON LA J. Mamífero artiodáctilo, cuya variedad doméstica es el cerdo, de gran fortaleza, pelaje muy tupido gris o pardo y grandes colmillos salientes de la boca, que habita en bosques y matorrales" },
    { k: "CON LA K. Persona que lleva a cabo un atentado suicida" },
    { l: "CON LA L. Criatura legendaria presente en muchas culturas independientes a lo largo del mundo" },
    { m: "CON LA M. Dicho de una persona: Que siente o manifiesta misantropía" },
    { n: "CON LA N. Cualidad de necio" },
    { ñ: "CONTIENE LA Ñ. Rasgo o nota que se pone o hay en las cosas para darlas a conocer y distinguirlas de otras" },
    { o: "CON LA O. Raza fantástica de criaturas usadas como soldados y secuaces por los grandes villanos en las obras de Tolkien" },
    { p: "CON LA P. Una de las tres razas del videojuego StarCraft, junto con los Zerg y los Terran" },
    { q: "CON LA Q. Alimento sólido que se obtiene por maduración de la cuajada de la leche una vez eliminado el suero" },
    { r: "CON LA R. Pequeño aparato manual conectado a una computadora u otro dispositivo electrónico, cuya función es mover el cursor en la pantalla para dar órdenes" },
    { s: "CON LA S. Sitio de preguntas y respuestas para programadores profesionales y aficionados" },
    { t: "CON LA T. Película del director James Cameron que consolidó a un conocido actor en 1984" },
    { u: "CON LA U. Escritor y filósofo español perteneciente a la generación del 98" },
    { v: "CON LA V. Dicho de una persona que pertenecía a un pueblo de guerreros y navegantes que se extendió por las costas atlánticas y por Europa occidental entre los siglos VII y XI" },
    { w: "CONTIENE LA W. Bocadillo caliente de pan de molde, jamón cocido y queso" },
    { x: "CONTIENE LA X. Neurotoxina elaborada por una bacteria denominada Clostridium botulinum" },
    { y: "CONTIENE LA Y. Planta cactácea, de pequeño tamaño, que contiene una sustancia cuya ingestión produce efectos alucinógenos y narcóticos" },
    { z: "CON LA Z. Sistema filosófico budista que tuvo su origen en China en el siglo VI" }
];
//Defino un array que contiene esos tres array de preguntas
var questionsRandomArr = [questionsRandom1, questionsRandom2, questionsRandom3];
//Defino una función de barajar
function shuffle(questionsRandomArr) {
    var i = questionsRandomArr.length,
        j = 0,
        temp;
    while (i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = questionsRandomArr[i];
        questionsRandomArr[i] = questionsRandomArr[j];
        questionsRandomArr[j] = temp;
    }
    return questionsRandomArr;
}
//Y barajo el array que contiene a los 3 array de preguntas
let ranQuestions = shuffle(questionsRandomArr);
//Array principal con todas sus propiedades. En la parte de question indico que elija el primer array que salga en el array barajado y elijo el index para cada letra con su propiedad
var questionsArr = [

    { letter: "a", answer: "abducir", status: 2, question: questionsRandomArr[0][0].a },

    { letter: "b", answer: "bingo", status: 2, question: questionsRandomArr[0][1].b },

    { letter: "c", answer: "churumbel", status: 2, question: questionsRandomArr[0][2].c },

    { letter: "d", answer: "diarrea", status: 2, question: questionsRandomArr[0][3].d },

    { letter: "e", answer: "ectoplasma", status: 2, question: questionsRandomArr[0][4].e },

    { letter: "f", answer: "facil", status: 2, question: questionsRandomArr[0][5].f },

    { letter: "g", answer: "galaxia", status: 2, question: questionsRandomArr[0][6].g },

    { letter: "h", answer: "harakiri", status: 2, question: questionsRandomArr[0][7].h },

    { letter: "i", answer: "iglesia", status: 2, question: questionsRandomArr[0][8].i },

    { letter: "j", answer: "jabali", status: 2, question: questionsRandomArr[0][9].j },

    { letter: "k", answer: "kamikaze", status: 2, question: questionsRandomArr[0][10].k },

    { letter: "l", answer: "licantropo", status: 2, question: questionsRandomArr[0][11].l },

    { letter: "m", answer: "misantropo", status: 2, question: questionsRandomArr[0][12].m },

    { letter: "n", answer: "necedad", status: 2, question: questionsRandomArr[0][13].n },

    { letter: "ñ", answer: "señal", status: 2, question: questionsRandomArr[0][14].ñ },

    { letter: "o", answer: "orco", status: 2, question: questionsRandomArr[0][15].o },

    { letter: "p", answer: "protoss", status: 2, question: questionsRandomArr[0][16].p },

    { letter: "q", answer: "queso", status: 2, question: questionsRandomArr[0][17].q },

    { letter: "r", answer: "raton", status: 2, question: questionsRandomArr[0][18].r },

    { letter: "s", answer: "stackoverflow", status: 2, question: questionsRandomArr[0][19].s },

    { letter: "t", answer: "terminator", status: 2, question: questionsRandomArr[0][20].t },

    { letter: "u", answer: "unamuno", status: 2, question: questionsRandomArr[0][21].u },

    { letter: "v", answer: "vikingos", status: 2, question: questionsRandomArr[0][22].v },

    { letter: "w", answer: "sandwich", status: 2, question: questionsRandomArr[0][23].w },

    { letter: "x", answer: "botox", status: 2, question: questionsRandomArr[0][24].x },

    { letter: "y", answer: "peyote", status: 2, question: questionsRandomArr[0][25].y },

    { letter: "z", answer: "zen", status: 2, question: questionsRandomArr[0][26].z }];
//Función principal
function pasapalabra() {
//Barajo el array de las preguntas para que salgan preguntas diferentes cada vez que llamemos al programa
    ranQuestions = shuffle(questionsRandomArr);
//Limpio consola
    console.clear();
//Prompt que guarda el nombre de usuario
    let userName = prompt('¡Bienvenidx al Pasapalabra! ¿Cómo te llamas?');
//Variables contadores que van sumando aciertos y fallos
    let aciertos = 0;
    let fallos = 0;
//Si el usuario no cancela el prompt del nombre de usuario, empieza el juego
    if (userName != null) {
        console.clear();
        console.log('¡Empezamos!');
        pregunta();
//Si cancela, el programa se despide
    } else {
        console.log('¡Hasta la próxima!');
    }
//Defino una función con un bucle en el que se comprobará si la respuesta del usuario al prompt con la pregunta, es igual o diferente a la respuesa del array o pasapalabra
    function pregunta() {

        for (let i = 0; i < questionsArr.length; i++) {
            let respuesta = prompt(questionsArr[i].question);
            if (respuesta !== null) {
                //Quitamos espacios y pasamos a minúsculas la respuesta
                respuesta = respuesta.trim();
                respuesta = respuesta.toLowerCase();
                //Si es correcta, su status cambia a 0 y se añade un punto
                if (respuesta === questionsArr[i].answer) {
                    questionsArr[i].status = 0;
                    console.clear();
                    console.log('¡Correcto! Tienes 1 punto.');
                    aciertos++;
                    console.log('Puntuación actual:');
                    console.log('Aciertos: ' + aciertos + '. Fallos: ' + fallos + '.');
                //Si pasapalabra, pasamos a status 1 para dejarla pendiente
                } else if (respuesta === 'pasapalabra') {
                    questionsArr[i].status = 1;
                    console.clear();
                    console.log('Has pasado palabra.');
                //Si falla, el status cambia a 0 y se suma un fallo
                } else if (respuesta !== questionsArr[i].answer && respuesta !== 'pasapalabra') {
                    questionsArr[i].status = 0;
                    alert('¡Oh no! Has fallado. La respuesta correcta era ' + questionsArr[i].answer + '.');
                    fallos++;
                    console.clear();
                    console.log('Puntuación actual:');
                    console.log('Aciertos: ' + aciertos + '. Fallos: ' + fallos + '.');
                }
            //Si el usuario abandona el bucle, cancelando el prompt, se le muestra su resultado pero no entra en ranking
            } else {
                console.clear();
                console.log('Puntuación final:');
                console.log('Aciertos: ' + aciertos + '. Fallos: ' + fallos + '.');
                console.log('No entras en el ranking por abandonar el juego.');
                break;
            }
        }
    }
//Si todos los elementos son diferentes a status 2, es decir, el rosco ya ha dado una vuelta, se llama a la función comprobar
    if (questionsArr.every((elem) => elem.status !== 2)) {
        comprobar();
    }
//Esta función comprueba si hay algún pasapalabra. Es decir, si algún elemento tiene status 1
    function comprobar() {
        if (questionsArr.some((elem) => elem.status === 1)) {
            hayPasapalabra();
        }
    }
//Sin lo hay, vuelve a hacer el bucle pero sólo para las palabras marcadas con status 1, es decir, que el usuario utilizó 'pasapalabra'. El funcionamiento es el mismo.
    function hayPasapalabra() {
        for (let i = 0; i < questionsArr.length; i++) {
            if (questionsArr[i].status === 1) {
                let respuesta = prompt(questionsArr[i].question);
                if (respuesta !== null) {
                    respuesta = respuesta.trim();
                    respuesta = respuesta.toLowerCase();
                    if (respuesta === questionsArr[i].answer) {
                        questionsArr[i].status = 0;
                        console.clear();
                        console.log('¡Correcto! Tienes 1 punto.');
                        aciertos++;
                        console.log('Puntuación actual:');
                        console.log('Aciertos: ' + aciertos + '. Fallos: ' + fallos + '.');
                    } else if (respuesta === 'pasapalabra') {
                        questionsArr[i].status = 1;
                        console.clear();
                        console.log('Has pasado palabra.');
                    } else if (respuesta !== questionsArr[i].answer && respuesta !== 'pasapalabra') {
                        questionsArr[i].status = 0;
                        alert('¡Oh no! Has fallado. La respuesta correcta era ' + questionsArr[i].answer + '.');
                        fallos++;
                        console.clear();
                        console.log('Puntuación actual:');
                        console.log('Aciertos: ' + aciertos + '. Fallos: ' + fallos + '.');
                    }
                } else {
                    console.clear();
                    console.log('Puntuación final:');
                    console.log('Aciertos: ' + aciertos + '. Fallos: ' + fallos + '.');
                    console.log('No entras en el ranking por abandonar el juego.');
                    break;
                }
            }
        }
        //Se vuelve a comprobar si pasó de nuevo alguna palabra
        comprobar();
    }
//Si todos los elementos del array ya están en 0, es decir que sus respuestas han sido acertadas o falladas, se añade ese usuario al ranking, 
//se muestra el ranking y pregunta si quiere volver a jugar
    if (questionsArr.every((elem) => elem.status === 0)) {
        let user = { nombre: userName, puntuacion: aciertos };
        rank.push(user);
        ranking();
        volverAjugar();
    }
//Función de ranking ordenado por puntos de aciertos
    function ranking() {
        console.clear();
        console.log('Tu puntuación final ha sido de:');
        console.log('Aciertos: ' + aciertos + '. Fallos: ' + fallos + '.');
        let rankOrdenado = rank.sort((a, b) => (b.puntuacion) - (a.puntuacion));
        console.log('RANKING:');
        console.table(rankOrdenado);
    }
//Función que vuelve a ejecutar el programa
    function volverAjugar() {
        let playAgain = confirm('¿Desea volver a jugar?');
        if (playAgain === true) {
            pasapalabra();
        } else {
            console.log('¡Hasta la próxima!');
        }
    }
}
//Llamamos a la función para ejecutar el programa
pasapalabra();