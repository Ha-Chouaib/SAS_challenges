//Write a function that takes a sentence and capitalizes the first letter of every word

function isLetter(char)
{
    return /^[a-zA-Z]$/.test(char);
}

function capitalizeFirstLetterOfWord(str)
{
    let result =str[0].toLocaleUpperCase();

    

    for(let i = 1; i < str.length; i++)
    {

        if( (str[i - 1 ] === " " &&  isLetter(str[i] ) ) )
        {
            result+= str[i].toLocaleUpperCase();
        }else
        {
            result+=str[i];
        }
        
    }

    return result;
}

function displayResults()
{

    let str = "the best think ever is to be your self";

    let mutedStr = capitalizeFirstLetterOfWord(str);

    console.log(str);
    console.log(mutedStr);
}
displayResults();