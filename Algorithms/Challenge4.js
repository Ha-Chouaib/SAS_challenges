

function calculer(nbr1, nbr2, callback) {
    return callback(nbr1,nbr2);
}
let num1 = 3, num2 = 4;


let addResult = calculer(num1,num2, (n1,n2) => n1 + n2);
let subResult = calculer(num1,num2, (n1,n2) => n1 - n2);
let divResult = calculer(num1,num2, (n1,n2) => n1 / n2);
let multResult = calculer(num1,num2, (n1,n2) => n1 * n2);

console.log(`${num1} + ${num2} = ${ addResult}`);
console.log(`${num1} - ${num2} = ${ subResult}`);
console.log(`${num1} / ${num2} = ${ divResult}`);
console.log(`${num1} x ${num2} = ${ multResult}`);
