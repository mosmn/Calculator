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

git commit -m "created a element that will display the value of first operand"
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
const displayResult = (result) => {
    console.log(result);
    return result;
    }

//7) make Ans a variable that stores the result of the previous calculation
let Ans = displayResult(add(2, 3));
console.log(Ans);

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
        num1 = Number(operand1.textContent);
        console.log(add(num1, 3));
    }
}

buttons.forEach(button => button.addEventListener('click', displayOperand1));

//2) create a element that will display the operator only if first operand is entered
const operator = document.createElement('div');
const displayOperator = (e) => {
    operator.classList.add('operator');
    if (e.target.classList.contains('operator')) {
        if (operand1.textContent) {
            operator.textContent += e.target.textContent;
            input.appendChild(operator);
        }
    }
}

buttons.forEach(button => button.addEventListener('click', displayOperator));

//3) create a element that will display the value of second operand only if operator is entered
const operand2 = document.createElement('div');
const displayOperand2 = (e) => {
    operand2.classList.add('operand2');
    if (e.target.classList.contains('operand')) {
        if (operator.textContent) {
            operand2.textContent += e.target.textContent;
            input.appendChild(operand2);
        }
    }
}

buttons.forEach(button => button.addEventListener('click', displayOperand2));











    



