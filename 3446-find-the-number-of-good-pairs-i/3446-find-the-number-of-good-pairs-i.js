/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var numberOfPairs = function(nums1, nums2, k) {
    let count=0
    for(i=0;i<nums2.length;i++){
        for(j=0;j<nums1.length;j++){
            let n = nums2[i]*k
            if(nums1[j]% n== 0){
                count++
            }
        }
    }
    return count
};