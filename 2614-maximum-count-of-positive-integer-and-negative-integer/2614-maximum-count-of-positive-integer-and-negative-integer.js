/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
    let pos = 0
    let neg = 0
    for (let x of nums) {
        if (x < 0) {
            neg++
        } else if (x > 0) {
            pos++
        }
    }
    return Math.max(neg, pos)
};