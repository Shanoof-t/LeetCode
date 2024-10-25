/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (n1, n2, n3) {
    let map = {}
    const addToMap = (arr, map) => {
        arr.forEach(val => {
            if (map[val] === undefined) {
                map[val] = 1
            } else {
                map[val]++
            }
        })
    }
    addToMap(new Set(n1), map)
    addToMap(new Set(n2), map)
    addToMap(new Set(n3), map)
    let res = []
    for (x in map) {
        if (map[x] >= 2) {
            res.push(parseInt(x))
        }
    }
    return res
};