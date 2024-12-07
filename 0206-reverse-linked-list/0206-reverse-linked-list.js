/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    if (!head) return head
    let cur = head
    let pre = null
    let nxt = null
    while (cur) {
        nxt = cur.next
        cur.next = pre
        pre = cur
        cur = nxt
    }
    return pre
};