function Username() {
    const username = prompt('Bienvenido al bingo dime tu nombre de usuario:');
    Bingo(username);
}

function Bingo(username) {

    let Ranking = [];
    Ranking.user1 = {
        firstName: "John",
        score: 50
    };
    Ranking.user2 = {
        firstName: "Pablo",
        score: 100
    };
    Ranking.user3 = {
        firstName: "Maria",
        score: 20
    };

    function compare(Ranking) {
        if (Ranking.score < Ranking.score) {
            return -1;
        }
        if (Ranking.score > Ranking.score) {
            return 1;
        }
        return 0;
    }
    Ranking.sort(compare);
    console.table(Ranking);
    let Carton = {};
    Carton = GenerarCarton();
    let nuevoCarton = false;
    let Premio;
    let contadorAciertos = 0;
    let cont1 = 0;
    let cont2 = 0;
    let cont3 = 0;
    let cont4 = 0;
    let turnos = 0;
    let puntos = 100;
    while (nuevoCarton != true) {
        nuevoCarton = confirm('Quieres este carton?');
        if (nuevoCarton != true) {
            Carton = GenerarCarton();
        }
    }


    let Seguir = true;
    let ComprobacionRandoms = [];
    let Random = 0;

    while (contadorAciertos < 15 && Seguir === true) {
        Random = Math.floor(Math.random() * 99) + 1;
        while (ComprobacionRandoms.indexOf(Random) != -1) {
            Random = Math.floor(Math.random() * 99) + 1;
        }
        ComprobacionRandoms.push(Random);
        Seguir = confirm('El numero que ha salido es: ' + Random + '\nQuieres continuar?');
        let isNumber = (element) => element === Random;
        Premio = Carton.PrimeraLinea.findIndex(isNumber);
        if (Premio != -1) {
            Carton.PrimeraLinea[Premio] = 'X';
            cont1++
        }
        if (Premio === -1) {
            Premio = Carton.SegundaLinea.findIndex(isNumber);
            if (Premio != -1) {
                Carton.SegundaLinea[Premio] = 'X';
                cont2++
            }
        }
        if (Premio === -1) {
            Premio = Carton.TerceraLinea.findIndex(isNumber);
            if (Premio != -1) {
                Carton.TerceraLinea[Premio] = 'X';
                cont3++
            }
        }
        if (Premio != -1) {
            contadorAciertos++;
            console.log('Enhorabuena tenias el numero ' + Random + ' !');
            if (cont1 === 5 || cont2 === 5 || cont3 == 5) {
                if (cont4 === 0) {
                    console.log('LINEA!!!!!!!');
                    cont4++;
                }
            }
            console.table(Carton);
        } else {
            console.log('No tienes ese numero');
        }
        turnos++;

    }

    puntos = puntos - turnos;
    Ranking.user4 = {
        firstName: username,
        score: turnos
    };
    console.log('El ranking final de puntos es:');
    console.table(Ranking);


    if (contadorAciertos === 15) {
        alert('BINGO!! Gracias por jugar . Has realizado el bingo en ' + turnos + ' turnos. Vuelve cuando quieras!');
    } else {
        alert('Gracias por jugar . Has jugado ' + turnos + ' turnos. Vuelve cuando quieras!');
    }
    let Reinicar = false;
    Reiniciar = confirm('Quieres volver a jugar?');
    if (Reiniciar === true) {
        Username();
    }
}

function GenerarCarton() {
    let Comprobacion = [];
    let i = 0;
    let Random = 0;
    let Carton = {};
    while (i < 15) {
        Random = Math.floor(Math.random() * 99) + 1;
        if (Comprobacion.indexOf(Random) === -1) {
            Comprobacion.push(Random);
            i++;
        }
    }

    Carton.PrimeraLinea = Comprobacion.slice(0, 5);
    Carton.SegundaLinea = Comprobacion.slice(5, 10);
    Carton.TerceraLinea = Comprobacion.slice(10, 15);


    console.table(Carton);
    return Carton;
}

Username();