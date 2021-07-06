let flights = [

    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, "stop over": false },

    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, "stop over": false },

    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, "stop over": true },

    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, "stop over": false },

    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, "stop over": false },

    { id: 05, to: 'London', from: 'Madrid', cost: 200, "stop over": false },

    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, "stop over": false },

    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, "stop over": true },

    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, "stop over": true },

    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, "stop over": true },

    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, "stop over": false }];

function airlinesPro() {
    var greetName = prompt("Please type your name here");
    alert(`${greetName}, welcome to SkyLab Airlines!`);
    startAirClient();
    latestDestinations();

    console.log(`The average cost of the flights is: ${averageCost()} €`);
    console.log(`The latest destinations are: ${removeDups()} `);
    checkRights();
}
function startAirClient() {

    let counter = 0;
    let totalCost = 0;
    for (let i = 0; i < flights.length; i++) {
        totalCost += flights[i]['cost'];
        if (flights[i]["stop over"]) {
            counter++;
            console.log(`${flights[i]['id']}: The flight with origin: ${flights[i]['to']}, and destination: ${flights[i]['from']} has a cost of ${flights[i]['cost']} € and makes 1 stop over.`)
        } else {
            console.log(`${flights[i]['id']}: The flight with origin: ${flights[i]['to']}, and destination: ${flights[i]['from']} has a cost of ${flights[i]['cost']} €, direct flight.`)
        }
        console.log(`Number of flights with a stop over: ${counter} `);
    }
}

function removeDups() {
    return [...new Set(latestDestinations())];
}

let averageCost = () => {
    return (totalCost / flights.length).toFixed(2);
}



function latestDestinations() {
    let destinations = [];
    for (let m = flights.length; m >= (flights.length - 5); m--) {
        destinations.push(flights[m - 1]['from']);
    }
    console.log(`The latest destinations for today are ${destinations}`);
}

function checkRights() {
    let visitor = confirm("Are you admin?")
    return (visitor) ? adminBlock() : userBlock();
}

function adminBlock() {
    createFlights();
    deleteFlights();
}

function userBlock() {
    largest();
    cheapest();
    equalcost();
    ticketPurchase();
}

function createFlights() {
    let iscreatingFlight = confirm("Would you like to add new flights?")
    if (iscreatingFlight) {
        if (flights.length < 15) {
            let newFlight = {};
            newFlight.id = flights.length;
            newFlight['to'] = prompt("Enter city of origin");
            newFlight['from'] = prompt("Enter the destination city");
            newFlight['cost'] = prompt("Enter the ticket price");
            newFlight['stop over'] = confirm("Is there any stop over?");
            flights.push(newFlight);
            console.log(flights);
        } else {
            alert("Sorry, you've reached the admittable maximum of flights")
        }
    } else {
        alert("Cheers!");
    }
}

function deleteFlights() {
    let isdeletingFlight = confirm("Would you like to delete an existing flight?")
    if (isdeletingFlight) {
        let tobeDeleted = Number(prompt("Enter the flight ID to be deleted"));
        for (let counter = 0; counter < flights.length; counter++) {
            if (flights[counter]['id'] == tobeDeleted) {
                flights.splice(flights[counter], 1);
                for (let j = flights[counter]['id'] - 1; j <= flights.length; j++) {
                    flights[counter]['id'] -= 1;
                }
                console.log(flights);
            } else {
                continue
                // alert("There's no flight with this ID")
            }
        }
    } else {
        alert("Cheers!");
    }
}



function largest() {
    let ifLargestcost = confirm("Would you like to see the most expensive flight?")
    if (ifLargestcost) {
        let i;
        let max = flights[0]['cost'];
        for (i = 0; i < flights.length; i++) {
            if (flights[i]['cost'] > max) {
                max = flights[i]['cost'];
            }
        }
        console.log(`The most expensive flight is ${max}`);
    }
}

function cheapest() {
    let ifCheapestcost = confirm("Would you like to see the cheapest flight?")
    if (ifCheapestcost) {
        let c;
        let min = flights[0]['cost'];
        for (c = 0; c < flights.length; c++) {
            if (flights[c]['cost'] < min) {
                min = flights[c]['cost'];
            }
        }
        console.log(`The cheapest flight is ${min} `);
    }
}

function equalcost() {
    let ifEqualcost = confirm("Would you like to check flights with determined cost?")
    if (ifEqualcost) {
        let s;
        let userCost = prompt("Enter the desirable price of the ticket");
        for (s = 1; s < flights.length; s++) {
            if (flights[s]['cost'] == Number(userCost)) {
                console.log(`The flight with this price is ${flights[s]} `);
            }
        }
    }
}

function ticketPurchase() {
    let idPickedFlight = prompt("Please enter the flight number to purchase the ticket");
    for (let p = 0; p < flights.length; p++) {
        if (parseFloat(idPickedFlight) == flights[p]['id']) {
            console.log(flights[p]);
            alert("Thank you for your purchase!");
        } else {
            continue
        }
    }
}
