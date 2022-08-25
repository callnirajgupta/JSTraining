let a1:String='hello'
let a2:number=3
let a3:boolean=true
let a4:boolean // undefine

let a5:number[]=[10,20,30]
let a6:Array<number>=[30,30,40]
let a7:any=["hello",1] //is used when we don't knwo what datab type
let a8:[string,number]=["",1]  //to store only two value..it is tuple
a8[0]="hello"
a8[1]=1
console.log(a8)