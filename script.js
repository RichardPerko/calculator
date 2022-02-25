const numberButtons = document.querySelectorAll('.number');
const display = document.querySelector('#output');
const operators = document.querySelectorAll('.operator');
const clearButton = document.querySelector('#clear');
const percentageButton = document.querySelector('#percentage')
const posNegButton = document.querySelector('#posNeg');
const decimalButton = document.querySelector('#decimal');
const equalsButton = document.querySelector('#equals')

let displayValue = "";
let currentNumber = "";
let operatorCurrent = "";

// adds events onto each number, when clicked called populateDisplay
numberButtons.forEach(button => {
  button.addEventListener('click', populateDisplay)
});

// populates display with the button press, adds additional presses to displayValue
function populateDisplay() {
  (!displayValue) ? (displayValue = this.textContent) : (displayValue += this.textContent)
  display.textContent = displayValue;
}

operators.forEach(button => {
  button.addEventListener('click', () => {
    // if a number and operator is stored operate
    if(currentNumber && operatorCurrent){
      operate(operatorCurrent, Number(currentNumber), Number(displayValue));
    }
    // if two numbers are stored without an operator store the number and reset the previous
    else if (!operatorCurrent && currentNumber && displayValue){
      currentNumber = displayValue;
      displayValue = "";
    }
    // if current number exists reset display for the next number
    else if (currentNumber){
      displayValue = "";
    }
    else {
    // if no values are stored, store displayValue to current number, reset display value
      currentNumber = Number(displayValue)
      displayValue = "";
    }
    // stores operator based on button press
    operatorCurrent = button.id
  });
});

// call the operate function
equalsButton.addEventListener('click', () => {
  operate(operatorCurrent, Number(currentNumber), Number(displayValue));
})

// performs calculations and displays them
function operate(operator, a, b){
    switch (operator){
      case "add" :
        display.textContent = a + b
        break;
      case "subtract" :
        display.textContent = a - b
        break;
      case "multiply" : 
        display.textContent = a * b
        break;
      case "divide" :
        display.textContent = a / b
        break;
    }

    // stores current number and resets other
    currentNumber = display.textContent;
    operatorCurrent = "";
    displayValue = "";
  }

  // if there is a display value make it negative, if number is stored in currentNumber make it negative
posNegButton.addEventListener('click', () => {
  if (displayValue) {
    displayValue = Number(displayValue) * -1;
    display.innerText = displayValue;
  } else {
    currentNumber = Number(currentNumber) * -1;
    display.innerText = currentNumber;
  }
});

// if there is a display value divide by 100, if number is stored in currentNumber divide by 100
percentageButton.addEventListener('click', () => {
  if(displayValue){
    displayValue = number(displayValue) / 100;
    display.innerText = displayValue;
  } else{
    currentNumber = number(currentNumber) / 100;
    display.innerText = currentNumber;
  }
})

// if there is no display value, displayValue = ".", if there is a display value add "." to it
// store the result
decimalButton.addEventListener('click', () => {
  if(displayValue.toString().indexOf('.') === -1){
    (!displayValue) ? (displayValue = ".") : (displayValue += ".")
      }
    display.textContent = displayValue
    });

// clear all values and operators
clearButton.addEventListener('click', () =>{
  display.innerText = 0;
  displayValue = "";
  currentNumber = "";
  operatorCurrent = "";
});