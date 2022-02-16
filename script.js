const output = document.querySelector('.output');

function addition(a, b){

}

function subtraction(a, b){

}

function mutliplication(a, b){

}

function division(a, b){

}

function operators(a, b, operator){
    switch (operator){
      case 1: "+"
        addition(a, b);
        break;
      case 2: "-"
        subtraction(a, b);
        break;
      case 3: "*"
        mutliplication(a, b);
        break;
      case 4: "/"
        division(a, b);
        break;
    }
}