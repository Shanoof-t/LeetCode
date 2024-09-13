/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let str=s.split(" ")
    let res = []
    for(i=0;i<k;i++){
        res.push(str[i])
    }
    return res.join(" ")
};