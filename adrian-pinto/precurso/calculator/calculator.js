window.onload = () => {
    alert( `
        ---= Introduce =---

    Un numero para obtener:
     · La raiz Cuadrada.

    Dos numero para obtener:
     · La +, la -, la * y la /.

    Cancelar para salir.
    ` )

    do {
        dataArr.push( adquisicionDatos( prompt('Introduce un numero') ) );
        
    }while( dataArr[dataArr.length-1] !== null && dataArr.length < 2 );

    result = calcularDatos( dataArr, operators );

    mostrarResultados( result, operators );

}
let dataArr = result = new Array;
let operators = [ `+`, `-`, `*`, `/` ];
  
/**
 * Se pide un input por parte del usuario y se retorna un numero o un null
 * @param { String || null } userInput 
 * @returns { Number || null }
 */
const adquisicionDatos = ( userInput ) => {
    return userInput === null ? userInput : Number.isSafeInteger( Number.parseFloat( userInput ) ) ? Number.parseFloat( userInput ) : adquisicionDatos( prompt( 'Dato incorrecto, porfavor introduce un numero.' ) ) 

}

/**
 * Dependiendo de la posicion de null realiza la raiz cuadrada, el grupo de operaciones o finaliza el programa
 * @param { Array } datos
 * @param { Array } operators 
 * @returns { Array } 
 */
const calcularDatos = ( datos, operators ) => {
    let calcArr = new Array;

    switch( datos.indexOf( null ) ) {
        case 0:
            console.info( 'Operación cancelada por el Usuario' );
            break;

        case 1:
            calcArr.push( Math.sqrt( datos[0] ) );
            break;

        default:
            operators.forEach( operator => {
                calcArr.push( imNotEval( datos[0] + operator + datos[1] ) );

            });
            break;
    
    }
    return calcArr;

}

/**
 * Muestra por consola el resultado de cada operador
 * @param { Array } datos 
 * @param { Array } operators
 */
const mostrarResultados = ( datos, operators ) => {
    if( datos[1] !== undefined ) {
        operators.forEach( operator => {
            console.log( `El resultado de ${ operator } es: ${ Number.isInteger( datos[ operators.indexOf( operator ) ] ) ? datos[ operators.indexOf( operator ) ] : datos[ operators.indexOf( operator ) ].toFixed( 3 ) }`)
        
        })

    } else if( datos[0] !== undefined ) {
        console.log( `El resultado de la raiz cuadrada es: ${ datos[0].toPrecision(4) }`)
    
    }

}

/**
 * Resuelve la operación desde un string
 * @param { String } stringOp 
 * @returns { Number } 
 */
const imNotEval = ( stringOp ) => {
    return new Function( 'return ' + stringOp )();

}