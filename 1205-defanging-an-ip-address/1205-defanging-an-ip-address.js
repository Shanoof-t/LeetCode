/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let add = address.split(".").join("[.]")
    return add
};