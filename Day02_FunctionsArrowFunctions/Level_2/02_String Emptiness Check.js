// Write an arrow function isEmpty(str) that returns true if a string is empty or contains only spaces, and false otherwise.

const isEmpty = str => str.length === 0 ? true : false ;



DisplayMessage("We can call the function declaration even above its implementation this because of [Hiosting]");

function DisplayMessage(msg)
{
    
    
    if(isEmpty(msg))
    {
        console.log("please enter a non, empty string")
        return;
    }

    console.log(msg)
}
DisplayMessage("");
DisplayMessage(" ");


