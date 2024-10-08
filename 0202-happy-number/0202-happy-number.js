/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let seen = new Set()

    while (n !== 1 && !seen.has(n)) {
        seen.add(n)
        n = n.toString().split("").reduce((acc, num) => {
            return acc + Math.pow(parseInt(num), 2)
        }, 0)
    }
    return n == 1
};