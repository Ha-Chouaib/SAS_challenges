// Write a function factorial(n) that uses a loop inside it to calculate and return the factorial of n.

const factorial = function (num) 
{
    let fac = 1;

    for(let i = num; i >= 1; i --)
    {
        fac *= i;
    }
    return fac;
} 

console.log(factorial(5));
  