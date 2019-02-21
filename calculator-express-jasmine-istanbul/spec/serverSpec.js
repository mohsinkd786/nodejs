const request = require('request')

// Calculator Express Service Test Suite
describe('Calculator Service ',()=>{
    it('Status API success response code(200)',()=>{
        request.get('http://localhost:6631/calculator/status',(err,rs,body)=>{
        expect(rs.statusCode).toBe(200)
        })
    })
    it('Status API response',()=>{
        request.get('http://localhost:6631/calculator/status',(err,rs,body)=>{
        expect(body).toBe('Hello')
        })
    })
    it('Addition of 5 & 3',()=>{
        request.get('http://localhost:6631/calculator/add/5/3',(err,rs,body)=>{
        expect(body).toBe('8')
        })
    })
})