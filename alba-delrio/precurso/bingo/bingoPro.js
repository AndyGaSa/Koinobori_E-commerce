/*Esta versión el bombo tiene 50 bolas numeradas del 1 al 50.
Los cartones tienen 15 números que se encuentran distribuidos en 3 filas diferentes,
habiendo un total de 5 números por fila y sin casillas vacías*/

let bingoCard = [];
let numArray=[];
let count=0;
let counterPoints=0;
let counterTurns=0;
let players=[{userName:'Mario',score:70},{userName:'Laura',score:95},{userName:'Cris',score:100}];
let player;

class Element{
     constructor(number){
         this.number = number,
         this.matched=false
        }
}
class User{
    constructor(userName,score){
        this.userName= userName,
        this.score= score
    }
}
//BINGO
function bingo(){
    bingoCard=[];
    numArray=[];
    count=0;
    counterPoints=0;
    counterTurns=0
    userName();
    pointSystem();
    newBingoCard();
    printCard();
    cangheNewCard();
    numArray=[];
    juego();
    
}
//juego 
function juego(){
    
    let num = randomNumberGeneration(15);
    if((num !== 0) && (num !== undefined)){
        alert("El numero "+num);
    }
    for(let i=0; i<bingoCard.length;i++){
        for(let j=0; j<bingoCard[i].length;j++){
            if(bingoCard[i][j].number === num){
                bingoCard[i][j].number ='x';
                bingoCard[i][j].matched= true;  
            } 
          
        }
          
    }
    console.clear();
    printCard();
    
    
    let r = confirm("pasar al siguiente número?");
    if (!r){
        alert("Bye!");
    }else{
        while(!cantarBingo()){
            counterTurns += 1;
            if(count===0){
                cantarLinea();
                juego();
                
            }else if (count===1){
                juego();
            
            }

        }
    }
}

//pedir nombre de usuario y guardarlo
function userName(){
    
    let name = prompt("Introduzca su nombre, por favor:");
    player = new User(name,0);
    
        if(!(players.some(item => item.userName === name))){
        
            players.push(player);

        }else{
            
            alert("Este usuario ya existe.");
            let answer=prompt("Es la primera vez que juegas? s/n");
            if(answer==='s'){
                alert("Ya existe otro usuario con el mismo nombre. Por favor, escoge otro nombre.");
                userName();
            }
        }
    
}
//crear una targeta nueva
function newBingoCard(){
    let i =0;
    numArray=[];
    
    while(i<3){
        let linea=[];
        
        for(let j=0; j<5; j++){
            let num = randomNumberGeneration(15);
            if(num === undefined || num===0){
                j--;
            }else{
                elem=new Element(num);
            linea.push(elem);
            }        
        }
        bingoCard.push(linea);
        i++;

    }          
     return bingoCard;
}

// mostrar cartón
function printCard(){
    
    console.table(bingoCard.flat(),['number']);
}
//Cambio de cartón
function cangheNewCard(){
   let answer= prompt("Quiere generar un carton nuevo? s/n ");
   if (answer==="s"){
       bingoCard=[];
       newBingoCard();
       printCard();
       cangheNewCard()
   }

}
//function()=> Generar Numero Random
function randomNumberGeneration(max){
    let num = Math.round (Math.random()*max);

    if(max===0){
        return 0;
    }else{
    
        if(!(numArray.includes(num))){
            
            numArray.push(num);
            return num;
        }else{
            return randomNumberGeneration(max);
        }
    }

    
}  

//cantar Bingo
function cantarBingo(){
    let found=0;
    for(let i in bingoCard){
        for(let j in bingoCard[i]){
           if( bingoCard[i][j].matched){
                found++;
           }
        }
    }

    if(found===15){

        if(counterTurns === 15){
            counterPoints+= 500;
        }else if(counterTurns>15 && counterTurns<= 20 ){
            counterPoints+=300;
        }else if(counterTurns>20 && counterTurns<= 30 ){
            counterPoints+=200;
        }else{
            counterPoints+=100;
        }
        alert("BiNGo!!!");
        points();
        ranquing();
        let answer=prompt("Quieres jugar otra partida? s/n");
        if(answer==='s'){
            bingo();
        }else{
            alert("Bye!");
           return 0; 
        }
    }

}

// cantar línea
function cantarLinea(){
    
    let newArray_0 = bingoCard[0].filter(function(el){
        return(el.number === 'x')});
    let newArray_1 = bingoCard[1].filter(function(el){
        return(el.number === 'x')});
    let newArray_2 = bingoCard[2].filter(function(el){
        return(el.number === 'x')});
    
    if((newArray_0.length===5) ^ (newArray_1.length===5) ^ (newArray_2===5)){
        alert("LíNea!!");
        count=1;

    }
    if(count===1){
        if(counterTurns===5){
            counterPoints+=100;
        }else if(counterTurns>5){
            counterPoints+=50;
        }
    }
}


//mostrar sistema de puntos inicio
function pointSystem(){
    alert( "~·ReGLaS DeL JueGo·~" +'\n'+ "Si consigues LíNea en 5 turnos, obtendrás 100 puntos."+'\n'+"Si consigues LíNea en más de 5 turnos, obtendrás 50 puntos." +'\n'+ "Si consigues BiNGo en un mínimo de 15 turnos, obtendrás 500 puntos."+'\n'+"De 16 a 20 turnos 300 puntos."+'\n'+"De 21 a 30 turnos 200 puntos."+'\n'+"Más de 30 turnos, 100 puntos."
    );
}
//añadir puntos
function points(){
    
    player.score=counterPoints;

}
//ranquig puntos
function ranquing(){
    let result = "";
    players.sort(function(a,b){
        if(a.score>b.score){
            return -1;
        }
        if(a.score<b.score){
            return 1;
        }
        return 0;
    });
    for(let i in players){
        result+=`${players[i].userName}: ${players[i].score}\n`;
    }
    
    alert("RaNQuiNG:"+'\n'+ result);

}