const add = (a,b) => a+b;

const subtract = (a,b) => a-b;

const multiply = (a,b) => a*b;

const divide = (a,b) => a/b;

let num1;
let num2;
let oper;
let displayVal = '';

function operate(oper,num1,num2) {
    return oper(num1,num2);
}

const btnNum = document.querySelectorAll('.btnNum');
const display = document.querySelector('#display');

// Stores value for each number button in displayVal;

btnNum.forEach(button => {
    const val = button.textContent;
    button.addEventListener('click', () =>{
        displayVal += val;
        display.textContent = displayVal;
    } )
})