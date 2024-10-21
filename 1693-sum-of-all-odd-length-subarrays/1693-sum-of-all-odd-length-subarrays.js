/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
    let res = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if ((i - j) % 2 == 0) {
                for (let k = i; k <= j; k++) {
                    res += arr[k]
                }
            }
        }
    }
    return res
};