/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    let map={}
    for(let x of nums){
        if(map[x] === undefined){
            map[x]=1
        }else{
            map[x]++
        }
    }
    let res=[]
    for(let x in map){
        if(map[x] === 2){
            res.push(parseInt(x))
        }
    }
    return res
};