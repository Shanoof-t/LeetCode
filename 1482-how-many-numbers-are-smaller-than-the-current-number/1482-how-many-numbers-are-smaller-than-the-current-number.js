/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let arr=[]
    for(i=0;i<nums.length;i++){
        let count=0
        for(j=0;j<nums.length;j++){
            if(nums[i] !== nums[j] && nums[i]>nums[j]){
                count++
            }
        }
        arr.push(count)
    }
    return arr
};