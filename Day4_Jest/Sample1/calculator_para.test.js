var calulator=require('./calculator')
describe('parameter calulator testing',()=>{
    test.each([[2,1,3],[5,2,7],[5,9,14]])(
        'sum of %i+%i=%i',(ip1,ip2,op)=>{
            expect(calulator.sum(ip1,ip2)).toBe(op) 
        }
    )
})