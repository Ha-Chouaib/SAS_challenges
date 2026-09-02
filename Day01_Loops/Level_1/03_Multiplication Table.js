/*
    Multiplication Table: Choose a number (e.g., 5).
     Use a for loop to print its multiplication table from 1 to 10 (e.g., "5 x 1 = 5", "5 x 2 = 10").

*/

function Header(num)
{
    console.log("**************************************\n");
    console.log(`____Multiplication Table For the number [ ${num} ] ____`);
    console.log("\n**************************************");
}
function TableBody(num)
{
    for(let i = 1; i <= 10; i++)
    {
        console.log(`${num} x ${i} = ( ${num * i } ).\n`);

    }
}

function MultiplicationTableFor(num)
{
    Header(num);
    TableBody(num);


}
let num = 2;

MultiplicationTableFor(num);