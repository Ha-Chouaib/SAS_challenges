//Write a function that checks if two strings are anagrams of each other (contain the exact same letters in different orders).
function removeStringDuplicates(str)
{
    let s = "";

    for(let i = 0; i < str.length; i ++)
    {
        if(!s.includes(str[i])) s+= str[i];
    }
    return s
}

function areAnagrams(str1,str2)
{
    let compressed1 = removeStringDuplicates(str1);
    let compressed2 = removeStringDuplicates(str2);
     if(compressed1.length !== compressed2.length) return false;

     for(let i =0; i< compressed1.length; i++)
     {
        if( ! compressed1.includes(compressed2[i])) return false;
     }
     return true;
}

function displayResults()
{
    let str1 ="abbcda";
    let str2 = "abccd";

    console.log(`Are << ${str1} >> and << ${str2} >> anagrams: [${areAnagrams(str1,str2)}]`);
}
displayResults();
