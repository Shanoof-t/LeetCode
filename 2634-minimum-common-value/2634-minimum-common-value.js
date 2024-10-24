/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1, nums2) {
    let res = Infinity
    let set2 = new Set(nums2)
    let left = 0
    let right = nums1.length
    while (left < right) {
        if(res > nums1[left] && set2.has(nums1[left])){
            res = nums1[left]
        }
        left++
    }
    if(res === Infinity){
        return -1
    }
    return res
}