/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let slow = head
    let fast = head.next

    // Find the middlew of the list using fast and slow pointers
    while(fast !== null && fast.next !== null){
        //shift pointers
        slow = slow.next
        fast = fast.next.next
    }

    // Reverse the second half of the list
    let second = slow.next
    let prev = (slow.next = null)

    while(second !== null) {
        //save next node 
        let temp = second.next
        //reverse cuurent node pointer
        second.next = prev
        //move prev to current node
        prev = second 
        // advance to the next node
        second = temp
    }

    // merging the two halves
    let first = head
    second = prev

    while(second !== null){
        //save next nodes
        let temp1 = first.next
        let temp2 = second.next

        //Link nodes
        first.next = second
        second.next = temp1

        //Advance node
        first = temp1
        second = temp2
    }
};