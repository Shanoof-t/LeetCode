/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    return nums.map((value,index)=>nums[nums[index]])
};