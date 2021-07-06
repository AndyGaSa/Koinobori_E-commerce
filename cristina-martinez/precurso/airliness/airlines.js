

    let bienvenida;
    let costeTotal = 0;
    let costeMedio = 0;
    let escalasTotal = 0;
    const flights= [
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

       
     
        

        bienvenida = prompt("Hola, ¿Cómo se llama?");
        console.log(bienvenida + " aquí tiene todos los vuelos del día:");

        
        for(i=0; i<flights.length;i++){
        if(flights[i].scale == true){
        console.log( `El vuelo con origen: ${flights[i].to} y destino: ${flights[i].from} tiene un coste de ${flights[i].cost}€ y realiza escala.`);
        escalasTotal++;
        }else{
        console.log(`El vuelo con origen: ${flights[i].to} y destino: ${flights[i].from} tiene un coste de ${flights[i].cost}€ y realiza escala.`);
        }
        }
        costes();
        

     function costes(){

            let  costeTotal = flights[0].cost + flights[1].cost + flights[2].cost + flights[3].cost + flights[4].cost + flights[5].cost + flights[6].cost + flights[7].cost + flights[8].cost + flights[9].cost + flights[10].cost;
            let costeMedio = costeTotal/10;
           
             console.log(`El coste medio de los vuelos es de ${costeMedio}€`);
             escalas();
        }
    function escalas(){
        console.log(`Hay ${escalasTotal} vuelos que efectúan escala.`);
        ultimosDestinos();
    }


    function ultimosDestinos(){
    console.log("Los últimos 5 destinos son:");
     for(i= flights.length-5; i < flights.length; i++){
         console.log(`El vuelo con origen: ${flights[i].to} y destino: ${flights[i].from}`);
     }
    }
