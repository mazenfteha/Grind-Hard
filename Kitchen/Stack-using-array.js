/* Stack!! O(1)
 * A stack is exactly what it sounds like. An element gets added to the top of
 * the stack and only the element on the top may be removed. This is an example
 * of an array implementation of a Stack. So an element can only be added/removed
 * from the end of the array.
 * LIFO : Last in first out 
 */

class Stack {
    constructor() {
          this.stack = []
    }

    // Add an element to the top of the stack
    push(element) {
        this.stack.push(element)
    }

    // Remove and return the element at the top of the stack
    pop() {
        return this.stack.pop()
    }

    // Return the element at the top of the stack without removing it
    peek() {
        return this.stack[this.stack.length - 1]
    }

    // Check if the stack is empty
    isEmpty() {
        return this.stack.length === 0
    }

    // Return the number of elements in the stack
    size() {
        return this.stack.length
    }

    print() {
        console.log(this.stack.join(' -> '))
    }
}
