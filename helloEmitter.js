// import the events module
const events = require('events');
const emitter = new events.EventEmitter();

// listener 
emitter.addListener('testListener',(e)=>{
    console.log('Hello test listener',e);
});

// event 1
emitter.emit('testListener','Hello Message');
// event 2
emitter.emit('testListener','Hi');

