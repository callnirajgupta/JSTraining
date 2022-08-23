class Person{
    contructor(name,age){
        this.name=name
        this.age=age

    }
    display = function(){
        console.log(this.name,this.age)
    }
}

let b = new Person('john',5)
b.display()