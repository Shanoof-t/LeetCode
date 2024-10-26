/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
    let set = new Set()
    for (let x of s) {
        if (!isNaN(x)) {
            set.add(parseInt(x))
        }
    }

    let sorted = Array.from(set).sort((a, b) => b - a)
    return sorted.length <= 1 ? -1 : sorted[1]
};