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

    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true }];

airlinesPro();

function airlinesPro() {
    let usuario = prompt("Introduce tu nombre de ususario");
    alert("Vienvenido/a " + usuario);

    let acceso;
    do {
        acceso = prompt("Es usted admino(1) o user(2)?");
        let numero = validarSiNumero(acceso);
        if (Number.isInteger(numero)) {
            if (numero === 1) {
                admin();
                break;
            } else if (numero === 2) {
                user();
                break;
            } else (alert("no has introduciso algo correcto"));

        }

    } while (acceso !== null)
    empezar();
}

function admin() {
    console.log("soy admin");
    let cont = 0;
    let elect;

    do {
        elect = prompt("quieres agregar vuelos(1) o eliminar veulos(2)? \n cancelar para salir");
        numero = validarSiNumero(elect);
        if (Number.isInteger(numero)) {
            if (numero <= 2) {
                switch (numero) {
                    case 1: if (cont < 15) {
                        agVuelos();
                        cont++;
                    } else {
                        alert("ya no puedes agreagr mas vuelos");
                    }
                        break;
                    case 2: console.log(flights);
                        elimVuelos();
                        break;
                }
            } else {
                alert("no has introducido algo correcto")
            }
        }


    } while (elect !== null)

}

function agVuelos() {
    let vuelo = new Object();

    vuelo.id = flights.length;

    vuelo.to = prompt("Cuale es origen del vuelo?");

    vuelo.from = prompt("Cual es el destino del vuelo?");

    let precio;
    do {
        precio = prompt("Cual es coste del vuelo?");
        numero = validarSiNumero(precio);
        if (Number.isInteger(numero)) {
            vuelo.cost = numero;
            break;
        }
        else {
            alert("introduce numeros");
        }

    }
    while (precio !== null)

    let escala = confirm("El vuelo realiza escala? S/N?");
    console.log(escala);

    if (escala === true) {
        vuelo.scale = true;
    } else {
        vuelo.scale = false;
    }


    flights.push(vuelo);
    console.log(vuelo);

    alert("has agredago vuelo")

}


function elimVuelos() {
    let elec;
    do {
        elec = prompt("que veuelo quieres eliminar(ID) \n presiona cancelar para salir");
        let num = validarSiNumero(elec);
        for (let i = 0; i < flights.length; i++) {
            if (flights[i].id === num) {
                flights.splice(elec, 1);
                alert("has borrado el vuelo con id " + elec);
            }
        }
    }
    while (elec !== null)
    console.log(flights);

}

function user() {
    console.log("soy user");
    filtrarVuelos();

}


function filtrarVuelos() {
    let precioAlto = [];
    let precioIgual = [];
    let precioBajo = [];
    let aux;
    let precio;
    do {
        precio = prompt("Sobre que precio queieres filtar los vuelos? \n presiona cancelar para salir");
        let num = validarSiNumero(precio);
        if (precio !== null) {
            if (Number.isInteger(num)) {
                for (let i = 0; i < flights.length; i++) {
                    if (flights[i].cost < num) {
                        precioBajo.push(flights[i]);
                    } else if (flights[i].cost > num) {
                        precioAlto.push(flights[i]);
                    } else if (flights[i].cost === num) {
                        precioIgual.push(flights[i]);
                    }
                }
                aux = true;
                break;
            }
        }
    } while (precio !== null)

    if (aux === true) {

        console.log("Los vuelos con el precio mas bajo al propuesto son :");
        for (let i = 0; i < precioBajo.length; i++) {
            console.log("El vuelo con origen :" + precioBajo[i].to + " y destino: " + precioBajo[i].from + " Tiene un coste de : " + precioBajo[i].cost);
        }

        console.log("----------------------------------------------------------------");

        console.log("Los vuelos con el precio mas alto al propuesto son :");
        for (let i = 0; i < precioAlto.length; i++) {
            console.log("El vuelo con origen :" + precioAlto[i].to + " y destino: " + precioAlto[i].from + " Tiene un coste de : " + precioAlto[i].cost);
        }
        console.log("----------------------------------------------------------------");

        console.log("Los vuelos con el precio igual al propuesto son :");
        for (let i = 0; i < precioIgual.length; i++) {
            console.log("El vuelo con origen :" + precioIgual[i].to + " y destino: " + precioIgual[i].from + " Tiene un coste de : " + precioIgual[i].cost);
        }
        comprarVuelo();

    }

}

function comprarVuelo() {
    let compra;
    compra = prompt("Introduce el ID del vuelo que quieras comprar");
    let numCompra = validarSiNumero(compra);

    if (compra >= flights.length) {
        alert("no hay vuelos con ese id");
    } else {
        for (let i = 0; i < flights.length; i++) {
            if (flights[i].id === numCompra) {
                alert("Gracias por su compra vuelva pronto");
                console.log(flights[i]);
                break;
            }
        }
    }

}


function empezar() {
    let elec = confirm("Queires volver a empezar?");


    if (elec === true) {
        airlinesPro();
    } else {
        alert("ADIOS!");
    }


}

function validarSiNumero(numero) {
    let num = parseInt(numero);
    if (/^([0-9])*$/.test(numero)) {
        return num;
    }
}



















