/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    // create hash map to map and store node : it's copy
    const oldToNew = new Map()
    // Start the DFS traversal and cloning process
    return dfs(node, oldToNew);
};

var dfs = function(node, oldToNew) {
    // Base case: If node is null, return null
        if (node === null) return null;

        // If the node has already been cloned, return the cloned version
        if (oldToNew.has(node)) {
            return oldToNew.get(node);
        }

        // Create a copy of the current node
        const copy = new Node(node.val);
        // Store the copy in the map before processing neighbors (to handle cycles)
        oldToNew.set(node, copy);

        // Recursively clone all neighbors
        for (const neighbor of node.neighbors) {
            copy.neighbors.push(dfs(neighbor, oldToNew));
        }

        // Return the cloned node
        return copy;
}