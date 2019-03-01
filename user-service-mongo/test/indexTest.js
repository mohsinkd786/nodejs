const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect
let app = require('../index').app
const userService = require('../services/userService')
chai.use(chaiHttp)

describe('User Mongo Service ',()=>{
    it('Fetch all Users from Mongo',(done)=>{
        chai.request(app)
        .get('/users')
        .end((err,rs)=>{
            userService.fetchAll((data)=>{
                expect(rs.body).to.equal(data)
                done()
            })       
        })
    })
    it('Add User into Mongo',(done)=>{
        const userObj={
            _id: 100,
            name: 'Test User'
        }
        chai.request(app)
        .post('/user/add',userObj)
        .end((err,rs)=>{
            userService.fetchByName(userObj.name,(data)=>{
                expect(userObj).to.equal(data)
                done()
            })       
        })
    })
})