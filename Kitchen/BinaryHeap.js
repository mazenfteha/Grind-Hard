class MinHeap {
    constructor() {
        this.heap = []
    }

    getParentIndex(index) {
        // Parent index formula: (index - 1) / 2
        return Math.floor((index - 1) / 2)
    }

    getLeftChildIndex(index) {
        // Left child index formula: 2 * index + 1
        return 2 * index + 1
    }

    getRightChildIndex(index) {
        // Left child index formula: 2 * index + 2
        return 2 * index + 2
    }

    insert(value) {
        // Add the value to the end of the heap
        this.heap.push(value)
         // Restore the heap property
        this.heapifyUp()
    }

    /**
     *  restores the heap property after insertion
     * Starting from the last element
     * it compares the element with its parent. 
     * If the element is smaller than its parent it swaps them.
     * This process repeats until the heap
     *  property is restored or the element becomes the root.
     */
    heapifyUp() {
        // Start from the last element
        let index = this.heap.length - 1;
        // Continue until the heap property is restored
        while (
            this.getParentIndex(index) >= 0 &&
            this.heap[this.getParentIndex(index)] > this.heap[index]
        ) {
            // Swap the element with its parent
            [this.heap[this.getParentIndex(index)], this.heap[index]] = [this.heap[index], this.heap[this.getParentIndex(index)]];
             // Move up to the parent index
            index = this.getParentIndex(index);
        }
    }

    removeMin() {
        // If the heap is empty, return null
        if (this.heap.length === 0) return null
        // If the heap has only one element, remove and return it
        if (this.heap.length === 1) return this.heap.pop

        // Save the minimum value (root)
        const min = this.heap[0];
        // Replace the root with the last element
        this.heap[0] = this.heap.pop();
        // Restore the heap property
        this.heapifyDown();
        // Return the minimum value
        return min;
    }

    heapifyDown() {
        // Start from the root
        let index = 0;
           // Continue until the heap property is restored
        while (this.getLeftChildIndex(index) < this.heap.length) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            if (this.getRightChildIndex(index) < this.heap.length && this.heap[this.getRightChildIndex(index)] < this.heap[smallerChildIndex]) {
                smallerChildIndex = this.getRightChildIndex(index);
            }
            if (this.heap[index] < this.heap[smallerChildIndex]) break;
            // Swap the element with its smaller child
            [this.heap[index], this.heap[smallerChildIndex]] = [this.heap[smallerChildIndex], this.heap[index]];
            // Move down to the smaller child index
            index = smallerChildIndex;
        }
    }

    peek(){
        // Return the root (minimum value) without removing it
        if(this.heap.length === 0) return null
        return this.heap[0]
    }
}

const minHeap = new MinHeap();
minHeap.insert(3);
minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(1);

console.log(minHeap.peek()); // 1
console.log(minHeap.removeMin()); // 1
console.log(minHeap.peek()); // 3
