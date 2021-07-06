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


    let usuario = prompt('Introduce tu Usuario:');
    alert('Bienvenido ' + usuario);

function vuelos(){

        for (let i = 0; i <flights.length ; i++){
            if (flights[i].scale === true ){
            console.log(' El vuelo con origen ' + flights[i].from + ', y destino ' +flights[i].to + ' tiene un coste de ' + flights[i].cost + '€ y realiza escala en otro aeropuerto.')
            }
    
            else if (flights[i].scale === false){
            console.log(' El vuelo con origen ' + flights[i].from + ', y destino ' +flights[i].to + ' tiene un coste de ' + flights[i].cost + '€ y no realiza ninguna escala.')

            }  
        }
 }

console.log(vuelos())

  function costeMedio(){
        let sumaCost = 0
    for(let i = 0; i <flights.length ; i++){
        sumaCost += flights[i].cost;
        

    }
    return (sumaCost / flights.length).toFixed(2);

 }
console.log('La media de precio de los vuelos de hoy es ' + costeMedio()+ '€')


var vuelosConEscala = []
function vuelosEscala(){
    for(let i = 0; i <flights.length ; i++){
       if(flights[i].scale == true)
       vuelosConEscala.push(flights[i].scale);

        }
        return vuelosConEscala;
    }
 console.log('El numero de vuelos con escala hoy son: ' + vuelosEscala().length); 
        
    
 function ultimosVuelos(){
    var ultimos5 = []
    for (let i = flights.length - 5 ; i < flights.length; i++){
         ultimos5.push(flights[i].to);

    }
return  ultimos5;

}
console.log ('Los últimos vuelos de hoy tienen como destino: ' + ultimosVuelos());