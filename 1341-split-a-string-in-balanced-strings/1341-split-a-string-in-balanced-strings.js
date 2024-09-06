/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let lCount =0 
    let rCount=0
    let maxCount=0
    for(let char of s){
        char === 'R' ? rCount++ : lCount++

        if(rCount === lCount)maxCount++
    }
    return maxCount
};