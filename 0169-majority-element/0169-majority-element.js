/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let n = nums.length/2
    let count={}
    for(let x of nums){
        if(count[x] === undefined){
            count[x] = 1
        }else{
            count[x]++
        }
    }
    let res=0
    for(let y in count){
        if(count[y] >= n){
            res = parseInt(y)
        }
    }
    return res
};