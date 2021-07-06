//Skylab Airlines
//Programa una interfaz de usuario para una aerolínea (por consola...). Esta aerolínea dispondrá de 10 vuelos para el día de hoy, para empezar, estos vuelos deben estar declarados de manera global, cuando se llame a la función:
//● Se preguntará por el nombre de usuario y dará la bienvenida (via prompt).
//● El usuario visualizará todos los vuelos disponibles de una forma amigable : El vuelo con origen: Barcelona, y destino: Madrid tiene un coste de XXXX€ y no realiza ninguna escala.
//● A continuación, el usuario verá el coste medio de los vuelos.
//● También podrá ver cuántos vuelos efectúan escalas.
//● Sabiendo que los últimos 5 vuelos (los últimos 5 ID's) son los últimos del día, muestra al usuario sus destinos.
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

    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false } ];


//Funciones
function bienvenida(){
    let userName = prompt('Buenos dias, ¿Cual es su nombre?');
   // do{let userName = prompt('Buenos dias, ¿Cual es su nombre?');
    //}while (userName !== String());
    alert(`${userName}, Bienvenido/a a Skylab Airlines`);
    vuelosDisponibles();
}
function vuelosDisponibles(){
    for(let i=0; i<flights.length; i++){    
        if(flights[i].scale){ 
            console.log(`El vuelo con origen ${flights[i].to}, y destino : ${flights[i].from} tiene un coste de ${flights[i].cost}€ y realiza escala.`);
        }
        else{  
            console.log(`El vuelo con origen ${flights[i].to}, y destino : ${flights[i].from} tiene un coste de ${flights[i].cost}€ y no realiza ninguna escala.`);
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

