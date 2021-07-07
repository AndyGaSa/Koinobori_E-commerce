window.onload = () => {
    let userInput = true;
    addActivo();
    login();

    if( user.nombre === null ) return;
    alert( `Saludos ${ user.nombre } te damos la bienvenida a los sistemas de SkyLab Airlines.` );
    do {
        console.clear();
        switch( userInput ) {
            case true:
                verVuelos();
                break;

            case 'vervuelos':
            case '01':
                verVuelos();
                break;

            case 'vercostemedio':
            case '02':
                verCosteMedio();
                break;

            case 'verescalas':
            case '03':
                verEscalas();
                break;

            case 'verultimosvuelos':
            case '04':
                verUltimosVuelos();
                break;

            case 'vertodo':
            case '05':
                verVuelos();
                console.log()
                verCosteMedio();
                console.log()
                verEscalas();
                console.log()
                verUltimosVuelos();
                break;
            
            case 'buscarvuelo':
                if( !user.admin ) buscarVuelo();
                userInput = true;
                break;

            case 'crearvuelo':
                if( user.admin ) crearVuelo();
                break;

            case '06':
                if( user.admin ) crearVuelo();
                if( !user.admin ) {
                    buscarVuelo();
                    userInput = true;
                }
                break;

            case 'eliminarvuelo':
            case '07':
                if( user.admin === true ) alert( eliminarVuelo() );
                userInput = true;
                break;

            case 'cambiarusuario':
            case '08':
                login();
                alert( `Saludos ${ user.nombre } te damos la bienvenida a los sistemas de SkyLab Airlines.` );
                userInput = true;
                break;

            default:
                console.error( 'Comando no reconocido' )
                alert( 'Comando no reconocido' )
                userInput = true;
                break;

        }

        if( userInput !== true ) alert( 'Operacion completada' )

        mostrarMenu( user )

        userInput = mostrarModal( user )

    } while ( !( userInput === null || userInput === 'salir' || userInput === '09' ) );
    console.clear();
    console.log( `Adios ${ user.nombre } asta pronto`)

}
const flights = [

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

const user = {
    nombre: '',
    admin: false
};

/**
 * Añade la propiedad activo a los vuelos con el estado true por omision
 * @param { * } 
 * @returns { * } 
 */
const addActivo = () => {
    flights.forEach( flight => flight.activo = true )

}

/**
 * Asigna al objeto user los valores facilitados por el usuario
 * @param { * }
 * @returns { * }
 */
const login = () => {
    user.nombre = adquisicionDatos( 'Dinos tu nombre porfavor' );
    user.admin = adquisicionDatos( 'Introduce si eres Admin o User' ) === 'admin' ? true : false;

}

/**
 * Se pide un input por parte del usuario, se compueba que solo haya caracteres de A a Z y se retorna un string o un null.
 * @param { String } mensaje
 * @param { String } tipo 
 * @returns { String || null }
 */
 const adquisicionDatos = ( mensaje, tipo ) => {
    let expresion;
    let input = prompt( mensaje );
    let evalChain = selectipo( tipo ); 

    expresion = new RegExp( evalChain )

    if( input === null ) return null
    if( expresion.test( input ) ) return input === null ? null : input.toLocaleLowerCase().replace(/\s+/g, '');
    alert( `Porfavor usa unicamente ${ tipo === 'dato' ? 'caracteres de Aa a Zz y numeros de 0 a 9' : tipo === 'num' ? 'digitos de 0 a 9' : 'caracteres de Aa a Zz' }.`  );
    return adquisicionDatos( mensaje, tipo );

}

/**
 * Muestra todos los vuelos almacenados en el array.
 * @param { Array } vuelosParaMostrar 
 * @returns { * }
 */
const verVuelos = ( vuelosParaMostrar = flights ) => {
    if( !user.admin ) {
        vuelosParaMostrar.forEach( flight => {
            if( flight.activo ) console.log( `El vuelo con id ${ flight.id } y origen en: ${ flight.from }, y destino: ${ flight.to } tiene un coste de ${ flight.cost }€ y ${ flight.scale ? 'realiza' : 'no realiza ninguna' } escala.` )
    
    })} else {
        console.table( vuelosParaMostrar )
        
    }

}

/**
 * Muestra el coste medio de los vuelos activos almacenados en flights.
 * @param { * }
 * @returns { * }
 */
const verCosteMedio = () => {
    let coste = 0;
    flights.forEach( flight => {
        if( flight.activo ) coste += flight.cost;

    })
    console.log( `El coste medio de los vuelos es: ${ ( coste / flights.length ).toFixed(2) } €` )

}

/**
 * Muestra la cantidad de escalas.
 * @param { * }
 * @returns { * }
 */
const verEscalas = () => {
    let escalas = 0;
    let activos = 0;

    flights.forEach( flight => {
        if( flight.scale && flight.activo ) escalas++;
        if( flight.activo ) activos++;

    })
    console.log( `De los ${ activos } vuelos programados para hoy ${ escalas } efectuaran una escala.`);

}

/**
 * Muestra los ultimos 5 vuelos.
 * @param { * }
 * @returns { * }
 */
const verUltimosVuelos = () => {
    let vuelosActivos = flights.filter( flight => flight.activo === true );
    let ultimosVuelos = vuelosActivos.slice( vuelosActivos.length -5, vuelosActivos.length);
    
    console.log( 'Estos son los ultimos 5 vuelos de hoy:' )
    ultimosVuelos.forEach( flight => console.log( `Vuelo de ${ flight.from } a ${ flight.to }.` ) )

}

/**
 * Si hay menos de 16 vuelos. Crea un nuevo objeto con los datos facilitados por el usuario y lo agrega al Array de flights
 * @param { * }
 * @returns { * }
 */
const crearVuelo = () => {
    let vuelosActivos = 0;
    let userInput = [ 'Porfavor introduce el nombre del origen.', 'Porfavor introduce el nombre del destino.', 'Porfavor introduce el coste del vuelo. ( Solo digitos )', 'El vueo tiene escalas? ( True | False )' ];

    class nuevoVuelo {
        constructor( [ from, to, cost, scale ] = data ) {
            this.id = flights.length;
            this.from = from;
            this.to = to;
            this.cost = Number.parseInt( cost );
            this.scale = JSON.parse( scale ) ;
            this.activo = true;
        }

    }

    flights.forEach( flight => flight.activo ? vuelosActivos++ : vuelosActivos )
    if( vuelosActivos > 15 ) {
        alert ( 'No pueden haber mas de 15 vuelos activos.' )

    } else {
        for( message in userInput ) {
            userInput[message] = adquisicionDatos( userInput[message], 'dato' )
        }
        if( userInput === null ) return;
        try {
            flights.push( new nuevoVuelo( userInput ) );

        } catch ( error ) {
            alert( 'Error en los datos introducidos' )
            crearVuelo();
            
        }

    }

}

/**
 * Busca el ID que introduce el usuario y marca el vuelo como inactivo
 * @param { Number } userInput
 * @returns { Number }
 */
const eliminarVuelo = () => {
    let userInput = '';
    let vueloParaMarcar = '';

    console.table( flights )
    userInput = Number.parseInt( adquisicionDatos( 'Introduzca el ID del vuelo a eliminar:', 'num' ) );
    if( userInput === null ) return 'Accion cancelada';
    vueloParaMarcar = flights.find( flight => flight.id === userInput );
    return vueloParaMarcar.activo === true ? ( vueloParaMarcar.activo = false, 'Vuelo eliminado correctamente' ) : 'No se a podido eliminar el vuelo';

}

/**
 * Busca los vuelos que cumplan con los parametros de busqueda que el usuario a introducido
 * @param { Array } buscarCoste [ operador ][ Coste ]
*/
const buscarVuelo = ( buscarCoste = '' ) => {
    let resultado = [];
    let operador = '';
    let userInput = 0;

    if( Number.isInteger( buscarCoste ) ) { 
        return buscarCoste;

    } else {
        if( Object.is( buscarCoste, NaN ) ) alert( 'Los parametros introducidos no son validos.' )
        buscarCoste = adquisicionDatos( 'Introduzca <, > o = y el precio a buscar:', 'dato' )
        if( buscarCoste === null ) return;
        operador = buscarCoste.substring(0,1);
        buscarCoste = buscarVuelo( parseInt( buscarCoste.substring(1) ) );
        
    }
    switch ( operador ) {
        case '>':
            resultado = flights.filter( flight => flight.cost < buscarCoste );
            break;
        
        case '<':
            resultado = flights.filter( flight => flight.cost > buscarCoste );
            break;

        case '=':
            resultado = flights.filter( flight => flight.cost === buscarCoste );
            break;
        
        default:
            alert( 'Parametros erroneos' );
            buscarVuelo();
            break;

    }
    
    if( resultado.length > 0 ) {
        verVuelos( resultado );
        userInput = adquisicionDatos( 'Si desea comprar un vuelo introduzca su ID, si no, pulse cancelar.', 'num' )
        if( user.admin === false && Number.isInteger( Number.parseInt( userInput ) ) ) {
            alert ( comprarVuelo( Number.parseInt( userInput ) ) )

        }
    
    } else {
        console.log( 'La busqueda no dio ningun resultado' )

    }

}

/**
 * Busca el id unico del vuelo y si coincide con un vuelo activo afectua la compra, muestra un mensaje.
 * @param { Number } id
 * @returns { String } 
 */
const comprarVuelo = ( id ) => {
    return  flights.find( flight => flight.id === id && flight.activo === true ) ? 'Gracias por su compra, vuelva pronto.' : 'El vuelo indicado no existe';
 
}

/**
 * Limpiamos la consola y mostramos el menu de nuevo
 * @param { Object } user
 */
const mostrarMenu = ( user ) => {
    let opciones = user.admin ? `06 - Crear vuelo
    07 - Eliminar vuelo` : `06 - Buscar vuelo`

    console.clear();
    console.log( `
    Porfavor ${ user.nombre } escriba una de las siguientes opciones:

    01 - Ver Vuelos
    02 - Ver Coste medio
    03 - Ver Escalas
    04 - Ver ultimos vuelos
    05 - Ver todo
    ${ opciones }
    08 - Cambiar Usuario
    09 - Salir
  ` )
}

/**
 * Muestra una ventana modal con las opciones del menu y retorna el input del usuario
 * @param { Object } user 
 * @returns { String }
 */
const mostrarModal = ( user ) => {
    let opciones = user.admin ? `06 - Crear vuelo
    07 - Eliminar vuelo` : `06 - Buscar vuelo`

    let userInput = adquisicionDatos( `
    Porfavor ${ user.nombre } escriba una de las siguientes opciones:

    01 - Ver Vuelos
    02 - Ver Coste medio
    03 - Ver Escalas
    04 - Ver ultimos vuelos
    05 - Ver todo
    ${ opciones }
    08 - Cambiar Usuario
    09 - Salir
`, 'dato' );

    return userInput
}

/**
 * Nos retorna un expreg dependiendo del tipo indicado
 * @param { String } tipo 
 * @returns { String }
 */
const selectipo = ( tipo ) => {
    let types = {
        'dato': /^[A-Za-zñáéíóú<>=,0-9\s]+$/g,
        'num': /^[0-9]+$/,
        'default': /^([A-Za-zñáéíóú]+[\s]*)+$/
    };
    return types[tipo] || types['default']
    
    
    
}