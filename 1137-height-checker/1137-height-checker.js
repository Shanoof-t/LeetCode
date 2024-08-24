/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let expected = [...heights].sort((a,b)=>a-b)
    let res=[]
    for(i=0;i<heights.length;i++){
        if(heights[i] !== expected[i]){
            res.push(i)
        }
    }
    return res.length
};