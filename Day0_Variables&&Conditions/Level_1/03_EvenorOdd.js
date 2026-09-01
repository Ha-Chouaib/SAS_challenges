//Declare a variable number. Use the modulo operator (%) and an if/else statement to check if the number is even or odd, and log the result.

let num = 4;

function isEven(num)
{
    if(num % 2 === 0) return true;

    return false;
}

function checkEvenOrOdd(num)
{
     if(isEven(num))
        console.log(`${num} is an even number`);
    else
    {
        console.log(`${num} is an odd number`);

    }
}
checkEvenOrOdd(num);