/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let res=nums[0]
    let sum=0
    for(i=0;i<nums.length;i++){
        if(sum<0){
            sum=0
        }
        sum+=nums[i]
        res=Math.max(sum,res)
    }
    return res
};