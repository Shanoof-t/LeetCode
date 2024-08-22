/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let s = num.toString(2)
    let arr=s.split("")
    let res =arr.map(x=>{
        if(x ==0){
            return 1
        }else{
            return 0
        }
    })
    let a =res.join("")
    let n =parseInt(a,2)
    return n
};