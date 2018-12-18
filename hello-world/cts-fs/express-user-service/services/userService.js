users =[
    {
        "id": 1,
        "name": "Bob",
        "email": "bob@gmail.com",
        "phone": 123445            
    },
    {
        "id": 2,
        "name": "Eden",
        "email": "eden@gmail.com",
        "phone": 234576  
    },
    {
        "id": 3,
        "name": "Roy",
        "email": "roy@gmail.com",
        "phone": 763526  
    }
];

//fetch all
const fetchUsers = ()=>{
    return users;
}
//fetch by id
const fetchUserbyId = (id) =>{
    return users.filter(u=> u.id == id);
}
//fetch by Name
const fetchUserbyName = (name) =>{
    return users.filter(u=> u.name == name);
}
// add a User
const addUser = (user)=>{
    users.push(user);
}

// delete a User
const deleteUserbyId = (id)=>{
    //id
}
const deleteUser = ()=>{
    users.pop();
}
module.exports={
    _all : fetchUsers,
    _byId : fetchUserbyId,
    _byName : fetchUserbyName,
    _delbyId : deleteUserbyId,
    _add : addUser,
    _delete: deleteUser
}