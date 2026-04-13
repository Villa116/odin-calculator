let firstOperand = null;
let secondOperand = null;
let currentOperator = null;
let displayValue = '0';
let waitingForSecondOperand = false;
let isResult = false;

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
      isResult = false;
      break;

    case 'delete':
      if(isResult || waitingForSecondOperand) return;

      if (displayValue.length > 1) {
        displayValue = displayValue.slice(0, -1);
      } else {
        displayValue = '0';
      }
      break;
    
    case 'percentage':
      let percent = Number(displayValue) / 100;

      displayValue = String(roundResult(percent));
      isResult = true;
      break;
    
    case 'squareRoot':
      if (Number(displayValue) < 0) {
        displayValue = "Error";
      } else {
        displayValue = String(roundResult(Math.sqrt(Number(displayValue))));
      }
      isResult = true;
      break;
    
    case 'square':
      let squared = Number(displayValue) ** 2;
      displayValue = String(roundResult(squared));
      isResult = true;
      break;

    case 'toggle':
      displayValue = String(Number(displayValue) * -1);
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
    
    case 'pi':
      displayValue = String(roundResult(Math.PI));
      isResult = true;
      break;

    case 'add':
    case 'subtract':
    case 'multiply':
    case 'divide':
    case 'exponent':
      handleOperator(action);
      break;

    case 'calculate':
      if (currentOperator && firstOperand !== null) {
        secondOperand = displayValue;
        const result = operate(currentOperator, firstOperand, displayValue);
        
        displayValue = typeof result === 'number'
          ? String(roundResult(result))
          : result;

        firstOperand = null;
        currentOperator = null;
        waitingForSecondOperand = false;
        isResult = true;
      }
        break;
  }
}

function handleNumber(num) {
  if (isResult || waitingForSecondOperand) {
    displayValue = num;
    waitingForSecondOperand = false;
    isResult = false;
    return;
  }

  if (displayValue === '0') {
    displayValue = num;
  } else {
    displayValue += num;
  }
}

function handleOperator(nextOperator) {
  isResult = false;
  if (currentOperator && !waitingForSecondOperand) {
    const result = operate(currentOperator, firstOperand, displayValue);

    displayValue = typeof result === 'number'
          ? String(roundResult(result))
          : result;
    display.innerText = displayValue;
  }

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

    case 'exponent':
      return Math.pow(firstNum, secondNum);
  
    default:
      return "Error";
  }
}

function roundResult(num) {
  return Math.round(num * 10**7) / 10**7;
}

