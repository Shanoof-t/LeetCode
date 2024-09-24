/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let count={}
    for(let x of nums){
        if(count[x] === undefined){
            count[x]=1
        }else{
            count[x]++
        }
    }
    let res=[]
    for(let y in count){
        if(count[y] === 1){
            res.push(parseInt(y))
        }
    }
    return res
};