const { parse } = require('json2csv');
const axios = require('axios').default;

const fields = ['userId', 'id', 'title','completed'];
const opts = { fields };

axios.get('https://jsonplaceholder.typicode.com/todos').then(res=>{
    
   const csv = parse(res.data, opts);
  console.log(csv);
})


// var res=axios.get('https://jsonplaceholder.typicode.com/todos').then(res => res.data)


// const csv = parse(res.data, opts);
// console.log(csv);


