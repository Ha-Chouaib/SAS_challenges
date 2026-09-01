
const nationalNo = "BE654328";
const employeeID = 1;
const Name = "chouaib Hadadi";
let Salary = 9999;
const bonus = 444;

function empoyeeWithOldSalary()
{
    console.log("\t\t************Old Salary*************\n");
    console.log(`Full Nam: ${Name} `);
    console.log(`ID: ${employeeID} `);
    console.log(`NationalNo: ${nationalNo} \n`);
    console.log(`\nSalary: ${Salary}`);
}
function empoyeeWithNewSalary()
{
    Salary += bonus;

    console.log("\n\t\t************New Salary*************\n");
    console.log(`Full Nam: ${Name} `);
    console.log(`ID: ${employeeID} `);
    console.log(`NationalNo: ${nationalNo} \n`);
    console.log(`\nSalary + bonus: ${Salary}`);
}

empoyeeWithOldSalary();
empoyeeWithNewSalary();
