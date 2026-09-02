/*
    FizzBuzz: Loop from 1 to 50. Log "Fizz" if a number is a multiple of 3, "Buzz" if a multiple of 5, "FizzBuzz" if both, and the number itself otherwise.
*/

function isMultipleFor(num,baseNum)
{
    return ( num % baseNum == 0 ); 
}

const FizzNum = 3; 
const BuzzNum = 5; 


function FizzBuzz(num)
{
    if(isMultipleFor(num,FizzNum) && isMultipleFor(num,BuzzNum))
        {
            console.log(`${num}-> FizzBuzz`);
            return;
        }

    if(isMultipleFor(num,FizzNum))
        {
            console.log(`${num} -> Fizz`);
            return;
        } 
    if(isMultipleFor(num,BuzzNum)) 
        {
            console.log(`${num}-> Buzz`);
            return;

        }

    console.log(`${num} -> No Fizz No Buzz`);
}

function PerformFizzBuzz()
{
    for(let i = 0 ; i <= 50; i++)
    {
        FizzBuzz(i);
    }
}
PerformFizzBuzz();