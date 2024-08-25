/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // let left = 0
    // let right =1
    // let sortedNums =nums.sort((a,b)=>a-b)
    // while(right<sortedNums.length){
    //     if(sortedNums[right] === sortedNums[left]){
    //         return true
    //     }else{
    //         left++
    //         right++
    //     }
    // }
    // return false

    let set =new Set()

    for(x of nums){
        if(set.has(x)){
            return true
        }else{
            set.add(x)
        }
    }
    return false
};