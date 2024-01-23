// here's this

let arr = [1,7,3,9,4,2,12]

let printString = (arr) => {
    let string = ""
    for(let i in arr) {
        let space = " "
        string = string + space + i
    }
    return string
    
}


// console.log(printString(arr))

// Add to an object
let names = ["john","fred","bob","albert"]
let ages = [41,56,72,34]
let jobs = ["worker","slave","boss","unemployeed"]
let database = {}

let add_database = (names,ages,jobs) => {
    for(let i in names) {
        let tempO = {"name":names[i],
        "age":ages[i],
        "job":jobs[i]}
        database[i]=tempO
    }
    return database
}
console.log(add_database(names,ages,jobs))
