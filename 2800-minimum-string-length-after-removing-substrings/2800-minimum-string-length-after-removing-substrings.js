/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
    // let stack = []
    // for (let c of s) {
    //     if (stack.length > 0 && (stack[stack.length - 1] === 'A' && c === "B") || (stack[stack.length - 1] === 'C' && c === "D")) {
    //         stack.pop()
    //     } else {
    //         stack.push(c)
    //     }
    // }
    // return stack.length

    for (i = 0; i < s.length; i++) {
        while(s.includes('AB') || s.includes('CD')) {
            if (s.includes('AB')) {
                s = s.replace('AB', '')
            }
            if (s.includes('CD')) {
                s = s.replace('CD', '')
            }
        }
    }
    return s.length
};