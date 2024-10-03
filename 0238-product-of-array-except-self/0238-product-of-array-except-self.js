/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let n = nums.length
    let res = new Array(n).fill(1)
    let prefix=1
    for(i=0;i<n;i++){
        res[i]=prefix
        prefix *=nums[i]
    }
    let postfix =1
    for(i=n-1;i>=0;i--){
        res[i] *=postfix
        postfix *=nums[i]
    }
    return res
};