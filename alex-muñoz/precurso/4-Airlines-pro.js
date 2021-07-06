//Skylab Airlines
//Programa una interfaz de usuario para una aerolínea (por consola...). Esta aerolínea dispondrá de 10 vuelos para el día de hoy, para empezar, estos vuelos deben estar declarados de manera global, cuando se llame a la función:
//● Se preguntará por el nombre de usuario y dará la bienvenida (via prompt).
//● El usuario visualizará todos los vuelos disponibles de una forma amigable : El vuelo con origen: Barcelona, y destino: Madrid tiene un coste de XXXX€ y no realiza ninguna escala.
//● A continuación, el usuario verá el coste medio de los vuelos.
//● También podrá ver cuántos vuelos efectúan escalas.
//● Sabiendo que los últimos 5 vuelos (los últimos 5 ID's) son los últimos del día, muestra al usuario sus destinos.

//Airlines pro
//Después de ver toda la información el programa pedirá al usuario si es ADMIN/USER (debe aceptar
//mayúsculas y minúsculas indiferentemente), dependiendo de la elección, el programa se comportará de la
//siguiente manera:

//Si eres ADMIN, la función debería permitir:

//● Poder crear, más vuelos, pidiendo la información por prompt(), sin poder pasar de 15 vuelos, si se 
//intenta introducir uno más, saltará un alert().

//● Poder eliminar vuelos mediante el ID.

//Si eres USER la función debería permitir:

//● Buscar por precio (más alto, más bajo o igual), el programa debería mostrar los datos de los vuelos 
//encontrados e, indicando al programa el ID, el programa responderá: "Gracias por su compra, vuelva pronto."

//Variables
let newFlight;
let deleteFlight;
let username;
let searchCost;
let searchCostArr;
let buyFlight;

const flights = [
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

    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
 ];

//Funciones
function bienvenida(){
    userName = capitalize(prompt('Buenos dias, ¿Cual es su nombre?').toLowerCase());
    alert(`${userName}, bienvenido/a a Skylab Airlines. A continuación te mostramos los vuelos disponibles.`);
    vuelosDisponibles();
}
function vuelosDisponibles(){
    for(let i=0; i<flights.length; i++){    
        if(flights[i].scale){ 
            console.log(`El vuelo con id ${flights[i].id}, origen ${flights[i].to}, y destino ${flights[i].from} tiene un coste de ${flights[i].cost}€ y realiza escala.`);
        }
        else{  
            console.log(`El vuelo con id ${flights[i].id}, origen ${flights[i].to}, y destino ${flights[i].from} tiene un coste de ${flights[i].cost}€ y no realiza ninguna escala.`);
        }
    }
}
const suma = (ns) =>{
    let acumulado=0;
        for(let i=0;i<flights.length; i++){
            acumulado += ns[i];
        }  
    return acumulado;
}
const capitalize = (n) => {
    return n.charAt(0).toUpperCase() + n.slice(1);
};

//funciones admin
function newFlights(){
    newFlight = window.confirm(`¿Desea introducir algun vuelo nuevo?`);
    if(newFlight === true && flights.length < 15){
        newFlight = {};
        newFlight.id = flights.length;
        newFlight.to = capitalize(prompt(`¿Cual será el destino del nuevo vuelo?`));
        newFlight.from = capitalize(prompt(`¿Desde donde saldrá el vuelo?`));
        newFlight.cost = Number(prompt(`¿Que precio tendrá el vuelo?`));
        newFlight.scale = window.confirm(`¿El vuelo tendrá alguna escala?\nAceptar = Si / Cancelar = No`);
        flights.push(newFlight);
        alert(`El vuelo con origen ${newFlight.to}, y destino ${newFlight.from} se ha guardado correctamente` );
        alert(`Actualmente hay ${flights.length} vuelos en la lista, se muestran a continuación por la consola:`);
        vuelosDisponibles();
        newFlight = true; 
    }  
    else if(newFlight === true && flights.length === 15){
        alert(`Se ha alcanzado el limite de vuelos introducidos en la lista, si desea introducir un nuevo vuelo primero deberá borrar otro`);
        newFlight = false;
    }
}
function deleteFlights(){
    deleteFlight = window.confirm(`¿Desea eliminar algun vuelo de la lista?`);
        if(deleteFlight === true && flights.length > 0){
            deleteFlight = prompt(`Indique el Id del vuelo que desea eliminar.`)
                if(deleteFlight === null){
                    console.log('Muchas Gracias, Adiós.');
                    deleteFlight = false;
                }
                else if(deleteFlight > flights.length && deleteFlight !==null){
                    alert('El id que has introducido es incorrecto. Si lo desea, pruebe otro id.')
                    deleteFlights()
                }
                
                else if(deleteFlight <= flights.length && deleteFlight !==null){
                    flights.splice(deleteFlight,1);
                    for(let i= deleteFlight; i<flights.length; i++){
                    flights[i].id = flights[i].id-1;
                    }
                    deleteFlight = true;
                    alert(`El vuelo se ha borrado correctamente. Actualmente hay ${flights.length} vuelos en la lista, se muestran a continuación por la consola:`)
                    vuelosDisponibles()
                }
            
        }
        else if(deleteFlight === true && flights.length=== 0 ){
            console.log(`No hay vuelos en la lista que eliminar.`)
            deleteFlight = false;
        }
       
}

function admin(){
    do{
        newFlights()
    }while (newFlight === true);
    do{
        deleteFlights()
    }while (deleteFlight === true);
    alert(`Muchas gracias, adioos.`)
}
////Funciones user
function buyFlights(){
    buyFlight = parseFloat(prompt("Indiquenos el id de vuelo si es tan amable, por favor."));
    for(let i=0; i<searchCostArr.length;i++){   
      if(buyFlight === searchCostArr[i].id  ){
        buyFlight = true;
        }
        else{
        buyFlight = false;
        }  
    }
    if(buyFlight = true){
        alert(`Ha comprado correctamente el vuelo, esperemos que disfrute de su viaje. Muchas gracias.`);
    }
    else if(buyFlight = false) {
        alert("Este Id no es valido, intentelo de nuevo con otro Id.");
        buyFlights();
    }    
}
function user(){
    
    searchCost = prompt(`Elige el filtro de busqueda de vuelo:\n-Precio mas alto (1)\n-Precio mas bajo(2)\n-Mismo precio(3)`);
    switch(searchCost){
        case '1':
            searchCost = prompt(`¿Por encima de que precio desea buscar el vuelo?`)
            searchCostArr = flights.filter(x=> x.cost > searchCost);
            
            for(let i =0; i<searchCostArr.length; i++){     
                if(searchCostArr[i].scale){ 
                    console.log(`El vuelo con id ${searchCostArr[i].id}, origen ${searchCostArr[i].to}, y destino ${searchCostArr[i].from} tiene un coste de ${searchCostArr[i].cost}€ y realiza una escala.`);
                }   
                else{  
                    console.log(`El vuelo con id ${searchCostArr[i].id}, origen ${searchCostArr[i].to}, y destino ${searchCostArr[i].from} tiene un coste de ${searchCostArr[i].cost}€ y no realiza ninguna escala.`);
                }
            }
        break;

        case '2':
            searchCost = prompt(`¿Por debajo de que precio desea buscar el vuelo?`)
            searchCostArr = flights.filter(x=> x.cost < searchCost);

            for(let i =0; i<searchCostArr.length; i++){     
                if(searchCostArr[i].scale){ 
                    console.log(`El vuelo con id ${searchCostArr[i].id}, origen ${searchCostArr[i].to}, y destino ${searchCostArr[i].from} tiene un coste de ${searchCostArr[i].cost}€ y realiza una escala.`);
                }   
                else{  
                    console.log(`El vuelo con id ${searchCostArr[i].id}, origen ${searchCostArr[i].to}, y destino ${searchCostArr[i].from} tiene un coste de ${searchCostArr[i].cost}€ y no realiza ninguna escala.`);
                }
            }
        break;

        case '3':
            searchCost = parseFloat(prompt(`¿Por que precio desea buscar el vuelo?`))
            searchCostArr = flights.filter(x=> x.cost === searchCost);
            if(searchCostArr.length === 0){
                alert(`No hay ningun vuelo por ese precio. Disculpe las molestias.`)    
            }

            else{
                for(let i =0; i<searchCostArr.length; i++){     
                    if(searchCostArr[i].scale){ 
                        console.log(`El vuelo con id ${searchCostArr[i].id}, origen ${searchCostArr[i].to}, y destino ${searchCostArr[i].from} tiene un coste de ${searchCostArr[i].cost}€ y realiza una escala.`);
                    }   
                    else{  
                        console.log(`El vuelo con id ${searchCostArr[i].id}, origen ${searchCostArr[i].to}, y destino ${searchCostArr[i].from} tiene un coste de ${searchCostArr[i].cost}€ y no realiza ninguna escala.`);
                        }
                }
            }
        break;
    }

    searchCost = confirm(`¿Desea buscar algun otro vuelo?`);
    switch(searchCost){
        case true:
            user()
        break;
        case false:
        break;
    }
    searchCost = confirm('¿Desea comprar algun vuelo de los que ha encontrado?');
    switch(searchCost){
        case true:
            buyFlights()
        break;
        case false:
            alert(`Muchas gracias, adioos!`);
        break;    
    }
}
//codigo
bienvenida();

const precios = flights.map(x=> x.cost);
const preciototal = suma(precios);
const preciomedio = (preciototal/precios.length).toFixed(1);
console.log(`El precio medio de los vuelos es ${preciomedio}€`)

const escalas = flights.map(x=> x.scale === true);
console.log(`El numero de vuelos con escalas es de ${escalas.length}`);

const lastfligths = flights.filter(x=> x.id > 5);
const lastfligths1 = lastfligths.map(x=> x.to);
console.log(`Los ultimos vuelos del día són: ${lastfligths1}`)



let userType = prompt(`Disculpe ${userName}, ¿Que tipo de usuario es? ¿Admin o User?`);
switch(userType.toLowerCase()){
    case 'admin':
    admin()
    break;
    case 'user':
    user()
    break;
    case null:
    alert(`Muchas gracias,adiooos!`);
    break;
}  

