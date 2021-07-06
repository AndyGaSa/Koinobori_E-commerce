function airlines(){
    //Inicializa variables
    let totalCost = 0;
    let totalFlights = 0;
    let scaleNumber = 0;
    lastFlights.length = 0;
    let name;

    console.clear();
    console.log(`AIRLINES PRO`);

    do{
        name = prompt(`Nombre de usuario:`);
    }while(name === '');

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

    //AIRPLANE-PRO
    //Pide al usuario si es ADMIN o USER y llama la funcion admin() o user()
    let userError = false;
    let userType;
    do{
        if(userError){
            userType = prompt(`Error al insertar usuario\nEres ADMIN o USER\nEscribir [ADMIN/USER]\n\nPulsa Cancelar para salir`,"USER");
            userError = false;
        }
        else userType = prompt(`Eres ADMIN o USER\nEscribir [ADMIN/USER]\n\nPulsa Cancelar para salir`,"USER");

        if(typeof(userType) === "string") userType = userType.toUpperCase();

        console.log(userType);

        switch (userType){
            case "ADMIN":
                admin();
                break;
            case "USER":
                userType = user();
                break;
            default:
                userError = true;
                break; 
        }

    }while(userType !== null);
}

function admin(){
    //Imprime todos los vuelos disponibles
    console.clear();
    console.log(`ADMIN\n\nVuelos disponibles:`);
    for(let i=0; i<flights.length; i++){
        if(flights[i].scale) console.log(`id: ${flights[i].id}, destino: ${flights[i].to}, origen: ${flights[i].from}, coste: ${flights[i].cost}, escala: Sí.`);
        else console.log(`id: ${flights[i].id}, destino: ${flights[i].to}, origen: ${flights[i].from}, coste: ${flights[i].cost}, escala: No.`);
    }
    
    let option;
    let optionError = false;
    do{
        //Pregunta al usuario si quiere añadir o eliminar vuelos
        if(optionError){
            option = prompt(`Error al insertar la opción\nAñadir o eliminar vuelos\nEscribir [ADD/DELETE]\n\nPulse Cancelar para ir a la selección de usuario`);
            optionError = false;
        }
        else option = prompt(`Añadir o eliminar vuelos\nEscribir [ADD/DELETE]\n\nPulse Cancelar para ir a la selección de usuario`);

        if(typeof(option) === 'string') option = option.toUpperCase();

        //Reimprime todos los vuelos por si han habido añadidos/eliminados
        console.clear();
        console.log(`ADMIN\n\nVuelos disponibles:`);
        for(let i=0; i<flights.length; i++){
            if(flights[i].scale) console.log(`id: ${flights[i].id}, destino: ${flights[i].to}, origen: ${flights[i].from}, coste: ${flights[i].cost}, escala: Sí.`);
            else console.log(`id: ${flights[i].id}, destino: ${flights[i].to}, origen: ${flights[i].from}, coste: ${flights[i].cost}, escala: No.`);
        }

        switch(option){
            case "ADD":
                //Comprueba si hay 15 o más vuelos
                if(flights.length >= 15){
                    alert(`\nNO se pueden añadir más vuelos.\n15 vuelos ya en la lista.`);
                    break;
                }

                let idN, to, from, cost, scale;

                //Pide los valores necesarios por prompt
                let error = false;
                do{
                    if(error) idN = parseInt(prompt(`AÑADIR VUELO\nError al añadir ID (Valor no válido o ya existe un vuelo con el mismo ID)\nInserta ID:`));
                    else idN = parseInt(prompt(`AÑADIR VUELO\nInserta ID:`));
                    //Busca si ya hay un vuelo el la lista con el mismo ID
                    const idSearch = flights.find(({id}) => id === idN);
                    if(idSearch){
                        idN = NaN;
                    } 
                    error = true;
                }while(isNaN(idN));

                error = false;
                do{
                    if(error) to = prompt(`AÑADIR VUELO\nError al añadir el destino (Valor vacío)\nInserta destino:`);
                    else to = prompt(`AÑADIR VUELO\nInserta destino:`);
                    error = true;
                }while(to === "" || to === null);

                error = false;
                do{
                    if(error) from = prompt(`AÑADIR VUELO\nError al añadir la procedencia (Valor vacío)\nInserta procedencia:`);
                    else from = prompt(`AÑADIR VUELO\nInserta procedencia:`);
                    error = true;              
                }while(from === "" || from === null);

                error = false;
                do{
                    if(error) cost = parseInt(prompt(`AÑADIR VUELO\nError al añadir el coste (Valor no numérico)\nInserta coste:`));
                    else cost = parseInt(prompt(`AÑADIR VUELO\nInserta coste:`));    
                    error = true;
                }while(isNaN(cost));

                scale = confirm(`AÑADIR VUELO\n¿El vuelo tiene escalas?\n`);
                
                //Añade y ordena por id el vuelo
                flights.push({id: idN, to: to, from: from, cost: cost, scale: scale});
                flights.sort(function(a,b){return a.id - b.id});
                if(scale) console.log(`\nEl vuelo con id: ${idN}, destino: ${to}, origen: ${from}, coste: ${cost}, escala: Sí; ha sido añadido.`);
                else console.log(`\nEl vuelo con id: ${idN}, destino: ${to}, origen: ${from}, coste: ${cost}, escala: No; ha sido añadido`);
                break;
            case "DELETE":
                let idS;
                do{
                    idS = parseInt(prompt(`ELIMINAR VUELO\nInserta el ID del vuelo a eliminar`));    
                }while(isNaN(idS));

                //Busca el vuelo con el id indicado y lo elimina
                let deleted = false;
                for(let i=0; i<flights.length; i++){
                    if(flights[i].id === idS){
                        console.log(`\nEl vuelo con id: ${flights[i].id}, destino: ${flights[i].to}, origen: ${flights[i].from} ha sido eliminado.`)
                        flights.splice(i,1);
                        deleted = true;
                        break;
                    }
                }
                //Si no encuentra el vuelo con el id indicado vuelve a la seleccion ADD/DELETE
                if(!deleted) console.log(`\nNo se pudo encontrar un vuelo con el id: ${idS}`);
                break;

            default:
                optionError = true;
                break;
        }
    }while(option !== null);

    console.log(`\nHas salido de ADMIN.`);
}



function user(){
    console.clear();
    console.log(`USER:`)

    //Bucador por precio
    let error;
    let option;
    let number;
    do{
        error = false;
        let aux = prompt(`BUSCADOR POR PRECIO\nUtiliza [>,<,=] seguido del coste\nEjemplo: <1000`);
        if(aux === null){
            console.clear();
            console.log(`\nHas salido de USER.`)
            return;
        } 

        option = aux.slice(0,1);
        if(option !== ">" && option !== "<" && option !== "="){
            error = true;
        }
        number = parseInt(aux.slice(1, aux.length));
        if(isNaN(number)){
            error = true;
        }
    }while(error);

    let someResult = false;
    switch (option){
        case ">":
            console.log(`\nVuelos con precio mayor que ${number}:`);
            for(let i=0; i<flights.length; i++){
                if(flights[i].cost > number){
                    if(flights[i].scale) console.log(`id: ${flights[i].id}, destino: ${flights[i].to}, origen: ${flights[i].from}, coste: ${flights[i].cost}, escala: Sí.`);
                    else console.log(`id: ${flights[i].id}, destino: ${flights[i].to}, origen: ${flights[i].from}, coste: ${flights[i].cost}, escala: No.`);
                    someResult = true;
                }     
            }
            if(!someResult) console.log(`No hay resultados.`)
            break;
        case "<":
            console.log(`\nVuelos con precio menor que ${number}:`);
            for(let i=0; i<flights.length; i++){
                if(flights[i].cost < number){
                    if(flights[i].scale) console.log(`id: ${flights[i].id}, destino: ${flights[i].to}, origen: ${flights[i].from}, coste: ${flights[i].cost}, escala: Sí.`);
                    else console.log(`id: ${flights[i].id}, destino: ${flights[i].to}, origen: ${flights[i].from}, coste: ${flights[i].cost}, escala: No.`);
                    someResult = true;
                }     
            }
            if(!someResult) console.log(`No hay resultados.`)
            break;
        case "=":
            console.log(`\nVuelos con precio igual que ${number}:`);
            for(let i=0; i<flights.length; i++){
                if(flights[i].cost === number){
                    if(flights[i].scale) console.log(`id: ${flights[i].id}, destino: ${flights[i].to}, origen: ${flights[i].from}, coste: ${flights[i].cost}, escala: Sí.`);
                    else console.log(`id: ${flights[i].id}, destino: ${flights[i].to}, origen: ${flights[i].from}, coste: ${flights[i].cost}, escala: No.`);
                    someResult = true;
                }     
            }
            if(!someResult) console.log(`No hay resultados.`)
            break;
    }

    //Pregunta si el usuario quiere volver a buscar por precio o comprar
    do{
        error = false;
        option = prompt(`¿Quieres comprar un vuelo o volver a buscar por precio?\n[BUY,SEARCH]\n\nPulse Cancelar para ir a la selección de usuario`,"BUY");
        
        if(typeof(option) === 'string') option = option.toUpperCase();
        
        if(option !== "BUY" && option !== "SEARCH" && option !== null) error = true;
    }while(error)

    if(option === "SEARCH"){
        user();
        return null;
    }
    else if(option === "BUY"){
        //Compra el vuelo y cierra el programa
        error = false;
        let buyS;
        do{
            if(error) buyS = parseInt(prompt(`Error al añadir ID del vuelo\n¿Que vuelo quieres comprar?\nInsertar ID del vuelo`));
            else buyS = parseInt(prompt(`¿Que vuelo quieres comprar?\nInsertar ID del vuelo`));
            const idSearch = flights.find(({id}) => id === buyS);
            if(!idSearch){
                buyS = NaN;
            } 
            error = true;
        }while(isNaN(buyS))

        let flight = flights.find(x => x.id === buyS);
        console.clear();
        console.log(`VUELO COMPRADO:\n`)
        if(flight.scale) console.log(`id: ${flight.id}, destino: ${flight.to}, origen: ${flight.from}, coste: ${flight.cost}, escala: Sí.`);
        else console.log(`id: ${flight.id}, destino: ${flight.to}, origen: ${flight.from}, coste: ${flight.cost}, escala: No.`); 
        console.log(`\n\nGracias por su compra, vuelva pronto.`);

        //encontrar que id tiene indice
        return null;
    }
    else{
        console.log(`\nHas salido de USER.`)
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