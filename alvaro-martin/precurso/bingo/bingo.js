let bingoCard = ['l1', 'l2', 'l3']
bingoCard[0] = [ 'x0', 'x1', 'x2', 'x3', 'x4']
    
bingoCard[1] = [ 'x0', 'x1', 'x2', 'x3', 'x4' ]

bingoCard[2] = [ 'x0', 'x1', 'x2', 'x3', 'x4' ]
 
let numerosAleatorios = []
let linea1 = []
let linea2 = []
let linea3 = []
let bingoTotal = []
let bolasSalidas = []
let turnosTotal = 0
let puntuacionFinal = 0
let cantarLinea = false
let cantarBingo = false
let usuarios = 
    [{nombre : 'Lucas' , puntuacion : 89 } ,
    {nombre : 'Ana' , puntuacion : 54 } ,
    {nombre : 'Marta' , puntuacion : 68} ,
    {nombre : 'Jon' , puntuacion : 70 } 
    ]


function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

function carton(){
    for (let i = 0 ; i < bingoCard[0].length ; i++) {
        bingoCard[0][i] = randomIntFromInterval(1 , 30)
        
    }
    for (let j = 0 ; j < bingoCard[1].length ; j++) {
        bingoCard[1][j] = randomIntFromInterval(31 , 60)
        
    }
    for (let b = 0 ; b < bingoCard[2].length ; b++) {
        bingoCard[2][b] = randomIntFromInterval(61 , 90)
        
    }
    var unicos0 = bingoCard[0].filter(function(item, index, array) {
        return array.indexOf(item) === index;
    })
    var unicos1 = bingoCard[1].filter(function(item, index, array) {
        return array.indexOf(item) === index;
    })
    var unicos2 = bingoCard[2].filter(function(item, index, array) {
        return array.indexOf(item) === index;
    })

    if (unicos0.length != 5 || unicos1.length != 5 || unicos2.length != 5 ){
        carton()
    } else {
        console.table(bingoCard)
    }}

    
function bingoMatch(){
    
    let bola = randomIntFromInterval(1 , 90)

    if (bolasSalidas.includes(bola)){
        bingoMatch()
    }else {
        bolasSalidas.push(bola)
    
    
    
    
    for (let i = 0 ; i < bingoCard.length ; i++){
    for (let j = 0 ; j < bingoCard[i].length ; j++)
    
    if (bola == bingoCard[i][j]){
        
        bingoCard[i][j] = "X"  
        bingoTotal.push(bola)

        if (i === 0 && linea1 < 5) {
            linea1++;
        } else if (i === 1 && linea2 < 5) {
            linea2++;
        } else {
            linea3++;
        }

    }
   
}
    alert(bola)
    console.table(bingoCard)
}}

function linea (){
    if (linea1 === 5 || linea2 === 5 || linea3 === 5){
        alert('LINEA')
        puntuacionFinal += 50
        cantarLinea = true
    }
}

function bingo (){
    if (bingoTotal.length === 15){
        alert ('BINGO')
        puntuacionFinal += 100
        cantarBingo = true
    }
}
function jugar(){  
    carton()
    let nuevoCarton = confirm('¿Quieres mantener este cartón?')
    if(nuevoCarton === true){    
        do {
            bingoMatch()
            if (!cantarLinea){
                linea()
            }
            if (!cantarBingo){
                bingo()
            }
            turnosTotal++
            otraBola = confirm('Nuevo turno?')
            if (otraBola === false){
               
                usuarios.push({nombre : nombreUsuario , puntuacion :  puntuacionFinal - turnosTotal})
                usuarios.sort(function (a, b) {
                    if (a.puntuacion < b.puntuacion) {
                      return 1;
                    }
                    if (a.puntuacion > b.puntuacion) {
                      return -1;
                    }
                    return 0;
                  });
                  
                console.table(usuarios)
                break
            }
        
        } while (cantarBingo === false )
        if (cantarBingo === true){
        usuarios.push({nombre : nombreUsuario , puntuacion :  puntuacionFinal - turnosTotal})
        usuarios.sort(function (a, b) {
            if (a.puntuacion < b.puntuacion) {
              return 1;
            }
            if (a.puntuacion > b.puntuacion) {
              return -1;
            }
            return 0;
          });
        console.table(usuarios)
        }
        }
    else if (nuevoCarton === false){
        jugar()
    }
}
alert('¡Bienvenido al Bingo 🎰! Las reglas son simple: Gana puntos cantando Línea (+50) o Bingo (+100), cada turno restara un punto a la puntuación, quien tenga más puntos... ¡GANA!')
let nombreUsuario = prompt('Introduce tu Usuario:');
    alert('Bienvenido ' + nombreUsuario);
jugar()

