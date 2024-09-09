/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
    let res=0
    let a = s.split("")
    for(i=0;i<a.length;i++){
        res+=Math.abs(i - t.indexOf(a[i]))
    }
    return res
};