// make a loop

let arr = [1,2,3,4,5]

let loop_function = ((e) => {
    console.log("potato")
    for (let i in e) {
        console.log(e[i])
    }
})

loop_function(arr)