const clearBtn = document.querySelector('#clrBtn');
clearBtn.onclick = () => clearScreen();

let currentNum = 0;
let totalNum = 0;
let previousSign
// get values from buttons
function getValue(value){
  // set the current input 
  (currentNum === 0) ? (currentNum = value) : (currentNum = ("" + currentNum + value))

  //display currentNum
  display(currentNum);
}

function getOperator(sign){
  console.log("total",totalNum)
  console.log("current", currentNum)
  console.log(sign)
  if (totalNum === 0){
    totalNum = currentNum;
    currentNum = 0;
  } else {
    currentNum = operate(totalNum, currentNum, previousSign)
    totalNum = 0;
    console.log(totalNum, "total")
  }

  if (sign === "="){
    console.log("working?")
  } else {
    previousSign = sign;
  }
}

function display(output){
  document.getElementById('output').innerHTML = output;
}

function clearScreen(){
  document.getElementById('output').innerHTML = "";
  currentNum = 0;
  totalNum = 0;
}

function addition(a, b){
  totalNum = parseInt(a) + parseInt(b);
  display(totalNum);
  // currentNum = 0;
  return(totalNum);
}

function subtraction(a, b){
  totalNum = parseInt(a) - parseInt(b);
  display(totalNum);
  // currentNum = 0;
  return(totalNum);
}

function mutliplication(a, b){
  totalNum = parseInt(a) * parseInt(b);
  display(totalNum);
  // currentNum = 0;
  return(totalNum);
}

function division(a, b){
  totalNum = parseInt(a) / parseInt(b);
  display(totalNum);
  // currentNum = 0;
  return(totalNum);
}

function operate(a, b, operator){
    switch (operator){
      case "+" :
        return addition(a, b);
      case "-" :
        return subtraction(a, b);
      case "*" : 
        return mutliplication(a, b);
      case "/" :
        return division(a, b);
    }
}