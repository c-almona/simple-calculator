function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

let num1;
let num2;
let operator; 

function operate(num1, num2, operator) {
    // code to ensure the operator is a string value
    let stringOperator = String(operator);

    if (stringOperator == '+') {
        return add(num1, num2);
    }
    else if (stringOperator == '-') {
       return subtract(num1, num2);
    }
    else if (stringOperator == '*') {
        return multiply(num1, num2);
    }
    else if (stringOperator == '/'){
        return divide(num1, num2);
    }
}

console.log(operate(3,5,'*'));