var maxProduct = function(nums) {
    if (nums.length == 1) {
        return nums[0];
    }
    // 1 is a number "neutral" to multiplication
    let firstNegative = 1; // No negatives yet
    let curPrefix = 1; // Empty yet
    let maxProduct = 0; // In case we found 0
    
    for (let i = 0; i < nums.length; i++) {
        curPrefix *= nums[i];
        maxProduct = Math.max(curPrefix, maxProduct);
        
        if (curPrefix < 0) { // divide to the first negative
            maxProduct = Math.max(curPrefix / firstNegative, maxProduct);
            // set the first negative product, if it wasn't set yet
            firstNegative = firstNegative == 1? curPrefix : firstNegative;
            
        } else if (curPrefix == 0) { // start all over again
            curPrefix = 1;
            firstNegative = 1;
        }
    }
    return maxProduct;
};