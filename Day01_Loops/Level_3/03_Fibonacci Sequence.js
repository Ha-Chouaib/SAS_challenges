/*
Fibonacci Sequence: Use a loop to print the first 10 numbers of the Fibonacci sequence (0, 1, 1, 2, 3, 5, 8...).

*/ 
let fibo = "0, 1";


function CollectFiboSequence()
{
    let sum = 0;
    let prevNum1 =1;
    let prevNum2 =0;
    for(let i = 2;i < 10 ; i++)
    {   
        sum = prevNum1 + prevNum2;
        fibo += `, ${sum}`; 
        prevNum2 = prevNum1;
        prevNum1 = sum;
       
    }

    console.log(fibo);
}

CollectFiboSequence();