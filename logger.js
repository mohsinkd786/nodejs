var url = 'http://mylogger.io/log';
function log(message){
	// send the message to the above url
	console.log(message);
}

module.exports.log = log;
//module.exports.url = url;

