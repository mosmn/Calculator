/*
PROJECT: create a simple calculator that can add, subtract, multiply, and divide

BEGIN
1) create a function that adds two numbers
2) create a function that subtracts two numbers
3) create a function that multiplies two numbers
4) create a function that divides two numbers
5) create a function that calculates the power of a number
6) create a function that displays the result of the calculation
7) make Ans a variable that stores the result of the previous calculation

TIME TO MANIPULATE THE DOM

1) create a element that will display the value of first operand
2) create a element that will display the operator only if first operand is entered
3) create a element that will display the value of second operand only if operator is entered
4) select operand1 and operand2 and operator and store them in variables
5) convert the value of operand1 and operand2 to numbers
6) create a function that will display the result of the calculation when the equal button is clicked based on the operator

git commit -m "created a function that will display the result of the calculation when the equal button is clicked based on the operator"
*/ 

//1) create a function that adds two numbers
const add = (num1, num2) => {
    return num1 + num2;
    }

//2) create a function that subtracts two numbers
const subtract = (num1, num2) => {
    return num1 - num2;
    }

//3) create a function that multiplies two numbers
const multiply = (num1, num2) => {
    return num1 * num2;
    }

//4) create a function that divides two numbers
const divide = (num1, num2) => {
    return num1 / num2;
    }

//5) create a function that calculates the power of a number
const power = (num1, num2) => {
    return num1 ** num2;
    }

//6) create a function that displays the result of the calculation
// const displayResult = (result) => {
//     console.log(result);
//     return result;
//     }

//7) make Ans a variable that stores the result of the previous calculation
// let Ans = displayResult(add(2, 3));
// console.log(Ans);


// TIME TO MANIPULATE THE DOM


//1) create a element that will display the value of first operand
const input = document.querySelector('.input');
const buttons = document.querySelectorAll('button');

const operand1 = document.createElement('div');
const displayOperand1 = (e) => {
    operand1.classList.add('operand1');
    if (e.target.classList.contains('operand')) {
        operand1.textContent += e.target.textContent;
        input.appendChild(operand1);
        // try to use operand1 as a argument for the add function
    }
}

buttons.forEach(button => button.addEventListener('click', displayOperand1));

//2) create a element that will display the operator and remove event listener for operand1
const operator = document.createElement('div');
const displayOperator = (e) => {
    operator.classList.add('operator');
    if (e.target.classList.contains('operator')) {
        operator.textContent += e.target.textContent;
        input.appendChild(operator);
        buttons.forEach(button => button.removeEventListener('click', displayOperand1));
        buttons.forEach(button => button.removeEventListener('click', displayOperator));
    }
}

buttons.forEach(button => button.addEventListener('click', displayOperator));

//3) create a element that will display the value of second operand and remove event listener for operator
const operand2 = document.createElement('div');
const displayOperand2 = (e) => {
    operand2.classList.add('operand2');
    if (e.target.classList.contains('operand')) {
        if (operator.textContent) {
            operand2.textContent += e.target.textContent;
            input.appendChild(operand2);
            buttons.forEach(button => button.removeEventListener('click', displayOperator));
        }
    }
}

buttons.forEach(button => button.addEventListener('click', displayOperand2));

//4) select operand1 and operand2 and operator and store them in variables
const operand1Value = document.querySelector('.operand1');
const operand2Value = document.querySelector('.operand2');
const operatorValue = document.querySelector('.operator');

//5) convert the value of operand1 and operand2 to numbers
const operand1Number = Number(operand1.textContent);
const operand2Number = Number(operand2.textContent);
// console.log(operand1Number);
// console.log(operand2Number);

//6) create a function that will display the result of the calculation when the equal button is clicked based on the operator
const equal = document.querySelector('.equal');
const displayResult = (e) => {
    if (e.target.classList.contains('equal')) {
        if (operatorValue.textContent === '+') {
            const result = add(operand1Number, operand2Number);
            console.log(result);
        } else if (operatorValue.textContent === '-') {
            const result = subtract(operand1Number, operand2Number);
            console.log(result);
        } else if (operatorValue.textContent === '*') {
            const result = multiply(operand1Number, operand2Number);
            console.log(result);
        } else if (operatorValue.textContent === '/') {
            const result = divide(operand1Number, operand2Number);
            console.log(result);
        } else if (operatorValue.textContent === '^') {
            const result = power(operand1Number, operand2Number);
            console.log(result);
        }
    }
}

buttons.forEach(button => button.addEventListener('click', displayResult));

console.log(operand1Value);

