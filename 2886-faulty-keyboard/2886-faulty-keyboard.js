/**
 * @param {string} s
 * @return {string}
 */
var finalString = function (s) {
    let str = ""
    for (let x of s) {
        if (x === "i") {
            let n = str.split("").reverse().join("")
            str = n
        } else {
            str += x
        }
    }
    return str
};