
function SkylabAirlinesPro(){

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


    let adminOrUser = prompt("Eres ADMIN o USER?:");

            adminOrUser = adminOrUser.toUpperCase();                  

                switch (adminOrUser) {

                    case "ADMIN":
                        console.log("Acceso autorizado al panel de control de Administrador de " + userID);

                        let adminChoice = prompt("Indica si quieres CREAR un nuevo vuelo o ELIMINAR algún vuelo:");
                        adminChoice = adminChoice.toLocaleUpperCase();

                        switch (adminChoice) {

                            case "CREAR":
                            
                                let newFlights = 0;
                                let newObject = {id: 0, to: '', from: '', cost: 0, scale: false};
                                let createMore;

                            do {

                                        console.log("Indica los datos del nuevo vuelo (ID, DESTINATION, ORIGIN, COST, SCALES (TRUE/FALSE))");
                                                      
                                            do {                
                                                newFlights = prompt("¿ID del nuevo vuelo?");
                                                newFlights = parseFloat(newFlights);
                                                newObject.id = newFlights;
                                                } while (isNaN(parseFloat(newFlights)) && !isFinite(newFlights) || newFlights === "");
                                            
                                            do {     
                                            newFlights = prompt("¿Destino del nuevo vuelo?");
                                                newObject.to = newFlights;
                                                } while (!isNaN(parseFloat(newFlights)) && isFinite(newFlights) || newFlights === "");
                                            
                                            do { 
                                            newFlights = prompt("¿Origen del nuevo vuelo?");
                                                newObject.from = newFlights;
                                            } while (!isNaN(parseFloat(newFlights)) && isFinite(newFlights) || newFlights === "");
                                            
                                            do { 
                                            newFlights = prompt("¿Coste del nuevo vuelo?");
                                                newFlights = parseInt(newFlights);
                                                    newObject.cost = newFlights;
                                                    } while (isNaN(parseFloat(newFlights)) && !isFinite(newFlights) || newFlights === "");
                            
                                            
                                            newFlights = prompt("¿Tiene escalas el nuevo vuelo? (Si / No)");
                                            newFlights = newFlights.toUpperCase();
                                            
                                            switch (newFlights) {

                                                case "SI": 

                                                        newFlights = true;
                                                        newObject.scale = newFlights;
                                                        flights.push(newObject);
                                                break;

                                                case "NO": 
                                                        newFlights = false;
                                                        newObject.scale = newFlights;
                                                        flights.push(newObject);

                                                break;

                                                default: 
                                                        do{
                                                        newFlights = prompt("¿Tiene escalas el nuevo vuelo? (Si / No)");
                                                        newFlights = newFlights.toUpperCase();

                                                                    if (newFlights === "SI") {
                                                                            newFlights = true;
                                                                            newObject.scale = newFlights;
                                                                            flights.push(newObject);
                                                                    }

                                                                    if (newFlights === "NO") {
                                                                            newFlights = false;
                                                                            newObject.scale = newFlights;
                                                                            flights.push(newObject);
                                                                }

                                                        } while (isNaN(parseFloat(newFlights)) && !isFinite(newFlights) || newFlights === "");
                                                break;

                                            }

                                                createMore = prompt("¿Quieres crear un nuevo vuelo? (Si / No)");
                                                createMore = createMore.toUpperCase();

                                                switch (createMore) {

                                                    case "SI": 
    
                                                            createMore = true;
                                                            console.log(newObject);
                                                            console.log("Vuelo creado. Muchas gracias por usar el creador de vuelos.");
                                                    break;      
                                                        
                                                    case "NO": 
                                                            createMore = false;
                                                            console.log("Vuelo/s creado/s. Muchas gracias por usar el creador de vuelos.");
                                                            console.log("Cerrando sesión");
                                                    break;
    
                                                    default: 
                                                            do{
                                                            createMore = prompt("¿Quieres crear un nuevo vuelo? (Si / No)");
                                                            createMore = createMore.toUpperCase();
    
                                                                        if (newFlights === "SI") {
                                                                                console.log(newObject);
                                                                                console.log("Vuelo creado. Muchas gracias por usar el creador de vuelos.");
                                                                                newFlights = true;
                                                                                break;
                                                                        }
    
                                                                        if (newFlights === "NO") {
                                                                                newFlights = false;
                                                                                console.log("Vuelo/s creado/s. Muchas gracias por usar el creador de vuelos.");
                                                                                console.log("Cerrando sesión");
                                                                                break;
                                                                        }
    
                                                            } while (isNaN(parseFloat(newFlights)) && !isFinite(newFlights) || newFlights === "");
                                                    break;
    
                                                }
                                                
                                                    if (flights.length == 15) {

                                                            createMore = false;
                                                            alert("Máximo número de vuelos introducidos en el sistema. Cerrando sesión.");
                                                    }
                            
                            }while (!createMore === false);       

                            break;
                        
                            case "ELIMINAR":

                                            let deleteFlight = prompt("Indica el ID del vuelo que deseas eliminar:");
                                            deleteFlight = parseInt(deleteFlight);

                                            let index = flights.findIndex( element => {
                                                if (element.id !== deleteFlight) {

                                                    console.log("ID no encontrado. Cerrando sesión.");}

                                                    else {

                                                            delete flights[deleteFlight];
                                                            console.log("Vuelo con ID " + deleteFlight + " eliminado.");    
                                                            console.log(flights);                              
                                                    
                                                    }
                                            });

                        }

                        break;

                    case "USER":
                            
                            let maxMinEqual = prompt("Indica si quieres buscar vuelos por un precio específico (=), mayores al valor que nos indiques (+) o menores (-):");
                            let flightCost = 0;
                            
                            do { 
                                
                               flightCost = prompt("Hola usuario " + userID + " Indicanos cual es tu presupuesto para este viaje:");
                                flightCost = parseFloat(flightCost);

                                } while (isNaN(flightCost) && !isFinite(flightCost) || flightCost === "");


                            switch (maxMinEqual){

                                case "=":                 
                                                        
                                        console.log("Datos de los vuelos con el coste " + flightCost + "€ que has solicitado:\n");

                                        for (let i = 0; i < flights.length; i++) {

                                            if (flightCost === flights[i].cost) 
                                               console.log("·ID: " + flights[i].id + " ·Origen: " + flights[i].from + " ·Destino: " + flights[i].to + " ·Coste: " + flights[i].cost + " ·Escalas: " + flights[i].scale);
                                        }
                                        
                                        purchase = prompt("Indica el ID del vuelo que deseas comprar: ");
                                        purchase = parseInt(purchase);
                                        
                                        for (let j = 0; j < flights.length; j++) {

                                            if (purchase === flights[j].id) 
                                               console.log("Gracias por su compra, vuelva pronto.");
                                        }
                                       
                                break;  
                                
                                case "+": 

                                        console.log("Datos de los vuelos con un coste superior a " + flightCost + "€ que has solicitado:\n"); 
                                        
                                        for (let i = 0; i < flights.length; i++) {

                                            if (flightCost < flights[i].cost) 
                                                console.log("·ID: " + flights[i].id + " ·Origen: " + flights[i].from + " ·Destino: " + flights[i].to + " ·Coste: " + flights[i].cost + " ·Escalas: " + flights[i].scale);
                                            }

                                        purchase = prompt("Indica el ID del vuelo que deseas comprar: ");
                                        purchase = parseInt(purchase);
                                        
                                        for (let j = 0; j < flights.length; j++) {

                                            if (purchase === flights[j].id) 
                                               console.log("Gracias por su compra, vuelva pronto.");
                                        }
                                break;

                                case "-": 

                                        console.log("Datos de los vuelos con un coste inferior a " + flightCost + "€ que has solicitado:\n"); 
                                
                                        for (let i = 0; i < flights.length; i++) {

                                            if (flightCost > flights[i].cost) 
                                                console.log("·ID: " + flights[i].id + " ·Origen: " + flights[i].from + " ·Destino: " + flights[i].to + " ·Coste: " + flights[i].cost + " ·Escalas: " + flights[i].scale);
                                            }
                                        purchase = prompt("Indica el ID del vuelo que deseas comprar: ");
                                        purchase = parseInt(purchase);
                                            
                                        for (let j = 0; j < flights.length; j++) {
    
                                            if (purchase === flights[j].id) 
                                                   console.log("Gracias por su compra, vuelva pronto.");
                                        }
                                break;

                            }

                    break;
                
                    default: 
                            alert("Acceso denegado. Cerrando programa.");
                    break;
                            
}
}

SkylabAirlinesPro();

