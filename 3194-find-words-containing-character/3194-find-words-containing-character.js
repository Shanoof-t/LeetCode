/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let res=[]
    for(i=0;i<words.length;i++){
        if(words[i].includes(x)){
            res.push(i)
        }
    }
    return res
};