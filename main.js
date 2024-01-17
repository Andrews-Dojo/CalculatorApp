// creates functions for math opertaions
const add = (a,b) => a+b;

const subtract = (a,b) => a-b;

const multiply = (a,b) => a*b;

const divide = (a,b) => a/b;



// initilizes variables 
let num1;
let num2;
let oper;
let currentVal = '';
let previousVal = '';
let execute = '';

const btnNum = document.querySelectorAll('.btnNum');
const display = document.querySelector('#display');
const operators = document.querySelectorAll('.btnOp');


// Stores value for each number button in currentVal;
btnNum.forEach(button => {
    button.addEventListener('click', (e) =>{
        handleNumber(e.target.textContent);
        display.textContent = currentVal;
    } )
});

operators.forEach((op) => op.addEventListener('click', function(e){
    handleOperator(e.target.textContent)
    display.textContent = currentVal;
}))

function handleNumber(num) {
    if (currentVal.length <= 5){
        currentVal += num;
    }
}

function handleOperator (op){
    operator = op;
    previousVal = currentVal;
    currentVal = '';

}

// btnOp.forEach(button => {
//     button.addEventListener('click', () => {
//         execute = button.id;
//         if (num1 === undefined) {
//             num1 = displayVal;
//             displayVal = '';
//             // display.textContent = displayVal;
//         } else if (num2 === undefined) {
//             num2 = displayVal;
//             display.textContent = window[execute](num1,num2);
//         }

//     })
// })


