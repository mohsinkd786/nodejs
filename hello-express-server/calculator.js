const _sum = (_first,_next)=>{
    return _first + _next
}
const _diff = (_first,_next)=>{
    return _first - _next
}
const _mul = (_first,_next)=>{
    return _first * _next
}
const _div = (_first,_next)=>{
    return _first / _next
}
const _compute = (_data)=>{
    let result = 0
    switch(_data.action){
        case 'SUM':
            result = _sum(_data.first,_data.next)
            break
        case 'DIFF':
            result = _diff(_data.first,_data.next)
            break
        case 'MUL':
            result = _mul(_data.first,_data.next)
            break
        case 'DIV':
            result = _div(_data.first,_data.next)
            break
        default:
            result = 'Available actions [SUM,DIFF,MUL,DIV]'
    }
    //return  (_data.action +' = '+ result).toString()
    return {
        action: _data.action,
        result: result
    }
}
module.exports={
   _compute
}