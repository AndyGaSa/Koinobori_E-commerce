window.onload = () => {
    seeData( JSON.parse( localStorage.getItem( 'ranking' ) ), 'El Ranking de jugadores es:' )

    while( confirm( 'Desea iniciar una partida?' ) ) {
        new bingo();
        seeData( JSON.parse( localStorage.getItem( 'ranking' ) ), 'El Ranking de jugadores es:' )

    }

    console.log( 'Gracias por jugar!' ) 

}

class bingo {
    constructor() {
        this._playerName = new String;
        this._playerPoints = 0;
        this._playerCard = new Array;
        this._innerCard = new Array;
        this._numbersInPlay = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99];
        this._startGame();

    }

    /**
     * @param { String } message
     */
    _setPlayerName = ( message ) => this._playerName = this._captureInput( message );

    /**
     * Asigna el carton creado a _PlayerCard
     * @param { Array } card Array con los numeros del carton 
     * @returns { * }
     */
    _setPlayerCard = ( card ) => this._playerCard = card;

    _setInnerCard = ( card ) => this._innerCard = [...card];

    /**
     * Se pide un input por parte del usuario, se compueba que solo haya caracteres de A a Z y se retorna un string o un null.
     * @param { String } message
     * @returns { String || null }
     */
    _captureInput = ( message ) => {
        let expresion = new RegExp ( /^([A-Za-zñáéíóú]+[\s]*)+$/ )
        let input = prompt( message );

        if( expresion.test( input ) ) return input === null ? input : input.toLocaleLowerCase();
        alert( 'Porfavor usa unicamente caracteres de Aa a Zz' )
        return this._captureInput( message );

    }

    /**
     * Generar un carton con numeros no repetidos de 1 a 99
     * @param { Number } lines Se recomiendan usar entre 1 y 5 lineas
     * @returns { Array } Un carton nuevo
     */
    _newCard = ( lines = 3 ) => {
        let cardNumbers = new Array;
        let avaliableNums = [...this._numbersInPlay];

        do{
            cardNumbers.push( Number.parseInt( avaliableNums.splice( this._getNumber( avaliableNums.length ), 1 ) ) ); 

        } while ( cardNumbers.length < lines * 5 )

        return cardNumbers;

    }

    /**
     * Genera un numero aleatorio del 0 al maxNumber indicado
     * @param { Number } maxNumber 
     * @returns { Number } Numero de 1 a 99
     */
    _getNumber = maxNumber => Math.floor( Math.random() * ( maxNumber - 0 ) ) + 0


    _calcPoints = () => this._playerPoints = this._numbersInPlay.length;

    /**
     * Marca con una X el numero si coincide con algunos del array
     * @param { Number } drawNum 
     * @param { Array } playerCard
     * @returns { Array } Tarjeta marcada
     */
    _markCoincide = ( drawNum, playerCard ) => {
        playerCard[ playerCard.findIndex( number => number === drawNum ) ] = 'X'
        return playerCard

    }

    /**
     * Busca el drawNum en cada Array que compone playerCard y lo elimina, si la array esta vacia tambien la elimina
     * @param { Number } drawNum 
     * @param { Array } playerCard
     * @returns { Array } devuelve la array modificada
     */
    _findAndSplice = ( drawNum, playerCard ) => {
        playerCard.forEach( ( arr, outerIndex ) => {
            let innerIndex = arr.findIndex( number => number === drawNum );
            
            if( innerIndex !== -1 ) arr.splice( innerIndex, 1 );
            if( arr.length === 0 ) {
                alert( 'LÍNEA!' );
                playerCard.splice( outerIndex, 1 )

            }
            
        } )
        return playerCard

    }

    /**
     * Se obtiene un nuevo numero y se opera en la card que se visualiza al jugador y en la card que controla el juego
     * @returns { Number } drawNum
     */
    _newTurn = () => {
        let drawNum = Number.parseInt( this._numbersInPlay.splice( this._getNumber( this._numbersInPlay.length ), 1 ) );
        
        console.clear();

        this._setPlayerCard( this._markCoincide( drawNum , this._playerCard ) );

        this._setInnerCard( this._findAndSplice( drawNum, this._innerCard ) );

        return drawNum;

    }

    _startGame = () => {
        console.clear();
        this._setPlayerName( 'Como desea llamarse?' );

        do{ 
            console.clear();
            this._setPlayerCard( this._newCard() );
            seeData( this._playerCard.chunk(5) );

        } while( !confirm( 'Desea este carton?' ) )

        this._setInnerCard( this._playerCard.chunk( 5 ) );

        do{ 
            let drawNum = this._newTurn()
            seeData( this._playerCard.chunk( 5 ), `Salio el numero: ${ drawNum }!` )

        } while ( this._innerCard.length > 0 ? confirm( 'Desea jugar otro turno?' ) : false )

        if(this._innerCard.length === 0) this._endGame();
        
    }

    _endGame = () => {
        let ranking =  JSON.parse( localStorage.getItem( 'ranking' ) );

        this._calcPoints();
        
        console.clear();
        console.log( `Se han logrado: ${ this._playerPoints } puntos.` )
        alert( 'Bingo!' );

        ranking.unshift( { name: this._playerName, score: this._playerPoints } );
        ranking.pop();
        localStorage.setItem( 'ranking', JSON.stringify( ranking.sort( ( a, b ) => b.score - a.score ) ) )

    }

}

(()=>{ 
    /**
     * Define el metodo chunk para el Objeto Array
     * Este divide el Array por el n numero de veces indicado en el parametor de entrada
     * ? - https://stackoverflow.com/a/11638192
     */
    Object.defineProperty( Array.prototype, 'chunk', { value: function( n ) { return !this.length ? [] : [ this.slice( 0, n ) ].concat( this.slice( n ).chunk( n ) );}})

    /**
     * Mostrar carton/ranking en la consola
     * @param { Array } data 
     * @param { String } message 
     */
    seeData = ( data, message ) => {
        console.clear();
        if( message ) console.log( message );
        console.table( data );
    
    }

    // Si ranking no existe en localStorage lo creamos
    if( !localStorage.getItem( 'ranking' ) ) localStorage.setItem( 'ranking', JSON.stringify( [
        {
            name: 'Fearne Carroll',
            score: 0
        },
        {
            name: 'Floyd Leblanc',
            score: 0
        },
        {
            name: 'Norma Tucker',
            score: 0
        },
        {
            name: 'Ishaq Guzman',
            score: 0
        },
        {
            name: 'Jaydon Swan',
            score: 0
        },
        {
            name: 'Fergus Beck',
            score: 0
        },
        {
            name: 'Naeem Carney',
            score: 0
        },
        {
            name: 'Yu Coombes',
            score: 0
        },
        {
            name: 'Hamza Bean',
            score: 0
        },
        {
            name: 'Akash Kemp',
            score: 0
        }
    ] ) );
})();