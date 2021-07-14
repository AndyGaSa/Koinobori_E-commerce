//Flight listisisisisisis
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


//Function that visualizes all flights; origin and destination, price and stopover
function flightVisualization(arr){                                                  //Gets an array as a parameter
    let origin;
    let destination;
    let price;
    let stopover;
    for (let i = 0; i < arr.length; i++){                                           //Runs through all the array
        origin = arr[i].from;                                                       //Saves origin
        destination = arr[i].to;                                                    //Saves destination
        price = arr[i].cost;                                                        //Saves price

        if (arr[i].scale === false){                                                //Checks if there is stopover and converts boolean into string phrase
            stopover = 'no realizará ninguna escala';
        }else{
            stopover = 'realizará escala';
        }

        console.log('El vuelo con origen: '+origin+' y destino: '+destination+' tiene un coste de '+price+' y '+stopover);//Prints out the flight info every for run
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
function lastFiveFlights(arr){                                                              //Gets an array as a parameter           
    let lastFiveDestination = [];
    for (let i = 0; i < arr.length; i++){
        if (parseFloat(arr[i].id) >= arr.length - 5){                                       //Gets the last 5 flights of the day
            lastFiveDestination.push(arr[i].to)
        }
    }
    console.log('Los últimos 5 vuelos tienen destinación '+lastFiveDestination.toString());
}

//Main function of the exercise
function airlines(){
    debugger;
    let userName;
    userName = prompt('Hola! ¿Cómo te llamas? ');           //Saves userName
    alert('¡Bienvenid@ '+userName+'!');                     //Pops out greeting message
    flightVisualization(flights);                           //Shows flight info
    averageFlightCost(flights);                             //Shows average cost
    howManyStopovers(flights);                              //Shows number of stopovers
    lastFiveFlights(flights);                               //Shows last five flights
}
airlines();