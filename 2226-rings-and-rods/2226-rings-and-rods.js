/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function (rings) {
    let map = new Map()
    for (let i = 0; i < rings.length; i += 2) {
        let key = rings[i + 1]
        let value = rings[i]
        if (map.has(key)) {
            map.get(key).push(value)
        } else {
            map.set(key, [value])
        }
    }
    let out = 0
    for (let [key, value] of map) {
        if (value.includes("G") && value.includes("B") && value.includes("R")) {
            out++
        }
    }
    return out
};