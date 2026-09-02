/*
Right-Angled Triangle: Use nested for loops to draw a right-angled triangle of stars in the console (height of 5).

*/

function rightAngledTriangle()
{

    let row = "";

    for(let i = 0; i < 5 ; i++)
    {
        row = "";
        for(j = 0; j <= i ; j++)
        {
            row +="*";
        }
        console.log(row);
    }

}
rightAngledTriangle();