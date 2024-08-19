/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    let str=s.split("")
    for(i=0;i<str.length;i++){
        if(str[i] == str[i].toUpperCase()){
            str[i] = str[i].toLowerCase()
        }
    }
    let result =str.join("")
    return result
};