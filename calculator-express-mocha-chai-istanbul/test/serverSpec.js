const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect
let server = null
const calcService  = require('../calculator.service')

chai.use(chaiHttp)

describe('Calculator Service ',()=>{
    let [_a,_b]= [0,0];
    before(()=>{
        server = require('../server').server
        console.log('Server Initialized')
    })
    after(()=>{
        server = null
        console.log('Server Closed')
    })
    beforeEach(()=>{
        [_a,_b] = [6,3]
    })
    afterEach(()=>{
        [_a,_b] = [0,0]
    })
    it(' /status api response',(done)=>{
        chai.request(server)
        .get('/status')
        .end((err,rs)=>{
            expect(rs.text).to.equal('Server Started')
            done()
        })
    })
    it(' /message api response',(done)=>{
        const _msg = 'Hoy'
        chai.request(server)
        .get(`/message/${_msg}`)
        .end((err,rs)=>{
            expect(rs.body.message).to.equal(_msg)
            done()
        })
    })
    it(` /calculate/add ${_a}, ${_b} api response`,(done)=>{
        const _actual = calcService._add(_a,_b).toString()
        chai.request(server)
        .get(`/calculate/add/${_a}/${_b}`)
        .end((err,rs)=>{
            expect(rs.body.result).to.equal(_actual)
            done()
        })
    })
    it(` /calculate/diff ${_a}, ${_b} api response`,(done)=>{
        const _actual = calcService._diff(_a,_b).toString()
        chai.request(server)
        .get(`/calculate/diff/${_a}/${_b}`)
        .end((err,rs)=>{
            expect(rs.body.result).to.equal(_actual)
            done()
        })
    })
    it(` /calculate/mul ${_a}, ${_b} api response`,(done)=>{
        const _actual = calcService._mul(_a,_b).toString()
        chai.request(server)
        .get(`/calculate/mul/${_a}/${_b}`)
        .end((err,rs)=>{
            expect(rs.body.result).to.equal(_actual)
            done()
        })
    })
    it(` /calculate/div ${_a}, ${_b} api response`,(done)=>{
        const _actual = calcService._div(_a,_b).toString()
        chai.request(server)
        .get(`/calculate/div/${_a}/${_b}`)
        .end((err,rs)=>{
            expect(rs.body.result).to.equal(_actual)
            done()
        })
    })
})