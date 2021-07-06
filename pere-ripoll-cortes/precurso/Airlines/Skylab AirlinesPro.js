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
      costeMedio =+ flights[r].cost;
      flights[r].scale ? realizanEscala++ : realizanEscala;
      flights[r].id >= flights.length-5 ? arr.push(flights[r].to) : null;
    }
    console.log("El coste medio es: " + (costeMedio/flights.length).toFixed(2) + "€");
    console.log("Realizan escala: " + realizanEscala + " vuelos");
    console.log("El destino de los ultimos 5 vuelos de hoy son:")
    arr.forEach(element => {
      console.log(element);
    });

    // Ejecutamos la función login para pedir al usuario si es 'Admin' o 'User'.
    login();
  }

  function login(){
    let login;
    let check = false;

    do {
      login = prompt("Indica tipo de usuario: 'Admin' o 'User'");

      if (login.toLowerCase().localeCompare("admin") == 0) {
        console.log("Activada funciones de Admin");
        admin();
        check = true;

      }else if(login.toLowerCase().localeCompare("user") == 0){
        console.log("Activada funciones de User");
        user();
        check = true;

      }else{
        alert("El usuario indicado no existe! Intentelo de nuevo");
      }

    } while (!check);
  }

 function admin() {
   let check = false;
   do {
    let action = prompt("Que quieres realizar? \n"+
    "Añadir vuelo - pulsar 1 \n" +
    "Eliminar vuelos - pulsar 2 \n" +
    "Mostrar todos los vuelos de la BD - pulsar 3 \n" +
    "Salir del programa - pulsar 4");
    if(action == 1){
      addFlights();
      check = true;
     }else if(action == 2){
       deleteFlights();
       check = true;
     }else if(action == 3){
       console.table(flights);
       admin();
     }else if(action == 4){
      check = true;
     }else{
       alert("Valor Incorrecto")
     };
   } while (!check);

 }

 function flyinfo(){
  let flight = {};
  //Se añade por orden toda la información a @flight 
  flight.id = flights.length;
  flight.to = prompt("Indica destino: ");
  flight.from = prompt("Indicar origen");
  flight.cost = prompt("Indicar el coste");
  flight.scale = prompt("Hay que hacer escala? y/n");
  if(flight.scale === 'y'){
    flight.scale = true
  } else if(flight.scale === 'n'){
    flight.scale = false
  }else{
    flight.scale = null;
  };
  return flight;
 }

 function addFlights(){
   let flightjson = {} //Para registrar un vuelo
   let check = false; //Para controlar el bucle do...while
   let contador = 0; //Para contar el numero de vuelos introducidos por el usuario.
   
   do {
     
    flightjson = flyinfo();
    //Se añade el JSON al Array y posteriormente se muestan los vuelos actualizados.
    flights.push(flightjson);
    console.table(flights);

    //Preguntamos al usuario si quiere continuar introduciendo vuelos
    let pregunta = prompt("Quieres añadir otro vuelo? y/n");
    if (pregunta.toLowerCase().localeCompare('y') == 0) {
      contador++;
      
    }else if(pregunta.toLowerCase().localeCompare('n') == 0){
      check = true;
    }else{
      alert("Error, valor introducido incorrecto");
      check = true;
    }

    //Si el usuario realiza más de 15 entradas, se cierra la función y se muestra el mensaje de aviso correspondiente.
    if(contador == 15){alert("No se puede realizar más de 15 entradas."); check = true;}

   } while (!check);
   //llamamos de nuevo a la funciones de admin
   admin();
 }

 function deleteFlights(){
   let ID; //Para solicitar ID del vuelo
   let check = false; //Controla el bucle do...while
   let index = -1; //Controllar si el ID introducido existe o no en el array 'flights'.
   do {
     console.log("A continuación se muestra la lista de vuelos registrados:");
     console.table(flights);
     ID = parseInt(prompt("Indicar el ID del vuelo que se quiera eliminar"));
     if(typeof ID === 'number'){
      for (let i = 0; i < flights.length; i++) {
        if(flights[i].id == ID){
        index = i;
        }
       }
       if(index !== -1){
         flights.splice(index,1);
         check = true;
         admin();
       }else{
         alert("Error valor introduit");
       }
     }else{
       alert("El valor introducido no es un numero");
     }
   } while (!check);
 }


 function user(){
   let price = parseInt(prompt("Indica el precio del vuelo"));
   let vuelos = [];
   let compra;
   let value = false;
   let check1 = false;

   //Es verifica que el valor sigui correcte i que estigui present en el Array.
   do {
    if(typeof price == 'number'){
      for(let i = 0; i < flights.length; i++){
       if(flights[i].cost == price){
         vuelos.push(flights[i]);
       }
      }
    }else{
      alert("Valor incorrecto!");
    }
   } while (!check1);

   if (vuelos.length > 0) {
     console.log("Se han encontrado los siguientes vuelos:");
     for (let r = 0; r < vuelos.length; r++) {
      console.log("El vuelo con numero " + vuelos[r].id + " con origen " + vuelos[r].from + " y destino " + vuelos[r].to + "tiene un coste de " + vuelos[r].cost + "€ y " + (vuelos[r].scale ? "se" : "no se") + " realizan escalas");
     }
     compra = parseInt(prompt("Por favor, indique el ID del vuelo que desee comprar:"));
     if (typeof compra == 'number') {
       vuelos.forEach(element => {
         if (element.id == compra) {
           value = true;
         }
       });
       if (value) {
        console.log("Gracias por su compra, vuelva pronto.");
       }else{
        alert("El ID indicado no existe");
       }
     }else{
       alert("El ID indicado no existe");
     }
   }else{
     console.log("No hay vuelos con el preció indicado");
   }


 }





