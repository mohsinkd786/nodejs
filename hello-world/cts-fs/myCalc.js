class MyCustomCalc{
 
    add(a,b){
        return a+b;
    }
    subtract(a,b){
        return a-b;
    }   
}
// message
const message = (msg)=>{
    console.log('Message is ',msg);
}
const localMessage=(m1,m2)=>{
    
}
//module.exports.Calculator = MyCustomCalc;
//module.exports.message=message;
module.exports={
    Calculator : MyCustomCalc,
    message : message
}
console.log(module.exports);