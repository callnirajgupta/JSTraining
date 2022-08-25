type commonDetails={name:string,age:number}
type email={email:string}

type emaildetails= commonDetails & email

let em1: emaildetails ={name:"John",age:65,email:"test@gmail.com"}

interface userWithEmail extends commonDetails{email:string}
let em2:userWithEmail={name:"John",age:65,email:"test1@gmail.com"}

console.log(em1)
console.log(em1)