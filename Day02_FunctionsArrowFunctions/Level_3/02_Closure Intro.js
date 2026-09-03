/*
Write a function createMultiplier(multiplier) that returns a new arrow function.
 The returned function should take a number and multiply it by the original multiplier.
*/

function createMultiplier(multiplier)
{
    return {
        mutiply: (num) => num * multiplier 
    };
}

let multiplyNumber = createMultiplier(2);

function showResult()
{
    console.log(multiplyNumber.mutiply(5));
}

showResult();
