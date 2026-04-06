const firstNumber = 0;
const secondNumber = 0;
const operator = "";
let result;



function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, firstNum, secondNum) {
  switch (operator) {
    case "+":
      result = add(firstNum, secondNum);
      break;

    case "-":
      result = substract(firstNum, secondNum);
      break;

    case "*":
      result = multiply(firstNum, secondNum);
      break;

    case "/":
      result = divide(firstNum, secondNum);
      break;
  
    default:
      result = 0;
      break;
  }
}

operate("/", 10, 4);

console.log(result);