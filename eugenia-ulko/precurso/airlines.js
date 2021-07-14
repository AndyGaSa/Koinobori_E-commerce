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

function startAirClient() {
    var greetName = prompt("Welcome to SkyLab Airlines! Please type your name here")
    let counter = 0;
    let totalCost = 0;
    for (let i = 0; i < flights.length; i++) {
        totalCost += flights[i]['cost'];
        if (flights[i]["stop over"]) {
            counter++;
            console.log(`${flights[i]['id']}: The flight with origin: ${flights[i]['to']}, and destination: ${flights[i]['from']} has a cost of ${flights[i]['cost']}€ and makes 1 stop over.`)
        } else {
            console.log(`${flights[i]['id']}: The flight with origin: ${flights[i]['to']}, and destination: ${flights[i]['from']} has a cost of ${flights[i]['cost']}€, direct flight.`)
        }

  }
function latestDestinations() {
  let destinations = [];
  for (let m = flights.length; m >= (flights.length - 5); m--) {
    destinations.push(flights[m-1]['from']);
  }
  return destinations;
}

function removeDups() {
    return [...new Set(latestDestinations())];
}

  let averageCost = () => {
    return (totalCost / flights.length).toFixed(2);
  }
  console.log(`Number of flights with a stop over: ${counter}`);
  console.log(`The average cost of the flights is: ${averageCost()}€`);
  console.log(`The latest destinations are: ${removeDups()}`);
}
