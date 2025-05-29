/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
    let result = []
    for (let i = left; i <= right; i++) {
        let flag = true
        let value = i.toString().split("")
        for (let j = 0; j < value.length; j++) {
            if (i % Number(value[j]) !== 0) {
                flag = false
            }
        }
        if(flag){
            result.push(i)
        }
    }
    return result
};