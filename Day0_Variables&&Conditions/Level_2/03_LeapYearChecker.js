/*
    Declare a year variable. Write a condition to check if it's a leap year
     (divisible by 4 AND NOT divisible by 100, UNLESS it's divisible by 400). Log true or false.
*/
function isLeapYear(year)
{
        return ((year % 400 == 0 )|| (year % 4 == 0 && year % 100 != 0));

}

let year = 0;

function CheckIsLeapYear(year)
{
    if(isLeapYear)
    {
        console.log(`${year} is a Leap Year`);
        return;
    }
    console.log(`${year} not a leap year`);

}
CheckIsLeapYear(year);