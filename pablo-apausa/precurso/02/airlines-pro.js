let flights = [ 
	{id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false},
	{id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false},
	{id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true},
	{id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false},
	{id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false},
	{id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false},
	{id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false},
	{id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true},
	{id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true},
	{id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true},
	{id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false}
];

function ft_userId() { 
	let userId = prompt('Escribe un ID para comprar su vuelo.');

	if (userId === null) ft_userPrice();
	if (userId !== null && !/[0-9]/.test(userId)) ft_userId();
	if (userId !== null && /[0-9]/.test(userId)) {
		userId = parseFloat(userId);
		(flights.findIndex(flights => flights.id === userId) !== -1) ? alert(`Gracias por su compra!`) : ft_userId();
	}
}

function ft_userPrice() {
	let userPrice = prompt('Escribe un precio para filtrar cada vuelo.');

	if (userPrice === null) ft_permits();
	if (userPrice !== null && !/[0-9]/.test(userPrice)) ft_userPrice();
	if (userPrice !== null && /[0-9]/.test(userPrice)) {
		userPrice = parseFloat(userPrice);
		flights.sort((a, b) => a.cost - b.cost);
		let lower = flights.filter(flights => flights.cost < userPrice);
		let equal = flights.filter(flights => flights.cost === userPrice);
		let higher = flights.filter(flights => flights.cost > userPrice);
		console.clear();
		if (lower.length !== 0) {
			console.log('Precio más barato:');
			ft_flights(lower);
		}
		if (equal.length !== 0) {
			console.log('Mismo precio:');
			ft_flights(equal);
		}
		if (higher.length !== 0) {
			console.log('Precio más caro:');
			ft_flights(higher);
		}
		ft_airlines(); 
		ft_userId(); 
	} 
}

function ft_adminInterface() { 
	console.clear();
	ft_flights(flights); 
	ft_airlines(); 
	ft_adminId();
}

function ft_adminScale(adminFlight) {
	let adminScale = confirm('Escalas?');

	adminFlight.scale = (adminScale) ? true : false;
	flights.push(adminFlight);
	flights.sort((a, b) => a.id - b.id);
	ft_adminInterface();
}

function ft_adminPrice(adminFlight) {
	let adminPrice = prompt('Escribe el precio');
	
	if (adminPrice === null) ft_adminId();
	if (adminPrice !== null && !/[0-9]/.test(adminPrice)) ft_adminPrice(adminFlight);
	if (adminPrice !== null && /[0-9]/.test(adminPrice)) {
		adminFlight.cost = parseFloat(adminPrice);
		ft_adminScale(adminFlight)
	}
}

function ft_adminOrigin (adminFlight) { 
	let adminOrigin = prompt('Escribe el origen.'); 

	if (adminOrigin === null) ft_adminId();
	if (adminOrigin !== null && !/[A-z]/.test(adminOrigin)) ft_adminOrigin(adminFlight);
	if (adminOrigin !== null && /[A-z]/.test(adminOrigin)) {
		adminFlight.from = adminOrigin;
		ft_adminPrice(adminFlight);
	}
}

function ft_adminDestination (adminFlight) { 
	let adminDestination = prompt('Escribe el destino.'); 

	if (adminDestination === null) ft_adminId();
	if (adminDestination !== null && !/[A-z]/.test(adminDestination)) ft_adminDestination(adminFlight);
	if (adminDestination !== null && /[A-z]/.test(adminDestination)) {
		adminFlight.to = adminDestination;
		ft_adminOrigin(adminFlight);
	}
}

function ft_adminId() { 
	const index = flights => flights.id === adminFlight.id;
	let adminId = prompt('Admin. Escribe el ID para crear un vuelo o eliminarlo si ya existe.');
	let adminFlight = [];

	if (adminId === null) ft_permits();
	if (adminId !== null && !/[0-9]/.test(adminId)) ft_adminId();
	if (adminId !== null && /[0-9]/.test(adminId)) {
		adminFlight.id = parseFloat(adminId);
		if (flights.findIndex(index) !== -1 && flights.length > 5) {
			flights.splice(flights.findIndex(index), 1);
			ft_adminInterface();
		} else if (flights.findIndex(index) === -1 && flights.length < 14) {
			ft_adminDestination(adminFlight);
		} else {
			alert('Límite de entre 5 y 15 vuelos!');
			ft_adminId();
		}
	}
} 

function ft_permits() { 
	let permits = prompt('"Admin" o "user"?');

	if (permits === null) return;
	if (/[A-z]/.test(permits)) {
		permits = permits.toLowerCase();
		if (permits === 'admin') ft_adminId();
		if (permits === 'user') ft_userPrice();
		if (permits !== 'admin' && permits !== 'user') ft_permits();
	} else ft_permits();
}

function ft_airlines() { 
	let price = ((flights.reduce((a, b) => a + b.cost, 0)) / flights.length).toFixed(2);
	let scale = flights.reduce((a, b) => b.scale ? ++a : a, 0);

	console.log(`La media de precio es ${price}€.`);
	console.log(`Hay ${scale} vuelos con escalas.`);
	console.log(`Recientes: ${flights[flights.length - 1].to}, ${flights[flights.length - 2].to}, ${flights[flights.length - 3].to}, ${flights[flights.length - 4].to} y ${flights[flights.length - 5].to}.`);
}

function ft_flights(aux) { 
	for (let i = 0; i < aux.length; i++) {
		(aux[i].scale) ? console.log(`ID: ${aux[i].id}. Vuelo de ${aux[i].from} a ${aux[i].to}, (con escalas). ${aux[i].cost}€.`) : console.log(`ID: ${aux[i].id}. Vuelo de ${aux[i].from} a ${aux[i].to}, (directo). ${aux[i].cost}€.`);
	}
	console.log('')
}

function ft_username() { 
	let username = prompt('Escriba su nombre de usuario.');

	if (username === null) return;
	if (/[\w]/.test(username)) {
		console.clear();
		ft_flights(flights); 
		ft_airlines(); 
		alert(`Bienvenido!`);
		ft_permits();
	} else ft_username();
	console.clear();
}

ft_username();