/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function (nums) {
    let res = 0
    let steps = 0
    for (let i = 0; i < nums.length; i++) {
        steps += nums[i]
        if (steps === 0) res++
    }
    return res
};