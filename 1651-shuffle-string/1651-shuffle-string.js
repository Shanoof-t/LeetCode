/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let arr =s.split("")
    let str =[]
    for(i=0;i<indices.length;i++){
        str[indices[i]]=arr[i]   
    }
    return str.join("")
};