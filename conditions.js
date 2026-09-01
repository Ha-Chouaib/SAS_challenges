
let driverName = "Chouaib Hadadi";
let Age = 23;

const minAcceptedAge = 18;
let hasDrivingLecense = true;

if(Age >= minAcceptedAge && hasDrivingLecense)
    console.log(`${driverName} hired`);
else
    console.log(`${driverName} rejected`);


let studentName = "Adam";
let studentMark = 90;


function StudentResult( )
{
    console.log("\n_________Student Mark _________")
   if(studentMark >= 90) console.log(`${studentName} has A mark`);
   else if(studentMark >= 70) console.log(`${studentName} has B mark`);
   else if(studentMark >= 50) console.log(`${studentName} has C mark`);
   else if(studentMark < 50) console.log(`${studentName} has D mark (Failed)`);

}





const addMode = 1;
const UpdateMode = 2;

let mode = UpdateMode;

function performApplicationMode()
{
    console.log("\n_________Application Mode _________")

    switch(mode)
    {
        case addMode : console.log("The application is in add state you can add more users");
        break;
        case UpdateMode : console.log("the application is in update mode you can modify feilds");
        break;
        default: console.log("The Application is Busy please wait a while until the mode changes");
    }
}

StudentResult();
performApplicationMode();


