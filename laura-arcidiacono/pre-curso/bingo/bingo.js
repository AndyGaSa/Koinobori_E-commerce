function bingo() {
    /*A function is declared to get the name of the user and return the user name or the text string "Strange" if the user does not want
    give his name*/
    function sayHi() {
        let userName = window.prompt("Hola! Vamos a jugar al Bingo, ¿Cuál es tu nombre?", "Leticia");
        while (userName === null) {
            userName = window.confirm("Deseas continuar sin decirnos tu nombre?");
            if (userName) {
                userName = "Stranger";
                return userName;
            } else {
                userName = window.prompt("Escribe tu nombre:");
            }
        }
        if (userName !== "") {
            return userName;
        } else {
            return "Stranger";
        }
    }
    /*A function is declared with a parameter to welcome the user using his name. It also explains the rules of the game and the point system.*/
    function welcome(oneName) {
        window.alert(`Bienvenid@ ${oneName}.\r\n\r\nVamos a jugar al Bingo!\r\n\r\nPrimero te mostraremos cartones de Bingo y deberás elegir un carton con tus número preferidos para jugar.\r\n\r\nEl puntaje máximo es 99.\r\n\r\nPor cada bolilla que pidas, perderás un punto.\r\n\r\nAl finalizar el juego podrás ver el Ranking de jugadores y su puntaje.\r\n\r\nPersiona Aceptar para comenzar a Jugar!`);
    }
    /*A function is declared with a parameter to say goodbye to the user with his name.*/
    function sayGoodBye(oneName) {
        window.alert(`Adios ${oneName}, vuelve a jugar al Bingo cuando quieras!`);
    }
    /*A function is declared to generate BingoCards. A let variable is declared with an array with three subarrays, 
    each of which will receive a maximum of five numeric values. The Bingo Card will have 15 random numbers between 1 and 99. 
    The numbers must not be repeated in the arrangement. Within each subarray, the numbers will appear in ascending order.*/
    function getBingoCard() {
        let arrayBingoCard = [
            [],
            [],
            [],
        ];
        for (let i = 0; i < arrayBingoCard.length; i++) {
            let min = (i * 33) + 1;
            let max = min + 33;
            while (arrayBingoCard[i].length < 5) {
                let numberInEachPositionOfBingoCard = Math.floor(Math.random() * (max - min)) + min;
                if (!arrayBingoCard[i].includes(numberInEachPositionOfBingoCard)) {
                    arrayBingoCard[i].push(numberInEachPositionOfBingoCard);
                }
            }
            arrayBingoCard[i].sort((a, b) => a - b);
        }
        console.table(arrayBingoCard);
        return arrayBingoCard;
    }
    /*A function is declared to print a Bingo Card on the console, and give the user the option to: choose the Bingo Card, change it for another with different numbers, or
    quit the game. Finally, the function will return the choosen Bingo Card.*/
    function showBingoCard() {
        let gameOptionInexistent;
        let theChoosenBingoCard;
        do {
            theChoosenBingoCard = getBingoCard();
            let chooseOneBingoCard = window.prompt("¿Deseas jugar con este carton de Bingo?\r\n\r\n Escribe 'jugar' si quieres jugar con este carton y presiona aceptar.\r\n\r\n Escribe 'cambiar' si no te gusta este carton y quieres ver otro. \r\n\r\n Presiona Cancelar si quieres salir del juego.", "jugar");
            gameOptionInexistent = false;
            switch (chooseOneBingoCard) {
                case "jugar":
                    window.alert("Has confirmado que éste será tu carton para jugar");
                    gameOptionInexistent = false;
                    break;
                case "cambiar":
                    console.clear();
                    gameOptionInexistent = true;
                    break;
                case null:
                    gameOptionInexistent = false;
                    theChoosenBingoCard = null;
                    break;
                default:
                    gameOptionInexistent = window.alert("No te he entendido.\r\\r\nEscribe una opcion de juego correcta.");
                    gameOptionInexistent = true;
            }
        } while (gameOptionInexistent);
        return theChoosenBingoCard;
    }

    /*
    A function is declared to display a random number between 1 and 99 to the user. Each number is stored in an array, and before displaying the next random number, the function checks
    that the array does not include the new number. In this way, the random numbers will not be repeated.*/
    function ballNumberGenerator(arrayOfAllRandomBallNumber) {
        let randomBallNumber;
        do {
            randomBallNumber = Math.floor(Math.random() * (100 - 1) + 1);
        } while (arrayOfAllRandomBallNumber.includes(randomBallNumber))
        return randomBallNumber;
    }

    /*A function is declared with two parameters: the player's Bingo card array and a random ball number. If the array includes the random ball number, 
    the number will be changed to an "x". Then, the function prints the modified Bingo Card on the console and returns the new array. Window.alert informs 
    the user whether or not the number was on the Bingo Card.*/
    function matchNumberBingoCard(arrayBingoCard, randomBallNumber) {
        let hereWasChanges = false;
        for (let i = 0; i < arrayBingoCard.length; i++) {
            for (let j = 0; j < arrayBingoCard[i].length; j++) {
                if (arrayBingoCard[i][j] === randomBallNumber) {
                    arrayBingoCard[i][j] = "x";
                    console.clear();
                    console.table(arrayBingoCard);
                    hereWasChanges = true;
                }
            }
        }
        if (hereWasChanges) {
            window.alert(`${finalUserName}! El número ${randomBallNumber} estaba en tu carton!\r\n\r\nPresiona Aceptar para seguir jugando.`);
        } else {
            window.alert(`No tienes el numero ${randomBallNumber} en tu cartón.\r\n\r\nPresiona Aceptar para seguir jugando`)
        }
        return arrayBingoCard;
    }
    /*A function is declared to check if each value in the array or sub-array is an "x" and returns a Boolean value.*/
    function isAllX(arrayOrSubarray) {
        for (let i = 0; i < arrayOrSubarray.length; i++) {
            if (arrayOrSubarray[i] !== "x") {
                return false;
            }
        }
        return true
    }
    /*A function is declared with two parameters: an array and the player's name. Each subarray represents a line in the Bingo Card. The function will check if
    each value on a line is an "x" and returns a boolean. If this is true, window.alert displays the message "Line!"*/
    function oneLineItsComplete(arrayBingoCard, finalUserName) {
        let isThereOneLineInTheBingoCard = false;
        for (let i = 0; i < arrayBingoCard.length; i++) {
            if (isAllX(arrayBingoCard[i])) {
                isThereOneLineInTheBingoCard = true;
                window.alert(`${finalUserName} has hecho LINEA!`);
            }
        }
        return isThereOneLineInTheBingoCard
    }
    /*A function is declared with two parameters: an array and the player's name. The function will check if
    each value on the Bingo Card is an "x" and returns a boolean. If this is true, window.alert displays the message "Bingo!"*/
    function youWin(arrayBingoCard, finalUserName) {
        for (let i = 0; i < arrayBingoCard.length; i++) {
            if (isAllX(arrayBingoCard[i]) !== true) {
                return false;
            }
        }
        window.alert(`BINGO! ${finalUserName} has completado tu cartón!`);
        return true
    }
    /*
    A function is declared with the number of turns used by the player as a parameter, and it will return the player's points once the game ends.*/
    function defineThePointsOfTheUser(numberShiftsSpentToWin) {
        let initialUserNamePoints = 99;
        let finalUserNamePoints = initialUserNamePoints - (numberShiftsSpentToWin);
        window.alert(`${finalUserName}, tu puntaje es: ${finalUserNamePoints}.`)
        return finalUserNamePoints;
    }
    /*A function is declared to generate random numbers that represent the scores of other players and will be displayed in the ranking positions.*/
    function toGenerateRandomPoints() {
        return Math.floor(Math.random() * (74 - 1) + 1)
    }
    /*A function is declared with two parameters: the username and the user points. This function declares a let variable that points to an array of 
    objects containing finctitious players and invokes the toGenerateRandomPoints() function to assign random scores to them. Finally, it places the 
    objects in descending order to return the array with the sort positions.*/
    function rankingOfPlayers(finalUserName, numberFinalUserNamePoints) {
        let arrayRankingPosition = [
            { name: "Aldana", points: toGenerateRandomPoints() },
            { name: "Emiliano", points: toGenerateRandomPoints() },
            { name: "Natalia", points: toGenerateRandomPoints() },
            { name: "Antonio", points: toGenerateRandomPoints() },
            { name: "Juan", points: toGenerateRandomPoints() },
            { name: "Isabel", points: toGenerateRandomPoints() },
            { name: `${finalUserName}`, points: Number(`${numberFinalUserNamePoints}`) },
            { name: "Angel", points: toGenerateRandomPoints() },
            { name: "Estela", points: toGenerateRandomPoints() },
            { name: "Atilio", points: toGenerateRandomPoints() },
        ];
        arrayRankingPosition.sort((a, b) => b.points - a.points);
        return arrayRankingPosition
    }
    /*    A function is declared with two parameters: the username and the array with the sort positions. The responsibility of this function is to display the
    ranking in a friendly way.*/
    function showTheRankingFriendly(finalUserName, arrayRankingPosition) {
        let prityRankingPosition = [];
        for (let i = 0; i < arrayRankingPosition.length; i++) {
            prityRankingPosition.push(`\r\n${arrayRankingPosition[i].name} logró bingo con ${arrayRankingPosition[i].points} puntos.`);
        }
        window.alert(`${finalUserName}, encuentra tu posición en el ranking del BINGO:\r\n\r\n${prityRankingPosition}`)
        return prityRankingPosition
    }
    /*A function is declared with a parameter to show the player the random ball number for that turn through the window. Returns true if the player 
    wants to continue playing or false if the player wants to end the game.*/
    function showTheBallAndAskForNextRandomBall(randomBallNumber) {
        return window.confirm(`Bolilla Número ${randomBallNumber}. \r\n\r\Presiona aceptar si quieres ver otra bolilla.\r\n\r\ Presiona Cancelar para salir del juego.`);
    }
    /*Here the program start to run: */
    let finalUserName = sayHi();
    welcome(finalUserName);
    do {
        let theChoosenBingoCard = showBingoCard();

        if (theChoosenBingoCard === null) {
            sayGoodBye(finalUserName);
        } else {
            let shiftSpents = 1;
            let youHaveOneLine = false;
            let doYouWannaKeepPlaying;
            let arrayOfAllRandomBallNumber = [];
            do {
                let randomBallNumber = ballNumberGenerator(arrayOfAllRandomBallNumber);
                arrayOfAllRandomBallNumber.push(randomBallNumber);
                doYouWannaKeepPlaying = showTheBallAndAskForNextRandomBall(randomBallNumber);
                theChoosenBingoCard = matchNumberBingoCard(theChoosenBingoCard, randomBallNumber);
                shiftSpents += 1;
                if (youHaveOneLine === false) {
                    if (oneLineItsComplete(theChoosenBingoCard, finalUserName)) {
                        youHaveOneLine = true;
                    }
                }
            } while (youWin(theChoosenBingoCard, finalUserName) === false && doYouWannaKeepPlaying)
            if (doYouWannaKeepPlaying) {
                let finalUserNamePoints = defineThePointsOfTheUser(shiftSpents);
                let arrayRankingPosition = rankingOfPlayers(finalUserName, finalUserNamePoints);
                showTheRankingFriendly(finalUserName, arrayRankingPosition);
            }
        }
    } while (window.confirm(`¿${finalUserName} quieres volver a jugar?`));

    sayGoodBye(finalUserName);
}
bingo();