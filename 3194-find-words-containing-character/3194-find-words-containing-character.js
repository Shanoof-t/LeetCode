/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let res=[]
    for(i=0;i<words.length;i++){
        for(j=0;j<words[i].length;j++){
            if(words[i][j] == x){
                res.push(i)
                break
            }
        }
    }
    return res
};