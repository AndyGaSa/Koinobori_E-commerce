let flights = [
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
let escalasVuelos=undefined;
let identificacion = prompt(`porfavor introduzca su nombre`);
alert(
  `Encantado de conocerle ${identificacion} bienvenido a skylab Airlines estos son nuestros vuelos disponibles para hoy`
);
{
  for (let i = 0; i < flights.length; i++) {
    //saludo y presentacion de vuelos.
    if (flights[i].scale === true) {
      escalasVuelos = `el vuelo hace escalas`;
    } else {
      escalasVuelos = `el vuelo no hace escalas`;
    }
    console.log(
      `el vuelo destino ${flights[i].to} procedente de ${flights[i].from} tiene un valor de ${flights[i].cost}€ y ${escalasVuelos}`
    );
  }
  function mediaCosteVuelos() {
    //coste medio vuelos.
    let mediaCoste = 0;
    for (let i = 0; i < flights.length; i++) {
      mediaCoste = mediaCoste + flights[i].cost;
    }

    mediaCoste = mediaCoste / (flights.length - 1);
    return mediaCoste;
  }
  console.log(
    `el coste medio de los vuelos de hoy es de: ${mediaCosteVuelos()}€`
  );

  function ultimos5() {
    //ultimos vuelos del dia
    for (let i = 0; i < flights.length; i++) {
      if (i >= 6) {
        console.log(
          `los ultimos cinco vuelos disponibles para hoy son: ${flights[i].from} destino a ${flights[i].to}`
        );
      }
    }
  }
  ultimos5();

  function administradorUsuario() {
    adminUser = prompt(
      `${identificacion} Después de ver toda la información disponible para hoy skylabairlines le gustaria saber si es usted: "usuario" o "administrador"`
    );
    if (adminUser !== "administrador" && adminUser !== "usuario") {
      alert(`no me seas troll`);
      administradorUsuario();
    }
    switch (adminUser.toLowerCase()) {
      case "usuario":
        function user() {
          let menorPresupuesto = [];
          let mayorPresupuesto = [];
          let igualPresupuesto = [];
          presupuesto = prompt(`Que presupuesto tienes ${identificacion}?`);
          if (presupuesto != null) {
            for (let i = 0; i < flights.length; i++) {
              if (flights[i].cost < presupuesto) {
                menorPresupuesto.push(flights[i]);
              } else if (flights[i].cost == presupuesto) {
                igualPresupuesto.push(flights[i]);
              } else {
                mayorPresupuesto.push(flights[i]);
              }
            }
            console.log(
              `Los vuelos con un coste menor a ${presupuesto} euros, son:`
            );
            for (let j = 0; j < menorPresupuesto.length; j++) {
              console.log(
                `El vuelo ${menorPresupuesto[j].id} con origen ${menorPresupuesto[j].to}, y destino : ${menorPresupuesto[j].from} tiene un coste de ${menorPresupuesto[j].cost} € .`
              );
            }
            console.log(
              `Los vuelos con un coste igual a ${presupuesto} euros, son:`
            );
            for (let j = 0; j < igualPresupuesto.length; j++) {
              console.log(
                `El vuelo ${igualPresupuesto[j].id} con origen ${igualPresupuesto[j].to}, y destino : ${igualPresupuesto[j].from} tiene un coste de ${igualPresupuesto[j].cost} € .`
              );
            }
            console.log(
              `Los vuelos con un coste mayor a ${presupuesto} euros, son:`
            );
            for (let j = 0; j < mayorPresupuesto.length; j++) {
              console.log(
                `El vuelo ${mayorPresupuesto[j].id} con origen ${mayorPresupuesto[j].to}, y destino : ${mayorPresupuesto[j].from} tiene un coste de ${mayorPresupuesto[j].cost} € .`
              );
            }
            comprarVuelo();
          } else {
            user();
          }
        }
        function comprarVuelo() {
          var id = prompt(`Por favor, indique el id de vuelo`);

          if (flights[id]) {
            alert(`Gracias por su compra, el vuelo con ID ${id} fue comprado`);
          } else {
            alert(`Id no valido, vuelva a intentarlo.`);
            comprarVuelo();
          }
        }

        break;
      case "administrador":
        function administrador() {
          crearElimninar = prompt(`desea crear o eliminar vuelos?`);
          if (flights.length >= 15) {
            alert(`no se pueden crear mas vuelos para el dia de hoy`);
            console.log(flights);
          } else if (crearElimninar === "crear") {
            let informacionNuevoVuelo = {};
            informacionNuevoVuelo.id = flights.length + 1;
            informacionNuevoVuelo.to = prompt(`que destino tendra?`);
            informacionNuevoVuelo.from = prompt(`de donde procedera?`);
            informacionNuevoVuelo.cost = prompt(`que coste va e tener?`);
            informacionNuevoVuelo.scale = prompt(
              `tiene escalas? "true" o "false"`
            );
            if (informacionNuevoVuelo.scale === "true") {
              escalasVuelos = `el vuelo hace escalas`;
            } else {
              escalasVuelos = `el vuelo no hace escalas`;
            }
            flights.push(informacionNuevoVuelo);
            console.log(flights);
            console.log(
              `el nuevo vuelo con ID ${informacionNuevoVuelo.id}  destino ${informacionNuevoVuelo.to} procedente de ${informacionNuevoVuelo.from} tiene un valor de ${informacionNuevoVuelo.cost}€ y ${escalasVuelos}`
            );
            let tornaiGenis = prompt(`quiere introducir mas vuelos? "si" "no"`);
            if (tornaiGenis === "si") {
              administrador();
            } else {
              alert(`muchas gracias vuelva pronto`);
            }
          } else if (crearElimninar === "eliminar") {
            let id = prompt("introduce el id del vuelo que desea eliminar");
            deleteFlight(id);
            console.log(flights);
            administrador();
          }
          function deleteFlight(id) {
            flights.splice(id, 1);
            for (let i = id; i < flights.length; i++) {
              flights[i].id = flights[i].id - 1;
            }
          }
        }
        administrador();
    }
    user();
  }
  administradorUsuario();
}

//      Skylab Airlines PRO
//Después de ver toda la información el programa pedirá al usuario si es ADMIN/USER (debe aceptar mayúscuzlas y minúsculas indiferentemente), dependiendo de la elección, el programa se comportará de la siguiente manera:
//
//Si eres ADMIN, la función debería permitir:
//
//● Poder crear, más vuelos, pidiendo la información por prompt(), sin poder pasar de 15 vuelos, si se intenta introducir uno más, saltará un alert().
//
//● Poder eliminar vuelos mediante el ID.
//
//Si eres USER la función debería permitir:
//
//● Buscar por precio (más alto, más bajo o igual), el programa debería mostrar los datos de los vuelos encontrados e, indicando al programa el ID, el programa responderá: "Gracias por su compra, vuelva pronto."
