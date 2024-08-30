/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    const index = word.indexOf(ch)
    
    const str = word.substring(0,index+1)
    const revstr = str.split("").reverse().join("")
    const result = revstr + word.substring(index+1)
    return result
};