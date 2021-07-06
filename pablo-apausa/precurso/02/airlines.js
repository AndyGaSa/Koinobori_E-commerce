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

function airlines() {
	let username = prompt('Nombre de usuario.');
	let price = ((flights.reduce((a, b) => a + b.cost, 0)) / flights.length).toFixed(2);
	let scale = flights.reduce((a, b) => b.scale ? ++a : a, 0);

	if (username === null) return console.clear(); 
	if (username.length === 0) return airlines();
	console.clear();
	alert(`Bienvenido, ${username}.`);
	for (let i = 0; i < flights.length; i++) {
		(flights[i].scale === true) ? console.log(`El vuelo de ${flights[i].from} a ${flights[i].to} cuesta ${flights[i].cost}€ y tiene escalas.`) : console.log(`El vuelo de ${flights[i].from} a ${flights[i].to} cuesta ${flights[i].cost}€ y es directo.`);
	}
	console.log('');
	console.log(`La media por vuelo es de ${price}€.`);
	console.log(`Hay ${scale} vuelos con escalas.`);
	console.log(`Recientes: ${flights[flights.length - 1].to}, ${flights[flights.length - 1].to}, ${flights[flights.length - 1].to}, ${flights[flights.length - 1].to} y ${flights[flights.length - 1].to}.`);
}

airlines();