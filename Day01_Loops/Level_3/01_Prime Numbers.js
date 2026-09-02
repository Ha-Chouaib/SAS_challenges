/*
Prime Numbers: Use a loop to find and log all prime numbers between 1 and 50.
 (A prime number is only divisible by 1 and itself).
*/

function isPrime(num) {

    if (num < 2 || num % 1 !== 0) {
        return false;
    }

        let half = Math.floor(num / 2);

    for (let i = 2; i < half; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

function logPrimeNumbers()
{
    for(let i = 0; i < 30; i++)
    {
        if(isPrime(i))
            console.log(`${i} -> Prime`)
        else
            console.log(`${i} -> Not Prime`)
    }
}
logPrimeNumbers();