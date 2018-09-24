const cal = require('./calculator');
const calcObj = new cal.Calculator();


let a = parseInt(process.argv[2] || 10);
let b = parseInt(process.argv[3] || 2);

const sum = calcObj.add(a,b);
const diff = calcObj.subtract(a,b);
const product = calcObj.multiply(a,b);

console.log(`Sum : ${sum} , Difference : ${diff} , Product : ${product}`);
