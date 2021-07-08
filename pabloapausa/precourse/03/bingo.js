let scoreboard = [
	{username: 'virga', score: 20, rounds: 70},
	{username: 'skylab', score: 53, rounds: 27},
	{username: 'salad', score: 25, rounds: 65},
	{username: 'styx', score: 1, rounds: 89},
	{username: 'bear', score: 36, rounds: 54},
	{username: 'ancha', score: 33, rounds: 57},
];

//Logs the scoreboard.
function log(username, rounds) {
	let score = 90 - rounds; 

	scoreboard.push({username: username, score: score, rounds: rounds}); 
	scoreboard.sort((a, b) => a.score - b.score); 
	scoreboard.reverse(); 
	console.clear();
	console.log(`Completado en ${rounds} rondas`); 
	for (let k = 0; k < scoreboard.length; k++) {
		console.log(`${scoreboard[k].username}. Puntuación: ${scoreboard[k].score}`); 
	}
}

//Replaces by x. 
function cross(y0, y1, y2, number1, rounds) { 
	if (y0.indexOf(number1[rounds]) !== -1) y0[y0.indexOf(number1[rounds])] = 'x';
	if (y1.indexOf(number1[rounds]) !== -1) y1[y1.indexOf(number1[rounds])] = 'x';
	if (y2.indexOf(number1[rounds]) !== -1) y2[y2.indexOf(number1[rounds])] = 'x';
}

//Number of each round. 
function random1(number1, j) { 
	while (j < 90) { 
		let n = Math.round(Math.random() * 90); 
		if (number1.indexOf(n) === -1 && n !== 0) {
			number1.push(n);
			j++;
		} else random1(); 
	}
}

function bingo1(y0, y1, y2, username) {  
	const x = (aux) => aux === 'x'; 
	let number1 = [];
	let [j, line] = [0, 0];

	random1(number1, j);
	for (let rounds = 0; rounds <= 90; rounds++) { 
		if (y0.every(x) === true && y1.every(x) === true && y2.every(x) === true) { 
			row(y0, y1, y2, number1, rounds); 
			alert('Bingo!'); 
			log(username, rounds); 
			let question1 = confirm('Jugar otra vez?'); 
			if (question1 === true) return bingo0(username); 
		} else { 
			let question2 = confirm('Al siguiente turno?');
			if (question2 === true) { 
				cross(y0, y1, y2, number1, rounds)
				row(y0, y1, y2, number1, rounds);
				if (line === 0 && (y0.every(x) === true || y1.every(x) === true || y2.every(x) === true)) { 
					alert('Línea!'); 
					line++; 
				}
			} else break; 
		}
	}
	console.clear();
}

//Constructor.
function column(x0, x1, x2, x3, x4) { 
	this.column0 = x0; 
	this.column1 = x1; 
	this.column2 = x2; 
	this.column3 = x3;
	this.column4 = x4; 
}

//Logs the card. 
function row(y0, y1, y2, number1, rounds) { 
	console.clear();
	if (number1) console.log(`El número ${number1[rounds]}.`); 
	let row0 = new column(y0[0], y0[1], y0[2], y0[3], y0[4]); 
	let row1 = new column(y1[0], y1[1], y1[2], y1[3], y1[4]); 
	let row2 = new column(y2[0], y2[1], y2[2], y2[3], y2[4]); 
	console.table([row0, row1, row2]);
}

//Generates the numbers of the card. 
function random0(number0, i) {
	while (i < 15) { 
		let n = Math.round(Math.random() * 90);
		if (number0.indexOf(n) === -1 && n !== 0) {
			number0.push(n)
			i++;
		} else random0();
	}
}

//Generates the card. 
function bingo0(username) {
	let number0 = [];
	let i = 0;

	random0(number0, i); 
	let y0 = number0.slice(0, 5); 
	let y1 = number0.slice(5, 10); 
	let y2 = number0.slice(10); 
	row(y0, y1, y2); 
	let question0 = confirm('Generar otro cartón?'); 
	(question0 === true) ? bingo0(username) : bingo1(y0, y1, y2, username);
}

function login() {
	let username = prompt('Nombre de usuario'); 

	if (username !== null && /\w/.test(username)) {
		bingo0(username);
	} else if (!/\w/.test(username)) { 
		login(); 
	} else console.clear();
}

login();