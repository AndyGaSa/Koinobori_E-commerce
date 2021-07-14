function Persona(nombre,puntos) {
    this.nombre=nombre;
    this.puntos=puntos;
}

let jugadores =[
  {nombre:"Raul",acertados:7},
  {nombre:"Paul",puntos:5},
  {nombre:"Eddy",puntos:1},
  {nombre:"Jose",puntos:3}];


function bingo() {
    
    let j1 = new Persona(prompt("Cual es tu nombre"));

    console.log("Bienvenido "+j1.nombre);
    elegirCarton();
    
}



function crearTabla() {
    let numeros = [];
    let tabla = [[], [], []];
    let max = 15;

    while (numeros.length < max) {
        let num = Math.floor(Math.random() * 50 + 1);
        if(numeros.includes(num)!==true) {
            numeros.push(num);
        }

    }
    

    let maxi = 5;
    for (let i = 0; i < numeros.length; i++) {
        for (let j = 0; j < tabla.length; j++) {
            if(tabla[j].length < maxi){
                tabla[j].push(numeros[i]);
                break;
            }
        }

    }
   return tabla;
}

function numeroBola(){
    let num = Math.floor(Math.random() * 50 + 1);
   return num;
}

function partida(array){
    let carton=array;
    let linia=false;
    let contLinia=0;
    let cont=0;
    let bolasFuera=[];
    while(cont<15 ){
        let num = numeroBola();

        if(bolasFuera.includes(num)!==true) {
            
                alert("El numero del bombo es " + num);
                for(let i =0;i<carton.length;i++){
                    for(let j =0;j<carton[i].length;j++){
                        if(carton[i][j]===num){
                            carton[i][j]='X';
                            cont++;
                            console.table(carton)
                           
                            if(cont===15){
                                alert("Has cantado BINGOO");
                            }
                            
                        }
                          
                    }
                }
                
        }
        if(!linia){
            linia=comprobarLinia(carton);
          }
        bolasFuera.push(num);
    }
    empezar();

    

}


function comprobarLinia(array){
    let carton=array;
    let linia=false;
    let linia1=carton[0];
    let linia2=carton[1];
    let linia3=carton[2];
    let l1=0;
    let l2=0;
    let l3=0;
    let mensaje;
     
        for(let i = 0;i<linia1.length;i++){
       
          if(linia1[i]==="X"){
            l1++;
          }
     
        }
  
      for(let i =0;i<linia2.length;i++){
       
        if(linia2[i]==="X"){
          l2++;
        }
  
      }
  
      for(let i =0;i<linia3.length;i++){
        
        if(linia3[i]==="X"){
          l3++;
        }
  
      }
  
      if(l1===5||l2===5||l3===5){
          alert("Has cantado LINIAA");
        linia=true;
      }
     return linia
  
  }

  function elegirCarton(){
  
    console.log("Este es tu carton");
     let carton=crearTabla();
     console.table(carton);
 
     let elegir=confirm("Quieres seguir con este carton?");
 
     if(elegir===true){
        partida(carton);
     }else{console.clear();
        elegirCarton();}
 }

 function empezar(){
  let empezar=confirm("Quieres jugar de nuevo");
  if(empezar===true){
      console.clear();
      bingo();
  }else{
      alert("Hasta Pronto");
  }
    
 }

 

function ranking(nombre,puntos){

    
  let jugador = new Object();

   jugador.nombre = nombre;
  jugador.puntos=puntos;
  

  jugadores.push(jugador);

  for(let i =0;i<jugadores.length;i++){
      console.log(jugadores[i].puntos)
  }

 
    jugadores.sort(function (a, b) {
      if (a.puntos < b.puntos) {
        return 1;
      }
      if (a.puntos > b.puntos) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });

    for(let i =0 ;i<jugadores.length;i++){
      console.log(jugadores[i]);
  }

}

  
bingo();

//partida();

