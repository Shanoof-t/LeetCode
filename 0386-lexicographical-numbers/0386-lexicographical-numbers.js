/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    let res=[]
    for(i=1;i<=n;i++){
        res.push(i)
    }
    return res.sort()
};