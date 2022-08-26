const app=require('./app');
const math =require('./math');
//mocking the add function
math.add = jest.fn();
math.subtract = jest.fn();

test('mocking test',()=>{
app.doAdd(1,2)

expect(math.add).toHaveBeenCalledWith(1,2)
})