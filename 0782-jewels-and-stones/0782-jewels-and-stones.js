/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let jewelsSplited = jewels.split("")
    let stonesSplited = stones.split("")
    let count=0
    for(i=0;i<jewelsSplited.length;i++){
        for(j=0;j<stonesSplited.length;j++){
            if(jewelsSplited[i] == stonesSplited[j]){
                count++
            }
        }
    }
    return count
};