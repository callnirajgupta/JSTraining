const re = /\S+@\S+\.\S+/g;
let email='test@domain.com'

console.log(re.test(email))

let emailpattern=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
let email1='@test-a123@domain.co.in'

console.log(emailpattern.test(email))