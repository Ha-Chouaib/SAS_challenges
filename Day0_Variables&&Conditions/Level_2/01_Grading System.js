/*
 Declare a variable score (0-100). Use if/else if/else statements to log "A" for 90-100,
"B" for 80-89, "C" for 70-79, and "F" for anything below 70.

*/ 

function IsBetweenRange(num,from,to)
{
    return (num >= from && num <= to);
}

let score = 98;

function ApplayGrade()
{

    if(IsBetweenRange(score,90,100)) console.log("A")
    else if(IsBetweenRange(score,80,89)) console.log("B")
    else if(IsBetweenRange(score,70,79)) console.log("C")
    else console.log("D")

}
ApplayGrade();