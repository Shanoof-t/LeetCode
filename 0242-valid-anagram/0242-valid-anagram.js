/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let a = s.split("").sort().join("")
    let b = t.split("").sort().join("")
    if(a === b){
        return true
    }else{
        return false
    }
};