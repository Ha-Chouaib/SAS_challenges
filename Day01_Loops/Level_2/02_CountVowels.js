/*
    Count Vowels (Loop): Declare a string variable. 
    Use a for loop to iterate over each character of the string and count how many vowels (a, e, i, o, u) it contains.
*/ 

 let vawel = "aeiou"
function isVawel(char)
{
    return (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" );
}

function countVawels(txt)
{
    let count =0;

    for ( let char of txt)
    {
        if(isVawel(char))
        {
            count ++;
        }
    }
    return count;
}

function HowManyVawels(txt)
{
    console.log(`The string has : (${countVawels(txt)}) vawels.`);
}
let txt = "Chouaib Hadadi";

HowManyVawels(txt);
