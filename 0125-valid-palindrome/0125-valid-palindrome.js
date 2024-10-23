/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str1 = s.split(/[^a-zA-Z0-9]+/).join("").toLowerCase()
    let str2 = str1.split("").reverse().join("")
    return str1 === str2
};