//
// Lluc Valério
//
// ********** VARIABLES **********
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

airlines();
// ********** FUNCIONS **********
function airlines (){
    // Benvinguda al usuari.
    let user = prompt("¿Cuál es tu nombre?","");
    alert (`Bienvenido/a ${user}`);
    // Llista tots els vols.
    console.log(`${user}, los vuelos disponibles son:`)
    console.log(`\n`)
    for (let i=0; i<flights.length; i++){
        console.log(` · El vuelo con origen: ${flights[i].from}, y destino: ${flights[i].to} tiene un coste de ${flights[i].cost}€ y ${getScale(i)}`);    
    }
    // Mitja aritmètica de tots els vols.
    console.log(`\n`);
    console.log(`El coste medio de todos los vuelos es: ${getArithMean().toFixed(2)}€`);
    // Nombre de vols amb escala.
    console.log(`\n`);
    console.log(`El número de vuelos que efectuan escala son: ${getNumScales()}`);
    // Últims 5 destins.
    console.log(`\n`);
    console.log(`Los últimos destinos del día son:`);
    let lastFive = flights.slice(-5);
    for (let i=0;i<lastFive.length;i++){
        console.log(lastFive[i].to)
}
    // Retorna un text en funció de si el vol té o no escala.
function getScale (iterator) {
        if (flights[iterator].scale){
            return 'SI realiza escala.';;
        } else {
            return 'NO realiza ninguna escala.';
        }
    }
}
// Retorna la mitjana aritmètica del cost de tots els vols de l'array.
function getArithMean () {
    let arithMean = 0;
    for (let i=0;i<flights.length;i++){
        arithMean = arithMean + flights[i].cost;
    }
    return (arithMean / flights.length);
}
// Retorna el nombre d'escales d'un array de vols.
function getNumScales () {
    let numScales=0;
    for (let i =0; i<flights.length; i++) {
        if (flights[i].scale) {
            numScales++;
        }
    }
    return numScales;
}
