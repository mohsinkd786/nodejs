
//const usr = new Buffer(100);
// from an array
const usr = Buffer.from([1,2,3,5,6]);
console.log(usr);

// from string
const msg = Buffer.from('Hello world');
console.log(msg);

const msg1 = Buffer.from('Hello world','ascii');
console.log(msg1);

//write to a buffer
 
console.log('The msg buffer has been updated ',msg.write('How are you'));

// Read data from the existing buffer

console.log(msg.toJSON());

// read with the decoding
console.log(msg.toString());

// applying the custom decoder
console.log(msg1.toString('ascii'));

const completeMsg = Buffer.concat([msg,msg1]);
console.log(completeMsg);

console.log('Decoded Message ',completeMsg.toString());

const ij= 'Hello';

console.log(Buffer.isBuffer(completeMsg));

console.log(completeMsg.length);
console.log(completeMsg.byteLength);

const nums = Buffer.alloc(30);
nums[0] =1;
nums[1] = 2;
console.log(nums);
console.log(nums.length);
console.log(nums.byteLength);

//slicing a buffer
const indexes = nums.slice(0,1);
console.log(indexes);

//copying a buffer
const myindexes = Buffer.alloc(30);
nums.copy(myindexes);

console.log('My Indexes ',myindexes);