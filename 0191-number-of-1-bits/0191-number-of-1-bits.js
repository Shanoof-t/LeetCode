/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let a = n.toString(2)
    let z =a.split("")
    let count=0
    for(i=0;i<z.length;i++){
        if(z[i] == 1){
            count++
        }
    }
    return count
};