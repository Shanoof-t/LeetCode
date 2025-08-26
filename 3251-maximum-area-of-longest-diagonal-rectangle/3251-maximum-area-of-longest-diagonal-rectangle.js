/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function (d) {
    let maxArea = 0, maxDiag = 0
    for (let i = 0; i < d.length; i++) {
        let l = d[i][0]
        let w = d[i][1]
        let currDiag = l * l + w * w
        let currArea = l * w
        if (currDiag > maxDiag || (currDiag === maxDiag && currArea > maxArea)) {
            maxDiag = currDiag
            maxArea = currArea
        }
    }
    return maxArea
};