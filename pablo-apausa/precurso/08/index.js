class Pasapalabra {
	constructor(output) {
		this.output = output;
		this.count = 0; 
		this.questions = [];

		//Generates the questions. 
		for (this.i = 0; this.i < 27; this.i++) {
			this.number = Math.round(Math.random() * 2);
			if (this.number === 0) this.questions.push(arr0[this.i]);
			if (this.number === 1) this.questions.push(arr1[this.i]);
			if (this.number === 2) this.questions.push(arr2[this.i]);
		}
		this.filter()
	}

	filter() {
		this.unanswered = questions => questions.status === '';
		this.unanswered = this.questions.filter(this.unanswered);

		if (this.unanswered.length < 1) return alert('Has acabado!');
		if (this.count === this.unanswered.length) this.count = 0; 
		this.output.innerText = this.unanswered[this.count].question; 
	}

	check(answer) { 
		this.answer = answer; 
		this.index = questions => questions.letter === this.unanswered[this.count].letter; 
		this.index = this.questions.findIndex(this.index);

		if (this.answer.target.value.toLowerCase() === "pasapalabra") return this.count++;
		if (this.answer.target.value.toLowerCase() === this.questions[this.index].answer) {
			this.questions[this.index].status = true;
			// letter[this.index].style.color = "green";
		} else {
			this.questions[this.index].status = false;
			// letter[this.index].style.color = "red";
		}
	}

	clear(input) { 
		this.input = input;
		this.input.value = '';
	}
}

let arr0 = [ 
	{letter: "a", answer: "acostumbrado", status: "", question: ("Con la 'A': que tiene determinadas costumbres.")},
	{letter: "b", answer: "brevedad", status: "", question: ("Con la 'B': corta extensión o duración de una cosa, acción o suceso.")},
	{letter: "c", answer: "creador", status: "", question: ("Con la 'C': que crea, establece o funda algo.")},
	{letter: "d", answer: "dorado", status: "", question: ("Con la 'D': dicho de un color: semejante al del oro.")},
	{letter: "e", answer: "esposo", status: "", question: ("Con la 'E': persona casada, con relación a su cónyuge.")},
	{letter: "f", answer: "fe", status: "", question: ("Con la 'F': conjunto de creencias de una religión.")},
	{letter: "g", answer: "guitarra", status: "", question: ("Con la 'G': nstrumento musical de cuerda compuesto por una caja de resonancia en forma de ocho, un mástil largo con trastes, y cuerdas, generalmente seis, que se hacen sonar con los dedos.")},
	{letter: "h", answer: "himno", status: "", question: ("Con la 'H': composición poética en loor de los dioses o de los héroes.")},
	{letter: "i", answer: "inteligente", status: "", question: ("Con la 'I': dotado de inteligencia.")},
	{letter: "j", answer: "japonés", status: "", question: ("Con la 'J': natural del Japón, país de Asia.")},
	{letter: "k", answer: "kiwi", status: "", question: ("Con la 'K': ave apterigiforme, del tamaño de una gallina, que habita en Nueva Zelanda.")}, 
	{letter: "l", answer: "lámpara", status: "", question: ("Con la 'L': utensilio o aparato que, colgado o sostenido sobre un pie, sirve de soporte a una o varias luces artificiales.")},
	{letter: "m", answer: "mentir", status: "", question: ("Con la 'M': decir o manifestar lo contrario de lo que se sabe, cree o piensa.")},
	{letter: "n", answer: "noticia", status: "", question: ("Con la 'N': información sobre algo que se considera interesante divulgar.")},
	{letter: "ñ", answer: "leña", status: "", question: ("Contiene la 'Ñ': parte de los árboles y matas que, cortada y hecha trozos, se emplea como combustible.")},
	{letter: "o", answer: "oposición", status: "", question: ("Con la 'O': acción y efecto de oponer u oponerse.")},
	{letter: "p", answer: "pintar", status: "", question: ("Con la 'P': representar algo en una superficie con líneas y colores.")},
	{letter: "q", answer: "poesía", status: "", question: ("Con la 'Q': manifestación de la belleza o del sentimiento estético por medio de la palabra, en verso o en prosa.")},
	{letter: "r", answer: "reclamo", status: "", question: ("Con la 'R': ave amaestrada que se lleva a la caza para que con su canto atraiga a otras de su especie.")},
	{letter: "s", answer: "señor", status: "", question: ("Con la 'S': persona que gobierna en un ámbito determinado.")},
	{letter: "t", answer: "talón", status: "", question: ("Con la 'T': parte posterior del pie humano.")},
	{letter: "u", answer: "único", status: "", question: ("Con la 'U': solo y sin otro de su especie.")},
	{letter: "v", answer: "variar", status: "", question: ("Con la 'V': hacer que una cosa sea diferente en algo de lo que antes era.")},
	{letter: "w", answer: "software", status: "", question: ("Contiene la 'W': conjunto de programas, instrucciones y reglas informáticas para ejecutar ciertas tareas en una computadora.")},
	{letter: "x", answer: "oxidar", status: "", question: ("Contiene la 'X': dicho del oxígeno o de otro agente oxidante: Producir óxido al reaccionar con una sustancia.")},
	{letter: "y", answer: "nylon", status: "", question: ("Contiene la 'Y': ribera del mar o de un río grande, formada de arenales en superficie casi plana.")},
	{letter: "z", answer: "zafiro", status: "", question: ("Con la 'Z': corindón cristalizado de color azul.")},
];

let arr1 = [ 
	{letter: "a", answer: "acción", status: "", question: ("Con la 'A': ejercicio de la posibilidad de hacer.")},
	{letter: "b", answer: "brillar", status: "", question: ("Con la 'B': dicho de un cuerpo: Emitir o reflejar luz.")},
	{letter: "c", answer: "cómodo", status: "", question: ("Con la 'C': conveniente, oportuno, acomodado, fácil, proporcionado.")},
	{letter: "d", answer: "dueño", status: "", question: ("Con la 'D': persona que tiene dominio o señorío sobre alguien o algo.")},
	{letter: "e", answer: "explosión", status: "", question: ("Con la 'E': liberación brusca de energía que produce un incremento rápido de la presión, con desprendimiento de calor, luz y gases, y va acompañada de estruendo y rotura violenta del cuerpo que la contiene.")},
	{letter: "f", answer: "fomentar", status: "", question: ("Con la 'F': excitar, promover, impulsar o proteger algo.")},
	{letter: "g", answer: "generar", status: "", question: ("Con la 'G': producir, causar algo.")},
	{letter: "h", answer: "honor", status: "", question: ("Con la 'H': cualidad moral que lleva al cumplimiento de los propios deberes respecto del prójimo y de uno mismo.")},
	{letter: "i", answer: "innumerable", status: "", question: ("Con la 'I': que no se puede reducir a número.")},
	{letter: "j", answer: "jamás", status: "", question: ("Con la 'J': nunca.")},
	{letter: "k", answer: "koala", status: "", question: ("Con la 'K': mamífero marsupial arborícola parecido a un oso pequeño, propio de los eucaliptales australianos.")},
	{letter: "l", answer: "limitación", status: "", question: ("Con la 'L': acción y efecto de limitar o limitarse.")},
	{letter: "m", answer: "ministro", status: "", question: ("Con la 'M': persona que forma parte del Gobierno como responsable de uno de los departamentos en que se divide la Administración Superior del Estado.")},
	{letter: "n", answer: "nulo", status: "", question: ("Con la 'N': falto de valor y fuerza para obligar o tener efecto, por ser contrario a las leyes, o por carecer de las solemnidades que se requieren en la sustancia o en el modo.")},
	{letter: "ñ", answer: "enseñar", status: "", question: ("Contiene la 'Ñ': instruir, doctrinar, amaestrar con reglas o preceptos.")},
	{letter: "o", answer: "oso", status: "", question: ("Con la 'O': mamífero carnívoro plantígrado, de gran tamaño, de pelaje pardo, largo y espeso, cabeza grande, ojos pequeños, extremidades fuertes y gruesas, con garras, y cola muy corta, que vive en los montes boscosos")},
	{letter: "p", answer: "personal", status: "", question: ("Con la 'P': perteneciente o relativo a la persona.")},
	{letter: "q", answer: "querido", status: "", question: ("Con la 'Q': antepuesto a un nombre, como fórmula de cortesía para dirigirse a una persona de manera cordial o afectuosa, oralmente o por escrito.")},
	{letter: "r", answer: "recitar", status: "", question: ("Con la 'R': referir, contar o decir en voz alta un discurso u oración.")},
	{letter: "s", answer: "sentar", status: "", question: ("Con la 'S': poner o colocar a alguien en una silla, banco, etc., de manera que quede apoyado y descansando sobre las nalgas.")},
	{letter: "t", answer: "templo", status: "", question: ("Con la 'T': edificio o lugar destinado pública y exclusivamente a un culto.")},
	{letter: "u", answer: "unir", status: "", question: ("Con la 'U': hacer que una cosa esté al lado de otra, o en contacto con ella formando un todo.")},
	{letter: "v", answer: "visible", status: "", question: ("Con la 'V': que se puede ver.")},
	{letter: "w", answer: "hawaiano", status: "", question: ("Contiene 'W': natural de las islas Hawái, archipiélago estadounidense de la Polinesia.")},
	{letter: "x", answer: "textura", status: "", question: ("Contiene la 'X': disposición y orden de los hilos en una tela.")},
	{letter: "y", answer: "arroyo", status: "", question: ("Contiene la 'Y': caudal corto de agua, casi continuo.")},
	{letter: "z", answer: "zurdo", status: "", question: ("Con la 'Z': que tiene tendencia natural a servirse preferentemente de la mano izquierda o también del pie del mismo lado.")},
];

let arr2 = [  
	{letter: "a", answer: "alegre", status: "", question: ("Con la 'A': poseído o lleno de alegría.")},
	{letter: "b", answer: "balcón", status: "", question: ("Con la 'B': ventana abierta hasta el suelo de la habitación, generalmente con prolongación voladiza, con barandilla.")},
	{letter: "c", answer: "cómplice", status: "", question: ("Con la 'C': que manifiesta o siente solidaridad o camaradería.")},
	{letter: "d", answer: "destruido", status: "", question: ("Con la 'D': reducir a pedazos o a cenizas algo material, u ocasionarle un grave daño.")},
	{letter: "e", answer: "exclusivamente", status: "", question: ("Con la 'E': de manera exclusiva.")},
	{letter: "f", answer: "finca", status: "", question: ("Con la 'F': propiedad inmueble, rústica o urbana.")},
	{letter: "g", answer: "global", status: "", question: ("Con la 'G': tomado en conjunto.")},
	{letter: "h", answer: "humo", status: "", question: ("Con la 'H': mezcla visible de gases producida por la combustión de una sustancia, generalmente compuesta de carbono, y que arrastra partículas en suspensión.")},
	{letter: "i", answer: "internacional", status: "", question: ("Con la 'I': perteneciente o relativo a dos o más naciones.")},
	{letter: "j", answer: "juicio", status: "", question: ("Con la 'J': facultad por la que el ser humano puede distinguir el bien del mal y lo verdadero de lo falso.")},
	{letter: "k", answer: "kilómetro", status: "", question: ("Con la 'K': nidad de longitud equivalente a 1000 metros.")},
	{letter: "l", answer: "lomo", status: "", question: ("Con la 'L': parte inferior y central de la espalda.")},
	{letter: "m", answer: "meta", status: "", question: ("Con la 'M': término señalado a una carrera.")},
	{letter: "n", answer: "navegación", status: "", question: ("Con la 'N': acción de navegar.")},
	{letter: "ñ", answer: "diseño", status: "", question: ("Contiene la 'Ñ': traza o delineación de un edificio o de una figura.")},
	{letter: "o", answer: "objetivo", status: "", question: ("Con la 'O': perteneciente o relativo al objeto en sí mismo, con independencia de la propia manera de pensar o de sentir.")},
	{letter: "p", answer: "padecer", status: "", question: ("Con la 'P': sentir física y corporalmente un daño, dolor, enfermedad, pena o castigo.")},
	{letter: "q", answer: "queja", status: "", question: ("Con la 'Q': expresión de dolor, pena o sentimiento.")},
	{letter: "r", answer: "reducido", status: "", question: ("Con la 'R': estrecho, pequeño, limitado.")},
	{letter: "s", answer: "senda", status: "", question: ("Con la 'S': camino más estrecho que la vereda, abierto principalmente por el tránsito de peatones y del ganado menor.")},
	{letter: "t", answer: "transporte", status: "", question: ("Con la 'T': acción y efecto de transportar o transportarse.")},
	{letter: "u", answer: "ubicar", status: "", question: ("Con la 'U': situar o instalar en determinado espacio o lugar.")},
	{letter: "v", answer: "valer", status: "", question: ("Con la 'V': amparar, proteger, patrocinar.")},
	{letter: "w", answer: "hundido", status: "", question: ("Contiene la 'W':")},
	{letter: "x", answer: "boxeo", status: "", question: ("Contiene la 'X': deporte que consiste en la lucha de dos púgiles, con las manos enfundadas en guantes especiales y de conformidad con ciertas reglas.")},
	{letter: "y", answer: "ayer", status: "", question: ("Contiene la 'Y': en el día que precede inmediatamente al de hoy.")},
	{letter: "z", answer: "zapato", status: "", question: ("Con la 'Z': calzado que no pasa del tobillo, con la parte inferior de suela y lo demás de piel, fieltro, paño u otro tejido, más o menos escotado por el empeine.")},
];

const output = document.querySelector("[data-question]");
const input = document.querySelector("[data-answer]");
const letter = document.querySelectorAll("[data-letter]");
const pasapalabra = new Pasapalabra(output);

//Pantalla de comienzo. 
//Pantalla de finalización.

input.addEventListener("keydown", answer => {
	if (answer.code !== "Enter") return; 
	pasapalabra.check(answer);
	pasapalabra.filter();
	pasapalabra.clear(input);
});