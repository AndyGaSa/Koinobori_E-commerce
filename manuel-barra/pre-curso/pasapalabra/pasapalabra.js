/**
 **
 **     Skylab Pasapalabra Hip Hop Editión.
 **
 ** -- Contador de Aciertos y Desaciertos.
 ** -- "Pasapalabra" muestra la misma pregunta.
 ** -- Resumen de puntos obtenidos
 ** -- Ranking de jugadores
 ** -- Salida del programa
 **/

let nombre;
let puntos = 0;
let cont = 0; // Este contador nos ayudará a mostrar las distintas preguntas.
let letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let arrayPreguntas = [] // Array de Objetos con preguntas y Respustas.
let ranking = [{ nombre: "Manuel", puntos: 26 }, { nombre: "Marcos", puntos: 20 }, { nombre: "Josefina", puntos: 23 }, { nombre: "Andrea", puntos: 25 }]

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
let aPreguntaUno = { pregunta: "¿Creador de la canción 'Remind My Soul'?", respuesta: "Akrobatik" }
let aPreguntaDos = { pregunta: "¿Creador de la canción 'Lenguage Art'?", respuesta: "ARSONISTS" }
let aPreguntaTres = { pregunta: "¿Creador de la canción 'Mon texte, le savon'?", respuesta: "AKHENATON" }
const PreguntaA = new Preguntas(letras[0], aPreguntaUno, aPreguntaDos, aPreguntaTres)
arrayPreguntas.push(PreguntaA)
    // Letra B
let bPreguntaUno = { pregunta: "¿Creador de la canción 'How will I make it'?", respuesta: "BIG L" }
let bPreguntaDos = { pregunta: "¿Creador de la canción 'Uknowhowwedu'?", respuesta: "BAHAMADIA" }
let bPreguntaTres = { pregunta: "¿Creador de la canción 'I Got Cha Opin'?", respuesta: "Black Moon" }
const PreguntaB = new Preguntas(letras[1], bPreguntaUno, bPreguntaDos, bPreguntaTres)
arrayPreguntas.push(PreguntaB)
    // Letra c
let cPreguntaUno = { pregunta: "¿Creador de la canción 'I Used to Love H.E.R.'?", respuesta: "Common" }
let cPreguntaDos = { pregunta: "¿Creador de la canción 'The Anthem'?", respuesta: "Cali Agents" }
let cPreguntaTres = { pregunta: "¿Creador de la canción 'Illusions'?", respuesta: "Cypress Hill" }
const PreguntaC = new Preguntas(letras[2], cPreguntaUno, cPreguntaDos, cPreguntaTres)
arrayPreguntas.push(PreguntaC)
    // Letra d
let dPreguntaUno = { pregunta: "¿Creador de la canción 'Baknaffek.'?", respuesta: "Das efx" }
let dPreguntaDos = { pregunta: "¿Creador de la canción 'Worst Comes To Worst'?", respuesta: "Dilated Peoples" }
let dPreguntaTres = { pregunta: "¿Creador de la canción 'Song In D Minor'?", respuesta: "Declaime" }
const PreguntaD = new Preguntas(letras[3], dPreguntaUno, dPreguntaDos, dPreguntaTres)
arrayPreguntas.push(PreguntaD)
    // Letra e
let ePreguntaUno = { pregunta: "¿Creador de la canción 'Rap God'?", respuesta: "Eminen" }
let ePreguntaDos = { pregunta: "¿Creador de la canción 'Music'?", respuesta: "Erick Sermon" }
let ePreguntaTres = { pregunta: "¿Creador de la canción 'Love Of My Life (An Ode To Hip Hop)'?", respuesta: "Erykah Badu" }
const PreguntaE = new Preguntas(letras[4], ePreguntaUno, ePreguntaDos, ePreguntaTres)
arrayPreguntas.push(PreguntaE)
    // Letra f
let fPreguntaUno = { pregunta: "¿Creador de la canción 'L'Amour du risque'?", respuesta: "Funky family" }
let fPreguntaDos = { pregunta: "¿Creador de la canción 'MmmHmm'?", respuesta: "Flying Lotus" }
let fPreguntaTres = { pregunta: "¿Creador de la canción 'Ready or Not'?", respuesta: "Fugees" }
const PreguntaF = new Preguntas(letras[5], fPreguntaUno, fPreguntaDos, fPreguntaTres)
arrayPreguntas.push(PreguntaF)
    // Letra G
let gPreguntaUno = { pregunta: "¿Creador de la canción 'The Ride Of Your Life'?", respuesta: "Gift Of Gab" }
let gPreguntaDos = { pregunta: "¿Creador de la canción 'Introduction'?", respuesta: "Guru" }
let gPreguntaTres = { pregunta: "¿Creador de la canción 'Full Clip'?", respuesta: "Gang Starr" }
const PreguntaG = new Preguntas(letras[6], gPreguntaUno, gPreguntaDos, gPreguntaTres)
arrayPreguntas.push(PreguntaG)
    // Letra H
let hPreguntaUno = { pregunta: "¿Creador de la canción 'El barrio'?", respuesta: "Hurricane G" }
let hPreguntaDos = { pregunta: "¿Creador de la canción 'Leflaur Leflah Eshkoshka'?", respuesta: "Heltah Skeltah" }
let hPreguntaTres = { pregunta: "¿Creador de la canción 'Music For Life'?", respuesta: "Hi-Tek" }
const PreguntaH = new Preguntas(letras[7], hPreguntaUno, hPreguntaDos, hPreguntaTres)
arrayPreguntas.push(PreguntaH)
    // Letra I
let iPreguntaUno = { pregunta: "¿Creador de la canción 'Caught In A Hustle'?", respuesta: "Immortal Technique" }
let iPreguntaDos = { pregunta: "¿Creador de la canción 'L'empire du coté obscur'?", respuesta: "IAM" }
let iPreguntaTres = { pregunta: "¿Creador de la canción 'It Was A Good Day'?", respuesta: "Ice Cube" }
const PreguntaI = new Preguntas(letras[8], iPreguntaUno, iPreguntaDos, iPreguntaTres)
arrayPreguntas.push(PreguntaI)
    // Letra J
let jPreguntaUno = { pregunta: "¿Creador de la canción 'Last Donut of the Night (Donuts)'?", respuesta: "J Dilla" }
let jPreguntaDos = { pregunta: "¿Creador de la canción 'The Story of O.J.'?", respuesta: "Jay Z" }
let jPreguntaTres = { pregunta: "¿Creador de la canción 'I Against I'?", respuesta: "Jedi Mind Tricks" }
const PreguntaJ = new Preguntas(letras[9], jPreguntaUno, jPreguntaDos, jPreguntaTres)
arrayPreguntas.push(PreguntaJ)
    // Letra K
let kPreguntaUno = { pregunta: "¿Creador de la canción 'Alright'?", respuesta: "Kendric Lamar" }
let kPreguntaDos = { pregunta: "¿Creador de la canción 'The Finer Things'?", respuesta: "Kan Kick" }
let kPreguntaTres = { pregunta: "¿Creador de la canción 'Good Morning'?", respuesta: "Kanye West" }
const PreguntaK = new Preguntas(letras[10], kPreguntaUno, kPreguntaDos, kPreguntaTres)
arrayPreguntas.push(PreguntaK)
    // Letra L
let lPreguntaUno = { pregunta: "¿Creador de la canción 'Due Process'?", respuesta: "Lone Catalysts" }
let lPreguntaDos = { pregunta: "¿Creador de la canción 'Doo-Wop'?", respuesta: "Lauryn Hill" }
let lPreguntaTres = { pregunta: "¿Creador de la canción 'I GOT 5 ON IT'?", respuesta: "Luniz" }
const PreguntaL = new Preguntas(letras[11], lPreguntaUno, lPreguntaDos, lPreguntaTres)
arrayPreguntas.push(PreguntaL)
    // Letra M
let mPreguntaUno = { pregunta: "¿Creador de la canción 'Secrets of the Sands'?", respuesta: "Mood" }
let mPreguntaDos = { pregunta: "¿Creador de la canción 'Accordion'?", respuesta: "Madvillain" }
let mPreguntaTres = { pregunta: "¿Creador de la canción 'Acknowledge'?", respuesta: "Masta Ace" }
const PreguntaM = new Preguntas(letras[12], mPreguntaUno, mPreguntaDos, mPreguntaTres)
arrayPreguntas.push(PreguntaM)
    // Letra N
let nPreguntaUno = { pregunta: "¿Creador de la canción 'One Mic'?", respuesta: "Nas" }
let nPreguntaDos = { pregunta: "¿Creador de la canción '14 Years Of Rap'?", respuesta: "Non Phixion" }
let nPreguntaTres = { pregunta: "¿Creador de la canción 'Reflection Eternal'?", respuesta: "Nujabes" }
const PreguntaN = new Preguntas(letras[13], nPreguntaUno, nPreguntaDos, nPreguntaTres)
arrayPreguntas.push(PreguntaN)
    // Letra O
let oPreguntaUno = { pregunta: "¿Creador de la canción '365 Jours'?", respuesta: "Oxmo Puccino" }
let oPreguntaDos = { pregunta: "¿Creador de la canción 'ATLiens'?", respuesta: "Outkast" }
let oPreguntaTres = { pregunta: "¿Creador de la canción 'Fudge Pudge'?", respuesta: "Organized Konfus" }
const PreguntaO = new Preguntas(letras[14], oPreguntaUno, oPreguntaDos, oPreguntaTres)
arrayPreguntas.push(PreguntaO)
    // Letra P
let pPreguntaUno = { pregunta: "¿Creador de la canción 'Right Or Wrong'?", respuesta: "Planet Asia" }
let pPreguntaDos = { pregunta: "¿Creador de la canción 'Keep It Thoro'?", respuesta: "Prodigy" }
let pPreguntaTres = { pregunta: "¿Creador de la canción 'Take You There'?", respuesta: "Pete Rock" }
const PreguntaP = new Preguntas(letras[15], pPreguntaUno, pPreguntaDos, pPreguntaTres)
arrayPreguntas.push(PreguntaP)
    // Letra Q
let qPreguntaUno = { pregunta: "¿Creador de la canción 'Let's Ride'?", respuesta: "Q-Tip" }
let qPreguntaDos = { pregunta: "¿Creador de la canción 'U.N.I.T.Y.'?", respuesta: "Queen Latifah" }
let qPreguntaTres = { pregunta: "¿Creador de la canción 'Low Class Conspiracy'?", respuesta: "Quasimoto" }
const PreguntaQ = new Preguntas(letras[16], qPreguntaUno, qPreguntaDos, qPreguntaTres)
arrayPreguntas.push(PreguntaQ)
    // Letra R
let rPreguntaUno = { pregunta: "¿Creador de la canción 'When I B On Tha Mic'?", respuesta: "Rakim" }
let rPreguntaDos = { pregunta: "¿Creador de la canción 'You Can't Stop Me Now", respuesta: "RZA" }
let rPreguntaTres = { pregunta: "¿Creador de la canción 'Gunz'?", respuesta: "Rasco" }
const PreguntaR = new Preguntas(letras[17], rPreguntaUno, rPreguntaDos, rPreguntaTres)
arrayPreguntas.push(PreguntaR)
    // Letra S
let sPreguntaUno = { pregunta: "¿Creador de la canción 'Samourai'?", respuesta: "Shurikn" }
let sPreguntaDos = { pregunta: "¿Creador de la canción 'Lao Fai", respuesta: "Self Scientific" }
let sPreguntaTres = { pregunta: "¿Creador de la canción 'That's My People'?", respuesta: "Supreme NTM" }
const PreguntaS = new Preguntas(letras[18], sPreguntaUno, sPreguntaDos, sPreguntaTres)
arrayPreguntas.push(PreguntaS)
    // Letra T
let tPreguntaUno = { pregunta: "¿Creador de la canción 'Overnight Celebrity'?", respuesta: "Twista" }
let tPreguntaDos = { pregunta: "¿Creador de la canción 'Takin Ova'?", respuesta: "The Foreing Exchange" }
let tPreguntaTres = { pregunta: "¿Creador de la canción 'The Blast'?", respuesta: "Talib Kweli" }
const PreguntaT = new Preguntas(letras[19], tPreguntaUno, tPreguntaDos, tPreguntaTres)
arrayPreguntas.push(PreguntaT)
    // Letra U
let uPreguntaUno = { pregunta: "¿Creador de la canción 'Truly Unique'?", respuesta: "Unspoken Heard" }
let uPreguntaDos = { pregunta: "¿Creador de la canción 'Beautiful Day'?", respuesta: "U-N-I" }
let uPreguntaTres = { pregunta: "¿Creador de la canción 'Bizarre'?", respuesta: "U-god" }
const PreguntaU = new Preguntas(letras[20], uPreguntaUno, uPreguntaDos, uPreguntaTres)
arrayPreguntas.push(PreguntaU)
    // Letra V
let vPreguntaUno = { pregunta: "¿Creador de la canción 'If You Can't Say Love'?", respuesta: "Visionaries" }
let vPreguntaDos = { pregunta: "¿Creador de la canción 'Sound Of The Weapon'?", respuesta: "Verbal Kent" }
let vPreguntaTres = { pregunta: "¿Creador de la canción 'Fahrenheit 911'?", respuesta: "Virtuoso" }
const PreguntaV = new Preguntas(letras[21], vPreguntaUno, vPreguntaDos, vPreguntaTres)
arrayPreguntas.push(PreguntaV)
    // Letra W
let wPreguntaUno = { pregunta: "¿Creador de la canción 'Regulate'?", respuesta: "Warrem G" }
let wPreguntaDos = { pregunta: "¿Creador de la canción 'Triumph'?", respuesta: "Wu-Tang" }
let wPreguntaTres = { pregunta: "¿Creador de la canción 'Men In Black'?", respuesta: "Will Smith" }
const PreguntaW = new Preguntas(letras[22], wPreguntaUno, wPreguntaDos, wPreguntaTres)
arrayPreguntas.push(PreguntaW)
    // Letra X
let xPreguntaUno = { pregunta: "¿Creador de la canción 'Paparazzi'?", respuesta: "Xzibit" }
let xPreguntaDos = { pregunta: "¿Creador de la canción 'Retour Aux Pyramides'?", respuesta: "X-Men" }
let xPreguntaTres = { pregunta: "¿Creador de la canción 'Men In Black'?", respuesta: "Will Smith" }
const PreguntaX = new Preguntas(letras[23], xPreguntaUno, xPreguntaDos, xPreguntaTres)
arrayPreguntas.push(PreguntaX)
    // Letra Y 
let yPreguntaUno = { pregunta: "¿Creador de la canción 'You Can't Play With My Yo Yo'?", respuesta: "Yo-Yo" }
let yPreguntaDos = { pregunta: "¿Creador de la canción 'Feel Me'?", respuesta: "Yahzarah" }
let yPreguntaTres = { pregunta: "¿Creador de la canción 'Men In Black'?", respuesta: "Will Smith" }
const PreguntaY = new Preguntas(letras[24], yPreguntaUno, yPreguntaDos, yPreguntaTres)
arrayPreguntas.push(PreguntaY)
    // Letra Z
let zPreguntaUno = { pregunta: "¿Creador de la canción 'C.I.A. (Criminals In Action)'?", respuesta: "Zack De La Rocha" }
let zPreguntaDos = { pregunta: "¿Creador de la canción 'Bandy Bandy'?", respuesta: "Zap Mama" }
let zPreguntaTres = { pregunta: "¿Creador de la canción 'Greater Than The Sun'?", respuesta: "Zo!" }
const PreguntaZ = new Preguntas(letras[25], zPreguntaUno, zPreguntaDos, zPreguntaTres)
arrayPreguntas.push(PreguntaZ)


function bienvenida() {
    alert(`Bienvenido a Skylab Pasapalabra`)
    let conf = confirm(`Iniciar una Partida`)

    if (conf === true) {
        obtenerNombre()
    } else {
        salir()
    }

}

function obtenerNombre() {
    do {
        nombre = prompt(`Cuentanos tu nombre y saldrás en la lista de resultados`)
    } while (nombre === null || nombre === "")
    juego()
}

function juego() {

    let resp // Variable que recoje las repuestas. 
    for (const el in arrayPreguntas) {

        if (cont === 0) {
            resp = prompt(`Con la letra ${arrayPreguntas[el].letra}, la pregunta es: ${arrayPreguntas[el].pregunta1.pregunta}`)
            if (resp !== null) {

                if (resp.toUpperCase() === "PASAPALABRA") {
                    alert(`Suerte en la proxima ${nombre}`)
                } else if (resp.toUpperCase() === "END") {
                    salir()
                    return `Adios`
                } else if (resp.toUpperCase() === arrayPreguntas[el].pregunta1.respuesta.toUpperCase()) {
                    puntos += 3
                    alert(`Correcto  La respuesta es ${arrayPreguntas[el].pregunta1.respuesta} sumas 3 puntos.`)
                } else {
                    puntos += 1
                    alert(`Respuesta incorrecta. La respuesta es ${arrayPreguntas[el].pregunta1.respuesta}, sumas 1 punto.`)
                }

            } else {
                salir()
                console.log(`Estos son tus puntos ${puntos}`)
                return "Adios"
            }


        } else if (cont === 1) {
            resp = prompt(`Con la letra ${arrayPreguntas[el].letra}, la pregunta es: ${arrayPreguntas[el].pregunta2.pregunta}`)
            if (resp !== null) {

                if (resp.toUpperCase() === "PASAPALABRA") {
                    alert(`Suerte en la proxima ${nombre}`)
                } else if (resp.toUpperCase() === "END") {
                    salir()
                    return `Adios`
                } else if (resp.toUpperCase() === arrayPreguntas[el].pregunta2.respuesta.toUpperCase()) {
                    puntos += 3
                    alert(`Correcto sumas 3 puntos. La respuesta es ${arrayPreguntas[el].pregunta2.respuesta} sumas 3 puntos.`)
                } else {
                    puntos += 1
                    alert(`Respuesta incorrecta. La respuesta es ${arrayPreguntas[el].pregunta2.respuesta}`)
                }

            } else {
                salir()
                return `Adios`
            }
        } else if (cont === 2) {
            resp = prompt(`Con la letra ${arrayPreguntas[el].letra}, la pregunta es: ${arrayPreguntas[el].pregunta3.pregunta}`)
            if (resp !== null) {

                if (resp.toUpperCase() === "PASAPALABRA") {
                    alert(`Suerte en la proxima ${nombre}`)
                } else if (resp.toUpperCase() === "END") {
                    salir()
                    return `Adios`
                } else if (resp.toUpperCase() === arrayPreguntas[el].pregunta3.respuesta.toUpperCase()) {
                    puntos += 3
                    alert(`Correcto sumas 3 puntos. La respuesta es ${arrayPreguntas[el].pregunta3.respuesta} sumas 3 puntos.`)
                } else {
                    puntos += 1
                    alert(`Respuesta incorrecta. La respuesta es ${arrayPreguntas[el].pregunta3.respuesta}`)
                }

            } else {
                salir()
                return `Adios`
            }
        }



    }
    alert(`${nombre} tienes un total de: ${puntos} puntos.`)
    const jug = new Jugador(nombre, puntos)
    ranking.push(jug)
    mostrarRanking()
}

function mostrarRanking() {
    ranking.sort((a, b) => {
        return b.puntos - a.puntos
    })
    console.log(`Tabla de jugadores`)
    ranking.forEach((jugador, index, Array) => {
        console.log(`${jugador.nombre} está en el ${index + 1}º lugar, con ${jugador.puntos} puntos.`)
    });
    nuevaPartida()
}

function nuevaPartida() {
    let nuPartida = confirm('¿Quieres empezar una nueva partida?')

    if (nuPartida === true) {
        nombre = ""
        puntos = 0
        bienvenida()
    } else {
        salir()
    }
}

function salir() {
    let sal = confirm(`¿Realmente quieres salir del juego?`)

    if (sal === true) {
        return alert(`Adios`)
    } else {
        nuevaPartida()
    }
}


function pasapalabra() {
    bienvenida()
}
pasapalabra()