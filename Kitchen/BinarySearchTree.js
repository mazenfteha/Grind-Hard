// Node class representing each node in the tree
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;  // Left child
        this.right = null; // Right child
    }
}

// Binary Search Tree (BST) class
class BinarySearchTree {
    constructor() {
        this.root = null;  // Initially the tree is empty, so root is null
    }

    // Check if the tree is empty (no nodes)
    isEmpty() {
        return this.root === null;
    }

    // Insert a new value into the BST
    insert(value) {
        const node = new Node(value);  // Create a new node
        if (this.isEmpty()) {
            // If the tree is empty, the new node becomes the root
            this.root = node;
        } else {
            // If the tree is not empty, find the correct position to insert the node
            this.inserNode(this.root, node);
        }
    }

    // Helper function to recursively find the correct position for the new node
    inserNode(root, node) {
        if (node.value < root.value) {
            // If the new node's value is smaller, go to the left subtree
            if (root.left === null) {
                // If the left child is empty, insert the new node here
                root.left = node;
            } else {
                // Otherwise, keep searching in the left subtree
                this.inserNode(root.left, node);
            }
        } else {
            // If the new node's value is greater or equal, go to the right subtree
            if (root.right === null) {
                // If the right child is empty, insert the new node here
                root.right = node;
            } else {
                // Otherwise, keep searching in the right subtree
                this.inserNode(root.right, node);
            }
        }
    }

    // Search for a value in the BST
    search(root, value) {
        if (!root) {
            // If the root is null, the value is not found
            return false;
        } else {
            if (value === root.value) {
                // If the value matches the root, return true (value found)
                return true;
            } else if (value < root.value) {
                // If the value is smaller, search in the left subtree
                return this.search(root.left, value);
            } else {
                // If the value is greater, search in the right subtree
                return this.search(root.right, value);
            }
        }
    }

    // Depth First Search (DFS) :
  
    // Pre-order traversal: Visit root, then left subtree, then right subtree
    preOrder(root) {
        if (root) {
            console.log(root.value);  // Visit the root
            this.preOrder(root.left);  // Recursively visit the left subtree
            this.preOrder(root.right); // Recursively visit the right subtree
        }
    }

    // In-order traversal: Visit left subtree, then root, then right subtree
    inOrder(root) {
        if (root) {
            this.inOrder(root.left);   // Recursively visit the left subtree
            console.log(root.value);   // Visit the root
            this.inOrder(root.right);  // Recursively visit the right subtree
        }
    }

    // Post-order traversal: Visit left subtree, right subtree, then root
    postOrder(root) {
        if (root) {
            this.postOrder(root.left);  // Recursively visit the left subtree
            this.postOrder(root.right); // Recursively visit the right subtree
            console.log(root.value);    // Visit the root
        }
    }

    // Level-order traversal (Breadth-First Search)
    inOrderLevel() {
        const queue = [];
        queue.push(this.root);  // Start with the root node

        // While there are nodes to process
        while (queue.length) {
            let current = queue.shift(); // Remove and return the front element from the queue
            console.log(current.value);  // Process the current node (print its value)

            // Add the left and right children to the queue (if they exist)
            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }
        }
    }

    // Find the minimum value in the tree (leftmost node)
    min(root) {
        if (!root.left) {
            // If there's no left child, the current node is the minimum
            return root.value;
        } else {
            // Otherwise, recursively check the left subtree
            return this.min(root.left);
        }
    }

    // Find the maximum value in the tree (rightmost node)
    max(root) {
        if (!root.right) {
            // If there's no right child, the current node is the maximum
            return root.value;
        } else {
            // Otherwise, recursively check the right subtree
            return this.max(root.right);
        }
    }
}

// Example usage of the BinarySearchTree
const BST = new BinarySearchTree();

console.log(BST.isEmpty()); // true, since the tree is initially empty

// Insert values into the BST
BST.insert(10);
BST.insert(5);
BST.insert(15);
BST.insert(3);
BST.insert(7);

// Search for values in the BST
console.log(BST.search(BST.root, 10)); // true, 10 is in the tree
console.log(BST.search(BST.root, 5));  // true, 5 is in the tree
console.log(BST.search(BST.root, 15)); // true, 15 is in the tree
console.log(BST.search(BST.root, 20)); // false, 20 is not in the tree

// Pre-order, in-order, and post-order traversal
console.log('********************************preOrder**************************');
BST.preOrder(BST.root);  // Output: 10 5 3 7 15

console.log('********************************inOrder**************************');
BST.inOrder(BST.root);   // Output: 3 5 7 10 15

console.log('********************************postOrder**************************');
BST.postOrder(BST.root); // Output: 3 7 5 15 10

// Level-order traversal
console.log('********************************levelOrder**************************');
BST.inOrderLevel();      // Output: 10 5 15 3 7

// Find the minimum and maximum values in the BST
console.log('********************************min&max**************************');
console.log(BST.min(BST.root)); // 3
console.log(BST.max(BST.root)); // 15
