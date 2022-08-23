let a={}
console.log(a)

a['name']="niraj"
a['age']=25
console.log(a)

let object={'name':'john','address':{'country':'india','state':'AZ'}}
console.log(object.name)

console.log(object.address.state)

for(let property in object ){
    console.log(property)
}

console.log(object['name'])
