/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let map = new Map()
    for (let x of nums) {
        if (map.has(x)) {
            map.set(x, map.get(x) + 1)
        } else {
            map.set(x, 1)
        }
    }
    for (let [key, value] of map) {
        
        if (value === 1) {
            return key
        }
    }
};