/*
    Declare three number variables. Write conditions to find and log the largest of the three numbers without using Math.max.
*/

let num1 = 33;
let num2 = 3;
let num3 = 73;

let maxNum = null;

function GetMaxNumber(num1, num2)
{
    return num1 > num2 ? num1 : num2;
}

function DisplayTheMaxNumber()
{
    maxNum = GetMaxNumber(num1,num2);
    maxNum = GetMaxNumber(maxNum,num3);

    console.log(`The Max number between [${num1},${num2},${num3}] is << ${maxNum} >>`);
}
DisplayTheMaxNumber();