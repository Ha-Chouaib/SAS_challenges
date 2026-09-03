//Write a function celsiusToFahrenheit(c) that converts Celsius to Fahrenheit and returns the result. Formula: (C * 9/5) + 32

function celsiusToFahrenheit(c) 
{
    return ( c * (9/5)) +32;
}

let celsius = 34;

let fahrenheit = celsiusToFahrenheit(celsius);

function displayCelsiusToFahrValue(celsius,fahrenheit)
{
    console.log(`[${celsius}] (Celsius) <==> [${fahrenheit}] (Fahrenheit)`);
}
displayCelsiusToFahrValue(celsius,fahrenheit);