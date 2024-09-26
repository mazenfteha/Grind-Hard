class TrieNode {
    constructor() {
        this.end = false;
        this.children = {};
    }
}

class Trie {
    constructor() {
        // Initializes the Trie with a root node.
        this.root = new TrieNode();
    }

    /**
     * Iterates through each character in the word.
    * Creates a new node if the character does not exist in the current node's children.
    * Moves to the next node.
    * Marks the end of the word.
     * @param {*} word 
     * @returns boolean
     */

    insert(word) {
        let currentNode = this.root;
        for (let char of word) {
            if (!currentNode.children[char]) {
                currentNode.children[char] = new TrieNode();
            }
            currentNode = currentNode.children[char];
        }
        currentNode.end = true;
    }

    /**
     * Iterates through each character in the word.
    * Checks if the character exists in the current node's children.
    * Moves to the next node.
    * Returns true if the end of the word is reached and isEndOfWord is true.
     * @param {*} word 
     * @returns boolean
     */

    search(word) {
        let currentNode = this.root;
        for (let char of word) {
            if (!currentNode.children[char]) {
                return false;
            }
            currentNode = currentNode.children[char];
        }
        return currentNode.end;
    }

    /**
     * Iterates through each character in the prefix.
    * Checks if the character exists in the current node's children.
    * Moves to the next node.
    * Returns true if the prefix is found.
     * @param {*} prefix 
     * @returns boolean
     */

    startsWith(prefix) {
        let currentNode = this.root;
        for (let char of prefix) {
            if (!currentNode.children[char]) {
                return false;
            }
            currentNode = currentNode.children[char];
        }
        return true;
    }
}

const trie = new Trie();
trie.insert("cat");
trie.insert("cap");
trie.insert("bat");

console.log(trie.search("cat")); // Output: true
console.log(trie.search("cap")); // Output: true
console.log(trie.search("bat")); // Output: true
console.log(trie.search("can")); // Output: false

console.log(trie.startsWith("ca")); // Output: true
console.log(trie.startsWith("bat")); // Output: true
console.log(trie.startsWith("ba")); // Output: true
console.log(trie.startsWith("bad")); // Output: false
