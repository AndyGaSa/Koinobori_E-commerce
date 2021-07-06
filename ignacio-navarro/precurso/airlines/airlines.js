/**
 * --> interfaz de usuario para una aerolínea por consola.
 * --> 10 vuelos para el día de hoy, para empezar, estos vuelos deben estar declarados de manera global
 * --> cuando se llame a la función:
 * --> Se preguntará por el nombre de usuario y dará la bienvenida (via prompt).
 *   --> ej. El vuelo con origen: Barcelona, y destino: Madrid tiene un coste de XXXX€ y no realiza ninguna escala.
 *   --> A continuación, el usuario verá el coste medio de los vuelos.
 *   --> También podrá ver cuántos vuelos efectúan escalas.
 *   --> Sabiendo que los últimos 5 vuelos (los últimos 5 ID's) son los últimos del día, muestra al usuario sus destinos.
 */
console.log("Puedes llamar a la funcion flightsLog(dailyFlights)");

let dailyFlights = [
    { id: 0, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
    { id: 1, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
    { id: 2, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
    { id: 3, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
    { id: 4, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
    { id: 5, to: 'London', from: 'Madrid', cost: 200, scale: false },
    { id: 6, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
    { id: 7, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
    { id: 8, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
    { id: 9, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
];

function flightsLog(values = []){
    //saludo
    let name = window.prompt("Bienvenido, ¿cual es tu nombre?");
    window.alert(`Bienvenido ${name}`);
    let costs = [] // se ira llenando con los costes en el for
    let scalesCounter = 0;
    let lastDestinations = [];
    for( let i = 0 ; i < values.length; i++){
        let flight = values[i];
        let scale = "";
        costs.push(flight.cost);
        if (flight.scale){
            scale = "realiza escala";
            scalesCounter += 1;
        } else {
            scale = "no realiza ninguna escala";
        }
        if (i > values.length - 5){
            lastDestinations.push(flight.to);
        }
        console.log (`El vuelo con origen: ${flight.from}, y destino: ${flight.to} tiene un coste de ${flight.cost}€ y ${scale}.`)
    }
    //logs finales
    let costsMedian = Math.round((costs.reduce((previous, current) => current += previous)/(values.length + 1))*1000)/1000;
    console.log (`El precio medio de los vuelos es de ${costsMedian}`);
    console.log (`El numero de vuelos con escala es de ${scalesCounter}`);
    let lastDestinationsString = lastDestinations.join(", ");
    console.log (`los ultimos destinos son ${lastDestinationsString}`);
}