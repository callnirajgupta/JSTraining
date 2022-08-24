function square(m){
    console.log(m*m)
}

function cube(m){
    console.log(m**m)
}

function perform(a,callback){
    console.log('input pass as' ,a)
    callback(a)
}

perform(20,square)