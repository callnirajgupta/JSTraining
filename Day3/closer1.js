function multiple(fixed){
return function (variable){
    return  fixed*variable

}
}

let a= multiple()  //return a function
let result =a(10)
console.log(result)

result=a(20)
console.log(result)

//lazy evaluation