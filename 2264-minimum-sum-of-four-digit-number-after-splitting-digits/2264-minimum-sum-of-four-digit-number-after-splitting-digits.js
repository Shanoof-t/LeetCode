/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {
    let values = num.toString().split("").sort()
    let num1 = values[0] + values[3]
    let num2 = values[1] + values[2]
    let res = parseInt(num1) + parseInt(num2)
    return res
};