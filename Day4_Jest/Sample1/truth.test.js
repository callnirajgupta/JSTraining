
describe("test for truth ", () => {
    test('test for truth',()=>{
        let name="Software testing help"
        let n = null
        expect(n).toBeNull()
        expect(name).not.toBeNull
      
        // name has a valid value
        expect(name).toBeTruthy()
        //fail - as null is non success
   // expect(n).toBeTruthy()
    
    // pass - null treated as false or negative
  //  expect(n).toBeFalsy()
  
    // 0 - treated as false
    expect(0).toBeFalsy()
    })

    test('numeric operater',()=>{
        let n1=100
        let n2=-30
        let n3=0
        expect(n1).toBeGreaterThanOrEqual(101)
        expect(n2).toBeLessThanOrEqual(60)
        expect(n3).toBeEqual(0)
    })
    
    test('String oeprater',()=>{

        let sample='test is important'
        expect(sample).toMatch(/test/)
        expect(sample).not.toMatch(/abc/)

    })
})