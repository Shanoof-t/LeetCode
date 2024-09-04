/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    // let arr=[]
    // for(i=0;i<nums.length;i++){
    //     let count=0
    //     for(j=0;j<nums.length;j++){
    //         if(nums[i] !== nums[j] && nums[i]>nums[j]){
    //             count++
    //         }
    //     }
    //     arr.push(count)
    // }
    // return arr

    let newNums = [...nums].sort((a,b)=>a-b)
    let map = new Map()

    for(i=0;i<newNums.length;i++){
        if(!map.has(newNums[i])){
            map.set(newNums[i],i)
        }
    }
    return nums.map((num)=>map.get(num))
};