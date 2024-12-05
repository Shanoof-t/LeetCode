/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
    let node = head
    let value = []
    while (node) {
        value.push(node.val)
        node = node.next
    }
    value = value.join("").toString()
    return parseInt(value,2)
};