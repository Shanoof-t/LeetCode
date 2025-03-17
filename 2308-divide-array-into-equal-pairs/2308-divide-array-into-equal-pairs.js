/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
    const len = nums.length
    if (len % 2 !== 0) return false
    let flag = true
    let obj = {}

    for (let x of nums) {
        if (obj[x] === undefined) {
            obj[x] = 1
        } else {
            obj[x]++
        }
    }
    console.log(obj)
    for (let y in obj) {
        if (obj[y] < 2 || obj[y] % 2 !== 0) {
            flag = false
        }
    }
    return flag
};