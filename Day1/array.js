let a=[]
console.log(a, typeof a)


console.log(Array.isArray(a))  //return truw since a is array
a.push(10)
a.push(20)

console.log(a[1]) //index start with zero
console.log(a.length)
console.log(a) //full array
for(var i=0;i<a.length;i++){
    console.log(a[i])
}
//sometime we may want to apply a function on each and every element on given array
//we can achive using map function

let b= a.map(data=> data*data)

console.log(b)

let d= a.filter(data=>data>10)
console.log(d)