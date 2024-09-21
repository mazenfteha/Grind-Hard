/* Queue
 * A Queue is a data structure that allows you to add an element to the end of
 * a list and remove the item at the front. A queue follows a FIFO (First In First Out)
 * system, where the first item to enter the queue is the first to be removed,
 * All these operation complexities are O(1).
 * This implementation following the linked list structure.
 */

class Queue {
    constructor(){
        this.queue = []
    }
    //Add a new element to the end of the queue
    enqueue(element){
        this.queue.push(element)
    }
    //Remove the element from the front of the queue and return it
    dequeue(){
        if(this.isEmpty()) return null
        return this.queue.shift()
    }
    //Return the element at the front of the queue without removing it
    peek(){
        if (this.isEmpty()) return null
        return this.queue[0]
    }
    //Check if the queue is empty
    isEmpty(){
        return this.queue === 0
    }
    //Return the number of elements in the queue
    size(){
        return this.queue.length
    }
    //Print the elements of the queue in the console
    print(){
        console.log(this.queue.toString()) ;
    }
}

