
let n1;
let n2;
let operacion;

function borraCero() {
    let value = document.getElementById("pantalla").innerHTML;
    if (value == "0") {
         value = " "
         document.getElementById("pantalla").innerHTML = value;
    }
}

function concatenar(valor){
    borraCero();
    document.getElementById("pantalla").innerHTML += valor;
}

function suma(){
    n1= document.getElementById("pantalla").innerHTML;
    operacion = "+";
    borrar();
}

function resta(){
    n1= document.getElementById("pantalla").innerHTML;
    operacion = "-";
    borrar();
}

function divi(){
    n1= document.getElementById("pantalla").innerHTML;
    operacion = "/";
    borrar();
}

function multi(){
    n1= document.getElementById("pantalla").innerHTML;
    operacion = "x";
    borrar();
}

function igual(){
    n2=document.getElementById("pantalla").innerHTML;
    resolver();
}

function reset(){
    document.getElementById("pantalla").innerHTML="0";
    n1=0;
    n2=0;
    operacion="";
}

function borrar(){
    document.getElementById("pantalla").innerHTML="";
  
}


function resolver(){
    let resul=0;
    switch(operacion){
        case"+":
            resul= parseFloat(n1)+parseFloat(n2);
            break;
        case"-":
            resul=parseFloat(n1)-parseFloat(n2);
            break;
        case"x":
            resul=parseFloat(n1)*parseFloat(n2);
            break;
        case"/":
            resul=parseFloat(n1)/parseFloat(n2);
            break;
    }

    reset();
    document.getElementById("pantalla").innerHTML=resul;
}
