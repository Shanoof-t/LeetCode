/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    let last = Infinity
    let res = 0
    for(i=1;i<=last;i++){
        let mul = n*i
        if(mul%2==0){
            res=mul
            break
        }else{
            mul = n*i
        }
    }
    return res
};