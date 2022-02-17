const output = document.querySelector('.output');

function addition(a, b){
  return a + b;
}

function subtraction(a, b){
  return a - b;
}

function mutliplication(a, b){
  return a * b;
}

function division(a, b){
  return a / b;
}

function operate(a, b, operator){
    switch (operator){
      case "+" :
        addition(a, b);
        break;
      case "-" :
        subtraction(a, b);
        break;
      case "*" : 
        mutliplication(a, b);
        break;
      case "/" :
        division(a, b);
        break;
    }
}