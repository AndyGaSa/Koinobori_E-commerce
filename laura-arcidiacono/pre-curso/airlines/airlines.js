function skyLabAirlines() {
/*A function is declared to obtein the user`s name, and return the username or the string "Stranger" if the user don´t wnat to 
say his name*/
function sayHi() {
    let userName = window.prompt("Hola! Has ingresado a SkyLab AirLines, ¿Cuál es tu nombre?", "Ej: Raquel");
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
/*A function is declares to welcome the user using his name.*/
function welcome(name) {
    let youAreWelcome = window.alert(`Bienvenid@ ${name}. Persiona Aceptar para conocer nuestros vuelos.`);
    return youAreWelcome;
}
/*A funciton is declared to show the flights, using the push method and a for loop to put the information
in the array, and return the array and diferetn text if the flights have or don´t have scale.*/
function letsShowFlights(flightsArray) {
    let arrayShowFlights = [];
    for (i = 0; i < flightsArray.length; i++) {
        if (flightsArray[i].scale) {
            arrayShowFlights.push(`\r\n #El vuelo Nº ${flightsArray[i].id} con origen en ${flightsArray[i].from} y destino ${flightsArray[i].to}, tiene un coste de ${flightsArray[i].cost}€; y realiza escalas.`);
        } else {
            arrayShowFlights.push(`\r\n #El vuelo Nº ${flightsArray[i].id} con origen en ${flightsArray[i].from} y destino ${flightsArray[i].to}, tiene un coste de ${flightsArray[i].cost}€; y NO realiza escalas.`);
        }
    }
    return arrayShowFlights;
}
/*This is another way to made the same function*/
/*function letsShowFlights(flightsArray) {
    let arrayShowFlights = [];
    let textScale;
    for (i = 0; i < flightsArray.length; i++) {
        if (flightsArray[i].scale) {
            textScale = "";
        } else {
            textScale = "NO ";
        }
        arrayShowFlights.push(`#El vuelo Nº ${flightsArray[i].id} con origen en ${flightsArray[i].from} y destino ${flightsArray[i].to}, tiene un coste de ${flightsArray[i].cost}€; y ${textScale}realiza escalas. `);
    }
    return arrayShowFlights;
}*/
/*A funtion is declared to return de average cost of the flights, it use a for loop using the addition assignment, and out of the 
for loop, the division assignment.*/
function averageCost(flightsArray) {
    let thisIsTheAverageCost = 0;
    for (i = 0; i < flightsArray.length; i++) {
        thisIsTheAverageCost += flightsArray[i].cost;
    }
    thisIsTheAverageCost /= flightsArray.length;
    return thisIsTheAverageCost.toFixed(2)
}
/*A function is declared to return the numbre of flights with sclae.*/
function withScaleFlights(flightsArray) {
    let numberOfWithScaleFlights = 0;
    for (i = 0; i < flightsArray.length; i++) {
        if (flightsArray[i].scale) {
            numberOfWithScaleFlights += 1;
        }
    }
    return numberOfWithScaleFlights;
}
/*A function is delcared to return the last five flights of the day. This function use a for loop to go through the array, 
deceassin (i) until i its bigger than de array.length-6. So no matter how many elemnts have the array, the funcion, only return the last five.*/
function theLastFlightsOfTheDay(flightsArray) {
    let arrayTheLastFlightsOfTheDay = [];
    for (i = flightsArray.length - 1; i > flightsArray.length - 6; i--) {
        arrayTheLastFlightsOfTheDay.push(`\r\n #El vuelo Nº ${flightsArray[i].id} con origen en ${flightsArray[i].from} y destino ${flightsArray[i].to}.`)
    }
    return arrayTheLastFlightsOfTheDay;
}
/*A let variable is declared, the let variable points to an array of objects*/
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
let finalUserName = sayHi(); //A variable is declared and assigned the function sayHi(), to save the user name.

let finallyYouAreWelcome = welcome(finalUserName); //A variable is declared and assigned the function welcome with one parameter to use the username.
console.log(`Bienvenid@ ${finalUserName}!`);

let showMeTheFlights = window.alert(`Nuestros vuelos de hoy son: ${letsShowFlights(flights)}`); /*A variable is declared and assigned the window.alert method, 
invoking the function letsShowFlights whit the variable let flights as parameter. */
console.log(`Nuestros vuelos de hoy son: ${letsShowFlights(flights)}`);

let knowTheAverageCost = window.alert(`El costo medio de nuestros vuelos es: ${averageCost(flights)}.`); /*A variable is declared and assigned the window.alert method, 
invoking the function averageCost whit the variable let flights as parameter. */
console.log(`El costo medio de nuestros vuelos es: ${averageCost(flights)}.`);

let knowWithScaleFlights = window.alert(`Contamos con ${withScaleFlights(flights)} vuelos que tienen escalas.`); /*A variable is declared and assigned the window.alert method, 
invoking the function withScaleFlights whit the variable let flights as parameter. */
console.log(`Contamos con ${withScaleFlights(flights)} vuelos que tienen escalas.`);

let knowTheLastFlightsOfTheDay = window.alert(`Nuestros últimos vuelos del día son: ${theLastFlightsOfTheDay(flights)}`); /*A variable is declared and assigned the window.alert method, 
invoking the function theLastFlightsOfTheDay whit the variable let flights as parameter. */
console.log(`Nuestros últimos vuelos del día son: ${theLastFlightsOfTheDay(flights)}`);
};