/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let word = s.split(" ")
    const reversedWord =word.map((value)=>{
        return value.split("").reverse().join("")
    })
    return reversedWord.join(" ")
};