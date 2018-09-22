const fs = require('fs');
fs.readdir('./',function(err,result){
	if(err){
		console.log('Error ',err);	
	}else{
		console.log(result);
	}
});
