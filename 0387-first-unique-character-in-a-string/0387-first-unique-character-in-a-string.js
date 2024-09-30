/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (str) {
    let s = str.split("")
    let map = {}
    for (let x of s) {
        if (map[x] === undefined) {
            map[x] = 1
        } else {
            map[x]++
        }
    }
    for (y in map) {
        if (map[y] === 1) {
            return s.indexOf(y)
        }
    }
    return -1
};