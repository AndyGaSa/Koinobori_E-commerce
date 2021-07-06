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
    

    function bienvenida(){
    let mensajeAdmin;
    let mensajeUser;
    mensajeAdmin = confirm('¿Es ADMIN?');{
        if(mensajeAdmin){
            admin();
        }else{
            mensajeUser = confirm('¿Es USER?');{
                if(mensajeUser){
                    user();
                    
                }else{
                    alert('¡Hasta otra!')
                }
                
            }
        }
        }
    }

    
    function admin(){
        let preguntaAñadir;
        let preguntaEliminar;
        preguntaAñadir= confirm('¿Quiere añadir vuelos?');{
            if(preguntaAñadir){
                añadirVuelos();
            }else{
                preguntaEliminar = confirm('Quiere eliminar vuelos?');{
                    if(preguntaEliminar){
                        eliminarVuelos();
                    }else{
                        alert('¡Hasta otra!')
                    }
                }
            }
        }
        }

        function añadirVuelos(){
            let preguntarAñadirMas;
            let vuelo ={}
            vuelo.id = flights.length;
            vuelo.to = prompt('Añada destino');
            vuelo.from = prompt('Añada la salida');
            vuelo.cost = prompt('Añada precio');
            vuelo.scale = prompt('Confirme si tiene escala: true/false');
                 flights.push(vuelo);

                 if(flights.length === 15){
                    alert('Ya ha añadido hasta 15 vueltas.¡Hasta otra!');
                    resultadoVuelos();
                 }else{
                    preguntarAñadirMas = confirm('¿Quiere añadir más vuelos?');{
                        if(preguntarAñadirMas){
                            añadirVuelos();
                        }else{
                            preguntaEliminar = confirm('Quiere eliminar vuelos?');{
                                if(preguntaEliminar){
                                    eliminarVuelos();
                                }else{
                                    alert('¡Hasta otra!');
                                    resultadoVuelos();
                                }
                        }
                    }
                 }
                }     
         }

        
         
       function eliminarVuelos(){
            let eliminar;
            let volverEliminar;
           
            eliminar = prompt('¿Qué vuelo desea eliminar a través de ID? ');{
                flights.splice(eliminar, 1);

                volverEliminar = confirm('¿Quiere eliminar otro vuelo?');{
                    if(volverEliminar){
                        eliminarVuelos();
                    }else{
                        alert('¡Hasta otra!');
                        resultadoVuelos();
                    }

                }                
                }
         }            

        function resultadoVuelos(){
            for(i=0; i<flights.length;i++){
                if(flights[i].scale == true){
                console.log( `El vuelo con origen: ${flights[i].to}  y destino: ${flights[i].from}  tiene un coste de  ${flights[i].cost}€ y realiza escala.`);
                }else{
                console.log(`El vuelo con origen: ${flights[i].to} y destino: ${flights[i].from} tiene un coste de ${flights[i].cost}€ y no realiza ninguna escala.`);
                }
                }
        }
        
        function user(){
            let coste;
            coste = prompt('Por favor, introduce una cantidad');{

            console.log("PRECIOS MÁS ALTOS AL COSTE INDICADO:");
            for(i=0; i<flights.length;i++){              
                if(coste < flights[i].cost){                     
                    console.log(`El vuelo con origen: ${flights[i].to} y destino: ${flights[i].from} tiene un coste de ${flights[i].cost}`);
                }
            }
            console.log('PRECIOS IGUALES AL COSTE INDICADO:');
            for(i=0; i<flights.length;i++){ 
                if(coste === flights[i].cost){                  
                    console.log(`El vuelo con origen: ${flights[i].to} y destino: ${flights[i].from} tiene un coste de ${flights[i].cost}`);
                }
            }
                
            console.log("PRECIOS MÁS BAJOS AL COSTE INDICADO:");
            for(i=0; i<flights.length;i++){
                if(coste> flights[i].cost){  
                    console.log(`El vuelo con origen: ${flights[i].to} y destino: ${flights[i].from} tiene un coste de ${flights[i].cost}`);
                }
            }
            let compra;
            compra = prompt('¿Qué vuelo desea comprar?');{

                alert("Gracias por su compra, vuelva pronto.");

            }
            } 
        }          
        
        
        bienvenida();
    