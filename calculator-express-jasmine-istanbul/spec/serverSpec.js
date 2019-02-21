const request = require('request')

// Calculator Express Service Test Suite
describe('Calculator Service ',()=>{
    it('Status API success response code(200)',(done)=>{
        request.get('http://localhost:6631/calculator/status',(err,rs,body)=>{
        expect(rs.statusCode).toBe(200)
        done()
        })
    })
    it('Status API response',(done)=>{
        request.get('http://localhost:6631/calculator/status',(err,rs,body)=>{
        expect(body).toBe('Hello')
        done()
        })
    })
    it('Addition of 5 & 3',(done)=>{
        request.get('http://localhost:6631/calculator/add/5/3',(err,rs,body)=>{
        expect(body).toBe('8')
        done()
        })
    })
})