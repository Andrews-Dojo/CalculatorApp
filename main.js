const add = (a,b) => a+b;

const subtract = (a,b) => a-b;

const multiply = (a,b) => a*b;

const divide = (a,b) => a/b;

let num1;
let num2;
let oper;

function operate(oper,num1,num2) {
    return oper(num1,num2);
}