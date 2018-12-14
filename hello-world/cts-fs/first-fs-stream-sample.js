const fs = require('fs');

//create stream
let sampleStream = fs.createReadStream('sample.txt');
let sampleData = '';
// define the decoder
//types of listeners
// data > first event to read data
// end > once all data read
// finish > just to flush/ clean the event system
// error > in case an error was found

sampleStream.setEncoding('UTF8');
// data
sampleStream.on('data',(data)=>{
    //console.log(data);
    sampleData += data;
});

// end
sampleStream.on('end',()=>{
    console.log('End.....',sampleData);
});

//error
sampleStream.on('error',(err)=>{
    console.error(err);
});

//finish
sampleStream.on('finish',()=>{
    //console.log(data);
});

//console.log('Data is ',sampleData);

// create a writer stream
const writer=fs.createWriteStream('writer.txt');
// write to the stream with valid encoding
writer.write('Hello I am writing via Node Stream, Ah! its a relief','UTF8');

// end the stream writes
writer.end();

//finish
writer.on('finish',()=>{
    console.log('Writer has finished writing to file');
});

//error
writer.on('error',(err)=>{
    console.error(err);
});

fs.open('writer.txt','w',(err,data)=>{
    if(err)
        console.error(err);
    fs.write(data,new Buffer('TEST'),data.toString.length,3,(err1)=>{
        console.error(err1);
    });
});

// appending the file
fs.appendFile('writer.txt','\nEnd of file',(err)=>{
    if(err)
        console.error(err);
});
