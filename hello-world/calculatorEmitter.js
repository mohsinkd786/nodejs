const events = require('events')
const emitter = new events.EventEmitter()
const calc = require('./Calculator')

const args = require('yargs').argv;

const toString = (msg)=>{
    return msg.id +' ,'+msg.fname+' ,'+msg.lname
}
const toJSON = (_id,_fname,_lname)=>{
    return {
        id: _id,
        fname: _fname,
        lname:_lname
    }
}
emitter.addListener('messageListener',(msg)=>{
    msg = toString(msg)
    console.log(msg)

})
// generate string message from object
emitter.emit('messageListener',{
    id: 1,
    fname: 'John',
    lname: 'Constantine'
})
const toJSONL =(msg)=>{
    _json = toJSON(msg[0],msg[1],msg[2])
    console.log(_json)
}
// convert command line array into JSON
emitter.addListener('toJSONListener',toJSONL)

emitter.emit('toJSONListener',[
    args.id,
    args.fname,
    args.lname
])

emitter.removeListener('toJSONListener', toJSONL)

emitter.emit('toJSONListener',[
    args.id,
    args.fname,
    args.lname
])
const lightsOnListener = (e)=>{
    console.log(e)
}
emitter.on('lightsOnListener',lightsOnListener)
emitter.emit('lightsOnListener','Lights On')
emitter.emit('lightsOnListener','Lights Off')

const _calculate = (_data)=>{
    let result = 0
    switch(_data.action){
        case 'SUM':
            result = calc._sum(_data.first,_data.next)
            break
        case 'DIFF':
            result = calc._diff(_data.first,_data.next)
            break
        case 'MUL':
            result = calc._mul(_data.first,_data.next)
            break
        case 'DIV':
            result = calc._div(_data.first,_data.next)
            break
    }
    console.log(_data.action +' = '+ result)
}
emitter.addListener('calculate',_calculate)

emitter.emit('calculate',{
    action : args.action,
    first: parseInt(args.firstNum),
    next: parseInt(args.nextNum)
})

// install yargs module
// npm install yargs
// node calculatorEmitter.js --id=1 --fname=JOHNNY --lname=ENGLISH --action=SUM --firstNum=10 --nextNum=12