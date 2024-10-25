/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (n) {
    let map = {}
    for (x of n) {
        if (map[x] === undefined) {
            map[x] = 1
        } else {
            map[x]++
        }
    }
    let res = 0
    for (x in map) {
        if (map[x] === 1) {
            res += parseInt(x)
        }
    }
    return res
};