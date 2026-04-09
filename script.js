let firstOperand = null;
let secondOperand = null;
let currentOperator = null;
let displayValue = '0';
let waitingForSecondOperand = false;

const container = document.querySelector('.container');
const display = document.querySelector('.display');

container.addEventListener('click', (e) => {
  const { target } = e;

  if(!target.classList.contains('btn')) return;

  const { number, action } = target.dataset;

  if (number !== undefined) {
    handleNumber(number);
  } else {
    handleAction(action);
  }

  display.innerText = displayValue;
});

function handleAction(action) {
  switch (action) {
    case 'clear':
      displayValue = '0';
      firstOperand = null;
      secondOperand = null;
      currentOperator = null;
      break;

    case 'decimal':
      if (waitingForSecondOperand) {
        displayValue = '0.';
        waitingForSecondOperand = false;
        break;
      }

      if(!displayValue.includes('.')) {
        displayValue += '.';
      } 
      break;

    case 'add':
    case 'subtract':
    case 'multiply':
    case 'divide':
      handleOperator(action);
      break;

    case 'calculate':
      if (currentOperator && firstOperand !== null) {
        secondOperand = displayValue;
        displayValue = String(operate(currentOperator, firstOperand, secondOperand));

        firstOperand = null;
        currentOperator = null;
      }
        break;
  }
}

function handleNumber(num) {
  if (waitingForSecondOperand) {
    displayValue = num;
    waitingForSecondOperand = false;
    return;
  }

  if (displayValue === '0') {
    displayValue = num;
  } else {
    displayValue += num;
  }
}

function handleOperator(nextOperator) {
  firstOperand = displayValue;
  currentOperator = nextOperator;
  waitingForSecondOperand = true;
}


function add(a, b) { return a + b; }

function subtract(a, b) { return a - b; }

function multiply(a, b) { return a * b; }

function divide(a, b) {
  return b === 0 ? "division by 0 not allowed" : a / b;
}

function operate(action, a, b) {
  const firstNum = Number(a);
  const secondNum = Number(b);

  switch (action) {
    case 'add':
      return add(firstNum, secondNum);

    case 'subtract':
      return subtract(firstNum, secondNum);

    case 'multiply':
      return multiply(firstNum, secondNum);

    case 'divide':
      if(secondNum === 0) return "LOL NO"
      return divide(firstNum, secondNum);
  
    default:
      return "Error";
  }
}

