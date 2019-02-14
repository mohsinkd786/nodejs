const EventEmitter = require('events');
const emitter = new EventEmitter();

//register a listener
emitter.addListener('eventSystem',function(event){
	console.log('Event System Listener ',event);
});

// raise an event
emitter.emit('eventSystem',{ id: 1, name : 'Mohsin'});
//console.log(emitter);
