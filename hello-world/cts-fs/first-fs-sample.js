const fs = require('fs');
let fsData = '';
// asynchronous way
fs.readFile('sample.txt',(err,data)=>{
    if(err)
        return console.error(err);
    else{
        //console.log(data.toString());
        fsData = data.toString();
        //console.log(data.toString());
        console.log(`Sample Data Inside readFile() is ${fsData}`);  
    }  
});
//console.log(`Sample Data is ${fsData}`);

// synchronous way
fsData = fs.readFileSync('sample.txt');
//console.log('Sync Data is ',fsData.toString());

// write data to the file
let msg = 'Finally working with files is easy';
fs.writeFile('sample.txt',msg,(err)=>{
    if(err)
        return console.error(err);
});

//read sample.txt file
fs.readFile('sample.txt',(err,res)=>{
    console.log(res.toString());
});

// delete a file
/*fs.unlink('sample.txt',(err)=>{
    if(err)
        console.error(err);
});*/
//create a directory
fs.mkdir('/tmp/dummy',(err)=>{
    if(err)
        console.error(err);
});

