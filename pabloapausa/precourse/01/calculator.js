function calculator(a, b) {
	let arr = [];

	if (/[0-9]/.test(a) && !b) {
		let squ = a * a;

		(squ !== Math.floor(squ)) ? arr.push(squ.toFixed(3)) : arr.push(squ); 
		console.log(`The square root result is ${arr[0]}.`);
	} else if (/[0-9]/.test(a) && /[0-9]/.test(b)) {
		let add = a + b;
		let sub = a - b;
		let mul = a * b;
		let div = a / b;
	
		(add !== Math.floor(add)) ? arr.push(add.toFixed(3)) : arr.push(add);
		(sub !== Math.floor(sub)) ? arr.push(sub.toFixed(3)) : arr.push(sub);
		(mul !== Math.floor(mul)) ? arr.push(mul.toFixed(3)) : arr.push(mul);
		(div !== Math.floor(div)) ? arr.push(div.toFixed(3)) : arr.push(div);
		console.log(`The sum result is ${arr[1]}.`);
		console.log(`The rest result is ${arr[2]}.`);
		console.log(`The multiplication result is ${arr[3]}.`);
		console.log(`The division result is ${arr[4]}.`);
	} else console.log('Not a number!');
}