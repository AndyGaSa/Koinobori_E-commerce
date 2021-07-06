/**
** Bingo Skylab por MaLb
**
**/
let nombre
let puntos = 0
let numerosCorrectos = [] 
let contador = []
let jugadores = [
    {nombre: "Pedro", puntos: 100, intentos: 36},
    {nombre: "Julian", puntos: 140, intentos: 38},
    {nombre: "Andrea", puntos: 110, intentos: 42},
    {nombre: "Maria", puntos: 180, intentos: 27},
    {nombre: "José", puntos: 170, intentos: 23},
    {nombre: "Antonio", puntos: 160, intentos: 41}
]


const Saludar = () => alert(`Bienvenido al Bingo Skylab.`)
const ReglasDelJuego = () => alert(`Reglas del Juego \n -10 puntos por acierto\n -5 puntos por Linea. \n -1 punto por no acertar. \n Buena suerte.`)
const ObtenerNombre = () => {`${nombre}`
    do{
        nombre = prompt(`Cuentanos tu nombre para registrar tu puntuación. `)
    }while(nombre === null) 
    

     console.log()
}
const MostrarCarton = () => {
     for (let i = 0; i < 15; i++) {
        let numeroCarton = Math.floor(Math.random()*50 ) + 1
        if(numeroCarton === 0 || numerosCorrectos.includes(numeroCarton)){
            i--
        }else {
            numerosCorrectos.push(numeroCarton)
        }
        
    }
    console.table(numerosCorrectos)
}
const ConfirmarCarton = () => {
    let respCarton = false;
        while(respCarton === false){
            respCarton = confirm(`Por favor ${nombre} Presiona Aceptar para jugar con este Carton o Cancelar para obtener otro.`)
            if(respCarton === true){
                console.log(`Perfecto ${nombre} vamos a jugar...`)               
            }else if(respCarton === false){
                numerosCorrectos.splice(0, numerosCorrectos.length)
                MostrarCarton()
            }
        }
}
const partidaBingo = () => {
    let bingoCarton = numerosCorrectos.map(n => n )
    alert(`Vamos Jugar al Bingo ${nombre}`)
        do{
            
            num = Math.floor(Math.random()*50) + 1
            
            if(contador.indexOf(num) === -1 && num !== 0){
                alert(`El Nº que a salido és: ${num}. `)
                contador.push(num)
                if(bingoCarton.includes(num)){
                    bingoCarton.forEach((n, i, a) => {
                        if(num === n){
                            bingoCarton.splice(i, 1, "X")
                            alert(`Bien, el Nº${num} esta en tu Bingo. +10 punto. `)
                            puntos += 10
                            console.table(bingoCarton)
                        }
                    });
                }else{
                    alert(`El Nº${num} no esta en tu Bingo. -1 punto. `)
                    puntos -=1
                }
            }
            
            if(bingoCarton[0] === "X" && bingoCarton[1] === "X" && bingoCarton[2] === "X" ){
                alert(`Has logrado la 1ª Linea +5 puntos.`)
                bingoCarton[0] = "L"
                bingoCarton[1] = "L"
                bingoCarton[2] = "L"
            }else if(bingoCarton[3] === "X" && bingoCarton[4] === "X" && bingoCarton[5] === "X" ){
                alert(`Has logrado la 2ª Linea +5 puntos.`)
                bingoCarton[3] = "L"
                bingoCarton[4] = "L"
                bingoCarton[5] = "L"
            }else if(bingoCarton[6] === "X" && bingoCarton[7] === "X" && bingoCarton[8] === "X" ){
                alert(`Has logrado la 4ª Linea +5 puntos.`)
                bingoCarton[6] = "L"
                bingoCarton[7] = "L"
                bingoCarton[8] = "L" 
            }else if(bingoCarton[9] === "X" && bingoCarton[10] === "X" && bingoCarton[11] === "X" ){
                alert(`Has logrado la 5ª Linea +5 puntos.`)
                bingoCarton[9] = "L"
                bingoCarton[10] = "L"
                bingoCarton[11] = "L"
            }else if(bingoCarton[12] === "X" && bingoCarton[13] === "X" && bingoCarton[14] === "X" ){
                alert(`Has logrado la 6ª Linea +5 puntos.`)
                bingoCarton[12] = "L"
                bingoCarton[13] = "L"
                bingoCarton[14] = "L"
            }else{
                console.log(`Estos son tus puntos. ${puntos}`)
            }

        }while(bingoCarton.some(Number))
        console.log(`Bingo ${nombre} has finalizado tu carton.`)
        alert(`Bingo ${nombre} has finalizado tu carton.`)
}
const guardarJugador = () => {

    function Jugador(nombre, puntos, intentos){
        this.nombre = nombre;
        this.puntos = puntos;
        this.intentos = intentos;
        
    }
    var jug = new Jugador(nombre, puntos, contador.length)
    jugadores.push(jug)

    jugadores.sort((a, b) =>{
        return b.puntos - a.puntos
    })


}
const mostrarRanking = () => {
    console.log(`Tabla de jugadores`)
    jugadores.forEach((jugador, index, Array) => {
        console.log(`${jugador.nombre} está en el ${index + 1}º lugar, con ${jugador.puntos} puntos.`)
    });
}
const finalizarJuego = () => {
    let fin = confirm("Deseas crear un nuevo Usuario, Pulsa aceptar para sí o Cancelar para salir del juego. ")

    if(fin === true){
        nombre = ""
        puntos = 0
        numerosCorrectos.splice(0, numerosCorrectos.length)
        contador.splice(0, contador.length)
        alert(`Vamos por un nuevo juego.`)
        bingo()

    }else{
        let finFin = confirm(`Seguro deseas salir del juego ${nombre}.`)
        if(finFin === true){
            alert(`Hemos terminado el juego ${nombre}, adios.`)
        }else{
            finalizarJuego()
        }
    }
}

function bingo(){
    
    Saludar()
    ReglasDelJuego()
    ObtenerNombre()
    MostrarCarton()
    ConfirmarCarton()
    partidaBingo()
    guardarJugador()
    mostrarRanking()
    finalizarJuego()


}
bingo()







