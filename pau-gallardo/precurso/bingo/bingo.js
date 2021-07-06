//Main function of the exercise
function bingo(){
    let userName = prompt('¡Bienvenido! ¿Cómo te llamas?');                     //Ask user name
    confirm('Por cada roda que tardes en compeltar el carton se añadira un punto a tu score. Acaba con el menor número de puntos posible!');
    let playerClasification = [[25,'Pedro'], [15,'Lucia'], [40,'Alberto']];
    let canviar = true;                                                         //Variable to track change of carton
    let bingoCard;                                                              //Variable that will save bingoCard obj
    let turno = true;                                                           //Variable to track turns
    let bombo = new Bombo;                                                      //Number generator
    let play = true;                                                            //Play status
   

    while (play){                                                               //Will the user wants to play
        while (canviar){                                                        //Will the user wants to change carton
            bingoCard = new BingoCard(userName);                                
            console.table(bingoCard.card);
            canviar = confirm(`¿Desea canviar de carton ${userName}?`);
        }
        while(turno && !bingoCard.win){                                         //Will the game isnt won yet or the user wants to quit
            bingoCard.update(bombo.newNumber());
            console.table(bingoCard.card);
            if (!bingoCard.win){
                turno = confirm('Desea jugar otro turno?');
            }
        }
        playerClasification.push([bingoCard.score, userName]);
        console.log(playerClasification.sort().toString());
        play = confirm('¿Desea jugar otra partida?');                           //Asks if the user wants to play more
        if (play){
            canviar = true;
        }
    }   
}

//********Support functions***********
//Generate new randow number
function generateRandomNumber(min,max){                         //Parameters min value included max value excluded
    return Math.floor(Math.random() * (max - min)) + min;       //Returns random number
}

//********Contstructor functions********
function BingoCard(userName){
    this.userName = userName;                                   //Saves userName
    this.card = [];                                             //Saves Bingo Card numbers and matches
    this.win = false;                                           //Status of the winer
    this.linea =false;                                          //Status of the linea sing
    this.score = 0;                                             //Score

    this.update = function(num){                                //Checks if the number is in the bingo card, checks if the player has line or has won, uptates the score
        for (let i = 0; i < this.card.length; i++){
            let index = this.card[i].indexOf(num);
            if (index !== -1){
                this.card[i][index] = "X";
            }
            if (this.card[i].toString() === "X,X,X,X,X" && !this.linea){     //If the linia hasnt been singed and the Bingo Card has linea alert!
                alert(`¡¡Linea!!`);
                this.linea = true;
            } 
        }
       if (this.card[0].toString()==this.card[1].toString() && this.card[0].toString()==this.card[2].toString()){     //Checks if the player has won comparing the content of the three subarrays
            debugger;
           this.win = true;
           alert(`¡Enhorabuena ${this.userName}, has ganado!`);
           alert(`Tu score ha sido de ${this.score}`);
       }else{                                                     //Adds one point to the score
           this.score++;
       }
    }

    let randomNumber = generateRandomNumber(1,16);                //Generates one random number between min and max excluded
    let card = [];
    while(card.length < 15){                                      //Generates 15 random numbers non repeated
        if (!card.includes(randomNumber)){
            card.push(randomNumber);
        }else{
            randomNumber = generateRandomNumber(1,16);
        }
    }
    let partOne = card.splice(1,5);                               //This part sets this.card = [[Arr1],[Arr2],[Arr3]]
    this.card.push(partOne);
    let partTwo = card.splice(1,5);
    this.card.push(card);
    this.card.push(partTwo);
}


function Bombo(){
    this.bombo = [];
    let randomNumber = generateRandomNumber(1,16);              //Generates a new rdm number not repeated, returns it and adds it to the bombo
    let ok;
    this.newNumber = function(){
        ok = true;
        while(ok){
            if (!this.bombo.includes(randomNumber)){
                this.bombo.push(randomNumber);
                ok = false;
                return randomNumber;
            }else{
                randomNumber = generateRandomNumber(1,16);
            }
        }
    } 
}

bingo();