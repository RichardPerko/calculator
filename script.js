const numberButtons = document.querySelectorAll('.number');
const display = document.querySelector('#output')

let displayValue = "";
let currentNumber = "";
let operator = "";

numberButtons.forEach(button => {
  button.addEventListener('click', populateDisplay)
});

function populateDisplay() {
  (!displayValue) ? (displayValue = this.textContent) : (displayValue += this.textContent)
  display.textContent = displayValue;
}


function operate(a, b, operator){
    switch (operator){
      case "+" :
        totalNum = parseInt(a) + parseInt(b);
        display(totalNum);
        return(totalNum);
      case "-" :
        totalNum = parseInt(a) - parseInt(b);
        display(totalNum);
        return(totalNum);
      case "*" : 
      totalNum = parseInt(a) * parseInt(b);
      display(totalNum);
      return(totalNum);
      case "/" :
        totalNum = parseInt(a) / parseInt(b);
        display(totalNum);
        return(totalNum);
    }
}