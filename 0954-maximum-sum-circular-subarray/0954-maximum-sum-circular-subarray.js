/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
    let currMax = 0
    let globalMax = nums[0]
    let total = 0
    let currMin = 0
    let globalMin = nums[0]
    for (let i = 0; i < nums.length; i++) {
        total += nums[i]
        currMax = Math.max(currMax + nums[i], nums[i])
        globalMax = Math.max(globalMax, currMax)
        currMin = Math.min(nums[i], currMin + nums[i])
        globalMin = Math.min(globalMin, currMin)
    }
    return globalMax > 0 ? Math.max(globalMax, total - globalMin) : globalMax
};