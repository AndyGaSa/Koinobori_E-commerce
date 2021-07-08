/**
 * --> interfaz de usuario para una aerolínea por consola.
 * --> 10 vuelos para el día de hoy, para empezar, estos vuelos deben estar declarados de manera global
 * --> cuando se llame a la función:
 * --> Se preguntará por el nombre de usuario y dará la bienvenida (via prompt).
    -ej. El vuelo con origen: Barcelona, y destino: Madrid tiene un coste de XXXX€ y no realiza ninguna escala.
    -A continuación, el usuario verá el coste medio de los vuelos.
    -También podrá ver cuántos vuelos efectúan escalas.
    -Sabiendo que los últimos 5 vuelos (los últimos 5 IDs) son los últimos del día, muestra al usuario sus destinos.
 * Si eres USER la función debería permitir:
    - Buscar por precio (más alto, más bajo o igual), 
    -indicando al programa el ID, el programa responderá: "Gracias por su compra, vuelva pronto."
 * Si eres ADMIN la función debería permitir:
    -Poder crear, más vuelos, pidiendo la información por prompt(), sin poder pasar de 15 vuelos, si se intenta introducir uno más, saltará un alert().
    - Poder eliminar vuelos mediante el ID.
 */
console.log("Puedes llamar a la funcion flightsLog(dailyFlights)");

let dailyFlights = [
  { id: 0, to: "Bilbao", from: "Barcelona", cost: 1600, scale: false },
  { id: 1, to: "New York", from: "Barcelona", cost: 700, scale: false },
  { id: 2, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
  { id: 3, to: "Paris", from: "Barcelona", cost: 210, scale: false },
  { id: 4, to: "Roma", from: "Barcelona", cost: 150, scale: false },
  { id: 5, to: "London", from: "Madrid", cost: 200, scale: false },
  { id: 6, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
  { id: 7, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
  { id: 8, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
  { id: 9, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
  { id: 10, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];
let userName;
function welcome() {
  userName = window.prompt("Bienvenido, ¿cual es tu nombre?");
  if (userName === null) {
    return console.log("Adios!");
  } else {
    flightsLog(dailyFlights);
  }
}
welcome();

function flightsLog(values = []) {
  window.alert(`Bienvenido ${userName}`);
  let costs = [];
  let scalesCounter = 0;
  let lastDestinations = [];
  for (let i = 0; i < values.length; i++) {
    let flight = values[i];
    let scale = "";
    costs.push(flight.cost);
    if (flight.scale) {
      scale = "realiza escala";
      scalesCounter += 1;
    } else {
      scale = "no realiza ninguna escala";
    }
    if (i > values.length - 5) {
      lastDestinations.push(flight.to);
    }
    console.log(
      `El vuelo con origen: ${flight.from}, y destino: ${flight.to} tiene un coste de ${flight.cost}€ y ${scale}.`
    );
  }
  //logs finales
  let costsMedian =
    Math.round(
      (costs.reduce((previous, current) => current + previous) /
        (values.length + 1)) *
        1000
    ) / 1000;
  console.log(`El precio medio de los vuelos es de ${costsMedian}`);
  console.log(`El numero de vuelos con escala es de ${scalesCounter}`);
  let lastDestinationsString = lastDestinations.join(", ");
  console.log(`los ultimos destinos son ${lastDestinationsString}`);

  userOrAdmin(values);
}

function userOrAdmin(values) {
  let userStatus = window.prompt(
    `Bienvenido a Airlines Pro ${userName}, indica a continuacion si eres user o admin`
  );
  if (userStatus.toLowerCase() === "user") {
    return searchFlights(values);
  } else if (userStatus.toLowerCase() === "admin") {
    return adminChoose(values);
  } else {
    window.alert("disculpa, no te he entendido");
    return userOrAdmin(values);
  }
}

function userMoney() {
  let referencePrice = window.prompt("¿Cuanto quieres pagar por tu vuelo?");
  if (isNaN(parseInt(referencePrice)) || referencePrice === null) {
    window.alert("No has introducido un formato valido");
    return userMoney();
  } else {
    return referencePrice;
  }
}

function searchFlights(values = []) {
  let referencePrice = userMoney();
  costOrder(referencePrice, values);
  return buyFLight(values);
}

function costOrder(money, values = []) {
  let searchDirection = window.prompt(
    "¿quieres que te muestre precios mas caros, mas baratos o iguales a lo que indiques?"
  );
  if (
    searchDirection === "mas caros" ||
    searchDirection === "caros" ||
    searchDirection === "más caros" ||
    searchDirection === "menos baratos"
  ) {
    priceUp(money, values);
    console.log("Por si te interesa tambien tenemos los siguientes vuelos:");
    priceDown(money, values);
    priceEqual(money, values);
  } else if (
    searchDirection === "mas baratos" ||
    searchDirection === "baratos" ||
    searchDirection === "más baratos" ||
    searchDirection === "menos caros"
  ) {
    priceDown(money, values);
    console.log("Por si te interesa tambien tenemos los siguientes vuelos:");
    priceUp(money, values);
    priceEqual(money, values);
  } else if (
    searchDirection === "igual" ||
    searchDirection === "similar" ||
    searchDirection === "iguales"
  ) {
    priceEqual(money, values);
    console.log("Por si te interesa tambien tenemos los siguientes vuelos:");
    priceUp(money, values);
    priceDown(money, values);
  } else {
    window.alert(`disculpa, pero no te he entendido`);
    return costOrder(money, values);
  }
}

function priceUp(money, values = []) {
  let moreThan = [];
  for (let value of values) {
    let flight = value;
    if (flight.cost > money) {
      moreThan.push(
        `vuelo desde ${flight.from} a ${flight.to} que vale ${flight.cost} con ID ${flight.id}`
      );
    }
  }
  console.log(
    `los billetes de un precio superior al que buscas son: \n${moreThan.join(
      ",\n"
    )}`
  );
}

function priceDown(money, values = []) {
  let lessThan = [];
  for (let value of values) {
    let flight = value;
    if (flight.cost < money) {
      lessThan.push(
        `vuelo desde ${flight.from} a ${flight.to} que vale ${flight.cost} con ID ${flight.id}`
      );
    }
  }
  console.log(
    `los billetes de un precio inferior al que buscas son: \n${lessThan.join(
      ",\n"
    )}`
  );
}

function priceEqual(money, values = []) {
  let equalThan = [];
  for (let value of values) {
    let flight = value;
    if (flight.cost == money) {
      equalThan.push(
        `vuelo desde ${flight.from} a ${flight.to} que vale ${flight.cost} con ID ${flight.id}`
      );
    }
  }
  if (equalThan.length === 0) {
    console.log(`No hay otros billetes con el precio que buscas`);
  } else {
    console.log(
      `los billetes de un precio igual al que buscas son: \n${equalThan.join(
        ",\n"
      )}`
    );
  }
}

function buyFLight(values = []) {
  let idToBuy = window.prompt("indica el ID del vuelo que desees comprar");
  if (isNaN(parseInt(idToBuy)) || idToBuy > values.length || idToBuy < 0) {
    window.alert("EL dato introducido no es correcto");
    return buyFLight(values);
  } else {
    for (let value of values) {
      let flight = value;
      if (flight.id == parseInt(idToBuy)) {
        console.log(
          `ha comprado el vuelo con recorrido ${flight.from} ${flight.to}. Gracias por su compra, vuelva pronto.`
        );
      }
    }
  }
}

function adminChoose(values = []) {
  let adminWelcome = window.prompt(
    `Al tener derechos como administrador puedes crear o borrar vuelos, ¿que deseas hacer?`
  );
  if (adminWelcome.toLowerCase() === "crear") {
    return newFlight(values);
  } else if (adminWelcome.toLowerCase() === "borrar") {
    printFlights(values);
    return deleteFlight(values);
  } else {
    window.alert("disculpa, no te he entendido");
    return adminChoose(values);
  }
}
function printFlights(values = []) {
  for (let value of values) {
    let flight = value;
    console.log(
      `vuelo desde ${flight.from} a ${flight.to} que vale ${flight.cost} con ID ${flight.id}`
    );
  }
}

function newFrom() {
  let from = window.prompt("¿Cual es el origen del vuelo? ejemplo: Barcelona");
  if (from === null) {
    window.alert("disculpa, no te he entendido");
    return newFrom();
  }
  return from;
}

function newTo() {
  let to = window.prompt("¿Cual es el destino del vuelo? ejemplo: Paris");
  if (to === null) {
    window.alert("disculpa, no te he entendido");
    return newTo();
  }
  return to;
}

function newCost() {
  let cost = window.prompt("¿Cual es el coste del vuelo? ejemplo: 500");
  if (!isNaN(parseInt(cost))) {
    return cost;
  } else {
    window.alert("disculpa, no te he entendido");
    return newCost();
  }
}

function newScale() {
  let scale = window.prompt("¿Hace escalas? ejemplo: si");
  if (scale == "si" || scale == "yes") {
    return true;
  } else if (scale == "no") {
    return false;
  } else {
    window.alert("disculpa, no te he entendido");
    return newScale();
  }
}

function newFlight(values = []) {
  let addFlight = {};
  addFlight.id = values.length + 1;
  addFlight.from = newFrom();
  addFlight.to = newTo();
  let cost = newCost();
  addFlight.cost = cost;
  addFlight.scale = newScale();
  values[values.length + 1] = addFlight;
  window.alert(
    `Se ha creado un vuelo con origen: ${addFlight.from}, destino: ${addFlight.to} que vale ${addFlight.cost} con ID ${addFlight.id}`
  );
  console.log(
    `Se ha creado un vuelo con origen: ${addFlight.from}, destino: ${addFlight.to} que vale ${addFlight.cost} con ID ${addFlight.id}`
  );
}

function deleteFlight(values = []) {
  let idToDelete = window.prompt(
    "Indica el ID del vuelo que quieres borrar ejemplo: 9"
  );
  if (
    isNaN(parseInt(idToDelete)) ||
    idToDelete > values.length ||
    idToDelete < 0
  ) {
    window.alert("disculpa, no te he entendido");
    return deleteFlight();
  } else {
    for (let value of values) {
      let flight = value;
      if (flight.id == parseInt(idToDelete)) {
        window.alert(
          `Se ha eliminado el vuelo con origen: ${flight.from}, y destino: ${flight.to}.`
        );
        values.splice(i, 1);
      }
    }
  }
}
