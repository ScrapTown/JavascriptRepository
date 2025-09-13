// Methods to declare strings

console.log('Single Quotes')
console.log("Double Quotes")
console.log(`Template Literal`)

let name ="Om"
console.log(`My name is ${name}`)

// String Functions[Methods]

let a = "Refrigerator"

console.log(a.length)
console.log(a.slice(9,-1))
console.log(a.substring(-1,6))   // It treats -tive index as 0
console.log(a.replace('r','m'))  // Replaces only first occurence
console.log(a.includes("rator"))
console.log(a.charAt(3))
console.log(a.indexOf("r"))
console.log(a.toLowerCase())
console.log(a.toUpperCase())

console.log(a[3])

console.log("This is a " + a)
