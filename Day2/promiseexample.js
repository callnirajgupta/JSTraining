const axios = require('axios').default;



let promise= axios.get('https://todos')
promise.then(function(data){
    console.log(data.data)
}).catch(function(e){
console.log('error')
if(e.response){
    console.log(e.response.status)
    console.log(e.response.headers)
    console.log(e.response.data)
}else{
    console.log('response not present')
}
})