// arrow functions

// with return will need {} added
let test = ((e)=>
    {
        return e 
    }
)
console.log("test",test(7))

// without return, only able to do one statment
let addOne = ((e) =>
    console.log("added",e+1)
)
addOne(1)

// long form functions

let addPotato = function(element) {
    let string = String(element)
    string = string + " potato"
    return string
}

console.log(addPotato("john"))
