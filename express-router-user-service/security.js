const userData = require('./security-data').user
const authorize = (rq,rs,next)=>{
    if(rq.header('username') == userData.uname && rq.header('password') == userData.pass){
        next()
    }else{
        rs.redirect('/unauthorize')
    }
}
module.exports.authorize = authorize