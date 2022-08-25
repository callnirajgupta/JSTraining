
interface sampleAddress{stree:string,city:string}

interface sampleUser{name:string,age:number,address:sampleAddress}

let ad:sampleAddress = {stree:"stree",city:"city"}
let usr1:sampleUser={name:"john",age:45,address:ad}
let usr2: sampleUser={name:"johnny",age:65,address:ad}

console.log(ad)
console.log(usr1)
console.log(usr2)

