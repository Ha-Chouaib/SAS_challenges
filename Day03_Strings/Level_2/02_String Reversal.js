//Write a function that takes a string and returns it reversed without using the built-in array .reverse() method.

function reverseString(str)
{
    let reversed = "";

    for(let i = str.length - 1; i >= 0 ; i--)
    {
        reversed+=str[i]
    }
    return reversed;

}

function displayResults()
{
    let normalStr = "hello my nigga";
    let reversed = reverseString(normalStr);

    console.log(normalStr);
    console.log(reversed);
}
displayResults();
