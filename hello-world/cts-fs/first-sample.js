const pi=3;
radius = 3;
const area = pi * radius * radius;

// import os module
const os = require('os');

console.log('AREA IS ',area);
console.log('Total Memory ',os.totalmem);
console.log('Remaining Memory',os.freemem);
//console.log('No. of CPUs',os.cpus());

// import myCalc classes & methods
const myCalc = require('./myCalc');
const calc = new myCalc.Calculator;
const sum = calc.add(10,2);
console.log('Sum is ',sum);
console.log('Difference is ',calc.subtract(10,2));

console.log(`Sum is ${sum}`);

// call message method from myCalc
myCalc.message('Received');
//console.log(module.exports);

