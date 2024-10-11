/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let n = num.toString().split("")
    let res = num
    let l =0
    let r = n.length
    while(l<r){
        if(n[l] == "9" ){
            n[l] = "6"
        }else {
            n[l] ="9"
        }
        let val = n.join("")
        let v= parseInt(val)
        
        if(res<v){
            res =v
        }
        n = num.toString().split("")
        l++
    }
    return res
};