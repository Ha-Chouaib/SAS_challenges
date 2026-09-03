/*
Write a function filterOddNumbers(arr, callback) where the callback is an arrow function that returns true if a number is odd.
 Use it to filter an array
*/


function filterArray(arr,filter)
{
    return filter(arr);

    
}

function displayArrayElements(arr,size)
{
    let result = "";
    for(let i = 0; i < size; i++)
    {
        result += `${i}, `
    }
    console.log(result);
}

 let filtredArray = (arr) => 
        {
            let result=[];
            let count = 0;

            for( i in arr)
            {
                if( i % 2 !== 0) result[count] = i;
            }
            return  result;
        }

function performFilter()
{
    let arr = [2,3,4,5,8,9,6,1];

    let oddNumbers = filterArray(arr , filterArray );

    console.log("Original Array:");
    displayArrayElements(arr,arr.length);


    console.log("\nOnly Odd Numbers:");
    displayArrayElements(filtredArray,filtredArray.length);

}

performFilter();


