users=[
    {
        id: 1,
        name: 'Mohsin',
        email: 'emai@gmail.com',
        phone: '1234'
    },
    {
        id: 2,
        name: 'Bob',
        email: 'bob@gmail.com',
        phone: '65657'
    },
    {
        id: 3,
        name: 'Xyz',
        email: 'xyz@gmail.com',
        phone: '77777'
    }
]
const fetchAllUsers = ()=>{
    return users;
}
module.exports.fetchAllUsers=fetchAllUsers;
