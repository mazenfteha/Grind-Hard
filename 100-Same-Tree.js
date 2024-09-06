/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    //base case
    // if the both are empty 
    if (!p && !q) return true

    //if two are not empty 
    if(p && q && p.val === q.val) {
        return ( isSameTree(q.left, p.left) && isSameTree(q.right, p.right) )
    } else { //one of them are empty
        return false 
    }
    
};