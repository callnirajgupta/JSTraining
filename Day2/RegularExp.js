let sample = new RegExp('^a.d$')
console.log(sample.test('and'))
console.log(sample.test('hello'))

let sample1 = '^a.d$'
console.log("this and that".search(sample1))
console.log("and".search(sample1))
console.log("hellow and fellow".search(sample1))