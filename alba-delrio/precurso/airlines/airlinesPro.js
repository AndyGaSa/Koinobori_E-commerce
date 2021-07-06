var flights = [

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


function searchAirlines(){
    let name=prompt("Please, enter your username:");
    alert(name + ", wellcome to the Skylab Airlines!");
    showFlights(flights);
    costeMedio(flights);
    escalasFlight(flights);
    ultimosDestinos(flights);
    userProfile();
}

function showFlights(){
    let result;
    console.log("********** VUELOS***********")
    for(let i =0; i<flights.length; i++){
        
        if(flights[i].scale){ 
            console.log("El vuelo "+ flights[i].id +" con origen " + flights[i].to +", y destino : "+ flights[i].from +" tiene un coste de "+ flights[i].cost
            +" € y realiza una escala.");
        }else{  
            console.log("El vuelo "+ flights[i].id +" con origen " + flights[i].to+", y destino : "+flights[i].from+" tiene un coste de "+flights[i].cost
    +" € y no realiza ninguna escala.");
        
        }
        
    }
    
}

function costeMedio(){
    let promedio;
    let totalCost=0;
    let totalFlights;
    for(let i=0;i<flights.length; i++){
        totalCost += Number(flights[i].cost);
        totalFlights = flights.length;
        promedio = (totalCost/totalFlights).toFixed(3);
    }
    console.log( "El coste medio de los vuelos es de " + promedio+ " euros.");
    
}

function escalasFlight(){
    let numEscalas=0;
    for(let i=0;i<flights.length; i++){
        if(flights[i].scale){
            numEscalas+=Number(flights[i].scale);
        }
    }
    console.log("El numero de vuelos con escala son " + numEscalas+".");
}

function ultimosDestinos(){
    console.log("Los ultimos destinos del día son: ");
    for(let i=0; i < flights.length; i++){
        if( flights[i].id >= 6 ){
            console.log(flights[i].to);
        }
    }
    
}

function userProfile(){
    let perfil =prompt("Por favor indique su perfil: ADMIN/USER").toUpperCase();
    switch(perfil){
        case "ADMIN":
            questionCreate();
            break;
        case "USER":

            classifyFlight();
            break;
        case null :
            alert("Muchas gracias, bye!");
            break;
        default: 
            userProfile();
            break;
    }
}

function questionCreate(){
    let response = prompt("Quieres crear un nuevo vuelo? s/n");
    switch(response){
        case "s":
            createFlight();
            break;

        case "n":
            questionDelete();
            break;

    
        default:
            questionCreate()
            break;
    }
            
}
function createFlight(){
    let f = {};
    f.id=flights.length;
    f.to=prompt("Por favor, introduzca el destino :");
    f.from=prompt("Por favor, introduzca la ciudad de salida :");
    f.cost= prompt("Por favor, introduzca el precio del vuelo:");
    f.scale = prompt("Por favor, indique si hay escala: s/n");
        if(f.scale!=="s"){ f.scale= false };
    if(flights.length === 15){
        alert("Lo Sentimos, solo puede haber un máximo de 15 vuelos");
        questionDelete();

    }else{
        flights.push(f);
        alert("El vuelo se ha creado correctamente.");
        showFlights(flights);
        questionCreate();
    }
}



function questionDelete(){
    let answer=prompt("Quieres eliminar un vuelo? s/n");
    switch(answer){
        case "s":
            let id = prompt("Introduzca el id del vuelo que quiere suprimir");
            deleteFlight(id);
            showFlights();
            questionDelete();
        break;
        
        case "n":
            alert("Muchas gracias, bye!");
            break;
        default:
            questionDelete();
            break;

    }
}

function deleteFlight(id){
    flights.splice(id,1);
    for(let i= id; i<flights.length; i++){
        flights[i].id = flights[i].id-1;
    }
    
}

function classifyFlight(){
    let lowerPrice=[];
    let equalPrice=[];
    let greaterPrice=[];
    var price = prompt("Indique la cantidad para realizar la busqueda de billetes:");
    if(price!=null){
        for(let i=0; i < flights.length; i++){
            if(flights[i].cost < price){
                lowerPrice.push(flights[i]);
                
            }else if(flights[i].cost == price){
                equalPrice.push(flights[i]);

            }else{
                
                greaterPrice.push(flights[i]);

            }
        }
        console.log(" Los vuelos con un coste menor a " + price+" euros, son:");
        for(let j=0; j<lowerPrice.length; j++){
                console.log("El vuelo "+ lowerPrice[j].id +" con origen " + lowerPrice[j].to +", y destino : "+ lowerPrice[j].from +" tiene un coste de "+ lowerPrice[j].cost
                +" € .");
            
        }
        console.log(" Los vuelos con un coste igual a " + price+" euros, son:");
        for(let j=0; j<equalPrice.length; j++){
                console.log("El vuelo "+ equalPrice[j].id +" con origen " + equalPrice[j].to +", y destino : "+ equalPrice[j].from +" tiene un coste de "+ equalPrice[j].cost
                +" € .");
            
        }
        console.log(" Los vuelos con un coste mayor a " + price+" euros, son:");
        for(let j=0; j<greaterPrice.length; j++){
                console.log("El vuelo "+ greaterPrice[j].id +" con origen " + greaterPrice[j].to +", y destino : "+ greaterPrice[j].from +" tiene un coste de "+ greaterPrice[j].cost
                +" € .");
        }
        buyFlight();
    }else{
        userProfile();
    }
         
}

function buyFlight(){
    var id= prompt("Por favor, indique el id de vuelo");
    
        if( flights[id]){
            alert("Gracias por su compra, vuelva pronto.");
        }else{
            alert("Id no valido, vuelva a intentarlo.");
            buyFlight();
        }
            
    
    
}



        

console.log(searchAirlines());