let simplepromise= new Promise(function(onsucess,onfailure){
    onsucess()
    onfailure()

})

simplepromise.then(function(value){
    console.log('this will be called on successs')

},function(error){
    console.log('this will be called on successs')
})