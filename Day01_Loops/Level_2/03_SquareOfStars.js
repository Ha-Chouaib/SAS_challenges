/*

Square of Stars: Use nested loops to print a 5x5 square of asterisks (*) in the console.

*/ 

function PrintSquareOfStars()
{
    let row = "";
    for(let i =0; i < 5; i ++)
    {   
        row = "";
         for(let j =0; j < 5; j ++)
        {
             row += "* ";
            
        }
        
        console.log(row);
        
    }
}
PrintSquareOfStars();