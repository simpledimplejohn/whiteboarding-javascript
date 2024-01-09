// Array methods

let theArray = [1,4,7,9,3,6,2,9]


let array_methods = function(arr) {
    let found 
    found = arr.find((e) => {
        e = 4
    })
    return found
}

console.log(array_methods(theArray))


const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);