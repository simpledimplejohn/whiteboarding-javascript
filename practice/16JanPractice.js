// practicing javascript

let arr = [9,8,7,6,5,4,3,2,1]

// store this array in an object

let object = {}

for(i in arr) {
    object[i] = arr[i]
    
}

console.log(object)

for(i in object) {
    console.log(i, object[i])
}