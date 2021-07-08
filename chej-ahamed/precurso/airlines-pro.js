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

    user();
}




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
    }else if(user.toUpperCase()==="ADMIN"){
        if(flights.length>=15){
            alert("No more flights can be added!");
        }else (flights.length<15);{
            let addFlight=prompt("Please input Y is you wish to add a flight!");
            if (addFlight.toUpperCase()==="Y"){
                let idNumber=parseFloat(prompt("Please input the ID number of the flight"));
                let destination=prompt("Please input destination!");
                let origin=prompt("Please input origin of the flight!");
                let ticketCost=parseFloat(prompt("Please input the cost of the flight!"));
                let scaleStat=prompt("please input if flight is with scale?Y/N");
                if (scaleStat.toUpperCase()==="Y"){
                     scaleStat=true;
                }else{
                     scaleStat=false;
                }
                
                flights={id:idNumber,to:destination, from:origin,cost:ticketCost ,scale:scaleStat};
                console.log(flights);
                
            }
            let deleteFlight=prompt("Do you wish to delete a flight?Y/N");

            if (deleteFlight.toUpperCase()==="Y"){
                let idNumber=parseFloat(prompt("Please input the ID number of the flight"));
               for(let i=0;i<flights.length;i++) {
                    if(idNumber===flights[i].id){
                         delete flights[i];

                    }

                 }
               
                console.log(flights);
            }else{
                alert("Thank you! see you soon!")
            }

        }

    }
    else if(user.toUpperCase() ==="USER"){
        let flightPriceRange=prompt("Please input with range of prices would you like to se:lower(L), higher(H) or similar(S)");
        let flightPrice=parseFloat(prompt("Please input the price you looking for!"));
        let foundFlightsL=[];
        let foundFlightsH=[];
        let foundFlightsS=[];
        if(flightPriceRange==="L"){
            for(let i=0;i<flights.length;i++){
                if(flightPrice>=flights[i].cost){
                    foundFlightsL.push(flights[i]);
                    console.log(flights[i]);
                }
                console.log(foundFlightsL);
               let buyFligth=parseFloat(prompt("Please introduce the ID of the flight you want to buy!"))
                if (buyFligth===foundFlightsL[i].id){
                    console.log("Thank you for the purchase, see you soon");
                }else{
                    console.log("Wrong ID number");
                     
                }
                
            }

        }else if(flightPriceRange==="H"){
           
            for(let i=0;i<flights.length;i++){
                if(flightPrice<flights[i].cost);{
                    foundFlightsH.push(flights[i]);
                    console.log(flights[i]);
                }
                console.log(foundFlightsH);
                let buyFligth=parseFloat(prompt("Please introduce the ID of the flight you want to buy!"))
                if (buyFligth===foundFlightsH[i].id){
                    console.log("Thank you for the purchase, see you soon");
                }else{
                    console.log("Wrong ID number");
                }

            }

        }else if(flightPriceRange==="S"){
            for(let i=0;i<flights.length;i++){
                if(flightPrice==flights[i].cost){
                    foundFlightsS.push(flights[i]);
                    console.log(flights[i])
                }
                console.log(foundFlightsS);
                let buyFligth=parseFloat(prompt("Please introduce the ID of the flight you want to buy!"))
                if (buyFligth===foundFlightsS[i].id){
                    console.log("Thank you for the purchase, see you soon");
                }else{
                    console.log("Wrong ID number");
                }

            }
        }
        


    }

 

}

flightList();
