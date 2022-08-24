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
} finally{
    console.log('finally block')
}

