// practice the loops every day 

let potato = "potato"
let value = potato.charAt(0)
let a = potato.endsWith("o")
let b = potato.valueOf()

let numArray = [1,2,3,4,6,7,8]

// for of loop, most important
for (let poop of numArray) {
    // console.log(poop);
}

// forEach shorthand
numArray.forEach((e) => {
    // console.log(e)
})

// forEach longhand
numArray.forEach(function (e) {
    // console.log(e + " a")
})

// for in loop (objects)

let object = {
    "john" : 1,
    "fred" : 7,
    "bob" : 9
}

for (let key in object) {
    console.log(object[key])
    console.log(key)
}