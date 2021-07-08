//Vuelos dados por el ejercicio
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

    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }];


//Creo una función
function welcome() {
    //Defino un prompt para preguntar por el nombre de usuario
    const nombreUsuario = prompt('Por favor, introduce tu nombre de usuario');
    //Defino un console log para dar la bienvenida con la variable creada con el nombre de usuario
    console.log('¡Nos alegramos de verte de nuevo ' + nombreUsuario + '! Estos son los vuelos para hoy: ');
    //Defino un forEach para poder mostrar por consola la información de los vuelos y un if que me separe los vuelos que hacen escala de los que no
    flights.forEach((elem) => {
        if (elem.scale === true) {
            console.log('El vuelo con origen: ' + elem.to + ' y destino: ' + elem.from + ' tiene un coste de ' + elem.cost + '€ y realiza una escala.');
        } else {
            console.log('El vuelo con origen: ' + elem.to + ' y destino: ' + elem.from + ' tiene un coste de ' + elem.cost + '€ y no realiza ninguna escala.');
        }
    })
    //Defino un bucle para poder sumar todos los elementos de cost y luego divirlos para calcular la media
    let suma = 0;
    for (let i = 0; i < flights.length; i++) {
        suma += flights[i].cost;
    }
    console.log('El coste medio de los vuelos es: ' + (suma / flights.length).toFixed(2) + '€');
    //Defino un filter para poder filtrar el número de vuelos que hacen escala de los que no
    let vuelosConEscala = flights.filter(vuelo => vuelo.scale === true);
    console.log('Un total de ' + (vuelosConEscala.length) + ' vuelos, realizan escala.');
    //Defino otro for para mostrar por consola los nombres de los destinos de los últimos 5 vuelos
    console.log('Los últimos vuelos del día, tienen como destino: ');
    for (let i = 0; i < flights.length; i++) {
        if (flights[i].id > 5) {
            console.log(flights[i].to);
        }
    }
}
//Llamo a la función para que se ejecute el programa
welcome();