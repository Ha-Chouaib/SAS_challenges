// Declare a variable temperature. If the temperature is strictly greater than 30, log "It's hot outside!". Otherwise, log "The weather is nice."

const validTemperature = 30;

function DiscoverWeather(temperature)
{
    if(temperature > validTemperature)
    {
        console.log("Nigga stay at home, it's so hot outside"); return;
    }

    console.log("what a beautiful to go outside, mmm the weather is nice ");
}

let temperature = 25;
DiscoverWeather(temperature);