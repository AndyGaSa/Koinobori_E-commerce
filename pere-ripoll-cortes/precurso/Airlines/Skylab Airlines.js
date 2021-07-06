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
  
    start();
  
    function start(){
      let costeMedio;
      let realizanEscala = 0;
      let arr = [];
      //first request username:
      let yourname = prompt("Type your name: ");
      console.log("Welcome " + yourname);
  
      for (let r = 0; r < flights.length; r++) {
        console.log("El vuelo con origen " + flights[r].from + " y destino " + flights[r].to + "tiene un coste de " + flights[r].cost + "€ y " + (flights[r].scale ? "se" : "no se") + " realizan escalas");
        costeMedio += flights[r].cost;
        flights[r].scale ? realizanEscala++ : realizanEscala;
        flights[r].id >= flights.length-5 ? arr.push(flights[r].to) : null;
      }
      console.log("El coste medio es: " + (costeMedio/flights.length).toFixed(2) + "€");
      console.log("Realizan escala: " + realizanEscala + " vuelos");
      console.log("El destino de los ultimos 5 vuelos de hoy son:")
      arr.forEach(element => {
        console.log(element);
      });
    }