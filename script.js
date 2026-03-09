const input = document.querySelector('#input')
const operationArray = [];

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
  if (b === 0) return NaN;
  return a / b;
}

function operate(a, b, operator) {
  if (operator == "+") {
    return add(a, b);
  } else if (operator == "-") {
    return subtract(a, b);
  } else if (operator == "*") {
    return multiply(a, b);
  } else if (operator == "/") {
    return divide(a, b);
  }
}

function displayResult() {
  if (operationArray.length != 0) {
    input.value = '';
    input.placeholder = operationArray[0];
  } else {
    input.value = '0';
  }
}

function calculateArray() {
  let a, b, operator;
  let result;
  if (operationArray.length == 3 && '+-*/'.includes(operationArray[2])) {      
    operationArray.shift();
  } 
  
  if (operationArray.length >= 3) {
    a = Number(operationArray[0]);
    b = Number(operationArray[2]);
    operator = operationArray[1];
    result = operate(a, b, operator);
    operationArray.splice(0, 3, String(result));
  } 
}

document.querySelectorAll('.number-btn')
  .forEach(button => {
    button.addEventListener('click', () => {
      if (input.value != '0') {
        input.value += button.textContent;
      } else {
        input.value = '';
        input.value += button.textContent;
      }
    })
  })

document.querySelectorAll('.operator-btn')
  .forEach(operatorBtn => {
    operatorBtn.addEventListener('click', () => {
      // check if an operator was click again.
      if (input.value != '') {
        operationArray.push(input.value);
        operationArray.push(operatorBtn.value);
      } else {
        // change the previous operator to new one ['1', '+'] -> ['1', '-']
        operationArray[1] = operatorBtn.value;
      }
      calculateArray();
      displayResult();
      console.log(operationArray);
    })
  })

document.querySelector('#equal-btn')
  .addEventListener('click', () => {
    if (operationArray.length == 2 && input.value != '') {
      operationArray.push(input.value);
    }
    calculateArray();
    displayResult();
    console.log(operationArray);
  })

document.querySelector('#clear-btn')
  .addEventListener('click', () => {
    operationArray.length = 0;
    displayResult();
  })

document.querySelector('#backspace-btn')
  .addEventListener('click', () => {
    console.log(operationArray);
    console.log('erase');
  })

document.querySelector('#negative-btn')
  .addEventListener('click', () => {
    console.log('negative');
  })

document.querySelector('#decimal-btn')
  .addEventListener('click', () => {
    console.log('dot');
  })