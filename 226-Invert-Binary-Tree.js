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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    //base case 
    if(!root) return null

    const node = new TreeNode(root.val)
    //swap children
    node.right = invertTree(root.left)
    node.left = invertTree(root.right)

    return node
    
};