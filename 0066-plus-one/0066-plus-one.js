/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let num = BigInt(digits.join(""))
    let inc = String(BigInt(num)+1n)
    let res = inc.split("").map(Number)
    return res
};