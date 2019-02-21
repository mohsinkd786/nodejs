const chai = require('chai')
const chaiHttp = require('chai-http')

const expect = chai.expect
const server = require('../server').server
const calcService  = require('../calculator.service')

chai.use(chaiHttp)

describe('Calculator Service ',()=>{
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

    it(' /calculate/add/5/3 api response',(done)=>{
        let [_a,_b] = [5,3]
        const _actual = calcService._add(_a,_b).toString()
        chai.request(server)
        .get(`/calculate/add/${_a}/${_b}`)
        .end((err,rs)=>{
            expect(rs.body.result).to.equal(_actual)
            done()
        })
    })
    it(' /calculate/diff/5/3 api response',(done)=>{
        let [_a,_b] = [5,3]
        const _actual = calcService._diff(_a,_b).toString()
        chai.request(server)
        .get(`/calculate/diff/${_a}/${_b}`)
        .end((err,rs)=>{
            expect(rs.body.result).to.equal(_actual)
            done()
        })
    })
    it(' /calculate/mul/5/3 api response',(done)=>{
        let [_a,_b] = [5,3]
        const _actual = calcService._mul(_a,_b).toString()
        chai.request(server)
        .get(`/calculate/mul/${_a}/${_b}`)
        .end((err,rs)=>{
            expect(rs.body.result).to.equal(_actual)
            done()
        })
    })
    it(' /calculate/div/8/2 api response',(done)=>{
        let [_a,_b] = [8,2]
        const _actual = calcService._div(_a,_b).toString()
        chai.request(server)
        .get(`/calculate/div/${_a}/${_b}`)
        .end((err,rs)=>{
            expect(rs.body.result).to.equal(_actual)
            done()
        })
    })
    after(()=>{
        
    })
})