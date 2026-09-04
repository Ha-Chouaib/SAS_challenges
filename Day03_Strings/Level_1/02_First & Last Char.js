// Write a function that takes a string and logs its first and last characters.

let str = "what ever";


function getFirstLastChars(str)
{
    let firstChar = str[0];
    let lastChar = str[str.length -1];

    return firstChar +" "+ lastChar; 
}

console.log(`the first and the Last Chars of ${str}: [${getFirstLastChars(str)}]`);