// Write a function that compresses repeating characters (e.g., "aaabbc" becomes "a3b2c1").

function compressor(str)
{
    let count = 1;
    let prev = str[0];
    let result = "";

   for(let i = 0; i < str.length; i++)
   {


        if( str[i + 1] === prev )
        {
            count ++;
        }else
        {
            result+= prev + count;
            count =1;

        }
        prev = str[i + 1];
   }
   return result;
}

function displayResults()
{
    let str = "aaabbbcc";
    let compressed = compressor(str);

    console.log(str);
    console.log(compressed);
}

displayResults();