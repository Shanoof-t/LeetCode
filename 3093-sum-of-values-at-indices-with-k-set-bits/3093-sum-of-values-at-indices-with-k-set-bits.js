/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function(nums, k) {
    let sum=0
    for(i=0;i<nums.length;i++){
        let binary = i.toString(2)
        let binarySplited=binary.split("")
        let count=0
        for(j=0;j<binarySplited.length;j++){
            let binaryNum = Number(binarySplited[j])
            if(binaryNum == 1){
                count++
            }
        }
        if(count == k){
            sum+=nums[i]
        }
        
    }
    return sum
};