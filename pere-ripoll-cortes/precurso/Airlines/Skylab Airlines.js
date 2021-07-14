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
  
    start();
  
    function start(){
      let costeMedio;
      let realizanEscala = 0;
      //first request username:
      let yourname = prompt("Type your name: ");
      console.log("Welcome " + yourname);

      for(let value of flights){
        console.log("El vuelo con origen " + value.from + " y destino " + value.to + "tiene un coste de " + value.cost + "€ y " + (value.scale ? "se" : "no se") + " realizan escalas");
        costeMedio += value.cost;
      }
  
      console.log("El coste medio es: " + (costeMedio/flights.length).toFixed(2) + "€");
      console.log("Realizan escala: " + realizanEscala + " vuelos");
      console.log("El destino de los ultimos 5 vuelos de hoy son:")
    }