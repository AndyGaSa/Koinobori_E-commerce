 let flights = [ //Primero declaramos los vuelo en una variable global de tipo array;
         { id: 01, to: 'Rome', from: 'Valencia', cost: 200, scale: false },
         { id: 02, to: 'London', from: 'Barcelona', cost: 160, scale: false },
         { id: 03, to: 'Ottawa', from: 'Madrid', cost: 1100, scale: true },
         { id: 04, to: 'Madrid', from: 'Barcelona', cost: 100, scale: false },
         { id: 05, to: 'Moscow', from: 'Barcelona', cost: 800, scale: true },
         { id: 06, to: 'Paris', from: 'Valencia', cost: 140, scale: false },
         { id: 07, to: 'New York', from: 'Barcelona', cost: 1200, scale: true },
         { id: 08, to: 'Monaco', from: 'Barcelona', cost: 140, scale: false },
         { id: 09, to: 'Amsterdam', from: 'Barcelona', cost: 130, scale: false },
         { id: 10, to: 'Buenos Aires', from: 'Madrid', cost: 950, scale: true }
     ]
     /*Declaramos algunas variables para posteriormente calcular el coste medio de los vuelos, 
      cuantos realizan escalas y cuales son los últimos destinos del día.*/
 let totalFlightsCost = 0;
 let flightsWithStopover = 0;
 const lastDepartures = [];
 let person;
 let user; //Tipo de usuario para las opciones avanzadas
 function greetings() { //Función inicial para el saludo
     person = prompt('Hi! What\'s your name?'); //Se pregunta el nombre del usuario vía prompt
     alert(`Welcome, ${person}. Let me know if I can assist you.`) //Se le da la bienvenida mediante un alert
 }

 function currentFlights() { //Función para mostrar los vuelos
     // Se muestran por consola los vuelos progrmados
     console.log(`These are the flights scheduled for today:`)
     for (let i = 0; i < flights.length; i++) { //A traves de un for se recorren los distintos vuelos del array
         totalFlightsCost += flights[i].cost; //Se suman los precios de los vuelos para calcular el coste medio

         /*Con ayuda de un condicional se distinguen los vuelos con escalas de los que no hacen escalas,
         de ese modo se imprimen por consola de forma  distinta y se almacenan los vuelos con escalas para indicar más tarde
         la cantidad de estos vuelos*/
         if (!flights[i].scale) {
             console.log(`Flight from ${flights[i].from} to ${flights[i].to}. This flight has a cost of ${flights[i].cost}€ and ` +
                 `does not make stopovers`)
         } else {
             console.log(`Flight from ${flights[i].from} to ${flights[i].to}. This flight has a cost of ${flights[i].cost}€ and ` +
                 `makes stopovers`)
             flightsWithStopover++;
         }

     }

 }

 function statistics() { //Función para mostrar los datos estadísticos
     let averageCost = totalFlightsCost / flights.length; //Cálculo del coste medio de los vuelos
     for (let i = 1; i <= 5; i++) { //Se localizan las últimas destinaciones
         lastDepartures.push(flights[(flights.length - i)].to);
     }
     //Se imprimen los datos estadísticos por consola
     console.log(`The average cost is ${averageCost}€`)
     console.log(`${flightsWithStopover} flights make stopovers.`)
     console.log(`The last destinations form today's fligths are ${lastDepartures}`)
 }

 function andYouAre() { //Función para saber el tipo de usuario
     user = prompt('Select your user status (ADMIN/USER) or type END to finish');
 }

 function admin() { //Función para administrador
     let option;
     do { // Usando una estructura dowhile se volverá a solicitar al usuario qué operación quiere realizar mientras eliga añadir o eliminar vuelos.
         option = parseInt(prompt('Select an option: \n 1 for add a flight, 2 for delete a flight, Cancel for exit'));
         switch (option) {
             case 1: //Añadir vuelos:
                 if (flights.length < 15) { // con un condicional se evita que el usuario añada más de 15 vuelos
                     let newFlight = {}; // Se crea un objeto nuevo
                     newFlight.id = flights[flights.length - 1].id + 1; // Se van añadiendo los atributos del objeto mediante prompts
                     newFlight.to = prompt('Please, set the flight\'s destination: ');
                     newFlight.from = prompt('Please, set the flight\'s origin: ');
                     newFlight.cost = parseFloat(prompt('Please, set the flight\'s cost: '));
                     let scale = prompt('Does the flight make stopovers? (yes/no)');
                     newFlight.scale = scale.toLowerCase() === 'yes' ? true : false;
                     flights.push(newFlight); // Se añade el nuevo vuelo al arreglo 

                     console.log('Current flights list: ') //Se muestra la nueva lista de vuelos
                     for (let i = 0; i < flights.length; i++) {
                         if (!flights[i].scale) {
                             console.log(`Flight from ${flights[i].from} to ${flights[i].to}. This flight has a cost of ${flights[i].cost}€ and ` +
                                 `does not make stopovers`)
                         } else {
                             console.log(`Flight from ${flights[i].from} to ${flights[i].to}. This flight has a cost of ${flights[i].cost}€ and ` +
                                 `makes stopovers`)
                             flightsWithStopover++;
                         }
                     }

                 } else { alert('You can\'t add more flights for today') }
                 /* En caso de que hayan 15 vuelos 
                                    se indica que se ha llegado al límite*/
                 break;

             case 2: // Eliminar vuelos:
                 console.log('Current flights') //Se muestran los vuelos existentes
                 for (let i = 0; i < flights.length; i++) {
                     if (!flights[i].scale) {
                         console.log(`Flight id: ${flights[i].id}. Flight from ${flights[i].from} to ${flights[i].to}. This flight has a cost of ${flights[i].cost}€ and ` +
                             `does not make stopovers`)
                     } else {
                         console.log(`Flight id: ${flights[i].id}. Flight from ${flights[i].from} to ${flights[i].to}. This flight has a cost of ${flights[i].cost}€ and ` +
                             `makes stopovers`)
                         flightsWithStopover++;
                     }
                 }

                 let idToRemove = parseInt(prompt('Type the id of the flight to remove')); //Se solicita el id del vuelo a eliminar
                 // Se recorre el array mediante un for para localizar el vuelo a eliminar
                 for (let i = 0; i < flights.length; i++) {
                     if (idToRemove === flights[i].id) { //Si el id indicado coincide con el id de un vuelo  se elimina usando filter()
                         flights = flights.filter(flight => flight.id !== idToRemove);
                     }
                     console.log('Current flights list: ')
                     for (let i = 0; i < flights.length; i++) {
                         if (!flights[i].scale) {
                             console.log(`Flight from ${flights[i].from} to ${flights[i].to}. This flight has a cost of ${flights[i].cost}€ and ` +
                                 `does not make stopovers`)
                         } else {
                             console.log(`Flight from ${flights[i].from} to ${flights[i].to}. This flight has a cost of ${flights[i].cost}€ and ` +
                                 `makes stopovers`)
                             flightsWithStopover++;
                         }
                     }
                 }

             default:
                 break;
         }
     } while (option === 1 || option === 2); //Si el usuario no elige añadir o elimiar vuelos finaliza el programa
 }

 function regularUser() { //Función para usuario 
     let availableFlights = []; //Se crea un nuevo array para filtrar los vuelos sin cambiar el array original
     let newSearch; //Variable para realizar nuevas búsquedas
     let price = parseFloat(prompt('Please, select the price:')); //Se le solicita al usuario una cantidad 
     //A continuación se le pide al usuario si desea ver los vuelos más baratos, más caros o de ese precio
     let comparision = prompt('Select 1 to see the flights that cost less than that' +
         '\nSelect 2 to see the flights that cost that amount' +
         '\nSelect 3 to see the flights that cost more than that')
     switch (comparision) {
         /*Con filter() seleccionamos los vuelos que cumplan el requisito indicado
         Con una estructura if se le indicará al usuario en caso de que no existan vuelos */
         case '1':
             availableFlights = flights.filter(flight => flight.cost < price)
             if (availableFlights.length === 0) {
                 newSearch = prompt('No match found. Do you want to start a new search? (yes/no)')
                 if (newSearch) {
                     if (newSearch.toLowerCase() === 'yes') {
                         regularUser();
                     }
                 }
             }
             break;

         case '2':
             availableFlights = flights.filter(flight => flight.cost === price)
             if (availableFlights.length === 0) {
                 newSearch = prompt('No match found. Do you want to start a new search? (yes/no)')
                 if (newSearch) {
                     if (newSearch.toLowerCase() === 'yes') {
                         regularUser();
                     }
                 }
             }
             break;

         case '3':
             availableFlights = flights.filter(flight => flight.cost > price)
             if (availableFlights.length === 0) {
                 newSearch = prompt('No match found. Do you want to start a new search? (yes/no)')
                 if (newSearch) {
                     if (newSearch.toLowerCase() === 'yes') {
                         regularUser();
                     }
                 }
             }
             break;

         default:
             console.log('Not match found');
             break;
     }

     if (availableFlights.length > 0) { //En caso de que haya algún resultado disponible se le muestran al usuario y si solicita el id del vuelo a comprar
         console.log('Flights available: ')
         for (let i = 0; i < availableFlights.length; i++) {
             if (!availableFlights[i].scale) {
                 console.log(`Flight id: ${availableFlights[i].id}. Flight from ${availableFlights[i].from} to ${availableFlights[i].to}. This flight has a cost of ${availableFlights[i].cost}€ and ` +
                     `does not make stopovers`)
             } else {
                 console.log(`Flight id: ${availableFlights[i].id}. Flight from ${availableFlights[i].from} to ${availableFlights[i].to}. This flight has a cost of ${availableFlights[i].cost}€ and ` +
                     `makes stopovers`)
             }
         } //Se muestran los vuelos disponibles y se da la opción de comprar un billete o realizar una nueva búsqueda
         let purchase = prompt('Do you want to purchase any available ticket? (yes/no)')
         if (purchase) {
             if (purchase.toLowerCase() === 'yes') {
                 let idFlightSelected = parseInt(prompt('Select a flight by ID: ')); //Se pide el id
                 availableFlights = flights.filter(flight => flight.id == idFlightSelected); //Se filtran los resultados por id
                 alert(`Thank you for purchase a ticket to ${availableFlights[0].to}. We hope to see you soon`) //Se imprime mensaje final de agradecimiento
             } else {
                 newSearch = prompt('Do you want to start a new search? (yes/no)')
                 if (newSearch) {
                     if (newSearch.toLowerCase() === 'yes') {
                         regularUser();
                     }
                 }
             }
         }
     }

 }

 function flightsAssistant() { //Función global
     do {
         greetings();
     } while (person === null)

     currentFlights();

     statistics();
     do { //Se solicita al usuario el tipo de perfil mientras no sea un perfil válido o indique que desea finalizar el programa
         andYouAre();
         if (user !== null) {
             user = user.toUpperCase();
             //A continuación se añaden las opciones según el tipo de usuario:
             if (user === 'ADMIN') { //En el caso del administrador (uso toUpperCase() para evitar conflictos derivados del uso de mayúsculas)
                 admin();
             } else if (user === 'USER') { //En el caso del usuario (user):
                 regularUser();
             }

         }

     } while (user !== 'ADMIN' && user !== 'USER' && user !== 'END');


 }
 flightsAssistant(); // Llamada a la función