const userData = require('./security-data').user
const authorize = (rq,rs,next)=>{
    // validate in case
    // Authorization Header is missing
    if (!rq.headers.authorization || rq.headers.authorization.indexOf('Basic ') === -1) {
        return rs.status(401).json({ message: 'Missing Authorization Header' });
    }
    // basic authentication
    const base64Credentials = rq.headers.authorization.split(' ')[1];
    const [_user,_pass] = Buffer.from(base64Credentials,'base64').toString().split(':');
    // incase the credentials are valid allow access
    if(_user == userData.uname && _pass == userData.pass){
        next()
    }else{
        // else reject & redirect to un authorize endpoint
        rs.redirect('/unauthorize')
    }
}
module.exports.authorize = authorize