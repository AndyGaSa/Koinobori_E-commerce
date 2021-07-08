let error=0;
let acertadas=0;
let statusCount=0;
let numQuiz=0;
let jugadores=[{userName:'Mario',score:13},{userName:'Laura', score:20},{userName:'Paula',score:9}];
let preguntas =[];
let num = 0;
let timeLeft=0;
let jugador;
const TOTAL_TIME=240;

document.querySelector('#color-timer').setAttribute("color",'rgb(65, 184, 131)');

//jugadores
class User{
    constructor(userName,score){
        this.userName= userName,
        this.score= score
    }
}
//definciones y preguntas
class Question{
    constructor(letter,quiz){
        this.letter=letter,
        this.status= 0 ,
        this.quiz=quiz
       }
}
class Quiz{
    constructor(question,answer){
        this.question=question,
        this.answer=answer
    }
}
//constra a
const aQuiz0= new Quiz ("CON LA A. Nombre de la misión espacial cuya trayectoria determinó la matemática y física de la NASA Katherine Johnson y que llevó a la primera persona a la Luna","apolo 11");
const aQuiz1= new Quiz ("CON LA A. Carol Shaw. La primera diseñadora de videojuegos. Trabajó para compañías míticas, como... ","atari");
const aQuiz2= new Quiz ("CON LA A. Hipatia de Alejandría destacó en el campo de la matemáticas y de la...","astronomia");
const a = new Question ('a',[aQuiz0,aQuiz1,aQuiz2]);
//constra b
const bQuiz0= new Quiz("CON LA B. Ciudad donde nació y estudió Assumpssió Catalá, astrónoma española que cuando estudiaba la carrera de Matemáticas era conocida como “la chica de tercero”, por ser la única mujer del curso","barcelona");
const bQuiz1= new Quiz("CON LA B. El trabajo de investigación de esta química fue clave en la incorporación de técnicas como la espectroscopia Raman (para identificar moléculas de sustancias químicas) en España (Dorotea..).","barnes");
const bQuiz2= new Quiz("CON LA B. Alice Catherine Evans,microbióloga investigó la bacteriología de la leche y el queso. Demostró que el Bacillus abortus causaba la _______ tanto en el ganado como en los seres humanos.","brucelosis");
const b = new Question('b',[bQuiz0,bQuiz1,bQuiz2]);
//constra c
const cQuiz0= new Quiz("CON LA C. Operación inventada por la científica de computación Grace Hopper que consiste en traducir automáticamente un programa escrito en un lenguaje cercano al humano a un código que es entendido directamente por el ordenador. Sin esta operación difícilmente podríamos aprender a programar hoy en día." ,"compilar");
const cQuiz1= new Quiz("CON LA C. Apellido de la primera mujer en  ganar un premio nobel relacionado con la ciencia.","curie");
const cQuiz2= new Quiz("CON LA C. Edith Clarke patentó una _________ gráfica que resolvía problemas de transmisión eléctrica","calculadora");
const c = new Question('c',[cQuiz0,cQuiz1,cQuiz2]);
//constra d
const dQuiz0= new Quiz("CON LA D. Hipótesis sobre el movimiento de los continentes a cuya confirmación contribuyó decididamente la geógrafa y cartógrafa  Marie Tharp con su descubrimiento de la Dorsal Mesoatlántica." ,"deriva continental");
const dQuiz1= new Quiz("CON LA D. Mediante que obtuvo la llamada Fotografía 51 que sirvío a Rosalind Franfklin para fundamentar la hipotesis de la estructura doble helicoidal del ADN","difraccion de rayos x");
const dQuiz2= new Quiz("CON LA D. Inge Lehman corroboró que la Tierra no es hueca, ya en 1936 descubrió la _________ que separa el núcleo externo del interno.","discontinuidad");
const d = new Question('d',[dQuiz0,dQuiz1,dQuiz2]);
//constra e
const eQuiz0= new Quiz("CON LA E. Nombre del invento de 1949 de la maestra e inventora Ángela Ruiz Robles que se considera precursor del libro electrónico." ,"enciclopedia mecanica");
const eQuiz1= new Quiz("CON LA E. Invento de Hedy Lamarr para conxiones seguras","espectro ensanchado");
const eQuiz2= new Quiz("CON LA E. Joan Elisabeth Lowther Clarke fue una criptoanalista y numismática británica, fue la única mujer que trabajó en el equipo del matemático Alan Turing en el proyecto que desencriptó las comunicaciones secretas de la Alemania nazi. Cual es el nombre del proyecto?","enigma");
const e = new Question('e',[eQuiz0,eQuiz1,eQuiz2]);
//constra f
const fQuiz0= new Quiz("CON LA F. Disciplina en la que la científica Marie Curie ganó el primero de sus dos premios Nobel, por sus descubrimientos sobre la radiación.","fisica");
const fQuiz1= new Quiz("CON LA F. Que fenómeno se tornó realidad a principios del siglo XX gracias a las investigaciones que Lise meitner llevó a cabo. Con la llegada del nazismo, Meitner, que era judía, estuvo a punto de perder la vida. Sin embargo, eso no fue motivo para que la científica convirtiera su descubrimiento en una bomba nuclear y se negó a colaborar en el proyecto Manhattan.","fision nuclear");
const fQuiz2= new Quiz("CONTIENE LA F. Apellido de la persona más joven en recibir el premio Nobel de Economía.","dulfo");
const f= new Question('f',[fQuiz0,fQuiz1,fQuiz2]);
//constra g
const gQuiz0= new Quiz("CON LA G. Disciplina médica iniciada por Trótula de Salerno en el siglo XII.","ginecologia");
const gQuiz1= new Quiz("CON LA G. Rama de la Ciencia que revolucionó la foto 51 de Rosalind.","genetica");
const gQuiz2= new Quiz("CON LA G. Gabriela Morreale dedicó gran parte de su vida al estudio de la _________ tiroides y es la responsable de que, en España, el sistema público sanitario implantara las técnicas de detección precoz mediante la medida de TSh y T4 en sangre del talon de recién nacidos","glandula");
const g = new Question('g',[gQuiz0,gQuiz1,gQuiz2]);
//constra h
const hQuiz0= new Quiz("CON LA H. Nombre del más famoso telescopio del mundo, que orbita en el espacio desde 1990, y en cuya planificación contribuyó de forma fundamental la astrónoma Nancy Roman, por lo que es conocida como “la madre” de dicho telescopio.","hubble");
const hQuiz1= new Quiz("CON LA H. Nombre de la primera mujer cientifica de la historia(que se tenga constancia).","hipatia");
const hQuiz2= new Quiz("CON LA H. Cecilia payne-gaposchkin decubrió que el Sol está compuesto en su mayor parte de gas de hidrógeno y ________.","helio");
const h = new Question('h',[hQuiz0,hQuiz1,hQuiz2]);
//constra i
const iQuiz0= new Quiz("CON LA I. Nacionalidad de la matemática Maryam Mirzakhani, la primera mujer en toda la historia en conseguir la medalla Fields, considerada el Nobel de las matemáticas, en 2014.","irani");
const iQuiz1= new Quiz("CON LA I. Término acuño Margaret Hamilton para distinguir entre el trabajo de hardware y otras ingenierías.","ingeniería de software");
const iQuiz2= new Quiz("CON LA I. Mary Anning, paleontóloga y comerciante de fósiles inglesa. Entre sus hallazgos más destacados están los primeros esqueletos de plesiosaurio y de _________.","ictosauro");
const i = new Question('i',[iQuiz0,iQuiz1,iQuiz2]);
//constra j
const jQuiz0= new Quiz("CON LA J. Universidad estadounidense en la que a finales del siglo XIX la geóloga Florence Bascom, pionera de la disciplina, recibía clases detrás de una pantalla para no importunar a sus compañeros varones.","johns hopkins");
const jQuiz1= new Quiz("CON LA J. En que se inspiró Ada Lovelace sus sistema de tarjetas perforadas que se utilizaría posteriormente para programar los primeros ordenadores? En un telar de __________","jaquard");
const jQuiz2= new Quiz("CON LA J. Nombre de la astrofísica que descubrió el púlsar.El descubrimiento le dio el Nobel a su director de tesis, cuando Bell era alumna de posgrado en Cambrige","jocelyn");
const j = new Question('j',[jQuiz0,jQuiz1,jQuiz2]);
//constra k
const kQuiz0= new Quiz("CON LA k. Material sintetizado por la química Stephanie Kwolek cuya resistencia a la rotura y ligereza hace que sea empleado en neumáticos, velas de barco y chalecos antibalas.","kevlar");
const kQuiz1= new Quiz("CON LA k. Ésta matemática contribuyó al análisis de las ecuaciones diferenciales y la física de los cuerpos de rotación. La 'peonza _________' es usada como modelo para los anillos de Saturno.","Kovalevskaya");
const kQuiz2= new Quiz("CON LA k. Mamífero marsupial arborícola parecido a un oso pequeño, propio de los eucaliptales australianos.","koala");
const k = new Question('k',[kQuiz0,kQuiz1,kQuiz2]);
//constra l
const lQuiz0= new Quiz("CON LA L. Apellido de la ingeniera de telecomunicaciones inventora del sistema en el que se basan las actuales comunicaciones inalámbricas – como el wifi – y que, sin embargo, es conocida muchísimo más por su faceta de actriz","lamarr");
const lQuiz1= new Quiz("CON LA L. Apellido de la que es considerada la madre de la química moderna.","lavoisier");
const lQuiz2= new Quiz("CON LA L. Apellido de la matemática y informática entre cuyas notas se reconoce el primer algoritmo destinado a ser procesado por una máquina.","lovelace");
const l = new Question('l',[lQuiz0,lQuiz1,lQuiz2]);
//constra m
const mQuiz0= new Quiz("CON LA M. Nombre con el que se conoce a la persona que tradujo por primera vez al francés los Principia Mathematica de Newton, una de las obras científicas más importantes de todos los tiempos, contribuyendo así a la propagación de la ciencia en el resto de Europa y al desarrollo del Siglo de las Luces.","madame de chatelet");
const mQuiz1= new Quiz("CON LA M. Esta astrofísica es conocida por contribuir a la comprensión del origen de las auroras. Descubrió un método para predecir los ciclos de __________.","manchas solares");
const mQuiz2= new Quiz("CON LA M. Maria Sibylla Merian fue una de las entomólogas e ilustradoras científicas más importantes de todos los tiempos. Mientras  que algunos cientícos de la época solo analizaban ejemplares muertos en expositores, ella observó y pintó insectos vivos. Las imágeens recogidas en su libro causaron furor en toda Europa. La _____________ de los insectos de Surinam.","metamorfosis");
const m = new Question('m',[mQuiz0,mQuiz1,mQuiz2]);
//constra n
const nQuiz0= new Quiz("CON LA N. Agencia estadounidense en la que trabajó la astrofísica Joan Feynman, famosa entre otras cosas por explicar el origen de las auroras solares, y a quien a la edad de 8 años le dijo su madre “Las mujeres no pueden hacer ciencia porque su cerebro no está preparado para ello”.","nasa");
const nQuiz1= new Quiz("CON LA N. Ada Lovelace dijo:'Soy más que nunca la ___________ de la ciencia. La religión para mí es ciencia y la ciencia es religión'","novia");
const nQuiz2= new Quiz("CONTIENE LA N. Margarita Salas creó una de las patentes españolas más rentables hasta la fecha, una proteína esencial en el desarrollo de la genética, la ingeniería genética y la biomedicina.","adn polimerasa");
const n = new Question('n',[nQuiz0,nQuiz1,nQuiz2]);
// constra ñ
const ñQuiz0= new Quiz("CONTIENE LA Ñ. Apellido de la epidemóloga colombiana que ganó el premio Nobel de medicina por sus investigaciones sobre el virus del papiloma humano","muñoz");
const ñQuiz1= new Quiz("CONTIENE LA Ñ. Nacionalidad de la ingeniera industrial y doctora en robótica, Elena García Armada.","española");
const ñQuiz2= new Quiz("CONTIENE LA Ñ.  Apellido de la oceanografa gallega que descubrió 22 nuevas especies de zooplancton marino.","alvarño");
const ñ = new Question('ñ',[ñQuiz0,ñQuiz1,ñQuiz2]);
//constra o
const oQuiz0= new Quiz("CON LA O. Campo de la Física en el que destacó la científica Katherine Burr Blodgett, inventora entre otras cosas del cristal no reflectante y creadora de numerosas patentes.","optica");
const oQuiz1= new Quiz("CON LA O. Vera Rubin, astrónoma que observó más de medio centenar de galaxias que rotaban creando una espiral a la misma velocidad. Su descubrimiento, junto a la teoría de Fritz Zwicky, sigue siendo la prueba más sólida de la existencia de la materia __________.","oscura");
const oQuiz2= new Quiz("CONTIENE LA O. Científica española especializada en los telómeros y telomerasa, dirige el Centro Nacional de Investigaciones Oncológicas.","maria blasco");
const o = new Question('o',[oQuiz0,oQuiz1,oQuiz2]);
//constra p
const pQuiz0= new Quiz("CON LA P. La médica e inventora Patricia Bath se convirtió en 1988 en la primera mujer de raza negra en conseguir una de estas para usos médicos.","patentes");
const pQuiz1= new Quiz("CON LA P. Evelyn Berezin es conocida como la inventora de los ________ de texto. En 1968 desarrolló la idea de un programa que permítia almacena y editar textos","procesadres");
const pQuiz2= new Quiz("CON LA P. Grace Hopper dijo:' si es una buena idea, continuad y llevadla a cabo. Es mucho más fácil pedir disculpas que conseguir el ___________ necesario'.","permiso");
const p = new Question('p',[pQuiz0,pQuiz1,pQuiz2]);
//constra q
const qQuiz0= new Quiz("CON LA Q. Disciplina científica en la que Marie Curie obtuvo su segundo premio Nobel, entre otras cosas por el descubrimiento de los elementos Radio y Polonio.","quimica");
const qQuiz1= new Quiz("CON LA Q. Alice Ball feu una  __________- estadounidense que desarrolló el únco tratamiento efectivo contra la lepra hasta la aparición de los antibióticos en 1940.","quimica");
const qQuiz2= new Quiz("CON LA Q. Vera Rubin descubrió la materia oscura que existe en el universo. Nunca recibió el Nobel por este descubrimiento. ¿Que astrónoma estadunidense experta en estrellas masivas afirma que es uno de los descubrimientos más importantes que ha cambiado nuestro conocimiento del espacio?.","emily levesque");
const q = new Question('q',[qQuiz0,qQuiz1,qQuiz2]);
//constra r
const rQuiz0= new Quiz("CON LA R. Nombre de la institución científica británica donde en 1901 no se permitió a la ingeniera, física y matemática Hertha Ayrton dar una conferencia sobre el arco eléctrico por ser mujer y la tuvo que dar un hombre en su lugar.","royal society");
const rQuiz1= new Quiz("CON LA R. Rózsa Péter matemática húngara que elaboró las funciones __________, fundamentales en computación.","recursivas");
const rQuiz2= new Quiz("CON LA R. Se la considera la madre de Internet y su mayor contribución fue la creación del protocolo STP.","radia perlman");
const r = new Question('r',[rQuiz0,rQuiz1,rQuiz2]);
//constra s
const sQuiz0= new Quiz("CON LA S. Parte inmaterial del módulo lunar del Apolo 11 diseñada por la ingeniera Margaret Hamilton que fue vital para su aterrizaje en la Luna, pese a los numerosos fallos y alarmas que se produjeron en la nave minutos antes del alunizaje.","software");
const sQuiz1= new Quiz("CON LA S. Jean E.Sammet impulsóel lenguaje de programación Formac,el cual fue el primero para la manipulación ________.","simbolica");
const sQuiz2= new Quiz("CON LA S. En que revista científica, Françoise Barré-Sinoussi publicó en 1983 el descubrimieto de u  retrovirus que después se conocería como VIH.","science");
const s = new Question('s',[sQuiz0,sQuiz1,sQuiz2]);
//constra t
const tQuiz0= new Quiz("CON LA T. Plantas modificadas genéticamente de cuyo estudio en España se considera pionera a Pilar Carbonero, ingeniera agrónoma que en 1994 fue la primera mujer en ingresar en la Real Academia de la Ingeniería.","transgenicos");
const tQuiz1= new Quiz("CON LA T. Cual es el nombre que se le da al un grupo de mujeres que en 1942 fueron contratadas por el ejército estadounidense durante la segunda guerra mundial para programar uno de los primeros computadores, el ENIAC, el cual estaba formado por las programadoras Betty Snyder Holberton, Jean Jennings Bartik, Kathleen McNulty Mauchly Antonelli, Marlyn Wescoff Meltzer, Ruth Lichterman Teitelbaum y Frances Bilas Spence.","top secret rosies");
const tQuiz2= new Quiz("CON LA T. Barbara McClintock el premio Nobel de Medicina por sus descubrimientos sobre el proceso de _______ de elementos del genoma, realizados en la década de los 50.","transposición");
const t = new Question('t',[tQuiz0,tQuiz1,tQuiz2]);
//constra u
const uQuiz0= new Quiz("CON LA U. Un informe de 2017 de esta organización internacional nos dice que solo 17 mujeres han ganado un premio Nobel en Física, Química o Medicina desde que Marie Curie ganó el primero en 1903, frente a los 572 hombres que lo han hecho.","unesco");
const uQuiz1= new Quiz("CON LA U. Para que línea aérea la ingeniera informática Evelyn Berezin desarrolló el primer sistema de reservas de billetes?","united airlines");
const uQuiz2= new Quiz("CON LA U. Emmy Noether, fuese la artífice de un teorema que permitió entender y resolver el problema de la conservación de la energía. Una ley que es clave en la visión actual del __________.","universo");
const u = new Question('u',[uQuiz0,uQuiz1,uQuiz2]);
//constra v
const vQuiz0= new Quiz("CON LA V. Nave espacial tripulada por la ingeniera y cosmonauta Valentina Tereshkova, la primera mujer que viajó al espacio en 1963.","vostok-6");
const vQuiz1= new Quiz("CON LA V. Rita Levi-Montalcini fue una neurologa y senadora italiana que trabajando con ________ de serpiente, tumore y saliva de ratón, descubrió el factor de crecimiento nervioso, NGF, una proteína que regula el crecimiento del nervio y mantiene sanas las neuronas.","veneno");
const vQuiz2= new Quiz("CON LA V. Rosalind Franklin dijo'La ciencia, para mí, explica parte de la _____. Hasta donde llega, se basa en hechos, experiencias y experimentos.'","vida");
const v = new Question('v',[vQuiz0,vQuiz1,vQuiz2]);
//constra w
const wQuiz0= new Quiz("CON LA W. Nombre con el el que conmemoramos el 11 de febrero, pero en inglés.","women and girls in science day");
const wQuiz1= new Quiz("CON LA W. Nombre de la famosa cientifica de la dinastía Quing.Su apellido es Zhenyi","wang");
const wQuiz2= new Quiz("CON LA W. Nombre de la primera mujer de Africa Oriental en tener un doctorado. Apellido Maathai","wangari");
const w = new Question('w',[wQuiz0,wQuiz1,wQuiz2]);
//constra x
const xQuiz0= new Quiz("CONTIENE LA X. País al que se exilió Marietta Blau con la llegada del nazismo tras la recomendación de Einstein al gobierno de ese país: “Le ruego encontrar un empleo para una doctora en física, de talento extraordinario, que tiene que salir de Viena por ser judía.Está especializada en radiactividad experimental”.","mexico");
const xQuiz1= new Quiz("CON LA X. Curie descubrió los elementos radiactivos polonio y radio; posteriormente fundó un instituto de investigación en Varsovia e inventó las unidades móviles de ___________.","rayos x");
const xQuiz2= new Quiz("CONTIENE LA X. Ayudó a Rosalind Franklin a estudiar los compuestos.","rayos x");
const x = new Question('x',[xQuiz0,xQuiz1,xQuiz2]);
//constra y
const yQuiz0= new Quiz("CONTIENE LA Y. Nombre de un famoso cometa cuya trayectoria contribuyó a calcular la astrónoma Nicole-Reine Etable Lepaute en el siglo XVIII, pese a lo cual no fue incluida entre los autores de la predicción.","haley");
const yQuiz1= new Quiz("CONTIENE LA Y. Su curiosidad y control numérico llevaron a Katherine Johnson a realizar todos los cálculos del proyecto Mercury, siendo así la responsable de la __________ parabólica del primer vuelo tripulado al espacio.","trayectoria");
const yQuiz2= new Quiz("CONTIENE LA Y. Margulis fue una bióloga estadounidense cuya teoría endosimbiótica en serie del desarrollo de las células eucariotas revolucionó el concepto moderno de cómo surgió la vida en la Tierra. Qual es su nombre.","lynn");
const y = new Question('y',[yQuiz0,yQuiz1,yQuiz2]);
//constra z
const zQuiz0= new Quiz("CONTIENE LA Z. País en el que ha desarrollado su carrera la primatóloga Jane Goodall, considerada la mayor experta en chimpancés del mundo.","tanzania");
const zQuiz1= new Quiz("CON LA Z. Elizabeth blackburn bioquímca y bióloga molecular descubrió la telomerasa, una ________ que forma los telómeros deurante la duplicación del ADN.","enzima");
const zQuiz2= ("CONnew Quiz LA Z.En 1937, fue la primera mujer vasca que finalizó sus estudios de Veterinaria. Entre otros investigó sobre la fiebre aftosa.","luz zalduegi");
const z = new Question('z',[zQuiz0,zQuiz1,zQuiz2]);

preguntas.push(a,b,c,d,e,f,g,h,i,j,k,l,m,n,ñ,o,p,q,r,s,t,u,v,w,x,y,z);

//funciones navegacion


function showInstructions() {
    document.querySelector('#container-menu').style.visibility='hidden';
    document.querySelector('#container-instructions').style.visibility='visible';
    document.querySelector('#name_registro').style.visibility='hidden';

}
function returnToMenu() {
    document.body.style.background="url('./Red2030_MujeresCiencia.gif')";
    document.body.style.backgroundSize='100%';
    document.querySelector('#container-menu').style.visibility='visible';
    document.querySelector('#container-instructions').style.visibility='hidden';
    document.querySelector('#container-best-players').style.visibility='hidden';
    document.querySelector('#user_button').style.visibility='hidden';
    document.querySelector('#pasapalabra').style.visibility = 'hidden';
    document.querySelector('#contadores').style.visibility='hidden';
    
    
   
}

function classification(){
    document.body.style.background="url('./Red2030_MujeresCiencia.gif')";
    document.body.style.backgroundSize='100%';
    document.querySelector('#crono').style.visibility='hidden';
    document.querySelector('#pasapalabra').style.visibility = 'hidden';
    document.querySelector('#contadores').style.visibility='hidden';
    document.querySelector('#container-menu').style.visibility='hidden';
    document.querySelector('#name_registro').style.visibility='hidden';
    document.querySelector('#user_button').style.visibility='hidden';
    document.querySelector('#container-best-players').style.visibility='visible';
    creationRanquingList();
}
function userNamePanel(){
    document.querySelector('#name_registro').style.visibility='visible';
}

function userName(){
    const name= document.querySelector('#user_name').value;
    jugador = new User(name,0);
    if(!(jugadores.some(item => item.userName === name))){
        jugadores.push(jugador);

    }else{

        const pos= jugadores.findIndex(i=>i.userName===name);
        jugadores[pos]= jugador;
    }
    document.querySelector('#container-menu').style.visibility ='hidden';
    document.querySelector('#name_registro').style.visibility='hidden';
    document.body.style.background = 'linear-gradient(to top, #fdc2d1, #73328d)';
    document.querySelector('#pasapalabra').style.visibility = 'visible';
    document.querySelector('#start').style.visibility='visible';
}


function preguntar(){
    document.querySelector('#crono').style.visibility='visible';
    document.querySelector('#answer').value='';
    document.querySelector('#start').style.visibility='hidden';
    document.querySelector('#user_button').style.visibility='visible';
    document.querySelector('#contadores').style.visibility='visible';
    if(num === preguntas.length){num=0}
    if(statusCount===preguntas.length){return endPasapalabra()}
    if(preguntas[num].status===0){
        document.querySelector('#game_question').innerHTML= preguntas[num].quiz[numQuiz].question;
        document.querySelector('.rosco-letras :nth-child('+(num+1)+')').style.backgroundColor='#F7e26b';
    }else{
        num+=1;
        preguntar();
        
    }
    
    
}

function checkAnswer(){
    const answer= document.querySelector('#answer').value.toLowerCase();
    if(answer===preguntas[num].quiz[numQuiz].answer){ 
        swal('¡correcto!',"¡Sigue así!","success");
        document.querySelector('.rosco-letras :nth-child('+(num+1)+')').style.backgroundColor='#49a28e';              
        preguntas[num].status=1;
        acertadas+=1;
        document.querySelector('#correct').innerHTML= acertadas;
        num+=1;
        statusCount+=1;
    }else if(answer===""){
        swal("Por favor, escriba una respuesta");
    } else{
        swal("¡Has Fallado!", "La respuesta correcta es "+ preguntas[num].quiz[numQuiz].answer,"error");
        document.querySelector('.rosco-letras :nth-child('+(num+1)+')').style.backgroundColor='#e8563f';
        error+=1;
        document.querySelector('#incorrect').innerHTML= error;
        preguntas[num].status=-1;
        num+=1;
        statusCount+=1;
    }
    
        preguntar(); 
}
function pasapalabra(){
        if(preguntas[num].status === 0){
            document.querySelector('.rosco-letras :nth-child('+(num+1)+')').style.backgroundColor='#6495ed';
            num+=1;
        }
        
        preguntar();

}
function end(){
    swal("Hasta la vista!", "Has acertado un total de "+acertadas+" preguntas"+" y  has fallado "+ error);
    returnToMenu();
    resetStatus();
   
}

function endPasapalabra(){
    debugger;
    swal("Has acertado un total de "+acertadas+" preguntas"+" y  has fallado "+ error);
    jugador.score=acertadas;
    for(let i=0; i<jugadores.length;i++){
        if(jugadores[i].userName===jugador.userName){
            jugadores[i].score=acertadas;
        }
    }
    classification();
    quizRound();
}
function quizRound(){
    if(numQuiz>=2){
        numQuiz=0;
    }else{
        numQuiz+=1;
    }
}
// gestion puntos y ranquing

//ranquig puntos
function ranquing(){
    
    jugadores.sort(function(a,b){
        if(a.score>b.score){
            return -1;
        }
        if(a.score<b.score){
            return 1;
        }
        return 0;
    });
    
}

function creationRanquingList(){
    const list= document.getElementById("players_list");
    
    while(list.firstChild){
        list.removeChild(list.firstChild);
    }
    ranquing();
    for(let i=0; i<jugadores.length;i++){
        const li= document.createElement("li");
        list.appendChild(li).innerHTML =`${jugadores[i].userName} ::: ${jugadores[i].score} puntos`;
    }
    
    
    return list;
}
//timer
function timer(){
    document.getElementById('timer_display').innerHTML="04:00";
    timeLeft= TOTAL_TIME;
    timeGenerate = setInterval(function(){
        timeLeft--;
        document.getElementById('timer_display').innerHTML= formatTime(timeLeft);
        if(timeLeft===0){
            clearInterval(timeGenerate);
            endPasapalabra();
        }
        setCircleTimeColor();
        setCodeColors();   
    
    },1000)
}
function formatTime(time){
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    if(seconds<10){
        seconds= `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
}
//timer animation
function calculateTimeFraction(){
    const timeFraction= timeLeft/TOTAL_TIME;
    return timeFraction -(1/TOTAL_TIME)*(1-timeFraction);
}
function setCircleTimeColor(){
    const circleColorFraction=`${(calculateTimeFraction()*283).toFixed(0)} 283`
    document.getElementById("color-timer").setAttribute("stroke-dasharray", circleColorFraction);
}

function setCodeColors(){
    
    if(timeLeft<=15){
        document.querySelector('#color-timer').setAttribute("color",'red');
    }else if(timeLeft<=30){
        document.querySelector('#color-timer').setAttribute("color",'orange');
    }else{
        document.querySelector('#color-timer').setAttribute("color",'rgb(65, 184, 131)');
    }

}
//reset status
function resetStatus(){
    
    statusCount=0;
    acertadas=0;
    error=0;
    num=0;
    document.querySelector('#incorrect').innerHTML= error;
    document.querySelector('#correct').innerHTML= acertadas;
    for(let i in preguntas){
        preguntas[i].status=0;
    }
    for(let j=1;j<=preguntas.length;j++){
        document.querySelector('.rosco-letras :nth-child('+(j)+')').style.backgroundColor='#6495ed'
    }
    
    
}


//buttons
const okButtonName= document.querySelector('#ok_name');
const start= document.querySelector('#start');
const returnMenu= document.querySelectorAll('#stop');
const answerInput= document.querySelector('#answer');
const pasapalabraButton = document.querySelector('#pasa');
const enterButton=document.querySelector('#enter');
const endButton=document.querySelector('#end');

answerInput.addEventListener("keyup", function(event) {
    if(event.keyCode === 13){
        event.preventDefault();
        document.querySelector('#enter').click();
    }
})
enterButton.addEventListener('click',button=>{
    checkAnswer();
})

pasapalabraButton.addEventListener('click', button =>{
    pasapalabra();
})

endButton.addEventListener('click', button =>{
    endPasapalabra();
})
returnMenu.forEach(button =>{
    button.addEventListener('click',()=>{
        returnToMenu();
    })
})

okButtonName.addEventListener('click', button =>{
    userName();
})

start.addEventListener('click', button => {
    resetStatus();
    preguntar();
    timer();
})

document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.code === "ArrowRight") {
        document.querySelector('#pasa').click();
    }
}

window.addEventListener("keyup", function (event) {
  if (event.defaultPrevented) {
    return; // No hace nada si el evento ya se ha activado
  }


  switch (event.key) {
    case "Esc": // IE/Edge
    case "Escape":
        document.querySelector('#end').click();
      break;
    default:
      return;
  }


  event.preventDefault();
}, true);