/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
    const len = nums.length
    if (len % 2 !== 0) return false
    let obj = {}

    for (let x of nums) {
        if (obj[x] === undefined) {
            obj[x] = 1
        } else {
            obj[x]++
        }
    }
    for (let y in obj) {
        if (obj[y] % 2 !== 0) {
            return false
        }
    }
    return true
};