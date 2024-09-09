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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const res = []
    const q = []

    if (root) {     // If the root is not null, start by adding it to the queue
        q.push(root)
    }

    while (q.length > 0) { // Keep running until the queue is empty
        const val = []

        for (let i = 0, len = q.length; i < len; i++) {
            const node = q.shift();  // Dequeue the node from the front of the queue
            val.push(node.val);      // Add the node's value to the current level's list
            if (node.left) {         // If the node has a left child, enqueue it
                q.push(node.left);
            }
            if (node.right) {        // If the node has a right child, enqueue it
                q.push(node.right);
            }
        }
        res.push(val);  // Add the current level's values to the result array
    }
    return res; 
};