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

1) create a element that will display the value of the button that was clicked
END

git commit -m "created Ans variable"
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

//1) create a element that will display the value of the button that was clicked
const display = document.querySelector('.display');
const clac = document.createElement('div');
const displayCalc = (e) => {
    clac.classList.add('clac');
    clac.textContent = e.target.textContent;
    display.insertBefore(clac, display.firstChild);
    }

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', displayCalc));







    



