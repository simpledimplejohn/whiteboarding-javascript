let nums = [1, 3, 4, 1, 2, 3, 1]
let num2 = [1,2,3,4,5,6]
let num3 = [1,1,1,1,1,1]
const numSet = new Set();
const numMap = new Map();
let finalnums = []

var findMatrix = function (nums) {

    // add to Set 
    for (let num in nums) {
        numSet.add(nums[num])
    }
    // first condition--if no distinct values return the orginal array
    if (numSet.size == nums.length) {
        return nums
    } 
    // if there are distinct values make a multi array 
    else {
        let tempArr = []
        for (let num in nums) {
            // Add numbers to the map, and add a count of the number of times they appear
            if(numMap.has(nums[num]) == true) {
                let count = numMap.get(nums[num])
                count++ 
                numMap.set(nums[num], count)           
                console.log("add")
            } else {
                numMap.set(nums[num], 1)
                console.log("else")
            }
        }
        // how to make any number of arrays? 
        let highestCount = 0
        numMap.forEach(value => {
            console.log("numMap.forEach value", value)
            // how do you find the highest value? 
            if (value > highestCount) {
                highestCount = value 
            } 
        })
        console.log("highest count final: ",highestCount)
// make the correct number of arrays 
        for (let i = 0; i < highestCount; i++) {
            let innerArr = [];
            tempArr.push(innerArr)

        }
// add those values to the array 

        console.log("the temp arr: ", tempArr)
        return numMap

    }
    

};

console.log(findMatrix(nums))