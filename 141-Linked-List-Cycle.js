/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let slow = head
    let fast = head

    while(fast !== null && fast.next !== null){
        //Shift pointers to meet
        slow = slow.next
        fast= fast.next.next

        //check if there is a cycle if there meet each other
        if(fast === slow){
            return true
        }
    }
    return false
};