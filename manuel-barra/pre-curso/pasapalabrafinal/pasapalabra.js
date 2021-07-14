/**
 **   Pasapalabra HTML
 **     
 ** Por la razón o la fuerza.
 **
 ** 1º INICIO Y CAPTURA DE NOMBRE
 **
 **/

let nombre = "";
let puntos = 0;
let letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let arrayPreguntas = [] // Array de Objetos con preguntas y Respustas.
let ranking = [{ nombre: "Manuel", puntos: 26 }, { nombre: "Marcos", puntos: 20 }, { nombre: "Josefina", puntos: 23 }, { nombre: "Andrea", puntos: 16 }]
let cont = 0;
let contPregunta = 1;
let fallos = 0;
let restantes = 26;
let arrayPasapalabra = []

class Jugador { //Constructor de la CLase Jugador
    constructor(nombre, puntos) {
        this.nombre = nombre;
        this.puntos = puntos;
    }
}

class Preguntas { // Constructor de las preguntas
    constructor(letra, pregunta1, pregunta2, pregunta3) {
        this.letra = letra;
        this.pregunta1 = pregunta1;
        this.pregunta2 = pregunta2;
        this.pregunta3 = pregunta3
    }

    getLetra() {
        return this.letra
    }
    getPregunta1() {
        return this.pregunta1
    }
    getPregunta2() {
        return this.pregunta2
    }
    getPregunta3() {
        return this.pregunta3
    }
    setLetra(letra) {
        this.letra = letra
    }
    setPregunta1(pregunta1) {
        this.pregunta1 = pregunta1
    }
    setPregunta2(pregunta2) {
        this.pregunta2 = pregunta2
    }
    setPregunta3(pregunta3) {
        this.pregunta3 = pregunta3
    }
}






//Preguntas
// Letra A
let aPreguntaUno = { pregunta: "¿Creador de la canción 'Remind My Soul'?", respuesta: "Akrobatik", status: false }
let aPreguntaDos = { pregunta: "¿Creador de la canción 'Lenguage Art'?", respuesta: "ARSONISTS", status: false }
let aPreguntaTres = { pregunta: "¿Creador de la canción 'Mon texte, le savon'?", respuesta: "AKHENATON", status: false }
const PreguntaA = new Preguntas(letras[0], aPreguntaUno, aPreguntaDos, aPreguntaTres)
arrayPreguntas.push(PreguntaA)
    // Letra B
let bPreguntaUno = { pregunta: "¿Creador de la canción 'How will I make it'?", respuesta: "BIG L", status: false }
let bPreguntaDos = { pregunta: "¿Creador de la canción 'Uknowhowwedu'?", respuesta: "BAHAMADIA", status: false }
let bPreguntaTres = { pregunta: "¿Creador de la canción 'I Got Cha Opin'?", respuesta: "Black Moon", status: false }
const PreguntaB = new Preguntas(letras[1], bPreguntaUno, bPreguntaDos, bPreguntaTres)
arrayPreguntas.push(PreguntaB)
    // Letra c
let cPreguntaUno = { pregunta: "¿Creador de la canción 'I Used to Love H.E.R.'?", respuesta: "Common", status: false }
let cPreguntaDos = { pregunta: "¿Creador de la canción 'The Anthem'?", respuesta: "Cali Agents", status: false }
let cPreguntaTres = { pregunta: "¿Creador de la canción 'Illusions'?", respuesta: "Cypress Hill", status: false }
const PreguntaC = new Preguntas(letras[2], cPreguntaUno, cPreguntaDos, cPreguntaTres)
arrayPreguntas.push(PreguntaC)
    // Letra d
let dPreguntaUno = { pregunta: "¿Creador de la canción 'Baknaffek.'?", respuesta: "Das efx", status: false }
let dPreguntaDos = { pregunta: "¿Creador de la canción 'Worst Comes To Worst'?", respuesta: "Dilated Peoples", status: false }
let dPreguntaTres = { pregunta: "¿Creador de la canción 'Song In D Minor'?", respuesta: "Declaime", status: false }
const PreguntaD = new Preguntas(letras[3], dPreguntaUno, dPreguntaDos, dPreguntaTres)
arrayPreguntas.push(PreguntaD)
    // Letra e
let ePreguntaUno = { pregunta: "¿Creador de la canción 'Rap God'?", respuesta: "Eminem", status: false }
let ePreguntaDos = { pregunta: "¿Creador de la canción 'Music'?", respuesta: "Erick Sermon", status: false }
let ePreguntaTres = { pregunta: "¿Creador de la canción 'Love Of My Life (An Ode To Hip Hop)'?", respuesta: "Erykah Badu", status: false }
const PreguntaE = new Preguntas(letras[4], ePreguntaUno, ePreguntaDos, ePreguntaTres)
arrayPreguntas.push(PreguntaE)
    // Letra f
let fPreguntaUno = { pregunta: "¿Creador de la canción 'L'Amour du risque'?", respuesta: "Funky family", status: false }
let fPreguntaDos = { pregunta: "¿Creador de la canción 'MmmHmm'?", respuesta: "Flying Lotus", status: false }
let fPreguntaTres = { pregunta: "¿Creador de la canción 'Ready or Not'?", respuesta: "Fugees", status: false }
const PreguntaF = new Preguntas(letras[5], fPreguntaUno, fPreguntaDos, fPreguntaTres)
arrayPreguntas.push(PreguntaF)
    // Letra G
let gPreguntaUno = { pregunta: "¿Creador de la canción 'The Ride Of Your Life'?", respuesta: "Gift Of Gab", status: false }
let gPreguntaDos = { pregunta: "¿Creador de la canción 'Introduction'?", respuesta: "Guru", status: false }
let gPreguntaTres = { pregunta: "¿Creador de la canción 'Full Clip'?", respuesta: "Gang Starr", status: false }
const PreguntaG = new Preguntas(letras[6], gPreguntaUno, gPreguntaDos, gPreguntaTres)
arrayPreguntas.push(PreguntaG)
    // Letra H
let hPreguntaUno = { pregunta: "¿Creador de la canción 'El barrio'?", respuesta: "Hurricane G", status: false }
let hPreguntaDos = { pregunta: "¿Creador de la canción 'Leflaur Leflah Eshkoshka'?", respuesta: "Heltah Skeltah", status: false }
let hPreguntaTres = { pregunta: "¿Creador de la canción 'Music For Life'?", respuesta: "Hi-Tek", status: false }
const PreguntaH = new Preguntas(letras[7], hPreguntaUno, hPreguntaDos, hPreguntaTres)
arrayPreguntas.push(PreguntaH)
    // Letra I
let iPreguntaUno = { pregunta: "¿Creador de la canción 'Caught In A Hustle'?", respuesta: "Immortal Technique", status: false }
let iPreguntaDos = { pregunta: "¿Creador de la canción 'L'empire du coté obscur'?", respuesta: "IAM", status: false }
let iPreguntaTres = { pregunta: "¿Creador de la canción 'It Was A Good Day'?", respuesta: "Ice Cube", status: false }
const PreguntaI = new Preguntas(letras[8], iPreguntaUno, iPreguntaDos, iPreguntaTres)
arrayPreguntas.push(PreguntaI)
    // Letra J
let jPreguntaUno = { pregunta: "¿Creador de la canción 'Last Donut of the Night (Donuts)'?", respuesta: "J Dilla", status: false }
let jPreguntaDos = { pregunta: "¿Creador de la canción 'The Story of O.J.'?", respuesta: "Jay Z", status: false }
let jPreguntaTres = { pregunta: "¿Creador de la canción 'I Against I'?", respuesta: "Jedi Mind Tricks", status: false }
const PreguntaJ = new Preguntas(letras[9], jPreguntaUno, jPreguntaDos, jPreguntaTres)
arrayPreguntas.push(PreguntaJ)
    // Letra K
let kPreguntaUno = { pregunta: "¿Creador de la canción 'Alright'?", respuesta: "Kendric Lamar", status: false }
let kPreguntaDos = { pregunta: "¿Creador de la canción 'The Finer Things'?", respuesta: "Kan Kick", status: false }
let kPreguntaTres = { pregunta: "¿Creador de la canción 'Good Morning'?", respuesta: "Kanye West", status: false }
const PreguntaK = new Preguntas(letras[10], kPreguntaUno, kPreguntaDos, kPreguntaTres)
arrayPreguntas.push(PreguntaK)
    // Letra L
let lPreguntaUno = { pregunta: "¿Creador de la canción 'Due Process'?", respuesta: "Lone Catalysts", status: false }
let lPreguntaDos = { pregunta: "¿Creador de la canción 'Doo-Wop'?", respuesta: "Lauryn Hill", status: false }
let lPreguntaTres = { pregunta: "¿Creador de la canción 'I GOT 5 ON IT'?", respuesta: "Luniz", status: false }
const PreguntaL = new Preguntas(letras[11], lPreguntaUno, lPreguntaDos, lPreguntaTres)
arrayPreguntas.push(PreguntaL)
    // Letra M
let mPreguntaUno = { pregunta: "¿Creador de la canción 'Secrets of the Sands'?", respuesta: "Mood", status: false }
let mPreguntaDos = { pregunta: "¿Creador de la canción 'Accordion'?", respuesta: "Madvillain", status: false }
let mPreguntaTres = { pregunta: "¿Creador de la canción 'Acknowledge'?", respuesta: "Masta Ace", status: false }
const PreguntaM = new Preguntas(letras[12], mPreguntaUno, mPreguntaDos, mPreguntaTres)
arrayPreguntas.push(PreguntaM)
    // Letra N
let nPreguntaUno = { pregunta: "¿Creador de la canción 'One Mic'?", respuesta: "Nas", status: false }
let nPreguntaDos = { pregunta: "¿Creador de la canción '14 Years Of Rap'?", respuesta: "Non Phixion", status: false }
let nPreguntaTres = { pregunta: "¿Creador de la canción 'Reflection Eternal'?", respuesta: "Nujabes", status: false }
const PreguntaN = new Preguntas(letras[13], nPreguntaUno, nPreguntaDos, nPreguntaTres)
arrayPreguntas.push(PreguntaN)
    // Letra O
let oPreguntaUno = { pregunta: "¿Creador de la canción '365 Jours'?", respuesta: "Oxmo Puccino", status: false }
let oPreguntaDos = { pregunta: "¿Creador de la canción 'ATLiens'?", respuesta: "Outkast", status: false }
let oPreguntaTres = { pregunta: "¿Creador de la canción 'Fudge Pudge'?", respuesta: "Organized Konfus", status: false }
const PreguntaO = new Preguntas(letras[14], oPreguntaUno, oPreguntaDos, oPreguntaTres)
arrayPreguntas.push(PreguntaO)
    // Letra P
let pPreguntaUno = { pregunta: "¿Creador de la canción 'Right Or Wrong'?", respuesta: "Planet Asia", status: false }
let pPreguntaDos = { pregunta: "¿Creador de la canción 'Keep It Thoro'?", respuesta: "Prodigy", status: false }
let pPreguntaTres = { pregunta: "¿Creador de la canción 'Take You There'?", respuesta: "Pete Rock", status: false }
const PreguntaP = new Preguntas(letras[15], pPreguntaUno, pPreguntaDos, pPreguntaTres)
arrayPreguntas.push(PreguntaP)
    // Letra Q
let qPreguntaUno = { pregunta: "¿Creador de la canción 'Let's Ride'?", respuesta: "Q-Tip", status: false }
let qPreguntaDos = { pregunta: "¿Creador de la canción 'U.N.I.T.Y.'?", respuesta: "Queen Latifah", status: false }
let qPreguntaTres = { pregunta: "¿Creador de la canción 'Low Class Conspiracy'?", respuesta: "Quasimoto", status: false }
const PreguntaQ = new Preguntas(letras[16], qPreguntaUno, qPreguntaDos, qPreguntaTres)
arrayPreguntas.push(PreguntaQ)
    // Letra R
let rPreguntaUno = { pregunta: "¿Creador de la canción 'When I B On Tha Mic'?", respuesta: "Rakim", status: false }
let rPreguntaDos = { pregunta: "¿Creador de la canción 'You Can't Stop Me Now", respuesta: "RZA", status: false }
let rPreguntaTres = { pregunta: "¿Creador de la canción 'Gunz'?", respuesta: "Rasco", status: false }
const PreguntaR = new Preguntas(letras[17], rPreguntaUno, rPreguntaDos, rPreguntaTres)
arrayPreguntas.push(PreguntaR)
    // Letra S
let sPreguntaUno = { pregunta: "¿Creador de la canción 'Samourai'?", respuesta: "Shurikn", status: false }
let sPreguntaDos = { pregunta: "¿Creador de la canción 'Lao Fai", respuesta: "Self Scientific", status: false }
let sPreguntaTres = { pregunta: "¿Creador de la canción 'That's My People'?", respuesta: "Supreme NTM", status: false }
const PreguntaS = new Preguntas(letras[18], sPreguntaUno, sPreguntaDos, sPreguntaTres)
arrayPreguntas.push(PreguntaS)
    // Letra T
let tPreguntaUno = { pregunta: "¿Creador de la canción 'Overnight Celebrity'?", respuesta: "Twista", status: false }
let tPreguntaDos = { pregunta: "¿Creador de la canción 'Takin Ova'?", respuesta: "The Foreing Exchange", status: false }
let tPreguntaTres = { pregunta: "¿Creador de la canción 'The Blast'?", respuesta: "Talib Kweli", status: false }
const PreguntaT = new Preguntas(letras[19], tPreguntaUno, tPreguntaDos, tPreguntaTres)
arrayPreguntas.push(PreguntaT)
    // Letra U
let uPreguntaUno = { pregunta: "¿Creador de la canción 'Truly Unique'?", respuesta: "Unspoken Heard", status: false }
let uPreguntaDos = { pregunta: "¿Creador de la canción 'Beautiful Day'?", respuesta: "U-N-I", status: false }
let uPreguntaTres = { pregunta: "¿Creador de la canción 'Bizarre'?", respuesta: "U-god", status: false }
const PreguntaU = new Preguntas(letras[20], uPreguntaUno, uPreguntaDos, uPreguntaTres)
arrayPreguntas.push(PreguntaU)
    // Letra V
let vPreguntaUno = { pregunta: "¿Creador de la canción 'If You Can't Say Love'?", respuesta: "Visionaries", status: false }
let vPreguntaDos = { pregunta: "¿Creador de la canción 'Sound Of The Weapon'?", respuesta: "Verbal Kent", status: false }
let vPreguntaTres = { pregunta: "¿Creador de la canción 'Fahrenheit 911'?", respuesta: "Virtuoso", status: false }
const PreguntaV = new Preguntas(letras[21], vPreguntaUno, vPreguntaDos, vPreguntaTres)
arrayPreguntas.push(PreguntaV)
    // Letra W
let wPreguntaUno = { pregunta: "¿Creador de la canción 'Regulate'?", respuesta: "Warrem G", status: false }
let wPreguntaDos = { pregunta: "¿Creador de la canción 'Triumph'?", respuesta: "Wu-Tang", status: false }
let wPreguntaTres = { pregunta: "¿Creador de la canción 'Men In Black'?", respuesta: "Will Smith", status: false }
const PreguntaW = new Preguntas(letras[22], wPreguntaUno, wPreguntaDos, wPreguntaTres)
arrayPreguntas.push(PreguntaW)
    // Letra X
let xPreguntaUno = { pregunta: "¿Creador de la canción 'Paparazzi'?", respuesta: "Xzibit", status: false }
let xPreguntaDos = { pregunta: "¿Creador de la canción 'Retour Aux Pyramides'?", respuesta: "X-Men", status: false }
let xPreguntaTres = { pregunta: "¿Creador de la canción 'Men In Black'?", respuesta: "Will Smith", status: false }
const PreguntaX = new Preguntas(letras[23], xPreguntaUno, xPreguntaDos, xPreguntaTres)
arrayPreguntas.push(PreguntaX)
    // Letra Y 
let yPreguntaUno = { pregunta: "¿Creador de la canción 'You Can't Play With My Yo Yo'?", respuesta: "Yo-Yo", status: false }
let yPreguntaDos = { pregunta: "¿Creador de la canción 'Feel Me'?", respuesta: "Yahzarah", status: false }
let yPreguntaTres = { pregunta: "¿Creador de la canción 'Men In Black'?", respuesta: "Will Smith", status: false }
const PreguntaY = new Preguntas(letras[24], yPreguntaUno, yPreguntaDos, yPreguntaTres)
arrayPreguntas.push(PreguntaY)
    // Letra Z
let zPreguntaUno = { pregunta: "¿Creador de la canción 'C.I.A. (Criminals In Action)'?", respuesta: "Zack De La Rocha", status: false }
let zPreguntaDos = { pregunta: "¿Creador de la canción 'Bandy Bandy'?", respuesta: "Zap Mama", status: false }
let zPreguntaTres = { pregunta: "¿Creador de la canción 'Greater Than The Sun'?", respuesta: "Zo!", status: false }
const PreguntaZ = new Preguntas(letras[25], zPreguntaUno, zPreguntaDos, zPreguntaTres)
arrayPreguntas.push(PreguntaZ)


/*-------------->  Constantes <------------*/

const nameText = document.getElementById('nameText')
const formStart = document.getElementById('formStart')
const divInicio = document.getElementById('start_game')
const divJuego = document.getElementById('pasapalabra_game')
const pregunta = document.getElementById('ask')
const formGAme = document.getElementById('formGame')
const respuesta = document.getElementById('user-answer')
const pasapalabraButton = document.getElementById('pasapalabra')
const enviarRespuesta = document.getElementById('send')
const respuestaFalladas = document.getElementById('fails_words')
const preguntasFaltantes = document.getElementById('remaining')
const puntosSumados = document.getElementById('points')
const comentario = document.getElementsByClassName('comentario')
letraLuz = document.getElementById(letras[cont])





function juego() {

    pregunta.innerHTML = arrayPreguntas[cont][`pregunta${contPregunta}`].pregunta // Enseña la pregunta
    letraLuz = document.getElementById(letras[cont])
    enviarRespuesta.addEventListener('submit', () => {
        if (respuesta.value.toUpperCase() === arrayPreguntas[cont][`pregunta${contPregunta}`].respuesta.toUpperCase()) {
            alert('correcto')
            arrayPreguntas[cont][`pregunta${contPregunta}`].status = true
            letraLuz.style.background = 'green'
            respuesta.value = ""
            cont += 1
            restantes -= 1
            puntos += 3
            comentario.innerHTML = "Correcto!!"
            preguntasFaltantes.innerHTML = restantes
            puntosSumados.innerHTML = puntos

            juego()
        }

    })
    pasapalabraButton.addEventListener('click', () => {
        console.log(cont)
        arrayPasapalabra.push(arrayPreguntas[cont])
        console.log(arrayPasapalabra)
            /* letraLuz = document.getElementById(letras[cont]) */
        letraLuz.style.color = 'blue'
        letraLuz.style.border = "solid 4px blue"
        cont += 1
        restantes -= 1
        preguntasFaltantes.innerHTML = restantes
        juego()
    })
}





function inicio() {
    submitButton.addEventListener('click', () => {
        if (nameText.value.length > "") {
            divInicio.style.display = "none"
            divJuego.style.display = "flex"
            nombre = nameText.value
            nameText.value = ""
            juego()
        }

    })
}

inicio()