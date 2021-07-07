let flights = [ //Primero declaramos los vuelo en una variable global de tipo array;
    { id: 01, to: 'Rome', from: 'Valencia', cost: 200, scale: false },
    { id: 02, to: 'London', from: 'Barcelona', cost: 160, scale: false },
    { id: 03, to: 'Ottawa', from: 'Madrid', cost: 1100, scale: true },
    { id: 04, to: 'Madrid', from: 'Barcelona', cost: 100, scale: false },
    { id: 05, to: 'Moscow', from: 'Barcelona', cost: 800, scale: true },
    { id: 06, to: 'Paris', from: 'Valencia', cost: 140, scale: false },
    { id: 07, to: 'New York', from: 'Barcelona', cost: 1200, scale: true },
    { id: 08, to: 'Monaco', from: 'Barcelona', cost: 140, scale: false },
    { id: 09, to: 'Amsterdam', from: 'Barcelona', cost: 130, scale: false },
    { id: 10, to: 'Buenos Aires', from: 'Madrid', cost: 950, scale: true }
]

function flightsAssistant() { //Declaración de la función
    let name = prompt('Hi! What\'s your name?'); //Se pregunta el nombre del usuario vía prompt
    let greetings = alert(`Welcome, ${name}. Let me know if I can assist you.`) //Se le da la bienvenida mediante un alert

    /*Declaramos algunas variables para posteriormente calcular el coste medio de los vuelos, 
    cuantos realizan escalas y cuales son los últimos destinos del día.*/
    let totalFlightsCost = 0;
    let flightsWithStopover = 0;
    const lastDepartures = [];
    // Se muestran por consola los vuelos progrmados
    console.log(`These are the flights scheduled for today:`)
    for (let i in flights) { //A traves de un for se recorren los distintos vuelos del array
        totalFlightsCost += flights[i].cost; //Se suman los precios de los vuelos para calcular el coste medio

        /*Con ayuda de un condicional se distinguen los vuelos con escalas de los que no hacen escalas,
        de ese modo se imprimen por consola de forma  distinta y se almacenan los vuelos con escalas para indicar más tarde
        la cantidad de estos vuelos*/
        if (!flights[i].scale) {
            console.log(`Flight from ${flights[i].from} to ${flights[i].to}. This flight has a cost of ${flights[i].cost}€ and ` +
                `does not make stopovers`)
        } else {
            console.log(`Flight from ${flights[i].from} to ${flights[i].to}. This flight has a cost of ${flights[i].cost}€ and ` +
                `makes stopovers`)
            flightsWithStopover++;
        }
        //Con otro condicional se almacenan los destinos de los últimos 5 vuelos
        if (flights[i].id >= 06) {
            lastDepartures.push(flights[i].to);
        }
    }
    let averageCost = totalFlightsCost / flights.length; //Cálculo del coste medio de los vuelos
    //Por último, se imprimen los datos por consola
    console.log(`The average cost is ${averageCost}€`)
    console.log(`${flightsWithStopover} flights make stopovers.`)
    console.log(`The last destinations form today's fligths are ${lastDepartures}`)
}
flightsAssistant();