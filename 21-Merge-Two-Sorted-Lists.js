/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const dummy = { val : 0 , next : null }
    let node = dummy

    while(list1 && list2) { // untill one of two lists become null
        //compare and link nodes

        if(list1.val < list2.val) {
            node.next = list1
            list1 = list1.next
        } else {
            node.next = list2
            list2 = list2.next
        }
        //move node pointer next
        node = node.next
    }
    //Attach the remaining nodes
        if(list1) {
            node.next = list1
        } else if (list2) {
            node.next = list2
        }

        return dummy.next
};