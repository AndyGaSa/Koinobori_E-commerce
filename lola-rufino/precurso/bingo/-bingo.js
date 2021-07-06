//Defino una variable con un ranking ficticio
let rank = [
    { nombre: 'Maki', puntuacion: 58 },
    { nombre: 'Francesc', puntuacion: 35 },
    { nombre: 'Serafín', puntuacion: 73 }
];
//Función principal
function bingo() {
    //Defino un array que contiene los números del bombo. Del 1 al 90
    let numbers = Array.from({ length: 90 }, (_, i) => i + 1);
    //Barajo ese array con la función shuffle
    let ranNumber = shuffle(numbers);
    //Cartón del bingo donde los números son los index del 1 al 15 del array barajado
    let bingoCard = [
        { number: ranNumber[0], matched: false },

        { number: ranNumber[1], matched: false },

        { number: ranNumber[2], matched: false },

        { number: ranNumber[3], matched: false },

        { number: ranNumber[4], matched: false },

        //nueva linea

        { number: ranNumber[5], matched: false },

        { number: ranNumber[6], matched: false },

        { number: ranNumber[7], matched: false },

        { number: ranNumber[8], matched: false },

        { number: ranNumber[9], matched: false },

        //nueva linea

        { number: ranNumber[10], matched: false },

        { number: ranNumber[11], matched: false },

        { number: ranNumber[12], matched: false },

        { number: ranNumber[13], matched: false },

        { number: ranNumber[14], matched: false }];

    //Función de barajar un array para conseguir números aleatorios para el cartón y sin que se repitan (La encontré en stackoverflow y me la he apuntado porque la veo súper útil)
    function shuffle(numbers) {
        var i = numbers.length,
            j = 0,
            temp;
        while (i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;
        }
        return numbers;
    }

    //Se limpia la consola
    console.clear();
    //Se muestra el ranking antes de empezar
    ranking();
    //Se pregunta por prompt el nombre del usuario y se guarda en una variable
    let userName = prompt('¡Bienvenidx al Bingo! ¿Cómo te llamas?');
    //Aquí defino todas las variables que he ido creando para tenerlas agrupadas en un mismo sitio
    let contador = 0;
    let linea = 0;
    let numeroRandomOne;
    let numeroRandom;
    let numeroEncontrado;
    let numerosSacados = [];
    //Si el usuario escribe su nombre y acepta, se pasa a la función que genera el cartón
    if (userName !== null) {
        generarCarton();
    //Si cancela, el programa se despide
    } else {
        console.log('¡Hasta la próxima!')
    }
    //Función que genera el cartón
    function generarCarton() {
        console.clear();
        console.log('Este es tu cartón:');
        //Se muestra el cartón generado
        console.table(bingoCard, ['number']);
        let start = confirm('Si te gusta este cartón, acepta para comenzar a jugar. Si no, cancela para generar otro.');
        if (start === true) {
        //Si el usuario acepta, pasamos a la siguiente función
            generarNumeroBombo();
        //Si no, se vuelven a barajar los números y se genera otro cartón
        } else {
            ranNumber = shuffle(numbers);
            bingoCard = [
                { number: ranNumber[0], matched: false },
        
                { number: ranNumber[1], matched: false },
        
                { number: ranNumber[2], matched: false },
        
                { number: ranNumber[3], matched: false },
        
                { number: ranNumber[4], matched: false },
        
                //nueva linea
        
                { number: ranNumber[5], matched: false },
        
                { number: ranNumber[6], matched: false },
        
                { number: ranNumber[7], matched: false },
        
                { number: ranNumber[8], matched: false },
        
                { number: ranNumber[9], matched: false },
        
                //nueva linea
        
                { number: ranNumber[10], matched: false },
        
                { number: ranNumber[11], matched: false },
        
                { number: ranNumber[12], matched: false },
        
                { number: ranNumber[13], matched: false },
        
                { number: ranNumber[14], matched: false }];
                generarCarton();
        }
    }
    //Función que genera el número del bombo que va a salir
    function generarNumeroBombo() {
        //Primero separo el cartón en líneas con la función slice
        let primeraLinea = bingoCard.slice(0, 5);
        let segundaLinea = bingoCard.slice(5, 10);
        let terceraLinea = bingoCard.slice(10, 15);
        //Genero un número random del 1 al 90
        numeroRandom = Math.floor(Math.random() * 90) + 1;
        //Si ese número está incluido en el array numerosSacados, vuelvo a llamar a esta misma función para que genere otro número
        if (numerosSacados.includes(numeroRandom) === true) {
            generarNumeroBombo();
        //Si no está incluido:
        } else if (numerosSacados.includes(numeroRandom) === false) {
            console.clear();
            console.log('Estamos jugando con el número ' + numeroRandom + '.');
            //Se añade ese número al array para que no vuelva a repetirse
            numerosSacados.push(numeroRandom);
            //Llamo a la función match para ver si está ese número del bombo en nuestro cartón
            match();
            //Si todos los elementos de una línea están matched en true, es decir, han salido, cantamos Linea. Mención especial que me volví loca
            //porque me cantaba línea todas las veces y mis compañeros me comentaron que hiciera un contador para que solo cantara una vez
            if (linea === 0 && ((primeraLinea.every((elem) => elem.matched === true)) || (segundaLinea.every((elem) => elem.matched === true)) || (terceraLinea.every((elem) => elem.matched === true)))) {
                //De 0 se le suma a 1 para que no vuelva a cantar línea
                linea++;
                alert('¡LÍNEA!');
                preguntarNuevoTurno();
            //Si el cartón al completo ya está en matched true, se canta bingo
            } else if (bingoCard.every((elem) => elem.matched === true)) {
                alert('¡¡¡¡¡BBBIIINNNGGGOOO!!!!!');
                console.log('¡Enhorabuena! Has completado el cartón en ' + contador + ' turnos.');
            //Se añade el usuario al ranking y se le pregunta si quiere volver a jugar
                let user = { nombre: userName, puntuacion: contador }
                rank.push(user);
                ranking();
                volverAjugar();
            //Si no es linea y no es bingo, pasamos turno
            } else {
                preguntarNuevoTurno();
            }
        }
    }
    //Función de match
    function match() {
        //Bucle que determina si un número del cartón corresponde con el número del bombo
        for (let i = 0; i < bingoCard.length; i++) {
            if (bingoCard[i].number === numeroRandom) {
                console.log('Se ha encontrado el número ' + bingoCard[i].number + '.')
                //Si es afirmativo, se pone una x y se marca matched como true
                numeroEncontrado = bingoCard[i].number = 'x';
                bingoCard[i].matched = true;
            }
        }
        //Se suma al contador de turnos
        contador++;
        //Se muestra el cartón con la x
        console.table(bingoCard, ['number']);
    }
    //Se pregunta nuevo turno, si es afirmativo, se genera nuevo número en el bombo, si no, se cancela el programa.
    function preguntarNuevoTurno() {
        let askNewTurn = confirm('¿Pasamos al siguiente turno?');
        if (askNewTurn === true) {
            generarNumeroBombo();
        } else {
            console.log('Has cancelado.')
            volverAjugar();
        }
    }
    //Función donde se guarda el ranking y se ordena de menor puntuación a mayor
    function ranking() {
        let rankOrdenado = rank.sort((a, b) => (a.puntuacion) - (b.puntuacion));
        console.log('RANKING:');
        console.table(rankOrdenado);
    }
    //Función donde se indica, una vez acabado el juego, si el usuario quiere volver a jugar para ejecutarse de nuevo el programa
    function volverAjugar() {
        let playAgain = confirm('¿Desea volver a jugar?');
        if (playAgain === true) {
            bingo();
        } else {
            console.log('¡Hasta la próxima!');
        }
    }
}
//Llamamos a la función principal para ejecutar el programa
bingo();