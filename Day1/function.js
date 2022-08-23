function sum(a,b){
    console.log('sum,a+b',a+b)
}

sum(10,20)

function square(a,b){
    //console.log('sum,a+b',a+b)
    return a*b
}

console.log(square(10,20))

var sum = function(a,b){
    console.log(a+b);
}

sum(1,2)

var sub = function(a,b){
    console.log(a-b);
}

sub(20,10)
function perform(a,b,operation){
operation(a,b)

}
perform(10,20,sum)
perform(10,20,sub)
