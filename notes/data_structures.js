/* 
Data Structure Notes For Javascript

Objects 

Map

*/
// Array
let theArray = [3,6,7,3,9,11,2,9]
theArray.push(5)
// console.log(theArray)

// array methods
let array_methods = function(arr) {
    return arr
}

console.log(array_methods)

// OBJECTS
let newObject = {}
let a = 1
let b = 2
newObject[a] = b

// console.log(newObject)


// MAP
// stores key values pairs, key must be a string?  Fast search
const newMap = new Map();

newMap.set(a,b)
newMap.set(7,111)
newMap.set("po-ta-to","po-taugh-to")
// console.log(newMap)


// SET 
// distinct data types, fast search
const newSet = new Set();

for (let num in theArray) {
    newSet.add(theArray[num])
}
console.log(newSet)
console.log("has returns boolean of: ",newSet.has(3))