var calulator=require('./calculator')
describe('test the calulator',()=>{
    test('sum',()=>{
        let result=calulator.sum(1,2)
        expect(result).toBe(3)
    })
    test('diff',()=>{
        let result=calulator.diff(20,10)
        expect(result).toBe(10)
    })
    test('prod',()=>{
        let result=calulator.prod(20,10)
        expect(result).toBe(200)
    })

    xtest('sum',()=>{
        let result=calulator.sum(1.52,2.5)
        expect(result).toBeCloseTo(4.0)
    })
})