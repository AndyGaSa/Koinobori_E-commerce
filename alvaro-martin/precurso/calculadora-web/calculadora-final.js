let a
let b
let c



function calcu(){
    let resultado = document.getElementById("resultado")
    let reset = document.getElementById("reset")
    let suma= document.getElementById("suma")
    let resta = document.getElementById("resta")
    let multi = document.getElementById("multi")
    let divi = document.getElementById("divi")
    let igual = document.getElementById("igual")
    let uno = document.getElementById("uno")
    let dos = document.getElementById("dos")
    let tres = document.getElementById("tres")
    let cuatro = document.getElementById("cuatro")
    let cinco = document.getElementById("cinco")
    let seis = document.getElementById("seis")
    let siete = document.getElementById("siete")
    let ocho = document.getElementById("ocho")
    let nueve = document.getElementById("nueve")
    let cero = document.getElementById("cero")
    let coma = document.getElementById("coma")


    uno.onclick = function(i){
        resultado.textContent = resultado.textContent + "1"
    }
    dos.onclick = function(i){
        resultado.textContent = resultado.textContent + "2"
    }
    tres.onclick = function(i){
        resultado.textContent = resultado.textContent + "3"
    }
    cuatro.onclick = function(i){
        resultado.textContent = resultado.textContent + "4"
    }
    cinco.onclick = function(i){
        resultado.textContent = resultado.textContent + "5"
    }
    seis.onclick = function(i){
        resultado.textContent = resultado.textContent + "6"
    }
    siete.onclick = function(i){
        resultado.textContent = resultado.textContent + "7"
    }
    ocho.onclick = function(i){
        resultado.textContent = resultado.textContent + "8"
    }
    nueve.onclick = function(i){
        resultado.textContent = resultado.textContent + "9"
    }
    cero.onclick = function(i){
        resultado.textContent = resultado.textContent + "0"
    }
    coma.onclick = function(i){
        resultado.textContent = resultado.textContent + "."
    }

    reset.onclick = function(i){
       resetear() 
    }
    suma.onclick = function(i){
        a = resultado.textContent 
        c = "+"
        limpiar()
     }
     resta.onclick = function(i){
        a = resultado.textContent 
        c = "-"
        limpiar()
     }
     multi.onclick = function(i){
        a = resultado.textContent 
        c = "*"
        limpiar()
     }
     divi.onclick = function(i){
        a = resultado.textContent 
        c = "/"
        limpiar()
     }
     igual.onclick = function(i){
        b = resultado.textContent 
        resolver()
     }

}
function limpiar(){
    resultado.textContent = ""
}
function resetear(){
    resultado.textContent = ""
    a = 0
    b = 0
    c = ""
}
 function resolver(){
     let res = 0
     switch(c){
         case "+":
             res = parseFloat(a) + parseFloat(b)
             break
         case "-":
             res = parseFloat(a) - parseFloat(b)
             break
          case "/":
             res = parseFloat(a) / parseFloat(b)
             break    
         case "*":
             res = parseFloat(a) * parseFloat(b)
             break     
     }
     resetear()
     resultado.textContent = res
 }

