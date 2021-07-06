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


let clientName = prompt("Por favor intoduzca su nombre!","Intoduca su nombre o pulse cancele");
alert( `Bienvenido ${clientName}!`);


function lastFlights(){
    
    for(let i=6;i<flights.length;i++)
    console.log(`Los ultimos vuelos de hoy son ${flights[i].id}, tienen como destino: ${flights[i].to}`);


}


//comentario para ayudar commit test

function numberOfScales(){
    let numOfScales=0;
    for(let i=0;i<flights.length;i++){
        if (flights[i].scale==true){
            numOfScales++;
        }

        
     }
     console.log(`El numero de vuelos que efectuaran escala es de: ${numOfScales}` );
     lastFlights();
}



function averageCost(){
    let totalCost=0;
    for(let i=0;i<flights.length;i++){
        totalCost += flights[i].cost;
    }
    let averCost=totalCost/flights.length;
    console.log(`El coste medio de los vuelos de hoy es de: ${averCost.toFixed(2)}`);
    numberOfScales()
}

function flightList(){
    for(let i=0;i<flights.length; i++){
        console.log(`El vuelo con origen ${flights[i].from} y destino ${flights[i].to} tiene un coste de ${flights[i].cost}.`);
        if(flights[i].scale==true){
            console.log("El vuelo realiza una escala")
        }else{
            console.log("El vuelo no realiza una escala");
        }

    }

    averageCost();

}
function user(){
    let user= prompt(`${clientName} Please input if you are an Admin or User`);
    if(user===null){
        alert("Not valid input")
    }else if(user.toUpperCase()==="ADMIN")
        if(flights.length>=15){
            alert("No more flights can be added!");
        }else (flights.length<15){
            let addFlight=prompt.toUpperCase(("Please input Y is you wish to add a flight!"));
            if (addFlight==="Y"){
                let idNumber=parseFloat(prompt("Please input the ID number of the flight"));
                let destination=prompt("Please input destination!");
                let origin=prompt("Please input orifin of the flight!");
                let ticketCost=parseFloat(prompt("Please input the cost of the flight!"));
                let scaleStat=prompt.toUpperCase("please input if flight is with scale?Y/N");
                if (scaleStat==="Y"){
                    scale=true;
                }else{
                    scale=false;
                }
                
                flights={id:idNumber,to:destination, from:origin,cost:ticketCost ,scale:scaleStat};
                addFlight();
            }
            let deleteFlight=prompt.toUpperCase(("Do you wish to delete a flight?Y/N"));

            if (deleteFlight==="Y"){
                let idNumber=parseFloat(prompt("Please input the ID number of the flight"));
                if (idNumber===flights.id){
                    delete flights.id;
                }else
                alert("ID not valid!")
                }else{
                alert("Thank you! see you soon!")
            }

        }

    }else (user.toUpperCase()==="USER"){
        console.log("test");
    }

        

}


flightList();