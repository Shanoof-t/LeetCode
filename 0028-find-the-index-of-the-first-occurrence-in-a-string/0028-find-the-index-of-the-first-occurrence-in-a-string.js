/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (!haystack.includes(needle)) {
        return -1
    }

    for (let i = 0; i < haystack.length; i++) {
        const sub = haystack.substring(i, i + needle.length)
        if (sub === needle) {
            return i
        }
    }
    return -1

};