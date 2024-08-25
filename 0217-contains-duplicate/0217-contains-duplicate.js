/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let left = 0
    let right =1
    let sortedNums =nums.sort((a,b)=>a-b)
    while(right<sortedNums.length){
        if(sortedNums[right] === sortedNums[left]){
            return true
        }else{
            left++
            right++
        }
    }
    return false
};