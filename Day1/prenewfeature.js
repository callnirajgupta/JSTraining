function Person(name,age){
    this.name=name
    this.age=age
    this.display=  () =>{
        console.log(this.name,this.age)
    }

}
Person.prototype.display2=function(){
    console.log('display2', this.name,this.age)
}
let a= new Person('john',25)

console.log(a)
a.display()
a.display2()