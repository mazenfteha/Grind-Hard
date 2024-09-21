/* Queue
 * A Queue is a data structure that allows you to add an element to the end of
 * a list and remove the item at the front. A queue follows a FIFO (First In First Out)
 * system, where the first item to enter the queue is the first to be removed,
 * All these operation complexities are O(1).
 */

class Queue {
    constructor() {
        this.queue = []
        this.rear = 0
        this.front = 0
    }
    // Add an element to the end of the queue
    enqueue(element){
        this.queue[this.rear] = element
        this.rear++
    }
    // Remove and return the element at the front of the queue
    dequeue(){
        const result = this.queue[this.front]
        delete this.queue[this.front]
        this.front++
        return result
    }
    // Return the element at the front of the queue without removing it
    peek(){
        if(this.isEmpty()) return null
        return this.queue[this.front]
    }
    isEmpty(){
        return this.rear - this.front === 0
    }
    size(){
        return this.rear - this.front
    }
    print(){
        console.log(this.queue.toString());
    }
}
