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


    let usuario = prompt('Introduce tu Usuario:');
    alert('Bienvenido ' + usuario);

function vuelos(){

        for (let i in flights){
            if (flights[i].scale === true ){
            console.log(' El vuelo con origen ' + flights[i].from + ', y destino ' +flights[i].to + ' tiene un coste de ' + flights[i].cost + '€ y realiza escala en otro aeropuerto.')
            }
    
            else if (flights[i].scale === false){
            console.log(' El vuelo con origen ' + flights[i].from + ', y destino ' +flights[i].to + ' tiene un coste de ' + flights[i].cost + '€ y no realiza ninguna escala.')

            }  
        }
 }

vuelos()

  function costeMedio(){
        let sumaCost = 0
    for(let i in flights){
        sumaCost += flights[i].cost;
        

    }
    return (sumaCost / flights.length).toFixed(2);

 }
console.log('La media de precio de los vuelos de hoy es ' + costeMedio()+ '€')


let vuelosConEscala = []
function vuelosEscala(){
    for(let i in flights){
       if(flights[i].scale ){
       vuelosConEscala.push(flights[i].scale);
       }
        }
        return vuelosConEscala;
    }
 console.log('El numero de vuelos con escala hoy son: ' + vuelosEscala().length); 
        
    
 function ultimosVuelos(){
    let ultimos5 = []
    for (let i = flights.length - 5 ; i < flights.length; i++){
         ultimos5.push(flights[i].to);

    }
return  ultimos5;

}
console.log ('Los últimos vuelos de hoy tienen como destino: ' + ultimosVuelos());

function adUs() {

let adminUser = prompt('ADMIN/USER');
adminUser = adminUser.toUpperCase();

if(adminUser == 'ADMIN'){
    let adminOp = prompt('ELIMINAR o CREAR vuelo?');
    adminOp = adminOp.toUpperCase();
    
    
        if(adminOp == 'ELIMINAR'){
            console.log(flights)
            let idVueloEliminar = prompt('¿Qué vuelo deséa eliminar? Introduzca el ID de vuelo:')
            for (let i = 0 ; i < flights.length ;i++){
                if (idVueloEliminar == flights[i].id){
                    delete flights[i];
                    console.log(flights);
                }
                
            }
                               
        }
        else if(adminOp == 'CREAR'){
            

            {
            function crearVuelo(){
            let nuevoId = flights.length;
            let nuevoTo = prompt('To:');
            let nuevoFrom = prompt('From:');
            let nuevoCost = Number(prompt('Cost:'));
            let nuevoScale = confirm('Scale:');

            flights.push({id: nuevoId, to: nuevoTo, from: nuevoFrom, cost: nuevoCost, scale: nuevoScale})
            return flights
            
            }
            console.log (crearVuelo())
            }

        }
        else {
            alert('Indique ELIMINAR o CREAR ')
            adUs()
        }
    
}
else if(adminUser === 'USER'){

    let precioVuelo = Number(prompt('Indique el precio deseado para conocer los vuelos con un precio superior, inferior o igual:'));
        console.log('Los vuelos más baratos o iguales que ' + precioVuelo +'€ son:')
        for (let i in flights){
            if (flights[i].cost <= precioVuelo){
                console.log(' El vuelo con origen ' + flights[i].from + ', y destino ' +flights[i].to + 'tiene un precio de ' + flights[i].cost + ' €')
            }
        }
        console.log('Los vuelos más caros que ' + precioVuelo +'€ son:')
        for (let i in flights){
            if (flights[i].cost > precioVuelo){
                console.log(' El vuelo con origen ' + flights[i].from + ', y destino ' +flights[i].to + 'tiene un precio de ' + flights[i].cost + ' €')
            }
        }

function comprarVuelo(){
            let id = Number(prompt('¿Qué vuelo desea comprar? Idique el ID correspondiente:'))
            if (flights[id] ) {
                alert('Gracias por su compra, vuelva pronto.')
            }else{
                alert('Indique ID valido.')
                comprarVuelo()
            }
        }
comprarVuelo()
 }
 else {
     alert('Indique ADMIN/USER ')
     adUs()
 }
}
adUs()
