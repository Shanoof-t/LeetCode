/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    for (i = m + n; i > m; i--) {
        nums1.pop()
    }
    if (n > 0) {
        for (x of nums2) {
            nums1.push(x)
        }
    }
    nums1.sort((a, b) => a - b)
};