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
    let DestinosToString = JSON.stringify(UltimosVuelos);
    console.log('El precio medio de los vuelos es de ' + avg + '$');
    console.log(contEscalas + ' vuelos tienen escalas.');
    console.log('Los ultimos destinos del dia disponibles son: ' + DestinosToString);
    return Username;
}

const Username = airlines();