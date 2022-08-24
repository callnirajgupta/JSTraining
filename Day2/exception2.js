function eligility(age){
    if(age<18){
        throw "age less then 18"
    }else if(age<60) {
throw "is greater then 60"
    }
    return "age is valid"


}

try{
    eligility(10)
}catch(e){
    console.log(e)
}

try{
    eligility(70)
}catch(e){
    console.log(e)
}

try{
    let result=eligility(70)
    console.log('result',result)
}catch(e){
    console.log(e)
}