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

let nums = [1,3,4,1,2,3,1]
const numsMap = new Map();

/*
tasks, count the array
loop through the array and store the following information
- have I seen this number yet?

*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    
    let count = 0
    let previous = 0
    let arrLength = 0
    arrLength = nums.length
    // add to map
    for (let num in nums ) {
        numsMap.set(num,nums[num])
    }
    // check for distinct
    for (let num in nums ) {
        

        
    }
    

    // console.log("Welcome to JohnProgram\nAnalyzing Current Array\n.........\narray size = ", arrLength,"\n",nums)
    return numsMap
};

console.log(findMatrix(nums))