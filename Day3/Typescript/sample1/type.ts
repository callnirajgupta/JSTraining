//type name = {name:string,age:number}
type address = {stree:string,city:string}
type name = {name:string,age:number,address:address}

let address1 = {stree:"stree",city:"city"}
let u1={name:"john",age:45,address:address1}
let u2={name:"johnny",age:65,address:address1}

console.log(u1)
console.log(u2)