const calc = require('../calculator')

// define test suite
describe('Calculator ',()=>{
    // SUM Success Test case
    it('Sum of 3 & 5 is ',()=>{
        const _expect = calc._add(3,5)
        const _actual = 3 + 5
        // assertion
        expect(_actual).toBe(_expect)
    })
    it('Difference of 5 & 2 is ',()=>{
        const _expect = calc._diff(5,2)
        const _actual = 5 - 2
        expect(_actual).toBe(_expect)
    })
    it('Division of 5 & 2 is ',()=>{
        const _expect = calc._div(5,0)
        const _actual = 5 / 1
        expect(_actual).toBePositiveInfinity(_expect)
    })
})
