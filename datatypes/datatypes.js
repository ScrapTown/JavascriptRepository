// Primitive Datatypes

let a = 123
let b = "Apple"
let c = Symbol(345)
let d = true
let e = 12345n
let f = null
let g;

console.log("a is Number type:",a,typeof a)
console.log("b is String type:",b,typeof b)
console.log("c is Symbol type:",c,typeof c)
console.log("d is Boolean type:",d,typeof d)
console.log("e is BigInt type:",e,typeof e)
console.log("f is object type:",f,typeof f)
console.log("g is undefined type:",g,typeof g)

let h = Symbol(345)

console.log(c === h)

// Non-Primitive Datatypes

let obj = {name:"Om",age:24}
let arr = [1,2,3]
let fun = function funk() {
    console.log("Hello World")
}

fun()

console.log("obj is Object Type:",obj,typeof obj)
console.log("arr is Object Type:",arr,typeof arr)
console.log("fun is Function Type:",fun,typeof fun)


let p = [1,2,3]
let o = p
o.push(4)
console.log(o)
console.log(p)