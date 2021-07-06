window.onload = () => {
    let nombre = adquisicionDatos( 'Dinos tu nombre porfavor' );
    let userInput = 1;

    if( nombre === null ) return;
    alert( `Saludos ${ nombre } te damos la bienvenida a los sistemas de SkyLab Airlines.` );
    do {
        console.clear();
        switch( userInput ) {
            case 1:
                verVuelos( flights );
                break;

            case 'vervuelos':
            case '01':
                verVuelos( flights );
                break;

            case 'vercostemedio':
            case '02':
                verCosteMedio( flights );
                break;

            case 'verescalas':
            case '03':
                verEscalas( flights );
                break;

            case 'verultimosvuelos':
            case '04':
                verUltimosVuelos( flights );
                break;

            case 'vertodo':
            case '05':
                verVuelos( flights );
                console.log()
                verCosteMedio( flights );
                console.log()
                verEscalas( flights );
                console.log()
                verUltimosVuelos( flights );
                break;
            
            default:
                console.error( 'Comando no reconocido' )
            break;

        }
        userInput = adquisicionDatos( `
            Porfavor ${ nombre } escriba una de las siguientes opciones o su numero:

            01 - Ver Vuelos
            02 - Ver Coste medio
            03 - Ver Escalas
            04 - Ver ultimos vuelos
            05 - Ver todo
            06 - Salir
        `, 'dato' );

    } while ( !( userInput === null || userInput === 'salir' || userInput === '06' ) );
    console.clear();
    console.log( `Adios ${ nombre } hasta pronto`)

}
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

/**
 * Se pide un input por parte del usuario, se compueba que solo haya caracteres de A a Z y se retorna un string o un null.
 * @param { String } mensaje
 * @param { String } tipo 
 * @returns { String || null }
 */
 adquisicionDatos = ( mensaje, tipo ) => {
    let expresion = new RegExp ( tipo === 'dato' ? /^[A-Za-zñáéíóú<>=,0-9\s]+$/g : /^([A-Za-zñáéíóú]+[\s]*)+$/);
    let input = prompt( mensaje );

    if( input !== null ) input = input.replace(/\s+/g, '');
    if( expresion.test( input ) ) return input === null ? input : input.toLocaleLowerCase();
    alert( `Porfavor usa unicamente caracteres de Aa a Zz ${ tipo === 'dato' ? 'y numeros de 0 a 9' : '' }.`  );
    return adquisicionDatos( mensaje, tipo );

}

/**
 * Muestra todos los vuelos almacenados en el array.
 * @param { Array } flights
 * @returns { * }
 */
verVuelos = ( flights ) => {
    flights.forEach( flight => {
        console.log( `El vuelo con origen: ${ flight.from }, y destino: ${ flight.to } tiene un coste de ${ flight.cost }€ y ${ flight.scale ? 'realiza' : 'no realiza ninguna' } escala.` )

    })

}

/**
 * Muestra el coste medio de los vuelos almacenados en el array.
 * @param { Array } flights
 * @returns { * }
 */
verCosteMedio = ( flights ) => {
    let coste = 0;
    flights.forEach( flight => {
        coste += flight.cost;

    })
    console.log( `El coste medio de los vuelos es: ${ ( coste / flights.length ).toFixed(2) } €` )

}

/**
 * Muestra la cantidad de escalas.
 * @param { Array } flights
 * @returns { * }
 */
verEscalas = ( flights ) => {
    let escalas = 0;

    flights.forEach( flight => {
        if( flight.scale ) escalas++;
    })
    console.log( `De los ${ flights.length } vuelos programados para hoy ${ escalas } efectuaran una escala.`)

}

/**
 * Muestra los ultimos 5 vuelos.
 * @param { Array } flights
 * @returns { * }
 */
verUltimosVuelos = ( flights ) => {
    let UltimosVuelos = flights.slice( flights.length - 5, flights.length)
    
    console.log( 'Estos son los ultimos 5 vuelos de hoy:' )
    UltimosVuelos.forEach( flight => {
        console.log( `Vuelo de ${ flight.from } a ${ flight.to }.`)

    })
}