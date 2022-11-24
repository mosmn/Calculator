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
4) create a function that will display the result of the calculation when the equal button is clicked based on the operator
5) make a number negative if the negative button is clicked
6) show the result of the calculation on the top right if any of the operator buttons is clicked

git commit -m "display result of calculation when equal button is clicked and give it class of displayed"
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
        const num1 = Number(operand1.textContent);
        input.appendChild(operand1);
        console.log(num1);
        return num1;
        // add click event listener to operator buttons
        // buttons.forEach(button => button.addEventListener('click', displayOperator));
    }
}

buttons.forEach(button => button.addEventListener('click', displayOperand1));

//2) create a element that will display the operator and remove event listener for operand1
const operator = document.createElement('div');
const displayOperator = (e) => {
    operator.classList.add('operator');
    if (e.target.classList.contains('operator')) {
        if (operand1.textContent) {
            operator.textContent += e.target.textContent;
            input.appendChild(operator);
            buttons.forEach(button => button.removeEventListener('click', displayOperand1));
            buttons.forEach(button => button.removeEventListener('click', displayOperator));
        }
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
            const num2 = Number(operand2.textContent);
            input.appendChild(operand2);
            buttons.forEach(button => button.removeEventListener('click', displayOperator));
            buttons.forEach(button => button.addEventListener('click', showAns));
            console.log(num2);
            return num2;
        }
    }
}

buttons.forEach(button => button.addEventListener('click', displayOperand2));

//4) create a function that will display the result of the calculation when the equal button is clicked based on the operator
const equal = document.querySelector('.equal');
const displayResult = (e) => {
    if (e.target.classList.contains('equal')) {
        const operatorValue = document.querySelector('.operator');
        const operand1Value = document.querySelector('.operand1');
        const operand2Value = document.querySelector('.operand2');
        const showResult = document.querySelector('.result');
        showResult.classList.add('displayed');

        const operand1Number = Number(operand1Value.textContent);
        const operand2Number = Number(operand2Value.textContent);

        if (operatorValue.textContent === '+') {
            const result = add(operand1Number, operand2Number);
            showResult.textContent = result;
            return result;
        } else if (operatorValue.textContent === '-') {
            const result = subtract(operand1Number, operand2Number);
            showResult.textContent = result;
            return result;
        } else if (operatorValue.textContent === '×') {
            const result = multiply(operand1Number, operand2Number);
            showResult.textContent = result;
            return result;
        } else if (operatorValue.textContent === '÷') {
            const result = divide(operand1Number, operand2Number);
            showResult.textContent = result;
            return result;
        }
    }
}

buttons.forEach(button => button.addEventListener('click', displayResult));

//5) make a number negative if the negative button is clicked
const negative = document.querySelector('.neg');
const makeNegative = (e) => {
    if (e.target.classList.contains('neg')) {
        if (operand1.textContent) {
            operand1.textContent = -operand1.textContent;
        } else if (operand2.textContent) {
            operand2.textContent = -operand2.textContent;
        } 
        
        if (operand1.textContent && operand2.textContent) {
            operand1.textContent = -operand1.textContent;
            operand2.textContent = -operand2.textContent;
        }
    }
}

buttons.forEach(button => button.addEventListener('click', makeNegative));

//6) show the result of the calculation on the top right if any of the operator buttons is clicked
const ans = document.querySelector('.ans');
const showAns = (e) => {
    if (e.target.classList.contains('operator')) {
        const result = document.querySelector('.result');

        if (operator.textContent === '+') {
            ans.textContent = add(Number(operand1.textContent), Number(operand2.textContent));
        }
        if (operator.textContent === '-') {
            ans.textContent = subtract(Number(operand1.textContent), Number(operand2.textContent));
        }
        if (operator.textContent === '×') {
            ans.textContent = multiply(Number(operand1.textContent), Number(operand2.textContent));
        }
        if (operator.textContent === '÷') {
            ans.textContent = divide(Number(operand1.textContent), Number(operand2.textContent));
        }
        // copy the ans.textContent to the operand1.textContent and the operator that was clicked to the operator.textContent
        operand1.textContent = ans.textContent;
        operator.textContent = e.target.textContent;
        operand2.textContent = '';
    }
}