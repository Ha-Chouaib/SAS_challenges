//Write a function that checks if a string is a palindrome (reads the same backwards and forwards).

function isPalindrom(str)
{
    let size = str.length -1;

    for(let i = 0; i < str.length; i ++)
    {
        if(str[i] != str[size]) return false;

        size --;
    }
    return true;
}

function checkPalindromString()
{
    let Palstr = "abcba";
    let NonPalstr = "abcbae";

    console.log(`is << ${Palstr} >> Palindrom: [${isPalindrom(Palstr)}]`);
    console.log(`is << ${NonPalstr} >> Palindrom: [${isPalindrom(NonPalstr)}]`);

}
checkPalindromString();