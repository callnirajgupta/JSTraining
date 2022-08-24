var emp= {"id":1,
"age":20,
}

var even=emp
even.id=2

console.log(even)
console.log(emp)

//both the object had got updated

//to copy of object
var even= Object.assign({},emp,{"id":5})
//var even= Object.assign({},emp)  otherway of doing
//even.id=3

console.log(even)
console.log(emp)

//spread operater

var emp1 ={...emp,id:6}
console.log(emp1)
console.log(emp)

