// find the middle of an array

let oddArr = [3,5,7,9,11];
let evenArr = [2,5,8,10];

// console.log(oddArr.length)

console.log("Should be 7 " + findMiddle(oddArr));
console.log("Should be avr of 5 and 8 " + findMiddle(evenArr))


function findMiddle(arr) {
    // console.log("arr length " + arr.length);
    let half = arr.length/2
    // console.log("half" + half);
    if(half %1 != 0) {
        // console.log("true")
        let i = Math.floor(half)
        // console.log("i " +i)
        // console.log("arr " + arr[i])
        return arr[i];
        

    } else {
        return (arr[half] + arr[half-1])/2
    }




}