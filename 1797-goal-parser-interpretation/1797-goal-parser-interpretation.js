/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (c) {
    let str = ""
    let val = ""
    for (let x of c) {
        val += x
        if (val === "G") {
            str += "G"
            val = ""
        } else if (val === "()") {
            str += "o"
            val = ""
        } else if (val === "(al)") {
            str += "al"
            val = ""
        }
    }

    return str
};