/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let n = 0 // counter to kket track the number of nodes
    let stack = []
    let curr = root 

    while(stack.length !== 0 || curr !== null) {
        while(curr !== null) { 
            stack.push(curr)
            curr = curr.left // Traverse Left Subtree
        }
        curr = stack.pop() // Pop the node from the stack (in-order).
        n = n + 1

        if(n == k) return curr.val

        curr = curr.right // Traverse Right Subtree
    }
};