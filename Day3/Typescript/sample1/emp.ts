export class Emp {
    name:string
    age:number
    salary:number
    desination?:string  // string or anytypeundefine

    constructor(name:string,age:number,salary:number,desination?:string){
this.name=name
this.age=age
this.salary=salary
this.desination=desination
    }

    display(){
        if(this.desination){
        console.log(`name ${this.name} an desination ${this.desination}`)
        }
        else{
            console.log(`name ${this.name}`)
        
        }
    }

}