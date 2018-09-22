// global objects
// console.log
// setTimeout()
// clearInterval()
// setInterval()
// clearTimeout()
// no window object 
// global object
// global.console.log();

var message = 'Hello World';
// console.log(module);
// use logger module
// const or var avoid overriding  
const logger = require('./logger');
const os = require('os');

console.log(logger);
logger.log('app.js file');
var sysMemory = os.totalmem;

console.log(`System Memory ${sysMemory}`);

const EventEmitter = require('events');
const emitter = new EventEmitter();
const MyClass = require('./myClass');
const myClassObj = new MyClass();

myClassObj.execute('My class ');