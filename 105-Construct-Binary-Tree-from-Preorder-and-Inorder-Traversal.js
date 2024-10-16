/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
     //base case 
    if(!preorder.length || !inorder.length) return null

    // create a BST
    let root = new TreeNode(preorder[0]) // get the root
    let mid = inorder.indexOf(preorder[0]) // get the index of it

    //build the left side recursivly 
    root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid))

    //build the right side recursivly
    root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1))

    return root

};