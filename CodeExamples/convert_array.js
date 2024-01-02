/*
Leet Code
2610. Convert an Array Into a 2D Array With Conditions

You are given an integer array nums. You need to create a 2D array from nums satisfying the following conditions:

The 2D array should contain only the elements of the array nums.
Each row in the 2D array contains distinct integers.
The number of rows in the 2D array should be minimal.
Return the resulting array. If there are multiple answers, return any of them.

Note that the 2D array can have a different number of elements on each row.

Example 1:

Input: nums = [1,3,4,1,2,3,1]
Output: [[1,3,4,2],[1,3],[1]]
Explanation: We can create a 2D array that contains the following rows:
- 1,3,4,2
- 1,3
- 1
All elements of nums were used, and each row of the 2D array contains distinct integers, so it is a valid answer.
It can be shown that we cannot have less than 3 rows in a valid array.

*/

let num1 = [1, 3, 4, 1, 2, 3, 1]
let num2 = [1,2,3,4,5,6]
let nums = [1,1,1,1,1,1]
const numSet = new Set();
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
            console.log(nums[num])
            
            if (numSet.has(nums[num])== true) {
                tempArr.push(nums[num])
                console.log("got here")
            } else {

                console.log("got here 2")
            }
        }
        finalnums.push(tempArr)
        console.log("got to done")
        return finalnums
    }
    

};

console.log(findMatrix(nums))