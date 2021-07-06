
flights = [
  { id: 00, to: "Bilbao", from: "Barcelona", cost: 1600, scale: false },
  { id: 01, to: "New York", from: "Barcelona", cost: 700, scale: false },
  { id: 02, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
  { id: 03, to: "Paris", from: "Barcelona", cost: 210, scale: false },
  { id: 04, to: "Roma", from: "Barcelona", cost: 150, scale: false },
  { id: 05, to: "London", from: "Madrid", cost: 200, scale: false },
  { id: 06, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
  { id: 07, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
  { id: 08, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
  { id: 09, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
  { id: 10, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

let identificacion = prompt(`porfavor introduzca su nombre`);
 alert(`Encantado de conocerle ${identificacion} bienvenido a skylab Airlines estos son nuestros vuelos disponibles para hoy`);
{
  for (let i of flights) { //saludo y presentacion de vuelos.
      i+=1;
        if (i===true) { 
          escalasVuelos = `el vuelo hace escalas`;
         } else {
          escalasVuelos = `el vuelo no hace escalas`;
         }
         console.log(`el vuelo destino ${i.to} procedente de ${i.from} tiene un valor de ${i.cost}€ y ${escalasVuelos}`);
    }
       function mediaCosteVuelos() { //coste medio vuelos.
           let mediaCoste = 0;
           for (let i of flights){
               i+=1;
              mediaCoste = mediaCoste + i.cost; 
           }
           
           mediaCoste= mediaCoste / (mediaCoste-1);
           return mediaCoste;
        }
         console.log(`el coste medio de los vuelos de hoy es de: ${mediaCosteVuelos()}€`);
    
         debugger;
      function ultimos5()  { //ultimos vuelos del dia
          for (let i of flights) {
            i+=1;
              if (i>=6){
              console.log(`los ultimos cinco vuelos disponibles para hoy son: ${i.from} destino a ${i.to}`);
             
          }
         
         }
  
      }    
      ultimos5();
    }  