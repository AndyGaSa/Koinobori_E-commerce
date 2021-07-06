let flights = [

    {
        id: 00,
        to: 'Bilbao',
        from: 'Barcelona',
        cost: 1600,
        scale: false
    },

    {
        id: 01,
        to: 'New York',
        from: 'Barcelona',
        cost: 700,
        scale: false
    },

    {
        id: 02,
        to: 'Los Angeles',
        from: 'Madrid',
        cost: 1100,
        scale: true
    },

    {
        id: 03,
        to: 'Paris',
        from: 'Barcelona',
        cost: 210,
        scale: false
    },

    {
        id: 04,
        to: 'Roma',
        from: 'Barcelona',
        cost: 150,
        scale: false
    },

    {
        id: 05,
        to: 'London',
        from: 'Madrid',
        cost: 200,
        scale: false
    },

    {
        id: 06,
        to: 'Madrid',
        from: 'Barcelona',
        cost: 90,
        scale: false
    },

    {
        id: 07,
        to: 'Tokyo',
        from: 'Madrid',
        cost: 1500,
        scale: true
    },

    {
        id: 08,
        to: 'Shangai',
        from: 'Barcelona',
        cost: 800,
        scale: true
    },

    {
        id: 09,
        to: 'Sydney',
        from: 'Barcelona',
        cost: 150,
        scale: true
    },

    {
        id: 10,
        to: 'Tel-Aviv',
        from: 'Madrid',
        cost: 150,
        scale: false
    }
];

function admin() {

    let id = 10;
    let to;
    let from;
    let cost;
    let scale;
    let decisionUser = true;
    while (decisionUser != false) {
        decisionUser = confirm('Quieres añadir otro vuelo? Cancela si quieres parar');
        if (id < 16) {
            if (decisionUser != false) {
                id++;
                to = prompt('Introduce la destinacion del nuevo vuelo');
                from = prompt('Introduce el punto de salida del nuevo vuelo');
                cost = Number(prompt('Introduce el coste del nuevo vuelo'));
                scale = prompt('Introduce si el vuelo tiene escalas con True or False');
                flights.push({
                    id,
                    to,
                    from,
                    cost,
                    scale
                });
            }
        } else {
            alert('Has introducido el maximo de vuelos');
        }
    }
    let borrarVuelo = true;
    let idVuelo;
    while (borrarVuelo != false) {
        borrarVuelo = confirm('Quieres eliminar algun vuelo? ');
        if (borrarVuelo != false) {
            idVuelo = Number(prompt('Dime el id del vuelo que quieres borrar:'));
            flights = flights.filter(function (flights) {
                return flights.id !== idVuelo;
            });
        }
    }

};

function user() {
   
    let PrecioUser = Number(prompt('Dime el precio sobre el que quieres hacer tu consulta:'));
    let vuelosBaratos = [];
    let vuelosIguales = [];
    let vuelosCaros = [];

    for (i = 0; i < flights.length; i++) {
        if (PrecioUser < flights[i].cost) {
            vuelosCaros.push(flights[i]);
        }
        else if (PrecioUser === flights[i].cost) {
            vuelosIguales.push(flights[i]);
        }
        else  vuelosBaratos.push(flights[i]);
        
    }
    console.log('Los vuelos mas baratos son: ');
    for (i = 0; i < vuelosBaratos.length; i++) {
        console.log('El vuelo con origen ' + vuelosBaratos[i].from + ' y destino ' +
            vuelosBaratos[i].to + ' tiene un coste de ' + vuelosBaratos[i].cost + '$' );
    }
    console.log('Los vuelos mas caros son: ');
    for (i = 0; i < vuelosCaros.length; i++) {
        console.log('El vuelo con origen ' + vuelosCaros[i].from + ' y destino ' +
            vuelosCaros[i].to + ' tiene un coste de ' + vuelosCaros[i].cost + '$' );
    }
    console.log('Los vuelos iguales en precio son: ');
    for (i = 0; i < vuelosIguales.length; i++) {
        console.log('El vuelo con origen ' + vuelosIguales[i].from + ' y destino ' +
            vuelosIguales[i].to + ' tiene un coste de ' + vuelosIguales[i].cost + '$' );
    }
    alert('Gracias por su compra , vuelva pronto');

};

function checkadminoruser(Username) {
    let TypeOfUser;
    let AdminOrUser;

    AdminOrUser = prompt('Hola ' + Username + ' eres admin o user?');
    AdminOrUser = AdminOrUser.toLowerCase();
    while (TypeOfUser != 'user' && TypeOfUser != 'admin') {
        switch (AdminOrUser) {
            case 'admin':

                TypeOfUser = 'admin';
                admin();
                break;

            case 'user':
                TypeOfUser = 'user';
                user();
                break;

            default:
                AdminOrUser = prompt('No lo has escrito bien, eres admin o user?');
                break;
        }
    }
};

function airlines() {

    const Username = prompt('Bienvenido, introduce tu nombre de usuario:');

    let escala;
    let contEscalas = 0;
    let suma = 0;
    let UltimosVuelos = [];
    for (i = 0; i <= 10; i++) {

        if (flights[i].scale === false) {
            escala = 'no realiza ninguna escala.';
        } else {
            escala = 'realiza escalas.';
            contEscalas++;
        }
        console.log('El vuelo con origen ' + flights[i].from + ' y destino ' +
            flights[i].to + ' tiene un coste de ' + flights[i].cost + '$ y ' + escala);

        suma = suma + flights[i].cost;
        if (i >= 6 && i < 11) {
            UltimosVuelos.push(flights[i].to);
        }

    }
    avg = suma / 11;
    avg = avg.toFixed();
    let DestinosToString = JSON.stringify(UltimosVuelos);
    console.log('El precio medio de los vuelos es de ' + avg + '$');
    console.log(contEscalas + ' vuelos tienen escalas.');
    console.log('Los ultimos destinos del dia disponibles son: ' + DestinosToString);
    checkadminoruser(Username);
    


};

airlines();
