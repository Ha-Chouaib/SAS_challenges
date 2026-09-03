
function isPrime(num)
{
    return num % 2 === 0
}



function compterPairs(nbr1,nbr2)
{
    let sum = 0;
    let primeCounter = 0;
    for(let i = nbr1; i <= nbr2; i++)
    {

         sum += nbr1 + nbr2 + i;

            if(isPrime(sum))
            {
                primeCounter ++;
            }
    }

    return primeCounter;
}

console.log(compterPairs(2,6));