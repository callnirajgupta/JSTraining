const axios = require('axios').default;



let promise= axios.post('https://reqres.in/api/login',{"email":"peter@klaven"})
promise.then(function(data){
    console.log(data.data)
}).catch(function (e){
console.log('error')
if(e.response){
    console.log(e.response.status)
    console.log(e.response.headers)
    console.log(e.response.data)
    console.log(e.name)
    console.log(e.message)
}else{
    console.log('response not present')
}
})