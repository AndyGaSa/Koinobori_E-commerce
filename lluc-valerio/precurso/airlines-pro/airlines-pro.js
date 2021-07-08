//
// Lluc Valério
//
// ********** VARIABLES **********
let patt = /^\d*$/;
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
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
];
//
airlines();
// ********** FUNCIONS **********
function airlines() {
    // Benvinguda al usuari.
    let user = prompt("¿Cuál es tu nombre?", "");
    if (user !== null && user.length > 0) {
        alert(`Bienvenido/a ${user}`);
        // Mostrem info vols.
        printInfo(user);
        // Consultem quin tipus d'usuari tenim i executem en consequència.
        let userVal = false;
        do {
            userVal = userValidation();
        } while (!userVal);
        console.clear();
        console.log("\nSesión finalizada.")
    } else {
        console.clear();
        console.log("\nUsuario no detectado.\nFin del proceso.")
    }
}
// Gestió de la zona d'administració.
function adminArea() {
    let adminSession = false;
    let adminOption = -1;
    //
    console.clear();
    console.log('\nÁrea de administrador:');
    // Gestionem quina operació és la desitjada i donem l'opció a sortir.
    do {
        adminOption = prompt(`Que desea hacer:\n 1. Crear vuelos.\n 2. Eliminar Vuelos.\n 3. Salir.`);
        switch (parseInt(adminOption)) {
            case 1:
                setFlights();
                break;
            case 2:
                delFlights();
                break;
            case 3:
                adminSession = true;
                break;
            default:
                alert(`Opción desconocida. Escoga\n1 (crear)\n2 (eliminar)\n3 (salir).`);
                break;
        }
    } while (!adminSession);
}
// Crear Vols
function setFlights() {
    // Comprovem que no tinguem més de 15 vols
    if (flights.length < 15) {
        let idNewFlight, toNewFlight, fromNewFlight, costNewFlight, scaleNewFlight, flightNew;
        let flightInserted = false;
        // capturem dades del vol no permet valors null
        do {
            fromNewFlight = prompt(`Introduzca el origen del vuelo.`)
        } while (fromNewFlight === null);
        do {
            toNewFlight = prompt(`Introduzca el destino del vuelo.`);
        } while (toNewFlight === null);
        do {
            costNewFlight = prompt(`Introduzca el precio del vuelo.`);
        } while (costNewFlight === null);
        do {
            scaleNewFlight = prompt(`El vuelo realizará alguna escala?\n  · Si (s)\n  · No (n)`);
            if (scaleNewFlight !== null && scaleNewFlight.toLocaleUpperCase() === 'S') {
                scaleNewFlight = true;
            } else if (scaleNewFlight !== null && scaleNewFlight.toLocaleUpperCase() === 'N') {
                scaleNewFlight = false;
            } else {
                scaleNewFlight = null;
            }
        } while (scaleNewFlight === null);
        // Comprovem si s'ha esborrat previament algun vol i hi ha algun id lliure
        for (let i = 0; i < flights.length; i++) {
            if (flights[i].id > i) {
                idNewFlight = i;
                flightNew = { id: idNewFlight, to: toNewFlight, from: fromNewFlight, cost: costNewFlight, scale: scaleNewFlight }
                flights.push(flightNew);
                flightInserted = true;
                break;
            }
        }
        // Si no hi hagués cap id lliure entre els vols existents, afegim el següent disponible.
        if (!flightInserted) {
            idNewFlight = flights.length;
            flightNew = { id: idNewFlight, to: toNewFlight, from: fromNewFlight, cost: costNewFlight, scale: scaleNewFlight }
            flights.push(flightNew);
        }
        // cridem la rutina per mostrar els vols ordenats a l'usuari
        showOrderedFlights();
    } else {
        console.log(`No puede añadir más vuelos. Elimine alguno antes de añadir otro.`);
    }
}
// Ordenem els vols per id i els mostrem a l'usuari.
function showOrderedFlights() {
    console.clear();
    flights.sort(function (a, b) { return a.id - b.id })
    console.log(`\nVuelo añadido con ID ${idNewFlight}\n`);
    for (let value of flights) {
        console.log(` · ID: ${value.id} - El vuelo con origen: ${value.from}, y destino: ${value.to} tiene un coste de ${value.cost}€ y ${getScale(flights, i)}`);
    }
}
// Eliminar Vols
function delFlights() {
    let flightDeleted = false;
    let delOption;
    // Ordenem els vols per ID i els mostrem a l'usuari perquè trii quin vol eliminar
    console.clear();
    flights.sort(function (a, b) { return a.id - b.id })
    for (let i = 0; i < flights.length; i++) {
        console.log(` · ID: ${flights[i].id} - El vuelo con origen: ${flights[i].from}, y destino: ${flights[i].to} tiene un coste de ${flights[i].cost}€ y ${getScale(flights, i)}`);
    }
    // preguntem quin vol es vol eliminar, controlant si es vol sortir o si s'està introduint malament el ID.
    do {
        delOption = prompt(`Qué vuelo desea eliminar?\n ESC para salir.`);
        if (delOption !== null) {
            for (let i = 0; i < flights.length; i++) {
                if (parseInt(delOption) === flights[i].id) {
                    console.log(`Ha eliminado el vuelo con ID ${flights[i].id}.`);
                    flights.splice(i, 1);
                    flightDeleted = true;
                    break;
                }
            }
            if (!flightDeleted) {
                console.log(`Código de vuelo no identificado.`);
            }
        } else {
            flightDeleted = true;
        }
    } while (!flightDeleted);
}
// consultem al usuari el paràmetre de busqueda i l'import, controlant caracters no vàlids.
function getImport() {
    let searchPriceOK = false;
    let searchUserPrice;
    do {
        searchUserPrice = prompt(`Introduzca el precio del vuelo:`);
        if ((patt.test(searchUserPrice) === false) || (searchUserPrice === null)) {
            alert('Inserte sólo valores enteros positivos.');
        } else {
            searchPriceOK = true;
        }
    } while (!searchPriceOK)
    return searchUserPrice;
}
function getSearchCriteria() {
    let searchParamOK = false;
    let searchUserParam;
    do {
        searchUserParam = prompt(`Introduzca el criterio de búsqueda:\n   <  menor que\n   >  mayor que\n   =  igual a`);
        if (searchUserParam === '<' || searchUserParam === '>' || searchUserParam === '=') {
            searchParamOK = true;
        } else {
            alert(`Parámetro de búsqueda no reconocido. Vuelva a introducirlo.`);
        }
    } while (!searchParamOK)
    return searchUserParam;
}
function checkFlight(searchParameter, searchPriceFromUser) {
    // let userFlights = flights.slice();
    let userFlights = [];
    //
    switch (searchParameter) {
        case '<':
            userFlights = flights.filter(flight => flight.cost >= searchPriceFromUser);
            userFlights.sort(function (a, b) { return b.cost - a.cost })
            break;
        case '>':
            userFlights = flights.filter(flight => flight.cost <= searchPriceFromUser);
            userFlights.sort(function (a, b) { return a.cost - b.cost })
            break;
        case '=':
            userFlights = flights.filter(flight => flight.cost !== parseInt(searchPriceFromUser));
            userFlights.sort(function (a, b) { return a.cost - b.cost })
            break;
        default:
            alert(`Error durante el proceso de busqueda.`);
            break;
    }
    
    
    


    // for (let i = 0; i < userFlights.length; i++) {
    //     switch (searchParameter) {
    //         case '<':
    //             if (userFlights[i].cost >= searchPriceFromUser) {
    //                 userFlights.splice(i, 1);
    //                 i = -1;
    //             }
    //             break;
    //         case '>':
    //             if (userFlights[i].cost <= searchPriceFromUser) {
    //                 userFlights.splice(i, 1);
    //                 i = -1;
    //             }
    //             break;
    //         case '=':
    //             if (userFlights[i].cost !== parseInt(searchPriceFromUser)) {
    //                 userFlights.splice(i, 1);
    //                 i = -1;
    //             }
    //             break;
    //         default:
    //             alert(`Error durante el proceso de busqueda.`);
    //             break;
    //     }
    // }


    
    // Contemplem la opció que la busqueda no doni resultats
    if (userFlights.length >= 1) {
        // Si tenim resultats, els mostrem per pantalla
        for (let i = 0; i < userFlights.length; i++) {
            console.log(` · ID: ${userFlights[i].id} - El vuelo con origen: ${userFlights[i].from}, y destino: ${userFlights[i].to} tiene un coste de ${userFlights[i].cost}€ y ${getScale(userFlights, i)}`);
        }
        let checkOperation = false;
        // Li preguntem a l'usuari quin vol vol comprar, donant la opció a sortir sense fer cap compra.
        do {
            let searchID = prompt(`Introduzca el ID del vuelo deseado:`);
            if (searchID !== null) {
                for (let value of userFlights) {
                    if (parseInt(searchID) === value.id) {
                        console.log(`Ha comprado el vuelo con ID ${value.id}.\nGracias por su compra. Vuelva pronto.`);
                        checkOperation = true;
                    }
                }
            } else {
                console.clear();
                console.log(`No ha realizado ninguna compra.\n Vuelva pronto.`);
                checkOperation = true;
            }
        } while (!checkOperation);
    } else {
        console.clear();
        console.log(`No disponemos de vuelos que cumplan sus requistos. Vuelva pronto.`)
    }
}
// Gestió de la zona d'usuari.
function userArea() {
    let searchParam;
    let searchPrice
    let userSession = false;
    //
    console.clear();
    console.log('\nÁrea de usuario:');
    do {
        // consultem al usuari el paràmetre de busqueda i l'import, controlant caracters no vàlids.
        searchParam = getSearchCriteria();
        searchPrice = getImport();
        // en funció del paràmetre, consultem en un array paralel quins vols compleixen les condicions de l'usuari i traiem el que no ho compleix. 
        console.log(`El resultado de su busqueda: vuelos con el precio ${searchParam} ${searchPrice}€ es:`);
        checkFlight(searchParam, searchPrice);
        let userAns;
        let correctAnswer = false;
        // Es pregunta a l'usuari si vol realitzar una altre busqueda / compra o vol abandonar el programa.
        do {
            userAns = prompt(`Quieres realizar otra operación?\n  S (si)\n  N (no)`);
            if (userAns === null) {
                alert(`Responda\n  s (sí)\n  n (no).`);
            } else if (userAns.toLocaleUpperCase() === 'N') {
                userSession = true;
                correctAnswer = true;
            } else if (userAns.toLocaleUpperCase() === 'S') {
                userSession = false;
                correctAnswer = true;
            } else {
                alert(`Responda sí (s) o no (n).`);
            }
        } while (!correctAnswer);
    } while (!userSession);
}
// Gestió del nivell d'acces
function userValidation() {
    let userType = prompt("Define tu nivel de acceso:\n  · user\n  · admin\n  · ESC' para salir.", "");
    if (userType === null) {
        return true;
    } else {
        switch (userType.toLocaleUpperCase()) {
            case 'ADMIN':
                adminArea();
                return true;
            case 'USER':
                userArea();
                return true;
            default:
                console.log(`Nivel de acceso no válido. Vuelva a intentarlo.`);
                return false;
        }
    }
}
// Retorna un text en funció de si el vol té o no escala.
function getScale(flightsScale, iterator) {
    if (flightsScale[iterator].scale) {
        return 'SI realiza escala.';
    } else {
        return 'NO realiza ninguna escala.';
    }
}
// Retorna la mitjana aritmètica del cost de tots els vols de l'array.
function getArithMean() {
    let arithMean = 0;
    for (let value of flights) {
        arithMean = arithMean + value.cost;
    }
    return (arithMean / flights.length);
}
// Retorna el nombre d'escales d'un array de vols.
function getNumScales() {
    let numScales = 0;
    for (let value of flights) {
        if (value.scale) {
            numScales++;
        }
    }
    return numScales;
}
// Mostra la info inicial de tots els vols.
function printInfo(user) {
    // Llista tots els vols.
    console.log(`${user}, los vuelos disponibles son:`)
    console.log(`\n`)
    for (let i = 0; i < flights.length; i++) {
        console.log(` · El vuelo con origen: ${flights[i].from}, y destino: ${flights[i].to} tiene un coste de ${flights[i].cost}€ y ${getScale(flights, i)}`);
    }
    // Mitja aritmètica de tots els vols.
    console.log(`\n`);
    console.log(`El coste medio de todos los vuelos es: ${getArithMean().toFixed(2)}€`);
    // Nombre de vols amb escala.
    console.log(`\n`);
    console.log(`El número de vuelos que efectuan escala son: ${getNumScales()}`);
    // Últimes 5 destinacions.
    console.log(`\n`);
    console.log(`Los últimos destinos del día son:`);
    let lastFive = flights.slice(-5);
    for (let value of lastFive) {
        console.log(value.to)
    }
}
