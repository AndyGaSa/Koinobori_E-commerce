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

    { id: 9, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true }];


let usuario = prompt("Introduce tu nombre de ususario");
alert("Vienvenido/a " + usuario);

console.log("Estos son los vuelos disponibles : ");

let costMedia = 0;
let vEscala = [];
for (let i = 0; i < flights.length; i++) {

    console.log("El vuelo con origen :" + flights[i].to + " y destino: " + flights[i].from + " Tiene un coste de : " + flights[i].cost);
    costMedia += flights[i].cost;

    if (flights[i].scale === true) {
        vEscala.push(flights[i]);
    }

}

costMedia = parseInt(costMedia) / flights.length;
console.log("El coste medio de los vuelos es de: " + costMedia);

console.log("Los vuelos con escala son :");
for (let i = 0; i<vEscala.length; i++) {
    console.log("El vuelo con origen: " + vEscala[i].to + " y destino: " + vEscala[i].from);

}

console.log("Los destinos de los ultios vuelos son : ");
for (let i = 5; i <= flights.length - 1; i++) {
    console.log(flights[i].from);

}






