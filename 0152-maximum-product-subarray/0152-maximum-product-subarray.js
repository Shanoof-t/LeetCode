var maxProduct = function (nums) {
    let res = nums[0], curMax = 1, curMin = 1;
    for (let x of nums) {
        let temp1 = curMax * x
        let temp2 = curMin * x
        curMax = Math.max(temp1, temp2, x)
        curMin = Math.min(temp1, temp2, x)
        res = Math.max(curMax,res)
    }
    return res  
};