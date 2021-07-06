let display = document.querySelector('.display');
let buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
    button.addEventListener('click', calculate);
  });

function calculate(event) {
    const clickedButtonValue = event.target.value;
    if (clickedButtonValue === '=') {
      if (display.value !== '') {
        display.value = eval(display.value);
      }
    } else if (clickedButtonValue === 'C') {
      display.value = '';
    } else {
      display.value += clickedButtonValue;
    }
  }