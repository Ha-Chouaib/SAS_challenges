/*
    Declare variables for weight (kg) and height (m). Calculate the BMI (weight / (height * height)).
    Log the BMI along with a category: "Underweight" (<18.5), "Normal" (18.5-24.9), or "Overweight" (>=25).
*/
let weight = 75;
let height = 1.90;

const Underweight =18.5;
const Normal = 18.5-24.9;
const Overweight = 25;

function CalcBMI(weight, height)
{
    return (weight / (height * weight));
}

function CategoriesBMI(BMI)
{
    switch(BMI)
    {
        case Underweight : console.log(`The Person with weight:[${weight}] and height:[${height}] is <<Underweight>>`); break;
        case Normal : console.log(`The Person with weight:[${weight}] and height:[${height}] is <<Normal>>`); break;
        case Overweight : console.log(`The Person with weight:[${weight}] and height:[${height}] is <<Overweight>>`); break;
    }
}

CategoriesBMI( CalcBMI (weight,height));
