// import the events module
const events = require('events');
const emitter = new events.EventEmitter();

// user handler
const userListener=(user)=>{
    console.log(user);
}
// active user handler
const activeUserListener=(user)=>{
   console.log('User Status is ',user.status);
   console.log('Address is ',user.address);
}

// user listener
emitter.addListener('userListener',userListener);

// user listener
emitter.on('activeUserListener',activeUserListener);

emitter.emit('userListener',
{
    username: 'Mohsin',
    password: 'pass@123',
    email: 'xyz@gmail.com',
    phone: 12344,
    status: true
});

emitter.emit('activeUserListener',
{
    username: 'Mohsin',
    password: 'pass@123',
    email: 'xyz@gmail.com',
    phone: 12344,
    status: true
});

emitter.emit('activeUserListener',
{
    username: 'Mohsin1',
    password: '1123',
    email: 'gmail.com',
    phone: 7896,
    address:{
        street: 'Baker Street',
        city: 'London',
        zip: 112
    },
    status: false
});


// get list of listeners

console.log('Listeners ',events.EventEmitter.listenerCount(emitter,'userListener'));


// remove a listener

emitter.removeListener('activeUserListener',activeUserListener);

emitter.emit('activeUserListener',{
    status: false
});