//Flight list
let flights = [

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

    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false } ];


//Function that visualizes all flights; origin and destination, price and stopover
function flightVisualization(arr){                                                  //Gets an array as a parameter
    let origin;
    let destination;
    let price;
    let stopover;
    let id;
    for (let i = 0; i < arr.length; i++){                                           //Runs through all the array
        origin = arr[i].from;                                                       //Saves origin
        destination = arr[i].to;                                                    //Saves destination
        price = arr[i].cost;                                                        //Saves price
        id = arr[i].id;

        if (arr[i].scale === false){                                                //Checks if there is stopover and converts boolean into string phrase
            stopover = 'no realizará ninguna escala';
        }else{
            stopover = 'realizará escala';
        }

        console.log(id+' El vuelo con origen: '+origin+' y destino: '+destination+' tiene un coste de '+price+' y '+stopover); //Prints out the flight info every for run
    }
}

function howManyStopovers(arr){                                                     //Gets an array as a parameter
    let escalas = [];
    for (let i = 0; i < arr.length; i++){                                           //Runs through all the array
        if (arr[i].scale === true){                                                 //Checks if there is stopover 
            escalas.push(arr[i].scales)
        }
    }

    numberStopovers = escalas.length;
    console.log('Hay '+numberStopovers+' vuelos con escalas');
}

//Average flight cost function
function averageFlightCost(arr){                                                    //Gets an array as a parameter
    let totalCost = 0;                                                              //Will save the sum of the flight costs
    let avCost = 0;                                                                 //Will save the value of the average cost

    for (let i = 0; i < arr.length; i++){                                           //Runs through all the array 
        totalCost += arr[i].cost;                                                   //Sums all the costs
    }   

    avCost = totalCost/arr.length;                                                  //Calculates the average cost 
    console.log('El coste medio de los vuelos es de '+avCost.toFixed(2)+' €');      //Logs the cost
}

//Last 5 flights function
function lastFiveFlights(arr){                                                      //Gets an array as a parameter           
    let lastFiveDestination = [];
    for (let i = 0; i < arr.length; i++){
        if (parseFloat(arr[i].id) >= arr.length - 5){                               //Gets the last 5 flights of the day
            lastFiveDestination.push(arr[i].to)
        }
    }
    console.log('Los últimos 5 vuelos tienen destinación '+lastFiveDestination.toString());
}
//Airlines simple
function airlines(){
    let userName;
    userName = prompt('Hola! ¿Cómo te llamas? ');               //Saves userName
    alert('¡Bienvenid@ '+userName+'!');                         //Pops out greeting message
    flightVisualization(flights);                               //Shows flight info
    averageFlightCost(flights);                                 //Shows average cost
    howManyStopovers(flights);                                  //Shows number of stopovers
    lastFiveFlights(flights);                                   //Shows last five flights
}

//Function that checks user/admin is introduced right
function isUserAdminRight(str){                                 //Ask for a string
    if (str !== 'user' || str !== 'admin'){
        alert('Introduzca su rol: Usuario / Admin');
        str = prompt('Introduzca su rol: Usuario / Admin').toLocaleLowerCase();
    }
}

//Function that creates a new flight and pushes the object into the array
function newFlightPush(){
    let newFlight = new Object();
    newFlight.id = flights.length;
    newFlight.to = prompt('Introduzaca el destino');
    newFlight.from = prompt('Introduzaca la salida');
    newFlight.cost = prompt('Introduzaca el precio');
    newFlight.scale = confirm('Efectua escala el vuelo?');
    flights.push(newFlight);
}

//Function that checks if a flight is in an array and deletes it
function deleteFlightFromArray(arr,id){                                   //Gets an array and id
    if (parseFloat(id) < arr.length){                                    //Checks if the id number is valid
        for (let i = 0; i < arr.length; i++){                             //Runs through all the array 
            if (arr[i].id === id){                                        //Finds the id
                arr.splice(id,1)                                          //Removes the id element
            }
        }
    }
}

//Function that create an array of flights according to cost: <X >X =X
function filterFlightByCost(arr,price,condition){
    let newOrder = [];
    let precioArray;
    for (let i = 0; i < arr.length; i++){
        precioArray = arr[i].cost;
        if (condition === "<"){
            if(price > precioArray){
                newOrder.push(arr[i]);
            }
        }else if (condition === ">"){
            if(price < precioArray){
                newOrder.push(arr[i]);
            }
        }else{
            if(price === precioArray){
                newOrder.push(arr[i]);
            }
        }
    }
    return newOrder;
}

//Function that asks the user what kind of filter wants
function whatFilter(filterKind){
    let kinds = confirm('Desea filtrar por precios superiores al introducido?');
    if (kinds){
        filterKind = '>';
    }else{
        kinds = confirm('Desea filtrar por precios inferiores al introducido?');
        if (kinds){
            filterKind = '<';
        }else{
            kinds = confirm('Desea filtrar por precios iguales al introducido?');
            if (kinds){
                filterKind = '=';
            }
        }
    }
    return filterKind;
}

//Function that checks if the id is correct
function idIsCorrect(arr,id){
    while (id>arr.length){
        alert('Introduzca un Id válido');
        id = parseFloat(prompt('Introduza el id del vuelo que desea comprar'));
    }
}

//Main function of the exercise
function airlinesPro(){
    airlines();                                                                                             //Executes airlines simple
    let rol = prompt('Introduzca su rol: User / Admin').toLowerCase();

    while (rol !== 'user' && rol !== 'admin'){                                                              //Checks if the introduced value is right
        isUserAdminRight(rol);                              
    }

    switch(rol){                                                                                            //Separates admin functions from user functions

        case 'admin':                                                                                       //Admin
            let moreFlights = confirm('¿Desea introducir más vuelos?');                                     //Ask if the admin wants to introduce more flights
            let deleteFlight;
            let idDeleteFlight;

            if (moreFlights === true){                                                                      //Pushes a new flight if the list is <15 elements
                if (flights.length < 15){
                    newFlightPush();
                }else{
                    alert('La base de datos esta llena');                                                   //Alerts that the data base is full
                }
            }

            deleteFlight = confirm('¿Desea eliminar un vuelo?');                                            //Asks if the admin wants to delete a flight

            if (deleteFlight === true){                                                                     //If the admin wants to delete...
                    idDeleteFlight = parseFloat(prompt('Introduzca el id del vuelo que desea eliminar.'));  //Asks for the id of the flight that is going to be deleted
                    deleteFlightFromArray(flights,idDeleteFlight);                                          //Deletes the flight from the array
                }
        break

        case 'user':                                                                                        //User
            let priceReference = parseFloat(prompt('Introduzca el precio de referencia'));                  //Asks for reference price
            let filteredFlights;
            let filter;                                                                                     //Inicializing the filter
            filter = whatFilter(filter);                                                                    //Asks the user what filter he wants to use
            filteredFlights = filterFlightByCost(flights,priceReference,filter);                            //Creates an array with the filter the user asked for
            flightVisualization(filteredFlights)                                                            //Shows the new filtration
            id = parseFloat(prompt('Indique el ID de vuelo que desea comprar'));                            //Ask for id
            idIsCorrect(flights,id);                                                                        //Checks if the Id is correct
            alert('Muchas gracias por su compra!')                                                          
    }
}
airlinesPro();