/*A function is declared to obtein the user`s name, and return the username or the string "Stranger" if the user don´t wnat to 
say his name*/
function sayHi() {
    let userName = window.prompt("Hola! Has ingresado a SkyLab AirLines, ¿Cuál es tu nombre?", "Raquel");
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
/*A function is declares with a parameter to welcome the user using his name.*/
function welcome(name) {
    window.alert(`Bienvenid@ ${name}. Persiona Aceptar para conocer nuestros vuelos.`);
}
/*A funciton is declared with a parameter to show the flights, using the push method and a for loop to put the information
in the array, and return the array and diferetn text if the flights have or don´t have scale.*/
function letsShowFlights(flightsArray) {
    let arrayShowFlights = [];
    for (let i = 0; i < flightsArray.length; i++) {
        if (flightsArray[i].scale) {
            arrayShowFlights.push(`\r\n #El vuelo id Nº ${flightsArray[i].id} con origen en ${flightsArray[i].from} y destino ${flightsArray[i].to}, tiene un coste de ${flightsArray[i].cost}€; y realiza escalas.`);
        } else {
            arrayShowFlights.push(`\r\n #El vuelo id Nº ${flightsArray[i].id} con origen en ${flightsArray[i].from} y destino ${flightsArray[i].to}, tiene un coste de ${flightsArray[i].cost}€; y NO realiza escalas.`);
        }
    }
    return arrayShowFlights;
}

/*A funtion is declared with a parameter to return de average cost of the flights, it use a for loop using the addition assignment, and out of the 
for loop, the division assignment.*/
function averageCost(flightsArray) {
    let thisIsTheAverageCost = 0;
    for (let i = 0; i < flightsArray.length; i++) {
        thisIsTheAverageCost += flightsArray[i].cost;
    }
    thisIsTheAverageCost /= flightsArray.length;
    return thisIsTheAverageCost.toFixed(2)
}
/*A function is declared with a parameter to return the numbre of flights with sclae.*/
function withScaleFlights(flightsArray) {
    let numberOfWithScaleFlights = 0;
    for (let i = 0; i < flightsArray.length; i++) {
        if (flightsArray[i].scale) {
            numberOfWithScaleFlights += 1;
        }
    }
    return numberOfWithScaleFlights;
}
/*A function is declared with a parameter to return the last five flights of the day. This function use a for loop to go through the array, 
deceassin (i) until i its bigger than the array.length-6. So no matter how many elemnts have the array, the funcion, only return the last five.*/
function theLastFlightsOfTheDay(flightsArray) {
    let arrayTheLastFlightsOfTheDay = [];
    for (let i = flightsArray.length - 1; i > flightsArray.length - 6; i--) {
        arrayTheLastFlightsOfTheDay.push(`\r\n #El vuelo id Nº ${flightsArray[i].id} con origen en ${flightsArray[i].from} y destino ${flightsArray[i].to}.`)
    }
    return arrayTheLastFlightsOfTheDay;
}
/*A function is declared to return the kind of navigator: USER if widow.confirm === true, ADMIN if window.confirm === false*/
function defineTheKindOfNavigator() {
    let iAmThisKinfOfNavigator = window.confirm(`ATENCIÓN\r\n\r\nSi eres CLIENTE, presiona ACEPTAR.\r\n\r\nSi eres un ADMINISTRADOR@, presiona CANCELAR`);
    if (iAmThisKinfOfNavigator) {
        iAmThisKinfOfNavigator = "USER";
        return iAmThisKinfOfNavigator;
    } else {
        iAmThisKinfOfNavigator = "ADMIN";
        return iAmThisKinfOfNavigator;
    }
}
/*ADMIN Enabled Features*/
/*A function is declared that receives an array as a parameter. The function will return the modified array when creating a new object inside.*/
function passDatesOfTheNewFligth(flightsArray) {
    let newFlight = {};
    newFlight.id = flightsArray.length;
    do {
        newFlight.to = window.prompt("Ingresa el DESTINO del vuelo. Debe ser el nombre de una ciudad.", "Bariloche");
    } while (newFlight.to === null || newFlight.to === "");
    do {
        newFlight.from = window.prompt("Ingresa el ORIGEN del vuelo. Debe ser el nombre de una ciudad.", "Ushuaia");
    } while (newFlight.from === null || newFlight.from === "");
    do {
        newFlight.cost = Number(window.prompt("Ingresa el COSTO del vuelo. Debe ser un numero."));
    } while (isNaN(newFlight.cost) || newFlight.cost === null)
    newFlight.scale = window.confirm("Si el vuelo realiza escalas, presiona ACEPTAR. Si el vuelo NO realiza escalas, presiona CANCELAR.");
    console.log(newFlight);
    flightsArray.push(newFlight);
    return flightsArray;
}
/*A function is declared that takes an array and a numId as parameter. The function will return the indexOf of the numId, or null if the numId doesn`t exist.*/
function searchTheIndexOf(flightsArray, numId) {
    for (let i = 0; i < flightsArray.length; i++) {
        if (numId === flightsArray[i].id) {
            return i;
        }
    } return null;
}
/*A function is declared that takes an array and an indexOf as parameters, removes an element from indexOf in the array, and return the modified array. */
function eraseFlights(flightsArray, numIndex) {
    return flightsArray.splice(numIndex, 1);
}
/*A function is declared that takes an array as parameter. Through a do-while loop, as long as the specified condition is met, 
invoke the function that allows you to create flights */
function taskCreateFlight(flightsArray) {
    do {
        passDatesOfTheNewFligth(flightsArray);
    } while (flightsArray.length < 15 && window.confirm("¿Quieres crear un nuevo vuelo?"));
    if (flightsArray.length === 15) {
        window.alert("SkyLab Airlines no dispone de permisos para crear más vuelos para el día de hoy.\r\n\r\nPresiona Aceptar para continuar.");
    }
}
/*A function is declared that takes an array as a parameter. Through a do-while loop, it shows the existing flights and asks for the id of the flight that the user wants to delete.
Then, it calls the function that looks for the index of the object that contains that id and removes the selected object in the array.  */
function taskEraseFlight(flightsArray) {
    let numIdChoosen;
    let numIndexOfTheChoosenIdFlight;
    do {
        numIdChoosen = Number(window.prompt(`Esta es la lista de los vuelos de hoy de SkyLab Airlines.\r\n\r\nSi deseas ELIMINAR alguno de ellos, escribe su Nº de id:\r\n\r\n${letsShowFlights(flightsArray)}.\r\n`));
        numIndexOfTheChoosenIdFlight = searchTheIndexOf(flightsArray, numIdChoosen);
        if (numIndexOfTheChoosenIdFlight === null) {
            window.alert("Ese numero de id no existe.")
        }
    } while (numIndexOfTheChoosenIdFlight === null);
    eraseFlights(flightsArray, numIndexOfTheChoosenIdFlight);
}
/*A function is declared that takes an array as a parameter. Through a do-while loop, offers the possible tasks for the administrator to choose one of them. 
Through a switch, different cases and actions to be performed are specified that invoke the functions of the available tasks. The cycle repeats as long as 
the administrator wants to perform tasks.*/
function myTaskForToDayinSkyLabAirlines(flightsArray) {
    let taskInexistent;
    do {
        let nextTask = window.prompt("TAREAS A REALIZAR: Si quieres:\r\n\r\n#CREAR un nuevo vuelo, escribe 1;\r\n\r\n#ELIMINAR un vuelo existente, escribe 2;\r\n\r\n#ABANDONAR el programa presiona CANCELAR.");
        taskInexistent = false;
        switch (nextTask) {
            case "1":
                taskCreateFlight(flightsArray);
                break;
            case "2":
                taskEraseFlight(flightsArray);
                break;
            case null:
                window.alert(`Adios ${finalUserName}, nos vemos en tu próxima jornada de trabajo en SkyLab Airlines!`);
                break;
            default:
                taskInexistent = true;
        }
    } while (taskInexistent)
}

/*USER Enabled Features*/
/*A function is declared to return the user's reference budget.*/
function thisIsMyBudget() {
    let myBudget;
    do {
        myBudget = Number(window.prompt("Indica cuál es tu presupuesto de referencia.\r\nIngresa un valor numerico", "428"));
    } while (myBudget === null || myBudget === "" || isNaN(myBudget));
    return myBudget;
}
/*A function is declared that takes an arrray and a budget = number as parameters, goes through the array and returns an array with all the flights that cost less than the budget. */
function lowerCostFlightSearcher(flightsArray, myBudget) {
    let theLowerCostFlightsFound = [];
    for (let i = 0; i < flightsArray.length; i++) {
        if (myBudget > flightsArray[i].cost) {
            theLowerCostFlightsFound.push(flightsArray[i]);
        }
    }
    return theLowerCostFlightsFound;
}
/*A function is declared that takes an arrray and a budget = number as parameters, goes through the array and returns an array with all the flights that cost more than the budget. */
function higherCostFlightSearcher(flightsArray, myBudget) {
    let theHigherCostFlightsFound = [];
    for (let i = 0; i < flightsArray.length; i++) {
        if (myBudget < flightsArray[i].cost) {
            theHigherCostFlightsFound.push(flightsArray[i]);
        }
    }
    return theHigherCostFlightsFound;
}
/*A function is declared that takes an arrray and a budget = number as parameters, goes through the array and returns an array with all the flights that cost the same than the budget. */
function sameCostFlightSearcher(flightsArray, myBudget) {
    let theSameCostFlightsFound = [];
    for (let i = 0; i < flightsArray.length; i++) {
        if (myBudget === flightsArray[i].cost) {
            theSameCostFlightsFound.push(flightsArray[i]);
        }
    }
    return theSameCostFlightsFound;
}
/*A function is declared that takes an array as a parameter. Through a do-while loop, show the flights and request the id of the flight that the user wants to buy. If
the identification exists, and the user presses accept, the alert window shows the message of the completed purchase. */
function toBuyThisFlight(flightsArray) {
    let buyThisSpecificFlight;
    do {
        buyThisSpecificFlight = window.prompt(`¿Deseas comprar alguno de estos vuelos?\r\n${letsShowFlights(flightsArray)}\r\n\r\nEscribe el numero de id del vuelo que deseas y presiona ACEPTAR\r\n\r\nSi NO deseas comprar ninguno de estos vuelos, presiona CANCELAR para continuar SIN comprar.`);
    } while (searchTheIndexOf(flightsArray, buyThisSpecificFlight) && buyThisSpecificFlight !== null)
    if (buyThisSpecificFlight === null) {
        window.alert("Compra cancelada.");
    } else {
        window.alert("Gracias por su compra, puede seguir viendo vuelos en SkyLab Airlines.");
    }
}
/*A function is declared that takes an array and a budget = number as parameters. This function shows all the actions that the user can do, and returns an array with the flights
that match the search criteria.*/
function doYouWantSearchFlightsByCost(flightsArray, myBudget) {
    let flightsFoundWithTheChosenSearchCriteria = [];
    let wrongAsnwer;
    do {
        let chooseTheSearchCriteria = window.prompt("BUSCADOR DE VUELOS: Si quieres buscar vuelos:\r\n\r\n#Mas baratos que tu presupuesto máximo: escribe 1;\r\n\r\n#Mas caros que tu presupueto mínimo: escribe 2;\r\n\r\n#De igual precio que tu presupuesto exacto: escribe 3.\r\n\r\n#Si no quieres buscar vuelos: presiona CANCELAR.");
        wrongAsnwer = false;
        console.log(chooseTheSearchCriteria);
        switch (chooseTheSearchCriteria) {
            case "1":
                let lowerCostThanMyBudgetFlightArray = lowerCostFlightSearcher(flightsArray, myBudget);
                window.alert(`Estos son los vuelos de SkyLab Airlines mas baratos que tu presupuesto:\r\n${letsShowFlights(lowerCostThanMyBudgetFlightArray)}.`);
                flightsFoundWithTheChosenSearchCriteria = lowerCostThanMyBudgetFlightArray;
                break;
            case "2":
                let higherCostThanMyBudgetFlightArray = higherCostFlightSearcher(flightsArray, myBudget);
                window.alert(`Estos son los vuelos de SkyLab Airlines mas caros que tu presupuesto:\r\n${letsShowFlights(higherCostThanMyBudgetFlightArray)}.`);
                flightsFoundWithTheChosenSearchCriteria = higherCostThanMyBudgetFlightArray;
                break;
            case "3":
                let sameCostThanMyBudgetFlightArray = sameCostFlightSearcher(flightsArray, myBudget);
                window.alert(`Estos son los vuelos de SkyLab Airlines de igual valor que tu presupuesto:\r\n${letsShowFlights(sameCostThanMyBudgetFlightArray)}.`);
                flightsFoundWithTheChosenSearchCriteria = sameCostThanMyBudgetFlightArray;
                break;
            case null:
                break;
            default:
                wrongAsnwer = true;
        }
    } while (wrongAsnwer);
    return flightsFoundWithTheChosenSearchCriteria;
}

/*A let variable is declared, the let variable points to an array of objects with the dates of the flights.*/
let flights = [
    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },
    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }];

/*Here the code starts to run*/
let finalUserName = sayHi(); //A variable is declared and assigned the function sayHi() to save the user name.

welcome(finalUserName); //The function welcome is invoked with one parameter to use the username.
console.log(`Bienvenid@ ${finalUserName}!`);

window.alert(`Nuestros vuelos de hoy son: ${letsShowFlights(flights)}`); /*To show all flights in a friendly way: the window.alert method,
invokes the letsShowFlights function with the let flights variable as a parameter. */
console.log(`Nuestros vuelos de hoy son: ${letsShowFlights(flights)}`);

window.alert(`El costo medio de nuestros vuelos es: ${averageCost(flights)}€.`); /*To show the average cost, the window.alert method,
invokes the averageCost function with the let flights variable as a parameter. */
console.log(`El costo medio de nuestros vuelos es: ${averageCost(flights)}.`);

window.alert(`Contamos con ${withScaleFlights(flights)} vuelos que tienen escalas.`); /*To show how many flights have a stopover: the window.alert method,
invokes the withScaleFlights function with the variable let flights as a parameter. */
console.log(`Contamos con ${withScaleFlights(flights)} vuelos que tienen escalas.`);

window.alert(`Nuestros últimos vuelos del día son: ${theLastFlightsOfTheDay(flights)}`); /*To show the last five flights of the day: The window.alert method,
invokes the function theLastFlightsOfTheDay with the variable let flights as a parameter.*/
console.log(`Nuestros últimos vuelos del día son: ${theLastFlightsOfTheDay(flights)}`);

let kindOfNavigator = defineTheKindOfNavigator();//A variable is declared and assigned the function defineTheKindOfNavigator()
console.log(kindOfNavigator);
/*With a conditional, different actions are possible if the navigator type is USER or ADMIN.
And each one could repeat the actions over and over again only if the established conditions are true.*/
if (kindOfNavigator === "ADMIN") {
    do {
        myTaskForToDayinSkyLabAirlines(flights);
    } while (window.confirm("¿Quieres realizar una nueva tarea?"));
    console.table(flights);
} else {
    do {
        let iHaveThisBudget = thisIsMyBudget();
        console.log(iHaveThisBudget);
        let arrayOfFlightsFoundWithTheChosenSearchCriteria = doYouWantSearchFlightsByCost(flights, iHaveThisBudget);
        console.table(arrayOfFlightsFoundWithTheChosenSearchCriteria);
        if (arrayOfFlightsFoundWithTheChosenSearchCriteria.length !== 0) { //If the USER didn´t search flights by cost or the search result is empty, the array will be empty, so there will be nothing to buy and the function toBuyThisFlight is not invoked.
            toBuyThisFlight(arrayOfFlightsFoundWithTheChosenSearchCriteria);
        }
    } while (window.confirm("¿Quieres seguir viendo vuelos?"));
    window.alert(`Adios ${finalUserName}, nos vemos en tus próximas busquedas en SkyLab Airlines!`);
}