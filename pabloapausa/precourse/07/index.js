class Calculator {
	constructor(output) {
		this.output = output;
		this.operandPrevious = null;
		this.operandCurrent = '0';
		this.result = '0';
	}

	concatenate(number) {
		this.number = number;

		//Concatenates when the operand is not '0', a result or bigger than eight. 
		if ((this.operandCurrent.length >= 8) || (this.operandCurrent.includes(',')
		&& (this.number === ','))) return;
		if (((this.operandCurrent === this.result) || (this.operandCurrent === '0'))
		&& (this.number === ',')) return this.operandCurrent = '0,';
		if (((this.operandCurrent === this.result) || (this.operandCurrent === '0'))
		&& (this.number !== ',')) return this.operandCurrent = this.number.toString();
		this.operandCurrent = this.operandCurrent.toString() + this.number.toString();
	}

	operation(symbol) {
		this.symbol = symbol;

		if (this.operandCurrent === '0') return; 
		//Logs the operand. 
		this.operandPrevious = this.operandCurrent;
		this.operandCurrent = '0';
	}

	equals(result) {
		this.result = result;


		if (this.operandCurrent === '0' || this.operandPrevious === null) return;
		//Array to number. 
		let previous = this.operandPrevious.replace(/,/, '.');
		let current = this.operandCurrent.replace(/,/, '.');
		if (this.symbol === '+') this.result = Number(previous) + Number(current);
		if (this.symbol === '–') this.result = Number(previous) - Number(current);
		if (this.symbol === '×') this.result = Number(previous) * Number(current);
		if (this.symbol === '÷') this.result = Number(previous) / Number(current);
		//Number to array. 
		this.result = this.result.toString();
		this.result = this.result.replace(/\./g, ',');
		this.operandPrevious = null;
		//Three decimals limit. 
		if (!this.result.includes(',')) return this.operandCurrent = this.result; 
		if (this.result.split(',')[1].length < 4) return this.operandCurrent = this.result;
		this.operandCurrent = this.result.slice(0, (this.result.split(',')[0].length + 4));
	}

	clear() {
		this.operandPrevious = null;
		this.operandCurrent = '0';
	}

	delete() { 
		this.operandCurrent = this.operandCurrent.slice(0, -1);

		if (this.operandCurrent === '') this.operandCurrent = '0';
	}

	display() {
		this.output.innerText = this.operandCurrent;
	}
}

const buttonNumber = document.querySelectorAll("[data-number]");
const buttonOperation = document.querySelectorAll("[data-operator]");
const buttonEquals = document.querySelector("[data-equals]");
const buttonDelete = document.querySelector("[data-delete]");
const buttonClear = document.querySelector("[data-clear]");
const output = document.querySelector("[data-current-output]");
const calculator = new Calculator(output);

buttonNumber.forEach((button) => {
	button.addEventListener("click", () => {
		calculator.concatenate(button.innerText);
		calculator.display();
	});
});

buttonOperation.forEach((button) => {
	button.addEventListener("click", () => 
		calculator.operation(button.innerText));
		calculator.display();
});

buttonEquals.addEventListener("click", button => {
	calculator.equals();
	calculator.display();
});

buttonClear.addEventListener("click", button => {
	calculator.clear();
	calculator.display();
});

buttonDelete.addEventListener("click", button => {
	calculator.delete();
	calculator.display();
});