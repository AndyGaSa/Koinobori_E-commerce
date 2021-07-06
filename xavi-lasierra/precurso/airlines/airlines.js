function airlines(){
    //Inicializa variables
    let totalCost = 0;
    let totalFlights = 0;
    let scaleNumber = 0;
    lastFlights.length = 0;
    const name = prompt("Nombre de usuario:");

    console.log(`\n\nHola ${name}.`);
    console.log(`\nVuelos disponibles:`);

    for(let i=0; i<flights.length; i++){
        //Mira si hay escala o no. Suma 1 a scaleNumber si hay escalas y se imprimen por consola diferentes mensajes si hay o no.
        if(flights[i].scale){
            console.log(`El vuelo con origen: ${flights[i].from}, y destino: ${flights[i].to} tiene un coste de ${flights[i].cost} y realiza escala.`);
            scaleNumber++; 
        }
        else{
            console.log(`El vuelo con origen: ${flights[i].from}, y destino: ${flights[i].to} tiene un coste de ${flights[i].cost} y no realiza ninguna escala.`);
        }

        //Se añade el coste del vuelo y se añade 1 vuelo más para calcular la media posteriormente
        totalCost += flights[i].cost;
        totalFlights++;

        //Añade en una lista los últimos vuelos del dia. El vuelo es añadido en la lista, la lista es ordenada y si hay más de 5 vuelos el que tenga menor ID es eliminado.
        //Lo he hecho de esta manera por si se contemplaba ID desordenados en la lista inicial.
        lastFlights.push(flights[i]);
        lastFlights.sort(function(a,b){return a.id - b.id});
        if(lastFlights.length > 5) lastFlights.shift();
    }

    console.log(`\nCoste medio de los vuelos:`);
    console.log(`${Math.round(totalCost/totalFlights)}€.`); //Calculo de la media sin decimales

    console.log(`\nVuelos que efectuan escalas:`);
    console.log(`${scaleNumber}.`);

    console.log(`\nDestinos de los 5 últimos vuelos del día:`);
    for(let i=0; i<lastFlights.length; i++){
        console.log(`${lastFlights[i].to}.`);//Imprime los últimos vuelos 1 a 1 en orden ascendente (de +pronto a +tarde)
    }

}

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
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false } ];
let lastFlights = [];

airlines();