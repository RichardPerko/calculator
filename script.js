// get values from buttons
function getValue(value){

  // set the current input 
  (currentNum === 0) ? (currentNum = value) : (currentNum = ("" + currentNum + value))

  // display values to html
  document.getElementById('output').innerHTML = currentNum;
  
}

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