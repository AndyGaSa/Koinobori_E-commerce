/**
 *      El programa deberá lanzar la definición de una palabra y el usuario deberá adivinar qué palabra estamos tratando
 *      debería hacer una pregunta por cada letra del alfabeto
 *      habiendo respondido todas las letras, deberá indicarle al usuario cuantas letras ha fallado y cuántas ha acertado
 *      Si el usuario responde con "pasapalabra" el usuario no responderá esa pregunta
 *      cuando finalice, mostrar un ranking de usuarios con el nombre y ordenados por cantidad de letras acertadas.
 *      El programa no debería hacer distinciones entre mayúsculas, minúsculas
 *      aceptar el input "END" para terminar el juego en cualquier momento, si esto sucede, el programa dirá cuántas letras ha acertado pero no entrará en el ranking.
 *      se podrían hacer tres preguntas diferentes.
 *      al dar la vuelta al rosco la pregunta deberia ser la misma.
 *      Si el usuario falla la pregunta debeis mostrar la respuesta, ya sea en consola, en prompt o alert.
 */

let ranking = [["Manuel",15], ["Jordi",24], ["Laura",13], ["Maria",25], ["Sergio",4]];

let definitions = [ {letra: "a", answer1: "ala", answer2: "ala", answered:false, correctAnswer: false, questions:[ 
                    "Cada una de las partes que se extienden a los lados del cuerpo principal de un edificio.", 
                    "Cada uno de los órganos o apéndices pares que utilizan algunos animales para volar.", 
                    "Cada una de las partes que a ambos lados del avión presentan al aire una superficie plana."], 
                    },
                    {letra: "b", answer1: "borracho", answer2: "borracho", answered:false, correctAnswer: false, questions:[ 
                    "Vivamente poseído o dominado de alguna pasión, y especialmente de la ira.", 
                    "Que se embriaga habitualmente", 
                    "ebrio, embriagado por la bebida"], 
                    },
                    {letra: "c", answer1: "cuenta", answer2: "cuentas", answered:false, correctAnswer: false, questions:[ 
                    "Cálculo u operación aritmética", 
                    "Depósito de dinero en una entidad financiera", 
                    "Cada una de las bolas ensartadas que componen el rosario"], 
                    },
                    {letra: "d", answer1: "diente", answer2: "dientes", answered:false, correctAnswer: false, questions:[ 
                    "Cada una de las puntas o resaltos que presentan algunas herramientas e instrumentos", 
                    "Cuerpo duro engastado en las mandíbulas del hombre y de muchos animales", 
                    "Pieza ósea dura y blanca que crece, junto con otras, en la boca del hombre y otros vertebrados"], 
                    },
                    {letra: "e", answer1: "etiqueta", answer2: "etiqueta", answered:false, correctAnswer: false, questions:[ 
                    "Pieza de papel, cartón u otro material semejante, que se coloca en un objeto o en una mercancía para identificación, valoración, clasificación, etc.", 
                    "Calificación estereotipada y simplificadora.", 
                    "Ceremonial de los estilos, usos y costumbres que se debe guardar en actos públicos solemnes"], 
                    },
                    {letra: "f", answer1: "físico", answer2: "fisico", answered:false, correctAnswer: false, questions:[ 
                    "Del cuerpo humano, en oposición a mental, espiritual o moral, o relacionado con él.", 
                    "Que concierne a la naturaleza y constitución material de un cuerpo o un objeto.",
                    "Aspecto exterior que muestra una persona."], 
                    },
                    {letra: "g", answer1: "galería", answer2: "galeria", answered:false, correctAnswer: false, questions:[ 
                    "Lugar, normalmente con salas intercomunicadas, donde se exponen obras de arte.", 
                    "Pieza o corredor largos y espaciosos, con muchas ventanas, o sostenidos por columnas o pilares.", 
                    "Cada uno de los caminos subterráneos que se excavan en las minas y se utilizan para comunicación, ventilación, desagüe y descanso."], 
                    },
                    {letra: "h", answer1: "hueco", answer2: "hueco", answered:false, correctAnswer: false, questions:[ 
                    "Que tiene sonido retumbante y profundo.", 
                    "Que tiene vacío el interior.", 
                    "Intervalo de tiempo o lugar."], 
                    },
                    {letra: "i", answer1: "imaginación", answer2: "imaginacion", answered:false, correctAnswer: false, questions:[ 
                    "Facultad del alma que representa las imágenes de las cosas reales o ideales.", 
                    "Facilidad para formar nuevas ideas, nuevos proyectos, etc.", 
                    "Imagen formada por la fantasía."], 
                    },
                    {letra: "j", answer1: "juicio", answer2: "juicio", answered:false, correctAnswer: false, questions:[ 
                    "Estado de sana razón opuesto a locura o delirio.", 
                    "Conocimiento de una causa en la cual el juez ha de pronunciar la sentencia.", 
                    "Facultad por la que el ser humano puede distinguir el bien del mal y lo verdadero de lo falso."], 
                    },
                    {letra: "k", answer1: "karma", answer2: "karma", answered:false, correctAnswer: false, questions:[ 
                    "En algunas religiones de la India, energía derivada de los actos de un individuo", 
                    "En algunas creencias, fuerza espiritual.", 
                    "Creencia según la cual toda acción tiene una fuerza dinámica que se expresa e influye en las sucesivas existencias del individuo."], 
                    },
                    {letra: "l", answer1: "lazo", answer2: "lazo", answered:false, correctAnswer: false, questions:[ 
                    "Emblema del que forma parte una cinta doblada de manera conveniente y reglamentada.", 
                    "Cuerda o trenza con un nudo corredizo en uno de sus extremos, que sirve para sujetar toros, caballos", 
                    "Atadura o nudo de cintas o cosa semejante que sirve de adorno."], 
                    },
                    {letra: "m", answer1: "manto", answer2: "manto", answered:false, correctAnswer: false, questions:[ 
                    "Capa que llevan algunos religiosos sobre la túnica", 
                    "Rica vestidura de ceremonia, insignia de príncipes soberanos y de caballeros de las órdenes militares, que se ata por encima de los hombros", 
                    "Vestidura, generalmente recamada, que cubre algunas imágenes de la Virgen"], 
                    },
                    {letra: "n", answer1: "noticia", answer2: "noticia", answered:false, correctAnswer: false, questions:[ 
                    "Hecho divulgado", 
                    "Información sobre algo que se considera interesante divulgar.", 
                    "Dato o información nuevos, referidos a un asunto o a una persona."], 
                    },
                    {letra: "ñ", answer1: "ñapas", answer2: "ñapa", answered:false, correctAnswer: false, questions:[ 
                    "Ser un chapucero, hacer las cosas mal", 
                    "Persona es capaz de arreglar problemas muy variados, pero con un carácter temporal, para salir del paso", 
                    "Albañil poco professional"], 
                    },
                    {letra: "o", answer1: "ocupar", answer2: "ocupar", answered:false, correctAnswer: false, questions:[ 
                    "Llenar un espacio o lugar.", 
                    "Tomar posesión o apoderarse de un territorio, de un lugar, de un edificio", 
                    "Dar que hacer o en qué trabajar, especialmente en un oficio o arte."], 
                    },
                    {letra: "p", answer1: "prisma", answer2: "prisma", answered:false, correctAnswer: false, questions:[ 
                    "Objeto triangular de cristal, que se usa para producir la reflexión, la refracción y la descomposición de la luz.", 
                    "Cuerpo limitado por dos polígonos planos, paralelos e iguales, que se llaman bases, y por tantos paralelogramos cuantos lados tengan dichas bases.", 
                    "Punto de vista, perspectiva."], 
                    },
                    {letra: "q", answer1: "quebrar", answer2: "quebrar", answered:false, correctAnswer: false, questions:[ 
                    "Romper, separar con violencia.", 
                    "Doblar o torcer.", 
                    "Traspasar, violar una ley u obligación."], 
                    },
                    {letra: "r", answer1: "radical", answer2: "radical", answered:false, correctAnswer: false, questions:[ 
                    "Partidario de reformas extremas.", 
                    "Perteneciente o relativo a la raíz.", 
                    "Extremoso, tajante, intransigente."], 
                    },
                    {letra: "s", answer1: "saber", answer2: "saber", answered:false, correctAnswer: false, questions:[ 
                    "Tener habilidad o capacidad para hacer algo.", 
                    "Estar instruido en algo.", 
                    "Tener noticia o conocimiento de algo."], 
                    },
                    {letra: "t", answer1: "talla", answer2: "talla", answered:false, correctAnswer: false, questions:[ 
                    "Estatura o altura de las personas.", 
                    "Obra de escultura, especialmente en madera.", 
                    "Medida convencional usada en la fabricación y venta de prendas de vestir."], 
                    },
                    {letra: "u", answer1: "unión", answer2: "union", answered:false, correctAnswer: false, questions:[ 
                    "Correspondencia y conformidad de una cosa con otra.", 
                    "Composición que resulta de la mezcla de algunas cosas que se incorporan entre sí.", 
                    "Alianza, confederación, compañía."], 
                    },
                    {letra: "v", answer1: "valor", answer2: "valor", answered:false, correctAnswer: false, questions:[ 
                    "Grado de utilidad o aptitud de las cosas para satisfacer las necesidades o proporcionar bienestar o deleite.", 
                    "Cualidad de las cosas, en virtud de la cual se da por poseerlas cierta suma de dinero o equivalente.", 
                    "Equivalencia de una cosa a otra, especialmente hablando de las monedas."], 
                    },
                    {letra: "w", answer1: "western", answer2: "western", answered:false, correctAnswer: false, questions:[ 
                    "Género de películas del lejano Oeste.", 
                    "Género cinematográfico que sitúa la acción en el marco del Oeste norteamericano durante la época de su colonización.", 
                    "Película del lejano Oeste."], 
                    },
                    {letra: "x", answer1: "xenón", answer2: "xenon", answered:false, correctAnswer: false, questions:[ 
                    "Elemento químico de número atómico 54", 
                    "gas noble incoloro e inodoro, que está presente en la atmósfera en cantidades mínimas", 
                    "Gas usado en lámparas y tubos electrónicos."], 
                    },
                    {letra: "y", answer1: "yunque", answer2: "yunque", answered:false, correctAnswer: false, questions:[ 
                    "Prisma de hierro acerado, cuyo propósito es trabajar en él a martillo los metales", 
                    "Persona firme y paciente en las adversidades.", 
                    "Uno de los huesecillos que hay en la parte media del oído de los mamíferos"], 
                    },
                    {letra: "z", answer1: "zurcir", answer2: "zurcir", answered:false, correctAnswer: false, questions:[ 
                    "Coser la rotura de una tela, juntando los pedazos con puntadas o pasos ordenados, de modo que la unión resulte disimulada.", 
                    "Suplir con puntadas muy juntas y entrecruzadas los hilos que faltan en el agujero de un tejido.", 
                    "Unir y juntar sutilmente una cosa con otra."], 
                    },
                ]
let qIndex = 0;
let qForRound = 0;
let aCount = 0; 
let points = 0;
let userName = "";

usuario(definitions);

function nextQ(qArray){
    qIndex++;
    qAndA(qArray);  
}

function check(qArray){
    if (qIndex >= qArray.length){
        qIndex=0
        console.log ("otra ronda")
    };
    if (qArray[qIndex].answered){
        qIndex++;
        check(qArray)
    }
    return
}

function pointCount(value){
    points += value;
}

function usuario(qArray){
    userName = window.prompt("¿Como te llamas?");
    window.alert(`Bienvenido ${userName}`)
    qAndA(qArray)
 }

function compare(a, b) {
    if (a[1] < b[1]) {
      return 1;
    }
    if (a[1] > b[1]) {
      return -1;
    }
    return 0;
}

function answersRight(){
    window.alert(`has acertado un total de ${points} preguntas`)
}

function printRanking(){
    answersRight()
    let userRanking = [userName,points];
    ranking.push(userRanking);
    ranking.sort(compare)
    console.table(ranking)
}

function qAndA(qArray){
    if (aCount >= qArray.length){
    printRanking();
    again(qArray)
    } else {
    check(qArray);
    
    let qNow = qArray[qIndex];
    let answer = window.prompt(`Con la "${qNow.letra}": ${qNow.questions[qForRound]}`);
        if (answer===null || answer == "END"){
            return answersRight();
        } else if (answer.toLowerCase() == "pasapalabra"){
            return nextQ(qArray);     
        } else if (answer.toLowerCase() == qNow.answer1 || answer.toLowerCase() == qNow.answer2 ){
            console.log("respuesta correcta");
            qNow.answered = true;
            qNow.correctAnswer = true;
            aCount++;
            points++;
            return nextQ(qArray);

        } else {
            console.warn("respuesta incorrecta");
            console.log (qNow.answer1)
            qNow.answered = true;
            aCount++;
            return nextQ(qArray); 
        }
    }
}

function again(qArray){
    let again = window.confirm("¿Quieres jugar de Nuevo?");
    if (again){
        (qForRound == 2 ) ? qForRound=0 : qForRound++ ;
        points = 0;
        qIndex = 0;
        aCount = 0;
        for (let i = 0;i < qArray.length;i++){
            qArray[i].answered =false;
            qArray[i].correctAnswer =false;
        };
        return qAndA(qArray);
    }
     return window.alert("Hasta la proxima");
}
