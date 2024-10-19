/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (c) {
    let map = {}
    let n = c.length
    let count = 0
    for (x of c) {
        if (map[x] == undefined) {
            map[x] = 1
        } else {
            map[x]++
        }
    }
    for (y in map) {
        if (count < n / 2) count++
    }
    return count
};