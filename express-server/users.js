
var users = [
    {
        id: 1,
        name: 'Roger'
    },
    {
        id: 2,
        name: 'Bob'
    },
    {
        id: 3,
        name: 'Steve'
    }
];
class User{
    fetchAll(){
        return users;
    }
    fetchById(id){
        return users.find(u => u.id == id);
    }
    addUser(u){
        users.push(u);
        return users;
    }
}

module.exports = User;