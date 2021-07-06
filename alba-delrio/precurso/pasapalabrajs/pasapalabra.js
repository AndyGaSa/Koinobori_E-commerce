//Pasapalabra
//variables globales
let error=0;
let acertadas=0;
let statusCount=0;
let numQuiz=0;
let jugadores=[{userName:'Mario',score:13},{userName:'Laura',score:20},{userName:'Paula',score:9}]
let jugador;
let endGame=false;
//jugadores
class User{
    constructor(userName,score){
        this.userName= userName,
        this.score= this.score
    }
}
//definciones y preguntas
let preguntas=[];
class Question{
    constructor(letter,quiz){
        this.letter=letter;
        this.status=0;
        this.quiz=quiz;
       }
}
class Quiz{
    constructor(question,answer){
        this.question=question;
        this.answer=answer;
    }
}
//letra a
let aQuiz0= new Quiz ("CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien.","abducir");
let aQuiz1= new Quiz ("CON LA A. Planta comestible con tallos blancos y hojas verdes. También está en la ducha.","alcachofa");
let aQuiz2= new Quiz("CON LA A. Cada uno de los significados que tiene una palabra.","acepcion");
let a = new Question('a',[aQuiz0,aQuiz1,aQuiz2]);
//letra b
let bQuiz0= new Quiz("CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso.","bingo");
let bQuiz1= new Quiz("CON LA B. Caja en la que se guardan medicinas.","botiquin");
let bQuiz2= new Quiz("CON LA B. Contar la vida de una persona por escrito.","biografia");
let b = new Question('b',[bQuiz0,bQuiz1,bQuiz2]);
//letra c
let cQuiz0= new Quiz("CON LA C. Niño, crío, bebé." ,"churumbel");
let cQuiz1= new Quiz("CON LA C. Cama en la que se llevan de un lado a otro heridos o enfermos.","camilla");
let cQuiz2= new Quiz("CON LA C. Historia contada en viñetas con dibujos y palabras.","comic");
let c = new Question('c',[cQuiz0,cQuiz1,cQuiz2]);
//letra d
let dQuiz0= new Quiz("CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida." ,"diarrea");
let dQuiz1= new Quiz("CON LA D. Palabras que se escriben y se dicen como regalo a alguien.","dedicatoria");
let dQuiz2= new Quiz("CON LA D. Libro en el que aparece el significado de las palabras por orden alfabético.","diccionario");
let d = new Question('d',[dQuiz0,dQuiz1,dQuiz2]);
//letra e
let eQuiz0= new Quiz("CON LA E. Mancharse un cristal con el vapor de agua." ,"empañarse");
let eQuiz1= new Quiz("CON LA E. Palabra cuya sílaba tónica es la antepenúltima.","esdrujula");
let eQuiz2= new Quiz("CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación","ectoplasma");
let e = new Question('e',[eQuiz0,eQuiz1,eQuiz2]);
//letra f
let fQuiz0= new Quiz("CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad.","facil");
let fQuiz1= new Quiz("CON LA F. Cuento en el que los personajes son animales, con el que se aprende algo a través de una moraleja.","fabula");
let fQuiz2= new Quiz("CON LA F. Tiempo verbal que indica que la acción se va a realizar.","futuro");
let f= new Question('f',[fQuiz0,fQuiz1,fQuiz2]);
//letra g
let gQuiz0= new Quiz("CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas.","galaxia");
let gQuiz1= new Quiz("CON LA G. Preparar alimentos cocinándolos con calor.","guisar");
let gQuiz2= new Quiz("CON LA G. Lo que nos indica si es masculino o femenino es el…","genero");
let g = new Question('g',[gQuiz0,gQuiz1,gQuiz2]);
//letra h
let hQuiz0= new Quiz("CON LA H. Suicidio ritual japonés por desentrañamiento.","harakiri");
let hQuiz1= new Quiz("CON LA H. Tela resistente que se cuelga de sus extremos y se utiliza como cama.","hamaca");
let hQuiz2= new Quiz("CON LA H. Dos vocales juntas que forman dos sílabas distintas.","hiato");
let h = new Question('h',[hQuiz0,hQuiz1,hQuiz2]);
//letra i
let iQuiz0= new Quiz("CON LA I. Templo Cristiano.","iglesia");
let iQuiz1= new Quiz("CON LA I. Alfiler que se abrocha quedando su punta dentro de un gancho.","imperdible");
let iQuiz2= new Quiz("CON LA I. Enunciado que sirve para preguntar.","interrogativo");
let i = new Question('i',[iQuiz0,iQuiz1,iQuiz2]);
//letra j
let jQuiz0= new Quiz("CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba.","jabali");
let jQuiz1= new Quiz("CON LA J. Persona que monta a caballo.","jinete");
let jQuiz2= new Quiz("CON LA J. Persona que ha dejado de trabajar y percibe una pensión.","jubilado");
let j = new Question('j',[jQuiz0,jQuiz1,jQuiz2]);
//letra k
let kQuiz0= new Quiz("CON LA k. Persona que se juega la vida realizando una acción temeraria.","kamikaze");
let kQuiz1= new Quiz("CON LA k. Diversión consistente en interpretar una canción grabada, mientras se sigue la letra que aparece en una pantalla.","Karaoke");
let kQuiz2= new Quiz("CON LA k. Mamífero marsupial arborícola parecido a un oso pequeño, propio de los eucaliptales australianos.","koala");
let k = new Question('k',[kQuiz0,kQuiz1,kQuiz2]);
//letra l
let lQuiz0= new Quiz("CON LA L. Hombre lobo.","licantropo");
let lQuiz1= new Quiz("CON LA L. Mueble formado por dos camas puestas una encima de la otra.","litera");
let lQuiz2= new Quiz("CON LA L. Eximir a alguien de una obligación.","liberar");
let l = new Question('l',[lQuiz0,lQuiz1,lQuiz2]);
//letra m
let mQuiz0= new Quiz("CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas.","misantropo");
let mQuiz1= new Quiz("CON LA M. Salsa que se hace batiendo huevo y aceite.","mayonesa");
let mQuiz2= new Quiz("CON LA M. Reunión pública, generalmente al aire libre, en la que los asistentes reclaman algo o expresan su protesta por algo.","manifestacion");
let m = new Question('m',[mQuiz0,mQuiz1,mQuiz2]);
//letra n
let nQuiz0= new Quiz("CON LA N. Demostración de poca inteligencia.","necedad");
let nQuiz1= new Quiz("CON LA N. Parte posterior de la cabeza situada encima del cuello.","nuca");
let nQuiz2= new Quiz("CON LA N. Estado propio de la persona nacida o naturalizada en una nación.","nacionalidad");
let n = new Question('n',[nQuiz0,nQuiz1,nQuiz2]);
// letra ñ
let ñQuiz0= new Quiz("CONETIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.","señal");
let ñQuiz1= new Quiz("CONTIENE LA Ñ. Representarse en la fantasía imágenes o sucesos mientras se duerme.","soñar");
let ñQuiz2= new Quiz("CONTIENE LA Ñ. Dar color al pelo con un tinte especial, permanente o que se va tras algunos lavados.","teñir");
let ñ = new Question('ñ',[ñQuiz0,ñQuiz1,ñQuiz2]);
//letra o
let oQuiz0= new Quiz("CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien.","orco");
let oQuiz1= new Quiz("CON LA O. Borde del mar, de un lago o de un río.","orilla");
let oQuiz2= new Quiz("CON LA O. Asociación de personas regulada por un conjunto de normas en función de determinados fines.","organizacion");
let o = new Question('o',[oQuiz0,oQuiz1,oQuiz2]);
//letra p
let pQuiz0= new Quiz("CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft.","protoss");
let pQuiz1= new Quiz("CON LA P. Juguete con forma de cono, generalmente de madera y con una punta de hierro que gira sobre sí mismo.","peonza");
let pQuiz2= new Quiz("CON LA P. Iniciar o impulsar una idea o proyecto procurando su logro.","promover");
let p = new Question('p',[pQuiz0,pQuiz1,pQuiz2]);
//letra q
let qQuiz0= new Quiz("CON LA Q. Producto obtenido por la maduración de la cuajada de la leche.","queso");
let qQuiz1= new Quiz("CON LA Q. Pan de maíz, relleno de queso y azúcar, que se fríe en manteca.","quesadilla");
let qQuiz2= new Quiz("CON LA Q. Ciencia que estudia la composición y las propiedades de la materia y de las transformaciones que esta experimenta sin que se alteren los elementos que la forman.","quimica");
let q = new Question('q',[qQuiz0,qQuiz1,qQuiz2]);
//letra r
let rQuiz0= new Quiz("CON LA R. Roedor.","raton");
let rQuiz1= new Quiz("CON LA R. Someter material usado a un proceso para que se pueda volver a utilizar.","reciclar");
let rQuiz2= new Quiz("CON LA R. Conjunto de uvas sostenidas en un mismo tallo.","racimo");
let r = new Question('r',[rQuiz0,rQuiz1,rQuiz2]);
//letra s
let sQuiz0= new Quiz("CON LA S. Comunidad salvadora de todo desarrollador informático.","stackoverflow");
let sQuiz1= new Quiz("CON LA S. Hacer cesar, hacer desaparecer, anular.","suprimir");
let sQuiz2= new Quiz("CON LA S. Enterrar semillas en la tierra para que crezcan.","sembrar");
let s = new Question('s',[sQuiz0,sQuiz1,sQuiz2]);
//letra t
let tQuiz0= new Quiz("CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984.","terminator");
let tQuiz1= new Quiz("CON LA T. Gobierno en que ejercen el poder los ciudadanos que tienen cierto nivel de renta.","timocracia");
let tQuiz2= new Quiz("CON LA T. Verdad obvia y trivial, perogrullada.","truismo");
let t = new Question('t',[tQuiz0,tQuiz1,tQuiz2]);
//letra u
let uQuiz0= new Quiz("CON LA U. Que se usa muy frecuentemente.","usitado");
let uQuiz1= new Quiz("CON LA U. Vengadora.","ultriz");
let uQuiz2= new Quiz("CON LA U. También denominado matriz, es el órgano de la gestación.","utero");
let u = new Question('u',[uQuiz0,uQuiz1,uQuiz2]);
//letra v
let vQuiz0= new Quiz("CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa.","vikingos");
let vQuiz1= new Quiz("CON LA V. Lugar cerrado y cubierto construido para ser habitado por personas.","vivienda");
let vQuiz2= new Quiz("CON LA V. Persona que vive en el mismo barrio o edificio que otra.","vecino");
let v = new Question('v',[vQuiz0,vQuiz1,vQuiz2]);
//letra w
let wQuiz0= new Quiz("CON LA W. Raíz de esta planta, de color verde claro, que se utiliza mucho en la cocina japonesa.","wasabi");
let wQuiz1= new Quiz("CON LA W. Género cinematográfico que sitúa la acción en el marco del Oeste norteamericano durante la época de su colonización.","western");
let wQuiz2= new Quiz("CON LA W. Aparato portátil reproductor de casetes.","walkman");
let w = new Question('w',[wQuiz0,wQuiz1,wQuiz2]);
//letra x
let xQuiz0= new Quiz("CON LA X. Rechazo a los extranjeros.","xenofobia");
let xQuiz1= new Quiz("CON LA X. Stan Lee y Jack Kirby son los creadores de un grupo de superhéroes mutantes pertenecientes al Universo Marvel.","x-men");
let xQuiz2= new Quiz("CON LA X. instrumento musical de percusión.","xilofono");
let x = new Question('x',[xQuiz0,xQuiz1,xQuiz2]);
//letra y
let yQuiz0= new Quiz("CON LA Y. Ser fantástico y gigantesco con figura humana y con el cuerpo cubierto de pelo; según una leyenda habita en las regiones del Himalaya.","yeti");
let yQuiz1= new Quiz("CON LA Y. Lugar en el que se encuentran restos arqueológicos.","yacimiento");
let yQuiz2= new Quiz("CON LA Y. Asceta que sigue la doctrina filosófica del yoga.","yogui");
let y = new Question('y',[yQuiz0,yQuiz1,yQuiz2]);
//letra z
let zQuiz0= new Quiz("CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional.","zen");
let zQuiz1= new Quiz("CON LA Z. Instrumento formado por un palo con un soporte a cierta distancia del suelo donde se coloca el pie, usado para hacer ejercicios de equilibrio.","zanco");
let zQuiz2= new Quiz("CON LA Z. Mineral compuesto de óxido de aluminio, de color azul y extraordinaria dureza, que se usa para tallar diamantes.","zafiro");
let z = new Question('z',[zQuiz0,zQuiz1,zQuiz2]);

preguntas.push(a,b,c,d,e,f,g,h,i,j,k,l,m,n,ñ,o,p,q,r,s,t,u,v,w,x,y,z)
function pasapalabra(){
    acertadas=0;
    error=0;
    statusCount=0;
    userName();
    preguntar();
    finPasapalabra();
}
//funciones
//pedir nombre de usuario y guardarlo
function userName(){
    
    let name = prompt("Introduzca su nombre, por favor:");
    jugador = new User(name,0);
    
    if(!(jugadores.some(item => item.userName === name))){
    
        jugadores.push(jugador);

    }else{
        let pos= jugadores.findIndex(i=>i.userName===name);
        jugadores[pos]= jugador;
    
    }
   alert(jugador.userName+", Ronda "+ (numQuiz+1) + " a jugaaar!!");
}
//incalizar el juego
function cleanGame(){
    acertadas=0;
    error=0;
    statusCount=0;
}
//preguntas pasapalabra
function preguntar(){
    do{   
        for(let i in preguntas){     
            if(preguntas[i].status===0){
                let answer=prompt(preguntas[i].quiz[numQuiz].question);
            
                if(answer.toLocaleLowerCase()===preguntas[i].quiz[numQuiz].answer){
                    preguntas[i].status=1;
                    statusCount+=1;
                    acertadas+=1;
                    alert("¡¡Correcto!!")
                }else if(answer.toLocaleLowerCase()==="pasapalabra"|| answer === ""){
                    alert("Pasapalabra");
                }else if(answer.toUpperCase()==='END'){
                    if(confirm("Quieres salir del juego?")){
                        return endGame = true;
                    }
                     
                }else{
                    preguntas[i].status=-1;
                    statusCount+=1
                    error+=1;
                    alert("¡Has Fallado! La respuesta correcta es "+ preguntas[i].quiz[numQuiz].answer);

                }
            }
        }
        
    }while(statusCount<27);



}

function finPasapalabra(x){
    points();
    if(endGame){
        alert("Has acertado un total de "+acertadas+" preguntas"+" y  has fallado "+ error);
        alert("Hasta la vista!")
        
    }else{
        alert("Has acertado un total de "+acertadas+" preguntas"+" y  has fallado "+ error);
        ranquing();
        if (confirm("Quieres volver a jugar? s/n")){
            quizRound();
            resetStatus();
            alert(jugador.userName+", Ronda "+ (numQuiz+1) + " a jugaaar!!");
            preguntar();
        }else{
            alert("Hasta la vista!");
        }   
    }
}

function quizRound(){
    if(numQuiz>=2){
        numQuiz=0;
    }else{
        numQuiz+=1;
    }
}

// gestion puntos y ranquing
//añadir puntos
function points(){
    
    jugador.score = acertadas;

}
//ranquig puntos
function ranquing(){
    let result = "";
    jugadores.sort(function(a,b){
        if(a.score>b.score){
            return -1;
        }
        if(a.score<b.score){
            return 1;
        }
        return 0;
    });
    for(let i in jugadores){
        result+=`${jugadores[i].userName}: ${jugadores[i].score}\n`;
    }
    
    alert("RaNQuiNG PaSaPaLaBRa:"+'\n'+ result);

}

//reset status
function resetStatus(){
    for(let i in preguntas){
        preguntas[i].status=0;
    }
}
