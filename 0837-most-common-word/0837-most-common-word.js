/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (p, b) {
    let map = {}
    let arr = p.toLowerCase().split(/["!?',;. "]/)
    for (let x of arr) {
        let flag = true
        for (let y of b) {
            if (x === y) {
                flag = false
            }
        }
        if (flag) {

            if (map[x] === undefined && x !== '') {
                map[x] = 1
            } else {
                map[x]++
            }
        }
    }
    let res = ""
    let count = 0
    for (let m in map) {
        if (count < map[m]) {
            count = map[m]
            res = m
        }
    }
    return res
};