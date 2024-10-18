/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
    let len = nums.length
    let nums2 = nums.slice(n)
    let nums1 = nums.splice(0, n)
    let index1 = 0
    let index2 = 0
    let res = []
    for (let i = 0; i < len; i++) {
        if (i % 2 == 0) {
            res.push(nums1[index1])
            index1++
        } else {
            res.push(nums2[index2])
            index2++
        }
    }
    return res
};