//La versión pro (y sus comentarios) empiezan en la línea 61
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

    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }];


function scale() {
    flights.forEach((elem) => {
        if (elem.scale === true) {
            console.log('ID: ' + elem.id + '. El vuelo con origen: ' + elem.to + ' y destino: ' + elem.from + ' tiene un coste de ' + elem.cost + '€ y realiza una escala.');
        } else {
            console.log('ID: ' + elem.id + '. El vuelo con origen: ' + elem.to + ' y destino: ' + elem.from + ' tiene un coste de ' + elem.cost + '€ y no realiza ninguna escala.');
        }
    })
}


function welcome() {

    const nombreUsuario = prompt('Por favor, introduce tu nombre de usuario').toUpperCase();

    console.log('¡Nos alegramos de verte de nuevo ' + nombreUsuario + '! Estos son los vuelos para hoy: ');

    scale();

    let suma = 0;
    for (let i = 0; i < flights.length; i++) {
        suma += flights[i].cost;
    }
    console.log('El coste medio de los vuelos es: ' + (suma / flights.length).toFixed(2) + '€');

    let vuelosConEscala = flights.filter(vuelo => vuelo.scale === true);
    console.log('Un total de ' + (vuelosConEscala.length) + ' vuelos, realizan escala.');

    console.log('Los últimos vuelos del día, tienen como destino: ');
    for (let i = flights.length - 5; i < flights.length; i++) {
        console.log(flights[i].to);
    }

    //Aquí empieza la versión "pro" del ejercicio
    //Primero hago un condicional de que si el nombre de usuario introducido es admin, el programa se comporte en modo admin. Si no, en modo user
    if (nombreUsuario === 'ADMIN') {
        console.log('Hola. Eres ADMIN, así que puedes añadir hasta 15 vuelos y eliminar vuelos mediante su ID.');
        admin();
    } else {
        user();
    }

    //Función si eres admin.
    function admin() {
        //Primero creo un condicional para ver que quiere hacer el admin, si añadir vuelos o eliminarlos
        let election = prompt('Escribe "AÑADIR", para crear un vuelo o "ELIMINAR" para eliminarlo.').toUpperCase();
        if (election === 'AÑADIR') {
            addFlight()
        } else if (election === 'ELIMINAR') {
            deleteFlight()
        } else {
            console.log('Has introducido un valor no válido o has cancelado. ¡Hasta otra!');
        }
        //Función para añadir vuelos. Creo una función donde le voy pidiendo a través de un objeto y el prompt los nuevos datos del vuelo en el caso de que quiera añadir
        function addFlight() {

            let nuevoVuelo = {

                id: resultid = parseFloat(prompt('Introduce el ID para crear un nuevo vuelo.')),
                to: resultto = prompt('Introduce el destino.'),
                from: resultfrom = prompt('Introduce el origen.'),
                cost: resultcost = parseFloat(prompt('Introduce el precio en números.')),
                scale: resultscale = confirm('¿El vuelo hace escala?')

            }
            //Defino un condicional para saber si el vuelo hace escala o no para convertirlo a boolean
            if (resultscale === true) {
                nuevoVuelo.scale = true;
            } else if (resultscale === false) {
                nuevoVuelo.scale = false;
            } else {
                console.log('Error. Prueba otra vez.');
            }
            //Defino otro condicional para que el admin no pueda crear más de 15 vuelos
            if (flights.length >= 15) {
                alert('No puedes crear más vuelos. El máximo es 15.');
            } else {
                flights.push(nuevoVuelo);
                scale();
            }

            admin()

        }
        //Función para eliminar vuelos. Creo la función con un splice en el que dependiendo del número que ponga por prompt, se eliminará ese index del array.
        function deleteFlight() {

            let vueloEliminado = parseFloat(prompt('Introduce el ID del vuelo para eliminarlo.'));

            flights.splice(vueloEliminado, 1)

            scale();

            admin()
        }

    }

    //Función si eres user
    function user() {
        //Primero le pregunto a partir de que precio quiere filtrar
        let precio = parseFloat(prompt('Introduce un precio para mostrar resultados.'));
        //Creo 3 bucles para que iteren por el array y vaya comparando los cost con lo que el cliente eligió y finalmente lo pase por consola. 
        console.log('Vuelos con precio SUPERIOR:')
        for (let i = 0; i < flights.length; i++) {
            if (precio < flights[i].cost) {
                console.log('ID: ' + flights[i].id + '. El vuelo con origen: ' + flights[i].to + ' y destino: ' + flights[i].from + ' tiene un coste de ' + flights[i].cost + '€.');
            }
        }
        console.log('Vuelos con precio IGUAL:')
        for (let i = 0; i < flights.length; i++) {
            if (precio === flights[i].cost) {
                console.log('ID: ' + flights[i].id + '. El vuelo con origen: ' + flights[i].to + ' y destino: ' + flights[i].from + ' tiene un coste de ' + flights[i].cost + '€.');
            }
        }
        console.log('Vuelos con precio INFERIOR:')
        for (let i = 0; i < flights.length; i++) {
            if (precio > flights[i].cost) {
                console.log('ID: ' + flights[i].id + '. El vuelo con origen: ' + flights[i].to + ' y destino: ' + flights[i].from + ' tiene un coste de ' + flights[i].cost + '€.');
            }
        }
        //Una vez pasado por consola, le pregunto que ID quiere comprar.
        let compra = prompt('Indica el ID del vuelo que quieres comprar.');
        console.log('Su vuelo con ID: ' + compra + ' se ha reservado. Gracias por su compra, vuelva pronto.')
    }
}
//Llamo a la función principal para que se ejecute el programa
welcome();

//¡¡¡Gracias por corregirme!!! :) Buen día