
function SkylabAirlines(){

    let userID = prompt("¿Cúal es tu nombre de usuario?");
    userID = userID.toString();

    console.log("Bienvenid@ a Skylab Airlines " + userID);

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

        { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false } 
    ];

             console.log("\n" + userID + ", los vuelos disponibles para el día de hoy son: ");
    
             console.log("\n" + "Vuelo " + flights[0].id + ": El vuelo con origen: " + flights[0].from + ", y destino: " + flights[0].to + " tiene un coste de " + flights[0].cost + "€" + "y no realiza ninguna escala.");

             console.log("Vuelo " + flights[1].id + ": El vuelo con origen: " + flights[1].from + ", y destino: " + flights[1].to + " tiene un coste de " + flights[1].cost + "€" + "y no realiza ninguna escala.");

             console.log("Vuelo " + flights[2].id + ": El vuelo con origen: " + flights[2].from + ", y destino: " + flights[2].to + " tiene un coste de " + flights[2].cost + "€" + "y no realiza ninguna escala.");

             console.log("Vuelo " + flights[3].id + ": El vuelo con origen: " + flights[3].from + ", y destino: " + flights[3].to + " tiene un coste de " + flights[3].cost + "€" + "y realiza escala en Nueva York y Seattle.");

             console.log("Vuelo " + flights[4].id + ": El vuelo con origen: " + flights[4].from + ", y destino: " + flights[4].to + " tiene un coste de " + flights[4].cost + "€" + "y realiza escala en Toronto.");

             console.log("Vuelo " + flights[5].id + ": El vuelo con origen: " + flights[5].from + ", y destino: " + flights[5].to + " tiene un coste de " + flights[5].cost + "€" + "y realiza escala en Madrid.");

             console.log("Vuelo " + flights[6].id + ": El vuelo con origen: " + flights[6].from + ", y destino: " + flights[6].to + " tiene un coste de " + flights[6].cost + "€" + "y no realiza ninguna escala.");

             console.log("Vuelo " + flights[7].id + ": El vuelo con origen: " + flights[7].from + ", y destino: " + flights[7].to + " tiene un coste de " + flights[7].cost + "€" + "y no realiza ninguna escala.");

             console.log("Vuelo " + flights[8].id + ": El vuelo con origen: " + flights[8].from + ", y destino: " + flights[8].to + " tiene un coste de " + flights[8].cost + "€" + "y no realiza ninguna escala.");

             console.log("Vuelo " + flights[9].id + ": El vuelo con origen: " + flights[9].from + ", y destino: " + flights[9].to + " tiene un coste de " + flights[9].cost + "€" + "y no realiza ninguna escala.");

             console.log("Vuelo " + flights[10].id + ": El vuelo con origen: " + flights[10].from + ", y destino: " + flights[10].to + " tiene un coste de " + flights[10].cost + "€" + "y realiza escala en Berlín, Mumbai y Singapur.");


    let totalCost = flights[0].cost + flights[1].cost + flights[2].cost + flights[3].cost + flights[4].cost + flights[5].cost + flights[6].cost + flights[7].cost + flights[8].cost + flights[9].cost + flights[10].cost / 10;
    

        console.log("\nEl coste medio de todos nuestros vuelos disponibles es de: " + (totalCost/flights.length).toFixed(2) +"€");

    
    let contador = 0;

        for (let i = 0; i < flights.length; i++){

            if (flights[i].scale) {contador++;} 

        }

        console.log("Cantidad de vuelos con escalas: " + contador);

    contador = 0;

        console.log("Los destinos de los últimos 5 vuelos del día son: ");

                for (let i = (flights.length - 5); i < flights.length; i++){

                    if (flights[i].id) {console.log(flights[i].to);}

                }

}

SkylabAirlines();