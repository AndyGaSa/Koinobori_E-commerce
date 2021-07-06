const flights = [

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


function searchAirlines(){
    let name=prompt("Please, enter your username:");
    alert(name + ", wellcome to the Skylab Airlines!");
    showFlights(flights);
    costeMedio(flights);
    escalasFlight(flights);
    console.log ( "Los ultimos destinos del día son:");
    ultimosDestinos(flights);
}

function showFlights(){
   
    for(let i =0; i<flights.length; i++){
    
        if(flights[i].scale){ 
            console.log("El vuelo con origen " + flights[i].to +", y destino : "+flights[i].from+" tiene un coste de "+flights[i].cost
    +" € y realiza una escala.");
        }else{  
            console.log("El vuelo con origen " + flights[i].to+", y destino : "+flights[i].from+" tiene un coste de "+flights[i].cost
    +" € y no realiza ninguna escala.");
        }
    }
}

function costeMedio(){
    let promedio;
    let totalCost=0;
    let totalFlights;
    for(let i=0;i<flights.length; i++){
        totalCost += Number(flights[i].cost);
        totalFlights = flights.length;
        promedio = (totalCost/totalFlights).toFixed(3);
    }
    console.log( "El coste medio de los vuelos es de " + promedio);
    
}

function escalasFlight(){
    let numEscalas=0;
    for(let i=0;i<flights.length; i++){
        if(flights[i].scale){
            numEscalas+=Number(flights[i].scale);
        }
    }
    console.log("El numero de vuelos con escala son " + numEscalas+".");
}

function ultimosDestinos(){
    for(let i=0; i < flights.length; i++){
        if( flights[i].id >= 6 ){
            console.log(flights[i].to);
        }
    }
    
}
console.log(searchAirlines());