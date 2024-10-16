/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let pref = strs[0]
    let prefLen = pref.length
    for (let i = 0; i < strs.length; i++) {
        let s = strs[i]
        while (s.substring(0, prefLen) !== pref) {
            if (prefLen === 0) return ""
            prefLen--
            pref = pref.substring(0, prefLen)
        }
    }
    return pref
};