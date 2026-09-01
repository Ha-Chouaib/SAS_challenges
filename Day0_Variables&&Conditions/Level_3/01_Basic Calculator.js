/*
: Declare variables num1, num2, and operator (a string like "+", "-", "*", "/").
 Use a switch statement to perform the correct math operation and log the result.
  Handle division by zero.

*/ 
function Add(num1,num2)
{
    if(num1 == null || num2 == null) return null;

    return num1 + num2;
}
function Sub(num1,num2)
{
    if(num1 == null || num2 == null) return null;
    return num1 - num2;
}
function mult(num1,num2)
{
    if(num1 == null || num2 == null) return null;
    
    return num1 * num2;
}
function Div(num1,num2)
{
    if(num1 == null || num2 == null) return null;
    
    if(num2 == 0) return 0;
    return num1 / num2;
}

function Calculator(num1,num2,Operator)
{
    switch(Operator)
    {
        case "+": return Add(num1,num2);
        case "-": return Sub(num1, num2);
        case "*": return mult(num1,num2);
        case "/": return Div(num1,num2);
    }

}
function GetOperationName(symbole)
{
    switch(symbole)
    {
        case "+": return "Add";
        case "-": return "Substruct";
        case "*": return "multiply";
        case "/": return "Divid";
    }
}

function makeCalculation()
{
    let num1 = 12;
    let num2 = 2;
    let operator = "*";
    console.log(`${num1} ${GetOperationName(operator)} ${num1} = ${Calculator(num1,num2,operator)}`);
}
makeCalculation();