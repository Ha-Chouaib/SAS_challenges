
function construireTriangle(taille) {
    
    let row = "";

    for(let i = 0; i < taille ; i++ )
    {
        row ="";
        for(let j = 0; j <= i; j++)
        {
            row +=j;
        }
        console.log(row);
    }

}
construireTriangle(5);