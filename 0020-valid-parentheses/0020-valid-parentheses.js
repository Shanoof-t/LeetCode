/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = []
    for (let x of s) {
        if (x === '(' || x === '{' || x === '[') {
            stack.push(x)
        } else {
            if (!stack.length ||
                (x === ')' && stack[stack.length - 1] !== '(') ||
                (x === '}' && stack[stack.length - 1] !== '{') ||
                (x === ']' && stack[stack.length - 1] !== '[')) {
                return false
            }
            stack.pop()
        }
    }
    return !stack.length
};
