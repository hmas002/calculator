function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, operator) {
    if (operator === '+') return add(a, b);
    else if (operator === '-') return subtract(a, b);
    else if (operator === '/') return divide(a, b);
    else if (operator === '*') return multiply(a, b);
}

const buttons = document.querySelectorAll('button');
const results = document.querySelector('.results');
const inputs = document.querySelector('.input');


console.log(buttons);

let input = '';
let prevVal;
let operator;
let result;
let ranOnce = false;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.id;
        if (value === 'CE') {
            results.textContent = '';
            inputs.textContent = '';
            input = '';
            preVal = '';
            operator = '';
        }
        else if (value === '+' || value === '-' || value === '*' || value == '/') {
            prevVal = (ranOnce) ? result : +input;
            operator = value;
            input = '';
            inputs.textContent = prevVal + ' ' + operator + ' ';
            ranOnce = true;
        }
        else if (value === '=') {
            inputs.textContent = result;
            operator = '';
            results.textContent = '';
        }
        else if (ranOnce) {
            input += value;
            result = operate(prevVal, +input, operator);
            inputs.textContent += value;
            results.textContent = result;
        } else {
            input += value;
            inputs.textContent += value;
        }
    });
});

/* always compute unless there is an operator if user selects the = button then clear inputs else keep*/