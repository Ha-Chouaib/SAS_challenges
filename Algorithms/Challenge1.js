

function isPrime(num)
{
    return num % 2 === 0
}

function afficherPairs(num)
{
    for(let i = 1; i <= num; i++)
    {
        if(isPrime(i))
            console.log(i);
    }
}

afficherPairs(10);
