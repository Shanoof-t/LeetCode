/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    let set1 = new Set(nums1)
    let set2 = new Set(nums2)

    let res = []
    let r1 = []
    let r2 = []
    for (let x of set1) {
        if (!set2.has(x)) {
            r1.push(x)
        }        
    }
    for (let x of set2) {
        if (!set1.has(x)) {
            r2.push(x)
        }
    }
    res.push(r1,r2)
    return res
};