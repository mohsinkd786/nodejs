const fetchUsersWithSalaryInBetween = (users,salaryFrom,salaryTo)=>{
    return users.filter(u=> u.salary >= salaryFrom && u.salary<= salaryTo)
}
const fetchUsersWithSalaryGreater = (users,salaryGreater)=>{
    return users.filter(u=> u.salary >= salaryGreater)
}
const fetchUserById =(users,uId)=>{
    return users.find(u=> u.id == uId)
}
const addUser = (users,_user)=>{
    users[users.length + 1] = buildUser(users,_user)
    return users.filter(Boolean)
}
const removeUser = (users,id)=>{
    return users.filter(u=>u.id != id)
}
const updateUser = (users,_user)=>{
    userFound = users.find(u=>u.id == _user.id)
    if(userFound != null){
        users[users.indexOf(userFound)] =  _user
    }
    return users
}
const buildUser =(users, _user)=>{
    return{
        id: users.length + 1,
        name: _user.name,
        email: _user.email,
        salary: _user.salary
    }
}
module.exports={
    bySalaryInBetween : fetchUsersWithSalaryInBetween,
    bySalaryGreater : fetchUsersWithSalaryGreater,
    byId : fetchUserById,
    add : addUser,
    delete : removeUser,
    update : updateUser
}