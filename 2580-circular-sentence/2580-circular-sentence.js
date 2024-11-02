/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function (sen) {
    let res = true
    let map = { firstChar: "", lastChar: "" }
    let s = sen.split(" ")
    for (let i = 0; i < s.length; i++) {
        if (i === 0) {
            map.firstChar = s[i][0]
        }
        if (i === s.length - 1) {
            let lastIndex = s[i].length - 1
            map.lastChar = s[i][lastIndex]
        }
        let lastIndex = s[i].length - 1
        let j = i + 1

        if (j !== s.length && s[i][lastIndex] !== s[j][0]) {
            res = false
        }
    }
    if (map.firstChar !== map.lastChar) {
        res = false
    }
    return res
};