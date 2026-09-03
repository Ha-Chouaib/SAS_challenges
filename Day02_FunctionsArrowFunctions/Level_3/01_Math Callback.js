/*
Write a higher-order function calculate(a, b, operation) where operation is a callback function.
 Call it twice passing different arrow functions for addition and subtraction.
*/

function calculate(num1, num2, operation)
{
    return operation(num1,num2);
}

let num1 = 3;
let num2 = 5;

let additionResult = calculate(num1, num2, (n1,n2) => n1 + n2);