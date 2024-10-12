/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let numsSum = 0
    let spSum=0
    for(x of nums){
        numsSum+=x
        let sp = x.toString().split("")
        for(y of sp){
            let val = parseInt(y)
            spSum+=val
        }
    }
    let res =Math.abs(numsSum - spSum)
    return res
};