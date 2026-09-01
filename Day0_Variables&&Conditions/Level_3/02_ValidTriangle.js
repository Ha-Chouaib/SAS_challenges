/*
Declare three variables representing the angles of a triangle.
 Check if they form a valid triangle (all three add up to exactly 180, and no angle is 0 or less).
*/

let angle1 = 60;
let angle2 = 60;
let angle3 = 60;

function isPositiveAngles(angle1,angle2,angle3)
{
    return angle1 > 0 && angle2 > 0 && angle3 > 0;
}

function AreAllAnglesEqual180 (angle1,angle2,angle3)
{
    return angle1 + angle2 + angle3 === 180;

}

function isValidTriangle(angle1,angle2,angle3)
{
    return isPositiveAngles(angle1,angle2,angle3) &&  AreAllAnglesEqual180(angle1,angle2,angle3);
}

function CheckTriangleValidation()
{
    console.log(`is the triangle with angles: ${angle1} ${angle2} ${angle3} Valid: << ${isValidTriangle(angle1,angle2,angle3)} >>`);

}
CheckTriangleValidation();