/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function (nums) {
    let avg = []
    n = nums.length
    let left = 0
    let right = n - 1
    nums.sort((a, b) => a - b)
    while (left < right) {
        let element = (nums[left] + nums[right]) / 2
        avg.push(element)
        left++
        right--
    }
    let res = Infinity
    for (x of avg) {
        if (res > x) {
            res = x
        }
    }
    return res

};