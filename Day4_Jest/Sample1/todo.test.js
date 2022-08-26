
const ToDo=require('./todo')
const axios = require('axios')
jest.mock('axios')

test('test axios',()=>{
    let data={
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      }
      let response={data:data}
      axios.get.mockImplementation(()=>{
       return  Promise.resolve(response)
      })

      let todo = new ToDo()
      todo.fetchFromServer().then(rs=>{expect(rs.userId).toBe(1)})
})