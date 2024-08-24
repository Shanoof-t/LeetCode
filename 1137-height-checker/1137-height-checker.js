/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let expected = [...heights].sort((a,b)=>a-b)
    let res=0
    for(i=0;i<heights.length;i++){
        if(heights[i] !== expected[i]){
            res++
        }
    }
    return res
};