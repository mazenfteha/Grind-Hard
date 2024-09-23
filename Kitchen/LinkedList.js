// Node class represents each element (node) in the linked lis
class Node {
  constructor(value) {
    this.value = value
    this.next = null  // Pointer to the next node
  } 
}

class LinkedList {
  constructor() {
    this.head = null // Start of the list (initially empty)
    this.size = 0
  }

  // Check if the list is empty
  isEmpty() {
    return this.size === 0
  }

  // Get the current size of the list
  getSize(){
    return this.size
  }

  // Add a new node at start of the list
  prepend(value) {
    const node = new Node(value); // Create a new node
        if(this.isEmpty()) {          // If list is empty
            this.head = node;         // Set the new node as the head
        } else {
            node.next = this.head;    // Point new node to current head
            this.head = node;         // Update head to new node
        }
        this.size++;                  // Increment the size of the list
    }

  // Add new node at the end of list 
  append(value) {
    const node = new Node(value); // Create a new node
        if (this.isEmpty()) {         // If list is empty
            this.head = node;         // Set the new node as the head
        } else {
            let prev = this.head;     // Start at the head
            // Traverse to the last node
            while(prev.next !== null) {
                prev = prev.next;
            }
            prev.next = node;         // Set the last node's next to the new node
        }
        this.size++;                  // Increment the size of the list
  }

      // Insert a new node at a given index
    insert(value, index){
        if (index < 0 || index > this.size) { // Validate index
            console.log('Index is invalid');
            return;
        }
        if (index === 0) {             // If inserting at the start
            this.prepend(value);       // Use the prepend method
        } else {
            const node = new Node(value); // Create a new node
            let prev = this.head;         // Start at the head
            // Traverse to the node before the index
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            // Insert the node by rearranging pointers
            node.next = prev.next;
            prev.next = node;
            this.size++;                 // Increment the size of the list
        }
    }

    // Remove a node from a given index in the list
    removeFrom(index){
        if (index < 0 || index >= this.size) { // Validate index
            console.log('Index is invalid');
            return null;
        } 
        let removeNode; // Variable to hold the removed node
        if (index === 0) {               // If removing the first node
            removeNode = this.head;      // Set the head as the node to remove
            this.head = this.head.next;  // Update head to the next node
        } else {
            let prev = this.head;        // Start at the head
            // Traverse to the node before the index
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            // Remove the node by rearranging pointers
            removeNode = prev.next;
            prev.next = removeNode.next;
        }
        this.size--; // Decrement the size of the list
        return removeNode.value; // Return the value of the removed node
    } 

    // Remove a node by its value
    removeValue(value){
        if (this.isEmpty()) { // Check if the list is empty
            return 'No node found';
        }
        if (this.head.value === value) { // If the value is at the head
            this.head = this.head.next;  // Update head to the next node
            this.size--;                 // Decrement the size
            return `The node with value ${value} deleted`;
        } else {
            let prev = this.head;        // Start at the head
            // Traverse until we find the node with the value
            while (prev.next && prev.next.value !== value) {
                prev = prev.next;
            }
            if (prev.next) {             // If node with value found
                const removeNode = prev.next; // Set node to remove
                prev.next = removeNode.next;  // Remove the node by rearranging
                this.size--;             // Decrement the size
                return `The node with value ${value} deleted`;
            } else {
                return null; // If node with the value is not found
            }
        }
    }

    // Search for a node by value, return its index
    search(value) {
        if (this.isEmpty()) { // Check if the list is empty
            return -1; // Return -1 if not found
        }
        let current = this.head; // Start at the head
        let i = 0;               // Initialize index
        // Traverse the list to find the value
        while (current) {
            if (current.value === value) { // If value found
                return i; // Return the index
            }
            current = current.next; // Move to the next node
            i++; // Increment index
        }
        return -1; // Return -1 if value is not found
    }

    // Reverse the linked list
    reverse(){
        let prev = null;          // Previous node (starts as null)
        let current = this.head;  // Current node starts at head
        while(current) {          // Traverse the list
            let next = current.next; // Store the next node
            current.next = prev;     // Reverse the pointer
            prev = current;          // Move prev to the current node
            current = next;          // Move current to the next node
        }
        this.head = prev;         // Update the head to the new first node
    }

    // Print all values in the list
    print() {
        if(this.isEmpty()){       // Check if the list is empty
            console.log('The list is empty');
        } else {
            let current = this.head; // Start at the head
            // Traverse and print each node's value
            while(current !== null) {
                console.log(current.value);
                current = current.next; // Move to the next node
            }
        }
    }
  
}
