function calculator(history) {
	let result = [];
	
	if (history.length === 1) {
		let squ = history[0] * history[0];

		result[0] = (squ != Math.floor(squ)) ? square.toFixed(3) : squ;
		console.log(`The square root is ${result[0]}.`);
	} else {
		let add = history.reduce((a, b) => {return Number(a) + Number(b);});
		let sub = history.reduce((a, b) => {return Number(a) - Number(b);});
		let mul = history.reduce((a, b) => {return Number(a) * Number(b);});
		let div = history.reduce((a, b) => {return Number(a) / Number(b);});
		result[1] = (add != Math.floor(add)) ? add.toFixed(3) : add;
		result[2] = (sub != Math.floor(sub)) ? sub.toFixed(3) : sub;
		result[3] = (mul != Math.floor(mul)) ? mul.toFixed(3) : mul;
		result[4] = (div != Math.floor(div)) ? div.toFixed(3) : div;
	
		console.log(`The sum is ${result[1]}.`);
		console.log(`The rest is ${result[2]}.`);
		console.log(`The multiplication is ${result[3]}.`);
		console.log(`The division is ${result[4]}.`);
	}
}

function calculatorPro() {  
	let answer; 
	let repeat; 
	let history = [];

	do {
		answer = prompt('Write a number.');
		if (answer === null) break;
		if (!/[0-9]/.test(answer)) return calculatorPro();
		history.push(parseFloat(answer));
		console.clear();
		calculator(history);
	} while (answer !== null);
	repeat = confirm('Again?');
	if (repeat === true) return calculatorPro(); 
	alert('Bye!');
	console.clear();
}

calculatorPro();