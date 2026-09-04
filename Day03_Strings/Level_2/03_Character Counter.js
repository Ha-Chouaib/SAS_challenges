// Write a function countChar(str, char) that counts how many times a specific character appears in a string.

function countChar(str,char)
{
    let count=0;

    for(let i=0; i < str.length; i++)
    {
        if(str[i].toLocaleUpperCase() === char.toLocaleUpperCase()) count ++;
    }

    return count;
}

function displayCharCount()
{
    let str = "chouaib Hadadi";
    let char = "h"

    console.log(`How many << ${char} >> in << ${str} >>: [${countChar(str,char)}] `);
    
}
displayCharCount();