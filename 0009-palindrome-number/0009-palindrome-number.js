/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let nums=x.toString().split("").reverse().join("")
    if(nums==x){
        return true
    }else{
        return false
    }
}