/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    while(true) {
        if(p.val > root.val && q.val > root.val) { //Both p and q are in the right subtree
            root = root.right
        } else if (p.val < root.val && q.val < root.val) { //Both p and q are in the left subtr
            root = root.left
        } else {// Found the split point or one of the nodes
            return root 
        }
    }
};