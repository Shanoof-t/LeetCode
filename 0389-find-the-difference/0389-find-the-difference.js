/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let s1=s.split("").sort().join("")
    let s2=t.split("").sort().join("")
    for(let i=0;i<s2.length;i++){
        if(s1[i] !== s2[i]){
            return s2[i]
            // console.log(s2[i])
        }
    }
    
};