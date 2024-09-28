/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let count=0
    let rCount=0
    let lCount=0
    for(let x of s){
        if(x === 'R'){
            rCount++
        }else{
            lCount++
        }
        if(rCount === lCount){
            count++
        }
    }
    return count
};