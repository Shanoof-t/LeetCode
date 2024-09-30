/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(str) {
    let s = str.split("")
    let map={}
    for(x of s){
        if(map[x] === undefined){
            map[x]=1
        }else{
            map[x]++
        }
        if(map[x] === 2){
            break;
        }
    }
    for(y in map){
        if(map[y] === 2){
            return y
        }
    }
};