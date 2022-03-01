const numberButtons = document.querySelectorAll('.number');
const display = document.querySelector('#output');
const operators = document.querySelectorAll('.operator');
const clearButton = document.querySelector('#clear');
const percentageButton = document.querySelector('#percentage')
const posNegButton = document.querySelector('#posNeg');
const decimalButton = document.querySelector('#decimal');
const equalsButton = document.querySelector('#equals')

const buttons = document.getElementsByTagName("button");
for (const button of buttons){
    button.addEventListener("click", createRipple);
}

let displayValue = "";
let currentNumber = "";
let prevOperator = "";

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
  prevOperator = "";
  displayValue = "";
}
// adds events onto each number, when clicked called populateDisplay
numberButtons.forEach(button => {
  button.addEventListener('click', populateDisplay)
});

// populates display with the button press, adds additional presses to displayValue
function populateDisplay() {
  document.querySelector('#clear').innerHTML = "C";
  (!displayValue) ? (displayValue = this.textContent) : (displayValue += this.textContent)
  display.textContent = displayValue;
}

operators.forEach(button => {
  button.addEventListener('click', () => {
    // if a number and operator is stored operate
    if(currentNumber && prevOperator){
      operate(prevOperator, Number(currentNumber), Number(displayValue));
      
    }
    // if two numbers are stored without an operator store the number and reset the previous
    else if (!prevOperator && currentNumber && displayValue){
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
    prevOperator = button.id
  });
});

// call the operate function
equalsButton.addEventListener('click', () => {
  operate(prevOperator, Number(currentNumber), Number(displayValue));
})

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
    displayValue = Number(displayValue) / 100;
    display.innerText = displayValue;
  } else{
    currentNumber = Number(currentNumber) / 100;
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
  prevOperator = "";
  document.querySelector('#clear').innerHTML = "AC";
});

// ripple on click function from css tricks
function createRipple(event) {
  const button = event.currentTarget;

  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
  circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
  circle.classList.add("ripple");

  const ripple = button.getElementsByClassName("ripple")[0];

  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
}