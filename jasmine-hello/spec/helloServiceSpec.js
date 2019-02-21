const http = require('request')

describe('Hello Service ',()=>{
    it('Message Status code ',()=>{
        const url = 'http://localhost:26172/message'
        http.get(url,(err,rs)=>{
            expect(rs.statusCode).toBe(200)
        })
    })
    it('Message  Received',()=>{
        const url = 'http://localhost:26172/message'
        http.get(url,(err,rs,body)=>{
            expect(body).toBe('Hello')
        })
    })
})