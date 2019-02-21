const hello = require('../hello')

describe('Hello Service ',()=>{
    it('Hello message Received ',()=>{
        const _expect = hello.message()
        expect(_expect).toBe('Hello')
    })
})