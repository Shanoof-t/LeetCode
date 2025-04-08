/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
    let hash = {}
    let result = 0
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]] === undefined) {
            hash[nums[i]] = 1
        } else {
            nums.splice(0, 3)
            hash = {}
            i = -1
            result++
        }
    } 
    return result
};