
let aciertos = 0;
let errores = 0;
let respuestasContestadas = 0
let pasapalabras = 0
let rosco = [];
let nuevaPartida;
let despedida;
let jugador= {nombre:"", puntuacion:0};
let preguntas= 
    [{ letter: "a", answer: ["avatar", "aceituna", "abducir"], status: 0, question: ["CON LA A. Película de James Cameron protagonizada por personajes azules.", "CON LA A. Fruto del olivo, comestible, de pequeño tamaño, forma ovalada, color verde oscuro, negro cuando está madura, y con un hueso o carozo grande y duro en su interior que encierra la semilla.", "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"]},
    { letter: "b", answer: ["bambi", "burro", "bingo" ], status: 0, question: ["CON LA B. Película de Disney protagonizada por un ciervo.", "CON LA B. Alquien que es rudo e ignorante.", "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"]},
    { letter: "c", answer: ["cana", "cenicienta", "churumbel"], status: 0, question: ["CON LA C. Pelo que se ha vuelto blanco.", "CON LA C. Personaje de disney al que se le cae un zapato de cristal.", "CON LA C. Niño, crío, bebé"]},
    { letter: "d", answer: ["danzar", "diarrea", "dinamarca"  ], status: 0, question: ["CON LA D. Mover el cuerpo y las extremidades con ritmo siguiendo el compás de una pieza musical.", "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida", "País dónde se encuentra la estatua de La Sirenita."]},
    { letter: "e", answer: ["estrés", "eurovision", "ectoplasma" ], status: 0, question: ["CON LA E. Estado de cansancio mental provocado por la exigencia del bingo de Skylab.", "CON LA E. Concurso televisivo en el que España siempre queda de los últimos puestos.", "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"]},
    { letter: "f", answer: ["felicidad", "filosofia", "facil"  ], status: 0, question: ["CON LA F. Estado de ánimo de la persona que se siente plenamente satisfecha al haber logrado superar el Bingo de Skylab.", "CON LA F. Conjunto de reflexiones sobre el Universo.", "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"]},
    { letter: "g", answer: ["garfield", "gula", "galaxia"], status: 0, question: ["CON LA G. Gato que se alimenta exclusivamente de lasaña", "CON LA G. Apetito desmedido de comer y beber", "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas" ]},
    { letter: "h", answer: ["helado", "hummus", "harakiri" ], status: 0, question: ["CON LA H. Extremadamente frío", "CON LA H. Puré de garbanzos que se condimenta con ajo, zumo de limón y aceite pasta de sésamo; es típico de la cocina del Próximo Oriente", "CON LA H. Suicidio ritual japonés por desentrañamiento" ]},
    { letter: "i", answer: ["internet", "islam", "iglesia"], status: 0, question: ["CON LA I. Red informática de nivel mundial que utiliza la línea telefónica para transmitir la información", "CON LA I. Religión monoteísta que tuvo su origen en las enseñanzas del profeta Mahoma en Arabia, las cuales están recogidas en el Corán", "CON LA I. Templo cristiano" ]},
    { letter: "j", answer: ["joven","jamón", "jabali"] , status: 0, question: ["CON LA J. Persona que está en el período de la vida entre la niñez y la edad madura", "CON LA J. Pata trasera de cerdo, cruda o curada, que se destina al consumo alimenticio", "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"] },
    { letter: "k", answer: ["katana", "kilo", "kamikaze"], status: 0, question: ["CON LA K. Espada que utilizan los samurais", "CON LA K. Unidad de masa del Sistema Internacional", "CON LA K. Persona que se juega la vida realizando una acción temeraria" ]},
    { letter: "l", answer: ["lunes", "lucifer","licantropo"], status: 0, question: ["CON LA L. Primer dia de la semana", "CON LA L. Demonio.", "CON LA L. Hombre lobo" ]},
    { letter: "m", answer: ["mecano", "mente", "misantropo" ], status: 0, question: ["CON LA M. Grupo español de música popular de los años  80.", "CON LA M. Conjunto de capacidades intelectuales de la persona", "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"]},
    { letter: "n", answer: ["nirvana", "nocilla", "necedad" ], status: 0, question: ["CON LA N. Grupo de grunge estadounidense famosos de los 90.", "CON LA N. Crema untable de cacao de origen español creada en 1967 por el grupo Starlux.", "CON LA N. Demostración de poca inteligencia" ]},
    { letter: "ñ", answer: ["cuñado", "puñal","señal"] , status: 0, question: ["CONTIENE LA Ñ. Hermano de la pareja.", "CONTIENE LA Ñ. Arma blanca que solo hiere con la punta, formada por una hoja de acero corta y puntiaguda.", "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo." ]},
    { letter: "o", answer: ["oscar", "olivia", "orco"], status: 0, question: ["CON LA O. Premio cinematográfico que concede anualmente la academia estadounidense de artes y ciencias cinematográficas a películas, actores, directores y técnicos", "CON LA O. La pareja de Popeye.", "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"]},
    { letter: "p", answer: ["perro", "paloma","protoss"], status: 0, question: ["CON LA P. Animal que se le conoce por ser el mejor amigo de la raza humana", "Ave que habitua estar en la plaza de Cataluña",  "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft" ]},
    { letter: "q", answer: ["quisquilloso", "queen", "queso" ], status: 0, question: ["CON LA Q. Persona que se ofende fácilmente por cosas insignificantes a las que da mayor valor o importancia de la que merecen.", "CON LA Q. Grupo de rock britanico formado por el  cantante Freddie Mercury.", "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"]},
    { letter: "r", answer: ["ratatouille", "rumania", "raton"], status: 0, question: ["CON LA R. Película protagonizada por una rata que quiere ser un chef importante.", "CON LA R. País donde reside el conde Drácula.", "CON LA R. Roedor pequeño"] },
    { letter: "s", answer: ["salvame", "sopa, stackoverflow"], status: 0, question: ["CON LA S. Programa televisivo español que se dedica a cotillear a gente famosa", "CON LA S. Plato de caldo con pasta, arroz, sémola, hortalizas, u otros alimentos troceados que se cuecen en ese caldo.", "CON LA S. Comunidad salvadora de todo desarrollador informático" ]},
    { letter: "t", answer: ["titanic", "tiranosaurio", "terminator"], status: 0, question: ["CON LA T. Barco hundido en el año 1912", "CON LA T. Dinosaurio carnívoro que llegaba a alcanzar cinco metros de altura y siete toneladas de peso.", "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984" ]},
    { letter: "u", answer: ["universo", "uva", "unamuno"], status: 0, question: ["CON LA U. Conjunto de todo lo que tiene existencia física, en la Tierra y fuera de ella", "CON LA U. Fruta que se come en fin de año.", "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914" ]},
    { letter: "v", answer: ["vikingos", "victoria", "vacaciones"], status: 0, question: ["CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa", "CON LA V. Hecho de vencer en una competición o una lucha.", "Con la V. Suspensión temporal del trabajo, de los estudios o de otras actividades habituales para descansar"]},
    { letter: "w", answer: ["western", "whisky", "sandwhich"], status: 0, question: ["CON LA W. Género cinematográfico que sitúa la acción en el marco del Oeste norteamericano y que se caracteriza la presencia de personajes tipo como los indios y los vaqueros.", "CON LA W. Bebida originaria de Irlanda y Escocia","CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso" ]},
    { letter: "x", answer: ["boxeo", "extra", "botox"], status: 0, question: ["CONTIENE LA X. Deporte de combate en el que dos personas luchan entre sí golpeándose con los puños", "CONTIENE LA X. Que es de calidad superior a la normal.", "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"]},
    { letter: "y", answer: ["yoda", "yogur", "peyote"], status: 0, question: ["CON LA Y. El Jedi más famosos del universo de la Guerra de las Galaxias.", "CONTIENE LA Y. Alimento que se obtiene por fermentación de la leche de vaca entera o desnatada.", "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos" ]},
    { letter: "z", answer: ["zombie", "zasca", "zen"], status: 0, question: ["CON LA Z. Personaje clasico del terror creado por Geroge A. Romero ", "CON LA Z. Respuesta rápida y brusca que zanja una cuestión y deja perpleja y sin capacidad de reacción a la persona que la recibe", "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional" ]} ]
    


function crearRosco(){
    jugador.nombre= prompt(`Nombre del jugador`);
  for(let i=0; i<26; i++){
    let definition= {};
    let aleatorio = Math.floor(Math.random() * 3)
    definition.letter = preguntas[i].letter;
    definition.answer = preguntas[i].answer[aleatorio];
    definition.status = 0
    definition.question =preguntas[i].question[aleatorio];
    rosco.push(definition); 
  }

  pasapalabra();

}

function pasapalabra(){
    let respuesta;
    
    for(i=0; i<rosco.length; i++){

        if(rosco[i].status < 2){
            
            
            respuesta = prompt(`${rosco[i].question}`);{
                
                if(respuesta !== null){
                    respuesta = respuesta.toLowerCase();
                    if(respuesta === `end`){
                        resultadoInacabado();
                        break;

                    }else if(respuesta === rosco[i].answer){
                    alert(`¡Correcto!`);
                    rosco[i].status = 2;
                    aciertos++;
                    respuestasContestadas++;
                    jugador.puntuacion++;

                    }else if(respuesta === `pasapalabra`){
                    alert(`pasapalabra.`);
                    rosco[i].status = 1;
                    pasapalabras++;

                    }else{
                    alert(`¡Noooo! La respuesta correcta es ${rosco[i].answer}`);
                    rosco[i].status = 2;
                    errores++;
                    respuestasContestadas++;
                    jugador.puntuacion--;
                    }
                }else{
                    console.clear();
                    resultadoInacabado();
                    break;
                }

            }
        }
           
    }
    if(rosco[i].status === 1){
        pasapalabra();
    

}
}

    
function resultadoInacabado(){
    console.log(`${jugador.nombre}, has conseguido una puntuación total de ${jugador.puntuacion} con ${aciertos} aciertos, ${errores} errores y ${pasapalabras} pasapalabras.`);
    nuevaPartida = confirm(`¿Quieres empezar una nueva partida?`);{
        if(nuevaPartida){
            console.clear();
            crearRosco();
        }else{
            despedida = alert(`¡Hasta otra!`);
        }
    }
}

function resultadoFinal(){
    let rankingJugadores=[
        {nombre: 'Xavi', puntuacion:26},
        {nombre: 'Maria', puntuacion:20},
        {nombre: 'Flor', puntuacion:18},
        {nombre: 'Joan', puntuacion:15},
        {nombre: 'Carla', puntuacion:10},
        {nombre: 'Jose', puntuacion: 8},
        {nombre: 'Laura', puntuacion: 4},
        {nombre: 'Carlos', puntuacion: -2},
        {nombre: 'Pablo', puntuacion: -6},
        {nombre: 'Paula', puntuacion: -8}
    ]
rankingJugadores.push(jugador);

rankingJugadores.sort(function (a, b) {
    if (a.puntuacion < b.puntuacion) {
      return 1;
    }
    if (a.puntuacion > b.puntuacion) {
      return -1;
    }
    return 0;
  });

  rankingJugadores.pop;

if(acierto === rosco.length){
    alert(`Enhorabuena ${jugador.nombre},¡Rosco Completado!`);
    console.log(rankingJugadores);
    nuevaPartida = confirm(`¿Quieres empezar una nueva partida?`);{
        if(nuevaPartida){
            console.clear();
            crearRosco();
        }else{
            despedida = alert(`¡Hasta otra!`)
        }
    }

}else{
    console.log(`${jugador.nombre}, has conseguido una puntuación total de ${jugador.puntuacion} con ${aciertos} aciertos, ${errores} errores y ${pasapalabras} pasapalabras.`);
    console.log(rankingJugadores);
    nuevaPartida = confirm(`¿Quieres empezar una nueva partida?`);{
        if(nuevaPartida){
            console.clear();
            crearRosco();
        }else{
            despedida = alert(`¡Hasta otra!`)
        }
    }


}

}

crearRosco();
