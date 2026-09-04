// Write a function that compresses repeating characters (e.g., "aaabbc" becomes "a3b2c1").

function removeStringDuplicates(str)
{
    let s = "";

    for(let i = 0; i < str.length; i ++)
    {
        if(!s.includes(str[i])) s+= str[i];
    }
    return s
}

function displayResults()
{
    let str = "aaabbbcc";
    let compressed = removeStringDuplicates(str);

    console.log(str);
    console.log(compressed);
}

displayResults();